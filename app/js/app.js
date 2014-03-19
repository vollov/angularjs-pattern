'use strict';

angular.module('appModule', [ 'ngRoute', 'appControllers' ])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.when('/calc', {
			controller : 'CalculatorController',
			templateUrl : '/views/calculator.html'
		}).when('/contact', {
			controller : 'ContactController',
			templateUrl : '/views/contact.html'
		}).otherwise({
			redirectTo : '/calc'
		});
		$locationProvider.html5Mode(true);
	});