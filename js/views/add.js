import React from 'react';

export default React.createClass({

  goHomeView() {
    console.log('heading home errbody');
    this.props.onHomeClick();
  },

  addNewPost() {
    console.log('push me so I can get my satisfaction');
    this.props.onSubmitClick();
  },

  render() {
    return (
      <div>
        <div className="header">
          <img src="https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s150x150/e35/11337222_942920095776342_853123879_n.jpg"/>
          <button onClick={() => this.goHomeView()}><i className="fa fa-home"></i> Back to Home</button>
          <hr/>
        </div> 
        <div className="new-post">
          <h2>Add New Post</h2>
          <form>
            <label>User: <input type="text" className="user"/></label> 
            <label>Image URL: <input type="text" className="photo"/></label>
            <label>Caption: <input type="text" className="caption"/></label>
            <button onClick={this.addNewPost}>Submit Post</button>
          </form>
        </div>
      </div>
    );
  }

});