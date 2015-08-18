(function(){
  console.log("..........");

  var anNgApp = angular.module("anNgApp", []);

  var ngController1 = anNgApp.controller('ngController1', [function(){
    var self = this;
    self.data = [];
  }]);

})();