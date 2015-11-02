import React from 'react';

export default React.createClass({

  goHomeView() {
    this.props.onHomeClick();
  },

  addFormView() {
    this.props.onAddClick();
  },

  editFormView() {
    this.props.onEditClick();
  },

  render() {
    return (
      <div>
        <div className="header">
          <img src = 'https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e35/11337222_942920095776342_853123879_n.jpg'/>
          <button onClick={() => this.goHomeView()}><i className="fa fa-home"></i>Home</button>
          <button onClick={this.addFormView()}><i className="fa fa-plus"></i>Add</button>
          <button onClick={() => this.editFormView()}><i className="fa fa-pencil"></i>Edit</button>
          <hr/>
        </div>
        <div className="image-view" id={this.props.image.id}>
          <img src={this.props.images.photo}/>
          <p><span className="username">{this.props.image.user}</span> {this.props.images.caption}</p>
        </div>
      </div>
    );
  }
});