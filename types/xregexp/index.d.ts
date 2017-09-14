// Type definitions for XRegExp 3.0.0
// Project: http://xregexp.com
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>,
//                 Johannes Fahrenkrug <https://github.com/jfahrenkrug>
//                 Mateusz Jagiełło <https://github.com/sigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare function OuterXRegExp(pattern: string, flags?: string): RegExp;
declare function OuterXRegExp(pattern: RegExp): RegExp;

declare namespace OuterXRegExp {
    // scopes: 'default', 'class', or 'all'
    /*
     Native flags:
     g - global
     i - ignore case
     m - multiline anchors
     y - sticky (Firefox 3+)
     Additional XRegExp flags:
     n - explicit capture
     s - dot matches all (aka singleline)
     x - free-spacing and line comments (aka extended)
     */
    interface TokenOpts {
        scope?: string;
        trigger?: () => boolean;
        customFlags?: string;
    }

    function XRegExp(pattern: string, flags?: string): RegExp;
    function XRegExp(pattern: RegExp): RegExp;

    /* Since xregexp 3.0.0 can be used either via

            import X = require('xregexp');
            X();

        or via

            import XRegExp = X.XRegExp;
            XRegExp()

        I had to duplicate the function declarations. I could simply not
        find another way to accomplish this with TypeScript.
    */

    // begin API definitions
    function addToken(regex: RegExp, handler: (matchArr: RegExpExecArray, scope: string) => string, options?: TokenOpts): void;

    function build(pattern: string, subs: string[], flags?: string): RegExp;
    function cache(pattern: string, flags?: string): RegExp;
    function escape(str: string): string;
    function exec(str: string, regex: RegExp, pos?: number, sticky?: boolean): RegExpExecArray;
    function forEach(str: string, regex: RegExp, callback: (matchArr: RegExpExecArray, index: number, input: string, regexp: RegExp) => void): any;
    function globalize(regex: RegExp): RegExp;

    function install(options: string): void;
    function install(options: Object): void;

    function isInstalled(feature: string): boolean;
    function isRegExp(value: any): boolean;
    function match(str: string, regex: RegExp, scope: string): any;
    function match(str: string, regex: RegExp, scope: "one"): string;
    function match(str: string, regex: RegExp, scope: "all"): string[];
    function match(str: string, regex: RegExp): string[];
    function matchChain(str: string, chain: RegExp[]): string[];
    function matchChain(str: string, chain: { regex: RegExp; backref: string }[]): string[];
    function matchChain(str: string, chain: { regex: RegExp; backref: number }[]): string[];
    function matchRecursive(str: string, left: string, right: string, flags?: string, options?: Object): string[];

    function replace(str: string, search: string, replacement: string, scope?: string): string;
    function replace(str: string, search: string, replacement: Function, scope?: string): string;
    function replace(str: string, search: RegExp, replacement: string, scope?: string): string;
    function replace(str: string, search: RegExp, replacement: Function, scope?: string): string;
    function replaceEach(str: string, replacements: Array<RegExp | string>[]): string;

    function split(str: string, separator: string, limit?: number): string[];
    function split(str: string, separator: RegExp, limit?: number): string[];

    function test(str: string, regex: RegExp, pos?: number, sticky?: boolean): boolean;

    function uninstall(options: Object): void;
    function uninstall(options: string): void;

    function union(patterns: (string | RegExp)[], flags?: string): RegExp;
    var version: string;
    // end API definitions

    namespace XRegExp {
        // begin API definitions
        function addToken(regex: RegExp, handler: (matchArr: RegExpExecArray, scope: string) => string, options?: TokenOpts): void;

        function build(pattern: string, subs: string[], flags?: string): RegExp;
        function cache(pattern: string, flags?: string): RegExp;
        function escape(str: string): string;
        function exec(str: string, regex: RegExp, pos?: number, sticky?: boolean): RegExpExecArray;
        function forEach(str: string, regex: RegExp, callback: (matchArr: RegExpExecArray, index: number, input: string, regexp: RegExp) => void): any;
        function globalize(regex: RegExp): RegExp;

        function install(options: string): void;
        function install(options: Object): void;

        function isInstalled(feature: string): boolean;
        function isRegExp(value: any): boolean;
        function match(str: string, regex: RegExp, scope: string): any;
        function match(str: string, regex: RegExp, scope: "one"): string;
        function match(str: string, regex: RegExp, scope: "all"): string[];
        function match(str: string, regex: RegExp): string[];
        function matchChain(str: string, chain: RegExp[]): string[];
        function matchChain(str: string, chain: { regex: RegExp; backref: string }[]): string[];
        function matchChain(str: string, chain: { regex: RegExp; backref: number }[]): string[];
        function matchRecursive(str: string, left: string, right: string, flags?: string, options?: Object): string[];

        function replace(str: string, search: string, replacement: string, scope?: string): string;
        function replace(str: string, search: string, replacement: Function, scope?: string): string;
        function replace(str: string, search: RegExp, replacement: string, scope?: string): string;
        function replace(str: string, search: RegExp, replacement: Function, scope?: string): string;
        function replaceEach(str: string, replacements: Array<RegExp | string>[]): string;

        function split(str: string, separator: string, limit?: number): string[];
        function split(str: string, separator: RegExp, limit?: number): string[];

        function test(str: string, regex: RegExp, pos?: number, sticky?: boolean): boolean;

        function uninstall(options: Object): void;
        function uninstall(options: string): void;

        function union(patterns: (string | RegExp)[], flags?: string): RegExp;
        var version: string;
        // end API definitions
    }
}

export = OuterXRegExp;
