var myApp = angular.module('formExample', []);
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
