/// <reference types="bluebird" />

import tape = require('blue-tape');
import P = require('bluebird');

var name: string;
var cb: tape.TestCase;
var opts: tape.TestOptions;
var t: tape.Test;

tape(cb);
tape(name, cb);
tape(opts, cb);
tape(name, opts, cb);

tape(name, (test: tape.Test) => {
	t = test;
});

tape.skip(name, cb);
tape.only(name, cb);


var sopts: tape.StreamOptions;
var rs: NodeJS.ReadableStream;
rs = tape.createStream();
rs = tape.createStream(sopts);


var htest: typeof tape;
htest = tape.createHarness();


tape(name, (test: tape.Test) => {
	var num: number;
	var ms: number;
	var value: any;
	var actual: any;
	var expected: any;
	var err: any;
	var fn = function() {};
	var msg: string;

	var exceptionExpected: RegExp | (() => void);

	test.plan(num);
	test.end();
	test.end(err);

	test.fail(msg);
	test.pass(msg);
	test.timeoutAfter(ms);
	test.skip(msg);

	test.ok(value);
	test.ok(value, msg);
	test.true(value);
	test.true(value, msg);
	test.assert(value);
	test.assert(value, msg);

	test.notOk(value);
	test.notOk(value, msg);
	test.false(value);
	test.false(value, msg);
	test.notok(value);
	test.notok(value, msg);

	test.error(err, msg);
	test.ifError(err, msg);
	test.ifErr(err, msg);
	test.iferror(err, msg);

	test.equal(actual, expected);
	test.equal(actual, expected, msg);
	test.equals(actual, expected);
	test.equals(actual, expected, msg);
	test.isEqual(actual, expected);
	test.isEqual(actual, expected, msg);
	test.is(actual, expected);
	test.is(actual, expected, msg);
	test.strictEqual(actual, expected);
	test.strictEqual(actual, expected, msg);
	test.strictEquals(actual, expected);
	test.strictEquals(actual, expected, msg);

	test.notEqual(actual, expected);
	test.notEqual(actual, expected, msg);
	test.notEquals(actual, expected);
	test.notEquals(actual, expected, msg);
	test.notStrictEqual(actual, expected);
	test.notStrictEqual(actual, expected, msg);
	test.notStrictEquals(actual, expected);
	test.notStrictEquals(actual, expected, msg);
	test.isNotEqual(actual, expected);
	test.isNotEqual(actual, expected, msg);
	test.isNot(actual, expected);
	test.isNot(actual, expected, msg);
	test.not(actual, expected);
	test.not(actual, expected, msg);
	test.doesNotEqual(actual, expected);
	test.doesNotEqual(actual, expected, msg);
	test.isInequal(actual, expected);
	test.isInequal(actual, expected, msg);

	test.deepEqual(actual, expected);
	test.deepEqual(actual, expected, msg);
	test.deepEquals(actual, expected);
	test.deepEquals(actual, expected, msg);
	test.isEquivalent(actual, expected);
	test.isEquivalent(actual, expected, msg);
	test.same(actual, expected);
	test.same(actual, expected, msg);

	test.notDeepEqual(actual, expected);
	test.notDeepEqual(actual, expected, msg);
	test.notEquivalent(actual, expected);
	test.notEquivalent(actual, expected, msg);
	test.notDeeply(actual, expected);
	test.notDeeply(actual, expected, msg);
	test.notSame(actual, expected);
	test.notSame(actual, expected, msg);
	test.isNotDeepEqual(actual, expected);
	test.isNotDeepEqual(actual, expected, msg);
	test.isNotDeeply(actual, expected);
	test.isNotDeeply(actual, expected, msg);
	test.isNotEquivalent(actual, expected);
	test.isNotEquivalent(actual, expected, msg);
	test.isInequivalent(actual, expected);
	test.isInequivalent(actual, expected, msg);

	test.deepLooseEqual(actual, expected);
	test.deepLooseEqual(actual, expected, msg);
	test.looseEqual(actual, expected);
	test.looseEqual(actual, expected, msg);
	test.looseEquals(actual, expected);
	test.looseEquals(actual, expected, msg);

	test.notDeepLooseEqual(actual, expected);
	test.notDeepLooseEqual(actual, expected, msg);
	test.notLooseEqual(actual, expected);
	test.notLooseEqual(actual, expected, msg);
	test.notLooseEquals(actual, expected);
	test.notLooseEquals(actual, expected, msg);

	test.throws(fn);
	test.throws(fn, msg);
	test.throws(fn, exceptionExpected);
	test.throws(fn, exceptionExpected, msg);

	test.doesNotThrow(fn);
	test.doesNotThrow(fn, msg);
	test.doesNotThrow(fn, exceptionExpected);
	test.doesNotThrow(fn, exceptionExpected, msg);

	test.test(name, (st) => {
		t = st;
	});

	test.comment(msg);
});

tape('simple delay', (test) => P.delay(1));

tape('nested tests with promises', function(test) {
    test.test('delay1', () => P.delay(1) );
    test.test('delay2', () => P.delay(1) );
});
