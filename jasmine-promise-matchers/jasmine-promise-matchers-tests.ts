

describe('something', () => {
	beforeEach(() => {
		installPromiseMatchers();
	});
	
	it('should do something', () => {
		var foo = {};
		var bar = {};
		
		expect(foo).toBeResolvedWith(bar);
		expect(foo).toBeRejectedWith(bar);
		expect(foo).toBeResolved();
		expect(foo).toBeRejected();
	});
})