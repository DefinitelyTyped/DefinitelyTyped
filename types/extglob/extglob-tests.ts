import extglob = require("extglob");

// Basic usage
const result: string = extglob("+(a|b)");

// Match
const matched: string[] = extglob.match(["a", "b", "c"], "+(a|b)");

// isMatch
const isMatch: boolean = extglob.isMatch("a", "+(a|b)");

// contains
const contains: boolean = extglob.contains("ab", "+(a)");

// matcher
const matcher = extglob.matcher("!(c)");
const matches: boolean = matcher("a");

// makeRe
const re: RegExp = extglob.makeRe("*(a|b)");

// create
const compiled: object = extglob.create("?(a|b)");

// capture
const captured = extglob.capture("@(a|b)", "a");

// clearCache
extglob.clearCache();

// @ts-expect-error - pattern must be a string
extglob(42);
