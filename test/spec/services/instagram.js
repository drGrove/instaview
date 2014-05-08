'use strict';

describe('Service: instagram', function () {

  // load the service's module
  beforeEach(module('instaviewApp'));

  // instantiate service
  var instagram;
  beforeEach(inject(function (_Instagram_) {
    instagram = _Instagram_;
  }));

  it('should do something', function () {
    expect(!!instagram).toBe(true);
  });

  it('should have some locations', function(){
    var locations = instagram.locations;
    expect(Object.keys(locations).length).toBeGreaterThan(0)
  })

  it('should return some images from instagram for San Francisco', function(){
    var path = 'media/search';
    var loc = 'sf';
    instagram.fetchLocation(path, loc).then(function(data){
      expect(data.data.data.length).toBeGreaterThan(1);
    })
  })

  it('should return false if the location is not in the service', function(){
    var path = 'media/search';
    var loc = 'nm';
    instagram.fetchLocation(path, loc).then(function(data){
      expect(data).toBe(false);
    })
  })

});
