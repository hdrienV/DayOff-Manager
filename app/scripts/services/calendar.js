'use strict';

/**
 * @ngdoc service
 * @name dayOffManagerApp.login
 * @description
 * # login
 * Service in the dayOffManagerApp.
 */
angular.module('dayOffManagerApp')
  .factory('CalendarService',
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
            {id:13,title: 'John Doe',start: new Date(y, m, 1),end: new Date(y, m, 1),duration:1,type:"Congés payés"},
            {id:14,title: 'Miranda Vercier',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2),duration:3,type:"RTT"}
          ];

          callback(response);
      };

      service.LeaveVal = function (id, callback) {

        /* DummyData
         ----------------------------------------------*/
        var response =[
          {id:14,title: 'Miranda Vercier',start: new Date(y, m, d - 5),end: new Date(y, m, d - 3),duration:2,type:"RTT"}
        ];

        callback(response);
      };

      service.LeaveDeny = function (id, callback) {

        /* DummyData
         ----------------------------------------------*/
        var response =[
          {id:14,title: 'Georges Vercier',start: new Date(y, m, d + 5),end: new Date(y, m, d + 7),duration:3,type:"RTT"},
          {id:14,title: 'Someone X',start: new Date(y, m, d -1),end: new Date(y, m, d +2),duration:3,type:"Congés payé"}
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
