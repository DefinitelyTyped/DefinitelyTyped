// Type definitions for QUnit 1.10
// Project: http://qunitjs.com/
// Definitions by: Diullei Gomes <https://github.com/diullei>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped


interface DoneCallbackObject {
	failed: number;
	passed: number;
	total: number;
	runtime: number;
}

interface LogCallbackObject {
	result: bool;
	actual: Object;
	expected: Object;
	message: string;
}

interface ModuleStartCallbackObject {
	name: string;
}

interface ModuleDoneCallbackObject {
	name: string;
	failed: number;
	passed: number;
	total: number;
}

interface TestDoneCallbackObject {
	name: string;
	module: string;
	failed: number;
	passed: number;
	total: number;
}

interface TestStartCallbackObject {
	name: string;
	module: string;
	failed: number;
	passed: number;
	total: number;
}

interface Config {
	altertitle: bool;
	autostart: bool;
	current: Object;
	reorder: bool;
	requireExpects: bool;
	urlConfig: Array;
	done: any;
}

interface LifecycleObject {
	setup?: () => any;
	teardown?: () => any;
}

interface QUnitAssert {
	/* ASSERT */
	assert: any;
	current_testEnvironment: any;
	jsDump: any;

	deepEqual(actual: any, expected: any, message?: string);
	equal(actual: any, expected: any, message?: string);
	notDeepEqual(actual: any, expected: any, message?: string);
	notEqual(actual: any, expected: any, message?: string);
	notPropEqual(actual: any, expected: any, message?: string);
	propEqual(actual: any, expected: any, message?: string);
	notStrictEqual(actual: any, expected: any, message?: string);
	ok(state: any, message?: string);
	strictEqual(actual: any, expected: any, message?: string);
	throws(block: () => any, expected: any, message?: string);
	throws(block: () => any, message?: string);
}

interface QUnitStatic extends QUnitAssert{	
	/* ASYNC CONTROL */
	start(decrement?: number);
	stop(increment? : number);
	
	/* CALLBACKS */
	begin(callback: () => any);
	done(callback: (details: DoneCallbackObject) => any);
	log(callback: (details: LogCallbackObject) => any);
	moduleDone(callback: (details: ModuleDoneCallbackObject) => any);
	moduleStart(callback: (details: ModuleStartCallbackObject) => any);
	testDone(callback: (details: TestDoneCallbackObject) => any);
	testStart(callback: (details: TestStartCallbackObject) => any);
	
	/* CONFIGURATION */
	config: Config;
	
	/* TEST */
	asyncTest(name: string, expected: number, test: () => any);
	asyncTest(name: string, test: () => any);
	expect(amount: number);
	module(name: string, lifecycle?: LifecycleObject);
	test(title: string, expected: number, test: (assert: QUnitAssert) => any);
	test(title: string, test: (assert: QUnitAssert) => any);

	// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L1568
	equiv(a: any, b: any);

	// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L661
	raises: any;

	// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L897
	push(result, actual, expected, message): any;

	// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L839
	reset(): any;
}

/* ASSERT */
declare function deepEqual(actual: any, expected: any, message?: string);
declare function equal(actual: any, expected: any, message?: string);
declare function notDeepEqual(actual: any, expected: any, message?: string);
declare function notEqual(actual: any, expected: any, message?: string);
declare function notStrictEqual(actual: any, expected: any, message?: string);
declare function ok(state: any, message?: string);
declare function strictEqual(actual: any, expected: any, message?: string);
declare function throws(block: () => any, expected: any, message?: string);
declare function throws(block: () => any, message?: string);

/* ASYNC CONTROL */
declare function start(decrement?: number);
declare function stop(increment? : number);
	
/* CALLBACKS */
declare function begin(callback: () => any);
declare function done(callback: (details: DoneCallbackObject) => any);
declare function log(callback: (details: LogCallbackObject) => any);
declare function moduleDone(callback: (details: ModuleDoneCallbackObject) => any);
declare function moduleStart(callback: (name: string) => any);
declare function testDone(callback: (details: TestDoneCallbackObject) => any);
declare function testStart(callback: (details: TestStartCallbackObject) => any);
	
/* TEST */
declare function asyncTest(name: string, expected?: any, test?: () => any);
declare function expect(amount: number);

// ** conflict with TypeScript module keyword. Must be used on QUnit namespace
//declare var module: (name: string, lifecycle?: LifecycleObject) => any;

declare function test(title: string, expected: number, test: (assert?: QUnitAssert) => any);
declare function test(title: string, test: (assert?: QUnitAssert) => any);

declare function notPropEqual(actual: any, expected: any, message?: string);
declare function propEqual(actual: any, expected: any, message?: string);

// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L1568
declare function equiv(a: any, b: any);

// https://github.com/jquery/qunit/blob/master/qunit/qunit.js#L661
declare var raises: any;

/* QUNIT */
declare var QUnit: QUnitStatic;