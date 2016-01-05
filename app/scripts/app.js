'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('adminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/http', {
        templateUrl: 'views/http.html',
        controller: 'HttpCtrl'
      })
      .when('/basic', {
        templateUrl: 'views/basic.html',
        controller: 'BasicCtrl'
      })      
      .when('/sort', {
        templateUrl: 'views/ordenado.html',
        controller: 'SortCtrl'
      }) 
      .when('/index', {
        templateUrl: 'views/indice.html',
        controller: 'IndexCtrl'
      }) 
      .when('/special', {
        templateUrl: 'views/special.html',
        controller: 'SpecialCtrl'
      }) 
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
