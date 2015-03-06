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

    $scope.showModal= function(event, jsEvent, view) {
      $('#modalTitle').html(event.title);
      $('.id_conge').html(event.id);
      $('.startDate').html(event.start);
      $('.endDate').html(event.end);
      $('.duration').html(event.duration);
      $('.type_conge').html(event.type);
      $('#fullCalModal').modal();
    };



    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
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

        eventClick: $scope.showModal
      }
    };

    /* event sources array*/

    $scope.eventSources2 = [$scope.eventDeny, $scope.eventAtt, $scope.eventVal];

    function reposition() {
      var modal = $(this),
        dialog = modal.find('.modal-dialog');
      modal.css('display', 'block');

      // Dividing by two centers the modal exactly, but dividing by three
      // or four works better for larger screens.
      dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }
    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
      $('.modal:visible').each(reposition);
    });


}]);
