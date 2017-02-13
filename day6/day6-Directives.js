(function(angular, myApp) {
    myApp.directive('myItem', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/my-item.html',
            controller: 'myItemController'
        };
    });

    myApp.directive('myItemToDisplay', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/my-item.html'
        };
    });
})(window.angular, window.myApp);
