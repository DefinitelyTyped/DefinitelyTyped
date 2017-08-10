import adone from "..";

export namespace assertion {
    namespace I {
        interface assertion {
            AssertionError: AssertionError;
            config: Config;
            use: UseFunction;
            loadMockInterface: LoadInterfaceFunction;
            loadExpectInterface: LoadInterfaceFunction;
            loadAssertInterface: LoadInterfaceFunction;
            assert: AssertFunction;
            expect: ExpectFunction;
        }

        interface Config {
            includeStack: boolean;
            showDiff: boolean;
            truncateThreshold: number;
            useProxy: boolean;
            proxyExcludedKeys: string[];
        }

        type PossibleTypes = adone.util.I.PossibleTypes | "array";

        type UseFunction = (fn: () => void) => assertion;

        type LoadInterfaceFunction = () => assertion;

        interface AssertFunction {
            (value: any, message?: string): void;

            fail(actual?: any, expected?: any, message?: string, operator?: any): void;

            isOk(value: any, message?: string): void;

            isNotOk(value: any, message?: string): void;

            equal(actual: any, expected: any, message?: string): void;

            notEqual(actual: any, expected: any, message?: string): void;

            strictEqual(actual: any, expected: any, message?: string): void;

            notStrictEqual(actual: any, expected: any, message?: string): void;

            deepEqual(actual: any, expected: any, message?: string): void;

            deepStrictEqual(actual: any, expected: any, message?: string): void;

            equalArrays(actual: any[], expected: any[], message?: string): void;

            notDeepEqual(actual: any, expected: any, message?: string): void;

            isAbove(value: any, above: any, message?: string): void;

            isAtLeast(value: any, atLeast: any, message?: string): void;

            isBelow(value: any, below: any, message?: string): void;

            isAtMost(value: any, atMost: any, message?: string): void;

            isTrue(value: any, message?: string): void;

            isNotTrue(value: any, message?: string): void;

            isFalse(value: any, message?: string): void;

            isNotFalse(value: any, message?: string): void;

            isNull(value: any, message?: string): void;

            isNotNull(value: any, message?: string): void;

            isNaN(value: any, message?: string): void;

            isNotNaN(value: any, message?: string): void;

            exists(value: any, message?: string): void;

            notExists(value: any, message?: string): void;

            isUndefined(value: any, message?: string): void;

            isDefined(value: any, message?: string): void;

            isFunction(value: any, message?: string): void;

            isNotFunction(value: any, message?: string): void;

            isObject(value: any, message?: string): void;

            isNotObject(value: any, message?: string): void;

            isArray(value: any, message?: string): void;

            isNotArray(value: any, message?: string): void;

            isString(value: any, message?: string): void;

            isNotString(value: any, message?: string): void;

            isNumber(value: any, message?: string): void;

            isNotNumber(value: any, message?: string): void;

            isFinite(value: any, message?: string): void;

            isBoolean(value: any, message?: string): void;

            isNotBoolean(value: any, message?: string): void;

            typeOf(value: any, type: I.PossibleTypes, message?: string): void;
            typeOf(value: any, type: string, message?: string): void;

            notTypeOf(value: any, type: I.PossibleTypes, message?: string): void;
            notTypeOf(value: any, type: string, message?: string): void;

            instanceOf(value: any, type: object, message?: string): void;

            notInstanceOf(value: any, type: object, message?: string): void;

            include<T>(expected: T[], inc: T, message?: string): void;
            include(expected: string, inc: string, message?: string): void;

            notInclude<T>(expected: T[], inc: T, message?: string): void;
            notInclude(expected: string, inc: string, message?: string): void;

            deepInclude<T>(expected: T[], inc: T, message?: string): void;
            deepInclude(expected: string, inc: string, message?: string): void;

            notDeepInclude<T>(expected: T[], inc: T, message?: string): void;
            notDeepInclude(expected: string, inc: string, message?: string): void;

            nestedInclude(expected: object, inc: object, message?: string): void;

            notNestedInclude(expected: object, inc: object, message?: string): void;

            deepNestedInclude(expected: object, inc: object, message?: string): void;

            notDeepNestedInclude(expected: object, inc: object, message?: string): void;

            ownInclude(expected: object, inc: object, message?: string): void;

            notOwnInclude(expected: object, inc: object, message?: string): void;

            deepOwnInclude(expected: object, inc: object, message?: string): void;

            notDeepOwnInclude(expected: object, inc: object, message?: string): void;

            match(expected: any, re: RegExp, message?: string): void;

            notMatch(expected: any, re: RegExp, message?: string): void;

            property(object: object, property: string, message?: string): void;

            notProperty(object: object, property: string, message?: string): void;

            propertyVal(object: object, property: string, value: any, message?: string): void;

            notPropertyVal(object: object, property: string, value: any, message?: string): void;

            deepPropertyVal(object: object, property: string, value: any, message?: string): void;

            notDeepPropertyVal(object: object, property: string, value: any, message?: string): void;

            ownProperty(object: object, property: string, message?: string): void;

            notOwnProperty(object: object, property: string, message?: string): void;

            ownPropertyVal(object: object, property: string, value: any, message?: string): void;

            notOwnPropertyVal(object: object, property: string, value: any, message?: string): void;

            deepOwnPropertyVal(object: object, property: string, value: any, message?: string): void;

            notDeepOwnPropertyVal(object: object, property: string, value: any, message?: string): void;

            nestedProperty(object: object, property: string, message?: string): void;

            notNestedProperty(object: object, property: string, message?: string): void;

            nestedPropertyVal(object: object, property: string, value: any, message?: string): void;

            notNestedPropertyVal(object: object, property: string, value: any, message?: string): void;

            deepNestedPropertyVal(object: object, property: string, value: any, message?: string): void;

            notDeepNestedPropertyVal(object: object, property: string, value: any, message?: string): void;

            lengthOf(expected: any, length: number, message?: string): void;

            hasAnyKeys(object: object, keys: string[] | object, message?: string): void;

            hasAllKeys(object: object, keys: string[] | object, message?: string): void;

            containsAllKeys(object: object, keys: string[] | object, message?: string): void;

            doesNotHaveAnyKeys(object: object, keys: string[] | object, message?: string): void;

            doesNotHaveAllKeys(object: object, keys: string[] | object, message?: string): void;

            hasAnyDeepKeys(object: object, keys: string[] | object, message?: string): void;

            hasAllDeepKeys(object: object, keys: string[] | object, message?: string): void;

            containsAllDeepKeys(object: object, keys: string[] | object, message?: string): void;

            doesNotHaveAnyDeepKeys(object: object, keys: string[] | object, message?: string): void;

            doesNotHaveAllDeepKeys(object: object, keys: string[] | object, message?: string): void;

            throws(fn: () => Promise<void>, errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): Promise<any>;
            throws(fn: () => void, errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): any;

            doesNotThrow(fn: () => Promise<void>, errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): Promise<any>;
            doesNotThrow(fn: () => void, errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): any;

            operator(value: any, operator: string, val2: any, message?: string): void;

            closeTo(actual: number, expected: number, delta: number, message?: string): void;

            approximately(actual: number, expected: number, delta: number, message?: string): void;

            sameMembers(set1: any[], set2: any[], message?: string): void;

            notSameMembers(set1: any[], set2: any[], message?: string): void;

            sameDeepMembers(set1: any[], set2: any[], message?: string): void;

            notSameDeepMembers(set1: any[], set2: any[], message?: string): void;

            sameOrderedMembers(set1: any[], set2: any[], message?: string): void;

            notSameOrderedMembers(set1: any[], set2: any[], message?: string): void;

            sameDeepOrderedMembers(set1: any[], set2: any[], message?: string): void;

            notSameDeepOrderedMembers(set1: any[], set2: any[], message?: string): void;

            includeMembers(superset: any[], subset: any[], message?: string): void;

            notIncludeMembers(superset: any[], subset: any[], message?: string): void;

            includeDeepMembers(superset: any[], subset: any[], message?: string): void;

            notIncludeDeepMembers(superset: any[], subset: any[], message?: string): void;

            includeOrderedMembers(superset: any[], subset: any[], message?: string): void;

            notIncludeOrderedMembers(superset: any[], subset: any[], message?: string): void;

            includeDeepOrderedMembers(superset: any[], subset: any[], message?: string): void;

            notIncludeDeepOrderedMembers(superset: any[], subset: any[], message?: string): void;

            oneOf(inList: any, list: any[], message?: string): void;

            changes(fn: () => void, object: object, property: string, message?: string): void;

            changesBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;

            doesNotChange(fn: () => void, object: object, property: string, message?: string): void;

            changesButNotBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;

            increases(fn: () => void, object: object, property: string, message?: string): void;

            increasesBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;

            doesNotIncrease(fn: () => void, object: object, property: string, message?: string): void;

            increasesButNotBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;

            decreases(fn: () => void, object: object, property: string, message?: string): void;

            decreasesBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;

            doesNotDecrease(fn: () => void, object: object, property: string, message?: string): void;

            doesNotDecreaseBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;

            decreasesButNotBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;

            ifError(value: any): void;

            isExtensible(object: object, message?: string): void;

            isNotExtensible(object: object, message?: string): void;

            isSealed(object: object, message?: string): void;

            isNotSealed(object: object, message?: string): void;

            isFrozen(object: object, message?: string): void;

            isNotFrozen(object: object, message?: string): void;

            isEmpty(value: any, message?: string): void;

            isNotEmpty(value: any, message?: string): void;
        }

        interface ExpectFunction {
            (value: any, message?: string): Expect;
            fail(actual: any, expected: any, message?: string, operator?: any): void;
        }

        interface Expect {
            to: Expect;

            be: Expect;

            been: Expect;

            is: Expect;

            and: Expect;

            has: Expect;

            have: Expect;

            with: Expect;

            that: Expect;

            which: Expect;

            at: Expect;

            of: Expect;

            same: Expect;

            but: Expect;

            does: Expect;

            not: Expect;

            deep: Expect;

            nested: Expect;

            own: Expect;

            ordered: Expect;

            any: Expect;

            all: Expect;

            a(type: I.PossibleTypes, message?: string): Expect;
            a(type: string, message?: string): Expect;

            an(type: I.PossibleTypes, message?: string): Expect;
            an(type: string, message?: string): Expect;

            include(value: any, message?: string): Expect;

            includes(value: any, message?: string): Expect;

            contain(value: any, message?: string): Expect;

            contains(value: any, message?: string): Expect;

            ok: Expect;

            true: Expect;

            false: Expect;

            null: Expect;

            undefined: Expect;

            NaN: Expect;

            exist: Expect;

            empty: Expect;

            arguments: Expect;

            Arguments: Expect;

            equal(value: any, message?: string): Expect;

            equals(value: any, message?: string): Expect;

            eq(value: any, message?: string): Expect;

            eql(object: any, message?: string): Expect;

            eqls(object: any, message?: string): Expect;

            eqlArray(array: any[], message?: string): Expect;

            above(n: number, message?: string): Expect;

            gt(n: number, message?: string): Expect;

            greaterThan(n: number, message?: string): Expect;

            least(n: number, message?: string): Expect;

            gte(n: number, message?: string): Expect;

            below(n: number, message?: string): Expect;

            lt(n: number, message?: string): Expect;

            lessThan(n: number, message?: string): Expect;

            most(n: number, message?: string): Expect;

            lte(n: number, message?: string): Expect;

            within(start: number, end: number, message?: string): Expect;

            instanceof(constructor: object, message?: string): Expect;

            instanceOf(constructor: object, message?: string): Expect;

            property(name: string, value?: any, message?: string): Expect;

            ownProperty(name: string, value?: any, message?: string): Expect;

            haveOwnProperty(name: string, value?: any, message?: string): Expect;

            ownPropertyDescriptor(name: string, descriptor?: object, message?: string): Expect;

            haveOwnPropertyDescriptor(name: string, descriptor?: object, message?: string): Expect;

            length(n: number, message?: string): Expect;

            lengthOf(n: number, message?: string): Expect;

            match(re: RegExp, message?: string): Expect;

            matches(re: RegExp, message?: string): Expect;

            string(str: string, message?: string): Expect;

            key(key: string | string[] | object): Expect;
            key(...keys: string[]): Expect;

            keys(key: string | string[] | object): Expect;
            keys(...keys: string[]): Expect;

            throw(errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): Expect;

            throws(errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): Expect;

            Throw(errorLike?: Error, errMsgMatcher?: string | RegExp): Expect;

            respondTo(method: string, message?: string): Expect;

            respondsTo(method: string, message?: string): Expect;

            itself: Expect;

            satisfy(matcher: () => boolean, message?: string): Expect;

            satisfies(matcher: () => boolean, message?: string): Expect;

            closeTo(expected: number, delta: number, message?: string): Expect;

            approximately(expected: number, delta: number, message?: string): Expect;

            members(set: any[], message?: string): Expect;

            oneOf(list: any[], message?: string): Expect;

            change(subject: object, property?: string, message?: string): Expect;

            changes(subject: object, property?: string, message?: string): Expect;

            increase(subject: object, property?: string, message?: string): Expect;

            increases(subject: object, property?: string, message?: string): Expect;

            decrease(subject: object, property?: string, message?: string): Expect;

            decreases(subject: object, property?: string, message?: string): Expect;

            by(delta: number, message?: string): Expect;

            extensible: Expect;

            sealed: Expect;

            frozen: Expect;

            finite: Expect;
        }
    }

    class AssertionError extends adone.x.Exception {
        constructor(message?: string, props?: object, ssf?: object)
    }

    const config: I.Config;
    const use: I.UseFunction;
    const loadMockInterface: I.LoadInterfaceFunction;
    const loadExpectInterface: I.LoadInterfaceFunction;
    const loadAssertInterface: I.LoadInterfaceFunction;
    const assert: I.AssertFunction;
    const expect: I.ExpectFunction;
}
