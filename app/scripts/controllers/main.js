'use strict';

angular.module('instaviewApp')
  .controller('MainCtrl', function ($scope, Instagram, $window, $modal, $location) {
    $scope.images = [];
    $scope.locations = Instagram.locations;
    $scope.city = $window.location.hash.split('/')[1]
    Instagram.fetchLocation('media/search', $scope.city).then(function(res){
      if(res !== false)
        $scope.images = res.data.data
      else
        $location.path('/sf');
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
