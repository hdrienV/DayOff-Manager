'use strict';

/**
 * @ngdoc function
 * @name dayOffManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dayOffManagerApp
 */
angular.module('dayOffManagerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.title = "Quelques technos :";
    $scope.techs = [
      {name:'HTML5 Boilerplate',description:'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'},
      {name:'AngularJS',description:'AngularJS is a toolset for building the framework most suited to your application development.'},
      {name:'Karma',description:'Spectacular Test Runner for JavaScript.'}
    ];
  });
