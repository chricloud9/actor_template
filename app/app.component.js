(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template : '<body cz-shortcut-listen="true"> <div class="container"> <div class="header clearfix"> <nav> <ul class="nav nav-pills pull-right"> <li role="presentation" class="active"><a href="http://getbootstrap.com/examples/jumbotron-narrow/#">Home</a></li><li role="presentation"><a href="http://getbootstrap.com/examples/jumbotron-narrow/#">About</a></li><li role="presentation"><a href="http://getbootstrap.com/examples/jumbotron-narrow/#">Contact</a></li><li role="presentation"><a href="http://getbootstrap.com/examples/jumbotron-narrow/#">Photos</a></li></ul> </nav> <h3 class="text-muted">Charley Morgan</h3> </div><div class="jumbotron"> <div id="video1" class="embed-responsive embed-responsive-16by9"> <iframe src="http://www.imdb.com/video/user/vi1113236505/imdb/embed?autoplay=false&width=650" width="650" height="365" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" frameborder="no" scrolling="no"></iframe> </div>',
      styleUrls: ['.././Narrow Jumbotron Template for Bootstrap_files/bootstrap.min.css','.././Narrow Jumbotron Template for Bootstrap_files/ie10-viewport-bug-workaround.css','.././Narrow Jumbotron Template for Bootstrap_files/jumbotron-narrow.css']
    })
    .Class({
      constructor: function() {
        console.log("kello?");
      }
    });
})(window.app || (window.app = {}));
