'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).directive('mouseover', function () {
  	return function (scope, element, attrs) {
  		element.bind('mouseover', function() {
  			element.addClass(attrs.mouseover); 
  		});
  		element.bind('mouseleave', function() {
  			element.removeClass(attrs.mouseover); 
  		});
  	};
  });
