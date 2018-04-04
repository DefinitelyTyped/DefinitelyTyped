/**
 * Defines a tests block
 */
declare const describe: adone.shani.I.DescribeFunction;

/**
 * Defines a tests block
 */
declare const context: adone.shani.I.DescribeFunction;

/**
 * Defines a test
 */
declare const it: adone.shani.I.TestFunction;

/**
 * Defines a test
 */
declare const specify: adone.shani.I.TestFunction;

/**
 * Defines a hook that will be called only once before the block's tests
 */
declare const before: adone.shani.I.HookFunction;

/**
 * Defines a hook that will be called only once after the block's tests
 */
declare const after: adone.shani.I.HookFunction;

/**
 * Defines a hook that will be called before each test
 */
declare const beforeEach: adone.shani.I.HookFunction;

/**
 * Defines a hook that will be called after each test
 */
declare const afterEach: adone.shani.I.HookFunction;

/**
 * assertion functions
 */
declare const assert: adone.assertion.I.AssertFunction;

/**
 * bdd-style assertion functons
 */
declare const expect: adone.assertion.I.ExpectFunction;

/**
 * tools for installing controllable timer functions
 */
declare const fakeClock: adone.util.I.fakeClock.FakeClock;

/**
 * defines a spy function
 */
declare const spy: typeof adone.shani.util.spy;

/**
 * defines a stub function
 */
declare const stub: typeof adone.shani.util.stub;

/**
 * defines a mock function
 */
declare const mock: typeof adone.shani.util.mock;

/**
 * defines a matcher for spies/stubs/mocks
 */
declare const match: typeof adone.shani.util.match;

/**
 * assertion tool for http server responses
 */
declare const request: typeof adone.shani.util.request;
