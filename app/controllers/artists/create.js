import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancel: function() {
      this.get('model').deleteRecord();
      this.send('closeModal');
    },
    create: function() {
      var model = this.get('model'),
          self  = this;

      model.save().then(function() {
        console.log('The artist was created!');
        self.send('closeModal');
      }, function() {
        console.log('Oh shit! The artist was NOT created!');
      });
    }
  }  
});
