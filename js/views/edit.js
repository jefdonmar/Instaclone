import React from 'react';

export default React.createClass({

  getInitialState() {
    return ({
      objectId: this.props.stored.objectId,
      photo: this.props.stored.photo,
      caption: this.props.stored.caption
    });
  },

  setId(event) {
    let newId = event.currentTarget.value;

    this.setState({objectId: newId});
  },

  updatePhoto(event) {
    let newPhoto = event.currentTarget.value;

    this.setState({photo: newPhoto});
  },

  updateCaption(event) {
    let newCaption = event.currentTarget.value;

    this.setState({caption: newCaption});
  },

  goHomeView() {
    console.log('heading home errbody');
    this.props.onHomeClick();
  },

  addFormView() {
    console.log('push me so I can get my satisfaction');
    this.props.onAddClick();
  },

  addChanges(event) {
    event.preventDefault();
    this.props.onSubmitChangesClick(
      this.state.objectId,
      this.state.photo,
      this.state.caption
    );
  },

  goBackView() {
    this.props.onBackClick();
  },

  render() {
    return (
      <div>
        <div className="header">
          <img src=''/>
          <button onClick={() => this.goBackView()}><i className="fa fa-chevron-left"></i> Back to Photo</button>
          <button onClick={() => this.goHomeView()}><i className="fa fa-home"></i> Home</button>
          <button onClick={this.addFormView}><i className="fa fa-plus"></i> Add</button>
          <hr/>
        </div> 
        <div className="edit-post">
          <h2>Update/Edit Post</h2>
          <form>
            <label>Id: <input onChange={this.setId} type="text" className="id" value={this.state.objectId}/></label>
            <label>Image URL: <input onChange={this.updatePhoto} type="text" className="photo" value={this.state.photo}/></label>
            <label>Caption: <input onChange={this.updateCaption} type="text" className="caption" value={this.state.caption}/></label>
            <button onClick={this.addChanges}>Submit Changes</button>
          </form>
        </div>
      </div>
    );
  }


});