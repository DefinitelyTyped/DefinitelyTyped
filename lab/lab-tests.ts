import { script, assertions } from "lab";

const { experiment, describe, suite, test, it, before, beforeEach, after, afterEach } = script();
const expect = assertions.expect;
const fail = assertions.fail;

experiment('math', () => {

    before((done) => {

        setTimeout(() => {

            done();
        }, 1000);
    });

    beforeEach((done) => {

        done();
    });

    test('returns true when 1 + 1 equals 2', (done) => {

        expect(1 + 1).to.equal(2);
        done();
    });
});

experiment('math', () => {

    before(() => {

        return Promise.resolve();
    });

    test('returns true when 1 + 1 equals 2', () => {

        return Promise.resolve()
            .then((aValue) => {

                const expectedValue = aValue;
                expect(aValue).to.equal(expectedValue);
            });
    });
});

experiment.only('with only experiment', () => {

    test('this test will run', (done) => {

        expect(1 + 1).to.equal(2);
        done();
    });

    test('another test that will run', (done) => {

        expect(true).to.equal(true);
        done();
    });
});

experiment('with only test', () => {

    test.only('only this test will run', (done) => {

        expect(1 + 1).to.equal(2);
        done();
    });

    test('another test that will not be executed', (done) => {

        done();
    });
});

test('attaches notes', (done) => {

    expect(1 + 1).to.equal(2);
    done.note(`The current time is ${Date.now()}`);
    done();
});

test('cleanups after test', (done, onCleanup) => {

    if (onCleanup) {

        onCleanup((next) => {

            return next();
        });
    }

    expect(1 + 1).to.equal(2);
    done();
});

experiment('my plan', () => {

    test('only a single assertion executes', { plan: 1 }, (done) => {

        expect(1 + 1).to.equal(2);
        done();
    });
});

experiment('math', { timeout: 1000 }, () => {

    before({ timeout: 500 }, (done) => {

        done();
    });

    test('returns true when 1 + 1 equals 2', { parallel: true }, (done) => {

        expect(1 + 1).to.equal(2);
        done();
    });
});

describe('math', () => {

    before((done) => {

        done();
    });

    after((done) => {

        done();
    });

    afterEach((done) => {

        done();
    });

    it('returns true when 1 + 1 equals 2', (done) => {

        expect(1 + 1).to.equal(2);
        done();
    });
});

suite('math', () => {

    test('returns true when 1 + 1 equals 2', (done) => {

        expect(1 + 1).to.equal(2);
        done();
    });
});

describe('expectation', () => {

    it('should be able to expect', (done) => {

        expect(true).to.be.true();

        done();
    });

    it('should be able to fail (This test should fail)', (done) => {

        fail('Should fail');

        done();
    });

});
