import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(modalName, controller, model) {
      var params = {
        outlet: 'modal',
        into: 'application'
      };

      if (controller) {
        params.controller = controller;
      }

      if (model) {
        if (typeof model === 'string') {
          model = this.store.createRecord(model);
        }
        params.model = model;
      }

      this.render(modalName, params);
    },
    closeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
