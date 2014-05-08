'use strict';

angular
  .module('instaviewApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:city', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/sf'
      });
  });
