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
    $scope.id = 1; 
  	$scope.addNewTodo = function () {
  		$scope.todos.push({'message' : $scope.newTodo, "done" : false, "id" : $scope.id});
      $scope.id++; 
  	};
    $scope.setDone = function (todo) {
      for(var x in $scope.todos){
        if($scope.todos[x].id === todo.id){
          $scope.todos[x].done = true; 
        }
      }

    };
  }]);