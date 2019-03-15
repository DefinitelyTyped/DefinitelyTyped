// Type definitions for JSON5
// Project: http://json5.org/
// Definitions by: Jason Swearingen <https://jasonswearingen.github.io>
//                 Kacper Wiszczuk <https://github.com/Esemesek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


//commonjs loader

/** 
 * The following is the exact list of additions to JSON's syntax introduced by JSON5. All of these are optional, and all of these come from ES5.

Objects

Object keys can be unquoted if they're valid identifiers. Yes, even reserved keywords (like default) are valid unquoted keys in ES5 [§11.1.5, §7.6]. (More info)

(TODO: Unicode characters and escape sequences aren’t yet supported in this implementation.)

Objects can have trailing commas.

Arrays

Arrays can have trailing commas.
Strings

Strings can be single-quoted.

Strings can be split across multiple lines; just prefix each newline with a backslash. [ES5 §7.8.4]

Numbers

Numbers can be hexadecimal (base 16).

Numbers can begin or end with a (leading or trailing) decimal point.

Numbers can include Infinity, -Infinity, NaN, and -NaN.

Numbers can begin with an explicit plus sign.

Comments

Both inline (single-line) and block (multi-line) comments are allowed.
  */

type JSONReplacer = (key: string, value: any) => any | (number | string)[] | null;

interface JSON5 {
    // Old JSON methods
    parse(text: string, reviver?: (key: any, value: any) => any): any;
    stringify(value: any, replacer?: (key: string, value: any) => any, space?: string | number): string;
    stringify(value: any, replacer?: (number | string)[] | null, space?: string | number): string;

    // New JSON5 stringify function
    stringify(value: any, options?: { space?: number | string, quote?: string, replacer?: JSONReplacer }): string;
}

declare var json5: JSON5;
export = json5;
