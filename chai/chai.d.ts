// Type definitions for chai 1.5.0
// Project: http://chaijs.com/
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

declare module chai {
    interface Equality {
        (expected: any, message?: string): bool;
    }

    interface Property {
        (name: string, value?: any, message?: string): bool;
    }

    interface NumberComparer {
        (value: number, message?: string): bool;
    }

    interface Eql {
        (value: any, message?: string): bool;
    }

    interface Include {
        (value: Object, message?: string): bool;
        (value: string, message?: string): bool;
        (value: number, message?: string): bool;
        keys(...names: string[]): bool;
    }

    interface Throw {
        (constructor: Error, message?: string);
        (expected: string, message?: string);
        (expected: RegExp, message?: string);
    }

    interface TypeComparison { 
        (type: string, message?: string): bool;
         instanceof(type: Object, ): bool;
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
        (value: number, message?: string): bool;
    }

    interface Deep {
        equal: Equality;
        property: Property;
    }

    interface Have {
        property: Property;
        deep: Deep;
        length: Length;
        ownProperty(name: string, message?: string): bool;
        string(value: string, message?: string): bool;
        keys(...values: string[]): bool;
    }

    interface At {
        least(value: number, message?: string): bool;
        gte(value: number, message?: string): bool;
        most(value: number, message?: string): bool;
        lte(value: number, message?: string): bool;
    }

    interface Be extends NumericComparison {
        ok: bool;
        true: bool;
        false: bool;
        null: bool;
        undefined: bool;
        empty: bool;
        arguments: bool;
        an: TypeComparison;
        at: At;

        a(type: string, message?: string): bool;
        within(start: number, finish: number, message?: string): bool;
        closeTo(expected: number, delta: number, message?: string): bool;
    }

    interface To {
        be: Be;
        not: To;
        deep: Deep;
        have: Have;

        exist: bool;

        equal: Equality;

        include: Include;
        contain: Include;
        throw: Throw;

        eql: Eql;
        eqls: Eql;

        match(value: RegExp, message?: string): bool;

        respondTo(method: string, message?: string);
        satisfy(matcher: Function, message?: string);
    }

    interface ExpectMatchers {
        to: To;
    }

    var expect : {
        (target: any): ExpectMatchers;
    }
}