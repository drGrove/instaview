'use strict';

angular.module('instaviewApp')
  .controller('MainCtrl', function ($scope, Instagram) {
    $scope.images = [];
    Instagram.fetchLocation('media/search', 'sf').then(function(res){
      $scope.images = res.data.data
    })
  });
