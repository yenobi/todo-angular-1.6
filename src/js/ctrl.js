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

  let state = 'new-to-late';

  $scope.indexFilter = function() {

        if (state === 'new-to-late') {
            state = 'late-to-new';
            return $scope.todoList.sort( function(a, b) {
                consoleLogArray();
                return b.index- a.index;
            } );
        } else if (state === 'late-to-new') {
            state = 'new-to-late';

            return $scope.todoList.sort( function(a, b) {
                consoleLogArray();
                return a.index - b.index;
            } );
        }
  };

  let nameState;

  $scope.nameFilter = function(e) {
      console.log(e);

      if ( nameState === undefined || nameState === 'z-to-a') {
          nameState = 'a-to-z';

          return $scope.todoList.sort( function(a, b) {
              consoleLogArray();
              return a.text.charAt(0) > b.text.charAt(0);
          } );
      } else if (nameState === 'a-to-z') {
          nameState = 'z-to-a';

          return $scope.todoList.sort( function(a, b) {
              consoleLogArray();
              return b.text.charAt(0) > a.text.charAt(0);
          } );
      };

  };

  // $scope.aToZ = function() {
  // };
  //
  // $scope.zToA = function() {
  // };

  function consoleLogArray() {
      console.log($scope.todoList);
  }
};
