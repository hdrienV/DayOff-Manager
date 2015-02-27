'use strict';

/**
 * @ngdoc overview
 * @name dayOffManagerApp
 * @description
 * # dayOffManagerApp
 *
 * Main module of the application.
 */
angular
  .module('dayOffManagerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.calendar',
    'smart-table'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl'
      })
      .when('/ask', {
        templateUrl: 'views/user_ask_dayoff.html',
        controller: 'DemandeCongeFormCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list_dayoff.html',
        controller: 'ListDayoffCtrl'
      })
      .when('/error', {
        templateUrl: 'views/404.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
      //Enumerate routes that need admin rights
      var routesForAdmin = ['/about'];
      var routesForManager = ['/validation'];

      // check if current location matches route
      var routeAdmin = function (route) {
        return (routesForAdmin.indexOf(route) > -1);
      };

      // check if current location matches route
      var routeManager = function (route) {
        return (routesForManager.indexOf(route) > -1);
      };


      // keep user logged in after page refresh
      $rootScope.globals = $cookieStore.get('globals') || {};
      if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
      }

      $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in
        if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
          event.preventDefault();
          $location.path('/login');
        }
        else if (routeAdmin($location.url()) && $rootScope.globals.currentUser.role!='admin'){
          event.preventDefault();
          $location.path('/error');
        }
        else if (routeManager($location.url()) && ($rootScope.globals.currentUser.role!='admin' || $rootScope.globals.currentUser.role!='manager')){
          event.preventDefault();
          $location.path('/error');
        }
      });
    }]);
