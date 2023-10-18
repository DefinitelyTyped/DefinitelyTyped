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
