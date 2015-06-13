import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: '_id',
  attrs: {
    albums: { serialize: 'ids', deserialize: 'ids' }
  }
});
