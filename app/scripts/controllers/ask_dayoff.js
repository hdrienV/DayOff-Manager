'use strict';

angular.module('dayOffManagerApp')
  .controller('DemandeCongeFormCtrl', ['$scope','$location','$rootScope','CalendarService', function ($scope, $location, $rootScope,DemandeService) {

//------------CODE-DATE-CALENDRIER-----------------------
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
    var startDate = now;
    var FromEndDate = new Date();
    var ToEndDate = new Date();

    ToEndDate.setDate(ToEndDate.getDate()+365);

    $('.from_date').datepicker({

      weekStart: 1,
      startDate: now,
      endDate: ToEndDate,
      autoclose: true
    })
      .on('changeDate', function(selected){
        startDate = new Date(selected.date.valueOf());
        startDate.setDate(startDate.getDate(new Date(selected.date.valueOf())));
        $('.to_date').datepicker('setStartDate', startDate);
      });
    $('.to_date')
      .datepicker({

        weekStart: 1,
        startDate: startDate,
        endDate: ToEndDate,
        autoclose: true
      })
      .on('changeDate', function(selected){
        FromEndDate = new Date(selected.date.valueOf());
        FromEndDate.setDate(FromEndDate.getDate(new Date(selected.date.valueOf())));
        $('.from_date').datepicker('setEndDate', FromEndDate);
      });
//--------------------------------------------------------

    $scope.halfday=[{"value":0,"name":'Morning'},{"value":1,"name":'Afternoon'}];
    $scope.types=[{"value":0,"name":'Congé1'},{"value":1,"name":'Congé2'}];

    $scope.date_end={half:$scope.halfday[0].value,date:""};
    $scope.date_start={half:$scope.halfday[0].value,date:""};
    $scope.conge={type:$scope.types[0].value};



    $scope.submitDemandeForm= function(){
      $location.path('/');
    }


  }]);
