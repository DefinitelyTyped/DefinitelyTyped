// Type definitions for chai-as-promised
// Project: https://github.com/domenic/chai-as-promised/
// Definitions by: jt000 <https://github.com/jt000>, Yuki Kokubun <https://github.com/Kuniwak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />
/// <reference types="promises-a-plus" />

declare module 'chai-as-promised' {
    function chaiAsPromised(chai: any, utils: any): void;
    namespace chaiAsPromised {}
    export = chaiAsPromised;
}

declare namespace Chai {

    // For BDD API
    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
        eventually: PromisedAssertion;
        become(expected: any): PromisedAssertion;
        fulfilled: PromisedAssertion;
        rejected: PromisedAssertion;
        rejectedWith(expected: any, message?: string | RegExp): PromisedAssertion;
        notify(fn: Function): PromisedAssertion;
    }

    // Eventually does not have .then(), but PromisedAssertion have.
    interface Eventually extends PromisedLanguageChains, PromisedNumericComparison, PromisedTypeComparison {
        // From chai-as-promised
        become(expected: PromisesAPlus.Thenable<any>): PromisedAssertion;
        fulfilled: PromisedAssertion;
        rejected: PromisedAssertion;
        rejectedWith(expected: any, message?: string | RegExp): PromisedAssertion;
        notify(fn: Function): PromisedAssertion;

        // From chai
        not: PromisedAssertion;
        deep: PromisedDeep;
        all: PromisedKeyFilter;
        a: PromisedTypeComparison;
        an: PromisedTypeComparison;
        include: PromisedInclude;
        contain: PromisedInclude;
        ok: PromisedAssertion;
        true: PromisedAssertion;
        false: PromisedAssertion;
        null: PromisedAssertion;
        undefined: PromisedAssertion;
        exist: PromisedAssertion;
        empty: PromisedAssertion;
        arguments: PromisedAssertion;
        Arguments: PromisedAssertion;
        equal: PromisedEqual;
        equals: PromisedEqual;
        eq: PromisedEqual;
        eql: PromisedEqual;
        eqls: PromisedEqual;
        property: PromisedProperty;
        ownProperty: PromisedOwnProperty;
        haveOwnProperty: PromisedOwnProperty;
        length: PromisedLength;
        lengthOf: PromisedLength;
        match(regexp: RegExp|string, message?: string): PromisedAssertion;
        string(string: string, message?: string): PromisedAssertion;
        keys: PromisedKeys;
        key(string: string): PromisedAssertion;
        throw: PromisedThrow;
        throws: PromisedThrow;
        Throw: PromisedThrow;
        respondTo(method: string, message?: string): PromisedAssertion;
        itself: PromisedAssertion;
        satisfy(matcher: Function, message?: string): PromisedAssertion;
        closeTo(expected: number, delta: number, message?: string): PromisedAssertion;
        members: PromisedMembers;
    }

    interface PromisedAssertion extends Eventually, PromisesAPlus.Thenable<any> {
    }

    interface PromisedLanguageChains {
        eventually: Eventually;

        // From chai
        to: PromisedAssertion;
        be: PromisedAssertion;
        been: PromisedAssertion;
        is: PromisedAssertion;
        that: PromisedAssertion;
        which: PromisedAssertion;
        and: PromisedAssertion;
        has: PromisedAssertion;
        have: PromisedAssertion;
        with: PromisedAssertion;
        at: PromisedAssertion;
        of: PromisedAssertion;
        same: PromisedAssertion;
    }

    interface PromisedNumericComparison {
        above: PromisedNumberComparer;
        gt: PromisedNumberComparer;
        greaterThan: PromisedNumberComparer;
        least: PromisedNumberComparer;
        gte: PromisedNumberComparer;
        below: PromisedNumberComparer;
        lt: PromisedNumberComparer;
        lessThan: PromisedNumberComparer;
        most: PromisedNumberComparer;
        lte: PromisedNumberComparer;
        within(start: number, finish: number, message?: string): PromisedAssertion;
    }

    interface PromisedNumberComparer {
        (value: number, message?: string): PromisedAssertion;
    }

    interface PromisedTypeComparison {
        (type: string, message?: string): PromisedAssertion;
        instanceof: PromisedInstanceOf;
        instanceOf: PromisedInstanceOf;
    }

    interface PromisedInstanceOf {
        (constructor: Object, message?: string): PromisedAssertion;
    }

    interface PromisedDeep {
        equal: PromisedEqual;
        include: PromisedInclude;
        property: PromisedProperty;
    }

    interface PromisedKeyFilter {
        keys: PromisedKeys;
    }

    interface PromisedEqual {
        (value: any, message?: string): PromisedAssertion;
    }

    interface PromisedProperty {
        (name: string, value?: any, message?: string): PromisedAssertion;
    }

    interface PromisedOwnProperty {
        (name: string, message?: string): PromisedAssertion;
    }

    interface PromisedLength extends PromisedLanguageChains, PromisedNumericComparison {
        (length: number, message?: string): PromisedAssertion;
    }

    interface PromisedInclude {
        (value: Object, message?: string): PromisedAssertion;
        (value: string, message?: string): PromisedAssertion;
        (value: number, message?: string): PromisedAssertion;
        keys: PromisedKeys;
        members: PromisedMembers;
        all: PromisedKeyFilter;
    }

    interface PromisedKeys {
        (...keys: string[]): PromisedAssertion;
        (keys: any[]): PromisedAssertion;
    }

    interface PromisedThrow {
        (): PromisedAssertion;
        (expected: string, message?: string): PromisedAssertion;
        (expected: RegExp, message?: string): PromisedAssertion;
        (constructor: Error, expected?: string, message?: string): PromisedAssertion;
        (constructor: Error, expected?: RegExp, message?: string): PromisedAssertion;
        (constructor: Function, expected?: string, message?: string): PromisedAssertion;
        (constructor: Function, expected?: RegExp, message?: string): PromisedAssertion;
    }

    interface PromisedMembers {
        (set: any[], message?: string): PromisedAssertion;
    }

    // For Assert API
    interface Assert {
        eventually: PromisedAssert;
        isFulfilled(promise: PromisesAPlus.Thenable<any>, message?: string): PromisesAPlus.Thenable<void>;
        becomes(promise: PromisesAPlus.Thenable<any>, expected: any, message?: string): PromisesAPlus.Thenable<void>;
        doesNotBecome(promise: PromisesAPlus.Thenable<any>, expected: any, message?: string): PromisesAPlus.Thenable<void>;
        isRejected(promise: PromisesAPlus.Thenable<any>, message?: string): PromisesAPlus.Thenable<void>;
        isRejected(promise: PromisesAPlus.Thenable<any>, expected: any, message?: string): PromisesAPlus.Thenable<void>;
        isRejected(promise: PromisesAPlus.Thenable<any>, match: RegExp, message?: string): PromisesAPlus.Thenable<void>;
        notify(fn: Function): PromisesAPlus.Thenable<void>;
    }

    export interface PromisedAssert {
        fail(actual?: any, expected?: any, msg?: string, operator?: string): PromisesAPlus.Thenable<void>;

        ok(val: any, msg?: string): PromisesAPlus.Thenable<void>;
        notOk(val: any, msg?: string): PromisesAPlus.Thenable<void>;

        equal(act: any, exp: any, msg?: string): PromisesAPlus.Thenable<void>;
        notEqual(act: any, exp: any, msg?: string): PromisesAPlus.Thenable<void>;

        strictEqual(act: any, exp: any, msg?: string): PromisesAPlus.Thenable<void>;
        notStrictEqual(act: any, exp: any, msg?: string): PromisesAPlus.Thenable<void>;

        deepEqual(act: any, exp: any, msg?: string): PromisesAPlus.Thenable<void>;
        notDeepEqual(act: any, exp: any, msg?: string): PromisesAPlus.Thenable<void>;

        isTrue(val: any, msg?: string): PromisesAPlus.Thenable<void>;
        isFalse(val: any, msg?: string): PromisesAPlus.Thenable<void>;

        isNull(val: any, msg?: string): PromisesAPlus.Thenable<void>;
        isNotNull(val: any, msg?: string): PromisesAPlus.Thenable<void>;

        isUndefined(val: any, msg?: string): PromisesAPlus.Thenable<void>;
        isDefined(val: any, msg?: string): PromisesAPlus.Thenable<void>;

        isFunction(val: any, msg?: string): PromisesAPlus.Thenable<void>;
        isNotFunction(val: any, msg?: string): PromisesAPlus.Thenable<void>;

        isObject(val: any, msg?: string): PromisesAPlus.Thenable<void>;
        isNotObject(val: any, msg?: string): PromisesAPlus.Thenable<void>;

        isArray(val: any, msg?: string): PromisesAPlus.Thenable<void>;
        isNotArray(val: any, msg?: string): PromisesAPlus.Thenable<void>;

        isString(val: any, msg?: string): PromisesAPlus.Thenable<void>;
        isNotString(val: any, msg?: string): PromisesAPlus.Thenable<void>;

        isNumber(val: any, msg?: string): PromisesAPlus.Thenable<void>;
        isNotNumber(val: any, msg?: string): PromisesAPlus.Thenable<void>;

        isBoolean(val: any, msg?: string): PromisesAPlus.Thenable<void>;
        isNotBoolean(val: any, msg?: string): PromisesAPlus.Thenable<void>;

        typeOf(val: any, type: string, msg?: string): PromisesAPlus.Thenable<void>;
        notTypeOf(val: any, type: string, msg?: string): PromisesAPlus.Thenable<void>;

        instanceOf(val: any, type: Function, msg?: string): PromisesAPlus.Thenable<void>;
        notInstanceOf(val: any, type: Function, msg?: string): PromisesAPlus.Thenable<void>;

        include(exp: string, inc: any, msg?: string): PromisesAPlus.Thenable<void>;
        include(exp: any[], inc: any, msg?: string): PromisesAPlus.Thenable<void>;

        notInclude(exp: string, inc: any, msg?: string): PromisesAPlus.Thenable<void>;
        notInclude(exp: any[], inc: any, msg?: string): PromisesAPlus.Thenable<void>;

        match(exp: any, re: RegExp, msg?: string): PromisesAPlus.Thenable<void>;
        notMatch(exp: any, re: RegExp, msg?: string): PromisesAPlus.Thenable<void>;

        property(obj: Object, prop: string, msg?: string): PromisesAPlus.Thenable<void>;
        notProperty(obj: Object, prop: string, msg?: string): PromisesAPlus.Thenable<void>;
        deepProperty(obj: Object, prop: string, msg?: string): PromisesAPlus.Thenable<void>;
        notDeepProperty(obj: Object, prop: string, msg?: string): PromisesAPlus.Thenable<void>;

        propertyVal(obj: Object, prop: string, val: any, msg?: string): PromisesAPlus.Thenable<void>;
        propertyNotVal(obj: Object, prop: string, val: any, msg?: string): PromisesAPlus.Thenable<void>;

        deepPropertyVal(obj: Object, prop: string, val: any, msg?: string): PromisesAPlus.Thenable<void>;
        deepPropertyNotVal(obj: Object, prop: string, val: any, msg?: string): PromisesAPlus.Thenable<void>;

        lengthOf(exp: any, len: number, msg?: string): PromisesAPlus.Thenable<void>;
        //alias frenzy
        throw(fn: Function, msg?: string): PromisesAPlus.Thenable<void>;
        throw(fn: Function, regExp: RegExp): PromisesAPlus.Thenable<void>;
        throw(fn: Function, errType: Function, msg?: string): PromisesAPlus.Thenable<void>;
        throw(fn: Function, errType: Function, regExp: RegExp): PromisesAPlus.Thenable<void>;

        throws(fn: Function, msg?: string): PromisesAPlus.Thenable<void>;
        throws(fn: Function, regExp: RegExp): PromisesAPlus.Thenable<void>;
        throws(fn: Function, errType: Function, msg?: string): PromisesAPlus.Thenable<void>;
        throws(fn: Function, errType: Function, regExp: RegExp): PromisesAPlus.Thenable<void>;

        Throw(fn: Function, msg?: string): PromisesAPlus.Thenable<void>;
        Throw(fn: Function, regExp: RegExp): PromisesAPlus.Thenable<void>;
        Throw(fn: Function, errType: Function, msg?: string): PromisesAPlus.Thenable<void>;
        Throw(fn: Function, errType: Function, regExp: RegExp): PromisesAPlus.Thenable<void>;

        doesNotThrow(fn: Function, msg?: string): PromisesAPlus.Thenable<void>;
        doesNotThrow(fn: Function, regExp: RegExp): PromisesAPlus.Thenable<void>;
        doesNotThrow(fn: Function, errType: Function, msg?: string): PromisesAPlus.Thenable<void>;
        doesNotThrow(fn: Function, errType: Function, regExp: RegExp): PromisesAPlus.Thenable<void>;

        operator(val: any, operator: string, val2: any, msg?: string): PromisesAPlus.Thenable<void>;
        closeTo(act: number, exp: number, delta: number, msg?: string): PromisesAPlus.Thenable<void>;

        sameMembers(set1: any[], set2: any[], msg?: string): PromisesAPlus.Thenable<void>;
        includeMembers(set1: any[], set2: any[], msg?: string): PromisesAPlus.Thenable<void>;

        ifError(val: any, msg?: string): PromisesAPlus.Thenable<void>;
    }
}
