// Type definitions for mocha-sugar-free 1.4
// Project: https://github.com/Joris-van-der-Wel/mocha-sugar-free#readme
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Test, Suite } from 'mocha';

/** Construct a type with the properties of T except for those in type K. */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

declare namespace Mocha {
	type TestCase = (this: undefined, context: TestContext) => void | PromiseLike<any>;
	type TestCaseWithDone = (this: undefined, context: TestContextWithDone) => void;
	type HookFunc = (this: undefined, context: HookContext) => void;
	type SuiteFunc = (this: undefined, context: SuiteContext) => void;

	interface Options {
		[option: string]: any;

		/**
		 * Whether the context should contain a `done` callback.
		 */
		async?: boolean;

		/**
		 * Set whether timeouts are enabled.
		 */
		enableTimeouts?: boolean;

		/**
		 * Whether failing to return a PromiseLike should fail the test.
		 */
		expectPromise?: boolean;

		/**
		 * Whether the test should be skipped unconditionally.
		 */
		skip?: boolean;

		/**
		 * Whether the test should be skipped in a browser environment.
		 */
		skipIfBrowser?: boolean;

		/**
		 * Whether the test should be skipped in a WebWorker.
		 */
		skipIfWebWorker?: boolean;

		/**
		 * Whether the test should be skipped outside a browser environment.
		 */
		skipUnlessBrowser?: boolean;

		/**
		 * Set test slowness threshold.
		 */
		slow?: string | number;

		/**
		 * Set test timeout.
		 */
		timeout?: string | number;

		/**
		 * The test title. Replaced by the title parameter if present.
		 */
		title?: string;

		/**
		 * The test function.
		 */
		fn?: TestCase | TestCaseWithDone | SuiteFunc | HookFunc;
	}

	// #region Test functions
	interface BaseInterface {
		/**
		 * The detected Mocha interface.
		 *
		 * @default "bdd"
		 */
		detectedInterface: 'bdd' | 'tdd' | 'qunit';

		/**
		 * Triggers root suite execution.
		 *
		 * - _Only available if flag `--delay` is passed to Mocha._
		 *
		 * @see https://mochajs.org/api/global.html#runWithSuite
		 */
		run(): void;
	}

	interface BDD extends BaseInterface {
		detectedInterface: 'bdd';

		/**
		 * [bdd]
		 *
		 * Describe a "suite" with the given `title` and callback `fn` containing nested suites.
		 */
		describe: SuiteFunction;

		/**
		 * [bdd]
		 *
		 * Describe a "suite" with the given `title` and callback `fn` containing nested suites.
		 *
		 * Indicates this suite should not be executed.
		 */
		xdescribe: PendingSuiteFunction;

		/**
		 * [bdd]
		 *
		 * Describe a "suite" with the given `title` and callback `fn` containing nested suites.
		 */
		context: SuiteFunction;

		/**
		 * [bdd]
		 *
		 * Describe a "suite" with the given `title` and callback `fn` containing nested suites.
		 *
		 * Indicates this suite should not be executed.
		 */
		xcontext: PendingSuiteFunction;

		/**
		 * [bdd]
		 *
		 * Describe a specification or test-case with the given `title` and callback `fn` acting as a thunk.
		 *
		 * The name of the function is used as the name of the test if `title` is not supplied.
		 */
		it: TestFunction;

		/**
		 * [bdd]
		 *
		 * Describe a specification or test-case with the given `title` and callback `fn` acting as a thunk.
		 *
		 * The name of the function is used as the name of the test if `title` is not supplied.
		 *
		 * Indicates this test should not be executed.
		 */
		xit: PendingTestFunction;

		/**
		 * [bdd]
		 *
		 * Describe a specification or test-case with the given `title` and callback `fn` acting as a thunk.
		 *
		 * The name of the function is used as the name of the test if `title` is not supplied.
		 */
		specify: TestFunction;

		/**
		 * [bdd]
		 *
		 * Describe a specification or test-case with the given `title` and callback `fn` acting as a thunk.
		 *
		 * The name of the function is used as the name of the test if `title` is not supplied.
		 *
		 * Indicates this test should not be executed.
		 */
		xspecify: PendingTestFunction;

		/**
		 * [bdd]
		 *
		 * Execute before running tests.
		 *
		 * @see https://mochajs.org/api/global.html#before
		 */
		before: HookFunction;

		/**
		 * [bdd]
		 *
		 * Execute after running tests.
		 *
		 * @see https://mochajs.org/api/global.html#after
		 */
		after: HookFunction;

		/**
		 * [bdd]
		 *
		 * Execute before each test case.
		 *
		 * @see https://mochajs.org/api/global.html#beforeEach
		 */
		beforeEach: HookFunction;

		/**
		 * [bdd]
		 *
		 * Execute after each test case.
		 *
		 * @see https://mochajs.org/api/global.html#afterEach
		 */
		afterEach: HookFunction;
	}

	interface TDD extends BaseInterface {
		detectedInterface: 'tdd';

		/**
		 * [tdd, qunit]
		 *
		 * Describe a "suite" with the given `title` and callback `fn` containing nested suites.
		 */
		suite: SuiteFunction;

		/**
		 * [tdd, qunit]
		 *
		 * Describe a specification or test-case with the given `title` and callback `fn` acting as a thunk.
		 *
		 * The name of the function is used as the name of the test if `title` is not supplied.
		 */
		test: TestFunction;

		/**
		 * [tdd]
		 *
		 * Execute before running tests.
		 *
		 * @see https://mochajs.org/api/global.html#before
		 */
		suiteSetup: HookFunction;

		/**
		 * [tdd]
		 *
		 * Execute after running tests.
		 *
		 * @see https://mochajs.org/api/global.html#after
		 */
		suiteTeardown: HookFunction;

		/**
		 * [tdd]
		 *
		 * Execute before each test case.
		 *
		 * @see https://mochajs.org/api/global.html#beforeEach
		 */
		setup: HookFunction;

		/**
		 * [tdd]
		 *
		 * Execute after each test case.
		 *
		 * @see https://mochajs.org/api/global.html#afterEach
		 */
		teardown: HookFunction;
	}

	interface QUnit extends BaseInterface {
		detectedInterface: 'qunit';

		suite: SuiteFunction;
		test: TestFunction;
	}

	type AnyInterface = Omit<BDD, 'detectedInterface'> & Omit<TDD, 'detectedInterface'> & Omit<QUnit, 'detectedInterface'> & BaseInterface;
	// #endregion

	// #region Test context
	interface SuiteContext {
		isSuite: true;
		isTest: false;
		isHook: false;
	}

	interface HookContext {
		isSuite: false;
		isTest: false;
		isHook: true;
		hook: 'before' | 'after' | 'beforeEach' | 'afterEach';
	}

	interface TestContextBase {
		isSuite: false;
		isTest: true;
		isHook: false;

		/**
		 * Mark a test as skipped.
		 */
		skip(): never;

		/**
		 * Get test timeout.
		 */
		timeout(): number;

		/**
		 * Set test timeout.
		 */
		timeout(ms: string | number): this;

		/**
		 * Get test slowness threshold.
		 */
		slow(): number;

		/**
		 * Set test slowness threshold.
		 */
		slow(ms: string | number): this;

		/**
		 * Get whether timeouts are enabled.
		 */
		enableTimeouts(): boolean;

		/**
		 * Set whether timeouts are enabled.
		 */
		enableTimeouts(enabled: boolean): this;
	}

	interface TestContext extends TestContextBase {
		/**
		 * Mark a test as completed.
		 */
		done: null;
	}

	interface TestContextWithDone extends TestContextBase {
		/**
		 * Mark a test as completed.
		 */
		done(err?: any): void;
	}
	// #endregion

	// #region Test function types
	/**
	 * [bdd, tdd]
	 *
	 * Describe a "hook" to execute the given callback `fn`.
	 *
	 * The name of the function is used as the name of the hook.
	 */
	interface HookFunction {
		(fn?: HookFunc): void;
		(options: Options & { fn?: HookFunc }, fn?: HookFunc): void;
	}

	/**
	 * [bdd, tdd, qunit]
	 *
	 * Describe a "suite" with the given `title` and callback `fn` containing nested suites.
	 */
	interface SuiteFunction {
		(title: string, fn?: SuiteFunc): Suite;
		(title: string, options?: Options & { fn?: SuiteFunc }, fn?: SuiteFunc): Suite;
		// tslint:disable-next-line: unified-signatures
		(options: Options & { title: string; fn?: SuiteFunc }, fn?: SuiteFunc): Suite;

		/**
		 * [bdd, tdd, qunit]
		 *
		 * Indicates this suite should be executed exclusively.
		 */
		only: ExclusiveSuiteFunction;

		/**
		 * [bdd, tdd]
		 *
		 * Indicates this suite should not be executed.
		 */
		skip: PendingSuiteFunction;
	}

	/**
	 * [bdd, tdd, qunit]
	 *
	 * Describe a "suite" with the given `title` and callback `fn` containing nested suites.
	 *
	 * Indicates this suite should be executed exclusively.
	 */
	interface ExclusiveSuiteFunction {
		(title: string, fn?: SuiteFunc): Suite;
		(title: string, options?: Options & { fn?: SuiteFunc }, fn?: SuiteFunc): Suite;
		// tslint:disable-next-line: unified-signatures
		(options: Options & { title: string; fn?: SuiteFunc }, fn?: SuiteFunc): Suite;
	}

	/**
	 * [bdd, tdd]
	 *
	 * Describe a "suite" with the given `title` and callback `fn` containing nested suites.
	 *
	 * Indicates this suite should not be executed.
	 *
	 * @returns [bdd] `Suite`
	 * @returns [tdd] `void`
	 */
	interface PendingSuiteFunction {
		(title: string, fn?: SuiteFunc): Suite | void;
		(title: string, options?: Options & { fn?: SuiteFunc }, fn?: SuiteFunc): Suite | void;
		// tslint:disable-next-line: unified-signatures
		(options: Options & { title: string; fn?: SuiteFunc }, fn?: SuiteFunc): Suite | void;
	}

	/**
	 * [bdd, tdd, qunit]
	 *
	 * Describe a specification or test-case with the given `title` and callback `fn` acting as a thunk.
	 *
	 * The name of the function is used as the name of the test if `title` is not supplied.
	 */
	interface TestFunction {
		(fn: TestCase): Test;
		(title: string, fn?: TestCase): Test;
		(title: string, options: Options & { async?: false; fn?: TestCase }, fn?: TestCase): Test;
		(title: string, options: Options & { async: true; fn?: TestCaseWithDone }, fn?: TestCaseWithDone): Test;
		// tslint:disable-next-line: unified-signatures
		(options: Options & { async?: false; fn?: TestCase }, fn?: TestCase): Test;
		(options: Options & { async: true; fn?: TestCaseWithDone }, fn?: TestCaseWithDone): Test;

		/**
		 * [bdd, tdd, qunit]
		 *
		 * Indicates this test should be executed exclusively.
		 */
		only: ExclusiveTestFunction;

		/**
		 * [bdd, tdd, qunit]
		 *
		 * Indicates this test should not be executed.
		 */
		skip: PendingTestFunction;
	}

	/**
	 * [bdd, tdd, qunit]
	 *
	 * Describe a specification or test-case with the given `title` and callback `fn` acting as a thunk.
	 *
	 * The name of the function is used as the name of the test if `title` is not supplied.
	 *
	 * Indicates this test should be executed exclusively.
	 */
	interface ExclusiveTestFunction {
		(fn: TestCase): Test;
		(title: string, fn?: TestCase): Test;
		(title: string, options: Options & { async?: false; fn?: TestCase }, fn?: TestCase): Test;
		(title: string, options: Options & { async: true; fn?: TestCaseWithDone }, fn?: TestCaseWithDone): Test;
		// tslint:disable-next-line: unified-signatures
		(options: Options & { async?: false; fn?: TestCase }, fn?: TestCase): Test;
		(options: Options & { async: true; fn?: TestCaseWithDone }, fn?: TestCaseWithDone): Test;
	}

	/**
	 * [bdd, tdd, qunit]
	 *
	 * Describe a specification or test-case with the given `title` and callback `fn` acting as a thunk.
	 *
	 * The name of the function is used as the name of the test if `title` is not supplied.
	 *
	 * Indicates this test should not be executed.
	 */
	interface PendingTestFunction {
		(fn: TestCase): Test;
		(title: string, fn?: TestCase): Test;
		(title: string, options: Options & { async?: false; fn?: TestCase }, fn?: TestCase): Test;
		(title: string, options: Options & { async: true; fn?: TestCaseWithDone }, fn?: TestCaseWithDone): Test;
		// tslint:disable-next-line: unified-signatures
		(options: Options & { async?: false; fn?: TestCase }, fn?: TestCase): Test;
		(options: Options & { async: true; fn?: TestCaseWithDone }, fn?: TestCaseWithDone): Test;
	}
	// #endregion
}

declare const Mocha: Mocha.AnyInterface;

export = Mocha;
