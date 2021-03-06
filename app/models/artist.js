import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string', { defaultValue: '' }),
  albums: DS.hasMany('album', { async: true, inverse: 'artist' })
});
