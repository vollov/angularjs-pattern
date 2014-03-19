'use strict';

angular.module('appControllers', [ 'appServices' ])
	.controller('CalculatorController', function($scope, CalculatorService) {
		$scope.doSquare = function() {
			$scope.answer = CalculatorService.square($scope.number);
		},
		$scope.doCube = function() {
			$scope.answer = CalculatorService.cube($scope.number);
		}
	})
	.controller('ContactController', function ($scope, ContactService) {
		$scope.contacts = ContactService.list();
		
		$scope.saveContact = function () {
			ContactService.save($scope.newcontact);
			$scope.newcontact = {};
		};
		
		$scope.delete = function (id) {
			ContactService.delete(id);
			if ($scope.newcontact.id == id) $scope.newcontact = {};
		};
		
		$scope.edit = function (id) {
			console.log('edit i=' + typeof(id));
			$scope.newcontact = angular.copy(ContactService.get(id));
		}
	});