/// <reference types="chai" />

const expect: Chai.ExpectStatic = {} as any;
const assert: Chai.AssertStatic = {} as any;

true.should.be.ok;
expect(true).to.be.ok;
assert.isTrue(true);
