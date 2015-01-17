angular.module('shortly.links', []) //['ui.bootstrap']

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks().then(function(val) {
      $scope.data.links = val;
    });
  };
  $scope.getLinks();

});

