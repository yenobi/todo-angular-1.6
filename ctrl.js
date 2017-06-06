"use strict";
myToDo.controller('listCtrl', listCtrl);

function listCtrl($scope) {
  $scope.todoList = [
    {
      text: "learn angular basics",
      done: false
    },
    {
      text: "do mu first todo-list",
      done: false
    }
  ];

  $scope.addTodo = function() {
    $scope.todoList.push({
      text: $scope.todoText,
      done: false
    });

    $scope.todoText = '';
  };

  $scope.removeCompleted = function() {
    $scope.todoList = $scope.todoList.filter(function(todos) {
      return !todos.done;
    });
  };

  $scope.reverseTask = function() {
      $scope.todoList.reverse();
  };
};
