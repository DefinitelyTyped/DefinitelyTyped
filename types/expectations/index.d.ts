// Type definitions for expectations.js 0.2.5
// Project: https://github.com/spmason/expectations
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var expect: Expectations.IExpectations;

declare namespace Expectations {
    interface IExpectations {
        (value: any): Expect;
        addAssertion(name: string, matcher: Function): void;
    }
    interface IAssertions {
        pass(message?: string): any;
        fail(message: string): any;
    }
    class Expect {
        value: any;
        assertions: IAssertions;
        expr: any;
        parent: Expect;
        not: Expect;

        constructor(value: any, assertions?: IAssertions, expr?: any, parent?: Expect);

        generateMessage(value: any, expr: any, toDo: string, otherVal?: any): string;

        toEqual(val: any): any;

        toNotEqual(val: any): any;

        toBe(val: any): any;

        toBeTruthy(): any;

        toBeFalsey(): any;

        toBeFalsy(): any;

        toBeGreaterThan(val: any): any;

        toBeLessThan(val: any): any;

        toContain(val: any): any;

        toMatch(val: any): any;

        toBeDefined(): any;

        toBeUndefined(): any;

        toBeNull(): any;

        toThrow(): any;

        pass(): any;

        fail(why?: string, what?: any): any;
    }
}
