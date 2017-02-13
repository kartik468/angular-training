(function(angular, myApp) {
    'use strict';
    // day 2
    myApp.controller('namesCtrl', function($scope) {
        $scope.names = [
            'Jani',
            'Carl',
            'Margareth',
            'Hege',
            'Joe',
            'Gustav',
            'Birgit',
            'Mary',
            'Kai'
        ];
    });

    // day 3
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

    // day 4
    myApp.controller('ExampleController', ['$scope', function($scope) {
        $scope.master = {};
        $scope.formSubmitted = false;
        $scope.institutionNames = ['Institution A', 'Institution B', 'Institution C'];
        $scope.email = '';
        $scope.confirmEmail = '';
        $scope.password = '';
        $scope.confirmPassword = '';
        $scope.firstName = '';
        $scope.lastName = '';

        $scope.validateEmailForEquality = function() {
            var inputElement;
            if ($scope.email && $scope.confirmEmail) {
                inputElement = angular.element(document.getElementsByClassName('re-enter-email-input'));
                if ($scope.email !== $scope.confirmEmail) {
                    inputElement.removeClass('ng-valid').addClass('ng-invalid');
                } else {
                    inputElement.addClass('ng-valid').removeClass('ng-invalid');
                }
            }
        }

        $scope.validatePasswordForEquality = function() {
            var inputElement;
            if ($scope.password && $scope.confirmPassword) {
                inputElement = angular.element(document.getElementsByClassName('re-enter-password-input'));
                if ($scope.password !== $scope.confirmPassword) {
                    inputElement.removeClass('ng-valid').addClass('ng-invalid');
                } else {
                    inputElement.addClass('ng-valid').removeClass('ng-invalid');
                }
            }
        }

        $scope.submitForm = function(valid) {
            if (valid && $scope.password === $scope.reEnterPassword && $scope.email === $scope.confirmEmail) {
                $scope.formSubmitted = true;
                return;
            }
            if ($scope.password !== $scope.reEnterPassword) {
                console.log('password dose not match');
            }
            if ($scope.email !== $scope.confirmEmail) {
                console.log('email dose not match');
            }
            alert('invalid form');
        };



        // $scope.reset = function() {
        //     $scope.user = angular.copy($scope.master);
        // };

        // $scope.reset();
    }]);

    // day 5
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

    myApp.controller('myItemController', ['$scope', function($scope) {
        $scope.onCloseClick = function(event) {
            // $scope.$emit('myCloseEvent', $scope.item);
            console.log($scope);
            $scope.$parent.removeItem($scope.item);
        };
    }]);

})(window.angular, window.myApp);
