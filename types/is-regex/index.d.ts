// Type definitions for is-regex 1.0
// Project: https://github.com/ljharb/is-regex
// Definitions by: Jordan Harband <https://github.com/ljharb>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns whether the value is a valid `RegExp` object with the `[[RegExpMatcher]]` internal slot.
 */
declare function isRegex(value: any): value is RegExp;
export = isRegex;
