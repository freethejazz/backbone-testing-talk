define([
  'js/models/tweetModel'
], function(TweetModel) {

  describe('a tweet model', function() {
    it('should contain defaults', function() {
      var aTweet = new TweetModel;

      expect(aTweet.get('isRead')).toBe(false);
    });

    it('allow toggling of the isRead property', function() {
      var aTweet = new TweetModel;

      aTweet.toggle();
      expect(aTweet.get('isRead')).toBe(true);
    });
  });

});
