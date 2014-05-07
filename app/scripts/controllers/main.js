'use strict';

angular.module('instaviewApp')
  .controller('MainCtrl', function ($scope, Instagram, $window, $modal) {
    $scope.images = [];
    $scope.isAged = false;
    $scope.city = $window.location.hash.split('/')[1]
    Instagram.fetchLocation('media/search', $scope.city).then(function(res){
      $scope.images = res.data.data
    })
    $scope.displayImage = function(idx){
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
  });
