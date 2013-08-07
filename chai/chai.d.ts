// Type definitions for chai 1.5.0
// Project: http://chaijs.com/
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

declare module chai {
    interface Equality {
        (expected: any, message?: string): boolean;
    }

    interface Property {
        (name: string, value?: any, message?: string): boolean;
    }

    interface NumberComparer {
        (value: number, message?: string): boolean;
    }

    interface Eql {
        (value: any, message?: string): boolean;
    }

    interface Include {
        (value: Object, message?: string): boolean;
        (value: string, message?: string): boolean;
        (value: number, message?: string): boolean;
        keys(...names: string[]): boolean;
    }

    interface Throw {
        (constructor: Error, message?: string);
        (expected: string, message?: string);
        (expected: RegExp, message?: string);
    }

    interface TypeComparison {
        (type: string, message?: string): boolean;
        instanceof(type: Object): boolean;
    }

    interface NumericComparison {
        above: NumberComparer;
        gt: NumberComparer;
        greaterThan: NumberComparer;

        below: NumberComparer;
        lt: NumberComparer;
        lessThan: NumberComparer;
    }

    interface Length extends NumericComparison {
        (value: number, message?: string): boolean;
    }

    interface Deep {
        equal: Equality;
        property: Property;
    }

    interface Have {
        property: Property;
        deep: Deep;
        length: Length;
        ownProperty(name: string, message?: string): boolean;
        string(value: string, message?: string): boolean;
        keys(...values: string[]): boolean;
    }

    interface At {
        least(value: number, message?: string): boolean;
        gte(value: number, message?: string): boolean;
        most(value: number, message?: string): boolean;
        lte(value: number, message?: string): boolean;
    }

    interface Be extends NumericComparison {
        ok: boolean;
        true: boolean;
        false: boolean;
        null: boolean;
        undefined: boolean;
        empty: boolean;
        arguments: boolean;
        an: TypeComparison;
        at: At;

        a(type: string, message?: string): boolean;
        within(start: number, finish: number, message?: string): boolean;
        closeTo(expected: number, delta: number, message?: string): boolean;
    }

    interface To {
        be: Be;
        not: To;
        deep: Deep;
        have: Have;

        exist: boolean;

        equal: Equality;

        include: Include;
        contain: Include;
        throw: Throw;

        eql: Eql;
        eqls: Eql;

        match(value: RegExp, message?: string): boolean;

        respondTo(method: string, message?: string);
        satisfy(matcher: Function, message?: string);
    }

    interface ExpectMatchers {
        to: To;
    }

    function expect(target: any): chai.ExpectMatchers;
}

