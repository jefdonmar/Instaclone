import Backbone from 'backbone';
import $ from 'jquery';
import React from 'react';
import ReactDom from 'react-dom';

import {Gallery as GalleryCollection} from './resources';
import {Photo as PhotoModel} from './resources';

import {Gallery as GalleryView} from './views';
import {Photo as PhotoView} from './views';
import {Add} from './views';
import {Edit} from './views';
import {Spinner} from './views';

export default Backbone.Router.extend({

  routes: {
    "": "redirectToGallery",
    "gallery": "showGallery",
    "photo/:id": "showPost",
    "add": "addForm",
    "edit/:id": "editForm"
  },

  initialize(appElement) {
    this.el = appElement;
    this.collection = new GalleryCollection();
  },

  render(component) {
    ReactDom.render(component, this.el);
  },

  start() {
    Backbone.history.start();
    return this;
  },

  goto(route) {
    this.navigate(route, {trigger: true});
  },

  redirectToGallery() {
    this.navigate('gallery', {replace: true, trigger: true});
  },

  spinner() {
    this.render(<Spinner/>);
  },

  showGallery() {
    this.spinner();
    this.collection.fetch().then( () => {
      this.render(<GalleryView 
        id={this.collection.objectId}
        onHomeClick={() => this.goto('')} 
        onAddClick={() => this.goto('add')} 
        onEditClick={() => this.goto('edit/' + id)}
        onClick={(id) => this.goto('photo/' + id)} 
        images={this.collection.toJSON()}/>);
    });
  },

  showPost(id) {
    this.spinner();
    let photo = this.collection.get(id);

    if (photo) {
      this.render(<PhotoView 
        images={photo.toJSON()}
        onHomeClick={() => this.goto('')}
        onAddClick={() => this.goto('add')}
        onEditClick={() => this.goto('edit/' + id)}/>);
    } else {
      console.log('adding dis here');
      photo = this.collection.add(id);
      photo.fetch().then( () => {
        this.render(<PhotoView 
          images={photo.toJSON()}
          onHomeClick={() => this.goto('')}
          onAddClick={() => this.goto('add')}
          onEditClick={() => this.goto('edit/' + id)}/>);
      });
    }
  },

  addForm() {
    this.spinner();
    this.render(<Add 
      images={this.collection.toJSON()}
      onHomeClick={() => this.goto('')}
      onAddClick={() => this.goto('add')}
      onSubmitClick={() => {
        let newUser = document.querySelector('.user').value;
        let newPhoto = document.querySelector('.photo').value;
        let newCaption = document.querySelector('.caption').value;

        let instaModel = new PhotoModel({
          user: newUser,
          photo: newPhoto,
          caption: newCaption
        });

        instaModel.save().then(() => {
          alert('Here ya go addition!');
          this.goto('');
        });}}/>      
    );
  },

  editForm(id) {
    this.spinner();
    let getId = this.collection.get(id);
    console.log(getId);
    this.render(<Edit
      images={this.collection.toJSON()}
      stored= {getId.toJSON()}
      onBackClick={() => this.goto('photo/' + id)}
      onHomeClick={() => this.goto('')}
      onAddClick={() => this.goto('add')}
      onSubmitChangesClick={(id, url, caption) => {
      this.saveChanges(id, url, caption);}}/>
    );
  },

  saveChanges(id, url, caption) {
    this.collection.get(id).save({
      objectId: id,
      photo: url,
      caption: caption
    }).then(() => {
      alert('You have been save Neo');
      this.goto('');
    });
  }

});
