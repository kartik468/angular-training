var myApp = angular.module('myApp', []);
myApp.controller('MyController', function($scope, $http) {
    $scope.records = [{
        "City": "mumbai",
        "Country": "india",
        "Name": "kartik",
    }]
    $http({
        method: 'GET',
        url: 'http://www.w3schools.com/angular/customers.php'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.records = response.data.records;
    }, function errorCallback(response) {
        debugger;
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});
