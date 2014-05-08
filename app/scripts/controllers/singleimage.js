'use strict';

angular.module('instaviewApp')
  .controller('SingleImageCtrl', function ($scope, $modalInstance, image) {
    $scope.image = image;
    $scope.mapActive = false;
    $scope.commentsActive = false;
    $scope.tagsActive = false;
    $scope.likesActive = false;
    angular.extend
    ( $scope
    , { map:
        { center: image.location
        , zoom: 14
        , draggable: true
        , control: {}
        , options:
          { maxZoom: 14
          , minZoom: 14
          , zoomControl: false
          }
        }
      }
    )

    $scope.toggleMap = function(){
      $scope.mapActive = $scope.mapActive ? false : true;
    }
    $scope.toggleComments = function(){
      $scope.commentsActive = $scope.commentsActive ? false : true;

    }
    $scope.toggleTags = function(){
      $scope.tagsActive = $scope.tagsActive ? false : true;

    }
    $scope.toggleLikes = function(){
      $scope.likesActive = $scope.likesActive ? false : true;

    }
    $scope.close = function(){
      $modalInstance.dismiss();
    }
  });
