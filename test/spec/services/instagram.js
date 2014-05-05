'use strict';

describe('Service: instgram', function () {

  // load the service's module
  beforeEach(module('instaviewApp'));

  // instantiate service
  var instgram;
  beforeEach(inject(function (_instgram_) {
    instgram = _instgram_;
  }));

  it('should do something', function () {
    expect(!!instgram).toBe(true);
  });

});
