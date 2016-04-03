// Type definitions for chai 3.4.0
// Project: http://chaijs.com/
// Definitions by: Jed Mao <https://github.com/jedmao/>,
//                 Bart van der Schoor <https://github.com/Bartvds>,
//                 Andrew Brown <https://github.com/AGBrown>,
//                 Olivier Chevet <https://github.com/olivr70>,
//                 Matt Wistrand <https://github.com/mwistrand>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// <reference path="../assertion-error/assertion-error.d.ts"/>

declare module Chai {

    interface ChaiStatic {
        expect: ExpectStatic;
        should(): Should;
        /**
         * Provides a way to extend the internals of Chai
         */
        use(fn: (chai: any, utils: any) => void): ChaiStatic;
        assert: AssertStatic;
        config: Config;
        AssertionError: typeof AssertionError;
    }

    export interface ExpectStatic extends AssertionStatic {
        fail(actual?: any, expected?: any, message?: string, operator?: string): void;
    }

    export interface AssertStatic extends Assert {
    }

    export interface AssertionStatic {
        (target: any, message?: string): Assertion;
    }

    interface ShouldAssertion {
        equal(value1: any, value2: any, message?: string): void;
        Throw: ShouldThrow;
        throw: ShouldThrow;
        exist(value: any, message?: string): void;
    }

    interface Should extends ShouldAssertion {
        not: ShouldAssertion;
        fail(actual: any, expected: any, message?: string, operator?: string): void;
    }

    interface ShouldThrow {
        (actual: Function): void;
        (actual: Function, expected: string|RegExp, message?: string): void;
        (actual: Function, constructor: Error|Function, expected?: string|RegExp, message?: string): void;
    }

    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
        not: Assertion;
        deep: Deep;
        any: KeyFilter;
        all: KeyFilter;
        a: TypeComparison;
        an: TypeComparison;
        include: Include;
        includes: Include;
        contain: Include;
        contains: Include;
        ok: Assertion;
        true: Assertion;
        false: Assertion;
        null: Assertion;
        undefined: Assertion;
        NaN: Assertion;
        exist: Assertion;
        empty: Assertion;
        arguments: Assertion;
        Arguments: Assertion;
        equal: Equal;
        equals: Equal;
        eq: Equal;
        eql: Equal;
        eqls: Equal;
        property: Property;
        ownProperty: OwnProperty;
        haveOwnProperty: OwnProperty;
        ownPropertyDescriptor: OwnPropertyDescriptor;
        haveOwnPropertyDescriptor: OwnPropertyDescriptor;
        length: Length;
        lengthOf: Length;
        match: Match;
        matches: Match;
        string(string: string, message?: string): Assertion;
        keys: Keys;
        key(string: string): Assertion;
        throw: Throw;
        throws: Throw;
        Throw: Throw;
        respondTo: RespondTo;
        respondsTo: RespondTo;
        itself: Assertion;
        satisfy: Satisfy;
        satisfies: Satisfy;
        closeTo: CloseTo;
        approximately: CloseTo;
        members: Members;
        increase: PropertyChange;
        increases: PropertyChange;
        decrease: PropertyChange;
        decreases: PropertyChange;
        change: PropertyChange;
        changes: PropertyChange;
        extensible: Assertion;
        sealed: Assertion;
        frozen: Assertion;
        oneOf(list: any[], message?: string): Assertion;
    }

    interface LanguageChains {
        to: Assertion;
        be: Assertion;
        been: Assertion;
        is: Assertion;
        that: Assertion;
        which: Assertion;
        and: Assertion;
        has: Assertion;
        have: Assertion;
        with: Assertion;
        at: Assertion;
        of: Assertion;
        same: Assertion;
    }

    interface NumericComparison {
        above: NumberComparer;
        gt: NumberComparer;
        greaterThan: NumberComparer;
        least: NumberComparer;
        gte: NumberComparer;
        below: NumberComparer;
        lt: NumberComparer;
        lessThan: NumberComparer;
        most: NumberComparer;
        lte: NumberComparer;
        within(start: number, finish: number, message?: string): Assertion;
    }

    interface NumberComparer {
        (value: number, message?: string): Assertion;
    }

    interface TypeComparison {
        (type: string, message?: string): Assertion;
        instanceof: InstanceOf;
        instanceOf: InstanceOf;
    }

    interface InstanceOf {
        (constructor: Object, message?: string): Assertion;
    }

    interface CloseTo {
        (expected: number, delta: number, message?: string): Assertion;
    }

    interface Deep {
        equal: Equal;
        include: Include;
        property: Property;
        members: Members;
    }

    interface KeyFilter {
        keys: Keys;
    }

    interface Equal {
        (value: any, message?: string): Assertion;
    }

    interface Property {
        (name: string, value?: any, message?: string): Assertion;
    }

    interface OwnProperty {
        (name: string, message?: string): Assertion;
    }

    interface OwnPropertyDescriptor {
        (name: string, descriptor: PropertyDescriptor, message?: string): Assertion;
        (name: string, message?: string): Assertion;
    }

    interface Length extends LanguageChains, NumericComparison {
        (length: number, message?: string): Assertion;
    }

    interface Include {
        (value: Object, message?: string): Assertion;
        (value: string, message?: string): Assertion;
        (value: number, message?: string): Assertion;
        keys: Keys;
        members: Members;
        any: KeyFilter;
        all: KeyFilter;
    }

    interface Match {
        (regexp: RegExp|string, message?: string): Assertion;
    }

    interface Keys {
        (...keys: string[]): Assertion;
        (keys: any[]): Assertion;
        (keys: Object): Assertion;
    }

    interface Throw {
        (): Assertion;
        (expected: string, message?: string): Assertion;
        (expected: RegExp, message?: string): Assertion;
        (constructor: Error, expected?: string, message?: string): Assertion;
        (constructor: Error, expected?: RegExp, message?: string): Assertion;
        (constructor: Function, expected?: string, message?: string): Assertion;
        (constructor: Function, expected?: RegExp, message?: string): Assertion;
    }

    interface RespondTo {
        (method: string, message?: string): Assertion;
    }

    interface Satisfy {
        (matcher: Function, message?: string): Assertion;
    }

    interface Members {
        (set: any[], message?: string): Assertion;
    }

    interface PropertyChange {
        (object: Object, prop: string, msg?: string): Assertion;
    }

    export interface Assert {
        /**
         * @param expression Expression to test for truthiness.
         * @param message Message to display on error.
         */
        (expression: any, message?: string): void;

        fail(actual?: any, expected?: any, msg?: string, operator?: string): void;

        ok(val: any, msg?: string): void;
        isOk(val: any, msg?: string): void;
        notOk(val: any, msg?: string): void;
        isNotOk(val: any, msg?: string): void;

        equal(act: any, exp: any, msg?: string): void;
        notEqual(act: any, exp: any, msg?: string): void;

        strictEqual(act: any, exp: any, msg?: string): void;
        notStrictEqual(act: any, exp: any, msg?: string): void;

        deepEqual(act: any, exp: any, msg?: string): void;
        notDeepEqual(act: any, exp: any, msg?: string): void;

        isTrue(val: any, msg?: string): void;
        isFalse(val: any, msg?: string): void;

        isNotTrue(val: any, msg?: string): void;
        isNotFalse(val: any, msg?: string): void;

        isNull(val: any, msg?: string): void;
        isNotNull(val: any, msg?: string): void;

        isUndefined(val: any, msg?: string): void;
        isDefined(val: any, msg?: string): void;

        isNaN(val: any, msg?: string): void;
        isNotNaN(val: any, msg?: string): void;

        isAbove(val: number, abv: number, msg?: string): void;
        isBelow(val: number, blw: number, msg?: string): void;

        isAtLeast(val: number, atlst: number, msg?: string): void;
        isAtMost(val: number, atmst: number, msg?: string): void;

        isFunction(val: any, msg?: string): void;
        isNotFunction(val: any, msg?: string): void;

        isObject(val: any, msg?: string): void;
        isNotObject(val: any, msg?: string): void;

        isArray(val: any, msg?: string): void;
        isNotArray(val: any, msg?: string): void;

        isString(val: any, msg?: string): void;
        isNotString(val: any, msg?: string): void;

        isNumber(val: any, msg?: string): void;
        isNotNumber(val: any, msg?: string): void;

        isBoolean(val: any, msg?: string): void;
        isNotBoolean(val: any, msg?: string): void;

        typeOf(val: any, type: string, msg?: string): void;
        notTypeOf(val: any, type: string, msg?: string): void;

        instanceOf(val: any, type: Function, msg?: string): void;
        notInstanceOf(val: any, type: Function, msg?: string): void;

        include(exp: string, inc: any, msg?: string): void;
        include(exp: any[], inc: any, msg?: string): void;

        notInclude(exp: string, inc: any, msg?: string): void;
        notInclude(exp: any[], inc: any, msg?: string): void;

        match(exp: any, re: RegExp, msg?: string): void;
        notMatch(exp: any, re: RegExp, msg?: string): void;

        property(obj: Object, prop: string, msg?: string): void;
        notProperty(obj: Object, prop: string, msg?: string): void;
        deepProperty(obj: Object, prop: string, msg?: string): void;
        notDeepProperty(obj: Object, prop: string, msg?: string): void;

        propertyVal(obj: Object, prop: string, val: any, msg?: string): void;
        propertyNotVal(obj: Object, prop: string, val: any, msg?: string): void;

        deepPropertyVal(obj: Object, prop: string, val: any, msg?: string): void;
        deepPropertyNotVal(obj: Object, prop: string, val: any, msg?: string): void;

        lengthOf(exp: any, len: number, msg?: string): void;
        //alias frenzy
        throw(fn: Function, msg?: string): void;
        throw(fn: Function, regExp: RegExp): void;
        throw(fn: Function, errType: Function, msg?: string): void;
        throw(fn: Function, errType: Function, regExp: RegExp): void;

        throws(fn: Function, msg?: string): void;
        throws(fn: Function, regExp: RegExp): void;
        throws(fn: Function, errType: Function, msg?: string): void;
        throws(fn: Function, errType: Function, regExp: RegExp): void;

        Throw(fn: Function, msg?: string): void;
        Throw(fn: Function, regExp: RegExp): void;
        Throw(fn: Function, errType: Function, msg?: string): void;
        Throw(fn: Function, errType: Function, regExp: RegExp): void;

        doesNotThrow(fn: Function, msg?: string): void;
        doesNotThrow(fn: Function, regExp: RegExp): void;
        doesNotThrow(fn: Function, errType: Function, msg?: string): void;
        doesNotThrow(fn: Function, errType: Function, regExp: RegExp): void;

        operator(val: any, operator: string, val2: any, msg?: string): void;
        closeTo(act: number, exp: number, delta: number, msg?: string): void;
        approximately(act: number, exp: number, delta: number, msg?: string): void;

        sameMembers(set1: any[], set2: any[], msg?: string): void;
        sameDeepMembers(set1: any[], set2: any[], msg?: string): void;
        includeMembers(superset: any[], subset: any[], msg?: string): void;

        ifError(val: any, msg?: string): void;

        isExtensible(obj: {}, msg?: string): void;
        extensible(obj: {}, msg?: string): void;
        isNotExtensible(obj: {}, msg?: string): void;
        notExtensible(obj: {}, msg?: string): void;

        isSealed(obj: {}, msg?: string): void;
        sealed(obj: {}, msg?: string): void;
        isNotSealed(obj: {}, msg?: string): void;
        notSealed(obj: {}, msg?: string): void;

        isFrozen(obj: Object, msg?: string): void;
        frozen(obj: Object, msg?: string): void;
        isNotFrozen(obj: Object, msg?: string): void;
        notFrozen(obj: Object, msg?: string): void;

        oneOf(inList: any, list: any[], msg?: string): void;
    }

    export interface Config {
        includeStack: boolean;
    }

    export class AssertionError {
        constructor(message: string, _props?: any, ssf?: Function);
        name: string;
        message: string;
        showDiff: boolean;
        stack: string;
    }
}

declare var chai: Chai.ChaiStatic;

declare module "chai" {
    export = chai;
}

interface Object {
    should: Chai.Assertion;
}
