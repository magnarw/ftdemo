'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('todoController', ['$scope','$http',function($scope,$http) {
  	$scope.todos = [];
    $http.get('http://localhost:8080/ft-demo-pre/api/todoservice/').success(function(data) {
      $scope.todos = data;
    }).error(function(data) {
       $scope.todos = []; 
    }); 
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