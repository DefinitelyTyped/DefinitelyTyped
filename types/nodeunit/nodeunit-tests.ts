
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
	setUp: (callback) => {
		callback();
	},
	tearDown: (callback) => {
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
	},
	"This is a test with a nice description": (test: nodeunit.Test) => {
		test.done();
	}
};


// see https://github.com/caolan/nodeunit/blob/master/examples/nested/nested_reporter_test.unit.js for example.
// (https://github.com/caolan/nodeunit/commit/9fee91149324f79753eadbcf8993399a7d76da40)



var testCase = nodeunit.testCase;

export var testCaseGroup = testCase({
    "Test 0.1": function(test: nodeunit.Test) {
        test.ok(true);
        test.done();
    },

    "TC 1": testCase({
        "TC 1.1": testCase({
            "Test 1.1.1": function(test: nodeunit.Test) {
                test.ok(true);
                test.done();
            }
        })
    }),

    "TC 2": testCase({
        "TC 2.1": testCase({
            "TC 2.1.1": testCase({
                "Test 2.1.1.1": function(test: nodeunit.Test) {
                    test.ok(true);
                    test.done();
                },

                "Test 2.1.1.2": function(test: nodeunit.Test) {
                    test.ok(true);
                    test.done();
                }
            }),

            "TC 2.2.1": testCase({
                "Test 2.2.1.1": function(test: nodeunit.Test) {
                    test.ok(true);
                    test.done();
                },

                "TC 2.2.1.1": testCase({
                    "Test 2.2.1.1.1": function(test: nodeunit.Test) {
                        test.ok(true);
                        test.done();
                    },
                }),

                "Test 2.2.1.2": function(test: nodeunit.Test) {
                    test.ok(true);
                    test.done();
                }
            })
        })
    }),

    "TC 3": testCase({
        "TC 3.1": testCase({
            "TC 3.1.1": testCase({
                "Test 3.1.1.1 (should fail)": function(test: nodeunit.Test) {
                    test.ok(false);
                    test.done();
                }
            })
        })
    })
});





