"use strict";
myToDo.controller('listCtrl', listCtrl);

function listCtrl($scope) {
  $scope.todoList = [
    {
      text: "learn angular basics",
      done: false,
      index: 1
    },
    {
      text: "do mu first todo-list",
      done: false,
      index: 2
    }
  ];

  $scope.addTodo = function() {
    $scope.todoList.push({
      text: $scope.todoText,
      done: false,
      index: $scope.todoList.length +1
    });

    $scope.todoText = '';
    consoleLogArray();
  };

  $scope.removeCompleted = function() {
    $scope.todoList = $scope.todoList.filter(function(todos) {
      return !todos.done;
    });
    consoleLogArray();
  };

  $scope.lateToNew = function() {
      return $scope.todoList.sort( function(a, b) {
          consoleLogArray();
          return b.index- a.index;
      } );
  };

  $scope.newToLate = function() {
      return $scope.todoList.sort( function(a, b) {
          consoleLogArray();
          return a.index - b.index;
      } );
  };

  $scope.aToZ = function() {
      return $scope.todoList.sort( function(a, b) {
          consoleLogArray();
          return a.text.charAt(0) > b.text.charAt(0);
      } );
  };

  $scope.zToA = function() {
      return $scope.todoList.sort( function(a, b) {
          consoleLogArray();
          return b.text.charAt(0) > a.text.charAt(0);
      } );
  };

  function consoleLogArray() {
      console.log($scope.todoList);
  }
};
