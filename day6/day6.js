(function(angular) {
    'use strict';

    var myApp = angular.module('routerTask', ['ui.router']);
    window.myApp = myApp;

    myApp.config(function($stateProvider) {
        var day2State, day3State, day4State, day5State;
        day2State = {
            name: 'day2',
            url: '/day2',
            templateUrl: 'templates/day2Template.html'
        };

        day3State = {
            name: 'day3',
            url: '/day3',
            templateUrl: 'templates/day3Template.html'
        };

        day4State = {
            name: 'day4',
            url: '/day4',
            templateUrl: 'templates/day4Template.html'
        };

        day5State = {
            name: 'day5',
            url: '/day5',
            templateUrl: 'templates/day5Template.html'
        };


        $stateProvider.state(day2State);
        $stateProvider.state(day3State);
        $stateProvider.state(day4State);
        $stateProvider.state(day5State);
    });

})(window.angular);
