

describe('specs', () => {
	beforeEach(() => {
		JasminePromiseMatchers.install
	});

	afterEach(() => {
		JasminePromiseMatchers.uninstall
	});

	it('should have correct syntax', (done) => {
		var foo = {};
		var bar = {};

		expect(foo).toBeResolvedWith(bar, done);
		expect(foo).toBeRejectedWith(bar, done);
		expect(foo).toBeResolved(done);
		expect(foo).toBeRejected(done);
	});
})