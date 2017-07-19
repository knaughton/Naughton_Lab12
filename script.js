var app = angular.module('lab', []);

app.controller('labCtrl', function($scope){

  $scope.toDoList = [];

  $scope.addToList = function(items) {
    $scope.toDoList.push({
      name: items.name,

    });

    $scope.remove = function(index) {
      $scope.toDoList.splice(index, 1);
    }
    console.log($scope.toDoList);
  };
});
