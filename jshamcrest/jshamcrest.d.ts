// Type definitions for JsHamcrest 0.7.0
// Project: https://github.com/danielfm/jshamcrest/
// Definitions by: David Harkness <https://github.com/dharkness>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Top-level module for the JsHamcrest matcher library.
 *
 * @author Daniel Martins
 */
declare module JsHamcrest {
    /**
     * Library version.
     */
    export var version: string;


    //
    // Description
    //

    /**
     * Defines the method for describing the object to a description.
     */
    interface DescribeTo {
        (description: Description): void;
    }

    /**
     * Defines the method for describing a value to a description.
     */
    interface DescribeValueTo {
        (value: any, description: Description): void;
    }

    /**
     * Defines a method for describing the object implementing this interface to a description.
     *
     * TODO Remove? Not actually declared by JsHamcrest, but useful for type-checking in Description methods
     */
    export interface SelfDescribing {
        describeTo: DescribeTo;
    }

    /**
     * Builder for a textual description.
     */
    export class Description {
        /**
         * Appends text to this description.
         *
         * @param text Text to append to this description
         * @return {Description} Itself for method chaining
         */
        append(text: any): Description;

        /**
         * Appends the description of a self describing object to this description.
         *
         * @param selfDescribingObject Any object that has a describeTo() function that accepts a JsHamcrest.Description object as argument
         * @return {Description} Itself for method chaining
         */
        appendDescriptionOf(selfDescribingObject: SelfDescribing): Description;

        /**
         * Appends the description of several self describing objects to this description.
         *
         * @param start Start string
         * @param separator Separator string
         * @param end End string
         * @param list Array of self describing objects. These objects must have a describeTo() function that accepts a JsHamcrest.Description object as argument
         * @return {Description} Itself for method chaining
         */
        appendList(start: string, separator: string, end: string, list: any[]): Description;

        /**
         * Appends a JavaScript language’s literal to this description.
         *
         * @param literal Literal to append to this description
         * @return {Description} Itself for method chaining
         */
        appendLiteral(literal: any): Description;

        /**
         * Appends an array of values to this description.
         *
         * @param start Start string
         * @param separator Separator string
         * @param end End string
         * @param list Array of values to be described to this description
         * @return {Description} Itself for method chaining
         */
        appendValueList(start: string, separator: string, end: string, list: SelfDescribing[]): Description;

        /**
         * Gets the current content of this description.
         *
         * @return {string} Current content of this description
         */
        get(): string;
    }


    //
    // Matcher
    //

    /**
     * Defines the method for testing the matcher against an actual value.
     */
    interface Matches {
        (value: any): boolean;
    }

    /**
     * Defines the minimal interface for every matcher.
     *
     * FIXME Remove since isMatcher tests for SimpleMatcher :(
     */
    export interface Matcher extends SelfDescribing {
        matches: Matches;
        describeValueTo: DescribeValueTo;
    }

    /**
     * Defines the configurable methods for declaring a new matcher using JsHamcrest.SimpleMatcher.
     */
    interface MatcherConfig {
        matches: Matches;
        describeTo: DescribeTo;
        describeValueTo?: DescribeValueTo;
    }

    /**
     * Defines a matcher that relies on the external functions provided by the caller in order to shape the current matching logic.
     */
    export class SimpleMatcher implements Matcher {
        matches: Matches;
        describeTo: DescribeTo;
        describeValueTo: DescribeValueTo;

        constructor(config: MatcherConfig);
    }

    /**
     * Defines a composite matcher, that is, a matcher that wraps several matchers into one.
     */
    export class CombinableMatcher extends SimpleMatcher {
        /**
         * Wraps this matcher and the given matcher using JsHamcrest.Matchers.allOf().
         *
         * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
         * @return {CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
         */
        and(matcherOrValue: any): CombinableMatcher;

        /**
         * Wraps this matcher and the given matcher using JsHamcrest.Matchers.anyOf().
         *
         * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
         * @return {CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
         */
        or(matcherOrValue: any): CombinableMatcher;
    }


    //
    // Helpers
    //

    /**
     * Checks if the given object is a matcher or not.
     *
     * @param obj Object to check
     * @return {boolean} True if the given object is a matcher; false otherwise
     */
    export function isMatcher(obj: any): boolean;

    /**
     * Delegate function, useful when used to create a matcher that has a value-equalTo semantic.
     *
     * @param factory Creates a new matcher that delegates to the passed/wrapped matcherOrValue
     * @return {function(*): Matcher} Wraps the value with equalTo before passing to factory
     */
    export function EqualTo(factory: (matcher: Matcher) => Matcher): (matcherOrValue: any) => Matcher;


    /**
     * Provides the assertion, filtering, and currying methods.
     */
    module Operators {
        /**
         * Defines the options accepted by assert().
         */
        interface AssertOptions {
            message?: any;
            pass?: (description: string) => void;
            fail?: (description: string) => void;
        }

        /**
         * Fails if the actual value does not match the matcher.
         *
         * @param actual Value to test against the matcher
         * @param matcherOrValue Applied to the value; wrapped with equalTo() if not a matcher
         * @param options Provides message and pass/fail handlers
         * @return {JsHamcrest.Description} Contains the message, actual value, matcher, and result
         */
        export function assert(actual: any, matcherOrValue?: any, options?: AssertOptions): JsHamcrest.Description;

        /**
         * Returns those items of the array for which matcher matches.
         *
         * @param array The values to filter
         * @param matcherOrValue Applied to each value
         * @return {Array.<*>} Contains all values from array matched by the matcher in the original order
         */
        export function filter(array: any[], matcherOrValue: any): any[];

        /**
         * Delegate function, useful when used along with raises() and raisesAnything().
         *
         * @param func Function to delegate to
         * @param args Passed to func
         * @return {function(): *} A function that calls func with args and returns its result
         */
        export function callTo(func: (...args: any[]) => any, ...args: any[]): () => any;
    }


    /**
     * Defines all of the built-in matchers grouped into five categories.
     */
    module Matchers {
        //
        // Collection Matchers
        //

        /**
         * The length of the actual value must be zero.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function empty(): JsHamcrest.SimpleMatcher;

        /**
         * The actual value should be an array and matcherOrValue must match all items.
         *
         * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function everyItem(matcherOrValue: any): JsHamcrest.SimpleMatcher;

        /**
         * The actual value should be an array and it must contain at least one value that matches matcherOrValue.
         *
         * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function hasItem(matcherOrValue: any): JsHamcrest.SimpleMatcher;

        /**
         * The actual value should be an array and matchersOrValues must match at least one item.
         *
         * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function hasItems(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher;

        /**
         * The length of the actual value must match matcherOrValue.
         *
         * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function hasSize(matcherOrValue: any): JsHamcrest.SimpleMatcher;

        /**
         * The given array or arguments must contain the actual value.
         *
         * @param items Array or list of values
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function isIn(...items: any[]): JsHamcrest.SimpleMatcher;

        /**
         * Alias to isIn() function.
         *
         * @param items Array or list of values
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function oneOf(...items: any[]): JsHamcrest.SimpleMatcher;


        //
        // Core Matchers
        //

        /**
         * All matchesOrValues must match the actual value. This matcher behaves pretty much like the JavaScript && (and) operator.
         *
         * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function allOf(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher;

        /**
         * At least one of the matchersOrValues should match the actual value. This matcher behaves pretty much like the JavaScript || (or) operator.
         *
         * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function anyOf(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher;

        /**
         * Useless always-match matcher.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function anything(): JsHamcrest.SimpleMatcher;

        /**
         * Combinable matcher where the actual value must match all the given matchers or values.
         *
         * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
         * @return {JsHamcrest.CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
         */
        export function both(matcherOrValue: any): JsHamcrest.CombinableMatcher;

        /**
         * Combinable matcher where the actual value must match at least one of the given matchers or values.
         *
         * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
         * @return {JsHamcrest.CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
         */
        export function either(matcherOrValue: any): JsHamcrest.CombinableMatcher;

        /**
         * The actual value must be equal to expected.
         *
         * @param expected Expected value
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function equalTo(expected: any): JsHamcrest.SimpleMatcher;

        /**
         * Delegate-only matcher frequently used to improve readability.
         *
         * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function is(matcherOrValue: any): JsHamcrest.SimpleMatcher;

        /**
         * The actual value must be null or undefined.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function nil(): JsHamcrest.SimpleMatcher;

        /**
         * The actual value must not match matcherOrValue.
         *
         * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function not(matcherOrValue: any): JsHamcrest.SimpleMatcher;

        /**
         * The actual value is a function and, when invoked, it should throw an exception with the given name.
         *
         * @param exceptionName Name of the expected exception
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function raises(exceptionName: string): JsHamcrest.SimpleMatcher;

        /**
         * The actual value is a function and, when invoked, it should raise any exception.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function raisesAnything(): JsHamcrest.SimpleMatcher;

        /**
         * The actual value must be the same as expected.
         *
         * @param expected Expected value
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function sameAs(expected: any): JsHamcrest.SimpleMatcher;

        /**
         * Matches any truthy value (not undefined, null, false, 0, NaN, or "").
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function truth(): JsHamcrest.SimpleMatcher;


        //
        // Number Matchers
        //

        /**
         * The actual number must be between the given range (inclusive).
         *
         * @param start Range start
         * @return {JsHamcrest.BetweenBuilder} Builder object with an and(end) method, which returns a JsHamcrest.SimpleMatcher instance and thus should be called to finish the matcher creation
         */
        export function between(start: any): JsHamcrest.BetweenBuilder;

        /**
         * The actual number must be close enough to expected, that is, the actual number is equal to a value within some range of acceptable error.
         *
         * @param expected Expected number
         * @param [delta=0] Expected difference delta
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function closeTo(expected: number, delta?: number): JsHamcrest.SimpleMatcher;

        /**
         * The actual number must be divisible by divisor.
         *
         * @param divisor Divisor
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function divisibleBy(divisor: number): JsHamcrest.SimpleMatcher;

        /**
         * The actual number must be even.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function even(): JsHamcrest.SimpleMatcher;

        /**
         * The actual number must be greater than expected.
         *
         * @param expected Expected number
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function greaterThan(expected: any): JsHamcrest.SimpleMatcher;

        /**
         * The actual number must be greater than or equal to expected.
         *
         * @param expected Expected number
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function greaterThanOrEqualTo(expected: any): JsHamcrest.SimpleMatcher;

        /**
         * The actual number must be less than expected.
         *
         * @param expected Expected number
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function lessThan(expected: any): JsHamcrest.SimpleMatcher;

        /**
         * The actual number must be less than or equal to expected.
         *
         * @param expected Expected number
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function lessThanOrEqualTo(expected: any): JsHamcrest.SimpleMatcher;

        /**
         * The actual value must not be a number.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function notANumber(): JsHamcrest.SimpleMatcher;

        /**
         * The actual number must be odd.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function odd(): JsHamcrest.SimpleMatcher;

        /**
         * The actual number must be zero.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function zero(): JsHamcrest.SimpleMatcher;


        //
        // Object Matchers
        //

        /**
         * The actual value must be a boolean.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function bool(): JsHamcrest.SimpleMatcher;

        /**
         * The actual value must be a function.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function func(): JsHamcrest.SimpleMatcher;

        /**
         * The actual value has a function with the given name.
         *
         * @param functionName Function name
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function hasFunction(functionName: string): JsHamcrest.SimpleMatcher;

        /**
         * The actual value has an attribute with the given name.
         *
         * @param memberName Member name
         * @param [matcherOrValue] Instance of JsHamcrest.SimpleMatcher or a value
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function hasMember(memberName: string, matcherOrValue?: any): JsHamcrest.SimpleMatcher;

        /**
         * The actual value must be an instance of clazz.
         *
         * @param clazz Constructor function
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function instanceOf(clazz: new() => any): JsHamcrest.SimpleMatcher;

        /**
         * The actual value must be a number.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function number(): JsHamcrest.SimpleMatcher;

        /**
         * The actual value must be an object.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function object(): JsHamcrest.SimpleMatcher;

        /**
         * The actual value must be a string.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function string(): JsHamcrest.SimpleMatcher;

        /**
         * The actual value must be of the given type.
         *
         * @param typeName Name of the type
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function typeOf(typeName: string): JsHamcrest.SimpleMatcher;


        //
        // Text Matchers
        //

        /**
         * The actual string must have a substring equals to str.
         *
         * @param str Substring
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function containsString(str: string): JsHamcrest.SimpleMatcher;

        /**
         * The actual string must look like an e-mail address.
         *
         * Warning: This matcher is not fully compliant with RFC2822 due to its complexity.
         *
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function emailAddress(): JsHamcrest.SimpleMatcher;

        /**
         * The actual string must end with str.
         *
         * @param str Substring
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function endsWith(str: string): JsHamcrest.SimpleMatcher;

        /**
         * The actual string must be equal to str, ignoring case.
         *
         * @param str String
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function equalIgnoringCase(str: string): JsHamcrest.SimpleMatcher;

        /**
         * The actual string must match regex.
         *
         * @param regex String
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function matches(regex: RegExp): JsHamcrest.SimpleMatcher;

        /**
         * The actual string must start with str.
         *
         * @param str Substring
         * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
         */
        export function startsWith(str: string): JsHamcrest.SimpleMatcher;
    }


    /**
     * Provides methods for exposing matchers and operators for several testing frameworks.
     */
    module Integration {
        /**
         * Copies all members of the Matchers and Operators modules to target.
         *
         * Does not overwrite properties with the same name.
         *
         * @param target
         */
        export function copyMembers(target: {}): void;

        /**
         * Copies all members of source to target.
         *
         * Does not overwrite properties with the same name.
         *
         * @param source
         * @param target
         */
        export function copyMembers(source: {}, target: {}): void;

        /**
         * Adds the members of the given object to JsHamcrest.Matchers namespace.
         *
         * @param source
         */
        export function installMatchers(source: {}): void;

        /**
         * Adds the members of the given object to JsHamcrest.Operators namespace.
         *
         * @param source
         */
        export function installOperators(source: {}): void;


        //
        // Testing Frameworks
        //

        /**
         * Uses the web browser's alert() function to display the assertion results.
         * Great for quick prototyping.
         */
        export function WebBrowser(): void;

        /**
         * Uses Rhino's print() function to display the assertion results.
         * Great for quick prototyping.
         */
        export function Rhino(): void;

        /**
         * JsTestDriver integration.
         *
         * @param params Omit to copy members to global scope
         */
        export function JsTestDriver(params?: { scope?: {} }): void;

        /**
         * NodeUnit (Node.js Unit Testing) integration.
         *
         * @param params Omit to copy members to "global"
         */
        export function Nodeunit(params?: { scope?: {} }): void;

        /**
         * JsUnitTest integration.
         *
         * @param params Omit to copy members to "JsUnitTest.Unit.Testcase.prototype"
         */
        export function JsUnitTest(params?: { scope?: {} }): void;

        /**
         * YUITest (Yahoo UI) integration.
         *
         * @param params Omit to copy members to global scope
         */
        export function YUITest(params?: { scope?: {} }): void;

        /**
         * QUnit (JQuery) integration.
         *
         * @param params Omit to copy members to global scope
         */
        export function QUnit(params?: { scope?: {} }): void;

        /**
         * jsUnity integration.
         *
         * @param params Omit to copy members to "jsUnity.env.defaultScope"
         */
        export function jsUnity(params?: { scope?: {}; attachAssertions?: boolean }): void;

        /**
         * Screw.Unit integration.
         *
         * @param params Omit to copy members to "Screw.Matchers"
         */
        export function screwunit(params?: { scope?: {} }): void;

        /**
         * Jasmine integration.
         *
         * @param params Omit to copy members to global scope
         */
        export function jasmine(params?: { scope?: {} }): void;
    }


    //
    // Builders
    //

    /**
     * Used by the between() matcher to specify the ending value.
     */
    export class BetweenBuilder {
        and(end: any): SimpleMatcher;
    }
}


//
// Functions that are copied by copyMembers() to the global scope are copy-n-pasted here.
//
// TODO There must be a better way to do this, and not every testing framework places them in the global scope.
//


//
// Assert
//

/**
 * Fails if the actual value does not match the matcher.
 *
 * @param actual Value to test against the matcher
 * @param matcher Applied to the value
 * @param message Prepends the built description
 * @return {JsHamcrest.Description} Contains the message, actual value, matcher, and result
 */
declare function assertThat(actual: any, matcher?: JsHamcrest.Matcher, message?: any): JsHamcrest.Description;


//
// Collection Matchers
//

/**
 * The length of the actual value must be zero.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function empty(): JsHamcrest.SimpleMatcher;

/**
 * The actual value should be an array and matcherOrValue must match all items.
 *
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function everyItem(matcherOrValue: any): JsHamcrest.SimpleMatcher;

/**
 * The actual value should be an array and it must contain at least one value that matches matcherOrValue.
 *
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function hasItem(matcherOrValue: any): JsHamcrest.SimpleMatcher;

/**
 * The actual value should be an array and matchersOrValues must match at least one item.
 *
 * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function hasItems(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher;

/**
 * The length of the actual value must match matcherOrValue.
 *
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function hasSize(matcherOrValue: any): JsHamcrest.SimpleMatcher;

/**
 * The given array or arguments must contain the actual value.
 *
 * @param items Array or list of values
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function isIn(...items: any[]): JsHamcrest.SimpleMatcher;

/**
 * Alias to isIn() function.
 *
 * @param items Array or list of values
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function oneOf(...items: any[]): JsHamcrest.SimpleMatcher;


//
// Core Matchers
//

/**
 * All matchesOrValues must match the actual value. This matcher behaves pretty much like the JavaScript && (and) operator.
 *
 * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function allOf(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher;

/**
 * At least one of the matchersOrValues should match the actual value. This matcher behaves pretty much like the JavaScript || (or) operator.
 *
 * @param matchersOrValues Instances of JsHamcrest.SimpleMatcher and/or values
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function anyOf(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher;

/**
 * Useless always-match matcher.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function anything(): JsHamcrest.SimpleMatcher;

/**
 * Combinable matcher where the actual value must match all the given matchers or values.
 *
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest.CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
 */
declare function both(matcherOrValue: any): JsHamcrest.CombinableMatcher;

/**
 * Combinable matcher where the actual value must match at least one of the given matchers or values.
 *
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest.CombinableMatcher} Instance of JsHamcrest.CombinableMatcher
 */
declare function either(matcherOrValue: any): JsHamcrest.CombinableMatcher;

/**
 * The actual value must be equal to expected.
 *
 * @param expected Expected value
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function equalTo(expected: any): JsHamcrest.SimpleMatcher;

/**
 * Delegate-only matcher frequently used to improve readability.
 *
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function is(matcherOrValue: any): JsHamcrest.SimpleMatcher;

/**
 * The actual value must be null or undefined.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function nil(): JsHamcrest.SimpleMatcher;

/**
 * The actual value must not match matcherOrValue.
 *
 * @param matcherOrValue Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function not(matcherOrValue: any): JsHamcrest.SimpleMatcher;

/**
 * The actual value is a function and, when invoked, it should throw an exception with the given name.
 *
 * @param exceptionName Name of the expected exception
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function raises(exceptionName: string): JsHamcrest.SimpleMatcher;

/**
 * The actual value is a function and, when invoked, it should raise any exception.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function raisesAnything(): JsHamcrest.SimpleMatcher;

/**
 * The actual value must be the same as expected.
 *
 * @param expected Expected value
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function sameAs(expected: any): JsHamcrest.SimpleMatcher;

/**
 * Matches any truthy value (not undefined, null, false, 0, NaN, or "").
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function truth(): JsHamcrest.SimpleMatcher;


//
// Number Matchers
//

/**
 * The actual number must be between the given range (inclusive).
 *
 * @param start Range start
 * @return {JsHamcrest.BetweenBuilder} Builder object with an and(end) method, which returns a JsHamcrest.SimpleMatcher instance and thus should be called to finish the matcher creation
 */
declare function between(start: any): JsHamcrest.BetweenBuilder;

/**
 * The actual number must be close enough to expected, that is, the actual number is equal to a value within some range of acceptable error.
 *
 * @param expected Expected number
 * @param [delta=0] Expected difference delta
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function closeTo(expected: number, delta?: number): JsHamcrest.SimpleMatcher;

/**
 * The actual number must be divisible by divisor.
 *
 * @param divisor Divisor
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function divisibleBy(divisor: number): JsHamcrest.SimpleMatcher;

/**
 * The actual number must be even.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function even(): JsHamcrest.SimpleMatcher;

/**
 * The actual number must be greater than expected.
 *
 * @param expected Expected number
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function greaterThan(expected: any): JsHamcrest.SimpleMatcher;

/**
 * The actual number must be greater than or equal to expected.
 *
 * @param expected Expected number
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function greaterThanOrEqualTo(expected: any): JsHamcrest.SimpleMatcher;

/**
 * The actual number must be less than expected.
 *
 * @param expected Expected number
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function lessThan(expected: any): JsHamcrest.SimpleMatcher;

/**
 * The actual number must be less than or equal to expected.
 *
 * @param expected Expected number
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function lessThanOrEqualTo(expected: any): JsHamcrest.SimpleMatcher;

/**
 * The actual value must not be a number.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function notANumber(): JsHamcrest.SimpleMatcher;

/**
 * The actual number must be odd.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function odd(): JsHamcrest.SimpleMatcher;

/**
 * The actual number must be zero.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function zero(): JsHamcrest.SimpleMatcher;


//
// Object Matchers
//

/**
 * The actual value must be a boolean.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function bool(): JsHamcrest.SimpleMatcher;

/**
 * The actual value must be a function.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function func(): JsHamcrest.SimpleMatcher;

/**
 * The actual value has a function with the given name.
 *
 * @param functionName Function name
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function hasFunction(functionName: string): JsHamcrest.SimpleMatcher;

/**
 * The actual value has an attribute with the given name.
 *
 * @param memberName Member name
 * @param [matcherOrValue] Instance of JsHamcrest.SimpleMatcher or a value
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function hasMember(memberName: string, matcherOrValue?: any): JsHamcrest.SimpleMatcher;

/**
 * The actual value must be an instance of clazz.
 *
 * @param clazz Constructor function
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function instanceOf(clazz: new() => any): JsHamcrest.SimpleMatcher;

/**
 * The actual value must be a number.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function number(): JsHamcrest.SimpleMatcher;

/**
 * The actual value must be an object.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function object(): JsHamcrest.SimpleMatcher;

/**
 * The actual value must be a string.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function string(): JsHamcrest.SimpleMatcher;

/**
 * The actual value must be of the given type.
 *
 * @param typeName Name of the type
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function typeOf(typeName: string): JsHamcrest.SimpleMatcher;


//
// Text Matchers
//

/**
 * The actual string must have a substring equals to str.
 *
 * @param str Substring
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function containsString(str: string): JsHamcrest.SimpleMatcher;

/**
 * The actual string must look like an e-mail address.
 *
 * Warning: This matcher is not fully compliant with RFC2822 due to its complexity.
 *
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function emailAddress(): JsHamcrest.SimpleMatcher;

/**
 * The actual string must end with str.
 *
 * @param str Substring
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function endsWith(str: string): JsHamcrest.SimpleMatcher;

/**
 * The actual string must be equal to str, ignoring case.
 *
 * @param str String
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function equalIgnoringCase(str: string): JsHamcrest.SimpleMatcher;

/**
 * The actual string must match regex.
 *
 * @param regex String
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function matches(regex: RegExp): JsHamcrest.SimpleMatcher;

/**
 * The actual string must start with str.
 *
 * @param str Substring
 * @return {JsHamcrest.SimpleMatcher} Instance of JsHamcrest.SimpleMatcher
 */
declare function startsWith(str: string): JsHamcrest.SimpleMatcher;
