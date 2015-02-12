define([
  'backbone',
  'underscore'
], function(Backbone, _) {

  var SingleTweetModel = Backbone.Model.extend({
    defaults: {
      isRead: false
    },
    toggle: function() {
        this.set('isRead', !this.get('isRead'));
    }
  });

  return SingleTweetModel;
});
