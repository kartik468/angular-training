(function() {
    /**
     *  Module
     *
     * Description
     */
    console.log('first console');
    var myApp = angular.module('myApp', []);
    myApp.controller('myFirstController', ['$scope', function($scope) {
        console.log('second console');
        window.myFirstControllerScope = $scope;
        $scope.firstname = "John";
        $scope.lastname = "Doe";
        $scope.isVisible = false;
        debugger;
    }])
}());
