'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('todoController', ['$scope',function($scope) {
  	$scope.todos = []; 
  	$scope.newTodo = ''; 
  	$scope.addNewTodo = function () {
  		$scope.todos.push({'message' : $scope.newTodo});
  	};
  }]);