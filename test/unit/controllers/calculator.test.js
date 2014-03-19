'use strict';

describe('Test Suit for controllers', function() {

	describe('Test CalculatorController', function() {
		var scope, calculatorController, calculatorService;
		beforeEach(module('appServices','appControllers'));

		beforeEach(inject(function($rootScope, $controller, _CalculatorService_) {
			scope = $rootScope.$new();
			calculatorService = _CalculatorService_;
			calculatorController = $controller('CalculatorController', {
				$scope : scope,
				calculatorService: calculatorService
			});
		}));
		
		it('should be able to square', function() {
			scope.number = 2;
			scope.doSquare();
			expect(scope.answer).toBe(4);
		});
		
		it('should be able to cube', function() {
			scope.number = 2;
			scope.doCube();
			expect(scope.answer).toBe(8);
		});
	});
});