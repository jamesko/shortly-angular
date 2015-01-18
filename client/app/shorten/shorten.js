angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(){
    if ($scope.newLink.search(/^http:\/\//) === -1) {
      $scope.newLink = "http://" + $scope.newLink;
    }
    Links.addLink({"url":$scope.newLink}).then(function(val) {
      console.log("You are here: " +val);
      $location.path("/links")
    });
  };

});
