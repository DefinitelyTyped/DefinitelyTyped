// Type definitions for ospec 1.4
// Project: https://github.com/MithrilJS/mithril.js#readme
// Definitions by: Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace ospec {
    interface Assertion {
        equals: AssertionFn;
        notEquals: AssertionFn;
        deepEquals: AssertionFn;
        notDeepEquals: AssertionFn;
        [_: string]: AssertionFn;
    }

    type AssertionFn = (value: any) => (description: string) => void;

    type done = () => void;

    type timeout = (timeout: number) => void;

    type TestFn = (done?: done, timeout?: timeout) => void | Promise<void>;

    interface Spy<T extends Function = Function> {
        callCount: number;
        args: T["arguments"];
    }

    interface SpyFn {
        (): Spy & Function;
        <T extends Function>(fn: T): Spy<T> & T;
    }

    interface ResultTrue {
        pass: true;
    }

    interface ResultFalse {
        pass: false;
        error: Error["stack"];
        message: Error["message"] | string;
        context: string;
    }

    interface Static {
        (title: string, assertions: TestFn): void;
        (value: any): Assertion;
        after: (done: done, setup: timeout) => void;
        afterEach: Static["after"];
        before: (done: done, setup: timeout) => void;
        beforeEach: Static["before"];
        new: () => Static;
        only: (title: string, assertions: TestFn) => void;
        run(fn?: (result: ResultTrue | ResultFalse) => void): void;
        spec: (title: string, tests: () => void) => void;
        spy: SpyFn;
    }
}

declare var ospec: ospec.Static;

export = ospec;
