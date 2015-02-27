'use strict';

angular.module('dayOffManagerApp')
  .controller('ListDayoffCtrl', ['$scope','$location','$rootScope', function ($scope, $location, $rootScope) {

    $scope.rowCollection = [
      {firstName:"John",lastName:"Doe",congeId:"123",dateB:new Date('1987-04-25'),dateE:new Date('1987-04-28'),duree:3,type:"RTT",status:"Attente"},
      {firstName:"John",lastName:"Borris",congeId:"127",dateB:new Date('1988-06-13'),dateE:new Date('1988-06-17'),duree:4,type:"RTT",status:"Valide"},
      {firstName:"Mag",lastName:"Doe",congeId:"129",dateB:new Date('1988-07-14'),dateE:new Date('1988-07-16'),duree:2,type:"Paid Leave",status:"Valide"},
      {firstName:"Maggie",lastName:"Lam",congeId:"130",dateB:new Date('1988-07-12'),dateE:new Date('1988-07-13'),duree:1,type:"Paid Leave",status:"Attente"}
    ];



    //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
    $scope.displayedCollection = [].concat($scope.rowCollection);



    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
      var index = $scope.rowCollection.indexOf(row);
      if (index !== -1) {
        $scope.rowCollection.splice(index, 1);
      }
    }


    $scope.all=function(){
      $scope.itemsByPage=$scope.rowCollection.length;
    }


  }]);
