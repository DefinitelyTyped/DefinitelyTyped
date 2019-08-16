// Type definitions for ospec 4.0
// Project: https://github.com/MithrilJS/mithril.js/tree/next/ospec
// Definitions by: Már Örlygsson <https://github.com/maranomynet>
//                 Mike Linkovich <https://github.com/spacejack>
//                 Isiah Meadows <https://github.com/isiahmeadows>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

declare namespace o {
    type AssertionDescriber = (description: string) => void;

    interface Spy<Args extends any[], Returns> {
        (...args: Args): Returns;
        /** The number of times the function has been called */
        readonly callCount: number;
        /** The arguments that were passed to the function in the last time it was called */
        readonly args: Args;
        /** List of arguments that were passed to the function each tine it was called */
        readonly calls: Args[];
    }

    interface BasicAssertions<T = any> {
        /** Asserts that two values are strictly equal */
        equals(expected: T): AssertionDescriber;
        /** Asserts that two values are **not** strictly equal */
        notEquals(value: any): AssertionDescriber;
    }

    interface ObjectAssertions<T = any> extends BasicAssertions<T> {
        /** Asserts that two objects are recursively equal */
        deepEquals(expected: T): AssertionDescriber;
        /** Asserts that two objects are **not** recursively equal */
        notDeepEquals(value: object): AssertionDescriber;
    }

    interface FunctionAssertions<T = any> extends ObjectAssertions<T> {
        // FIXME: Find a more appropriate type annotation for the `error` parameter
        // NOTE: We're using `NewableFunction` because the API docs say "Object constructor"
        // Still TypeScript seems to accept something like `nonNewableFunction = () => {}`
        // which errors at runtime.

        /** Asserts that the function throws an error of a given type */
        throws(error: string | NewableFunction): AssertionDescriber;

        /** Asserts that the function does **not** throw an error of given type */
        notThrows(error: string | NewableFunction): AssertionDescriber; // See above
    }

    type Definer = (
        done: (error?: Error | {} | null) => void,
        timeout: (delay: number) => void,
    ) => void | Promise<void>;

    interface Result {
        pass: boolean | null;
        context: string;
        message: string;
        error: Error | null;
        testError: Error | null;
    }

    type Reporter = (results: Result[]) => number;

    interface Ospec {
        /** Starts a function assertion */
        <T extends () => void>(actual: T): FunctionAssertions<T>;
        /** Starts an object assertion */
        <T extends object>(actual: T): ObjectAssertions<T>;
        /** Starts an assertion */
        <T>(actual: T): BasicAssertions<T>;

        /** Defines a test */
        (name: string, assertions: Definer): void;

        /** Defines a group of tests */
        spec(name: string, tests: () => void): void;

        /** Defines code to be run at the beginning of a test group */
        before(setup: Definer): void;
        /** Defines code to be run before each test in a group */
        beforeEach(teardown: Definer): void;
        /** Defines code to be run at the end of a test group */
        after(setup: Definer): void;
        /** Defines code to be run after each test in a group */
        afterEach(teardown: Definer): void;

        /** Returns a function that records the number of times it gets called, and its arguments */
        spy<A extends any[]>(): Spy<A, undefined>; //tslint:disable no-unnecessary-generics
        spy<A extends any[], R>(fn: (...args: A) => R): Spy<A, R>;

        /** Amount of time (in milliseconds) to wait until bailing out of a test */
        timeout(delay: number): void;
        /** Configure the default amount of time (in milliseconds) to wait until bailing out of a group of tests */
        specTimeout(delay: number): void;

        /** Runs the test suite */
        run(reporter?: Reporter): void;
        /** Default reporter used by `o.run()` */
        report: Reporter;

        'new'(): Ospec;
    }
}

declare const o: o.Ospec;
export = o;
export as namespace o;
