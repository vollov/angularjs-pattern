'use strict';

describe('Test Suit for services', function() {
	describe('Test MathService', function() {
		var scope, mathService;
		beforeEach(module('appServices'));

		beforeEach(inject(function(_MathService_) {
			mathService = _MathService_;
		}));

		it('should be able to add', function() {
			expect(mathService.add(3, 2)).toBe(5);
		});
	});
});