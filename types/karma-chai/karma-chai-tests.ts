/// <reference types="chai" />

declare const expect: Chai.ExpectStatic;
declare const assert: Chai.AssertStatic;

true.should.be.ok;
expect(true).to.be.ok;
assert.isTrue(true);
