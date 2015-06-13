import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancel: function() {
      this.send('closeModal');
    },
    delete: function() {
      var model = this.get('model'),
          self  = this;

      model.get('artist').then(function(artist) {
        model.get('artist').get('albums').then(function(albums) {
          albums.removeObject(model);
          artist.save().then(function() {
            console.log('The artist was updated! Album removed.');

            model.destroyRecord().then(function() {
              console.log('The album was deleted!');
              self.send('closeModal');
            }, function() {
              console.log('Oh shit! The album was NOT deleted!');
            });

            self.send('closeModal');
          });
        });
      });
    }
  }
});
