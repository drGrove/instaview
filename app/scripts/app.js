'use strict';

angular
  .module('instaviewApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/sf', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ny',
        { templateUrl: 'views/main.html'
        , controller: 'MainCtrl'
        }
      )
      .otherwise({
        redirectTo: '/sf'
      });
  });
