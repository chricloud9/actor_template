(function(app){
  app.AppComponent =
    ng.core.Component({
      selector: 'actor-template'
      template: '../charley_morgan.html'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
