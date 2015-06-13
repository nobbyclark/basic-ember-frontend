import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('artists');
  this.route('artist', { path: '/artists/:artist_id' });
  this.route('albums');
  this.route('album', { path: '/albums/:album_id' });
});
