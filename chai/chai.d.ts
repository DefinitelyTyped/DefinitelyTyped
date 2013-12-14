// Type definitions for chai 1.7.2
// Project: http://chaijs.com/
// Definitions by: Jed Hunsaker <https://github.com/jedhunsaker/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped


// ReSharper disable UsingOfReservedWord
declare var __chai: ChaiStatic;

interface ChaiStatic {
    expect(target: any): ExpectShould;

    /**
     * Provides a way to extend the internals of Chai
     */
    use(fn: (chai: any, utils: any) => void);
}

interface ExpectShouldStatic {
    (target: any): ExpectShould;
}

interface Assertions {
    attr(name, value?);
    css(name, value?);
    data(name, value?);
    class(className);
    id(id);
    html(html);
    text(text);
    value(value);
    visible;
    hidden;
    selected;
    checked;
    disabled;
    empty;
    exist;
}

interface ExpectShould extends LanguageChains, NumericComparison, TypeComparison, Assertions {
    not: ExpectShould;
    deep: Deep;
    a: TypeComparison;
    an: TypeComparison;
    include: Include;
    contain: Include;
    ok: ExpectShould;
    true: ExpectShould;
    false: ExpectShould;
    null: ExpectShould;
    undefined: ExpectShould;
    exist: ExpectShould;
    empty: ExpectShould;
    arguments: ExpectShould;
    Arguments: ExpectShould;
    equal: Equal;
    equals: Equal;
    eq: Equal;
    eql: Equal;
    eqls: Equal;
    property: Property;
    ownProperty: OwnProperty;
    haveOwnProperty: OwnProperty;
    length: Length;
    lengthOf: Length;
    match(expression: RegExp, message?: string): ExpectShould;
    string(string: string, message?: string): ExpectShould;
    keys: Keys;
    key(string: string): ExpectShould;
    throw: Throw;
    throws: Throw;
    Throw: Throw;
    respondTo(method: string, message?: string): ExpectShould;
    itself: ExpectShould;
    satisfy(matcher: Function, message?: string): ExpectShould;
    closeTo(expected: number, delta: number, message?: string): ExpectShould;
    members: Members;
}

interface LanguageChains {
    to: ExpectShould;
    be: ExpectShould;
    been: ExpectShould;
    is: ExpectShould;
    that: ExpectShould;
    and: ExpectShould;
    have: ExpectShould;
    with: ExpectShould;
    at: ExpectShould;
    of: ExpectShould;
    same: ExpectShould;
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
    within(start: number, finish: number, message?: string): ExpectShould;
}

interface NumberComparer {
    (value: number, message?: string): ExpectShould;
}

interface TypeComparison {
    (type: string, message?: string): ExpectShould;
    instanceof: InstanceOf;
    instanceOf: InstanceOf;
}

interface InstanceOf {
    (constructor: Object, message?: string): ExpectShould;
}

interface Deep {
    equal: Equal;
    property: Property;
}

interface Equal {
    (value: any, message?: string): ExpectShould;
}

interface Property {
    (name: string, value?: any, message?: string): ExpectShould;
}

interface OwnProperty {
    (name: string, message?: string): ExpectShould;
}

interface Length extends LanguageChains, NumericComparison {
    (length: number, message?: string): ExpectShould;
}

interface Include {
    (value: Object, message?: string): ExpectShould;
    (value: string, message?: string): ExpectShould;
    (value: number, message?: string): ExpectShould;
    keys: Keys;
    members: Members;
}

interface Keys {
    (...keys: string[]): ExpectShould;
    (keys: any[]): ExpectShould;
}

interface Members {
    (set: any[], message?: string): ExpectShould;
}

interface Throw {
    (): ExpectShould;
    (expected: string, message?: string): ExpectShould;
    (expected: RegExp, message?: string): ExpectShould;
    (constructor: Error, expected?: string, message?: string): ExpectShould;
    (constructor: Error, expected?: RegExp, message?: string): ExpectShould;
    (constructor: Function, expected?: string, message?: string): ExpectShould;
    (constructor: Function, expected?: RegExp, message?: string): ExpectShould;
}

declare module "chai" {
    export = __chai;
}
