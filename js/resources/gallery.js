import Backbone from 'backbone';
import Photo from './picture';
import APP_URL from './parse_info';

export default Backbone.Collection.extend({

  url: 'APP_URL',

  model: Photo,

  parse(data) {
    return.data.results;
  }


});