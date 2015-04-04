import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancel: function() {
      this.send('closeModal');
    },
    delete: function() {
      var model = this.get('model'),
          self  = this;

      model.destroyRecord().then(function() {
        console.log('The artist was deleted!');
        self.send('closeModal');
      }, function() {
        console.log('Oh shit! The artist was NOT deleted!');
      });
    }
  }
});
