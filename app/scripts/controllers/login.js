/**
 * Created by vercierh on 24/02/2015.
 */
'use strict';

angular.module('dayOffManagerApp')
  .controller('LoginCtrl',
  ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
      // reset login status
      AuthenticationService.ClearCredentials();

      $scope.login = function () {
        AuthenticationService.Login($scope.username, $scope.password, function(response) {
          if(response.success) {
            AuthenticationService.SetCredentials(response.username, $scope.password, response.id,response.role);
            $location.path('/');
          } else {
            $scope.error = response.message;
          }
        });
      };
    }]);
