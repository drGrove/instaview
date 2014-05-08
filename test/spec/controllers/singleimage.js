'use strict';

describe('Controller: SingleimageCtrl', function () {

  // load the controller's module
  beforeEach(module('instaviewApp'));

  var SingleimageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SingleimageCtrl = $controller('SingleimageCtrl', {
      $scope: scope
    });
  }));
});
