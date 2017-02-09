(function() {

    var myApp = angular.module('shoppingApp', []);
    myApp.controller('shoppingController', ['$scope', function($scope) {
        console.log('shopping controller initialized...');
        $scope.currentItem = {};

        $scope.items = [{
            name: 'bread',
            quantity: 1
        }, {
            name: 'milk',
            quantity: 3
        }, {
            name: 'butter',
            quantity: 2
        }];

        $scope.addToList = function() {
            var item = {
                quantity: $scope.itemQuantity,
                name: $scope.itemName
            }
            $scope.items.push(item);
            $scope.itemQuantity = '';
            $scope.itemName = '';
        }
    }]);
    myApp.directive('myItem', function() {
        return {
            restrict: 'E',
            templateUrl: 'my-item.html'
        };
    });

    myApp.directive('myItemToDisplay', function() {
        return {
            restrict: 'E',            
            templateUrl: 'my-item.html'
        };
    });

}());
