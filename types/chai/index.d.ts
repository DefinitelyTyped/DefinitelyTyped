// Type definitions for chai 4.0.0
// Project: http://chaijs.com/
// Definitions by: Jed Mao <https://github.com/jedmao/>,
//                 Bart van der Schoor <https://github.com/Bartvds>,
//                 Andrew Brown <https://github.com/AGBrown>,
//                 Olivier Chevet <https://github.com/olivr70>,
//                 Matt Wistrand <https://github.com/mwistrand>,
//                 Josh Goldberg <https://github.com/joshuakgoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// <reference types="assertion-error"/>

declare namespace Chai {

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
        version: string;
    }

    export interface ExpectStatic extends AssertionStatic {
        fail(actual?: any, expected?: any, message?: string, operator?: Operator): void;
    }

    export interface AssertStatic extends Assert {
    }

    export interface AssertionStatic {
        (target: any, message?: string): Assertion;
    }

    export type Operator = string; // "==" | "===" | ">" | ">=" | "<" | "<=" | "!=" | "!==";

    export type OperatorComparable = boolean | null | number | string | undefined | Date;

    interface ShouldAssertion {
        equal(value1: any, value2: any, message?: string): void;
        Throw: ShouldThrow;
        throw: ShouldThrow;
        exist(value: any, message?: string): void;
    }

    interface Should extends ShouldAssertion {
        not: ShouldAssertion;
        fail(actual: any, expected: any, message?: string, operator?: Operator): void;
    }

    interface ShouldThrow {
        (actual: Function): void;
        (actual: Function, expected: string|RegExp, message?: string): void;
        (actual: Function, constructor: Error|Function, expected?: string|RegExp, message?: string): void;
    }

    interface Assertion extends LanguageChains, NumericComparison, TypeComparison {
        not: Assertion;
        deep: Deep;
        nested: Nested;
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

    interface Nested {
      include: Include;
      property: Property;
      members: Members;
    }

    interface Deep {
        equal: Equal;
        equals: Equal;
        eq: Equal;
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
        (object: Object, property: string, message?: string): Assertion;
    }

    export interface Assert {
        /**
         * @param expression    Expression to test for truthiness.
         * @param message    Message to display on error.
         */
        (expression: any, message?: string): void;

        /**
         * Throws a failure.
         *
         * @type T   Type of the objects.
         * @param actual   Actual value.
         * @param expected   Potential expected value.
         * @param message    Message to display on error.
         * @param operator   Comparison operator, if not strict equality.
         * @remarks Node.js assert module-compatible.
         */
        fail<T>(actual?: T, expected?: T, message?: string, operator?: Operator): void;

        /**
         * Asserts that object is truthy.
         *
         * @type T   Type of object.
         * @param object   Object to test.
         * @param message    Message to display on error.
         */
        isOk<T>(value: T, message?: string): void;

        /**
         * Asserts that object is truthy.
         *
         * @type T   Type of object.
         * @param object   Object to test.
         * @param message    Message to display on error.
         */
        ok<T>(value: T, message?: string): void;

        /**
         * Asserts that object is falsy.
         *
         * @type T   Type of object.
         * @param object   Object to test.
         * @param message    Message to display on error.
         */
        isNotOk<T>(value: T, message?: string): void;

        /**
         * Asserts that object is falsy.
         *
         * @type T   Type of object.
         * @param object   Object to test.
         * @param message    Message to display on error.
         */
        notOk<T>(value: T, message?: string): void;

        /**
         * Asserts non-strict equality (==) of actual and expected.
         *
         * @type T   Type of the objects.
         * @param actual   Actual value.
         * @param expected   Potential expected value.
         * @param message   Message to display on error.
         */
        equal<T>(actual: T, expected: T, message?: string): void;

        /**
         * Asserts non-strict inequality (==) of actual and expected.
         *
         * @type T   Type of the objects.
         * @param actual   Actual value.
         * @param expected   Potential expected value.
         * @param message   Message to display on error.
         */
        notEqual<T>(actual: T, expected: T, message?: string): void;

        /**
         * Asserts strict equality (===) of actual and expected.
         *
         * @type T   Type of the objects.
         * @param actual   Actual value.
         * @param expected   Potential expected value.
         * @param message   Message to display on error.
         */
        strictEqual<T>(actual: T, expected: T, message?: string): void;

        /**
         * Asserts strict inequality (==) of actual and expected.
         *
         * @type T   Type of the objects.
         * @param actual   Actual value.
         * @param expected   Potential expected value.
         * @param message   Message to display on error.
         */
        notStrictEqual<T>(actual: T, expected: T, message?: string): void;

        /**
         * Asserts that actual is deeply equal to expected.
         *
         * @type T   Type of the objects.
         * @param actual   Actual value.
         * @param expected   Potential expected value.
         * @param message   Message to display on error.
         */
        deepEqual<T>(actual: T, expected: T, message?: string): void;

        /**
         * Asserts that actual is not deeply equal to expected.
         *
         * @type T   Type of the objects.
         * @param actual   Actual value.
         * @param expected   Potential expected value.
         * @param message   Message to display on error.
         */
        notDeepEqual<T>(actual: T, expected: T, message?: string): void;

        /**
         * Asserts valueToCheck is strictly greater than (>) valueToBeAbove.
         *
         * @param valueToCheck   Actual value.
         * @param valueToBeAbove   Minimum Potential expected value.
         * @param message   Message to display on error.
         */
        isAbove(valueToCheck: number, valueToBeAbove: number, message?: string): void;

        /**
         * Asserts valueToCheck is greater than or equal to (>=) valueToBeAtLeast.
         *
         * @param valueToCheck   Actual value.
         * @param valueToBeAtLeast   Minimum Potential expected value.
         * @param message   Message to display on error.
         */
        isAtLeast(valueToCheck: number, valueToBeAtLeast: number, message?: string): void;

        /**
         * Asserts valueToCheck is strictly less than (<) valueToBeBelow.
         *
         * @param valueToCheck   Actual value.
         * @param valueToBeBelow   Minimum Potential expected value.
         * @param message   Message to display on error.
         */
        isBelow(valueToCheck: number, valueToBeBelow: number, message?: string): void;

        /**
         * Asserts valueToCheck is greater than or equal to (>=) valueToBeAtMost.
         *
         * @param valueToCheck   Actual value.
         * @param valueToBeAtMost   Minimum Potential expected value.
         * @param message   Message to display on error.
         */
        isAtMost(valueToCheck: number, valueToBeAtMost: number, message?: string): void;

        /**
         * Asserts that value is true.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isTrue<T>(value: T, message?: string): void;

        /**
         * Asserts that value is false.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isFalse<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not true.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNotTrue<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not false.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNotFalse<T>(value: T, message?: string): void;

        /**
         * Asserts that value is null.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNull<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not null.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNotNull<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not null.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNaN<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not null.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNotNaN<T>(value: T, message?: string): void;

        /**
         * Asserts that value is undefined.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isUndefined<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not undefined.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isDefined<T>(value: T, message?: string): void;

        /**
         * Asserts that value is a function.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isFunction<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not a function.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNotFunction<T>(value: T, message?: string): void;

        /**
         * Asserts that value is an object of type 'Object'
         * (as revealed by Object.prototype.toString).
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         * @remarks The assertion does not match subclassed objects.
         */
        isObject<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not an object of type 'Object'
         * (as revealed by Object.prototype.toString).
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNotObject<T>(value: T, message?: string): void;

        /**
         * Asserts that value is an array.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isArray<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not an array.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNotArray<T>(value: T, message?: string): void;

        /**
         * Asserts that value is a string.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isString<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not a string.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNotString<T>(value: T, message?: string): void;

        /**
         * Asserts that value is a number.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNumber<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not a number.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNotNumber<T>(value: T, message?: string): void;

        /**
         * Asserts that value is a boolean.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isBoolean<T>(value: T, message?: string): void;

        /**
         * Asserts that value is not a boolean.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param message   Message to display on error.
         */
        isNotBoolean<T>(value: T, message?: string): void;

        /**
         * Asserts that value's type is name, as determined by Object.prototype.toString.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param name   Potential expected type name of value.
         * @param message   Message to display on error.
         */
        typeOf<T>(value: T, name: string, message?: string): void;

        /**
         * Asserts that value's type is not name, as determined by Object.prototype.toString.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param name   Potential expected type name of value.
         * @param message   Message to display on error.
         */
        notTypeOf<T>(value: T, name: string, message?: string): void;

        /**
         * Asserts that value is an instance of constructor.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param constructor   Potential expected contructor of value.
         * @param message   Message to display on error.
         */
        instanceOf<T>(value: T, constructor: Function, message?: string): void;

        /**
         * Asserts that value is not an instance of constructor.
         *
         * @type T   Type of value.
         * @param value   Actual value.
         * @param constructor   Potential expected contructor of value.
         * @param message   Message to display on error.
         */
        notInstanceOf<T>(value: T, type: Function, message?: string): void;

        /**
         * Asserts that haystack includes needle.
         *
         * @param haystack   Container string.
         * @param needle   Potential expected substring of haystack.
         * @param message   Message to display on error.
         */
        include(haystack: string, needle: string, message?: string): void;

        /**
         * Asserts that haystack includes needle.
         *
         * @type T   Type of values in haystack.
         * @param haystack   Container array.
         * @param needle   Potential value contained in haystack.
         * @param message   Message to display on error.
         */
        include<T>(haystack: T[], needle: T, message?: string): void;

        /**
         * Asserts that haystack does not include needle.
         *
         * @param haystack   Container string.
         * @param needle   Potential expected substring of haystack.
         * @param message   Message to display on error.
         */
        notInclude(haystack: string, needle: any, message?: string): void;

        /**
         * Asserts that haystack does not include needle.
         *
         * @type T   Type of values in haystack.
         * @param haystack   Container array.
         * @param needle   Potential value contained in haystack.
         * @param message   Message to display on error.
         */
        notInclude(haystack: any[], needle: any, message?: string): void;

        /**
         * Asserts that value matches the regular expression regexp.
         *
         * @param value   Actual value.
         * @param regexp   Potential match of value.
         * @param message   Message to display on error.
         */
        match(value: string, regexp: RegExp, message?: string): void;

        /**
         * Asserts that value does not match the regular expression regexp.
         *
         * @param value   Actual value.
         * @param regexp   Potential match of value.
         * @param message   Message to display on error.
         */
        notMatch(expected: any, regexp: RegExp, message?: string): void;

        /**
         * Asserts that object has a property named by property.
         *
         * @type T   Type of object.
         * @param object   Container object.
         * @param property   Potential contained property of object.
         * @param message   Message to display on error.
         */
        property<T>(object: T, property: string /* keyof T */, message?: string): void;

        /**
         * Asserts that object has a property named by property.
         *
         * @type T   Type of object.
         * @param object   Container object.
         * @param property   Potential contained property of object.
         * @param message   Message to display on error.
         */
        notProperty<T>(object: T, property: string /* keyof T */, message?: string): void;

        /**
         * Asserts that object has a property named by property, which can be a string
         * using dot- and bracket-notation for deep reference.
         *
         * @type T   Type of object.
         * @param object   Container object.
         * @param property   Potential contained property of object.
         * @param message   Message to display on error.
         */
        deepProperty<T>(object: T, property: string, message?: string): void;

        /**
         * Asserts that object does not have a property named by property, which can be a
         * string using dot- and bracket-notation for deep reference.
         *
         * @type T   Type of object.
         * @param object   Container object.
         * @param property   Potential contained property of object.
         * @param message   Message to display on error.
         */
        notDeepProperty<T>(object: T, property: string, message?: string): void;

        /**
         * Asserts that object has a property named by property with value given by value.
         *
         * @type T   Type of object.
         * @type V   Type of value.
         * @param object   Container object.
         * @param property   Potential contained property of object.
         * @param value   Potential expected property value.
         * @param message   Message to display on error.
         */
        propertyVal<T, V>(object: T, property: string /* keyof T */, value: V, message?: string): void;

        /**
         * Asserts that object has a property named by property with value given by value.
         *
         * @type T   Type of object.
         * @type V   Type of value.
         * @param object   Container object.
         * @param property   Potential contained property of object.
         * @param value   Potential expected property value.
         * @param message   Message to display on error.
         */
        propertyNotVal<T, V>(object: T, property: string /* keyof T */, value: V, message?: string): void;

        /**
         * Asserts that object has a property named by property, which can be a string
         * using dot- and bracket-notation for deep reference.
         *
         * @type T   Type of object.
         * @type V   Type of value.
         * @param object   Container object.
         * @param property   Potential contained property of object.
         * @param value   Potential expected property value.
         * @param message   Message to display on error.
         */
        deepPropertyVal<T, V>(object: T, property: string, value: V, message?: string): void;

        /**
         * Asserts that object does not have a property named by property, which can be a
         * string using dot- and bracket-notation for deep reference.
         *
         * @type T   Type of object.
         * @type V   Type of value.
         * @param object   Container object.
         * @param property   Potential contained property of object.
         * @param value   Potential expected property value.
         * @param message   Message to display on error.
         */
        deepPropertyNotVal<T, V>(object: T, property: string, value: V, message?: string): void;

        /**
         * Asserts that object has a length property with the expected value.
         *
         * @type T   Type of object.
         * @param object   Container object.
         * @param length   Potential expected length of object.
         * @param message   Message to display on error.
         */
        lengthOf<T extends { readonly length?: number }>(object: T, length: number, message?: string): void;

        /**
         * Asserts that fn will throw an error.
         *
         * @param fn   Function that may throw.
         * @param message   Message to display on error.
         */
        throw(fn: Function, message?: string): void;

        /**
         * Asserts that function will throw an error with message matching regexp.
         *
         * @param fn   Function that may throw.
         * @param regExp   Potential expected message match.
         * @param message   Message to display on error.
         */
        throw(fn: Function, regExp: RegExp): void;

        /**
         * Asserts that function will throw an error that is an instance of constructor.
         *
         * @param fn   Function that may throw.
         * @param constructor   Potential expected error constructor.
         * @param message   Message to display on error.
         */
        throw(fn: Function, constructor: Function, message?: string): void;

        /**
         * Asserts that function will throw an error that is an instance of constructor
         * and an error with message matching regexp.
         *
         * @param fn   Function that may throw.
         * @param constructor   Potential expected error constructor.
         * @param message   Message to display on error.
         */
        throw(fn: Function, constructor: Function, regExp: RegExp): void;

        /**
         * Asserts that fn will throw an error.
         *
         * @param fn   Function that may throw.
         * @param message   Message to display on error.
         */
        throws(fn: Function, message?: string): void;

        /**
         * Asserts that function will throw an error with message matching regexp.
         *
         * @param fn   Function that may throw.
         * @param regExp   Potential expected message match.
         * @param message   Message to display on error.
         */
        throws(fn: Function, regExp: RegExp, message?: string): void;

        /**
         * Asserts that function will throw an error that is an instance of constructor.
         *
         * @param fn   Function that may throw.
         * @param constructor   Potential expected error constructor.
         * @param message   Message to display on error.
         */
        throws(fn: Function, errType: Function, message?: string): void;

        /**
         * Asserts that function will throw an error that is an instance of constructor
         * and an error with message matching regexp.
         *
         * @param fn   Function that may throw.
         * @param constructor   Potential expected error constructor.
         * @param message   Message to display on error.
         */
        throws(fn: Function, errType: Function, regExp: RegExp): void;

        /**
         * Asserts that fn will throw an error.
         *
         * @param fn   Function that may throw.
         * @param message   Message to display on error.
         */
        Throw(fn: Function, message?: string): void;

        /**
         * Asserts that function will throw an error with message matching regexp.
         *
         * @param fn   Function that may throw.
         * @param regExp   Potential expected message match.
         * @param message   Message to display on error.
         */
        Throw(fn: Function, regExp: RegExp): void;

        /**
         * Asserts that function will throw an error that is an instance of constructor.
         *
         * @param fn   Function that may throw.
         * @param constructor   Potential expected error constructor.
         * @param message   Message to display on error.
         */
        Throw(fn: Function, errType: Function, message?: string): void;

        /**
         * Asserts that function will throw an error that is an instance of constructor
         * and an error with message matching regexp.
         *
         * @param fn   Function that may throw.
         * @param constructor   Potential expected error constructor.
         * @param message   Message to display on error.
         */
        Throw(fn: Function, errType: Function, regExp: RegExp): void;

        /**
         * Asserts that fn will not throw an error.
         *
         * @param fn   Function that may throw.
         * @param message   Message to display on error.
         */
        doesNotThrow(fn: Function, message?: string): void;

        /**
         * Asserts that function will throw an error with message matching regexp.
         *
         * @param fn   Function that may throw.
         * @param regExp   Potential expected message match.
         * @param message   Message to display on error.
         */
        doesNotThrow(fn: Function, regExp: RegExp): void;

        /**
         * Asserts that function will throw an error that is an instance of constructor.
         *
         * @param fn   Function that may throw.
         * @param constructor   Potential expected error constructor.
         * @param message   Message to display on error.
         */
        doesNotThrow(fn: Function, errType: Function, message?: string): void;

        /**
         * Asserts that function will throw an error that is an instance of constructor
         * and an error with message matching regexp.
         *
         * @param fn   Function that may throw.
         * @param constructor   Potential expected error constructor.
         * @param message   Message to display on error.
         */
        doesNotThrow(fn: Function, errType: Function, regExp: RegExp): void;

        /**
         * Compares two values using operator.
         *
         * @param val1   Left value during comparison.
         * @param operator   Comparison operator.
         * @param val2   Right value during comparison.
         * @param message   Message to display on error.
         */
        operator(val1: OperatorComparable, operator: Operator, val2: OperatorComparable, message?: string): void;

        /**
         * Asserts that the target is equal to expected, to within a +/- delta range.
         *
         * @param actual   Actual value
         * @param expected   Potential expected value.
         * @param delta   Maximum differenced between values.
         * @param message   Message to display on error.
         */
        closeTo(actual: number, expected: number, delta: number, message?: string): void;

        /**
         * Asserts that the target is equal to expected, to within a +/- delta range.
         *
         * @param actual   Actual value
         * @param expected   Potential expected value.
         * @param delta   Maximum differenced between values.
         * @param message   Message to display on error.
         */
        approximately(act: number, exp: number, delta: number, message?: string): void;

        /**
         * Asserts that set1 and set2 have the same members. Order is not take into account.
         *
         * @type T   Type of set values.
         * @param set1   Actual set of values.
         * @param set2   Potential expected set of values.
         * @param message   Message to display on error.
         */
        sameMembers<T>(set1: T[], set2: T[], message?: string): void;

        /**
         * Asserts that set1 and set2 have the same members using deep equality checking.
         * Order is not take into account.
         *
         * @type T   Type of set values.
         * @param set1   Actual set of values.
         * @param set2   Potential expected set of values.
         * @param message   Message to display on error.
         */
        sameDeepMembers<T>(set1: T[], set2: T[], message?: string): void;

        /**
         * Asserts that subset is included in superset. Order is not take into account.
         *
         * @type T   Type of set values.
         * @param superset   Actual set of values.
         * @param subset   Potential contained set of values.
         * @param message   Message to display on error.
         */
        includeMembers<T>(superset: T[], subset: T[], message?: string): void;

        /**
         * Asserts that subset is included in superset using deep equality checking.
         * Order is not take into account.
         *
         * @type T   Type of set values.
         * @param superset   Actual set of values.
         * @param subset   Potential contained set of values.
         * @param message   Message to display on error.
         */
        includeDeepMembers<T>(superset: T[], subset: T[], message?: string): void;

        /**
         * Asserts that non-object, non-array value inList appears in the flat array list.
         *
         * @type T   Type of list values.
         * @param inList   Value expected to be in the list.
         * @param list   List of values.
         * @param message   Message to display on error.
         */
        oneOf<T>(inList: T, list: T[], message?: string): void;

        /**
         * Asserts that a function changes the value of a property.
         *
         * @type T   Type of object.
         * @param modifier   Function to run.
         * @param object   Container object.
         * @param property   Property of object expected to be modified.
         * @param message   Message to display on error.
         */
        changes<T>(modifier: Function, object: T, property: string /* keyof T */, message?: string): void

        /**
         * Asserts that a function does not change the value of a property.
         *
         * @type T   Type of object.
         * @param modifier   Function to run.
         * @param object   Container object.
         * @param property   Property of object expected not to be modified.
         * @param message   Message to display on error.
         */
        doesNotChange<T>(modifier: Function, object: T, property: string /* keyof T */, message?: string): void

        /**
         * Asserts that a function increases an object property.
         *
         * @type T   Type of object.
         * @param modifier   Function to run.
         * @param object   Container object.
         * @param property   Property of object expected to be increased.
         * @param message   Message to display on error.
         */
        increases<T>(modifier: Function, object: T, property: string /* keyof T */, message?: string): void

        /**
         * Asserts that a function does not increase an object property.
         *
         * @type T   Type of object.
         * @param modifier   Function to run.
         * @param object   Container object.
         * @param property   Property of object expected not to be increased.
         * @param message   Message to display on error.
         */
        doesNotIncrease<T>(modifier: Function, object: T, property: string /* keyof T */, message?: string): void

        /**
         * Asserts that a function decreases an object property.
         *
         * @type T   Type of object.
         * @param modifier   Function to run.
         * @param object   Container object.
         * @param property   Property of object expected to be decreased.
         * @param message   Message to display on error.
         */
        decreases<T>(modifier: Function, object: T, property: string /* keyof T */, message?: string): void

        /**
         * Asserts that a function does not decrease an object property.
         *
         * @type T   Type of object.
         * @param modifier   Function to run.
         * @param object   Container object.
         * @param property   Property of object expected not to be decreased.
         * @param message   Message to display on error.
         */
        doesNotDecrease<T>(modifier: Function, object: T, property: string /* keyof T */, message?: string): void

        /**
         * Asserts if value is not a false value, and throws if it is a true value.
         *
         * @type T   Type of object.
         * @param object   Actual value.
         * @param message   Message to display on error.
         * @remarks This is added to allow for chai to be a drop-in replacement for
         *          Node’s assert class.
         */
        ifError<T>(object: T, message?: string): void;

        /**
         * Asserts that object is extensible (can have new properties added to it).
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        isExtensible<T>(object: T, message?: string): void;

        /**
         * Asserts that object is extensible (can have new properties added to it).
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        extensible<T>(object: T, message?: string): void;

        /**
         * Asserts that object is not extensible.
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        isNotExtensible<T>(object: T, message?: string): void;

        /**
         * Asserts that object is not extensible.
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        notExtensible<T>(object: T, message?: string): void;

        /**
         * Asserts that object is sealed (can have new properties added to it
         * and its existing properties cannot be removed).
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        isSealed<T>(object: T, message?: string): void;

        /**
         * Asserts that object is sealed (can have new properties added to it
         * and its existing properties cannot be removed).
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        sealed<T>(object: T, message?: string): void;

        /**
         * Asserts that object is not sealed.
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        isNotSealed<T>(object: T, message?: string): void;

        /**
         * Asserts that object is not sealed.
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        notSealed<T>(object: T, message?: string): void;

        /**
         * Asserts that object is frozen (cannot have new properties added to it
         * and its existing properties cannot be removed).
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        isFrozen<T>(object: T, message?: string): void;

        /**
         * Asserts that object is frozen (cannot have new properties added to it
         * and its existing properties cannot be removed).
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        frozen<T>(object: T, message?: string): void;

        /**
         * Asserts that object is not frozen (cannot have new properties added to it
         * and its existing properties cannot be removed).
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        isNotFrozen<T>(object: T, message?: string): void;

        /**
         * Asserts that object is not frozen (cannot have new properties added to it
         * and its existing properties cannot be removed).
         *
         * @type T   Type of object
         * @param object   Actual value.
         * @param message   Message to display on error.
         */
        notFrozen<T>(object: T, message?: string): void;
    }

    export interface Config {
        /**
         * Default: false
         */
        includeStack: boolean;

        /**
         * Default: true
         */
        showDiff: boolean;

        /**
         * Default: 40
         */
        truncateThreshold: number;
    }

    export class AssertionError {
        constructor(message: string, _props?: any, ssf?: Function);
        name: string;
        message: string;
        showDiff: boolean;
        stack: string;
    }
}

declare const chai: Chai.ChaiStatic;

declare module "chai" {
    export = chai;
}

interface Object {
    should: Chai.Assertion;
}
