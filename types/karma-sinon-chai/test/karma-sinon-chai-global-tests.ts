// Ref: https://github.com/kmees/karma-sinon-chai#usage
// Each of the different Chai assertion suites is available in the tests:
assert.ok("everything", "everything is ok");
expect("foo").to.not.equal("bar");
should.exist(123);

// Sinon and Chai matchers for Sinon are also available:
const foo = { bar: (input: any) => {} };
sinon.spy(foo, "bar");
foo.bar("baz");
foo.bar.should.have.been.calledWith("baz");
