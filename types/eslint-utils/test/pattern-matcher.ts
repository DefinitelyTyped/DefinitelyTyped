import * as utils from "eslint-utils";

new utils.PatternMatcher(/.*/, {});
new utils.PatternMatcher(/.*/, { escaped: true });

const patternMatcher = new utils.PatternMatcher(/.*/);

// $ExpectType IterableIterator<RegExpExecArray>
patternMatcher.execAll("");

// $ExpectType boolean
patternMatcher.test("");

// $ExpectType string
patternMatcher[Symbol.replace]("", "");

// $ExpectType string
patternMatcher[Symbol.replace]("", (...strs: string[]) => strs.join());
