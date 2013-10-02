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

    it('should make sure that differnt todos has different ids', function() {
      scope.newtodo = {'todo' : 'I have to do important stuff'}; 
      scope.addNewTodo(); 
      scope.newtodo = {'todo' : 'I have to some more important stuff'}; 
      scope.addNewTodo(); 
      expect(scope.todos[0].id).not.toBe(scope.todos[1].id);
    });

    it('should make sure that todo is marked as done when done method is called', function() {
      scope.newtodo = {'todo' : 'I have to do important stuff'}; 
      scope.addNewTodo(); 
      scope.setDone(scope.todos[0]); 
      console.log(scope.todos[0]);
      expect(scope.todos[0].done).toBe(true);
    });


  });

});
