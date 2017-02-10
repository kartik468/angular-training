(function(angular) {
    'use strict';

    var myApp = angular.module('shoppingApp', []);
    myApp.controller('shoppingController', ['$scope', function($scope) {
        console.log('shopping controller initialized...');
        var inputElement = angular.element(document.getElementsByClassName('item-name-input'));
        inputElement.removeClass('ng-valid').addClass('ng-invalid');
        $scope.item = {};
        $scope.itemAlreadyPresent = false;
        $scope.message = "";

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
            if (!$scope.item.name.length) {
                $scope.message = 'Enter item name..'
            }
            if (!$scope.itemAlreadyPresent) {
                $scope.items.push($scope.item);
                $scope.item = { quantity: 1 };
                $scope.message = "Item added";
            }
        }

        $scope.removeItem = function(data) {
            // console.log($scope);
            var index = _.indexOf($scope.items, _.findWhere($scope.items, { name: data.name }));
            $scope.items.splice(index, 1);
        }

        $scope.checkIfPresent = function() {
            var $thisScope = $scope,
                isItemPresent,
                items = $thisScope.items,
                length = items.length,
                currentItem,
                index,
                thisScopeItemName = $thisScope.item.name;
            inputElement.removeClass('ng-invalid');
            if (inputElement.val()) {
                inputElement.addClass('ng-valid');
            }
            $thisScope.itemAlreadyPresent = false;
            $thisScope.message = "";
            // isItemPresent = !$thisScope.items.every(function(element, index, array) {
            //     return element.name !== $thisScope.item.name && !$thisScope.item.isDeleted
            // });
            for (index = 0; index < length; index++) {
                currentItem = items[index];
                if (currentItem.name === thisScopeItemName) {
                    isItemPresent = true;
                    break;
                }
            }
            if (isItemPresent) {
                $thisScope.itemAlreadyPresent = true;
                $scope.message = "The item is already in your shopping list.";
                inputElement.removeClass('ng-valid').addClass('ng-invalid');
                return;
            }
        };
    }]);
    myApp.directive('myItem', function() {
        return {
            restrict: 'E',
            templateUrl: 'my-item.html',
            controller: 'myItemController'
        };
    });

    myApp.directive('myItemToDisplay', function() {
        return {
            restrict: 'E',
            templateUrl: 'my-item.html'
        };
    });

    myApp.controller('myItemController', ['$scope', function($scope) {
        $scope.onCloseClick = function(event) {
            // $scope.$emit('myCloseEvent', $scope.item);
            console.log($scope);
            $scope.$parent.removeItem($scope.item);
        };
    }]);

})(window.angular);
