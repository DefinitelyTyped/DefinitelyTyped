// Type definitions for chai-jquery 1.1.1
// Project: https://github.com/chaijs/chai-jquery
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />
/// <reference path="../jquery/jquery.d.ts" />

interface ChaiJQuery extends JQuery {
    should: ChaiJQueryExpectShould;
}

interface ChaiJQueryStatic extends JQueryStatic {
    (selector: string, context?: any): ChaiJQuery;
    (element: Element): ChaiJQuery;
    (object: {}): ChaiJQuery;
    (elementArray: Element[]): ChaiJQuery;
    (object: ChaiJQuery): ChaiJQuery;
    (func: Function): ChaiJQuery;
    (array: any[]): ChaiJQuery;
    (): ChaiJQuery;
}

interface ChaiJQueryExpectShould extends ExpectShould {
    not: ChaiJQueryExpectShould;
    ok: ChaiJQueryExpectShould;
    true: ChaiJQueryExpectShould;
    false: ChaiJQueryExpectShould;
    null: ChaiJQueryExpectShould;
    undefined: ChaiJQueryExpectShould;
    exist: ChaiJQueryExpectShould;
    empty: ChaiJQueryExpectShould;
    arguments: ChaiJQueryExpectShould;
    Arguments: ChaiJQueryExpectShould;
    match(expression: RegExp, message?: string): ChaiJQueryExpectShould;
    match(selector: string, message?: string): ChaiJQueryExpectShould;
    string(string: string, message?: string): ChaiJQueryExpectShould;
    key(string: string): ChaiJQueryExpectShould;
    respondTo(method: string, message?: string): ChaiJQueryExpectShould;
    itself: ChaiJQueryExpectShould;
    satisfy(matcher: Function, message?: string): ChaiJQueryExpectShould;
    closeTo(expected: number, delta: number, message?: string): ChaiJQueryExpectShould;
}
