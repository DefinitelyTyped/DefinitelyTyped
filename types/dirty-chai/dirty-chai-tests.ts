import chai = require("chai");
chai.should();

import chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

import dirtyChai = require("dirty-chai");
chai.use(dirtyChai);

const expect = chai.expect;

// mocha-like stubs so we don't need to use mocha typings

function describe(_title: string, _fn: () => void) {
    return;
}
function it(_title: string, _fn: () => void) {
    return;
}

// Example from https://github.com/prodatakey/dirty-chai/blob/master/test/dirty-chai.spec.js

function shouldFail(func: () => void, msg: RegExp) {
    it("should fail with a message", () => {
        expect(func).to.throw(msg);
    });
}

describe("dirty chai", () => {
    describe("ok", () => {
        describe("when true expression", () => {
            it("should not assert function", () => {
                expect(true).to.be.ok();
            });

            it("should not assert property", () => {
                expect(true).to.be.ok.and.not.equal(false);
            });

            it("should not assert another chain conversion", () => {
                expect(true).to.be.ok.and.not.false();
            });

            it("should not assert with ensure", () => {
                expect(true).to.be.ok.ensure();
                expect(true).to.be.ok.not.ensure();
            });

            it("should work with should", () => {
                true.should.be.true.and.not.false();
            });
        });

        describe("when false expression", () => {
            it("should assert non-function at chain end", () => {
                const assertion = expect(true).to.not.be.ok.and.not;
                shouldFail(() => {
                    assertion.equal.call(assertion, false);
                }, /expected true to be falsy/);
            });

            it("should assert with custom message at chain end", () => {
                expect(() => {
                    expect(true).to.not.be.false.and.be.ok("true is not ok");
                }).to.throw(/true is not ok/);
            });

            it("should assert function mid-chain", () => {
                expect(() => {
                    expect(true)
                        .to.not.be.ok()
                        .and.not.equal(false);
                }).to.throw(/expected true to be falsy/);
            });

            it("should assert with custom message mid-chain", () => {
                expect(() => {
                    expect(true)
                        .to.not.be.ok("true is not ok")
                        .and.not.equal(false);
                }).to.throw(/true is not ok/);
            });

            it("should assert with custom message of terminating assert", () => {
                expect(() => {
                    expect(true).to.be.ok.and.not.equal(true, "true is not ok");
                }).to.throw(/true is not ok/);
            });

            it("should assert with ensure", () => {
                expect(() => {
                    expect(true).to.not.be.ok.ensure();
                }).to.throw(/expected true to be falsy/);
            });
        });
    });

    describe("immutable properties", () => {
        describe("length", () => {
            it("should successfully assert length early in the chain", () => {
                [1].should.have.length(1);
            });

            it("should assert wrong length", () => {
                expect(() => {
                    [1, 1, 2, 3, 5].should.have.length(33);
                }).to.throw();
            });
        });
    });

    describe("compatibility with chai-as-promised", () => {
        it("should pass with resolved promise", () => {
            return expect(Promise.resolve(true)).to.eventually.be.true();
        });

        it("should pass with rejected promise", () => {
            const err = new Error("foo");
            err.name = "bar";
            return expect(Promise.reject(err))
                .to.eventually.be.rejectedWith(Error)
                .and.to.have.property("name", "bar");
        });
    });
});
