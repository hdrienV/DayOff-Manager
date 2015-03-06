'use strict';

/**
 * @ngdoc function
 * @name dayOffManagerApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the dayOffManagerApp
 */
angular.module('dayOffManagerApp')
  .controller('CalendarCtrl',['$scope','$rootScope','CalendarService', function ($scope,$rootScope,CalendarService) {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();



    var eventAttVar;
    var eventValVar;
    var eventDenyVar;

    CalendarService.LeaveAtt($rootScope.globals.currentUser.id,function(result){
      eventAttVar=result;
    });
    CalendarService.LeaveVal($rootScope.globals.currentUser.id, function(result){
      eventValVar=result;
    });

    CalendarService.LeaveDeny($rootScope.globals.currentUser.id, function(result){
      eventDenyVar=result;
    });

    /* event source that contains custom events on the scope */
    $scope.eventAtt = {
      events:eventAttVar};

    $scope.eventVal = {
      color:'#5cb85c',
      events:eventValVar
    };


    $scope.eventDeny = {
      color: '#d9534f',
      events: eventDenyVar
    };

    $scope.alertOnEventClick = function( date){
      $scope.alertMessage = (date.title + ' was clicked ');
    };

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: false,
        header:{
          left: 'title',
          center: '',
          right: 'today prev,next'
        },
        monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
        dayNamesShort: ["Dim","Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
        firstDay:1,
        buttonText: {
          today:"Aujourd'hui"
        },

        eventClick: $scope.alertOnEventClick
      }
    };

    /* event sources array*/

    $scope.eventSources2 = [$scope.eventDeny, $scope.eventAtt, $scope.eventVal];


}]);
