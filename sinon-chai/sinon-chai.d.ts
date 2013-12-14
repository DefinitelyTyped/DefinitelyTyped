// Type definitions for sinon-chai 2.4.0
// Project: https://github.com/domenic/sinon-chai
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

// ReSharper disable UsingOfReservedWord
declare var __sinon_chai: SinonChaiStatic;

interface SinonChaiStatic {
    expect(target: any): SinonExpectShould;

    /**
     * Provides a way to extend the internals of Chai
     */
    use(fn: (chai: any, utils: any) => void);
}

interface SinonExpectShouldStatic {
    (target: any): SinonExpectShould;
}

interface SinonExpectShould extends SinonLanguageChains, SinonNumericComparison, SinonTypeComparison, Assertions {
    not: SinonExpectShould;
    deep: SinonDeep;
    a: SinonTypeComparison;
    an: SinonTypeComparison;
    include: SinonInclude;
    contain: SinonInclude;
    ok: SinonExpectShould;
    true: SinonExpectShould;
    false: SinonExpectShould;
    null: SinonExpectShould;
    undefined: SinonExpectShould;
    exist: SinonExpectShould;
    empty: SinonExpectShould;
    arguments: SinonExpectShould;
    Arguments: SinonExpectShould;
    equal: SinonEqual;
    equals: SinonEqual;
    eq: SinonEqual;
    eql: SinonEqual;
    eqls: SinonEqual;
    property: SinonProperty;
    ownProperty: SinonOwnProperty;
    haveOwnProperty: SinonOwnProperty;
    length: SinonLength;
    lengthOf: SinonLength;
    match(expression: RegExp, message?: string): SinonExpectShould;
    string(string: string, message?: string): SinonExpectShould;
    keys: SinonKeys;
    key(string: string): SinonExpectShould;
    throw: SinonThrow;
    throws: SinonThrow;
    Throw: SinonThrow;
    respondTo(method: string, message?: string): SinonExpectShould;
    itself: SinonExpectShould;
    satisfy(matcher: Function, message?: string): SinonExpectShould;
    closeTo(expected: number, delta: number, message?: string): SinonExpectShould;
    members: SinonMembers;
    called: SinonExpectShould;
    calledOnce: SinonExpectShould;
    calledTwice: SinonExpectShould;
    calledThrice: SinonExpectShould;
    calledBefore(spy: Function): SinonExpectShould;
    calledAfter(spy: Function): SinonExpectShould;
    calledWithNew: SinonExpectShould;
    calledOn(context: any): SinonExpectShould;
    calledWith(...args: any[]): SinonExpectShould;
    calledWithExactly(...args: any[]): SinonExpectShould;
    calledWithMatch(...args: any[]): SinonExpectShould;
    returned(returnVal: any): SinonExpectShould;
    thrown(errorObjOrErrorTypeStringOrNothing: any): SinonExpectShould;
}

interface SinonLanguageChains {
    to: SinonExpectShould;
    be: SinonExpectShould;
    been: SinonExpectShould;
    is: SinonExpectShould;
    that: SinonExpectShould;
    and: SinonExpectShould;
    have: SinonExpectShould;
    with: SinonExpectShould;
    at: SinonExpectShould;
    of: SinonExpectShould;
    same: SinonExpectShould;
    always: SinonExpectShould;
}

interface SinonNumericComparison {
    above: SinonNumberComparer;
    gt: SinonNumberComparer;
    greaterThan: SinonNumberComparer;
    least: SinonNumberComparer;
    gte: SinonNumberComparer;
    below: SinonNumberComparer;
    lt: SinonNumberComparer;
    lessThan: SinonNumberComparer;
    most: SinonNumberComparer;
    lte: SinonNumberComparer;
    within(start: number, finish: number, message?: string): SinonExpectShould;
}

interface SinonNumberComparer {
    (value: number, message?: string): SinonExpectShould;
}

interface SinonTypeComparison {
    (type: string, message?: string): SinonExpectShould;
    instanceof: SinonInstanceOf;
    instanceOf: SinonInstanceOf;
}

interface SinonInstanceOf {
    (constructor: Object, message?: string): SinonExpectShould;
}

interface SinonDeep {
    equal: SinonEqual;
    property: SinonProperty;
}

interface SinonEqual {
    (value: any, message?: string): SinonExpectShould;
}

interface SinonProperty {
    (name: string, value?: any, message?: string): SinonExpectShould;
}

interface SinonOwnProperty {
    (name: string, message?: string): SinonExpectShould;
}

interface SinonLength extends SinonLanguageChains, SinonNumericComparison {
    (length: number, message?: string): SinonExpectShould;
}

interface SinonInclude {
    (value: Object, message?: string): SinonExpectShould;
    (value: string, message?: string): SinonExpectShould;
    (value: number, message?: string): SinonExpectShould;
    keys: SinonKeys;
    members: SinonMembers;
}

interface SinonKeys {
    (...keys: string[]): SinonExpectShould;
    (keys: any[]): SinonExpectShould;
}

interface SinonMembers {
    (set: any[], message?: string): SinonExpectShould;
}

interface SinonThrow {
    (): SinonExpectShould;
    (expected: string, message?: string): SinonExpectShould;
    (expected: RegExp, message?: string): SinonExpectShould;
    (constructor: Error, expected?: string, message?: string): SinonExpectShould;
    (constructor: Error, expected?: RegExp, message?: string): SinonExpectShould;
    (constructor: Function, expected?: string, message?: string): SinonExpectShould;
    (constructor: Function, expected?: RegExp, message?: string): SinonExpectShould;
}

declare module "sinon-chai" {
    export = __sinon_chai;
}
