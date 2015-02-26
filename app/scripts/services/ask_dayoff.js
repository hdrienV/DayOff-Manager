'use strict';

/**
 * @ngdoc service
 * @name dayOffManagerApp.login
 * @description
 * # login
 * Service in the dayOffManagerApp.
 */
angular.module('dayOffManagerApp')
  .factory('DemandeService',
  ['$http', '$timeout', '$rootScope',
    function ($http, $rootScope, $timeout) {
      var service = {};
      var date = new Date();
      var d = date.getDate();
      var m = date.getMonth();
      var y = date.getFullYear();

      service.LeaveAtt = function (id, callback) {

        /* DummyData
         ----------------------------------------------*/
        var response =[
          {title: 'All Day Event',start: new Date(y, m, 1)},
          {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
          {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
          {id: 998,title: 'Repeating Event2',start: new Date(y, m, d + 4, 16, 0),allDay: false},
          {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
          {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ];

        callback(response);

        /* Use this for real HTTP call
         ----------------------------------------------*/
        //$http.post('/api/authenticate', { username: username, password: password })
        //    .success(function (response) {
        //        callback(response);
        //    });

      };

      service.LeaveVal = function (id, callback) {

        /* DummyData
         ----------------------------------------------*/
        var response =[
          {title: 'Event valide',start: new Date(y, m, 2)},
        ];

        callback(response);

        /* Use this for real HTTP call
         ----------------------------------------------*/
        //$http.post('/api/authenticate', { username: username, password: password })
        //    .success(function (response) {
        //        callback(response);
        //    });

      };

      service.LeaveDeny = function (id, callback) {

        /* DummyData
         ----------------------------------------------*/
        var response =[
          {type:'party',title: 'Lunch',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Lunch 2',start: new Date(y, m, d, 12, 0),end: new Date(y, m, d, 14, 0),allDay: false},
          {type:'party',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'}
        ];

        callback(response);

        /* Use this for real HTTP call
         ----------------------------------------------*/
        //$http.post('/api/authenticate', { username: username, password: password })
        //    .success(function (response) {
        //        callback(response);
        //    });

      };


      return service;
    }]);
