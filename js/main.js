require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    hbs: '../bower_components/require-handlebars-plugin/hbs'
  },
  shim: {
    underscore: {
      exports: '_'
    }
  }
});

require([
  'jquery',
  'views/tweetList'
], function($, TweetList) {

  /**
   * A crude bootstrapping
   **/
  var list = new TweetList();
  list.render()
  $('#app-container').html(list.el);

});
