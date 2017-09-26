declare namespace adone {
    /**
     * assertion functions
     */
    namespace assertion {
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
                /**
                 * Include stack in Assertion error message
                 */
                includeStack: boolean;
                /**
                 * Include `showDiff` flag in the thrown errors
                 */
                showDiff: boolean;
                /**
                 * Length threshold for actual and expected values in assertion errors
                 */
                truncateThreshold: number;
                /**
                 * use Proxy to throw an error when a non-existent property is read
                 */
                useProxy: boolean;
                /**
                 * properties that should be ignored instead of throwing an error if they do not exist on the assertion
                 */
                proxyExcludedKeys: string[];
            }

            type PossibleTypes = util.I.PossibleTypes | "array";

            type UseFunction = (fn: () => void) => assertion;

            type LoadInterfaceFunction = () => assertion;

            interface AssertFunction {
                /**
                 * Asserts that value is truthy
                 */
                (value: any, message?: string): void;
                /**
                 * Throws an AssertionError, like node.js
                 */
                fail(actual?: any, expected?: any, message?: string, operator?: any): void;
                /**
                 * Asserts that value is truthy
                 */
                isOk(value: any, message?: string): void;
                /**
                 * Asserts that value is truthy
                 */
                ok(value: any, message?: string): void;
                /**
                 * Asserts that value is falsy
                 */
                isNotOk(value: any, message?: string): void;
                /**
                 * Asserts that value is falsy
                 */
                notOk(value: any, message?: string): void;
                /**
                 * Asserts non-strict equality
                 */
                equal(actual: any, expected: any, message?: string): void;
                /**
                 * Asserts non-strict inequality
                 */
                notEqual(actual: any, expected: any, message?: string): void;
                /**
                 * Asserts strict equality
                 */
                strictEqual(actual: any, expected: any, message?: string): void;
                /**
                 * Asserts strict inequality
                 */
                notStrictEqual(actual: any, expected: any, message?: string): void;
                /**
                 * Asserts that actual is deeply equal to expected
                 */
                deepEqual(actual: any, expected: any, message?: string): void;
                /**
                 * Asserts that actual is deeply equal to expected
                 */
                deepStrictEqual(actual: any, expected: any, message?: string): void;
                /**
                 * Asserts that actual and expected have the same length and the same members (===)
                 */
                equalArrays(actual: any[], expected: any[], message?: string): void;
                /**
                 * Asserts that actual is not deeply equal to expected
                 */
                notDeepEqual(actual: any, expected: any, message?: string): void;
                /**
                 * Asserts that value > above
                 */
                isAbove(value: any, above: any, message?: string): void;
                /**
                 * Asserts that value >= atLeast
                 */
                isAtLeast(value: any, atLeast: any, message?: string): void;
                /**
                 * Asserts that value < below
                 */
                isBelow(value: any, below: any, message?: string): void;
                /**
                 * Asserts that value <= atMost
                 */
                isAtMost(value: any, atMost: any, message?: string): void;
                /**
                 * Asserts that value is true
                 */
                isTrue(value: any, message?: string): void;
                /**
                 * Asserts that value is not true
                 */
                isNotTrue(value: any, message?: string): void;
                /**
                 * Asserts that value is false
                 */
                isFalse(value: any, message?: string): void;
                /**
                 * Asserts that value is not false
                 */
                isNotFalse(value: any, message?: string): void;
                /**
                 * Asserts that value is null
                 */
                isNull(value: any, message?: string): void;
                /**
                 * Asserts that valus is not null
                 */
                isNotNull(value: any, message?: string): void;
                /**
                 * Asserts that value is NaN
                 */
                isNaN(value: any, message?: string): void;
                /**
                 * Asserts that value is not NaN
                 */
                isNotNaN(value: any, message?: string): void;
                /**
                 * Asserts that value is neither null nor undefined
                 */
                exists(value: any, message?: string): void;
                /**
                 * Asserts that value is either null or undefined
                 */
                notExists(value: any, message?: string): void;
                /**
                 * Asserts that value is undefined
                 */
                isUndefined(value: any, message?: string): void;
                /**
                 * Asserts that value is not undefined
                 */
                isDefined(value: any, message?: string): void;
                /**
                 * Asserts that value is a function
                 */
                isFunction(value: any, message?: string): void;
                /**
                 * Asserts that value is not a function
                 */
                isNotFunction(value: any, message?: string): void;
                /**
                 * Asserts that value is an object of type Object
                 */
                isObject(value: any, message?: string): void;
                /**
                 * Asserts that value is not an object of type Object
                 */
                isNotObject(value: any, message?: string): void;
                /**
                 * Asserts that value is an array
                 */
                isArray(value: any, message?: string): void;
                /**
                 * Asserts that value is not an array
                 */
                isNotArray(value: any, message?: string): void;
                /**
                 * Asserts that value is a string
                 */
                isString(value: any, message?: string): void;
                /**
                 * Asserts that value is not a string
                 */
                isNotString(value: any, message?: string): void;
                /**
                 * Asserts that value is a number
                 */
                isNumber(value: any, message?: string): void;
                /**
                 * Asserts that value is not a number
                 */
                isNotNumber(value: any, message?: string): void;
                /**
                 * Asserts that value is a finite number
                 */
                isFinite(value: any, message?: string): void;
                /**
                 * Asserts that value is a boolean
                 */
                isBoolean(value: any, message?: string): void;
                /**
                 * Asserts that value is not a boolean
                 */
                isNotBoolean(value: any, message?: string): void;
                /**
                 * Asserts that value's type is `type`
                 */
                typeOf(value: any, type: PossibleTypes, message?: string): void;
                typeOf(value: any, type: string, message?: string): void;
                /**
                 * Assert that value's type is not `type`
                 */
                notTypeOf(value: any, type: PossibleTypes, message?: string): void;
                notTypeOf(value: any, type: string, message?: string): void;
                /**
                 * Asserts that value is an instance of constructor
                 */
                instanceOf(value: any, constructor: object, message?: string): void;
                /**
                 * Asserts that value is not an instance of constructor
                 */
                notInstanceOf(value: any, constructor: object, message?: string): void;
                /**
                 * Asserts that expected includes inc
                 */
                include<T>(expected: T[], inc: T, message?: string): void;
                include(expected: string, inc: string, message?: string): void;
                /**
                 * Asserts that expected does not include inc
                 */
                notInclude<T>(expected: T[], inc: T, message?: string): void;
                notInclude(expected: string, inc: string, message?: string): void;
                /**
                 * Asserts that expected includes inc
                 */
                deepInclude<T>(expected: T[], inc: T, message?: string): void;
                deepInclude(expected: string, inc: string, message?: string): void;
                /**
                 * Asserts that expected does not include inc
                 */
                notDeepInclude<T>(expected: T[], inc: T, message?: string): void;
                notDeepInclude(expected: string, inc: string, message?: string): void;
                /**
                 * Asserts that expected includes inc
                 */
                nestedInclude(expected: object, inc: object, message?: string): void;
                /**
                 * Asserts that expected does not include inc
                 */
                notNestedInclude(expected: object, inc: object, message?: string): void;
                /**
                 * Assert that expected includes inc
                 */
                deepNestedInclude(expected: object, inc: object, message?: string): void;
                /**
                 * Assert that expected includes inc
                 */
                notDeepNestedInclude(expected: object, inc: object, message?: string): void;
                /**
                 * Assert that expected includes inc
                 */
                ownInclude(expected: object, inc: object, message?: string): void;
                /**
                 * Assert that expected does not include inc
                 */
                notOwnInclude(expected: object, inc: object, message?: string): void;
                /**
                 * Assert that expected includes inc
                 */
                deepOwnInclude(expected: object, inc: object, message?: string): void;
                /**
                 * Assert that expected does not include inc
                 */
                notDeepOwnInclude(expected: object, inc: object, message?: string): void;
                /**
                 * Asserts that expected matches the regular expression regExp
                 */
                match(expected: any, regExp: RegExp, message?: string): void;
                /**
                 * Asserts that expected does not match the regular expression regExp
                 */
                notMatch(expected: any, regExp: RegExp, message?: string): void;
                /**
                 * Asserts that object has a property named `property`
                 */
                property(object: object, property: string, message?: string): void;
                /**
                 * Asserts that object does not have a property named `property`
                 */
                notProperty(object: object, property: string, message?: string): void;
                /**
                 * Asserts that object has a property named `property` with value `value` (===)
                 */
                propertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that object does not have a property named `property` with value `value` (===)
                 */
                notPropertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that object has a property named `property` with a value `value`
                 */
                deepPropertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that object does not have a property named `property` with value `value`
                 */
                notDeepPropertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that object has an owned property named `property`
                 */
                ownProperty(object: object, property: string, message?: string): void;
                /**
                 * Asserts that object does not have an owned property named `property`
                 */
                notOwnProperty(object: object, property: string, message?: string): void;
                /**
                 * Asserts that object has an owned property named `property` with value `value`(===)
                 */
                ownPropertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that object does not have an owned property named `property` with value `value`(===)
                 */
                notOwnPropertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that object has an owned property named `property` with value `value`
                 */
                deepOwnPropertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that object does not have an owned property named `property` with value `value`(===)
                 */
                notDeepOwnPropertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that object has a property named `property`
                 */
                nestedProperty(object: object, property: string, message?: string): void;
                /**
                 * Asserts that object does not have a property named `property`
                 */
                notNestedProperty(object: object, property: string, message?: string): void;
                /**
                 * Asserts that object has a property named `property` with value `value`(===)
                 */
                nestedPropertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that object does not have a property named `property` with value `value`(===)
                 */
                notNestedPropertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that object has a property named `property` with value `value`
                 */
                deepNestedPropertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that object does not have a property named `property` with value `value`
                 */
                notDeepNestedPropertyVal(object: object, property: string, value: any, message?: string): void;
                /**
                 * Asserts that expected has a length property with value `length`
                 */
                lengthOf(expected: any, length: number, message?: string): void;
                /**
                 * Asserts that object has at least one key from `keys`
                 */
                hasAnyKeys(object: object, keys: string | string[] | object, message?: string): void;
                /**
                 * Asserts that object has all and only all of the keys provided
                 */
                hasAllKeys(object: object, keys: string | string[] | object, message?: string): void;
                /**
                 * Asserts that object has all the keys provided but maybe more
                 */
                containsAllKeys(object: object, keys: string | string[] | object, message?: string): void;
                /**
                 * Asserts that object does not have any provided key
                 */
                doesNotHaveAnyKeys(object: object, keys: string | string[] | object, message?: string): void;
                /**
                 * Asserts that object does not have all the keys provided
                 */
                doesNotHaveAllKeys(object: object, keys: string | string[] | object, message?: string): void;
                /**
                 * Asserts that object has at least one of the keys provided
                 */
                hasAnyDeepKeys(object: object, keys: string | string[] | object, message?: string): void;
                /**
                 * Asserts that object has all and only all of the keys provided
                 */
                hasAllDeepKeys(object: object, keys: string | string[] | object, message?: string): void;
                /**
                 * Asserts that object has all the keys provided but maybe more
                 */
                containsAllDeepKeys(object: object, keys: string | string[] | object, message?: string): void;
                /**
                 * Asserts that object does not have any provided key
                 */
                doesNotHaveAnyDeepKeys(object: object, keys: string | string[] | object, message?: string): void;
                /**
                 * Asserts that object does not have all the keys provided
                 */
                doesNotHaveAllDeepKeys(object: object, keys: string | string[] | object, message?: string): void;
                /**
                 * Asserts that a function or an async functions throws an error
                 */
                throws(fn: () => void, errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): any;
                throws(fn: () => Promise<void>, errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): Promise<any>;
                /**
                 * Asserts that a function or an async functions throws an error
                 */
                throw(fn: () => void, errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): any;
                throw(fn: () => Promise<void>, errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): Promise<any>;
                /**
                 * Asserts that a function or an async function does not throw an error
                 */
                doesNotThrow(fn: () => Promise<void>, errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): Promise<any>;
                doesNotThrow(fn: () => void, errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): any;
                /**
                 * Compares two values using operator
                 */
                operator(value: any, operator: string, val2: any, message?: string): void;
                /**
                 * Asserts that actual is expected +/- delta
                 */
                closeTo(actual: number, expected: number, delta: number, message?: string): void;
                /**
                 * Asserts that actual is expect +/- delta
                 */
                approximately(actual: number, expected: number, delta: number, message?: string): void;
                /**
                 * Asserts that arrays have the same members in any order (===)
                 */
                sameMembers(set1: any[], set2: any[], message?: string): void;
                /**
                 * Asserts that arrays do not have the same members in any order (===)
                 */
                notSameMembers(set1: any[], set2: any[], message?: string): void;
                /**
                 * Asserts that arrays have the same members in any order
                 */
                sameDeepMembers(set1: any[], set2: any[], message?: string): void;
                /**
                 * Asserts that arrays do not have the same members in any order
                 */
                notSameDeepMembers(set1: any[], set2: any[], message?: string): void;
                /**
                 * Asserts that arrays have the same members in the same order (===)
                 */
                sameOrderedMembers(set1: any[], set2: any[], message?: string): void;
                /**
                 * Asserts that arrays do not have the same members in the same order (===)
                 */
                notSameOrderedMembers(set1: any[], set2: any[], message?: string): void;
                /**
                 * Asserts that arrays have the same members in the same order
                 */
                sameDeepOrderedMembers(set1: any[], set2: any[], message?: string): void;
                /**
                 * Asserts that arrays do not have the same members in the same order
                 */
                notSameDeepOrderedMembers(set1: any[], set2: any[], message?: string): void;
                /**
                 * Asserts that subset is included in superset in any order (===)
                 */
                includeMembers(superset: any[], subset: any[], message?: string): void;
                /**
                 * Asserts that subset is not included in superset in any order (===)
                 */
                notIncludeMembers(superset: any[], subset: any[], message?: string): void;
                /**
                 * Asserts that subset is included in superset in any order
                 */
                includeDeepMembers(superset: any[], subset: any[], message?: string): void;
                /**
                 * Asserts that subset is not included in superset in any order
                 */
                notIncludeDeepMembers(superset: any[], subset: any[], message?: string): void;
                /**
                 * Asserts that subset is included in superset in the same order (===)
                 */
                includeOrderedMembers(superset: any[], subset: any[], message?: string): void;
                /**
                 * Asserts that subset is not included in superset in the same order (===)
                 */
                notIncludeOrderedMembers(superset: any[], subset: any[], message?: string): void;
                /**
                 * Asserts that subset is included in superset in the same order
                 */
                includeDeepOrderedMembers(superset: any[], subset: any[], message?: string): void;
                /**
                 * Asserts that subset is not included in superset in the same order
                 */
                notIncludeDeepOrderedMembers(superset: any[], subset: any[], message?: string): void;
                /**
                 * Asserts that list includes inList
                 */
                oneOf(inList: any, list: any[], message?: string): void;
                /**
                 * Asserts that a function changes the value of a property
                 */
                changes(fn: () => void, object: object, property: string, message?: string): void;
                /**
                 * Asserts that a function changes the value of a property by delta
                 */
                changesBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;
                /**
                 * Asserts that a function does not changes the value of a property
                 */
                doesNotChange(fn: () => void, object: object, property: string, message?: string): void;
                /**
                 * Asserts that a function does not change the value of a property or of a function’s return value by delta
                 */
                changesButNotBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;
                /**
                 * Asserts that a function increases a numeric object property
                 */
                increases(fn: () => void, object: object, property: string, message?: string): void;
                /**
                 * Asserts that a function increases a numeric object property or a function’s return value by delta
                 */
                increasesBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;
                /**
                 * Asserts that a function does not increase a numeric object property
                 */
                doesNotIncrease(fn: () => void, object: object, property: string, message?: string): void;
                /**
                 * Asserts that a function does not increase a numeric object property or function’s return value by delta
                 */
                increasesButNotBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;
                /**
                 * Asserts that a function decreases the value of a property
                 */
                decreases(fn: () => void, object: object, property: string, message?: string): void;
                /**
                 * Asserts that a function decreases the value of a property by delta
                 */
                decreasesBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;
                /**
                 * Asserts that a function does not decrease the value of a property
                 */
                doesNotDecrease(fn: () => void, object: object, property: string, message?: string): void;
                /**
                 * Asserts that a function does not decrease the value of a property or a function's return value by delta
                 */
                doesNotDecreaseBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;
                /**
                 * Asserts that a function does not decreases a numeric object property or a function’s return value by delta
                 */
                decreasesButNotBy(fn: () => void, object: object, property: string, delta: number, message?: string): void;
                /**
                 * Throws an error if value is truthy
                 */
                ifError(value: any): void;
                /**
                 * Asserts that object is extensible
                 */
                isExtensible(object: object, message?: string): void;
                /**
                 * Asserts that object is extensible
                 */
                extensible(object: object, message?: string): void;
                /**
                 * Asserts that object is not extensible
                 */
                isNotExtensible(object: object, message?: string): void;
                /**
                 * Asserts that object is not extensible
                 */
                notExtensible(object: object, message?: string): void;
                /**
                 * Asserts that object is sealed
                 */
                isSealed(object: object, message?: string): void;
                /**
                 * Asserts that object is sealed
                 */
                sealed(object: object, message?: string): void;
                /**
                 * Asserts that object is not sealed
                 */
                isNotSealed(object: object, message?: string): void;
                /**
                 * Asserts that object is not sealed
                 */
                notSealed(object: object, message?: string): void;
                /**
                 * Asserts that object is frozen
                 */
                isFrozen(object: object, message?: string): void;
                /**
                 * Asserts that object is frozen
                 */
                frozen(object: object, message?: string): void;
                /**
                 * Asserts that object is not frozen
                 */
                isNotFrozen(object: object, message?: string): void;
                /**
                 * Asserts that object is not frozen
                 */
                notFrozen(object: object, message?: string): void;
                /**
                 * Asserts that value is empty
                 */
                isEmpty(value: any, message?: string): void;
                /**
                 * Asserts that value is empty
                 */
                empty(value: any, message?: string): void;
                /**
                 * Asserts that value is not empty
                 */
                isNotEmpty(value: any, message?: string): void;
                /**
                 * Asserts that value is not empty
                 */
                notEmpty(value: any, message?: string): void;
            }

            interface ExpectFunction {
                (value: shani.util.I.Spy, message?: string): MockAssertions;
                (value: any, message?: string): Assertion;
                fail(actual: any, expected: any, message?: string, operator?: any): void;
            }

            interface LanguageChains {
                to: this;
                be: this;
                been: this;
                is: this;
                that: this;
                which: this;
                and: this;
                has: this;
                have: this;
                with: this;
                at: this;
                of: this;
                same: this;
                but: this;
                does: this;
            }

            interface Assertion extends LanguageChains {
                /**
                 * Negates all following assertion in the chain
                 */
                not: this;
                /**
                 * Causes following assertions to use deep equality
                 */
                deep: this;
                /**
                 * Enables dot- and bracket-notation in following property and include assertions
                 */
                nested: this;
                /**
                 * Causes following property and incude assertions to ignore inherited properties
                 */
                own: this;
                /**
                 * Causes following members assertions to require that members be in the same order
                 */
                ordered: this;
                /**
                 * Causes following keys assertions to only require that the target have at least one of the given keys
                 */
                any: this;
                /**
                 * Causes following keys assertions to require that the target have all of the given keys
                 */
                all: this;
                /**
                 * Asserts that the target's type is `type`
                 */
                a(type: PossibleTypes, message?: string): this;
                a(type: string, message?: string): this;
                /**
                 * Asserts that the target's type is `type`
                 */
                an(type: PossibleTypes, message?: string): this;
                an(type: string, message?: string): this;
                /**
                 * Asserts that the target includes the given value
                 */
                include(value: any, message?: string): this;
                /**
                 * Asserts that the target includes the given value
                 */
                includes(value: any, message?: string): this;
                /**
                 * Asserts that the target contains the given value
                 */
                contain(value: any, message?: string): this;
                /**
                 * Asserts that the target contains the given value
                 */
                contains(value: any, message?: string): this;
                /**
                 * Asserts that the target is non-strictly equal to true
                 */
                ok: this;
                /**
                 * Asserts that the target is true
                 */
                true: this;
                /**
                 * Asserts that the target is false
                 */
                false: this;
                /**
                 * Asserts that the target is null
                 */
                null: this;
                /**
                 * Asserts that the target is undefined
                 */
                undefined: this;
                /**
                 * Asserts that the target is NaN
                 */
                NaN: this;
                /**
                 * Asserts that the target is neither null nor undefined
                 */
                exist: this;
                /**
                 * Asserts that the target is empty
                 */
                empty: this;
                /**
                 * Asserts that the target is an arguments object
                 */
                arguments: this;
                /**
                 * Asserts that the target is an arguments object
                 */
                Arguments: this;
                /**
                 * Asserts that the target is strictly equal to value(===)
                 */
                equal(value: any, message?: string): this;
                /**
                 * Asserts that the target is strictly equal to value(===)
                 */
                equals(value: any, message?: string): this;
                /**
                 * Asserts that the target is strictly equal to value(===)
                 */
                eq(value: any, message?: string): this;
                /**
                 * Asserts that the target is deeply equal to object
                 */
                eql(object: any, message?: string): this;
                /**
                 * Asserts that the target is deeply equal to object
                 */
                eqls(object: any, message?: string): this;
                /**
                 * Asserts that the target has the same length length and elements as array in the same order
                 */
                eqlArray(array: any[], message?: string): this;
                /**
                 * Asserts that target > n
                 */
                above(n: number, message?: string): this;
                /**
                 * Asserts that target > n
                 */
                gt(n: number, message?: string): this;
                /**
                 * Asserts that target > n
                 */
                greaterThan(n: number, message?: string): this;
                /**
                 * Asserts that target >= n
                 */
                least(n: number, message?: string): this;
                /**
                 * Asserts that target >= n
                 */
                gte(n: number, message?: string): this;
                /**
                 * Asserts that target < n
                 */
                below(n: number, message?: string): this;
                /**
                 * Asserts that target < n
                 */
                lt(n: number, message?: string): this;
                /**
                 * Asserts that target < n
                 */
                lessThan(n: number, message?: string): this;
                /**
                 * Asserts that target <= n
                 */
                most(n: number, message?: string): this;
                /**
                 * Asserts that target <= n
                 */
                lte(n: number, message?: string): this;
                /**
                 * Asserts that start <= target <= end
                 */
                within(start: number, end: number, message?: string): this;
                /**
                 * Asserts that the target is an instance of constructor
                 */
                instanceof(constructor: object, message?: string): this;
                /**
                 * Asserts that the target is an instance of constructor
                 */
                instanceOf(constructor: object, message?: string): this;
                /**
                 * Asserts that the target has a property name `name` with value `value`
                 */
                property(name: string, value?: any, message?: string): this;
                /**
                 * Asserts that the target has its own property name `name` with value `value`
                 */
                ownProperty(name: string, value?: any, message?: string): this;
                /**
                 * Asserts that the target has its own property name `name` with value `value`
                 */
                haveOwnProperty(name: string, value?: any, message?: string): this;
                /**
                 * Asserts that the target has its own property descriptor with name `name` and value `value`
                 */
                ownPropertyDescriptor(name: string, descriptor?: object, message?: string): this;
                /**
                 * Asserts that the target has its own property descriptor with name `name` and value `value`
                 */
                haveOwnPropertyDescriptor(name: string, descriptor?: object, message?: string): this;
                /**
                 * Asserts that the target's property length equal to n
                 */
                length(n: number, message?: string): this;
                /**
                 * Asserts that the target's property length equal to n
                 */
                lengthOf(n: number, message?: string): this;
                /**
                 * Asserts that the target matches the regular expression regExp
                 */
                match(regExp: RegExp, message?: string): this;
                /**
                 * Asserts that the target matches the regular expression regExp
                 */
                matches(regExp: RegExp, message?: string): this;
                /**
                 * Asserts that the target contains str as a substring
                 */
                string(str: string, message?: string): this;
                /**
                 * Assert that the target has the given keys
                 */
                key(key: string | string[] | object): this;
                key(...keys: string[]): this;
                /**
                 * Assert that the target has the given keys
                 */
                keys(key: string | string[] | object): this;
                keys(...keys: string[]): this;
                /**
                 * Assert that the target throws an error
                 */
                throw(errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): this;
                /**
                 * Assert that the target throws an error
                 */
                throws(errorLike?: object, errMsgMatcher?: string | RegExp, message?: string): this;
                /**
                 * Assert that the target throws an error
                 */
                Throw(errorLike?: Error, errMsgMatcher?: string | RegExp): this;
                /**
                 * Assert that the target has a method with name `method`. For functions checks the prototype
                 */
                respondTo(method: string, message?: string): this;
                /**
                 * Assert that the target has a method with name `method`. For functions checks the prototype
                 */
                respondsTo(method: string, message?: string): this;
                /**
                 * Makes respondsTo behave like the target is not a function
                 */
                itself: this;
                /**
                 * Asserts that matches returns a truthy value with the target as the first argument
                 */
                satisfy(matcher: () => boolean, message?: string): this;
                /**
                 * Asserts that matches returns a truthy value with the target as the first argument
                 */
                satisfies(matcher: () => boolean, message?: string): this;
                /**
                 * Asserts that the target is expected +/- delta
                 */
                closeTo(expected: number, delta: number, message?: string): this;
                /**
                 * Asserts that the target is expected +/- delta
                 */
                approximately(expected: number, delta: number, message?: string): this;
                /**
                 * Asserts that the target array has the same members as the given
                 */
                members(set: any[], message?: string): this;
                /**
                 * Asserts that the target is the member of list
                 */
                oneOf(list: any[], message?: string): this;
                /**
                 * Asserts that fn returns a different value after the target's invokation than before
                 */
                change(fn: () => any, message?: string): this;
                /**
                 * Asserts that the target's invokation changes subject's property
                 */
                change(subject: object, property: string, message?: string): this;
                /**
                 * Asserts that fn returns a different value after the target's invokation than before
                 */
                changes(fn: () => any, message?: string): this;
                /**
                 * Asserts that the target's invokation changes subject's property
                 */
                changes(subject: object, property: string, message?: string): this;
                /**
                 * Asserts that fn returns a greater number after the target's invokation than before
                 */
                increase(fn: () => number, message?: string): this;
                /**
                 * Asserts that the target's invokation increases subject's property
                 */
                increase(subject: object, property?: string, message?: string): this;
                /**
                 * Asserts that fn returns a greater number after the target's invokation than before
                 */
                increases(fn: () => number, message?: string): this;
                /**
                 * Asserts that the target's invokation increases subject's property
                 */
                increases(subject: object, property?: string, message?: string): this;
                /**
                 * Asserts that fn returns a lesser number after the target's invokation than before
                 */
                decrease(fn: () => number, message?: string): this;
                /**
                 * Asserts that the target's invokation decreases subject's property
                 */
                decrease(subject: object, property?: string, message?: string): this;
                /**
                 * Asserts that fn returns a lesser number after the target's invokation than before
                 */
                decreases(fn: () => number, message?: string): this;
                /**
                 * Asserts that the target's invokation decreases subject's property
                 */
                decreases(subject: object, property?: string, message?: string): this;
                /**
                 * Asserts that the value was decreased/increased by delta
                 */
                by(delta: number, message?: string): this;
                /**
                 * Asserts that the target is extensible
                 */
                extensible: this;
                /**
                 * Asserts that the target is sealed
                 */
                sealed: this;
                /**
                 * Asserts that the target is frozen
                 */
                frozen: this;
                /**
                 * Asserts that the target is a finite number
                 */
                finite: this;
            }

            interface MockAssertions extends Assertion {
                /**
                 * Asserts that the spy has been called
                 */
                called: this;
                /**
                 * Asserts that the spy has been called n times
                 */
                callCount(n: number): this;
                /**
                 * Asserts that the spy has been called once
                 */
                calledOnce: this;
                /**
                 * Asserts that the spy has been called twice
                 */
                calledTwice: this;
                /**
                 * Asserts that the spy has been been called with `new`
                 */
                calledThrice: this;
                /**
                 * Asserts that the spy has been called before anotherSpy
                 */
                calledBefore(anotherSpy: shani.util.I.Spy): this;
                /**
                 * Asserts that the spy has been called after anotherSpy
                 */
                calledAfter(anotherSpy: shani.util.I.Spy): this;
                /**
                 * Asserts that the spy has been called immediately before anotherSpy
                 */
                calledImmediatelyBefore(anotherSpy: shani.util.I.Spy): this;
                /**
                 * Asserts that the spy has been called immediately after anotherSpy
                 */
                calledImmediatelyAfter(anotherSpy: shani.util.I.Spy): this;
                /**
                 * Asserts that the spy has been called with context as this value
                 */
                calledOn(context: object): this;
                /**
                 * Asserts that the spy has been called with the given arguments
                 */
                calledWith(...args: any[]): this;
                /**
                 * Asserts that the spy has been called exactly with the given arguments
                 */
                calledWithExactly(...args: any[]): this;
                /**
                 * Asserts that the spy has been called with matching arguments
                 */
                calledWithMatch(...args: any[]): this;
                /**
                 * Asserts that the spy returned value
                 */
                returned(value: any): this;
                /**
                 * Asserts that the spy threw error
                 */
                thrown(error: any): this;
                /**
                 * Asserts that the spy threw error
                 */
                threw(error: any): this;
            }
        }

        class AssertionError extends x.Exception {
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
}
