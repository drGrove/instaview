'use strict';

angular.module('instaviewApp')
  .controller('MainCtrl', function ($scope, Instagram, $window, $modal, $location) {
    $scope.images = [];
    $scope.isAged = false;
    $scope.locations = Instagram.locations;
    $scope.city = $window.location.hash.split('/')[1]
    Instagram.fetchLocation('media/search', $scope.city).then(function(res){
      $scope.images = res.data.data
    })
    $scope.selectChange = function(){
      $location.path('/' + $scope.city)
    };
    $scope.displayImage = function(idx){
      if($scope.images[idx].dragging == false){
        $modal.open(
          { templateUrl: '/views/modals/imageView.html'
          , controller: 'SingleImageCtrl'
          , resolve:
            { image: function(){
                return $scope.images[idx];
              }
            }
          }
        )
      }
    }
  });
