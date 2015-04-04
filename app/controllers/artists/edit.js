import Ember from 'ember';

export default Ember.Controller.extend({
  isDisabled: Ember.computed.not('model.isDirty'),

  actions: {
    cancel: function() {
      this.get('model').rollback();
      this.send('closeModal');
    },
    update: function() {
      var model = this.get('model'),
          self  = this;

      model.save().then(function() {
        console.log('The artist was updated!');
        self.send('closeModal');
      }, function() {
        console.log('Oh shit! The artist was NOT updated!');
      });
    }
  } 
});
