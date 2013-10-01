'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  describe('todoController', function() {
  	var scope; 

  	beforeEach(inject(function($rootScope, $controller) {
  		scope = $rootScope.$new(); 
  		var ctrl = $controller('todoController', {$scope:scope}); 
  	})); 

  	it('should not have any todos', function() {
  		expect(scope.todos.length).toBe(0);
  	});

  	it('should have one todo after addTo has been called', function() {
  		scope.newtodo = {'todo' : 'I have to do important stuff'}; 
  		scope.addNewTodo(); 
  		expect(scope.todos.length).toBe(1);
  	});

  });

});
