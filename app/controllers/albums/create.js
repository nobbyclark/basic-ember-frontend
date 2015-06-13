import Ember from 'ember';

export default Ember.Controller.extend({
  isDisabled: Ember.computed.equal('model.artist.content', null),

  artists: function() {
    return this.store.find('artist');
  }.property(),

  actions: {
    cancel: function() {
      this.get('model').deleteRecord();
      this.send('closeModal');
    },
    save: function() {
      var model = this.get('model'),
          artist = model.get('artist.content'),
          isNew = model.get('isNew'),
          self  = this;

      model.save().then(function(album) {

        if (isNew) {
          console.log('The album was created!');

          artist.get('albums').then(function() {
            artist.get('albums').pushObject(album);
            artist.save().then(function() {
              console.log('The artist was updated!');
              self.send('closeModal');
            });
          });
        } else {
          console.log('The album was updated!');
          self.send('closeModal');
        }
        
      }, function() {
        console.log('Oh shit! The artist was NOT created!');
      });
    }
  }  
});
