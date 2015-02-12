define([
  'js/collections/tweetCollection'
], function(TweetCollection) {

  describe('a tweet collection', function() {
    var server;
    beforeEach(function() {
      server = sinon.fakeServerWithClock.create();
      server.respondWith('/allTweets',
                         [
                           200,
                           {'Content-Type': 'application/json'},
                           '[{},{}]'
                         ]);
    });
    afterEach(function() {
      server.restore();
    });
    it('should have a working fetch', function() {

      var tweets = new TweetCollection;
      tweets.fetch();
      server.respond();

      expect(tweets.length).toBe(3);
    });
  });
});
