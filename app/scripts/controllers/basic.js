/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adminApp
 */
angular.module('adminApp').controller(
    'BasicCtrl', 
    function ($scope,$http) {        
        var id="basic";
    	activeMenu(id);
        
        $http.get("./source/index.php/json/data")
            .then( 
                function(response) {
                    $scope.nombres = response.data;
                    return;
                }
            );
    }
);