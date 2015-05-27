/// <reference path="nodeunit.d.ts" />

import nodeunit = require('nodeunit');

var num: number;
var value: any;
var actual: any;
var expected: any;
var message: string;
var operator: string;
var error: any;
var block: () =>{

};

export var testGroup: nodeunit.ITestGroup = {
	setUp: function (callback: nodeunit.ICallbackFunction) {
		callback();
	},
	tearDown: function (callback: nodeunit.ICallbackFunction) {
		callback();
	},
	test1: function (test: nodeunit.Test) {
		test.expect(num);

		test.fail(actual, expected, message, operator);
		test.assert(value, message);
		test.ok(value);
		test.ok(value, message);
		test.equal(actual, expected);
		test.equal(actual, expected, message);
		test.notEqual(actual, expected);
		test.notEqual(actual, expected, message);
		test.deepEqual(actual, expected);
		test.deepEqual(actual, expected, message);
		test.notDeepEqual(actual, expected);
		test.notDeepEqual(actual, expected, message);
		test.strictEqual(actual, expected);
		test.strictEqual(actual, expected, message);
		test.notStrictEqual(actual, expected);
		test.notStrictEqual(actual, expected, message);
		test.throws(block);
		test.throws(block, error);
		test.throws(block, error, message);
		test.doesNotThrow(block);
		test.doesNotThrow(block, error);
		test.doesNotThrow(block, error, message);
		test.ifError(value);

		//assertion wrappers
		test.equals(actual, expected);
		test.equals(actual, expected, message);
		test.same(actual, expected);
		test.same(actual, expected, message);

		test.done(error);
		test.done();
	}
};
