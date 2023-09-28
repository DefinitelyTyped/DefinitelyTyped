// Type definitions for chai-datetime
// Project: https://github.com/gaslight/chai-datetime.git
// Definitions by: Cliff Burger <https://github.com/cliffburger>,
//                 Matt Bishop <https://github.com/mattbishop>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />

declare const chaiDateTime: Chai.ChaiPlugin;
export = chaiDateTime;

declare global {
    namespace Chai {
        interface Assertion {
            afterDate(date: Date): Assertion;
            afterOrEqualDate(date: Date): Assertion;
            afterOrEqualTime(date: Date): Assertion;
            afterTime(date: Date): Assertion;
            beforeDate(date: Date): Assertion;
            beforeOrEqualDate(date: Date): Assertion;
            beforeOrEqualTime(date: Date): Assertion;
            beforeTime(date: Date): Assertion;
            closeToTime(date: Date, deltaInSeconds: number): Assertion;
            equalDate(date: Date): Assertion;
            equalTime(date: Date): Assertion;
            withinDate(dateFrom: Date, dateTo: Date): Assertion;
            withinTime(dateFrom: Date, dateTo: Date): Assertion;
        }

        interface Assert {
            afterDate(val: Date, exp: Date, msg?: string): void;
            afterOrEqualDate(val: Date, exp: Date, msg?: string): void;
            afterOrEqualTime(val: Date, exp: Date, msg?: string): void;
            afterTime(val: Date, exp: Date, msg?: string): void;
            beforeDate(val: Date, exp: Date, msg?: string): void;
            beforeOrEqualDate(val: Date, exp: Date, msg?: string): void;
            beforeOrEqualTime(val: Date, exp: Date, msg?: string): void;
            beforeTime(val: Date, exp: Date, msg?: string): void;
            closeToTime(val: Date, exp: Date, deltaInSeconds: number, msg?: string): void;
            equalDate(val: Date, exp: Date, msg?: string): void;
            equalTime(val: Date, exp: Date, msg?: string): void;
            notAfterDate(val: Date, exp: Date, msg?: string): void;
            notAfterTime(val: Date, exp: Date, msg?: string): void;
            notBeforeDate(val: Date, exp: Date, msg?: string): void;
            notBeforeTime(val: Date, exp: Date, msg?: string): void;
            notEqualDate(val: Date, exp: Date, msg?: string): void;
            notEqualTime(val: Date, exp: Date, msg?: string): void;
            notWithinDate(val: Date, expFrom: Date, expTo: Date, msg?: string): void;
            notWithinTime(val: Date, expFrom: Date, expTo: Date, msg?: string): void;
            withinDate(val: Date, expFrom: Date, expTo: Date, msg?: string): void;
            withinTime(val: Date, expFrom: Date, expTo: Date, msg?: string): void;
        }
    }

    interface Date {
        should: Chai.Assertion;
    }
}
