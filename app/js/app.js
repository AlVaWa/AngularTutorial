'use strict';

/* App module
   Declare app level module which depends on views, and components */
var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

// Routing
phonecatApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
        when('/phone', {
          templateUrl: '../app/views/phone-list.html',
          controller: 'PhoneListCtrl'
        }).
        when('/phones/:phoneId', {
          templateUrl: '../app/views/phone-list-details.html',
          controller: 'PhoneDetailCtrl'
        }).
        when('/testing', {
          templateUrl: '../app/views/testing.html',
          controller: 'TestingCtrl'
        }).
        otherwise({redirectTo: '/phone'});
}]);
