define([
  'backbone',
  'underscore',
  'js/models/tweetModel'
], function(Backbone, _, TweetModel) {

  var TweetCollection = Backbone.Collection.extend({
    model: TweetModel,
    url: '/allTweets'
  });

  return TweetCollection;
});
