'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
  beforeEach(module('myApp.directives'));

  describe('mouseover directive', function() {
    var elm, scope; 
    beforeEach(inject(function($rootScope, $compile) {
      elm = angular.element(
        '<div mouseover="highlight" ></div>');

      scope = $rootScope;
      $compile(elm)(scope);
      scope.$digest();
    }));

    it("should give the element class highlight when mouser over", function() {
      elm.triggerHandler('mouseover');
        console.log(elm);
      expect(elm.hasClass('highlight')).toBe(true);
    });
  });
});
