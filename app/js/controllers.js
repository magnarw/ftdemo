'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('todoController', ['$scope','$http',function($scope,$http) {
  	$scope.todos = [];
    $scope.newTodo = '';

    $http.get('http://localhost:8080/ft-demo-pre/api/todoservice/').success(function(data) {
      $scope.todos = data;
    }).error(function(data) {
       $scope.todos = []; 
    });

  	$scope.addNewTodo = function () {
  		var data = {'message' : $scope.newTodo, "done" : false};
      $http({
        url : 'http://localhost:8080/ft-demo-pre/api/todoservice/',
        method: 'POST',
        data: data,
        headers: {'Content-Type':'application/json'}
      }).success(function (data) {
           $scope.todos.push(data);
        }).error(function () {
          alert('Noe gikk feil!');
      });
  	};

    $scope.setDone = function (todo) {
      for(var x in $scope.todos){
        if($scope.todos[x].id === todo.id){
          $scope.todos[x].done = true; 
          $http({
              url : 'http://localhost:8080/ft-demo-pre/api/todoservice/' + $scope.todos[x].id,
              method: 'PUT',
              data: $scope.todos[x],
              headers: {'Content-Type':'application/json'}
          }).success(function (data) {
            $scope.todos.push($scope.todos[x]);
          }).error(function () {
            alert('Noe gikk feil!');
          });
        }
      }
    };
  }]);