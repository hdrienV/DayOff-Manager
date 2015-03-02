'use strict';

angular.module('dayOffManagerApp')
  .controller('ListDayoffCtrl', ['$scope','$location','$rootScope', function ($scope, $location, $rootScope) {



    $scope.rowCollection = [
      {firstName:"John",lastName:"Doe",congeId:"123",dateB:'1987-04-25',dateE:'1987-04-28',duree:3,type:"RTT",status:"Attente"},
      {firstName:"John",lastName:"Borris",congeId:"127",dateB:'1988-06-13',dateE:'1988-06-17',duree:4,type:"RTT",status:"Valide"},
      {firstName:"Mag",lastName:"Doe",congeId:"129",dateB:'1988-07-14',dateE:'1988-07-16',duree:2,type:"Paid Leave",status:"Valide"},
      {firstName:"Maggie",lastName:"Lam",congeId:"130",dateB:'1988-07-12',dateE:'1988-07-13',duree:1,type:"Paid Leave",status:"Attente"}
    ];

    //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
    $scope.displayedCollection = [].concat($scope.rowCollection);

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
      var index = $scope.rowCollection.indexOf(row);
      if (index !== -1) {
        $scope.rowCollection.splice(index, 1);
      }
    };

    $scope.formatDate = function(date){
      var dateout;
      if(date!=null && date.length > 10){
        dateout = date.substring(0, 10);
      }else{
        return date;
      }
      return dateout;
    };

    var JSDateToExcelDate = function (inDate) {
      var returnDateTime = 25569.0 + ((inDate.getTime() - (inDate.getTimezoneOffset() * 60 * 1000)) / (1000 * 60 * 60 * 24));
      return returnDateTime.toString().substr(0,20);
    };



    $scope.all=function(){
      $scope.itemsByPage=$scope.rowCollection.length;
    };

    $scope.exportData = function () {
      var nowTemp = new Date();
      alasql('SELECT * INTO XLSX("conge_'+nowTemp+'.xlsx",{headers:true}) FROM ?',[$scope.displayedCollection]);


    };

  }]);
