// Type definitions for expect.js 0.3.1
// Project: https://github.com/LearnBoost/expect.js
// Definitions by: Robert Urbański <https://github.com/speedy32>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module e {
    interface Assertion {
        /**
         * Assert a failure.
         */
        fail(message?: string): Assertion;
    }
    interface Assert extends Assertion {
        not: Not;
        to: To;
        only: Only;
        have: Have;
        be: Be;
        withArgs(invalid: any, arg: any): withArgs;
    }
    interface withArgs{
        to: To;
    }
    interface Expect{
        (target?: any): Assert;
    }

    interface To extends ToBase {
        not: NotBase;
        /**
         * Checks if the obj sortof equals another.
         */
        eql(obj: any): Assertion;
        /**
         * Checks if the obj exactly equals another.
         */
        equal(obj: any): Assertion;
        /**
         * Assert string value matches regexp.
         *
         * @param regexp
         */
        match(regexp: RegExp): Assertion;
        /**
         * Assert that string contains str.
         */
        contain(str: string): Assertion;
        /**
         * Assert that the array contains obj.
         */
        contain(obj: any): Assertion;
        /**
         * Assert that the function throws.
         *
         * @param fn callback to match error string against
         */
        throw(fn?: (exception: any) => void): void;

        /**
         * Assert that the function throws.
         *
         * @param fn callback to match error string against
         */
        throwError(fn?: (exception: any) => void): void;

        /**
         * Assert that the function throws.
         *
         * @param fn callback to match error string against
         */
        throwException(fn?: (exception: any) => void): void;

        /**
         * Assert that the function throws.
         *
         * @param regexp regexp to match error string against
         */
        throwError(regexp: RegExp): void;

        /**
         * Assert that the function throws.
         *
         * @param fn callback to match error string against
         */
        throwException(regexp: RegExp): void;

        /**
         * Assert typeof.
         */
        string(type: string): Assertion;

        string(obj: any): Assertion;
    }


    interface Be extends Assertion {
        /**
         * Checks if the obj exactly equals another.
         */
        (obj: any): Assertion;

        an: An;

        /**
         * Assert typeof.
         */
        a(type: string): Assertion;

        /**
         * Assert instanceof.
         */
        a(type: Function): Assertion;

        /**
         * Check if the value is truthy
         */
        ok(): void;

        /**
         * Checks if the array is empty.
         */
        empty(): Assertion;

        /**
         * Assert within start to finish (inclusive).
         *
         * @param start
         * @param finish
         */
        within(start: number, finish: number): Assertion;

        /**
         * Assert numeric value above n.
         */
        greaterThan(n: number): Assertion;

        /**
         * Assert numeric value above n.
         */
        above(n: number): Assertion;

        /**
         * Assert numeric value below n.
         */
        lessThan(n: number): Assertion;

        /**
         * Assert numeric value below n.
         */
        below(n: number): Assertion;
    }

    interface An extends Assertion {
        /**
         * Assert typeof.
         */
        (type: string): Assertion;

        /**
         * Assert instanceof.
         */
        (type: Function): Assertion;
    }

    interface Not extends NotBase {
        to: ToBase;
    }

    interface NotBase {
        be: Be;
        have: Have;
        include: Include;
        only: Only;
        /**
         * Assert that the function throws.
         *
         * @param fn callback to match error string against
         */
        throw(fn?: (exception: any) => void): void;

        /**
         * Assert that the function throws.
         *
         * @param fn callback to match error string against
         */
        throwError(fn?: (exception: any) => void): void;

        /**
         * Assert that the function throws.
         *
         * @param fn callback to match error string against
         */
        throwException(fn?: (exception: any) => void): void;

        /**
         * Assert that the function throws.
         *
         * @param regexp regexp to match error string against
         */
        throwError(regexp: RegExp): void;

        /**
         * Assert that the function throws.
         *
         * @param fn callback to match error string against
         */
        throwException(regexp: RegExp): void;
    }


    interface ToBase {
        be: Be;
        have: Have;
        include: Include;
        only: Only;
    }

    interface Only{
        have: Have;
    }

    interface Include {
        /**
         * Assert exact keys or inclusion of keys by using the `.own` modifier.
         */
        key(keys: string[]): Assertion;
        /**
         * Assert exact keys or inclusion of keys by using the `.own` modifier.
         */
        key(...keys: string[]): Assertion;

    }
    interface Have extends Include {
        own: Assertion;
        /**
         * Assert property "length" exists and has value of n.
         *
         * @param n
         */
        length(n: number): Assertion;

        /**
         * Assert property name exists, with optional val.
         *
         * @param name
         * @param val
         */
        property(name: string, val?: any): Assertion;

        /**
         * Assert exact keys or inclusion of keys by using the `.own` modifier.
         */
        keys(keys: string[]): Assertion;
        /**
         * Assert exact keys or inclusion of keys by using the `.own` modifier.
         */
        keys(...keys: string[]): Assertion;

    }
}
declare function expect(typed?: any): e.Assert;

declare module "expect" {
    var expect: e.Expect;
    //function expect(type?: any): e.Assert;
    export = expect;
}

declare module "expect.js" {
    export = expect;
}
