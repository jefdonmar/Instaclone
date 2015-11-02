import React from 'react';

export default React.createClass({

  viewPhoto(id) {
    this.props.onClick(id); 
  },

  goHomeView() {
    console.log('headed home errbody');
    this.props.onHomeClick();
  },

  addFormView() {
    console.log('push me so I can get my satisfaction');
    this.props.onAddClick();
  },

  processData(data) {
    return (
      <div key={data.objectId}>
        <img id={data.objectId} onClick={() => this.viewPhoto(data.objectId)} src={data.photo}/>
      </div>
    );
  },

  render() {
    return (
      <div>
        <div id={this.props.images.id} className="header">
          <img src='https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e35/11337222_942920095776342_853123879_n.jpg'/>
          <button onClick={() => this.goHomeView()}><i className="fa fa-home"></i> Home</button>
          <button onClick={this.addFormView}><i className="fa fa-plus"></i> Add</button>
          <hr/>
        </div>      
        <div className="gallery-images">{this.props.images.map(this.processData)}</div>
      </div>
    );
  }

});