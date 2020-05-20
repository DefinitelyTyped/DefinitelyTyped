import tape = require('tape');

var name: string;
var cb: tape.TestCase;
var topts: tape.TestOptions;
var t: tape.Test;

tape(cb);
tape(name, cb);
tape(topts, cb);
tape(name, topts, cb);

tape(name, (test: tape.Test) => {
    t = test;
});

tape.skip(cb);
tape.skip(name, cb);
tape.skip(topts, cb);
tape.skip(name, topts, cb);

tape.only(cb);
tape.only(name, cb);
tape.only(topts, cb);
tape.only(name, topts, cb);

tape.onFinish(() => {});
tape.onFailure(() => {});

var sopts: tape.StreamOptions;
var rs: NodeJS.ReadableStream;
rs = tape.createStream();
rs = tape.createStream(sopts);

var htest: typeof tape;
htest = tape.createHarness();

class CustomException extends Error {
    constructor(message?: string) {
        super(message);
    }
}

tape(name, (test: tape.Test) => {
    var num: number;
    var ms: number;
    var value: any;
    var actual: any;
    var expected: any;
    var err: any;
    var fn = function() {};
    var msg: string;
    var extra: tape.AssertOptions;
    var regex: RegExp;

    var exceptionExpected: RegExp | (() => void);

    test.plan(num);
    test.end();
    test.end(err);

    test.fail(msg);
    test.fail(msg, extra);
    test.pass(msg);
    test.pass(msg, extra);
    test.timeoutAfter(ms);
    test.skip(msg);
    test.skip(msg, extra);

    test.ok(value);
    test.ok(value, msg);
    test.ok(value, msg, extra);
    test.true(value);
    test.true(value, msg);
    test.true(value, msg, extra);
    test.assert(value);
    test.assert(value, msg);
    test.assert(value, msg, extra);

    test.notOk(value);
    test.notOk(value, msg);
    test.notOk(value, msg, extra);
    test.false(value);
    test.false(value, msg);
    test.false(value, msg, extra);
    test.notok(value);
    test.notok(value, msg);
    test.notok(value, msg, extra);

    test.error(err, msg);
    test.error(err, msg, extra);
    test.ifError(err, msg);
    test.ifError(err, msg, extra);
    test.ifErr(err, msg);
    test.ifErr(err, msg, extra);
    test.iferror(err, msg);
    test.iferror(err, msg, extra);

    test.equal(actual, expected);
    test.equal(actual, expected, msg);
    test.equal(actual, expected, msg, extra);
    test.equals(actual, expected);
    test.equals(actual, expected, msg);
    test.equals(actual, expected, msg, extra);
    test.isEqual(actual, expected);
    test.isEqual(actual, expected, msg);
    test.isEqual(actual, expected, msg, extra);
    test.is(actual, expected);
    test.is(actual, expected, msg);
    test.is(actual, expected, msg, extra);
    test.strictEqual(actual, expected);
    test.strictEqual(actual, expected, msg);
    test.strictEqual(actual, expected, msg, extra);
    test.strictEquals(actual, expected);
    test.strictEquals(actual, expected, msg);
    test.strictEquals(actual, expected, msg, extra);

    test.notEqual(actual, expected);
    test.notEqual(actual, expected, msg);
    test.notEqual(actual, expected, msg, extra);
    test.notEquals(actual, expected);
    test.notEquals(actual, expected, msg);
    test.notEquals(actual, expected, msg, extra);
    test.notStrictEqual(actual, expected);
    test.notStrictEqual(actual, expected, msg);
    test.notStrictEqual(actual, expected, msg, extra);
    test.notStrictEquals(actual, expected);
    test.notStrictEquals(actual, expected, msg);
    test.notStrictEquals(actual, expected, msg, extra);
    test.isNotEqual(actual, expected);
    test.isNotEqual(actual, expected, msg);
    test.isNotEqual(actual, expected, msg, extra);
    test.isNot(actual, expected);
    test.isNot(actual, expected, msg);
    test.isNot(actual, expected, msg, extra);
    test.not(actual, expected);
    test.not(actual, expected, msg);
    test.not(actual, expected, msg, extra);
    test.doesNotEqual(actual, expected);
    test.doesNotEqual(actual, expected, msg);
    test.doesNotEqual(actual, expected, msg, extra);
    test.isInequal(actual, expected);
    test.isInequal(actual, expected, msg);
    test.isInequal(actual, expected, msg, extra);

    test.deepEqual(actual, expected);
    test.deepEqual(actual, expected, msg);
    test.deepEqual(actual, expected, msg, extra);
    test.deepEquals(actual, expected);
    test.deepEquals(actual, expected, msg);
    test.deepEquals(actual, expected, msg, extra);
    test.isEquivalent(actual, expected);
    test.isEquivalent(actual, expected, msg);
    test.isEquivalent(actual, expected, msg, extra);
    test.same(actual, expected);
    test.same(actual, expected, msg);
    test.same(actual, expected, msg, extra);

    test.notDeepEqual(actual, expected);
    test.notDeepEqual(actual, expected, msg);
    test.notDeepEqual(actual, expected, msg, extra);
    test.notEquivalent(actual, expected);
    test.notEquivalent(actual, expected, msg);
    test.notEquivalent(actual, expected, msg, extra);
    test.notDeeply(actual, expected);
    test.notDeeply(actual, expected, msg);
    test.notDeeply(actual, expected, msg, extra);
    test.notSame(actual, expected);
    test.notSame(actual, expected, msg);
    test.notSame(actual, expected, msg, extra);
    test.isNotDeepEqual(actual, expected);
    test.isNotDeepEqual(actual, expected, msg);
    test.isNotDeepEqual(actual, expected, msg, extra);
    test.isNotDeeply(actual, expected);
    test.isNotDeeply(actual, expected, msg);
    test.isNotDeeply(actual, expected, msg, extra);
    test.isNotEquivalent(actual, expected);
    test.isNotEquivalent(actual, expected, msg);
    test.isNotEquivalent(actual, expected, msg, extra);
    test.isInequivalent(actual, expected);
    test.isInequivalent(actual, expected, msg);
    test.isInequivalent(actual, expected, msg, extra);

    test.deepLooseEqual(actual, expected);
    test.deepLooseEqual(actual, expected, msg);
    test.deepLooseEqual(actual, expected, msg, extra);
    test.looseEqual(actual, expected);
    test.looseEqual(actual, expected, msg);
    test.looseEqual(actual, expected, msg, extra);
    test.looseEquals(actual, expected);
    test.looseEquals(actual, expected, msg);
    test.looseEquals(actual, expected, msg, extra);

    test.notDeepLooseEqual(actual, expected);
    test.notDeepLooseEqual(actual, expected, msg);
    test.notDeepLooseEqual(actual, expected, msg, extra);
    test.notLooseEqual(actual, expected);
    test.notLooseEqual(actual, expected, msg);
    test.notLooseEqual(actual, expected, msg, extra);
    test.notLooseEquals(actual, expected);
    test.notLooseEquals(actual, expected, msg);
    test.notLooseEquals(actual, expected, msg, extra);

    test.throws(fn);
    test.throws(fn, msg);
    test.throws(fn, exceptionExpected);
    test.throws(fn, exceptionExpected, msg);
    test.throws(fn, exceptionExpected, msg);
    test.throws(fn, CustomException);
    test.throws(fn, CustomException, msg);
    test.throws(fn, CustomException, msg);

    test.doesNotThrow(fn);
    test.doesNotThrow(fn, msg);
    test.doesNotThrow(fn, exceptionExpected);
    test.doesNotThrow(fn, exceptionExpected, msg);
    test.doesNotThrow(fn, CustomException);
    test.doesNotThrow(fn, CustomException, msg);

    test.test(name, st => {
        t = st;
    });

    test.test(name, topts, st => {
        t = st;
    });

    test.comment(msg);

    test.match(actual, regex);
    test.match(actual, regex, msg);
    test.match(actual, regex, msg, extra);

    test.doesNotMatch(actual, regex);
    test.doesNotMatch(actual, regex, msg);
    test.doesNotMatch(actual, regex, msg, extra);
});
