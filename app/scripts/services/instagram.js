'use strict';

angular.module('instaviewApp')
  .factory('Instagram', function ($http) {
    var dist = 3000;
    var locations =
    { 'sf':
      { lat: 37.774929
      , lng: -122.419416
      , distance: dist
      }
    , 'ny':
      { lat: 0
      , lng: 0
      , distance: dist
      }
    }

    var endpoint = "https://api.instagram.com/v1/"
    var clientId = "340e2aa1f97d48f09a7aef4ea49f2cd7"

    // Public API here
    return {
      fetchLocation: function (path, loc) {
        var params = {}
        if(locations[loc]){
          params = locations[loc]
        }
        params.client_id = clientId
        params.callback = "JSON_CALLBACK"
        return $http.jsonp(endpoint + path, {params: params})
      }
    };
  });
