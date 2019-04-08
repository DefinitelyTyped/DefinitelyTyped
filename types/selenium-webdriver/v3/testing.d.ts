import { promise } from './index';
import * as Testing from './testing';

export const describe: {
    /**
    * Registers a new test suite.
    * @param name The suite name.
    * @param fn The suite function, or {@code undefined} to define a pending test suite.
    */
    (name: string, fn: Function): void;

    /**
     * An alias for {@link #describe()} that marks the suite as exclusive,
     * suppressing all other test suites.
     * @param {string} name The suite name.
     * @param {function()=} opt_fn The suite function, or `undefined` to define
     *     a pending test suite.
     */
    only(name: string, fn: Function): void;

    /**
     * Defines a suppressed test suite.
     * @param name The suite name.
     * @param fn The suite function, or {@code undefined} to define a pending test suite.
     */
    skip(name: string, fn: Function): void;
};

/**
 * Defines a suppressed test suite.
 * @param name The suite name.
 * @param fn The suite function, or {@code undefined} to define a pending test suite.
 */
export function xdescribe(name: string, fn: Function): void;

/**
 * Register a function to call after the current suite finishes.
 * @param fn
 */
export function after(fn: Function): void;

/**
 * Register a function to call after each test in a suite.
 * @param fn
 */
export function afterEach(fn: Function): void;

/**
 * Register a function to call before the current suite starts.
 * @param fn
 */
export function before(fn: Function): void;

/**
 * Register a function to call before each test in a suite.
 * @param fn
 */
export function beforeEach(fn: Function): void;

export const it: {
    /**
     * Add a test to the current suite.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    (name: string, fn: Function): void;

    /**
     * An alias for {@link #it()} that flags the test as the only one that should
     * be run within the current suite.
     * @param {string} name The test name.
     * @param {function()=} opt_fn The test function, or `undefined` to define
     *     a pending test case.
     */
    only(name: string, fn: Function): void;

    /**
     * Adds a test to the current suite while suppressing it so it is not run.
     * @param name The test name.
     * @param fn The test function, or {@code undefined} to define a pending test case.
     */
    skip(name: string, fn: Function): void;
}

/**
 * Adds a test to the current suite while suppressing it so it is not run.
 * @param name The test name.
 * @param fn The test function, or {@code undefined} to define a pending test case.
 */
export function xit(name: string, fn: Function): void;

/**
 * @return {!promise.ControlFlow} the control flow instance used by this module
 *     to coordinate test actions.
 */
export function controlFlow(): promise.ControlFlow;

/**
 * Ignores the test chained to this function if the provided predicate returns
 * true.
 * @param {function(): boolean} predicateFn A predicate to call to determine
 *     if the test should be suppressed. This function MUST be synchronous.
 * @return {!Object} An object with wrapped versions of {@link #it()} and
 *     {@link #describe()} that ignore tests as indicated by the predicate.
 */
export function ignore(predicateFn: () => boolean): typeof Testing;
