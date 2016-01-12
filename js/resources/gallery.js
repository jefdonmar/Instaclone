import Backbone from 'backbone';
import Photo from './picture';

export default Backbone.Collection.extend({

  url: 'https://api.parse.com/1/classes/instaClone',
  model: Photo,
  parse: function(data) {
    return data.results;
  }

});