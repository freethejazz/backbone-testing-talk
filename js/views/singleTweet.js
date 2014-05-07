define([
  'backbone',
  'underscore',
  'hbs!tmpl/singleTweet'
], function(Backbone, _, singleTweetTmpl) {

  var SingleTweetView = Backbone.View.extend({
    render: function() {
      this.$el.html(singleTweetTmpl());

      return this;
    }
  });

  return SingleTweetView;
});
