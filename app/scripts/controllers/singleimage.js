'use strict';

angular.module('instaviewApp')
  .controller('SingleImageCtrl', function ($scope, $modalInstance, image) {
    $scope.image = image;
  });
