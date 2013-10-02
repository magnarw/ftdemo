'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
  beforeEach(module('myApp.controllers'));

  describe('todoController', function() {
  	var scope, httpMock; 

  	beforeEach(inject(function($rootScope, $controller,$httpBackend) {
  		scope = $rootScope.$new();
      httpMock = $httpBackend;
      httpMock.when('GET', 'http://localhost:8080/ft-demo-pre/api/todoservice/').respond([{"message" : "have to do", "done" : false, "id" : 1}]);
  		var ctrl = $controller('todoController', {$scope:scope}); 
      httpMock.flush();
  	})); 

  	it('should not have any todos', function() {
  		expect(scope.todos.length).toBe(1);
  	});

  	it('should have one todo after addTo has been called', function() {
      httpMock.expectPOST('http://localhost:8080/ft-demo-pre/api/todoservice/').respond({"message" : "I have to do important stuff", "done" : false, "id" : 2}); 
  		scope.newtodo = {'message' : 'I have to do important stuff'}; 
  		scope.addNewTodo(); 
      httpMock.flush();
  		expect(scope.todos.length).toBe(2);
  	});

    it('should make sure that differnt todos has different ids', function() {
      httpMock.expectPOST('http://localhost:8080/ft-demo-pre/api/todoservice/').respond({"message" : "I have to do important stuff", "done" : false, "id" : 3}); 
      scope.newtodo = {'todo' : 'I have to do important stuff'}; 
      scope.addNewTodo(); 
      httpMock.flush();
      httpMock.expectPOST('http://localhost:8080/ft-demo-pre/api/todoservice/').respond({"message" : "I have to do important stuff", "done" : false, "id" : 4}); 
      scope.newtodo = {'todo' : 'I have to some more important stuff'}; 
      scope.addNewTodo(); 
      httpMock.flush();
      expect(scope.todos[0].id).not.toBe(scope.todos[1].id);
    });
 
    it('should make sure that todo is marked as done when done method is called', function() {
      httpMock.expectPUT('http://localhost:8080/ft-demo-pre/api/todoservice/1').respond({}); 
      scope.setDone(scope.todos[0]); 
      httpMock.flush();
      expect(scope.todos[0].done).toBe(true);
    });
   

  });

});
