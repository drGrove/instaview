'use strict';

angular.module('instaviewApp')
  .controller('MainCtrl', function ($scope, Instagram, $window) {
    $scope.images = [];
    Instagram.fetchLocation('media/search', 'sf').then(function(res){
      $scope.images = res.data.data
    })
    $scope.stack = function(){
     var stackX = 0;
      var stackY = 0;
      var photo = $window.document.getElementsByClassName('poloroid');
      /*
      photo.css({
        "-moz-transform": "rotate(0deg)",
        "-webkit-transform": "rotate(0deg)",
        "transform": "rotate(0deg)",
        "z-index": 0
      });
      */
      angular.forEach(photo, function() {
        stackX++;
        stackY++;
        jQuery(this).animate({
          "top": stackY,
          "left": stackX,
          "z-index": 0
        })
      });
    }
  });
