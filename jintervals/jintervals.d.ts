// Type definitions for JavaScript library for interval formatting
// Project: http://code.google.com/p/jintervals/
// Definitions by: Bert Verhelst <http://bert.co.nr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * jintervals 0.7 -- JavaScript library for interval formatting
 *
 * jintervals is licenced under LGPL <http://www.gnu.org/licenses/>.
 *
 * Copyright (c) 2009 Rene Saarsoo <http://code.google.com/p/jintervals/>
 *
 * Date: 2009-10-21
 */


declare function jintervals(seconds: number, format: string): string;

// Changing and getting current locale
declare function locale(loc): string;

declare class Parser {
    parse(format: string): string[];

    // parses single {Code} in format string
    // Returns object representing the code or false when incorrect format string
    parseCode(code: string): any;


    //return {
    //    // single-letter uppercase name of the type
    //    type: matches[1].toUpperCase(),
    //    // when code begins with lowercase letter, then set showing limited amount to true
    //    limited: (matches[1].toLowerCase() == matches[1]),
    //    paddingLength: (matches[2] || "").length + 1,
    //    format: (matches[3] || "") == "" ? false : (matches[3] == "." ? "letter" : "full"),
    //    optional: !!matches[4],
    //    optionalSuffix: matches[5] || ""
    //};
}

/**
 * Evaluates parse tree in the context of given time object
 */
declare class Interpreter {
    evaluate(time, parseTree: any): string;

    /**
     * Finds the smallest unit from parse tree.
     * 
     * For example when parse tree contains "d", "m", "h" then returns "m"
     */
    smallestUnit(parseTree: any): string;

    // utility function to pad number with leading zeros
    zeropad(nr: number, decimals: number): string;

    // utility function to repeat string
    repeat(repeatText: string, times: number): string;
}

/**
 * Time class that deals with the actual computation of time units.
 */
declare class Time {
    constructor(s: number);



    /**
     * Returns the value of time in given unit
     * 
     * @param {String} unit  Either "S", "M", "H" or "D"
     * @param {Boolean} limited  When true 67 seconds will become just 7 seconds (defaults to false)
     * @param {String} smallest  The name of smallest unit.
     */
    get(unit: any, limited: any, smallest: any);

    // functions for each unit

    S(limited: any, smallest: any): any;

    M(limited: any, smallest: any): any;

    H(limited: any, smallest: any): any;

    D(limited: any, smallest: any): any;

    /**
     * Returns the name of greatest time unit.
     * 
     * For example when we have 2 hours, 30 minutes, and 7 seconds,
     * then the greatest unit is hour and "H" is returned.
     */
    getGreatestUnit(): string;
}

declare class Localization {
    translate(format: string, lcType: any, value: any): any;

    locale(loc: string): string;

    currentLocale: string;

    locales: any;
}
