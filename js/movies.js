'use strict';

var myApp = angular.module('MoviesApp', []);
myApp.controller('MoviesCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.message = 'Hello World';
    
    $http.get('data/movies-2015.json').then(function(response) {
        var data = response.data;
        $scope.movies = data;
    });

    $scope.ordering = '-gross';
    
    $scope.sortBy = function(order) {
        if ($scope.ordering == order) {
            $scope.ordering = '-'+order;
        } else {
            $scope.ordering = order;
        }
    };

}]);