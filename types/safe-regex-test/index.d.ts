// Type definitions for safe-regex-test 1.0
// Project: https://github.com/ljharb/safe-regex-test#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = makeRegexTester;

/**
 * Give a regex, get a robust predicate function that tests it against a string.
 * This will work even if `RegExp.prototype` is altered later.
 *
 * @example
 * import regexTester = require('safe-regex-test');
 * import * as assert from 'node:assert';
 *
 * const tester = regexTester(/a/);
 * assert.ok(tester('a') === true);
 * assert.ok(tester('b') === false);
 */
declare function makeRegexTester(regex: RegExp): (s: string) => boolean;
