// Type definitions for QUnit v1.16
// Project: http://qunitjs.com/
// Definitions by: Diullei Gomes <https://github.com/diullei>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface DoneCallbackObject {
	/**
	* The number of failed assertions
	*/
	failed: number;

	/**
	* The number of passed assertions
	*/
	passed: number;

	/**
	* The total number of assertions
	*/
	total: number;

	/**
	* The time in milliseconds it took tests to run from start to finish.
	*/
	runtime: number;
}

interface LogCallbackObject {
	/**
	* The boolean result of an assertion, true means passed, false means failed.
	*/
	result: boolean;

	/**
	* One side of a comparision assertion. Can be undefined when ok() is used.
	*/
	actual: Object;

	/**
	* One side of a comparision assertion. Can be undefined when ok() is used.
	*/
	expected: Object;

	/**
	* A string description provided by the assertion.
	*/
	message: string;

	/**
	* The associated stacktrace, either from an exception or pointing to the source 
	* of the assertion. Depends on browser support for providing stacktraces, so can be 
	* undefined.
	*/
	source: string;
}

interface ModuleStartCallbackObject {
	/**
	* Name of the next module to run
	*/
	name: string;
}

interface ModuleDoneCallbackObject {
	/**
	* Name of this module
	*/
	name: string;

	/**
	* The number of failed assertions
	*/
	failed: number;

	/**
	* The number of passed assertions
	*/
	passed: number;

	/**
	* The total number of assertions
	*/
	total: number;
}

interface TestDoneCallbackObject {
	/**
	* TName of the next test to run
	*/
	name: string;

	/**
	* Name of the current module
	*/
	module: string;

	/**
	* The number of failed assertions
	*/
	failed: number;

	/**
	* The number of passed assertions
	*/
	passed: number;

	/**
	* The total number of assertions
	*/
	total: number;

	/**
	* The total runtime, including setup and teardown
	*/
	duration: number;
}

interface TestStartCallbackObject {
	/**
	* Name of the next test to run
	*/
	name: string;

	/**
	* Name of the current module
	*/
	module: string;
}

interface Config {
	altertitle: boolean;
	autostart: boolean;
	current: Object;
	reorder: boolean;
	requireExpects: boolean;
	testTimeout: number;
	urlConfig: Array<URLConfigItem>;
	done: any;
}

interface URLConfigItem {
	id: string;
	label: string;
	tooltip: string;
}

interface LifecycleObject {
	/**
	* Runs before each test
	*/
	setup?: () => any;

	/**
	* Runs after each test
	*/
	teardown?: () => any;
}

interface QUnitAssert {
	/* ASSERT */
	assert: any;
	current_testEnvironment: any;
	jsDump: any;

    /**
    * Instruct QUnit to wait for an asynchronous operation.
    * 
    * When your test has any asynchronous exit points, call assert.async() to get a unique
    * resolution callback for each async operation. The callback returned from assert.async()
    * will throw an Error if is invoked more than once.
    */
    async(): any;

	/**
	* A deep recursive comparison assertion, working on primitive types, arrays, objects, 
	* regular expressions, dates and functions.
	*
	* The deepEqual() assertion can be used just like equal() when comparing the value of 
	* objects, such that { key: value } is equal to { key: value }. For non-scalar values, 
	* identity will be disregarded by deepEqual.
	*
	* @param actual Object or Expression being tested
	* @param expected Known comparison value
	* @param message A short description of the assertion
	*/
	deepEqual(actual: any, expected: any, message?: string): any;

	/** 
	* A non-strict comparison assertion, roughly equivalent to JUnit assertEquals.
	*
	* The equal assertion uses the simple comparison operator (==) to compare the actual 
	* and expected arguments. When they are equal, the assertion passes: any; otherwise, it fails. 
	* When it fails, both actual and expected values are displayed in the test result, 
	* in addition to a given message.
	* 
	* @param actual Expression being tested
	* @param expected Known comparison value
	* @param message A short description of the assertion
	*/
    equal(actual: any, expected: any, message?: string): any;

    /**
    * Specify how many assertions are expected to run within a test.
    *
    * To ensure that an explicit number of assertions are run within any test, use 
    * expect( number ) to register an expected count. If the number of assertions 
    * run does not match the expected count, the test will fail.
    *
    * @param amount Number of assertions in this test.
    */
    expect(amount: number): any;

	/**
	* An inverted deep recursive comparison assertion, working on primitive types, 
	* arrays, objects, regular expressions, dates and functions.
	*
	* The notDeepEqual() assertion can be used just like equal() when comparing the 
	* value of objects, such that { key: value } is equal to { key: value }. For non-scalar 
	* values, identity will be disregarded by notDeepEqual.
	* 
	* @param actual Object or Expression being tested
	* @param expected Known comparison value
	* @param message A short description of the assertion
	*/
	notDeepEqual(actual: any, expected: any, message?: string): any;

	/**
	* A non-strict comparison assertion, checking for inequality.
	*
	* The notEqual assertion uses the simple inverted comparison operator (!=) to compare 
	* the actual and expected arguments. When they aren't equal, the assertion passes: any; 
	* otherwise, it fails. When it fails, both actual and expected values are displayed 
	* in the test result, in addition to a given message.
	* 
	* @param actual Expression being tested
	* @param expected Known comparison value
	* @param message A short description of the assertion
	*/
	notEqual(actual: any, expected: any, message?: string): any;

	notPropEqual(actual: any, expected: any, message?: string): any;

	propEqual(actual: any, expected: any, message?: string): any;

	/**
	* A non-strict comparison assertion, checking for inequality.
	*
	* The notStrictEqual assertion uses the strict inverted comparison operator (!==) 
	* to compare the actual and expected arguments. When they aren't equal, the assertion 
	* passes: any; otherwise, it fails. When it fails, both actual and expected values are 
	* displayed in the test result, in addition to a given message.
	* 
	* @param actual Expression being tested
	* @param expected Known comparison value
	* @param message A short description of the assertion
	*/
	notStrictEqual(actual: any, expected: any, message?: string): any;

	/**
	* A boolean assertion, equivalent to CommonJS’s assert.ok() and JUnit’s assertTrue(). 
	* Passes if the first argument is truthy.
	*
	* The most basic assertion in QUnit, ok() requires just one argument. If the argument 
	* evaluates to true, the assertion passes; otherwise, it fails. If a second message 
	* argument is provided, it will be displayed in place of the result.
	* 
	* @param state Expression being tested
	* @param message A short description of the assertion
	*/
	ok(state: any, message?: string): any;

	/**
	* A strict type and value comparison assertion.
	*
	* The strictEqual() assertion provides the most rigid comparison of type and value with 
	* the strict equality operator (===)
	* 
	* @param actual Expression being tested
	* @param expected Known comparison value
	* @param message A short description of the assertion
	*/
	strictEqual(actual: any, expected: any, message?: string): any;

	/**
	* Assertion to test if a callback throws an exception when run.
	* 
	* When testing code that is expected to throw an exception based on a specific set of 
	* circumstances, use throws() to catch the error object for testing and comparison.
	* 
	* @param block Function to execute
	* @param expected Error Object to compare
	* @param message A short description of the assertion
	*/
	throws(block: () => any, expected: any, message?: string): any;

	/**
	* @param block Function to execute
	* @param message A short description of the assertion
	*/
	throws(block: () => any, message?: string): any;

    /**
    * Alias of throws.
    * 
    * In very few environments, like Closure Compiler, throws is considered a reserved word
    * and will cause an error. For that case, an alias is bundled called raises. It has the
    * same signature and behaviour, just a different name.
    * 
    * @param block Function to execute
    * @param expected Error Object to compare
    * @param message A short description of the assertion
    */
    raises(block: () => any, expected: any, message?: string): any;

    /**
    * Alias of throws.
    * 
    * In very few environments, like Closure Compiler, throws is considered a reserved word
    * and will cause an error. For that case, an alias is bundled called raises. It has the
    * same signature and behaviour, just a different name.
    * 
    * @param block Function to execute
    * @param message A short description of the assertion
    */
    raises(block: () => any, message?: string): any;
}

interface QUnitStatic extends QUnitAssert {	
	/* ASYNC CONTROL */

	/**
	* Start running tests again after the testrunner was stopped. See stop().
	*
	* When your async test has multiple exit points, call start() for the corresponding number of stop() increments.
	* 
	* @param decrement Optional argument to merge multiple start() calls into one. Use with multiple corrsponding stop() calls.
	*/
	start(decrement?: number): any;

	/**
	* Stop the testrunner to wait for async tests to run. Call start() to continue.
	*
	* When your async test has multiple exit points, call stop() with the increment argument, corresponding to the number of start() calls you need.
	*
	* On Blackberry 5.0, window.stop is a native read-only function. If you deal with that browser, use QUnit.stop() instead, which will work anywhere.
	*
	* @param decrement Optional argument to merge multiple stop() calls into one. Use with multiple corrsponding start() calls.
	*/
	stop(increment? : number): any;
	
	/* CALLBACKS */

	/**
	* Register a callback to fire whenever the test suite begins.
	*
	* QUnit.begin() is called once before running any tests. (a better would've been QUnit.start, 
	* but thats already in use elsewhere and can't be changed.)
	*
	* @param callback Callback to execute
	*/
	begin(callback: () => any): any;

	/**
	* Register a callback to fire whenever the test suite ends.
	*
	* @param callback Callback to execute.
	*/
	done(callback: (details: DoneCallbackObject) => any): any;

	/**
	* Register a callback to fire whenever an assertion completes.
	*
	* This is one of several callbacks QUnit provides. Its intended for integration scenarios like 
	* PhantomJS or Jenkins. The properties of the details argument are listed below as options.
	*
	* @param callback Callback to execute.
	*/
	log(callback: (details: LogCallbackObject) => any): any;

	/**
	* Register a callback to fire whenever a module ends.
	*
	* @param callback Callback to execute.
	*/
	moduleDone(callback: (details: ModuleDoneCallbackObject) => any): any;

	/**
	* Register a callback to fire whenever a module begins.
	*
	* @param callback Callback to execute.
	*/
	moduleStart(callback: (details: ModuleStartCallbackObject) => any): any;

	/**
	* Register a callback to fire whenever a test ends.
	*
	* @param callback Callback to execute.
	*/
	testDone(callback: (details: TestDoneCallbackObject) => any): any;

	/**
	* Register a callback to fire whenever a test begins.
	*
	* @param callback Callback to execute.
	*/
	testStart(callback: (details: TestStartCallbackObject) => any): any;
	
	/* CONFIGURATION */

	/**
	* QUnit has a bunch of internal configuration defaults, some of which are 
	* useful to override. Check the description for each option for details.
	*/
	config: Config;
	
	/* TEST */

	/**
	* Add an asynchronous test to run. The test must include a call to start().
	*
	* For testing asynchronous code, asyncTest will automatically stop the test runner 
	* and wait for your code to call start() to continue.
	*
	* @param name Title of unit being tested
	* @param expected Number of assertions in this test
	* @param test Function to close over assertions
	*/
	asyncTest(name: string, expected: number, test: (assert: QUnitAssert) => any): any;

	/**
	* Add an asynchronous test to run. The test must include a call to start().
	*
	* For testing asynchronous code, asyncTest will automatically stop the test runner 
	* and wait for your code to call start() to continue.
	*
	* @param name Title of unit being tested
	* @param test Function to close over assertions
	*/
	asyncTest(name: string, test: (assert: QUnitAssert) => any): any;

	/**
	* Specify how many assertions are expected to run within a test.
	*
	* To ensure that an explicit number of assertions are run within any test, use 
	* expect( number ) to register an expected count. If the number of assertions 
	* run does not match the expected count, the test will fail.
	*
	* @param amount Number of assertions in this test.
	* @depricated since version 1.16
	*/
	expect(amount: number): any;

	/**
	* Group related tests under a single label.
	*
	* All tests that occur after a call to module() will be grouped into that module. 
	* The test names will all be preceded by the module name in the test results. 
	* You can then use that module name to select tests to run.
	*
	* @param name Label for this group of tests
	* @param lifecycle Callbacks to run before and after each test
	*/
	module(name: string, lifecycle?: LifecycleObject): any;

	/**
	* Add a test to run.
	*
	* When testing the most common, synchronous code, use test().
	* The assert argument to the callback contains all of QUnit's assertion methods. 
	* If you are avoiding using any of QUnit's globals, you can use the assert 
	* argument instead.
	* 
	* @param title Title of unit being tested
	* @param expected Number of assertions in this test
	* @param test Function to close over assertions
	*/
	test(title: string, expected: number, test: (assert: QUnitAssert) => any): any;

	/**
	* @param title Title of unit being tested
	* @param test Function to close over assertions
	*/
	test(title: string, test: (assert: QUnitAssert) => any): any;

	/**
	* https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L1568
	*/
	equiv(a: any, b: any): any;

	/**
	* https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L897
	*/
	push(result: any, actual: any, expected: any, message: string): any;

	/**
	* https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L839
	*/
	reset(): any;
}

/* ASSERT */

/**
* A deep recursive comparison assertion, working on primitive types, arrays, objects, 
* regular expressions, dates and functions.
*
* The deepEqual() assertion can be used just like equal() when comparing the value of 
* objects, such that { key: value } is equal to { key: value }. For non-scalar values, 
* identity will be disregarded by deepEqual.
*
* @param actual Object or Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function deepEqual(actual: any, expected: any, message?: string): any;

/** 
* A non-strict comparison assertion, roughly equivalent to JUnit assertEquals.
*
* The equal assertion uses the simple comparison operator (==) to compare the actual 
* and expected arguments. When they are equal, the assertion passes: any; otherwise, it fails. 
* When it fails, both actual and expected values are displayed in the test result, 
* in addition to a given message.
* 
* @param actual Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function equal(actual: any, expected: any, message?: string): any;

/**
* An inverted deep recursive comparison assertion, working on primitive types, 
* arrays, objects, regular expressions, dates and functions.
*
* The notDeepEqual() assertion can be used just like equal() when comparing the 
* value of objects, such that { key: value } is equal to { key: value }. For non-scalar 
* values, identity will be disregarded by notDeepEqual.
* 
* @param actual Object or Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function notDeepEqual(actual: any, expected: any, message?: string): any;

/**
* A non-strict comparison assertion, checking for inequality.
*
* The notEqual assertion uses the simple inverted comparison operator (!=) to compare 
* the actual and expected arguments. When they aren't equal, the assertion passes; 
* otherwise, it fails. When it fails, both actual and expected values are displayed 
* in the test result, in addition to a given message.
* 
* @param actual Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function notEqual(actual: any, expected: any, message?: string): any;

/**
* A non-strict comparison assertion, checking for inequality.
*
* The notStrictEqual assertion uses the strict inverted comparison operator (!==) 
* to compare the actual and expected arguments. When they aren't equal, the assertion 
* passes; otherwise, it fails. When it fails, both actual and expected values are 
* displayed in the test result, in addition to a given message.
* 
* @param actual Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function notStrictEqual(actual: any, expected: any, message?: string): any;

/**
* A boolean assertion, equivalent to CommonJS’s assert.ok() and JUnit’s assertTrue(). 
* Passes if the first argument is truthy.
*
* The most basic assertion in QUnit, ok() requires just one argument. If the argument 
* evaluates to true, the assertion passes; otherwise, it fails. If a second message 
* argument is provided, it will be displayed in place of the result.
* 
* @param state Expression being tested
* @param message A short description of the assertion
*/
declare function ok(state: any, message?: string): any;

/**
* A strict type and value comparison assertion.
*
* The strictEqual() assertion provides the most rigid comparison of type and value with 
* the strict equality operator (===)
* 
* @param actual Expression being tested
* @param expected Known comparison value
* @param message A short description of the assertion
*/
declare function strictEqual(actual: any, expected: any, message?: string): any;

/**
* Assertion to test if a callback throws an exception when run.
* 
* When testing code that is expected to throw an exception based on a specific set of 
* circumstances, use throws() to catch the error object for testing and comparison.
* 
* @param block Function to execute
* @param expected Error Object to compare
* @param message A short description of the assertion
*/
declare function throws(block: () => any, expected: any, message?: string): any;

/**
* @param block Function to execute
* @param message A short description of the assertion
*/
declare function throws(block: () => any, message?: string): any;

/* ASYNC CONTROL */

/**
* Start running tests again after the testrunner was stopped. See stop().
*
* When your async test has multiple exit points, call start() for the corresponding number of stop() increments.
* 
* @param decrement Optional argument to merge multiple start() calls into one. Use with multiple corrsponding stop() calls.
*/
declare function start(decrement?: number): any;

/**
* Stop the testrunner to wait for async tests to run. Call start() to continue.
*
* When your async test has multiple exit points, call stop() with the increment argument, corresponding to the number of start() calls you need.
*
* On Blackberry 5.0, window.stop is a native read-only function. If you deal with that browser, use QUnit.stop() instead, which will work anywhere.
*
* @param decrement Optional argument to merge multiple stop() calls into one. Use with multiple corrsponding start() calls.
*/
declare function stop(increment? : number): any;
	
/* CALLBACKS */

/**
* Register a callback to fire whenever the test suite begins.
*
* QUnit.begin() is called once before running any tests. (a better would've been QUnit.start, 
* but thats already in use elsewhere and can't be changed.)
*
* @param callback Callback to execute
*/
declare function begin(callback: () => any): any;

/**
* Register a callback to fire whenever the test suite ends.
*
* @param callback Callback to execute.
*/
declare function done(callback: (details: DoneCallbackObject) => any): any;

/**
* Register a callback to fire whenever an assertion completes.
*
* This is one of several callbacks QUnit provides. Its intended for integration scenarios like 
* PhantomJS or Jenkins. The properties of the details argument are listed below as options.
*
* @param callback Callback to execute.
*/
declare function log(callback: (details: LogCallbackObject) => any): any;

/**
* Register a callback to fire whenever a module ends.
*
* @param callback Callback to execute.
*/
declare function moduleDone(callback: (details: ModuleDoneCallbackObject) => any): any;

/**
* Register a callback to fire whenever a module begins.
*
* @param callback Callback to execute.
*/
declare function moduleStart(callback: (name: string) => any): any;

/**
* Register a callback to fire whenever a test ends.
*
* @param callback Callback to execute.
*/
declare function testDone(callback: (details: TestDoneCallbackObject) => any): any;

/**
* Register a callback to fire whenever a test begins.
*
* @param callback Callback to execute.
*/
declare function testStart(callback: (details: TestStartCallbackObject) => any): any;
	
/* TEST */

/**
* Add an asynchronous test to run. The test must include a call to start().
*
* For testing asynchronous code, asyncTest will automatically stop the test runner 
* and wait for your code to call start() to continue.
*
* @param name Title of unit being tested
* @param expected Number of assertions in this test
* @param test Function to close over assertions
*/
declare function asyncTest(name: string, expected?: any, test?: (assert: QUnitAssert) => any): any;

/**
* Add an asynchronous test to run. The test must include a call to start().
*
* For testing asynchronous code, asyncTest will automatically stop the test runner 
* and wait for your code to call start() to continue.
*
* @param name Title of unit being tested
* @param test Function to close over assertions
*/
declare function asyncTest(name: string, test: (assert: QUnitAssert) => any): any;

/**
* Specify how many assertions are expected to run within a test.
*
* To ensure that an explicit number of assertions are run within any test, use 
* expect( number ) to register an expected count. If the number of assertions 
* run does not match the expected count, the test will fail.
*
* @param amount Number of assertions in this test.
* @depricated since version 1.16
*/
declare function expect(amount: number): any;

// ** conflict with TypeScript module keyword. Must be used on QUnit namespace
//declare var module: (name: string, lifecycle?: LifecycleObject) => any;

/**
* Add a test to run.
*
* When testing the most common, synchronous code, use test().
* The assert argument to the callback contains all of QUnit's assertion methods. 
* If you are avoiding using any of QUnit's globals, you can use the assert 
* argument instead.
* 
* @param title Title of unit being tested
* @param expected Number of assertions in this test
* @param test Function to close over assertions
*/
declare function test(title: string, expected: number, test: (assert?: QUnitAssert) => any): any;

/**
* @param title Title of unit being tested
* @param test Function to close over assertions
*/
declare function test(title: string, test: (assert?: QUnitAssert) => any): any;

declare function notPropEqual(actual: any, expected: any, message?: string): any;

declare function propEqual(actual: any, expected: any, message?: string): any;

// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L1568
declare function equiv(a: any, b: any): any;

// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L661
declare var raises: any;

/* QUNIT */
declare var QUnit: QUnitStatic;
