/// <reference path="tape.d.ts" />

/// <reference path="../node/node.d.ts" />

import tape = require('tape');

var x: any;
var value: any;
var err: any;
var a: any;
var b: any;
var err: any;
var num: number;
var name: string;
var msg: string;
var rs: NodeJS.ReadableStream;

var cb: tape.TestCase;
var t: tape.Test;

tape(name, cb);
tape(name, (test: tape.Test) => {
	t = test;
});

tape.skip(name, cb);
tape.only(name, cb);

rs = tape.createStream();
rs = tape.createStream(x);

var tx = tape.createHarness();
tx(name, cb);
tape.skip(name, cb);
tape.only(name, cb);

tape(name, (test: tape.Test) => {

	test.plan(num);
	test.end();

	test.fail(msg);
	test.pass(msg);
	test.skip(msg);

	test.ok(value, msg);
	test.true(value, msg);
	test.assert(value, msg);

	test.notOk(value, msg);
	test.false(value, msg);
	test.notok(value, msg);

	test.error(err, msg);
	test.ifError(err, msg);
	test.ifErr(err, msg);
	test.iferror(err, msg);

	test.equal(a, b, msg);
	test.equals(a, b, msg);
	test.isEqual(a, b, msg);
	test.is(a, b, msg);
	test.strictEqual(a, b, msg);
	test.strictEquals(a, b, msg);

	test.notEqual(a, b, msg);
	test.notEquals(a, b, msg);
	test.notStrictEqual(a, b, msg);
	test.notStrictEquals(a, b, msg);
	test.isNotEqual(a, b, msg);
	test.isNot(a, b, msg);
	test.not(a, b, msg);
	test.doesNotEqual(a, b, msg);
	test.notEqual(a, b, msg);
	test.isInequal(a, b, msg);

	test.deepEqual(a, b, msg);
	test.deepEquals(a, b, msg);
	test.isEquivalent(a, b, msg);
	test.same(a, b, msg);

	test.notDeepEqual(a, b, msg);
	test.notEquivalent(a, b, msg);
	test.notDeeply(a, b, msg);
	test.notSame(a, b, msg);
	test.isNotDeepEqual(a, b, msg);
	test.isNotDeeply(a, b, msg);
	test.isNotEquivalent(a, b, msg);
	test.isInequivalent(a, b, msg);

	test.deepLooseEqual(a, b, msg);
	test.looseEqual(a, b, msg);
	test.looseEquals(a, b, msg);

	test.notDeepLooseEqual(a, b, msg);
	test.notLooseEqual(a, b, msg);
	test.notLooseEquals(a, b, msg);

	test.throws(() => {

	}, value, msg);

	test.doesNotThrow(() => {

	}, value, msg);
});
