import nanomatch = require("nanomatch");

// Basic usage
const matches: string[] = nanomatch(["foo", "bar", "baz"], "b*");

// With options
nanomatch(["a.txt", ".hidden"], "*.txt", { dot: true });

// Match
const matched: string[] = nanomatch.match(["a", "b", "c"], "a");

// isMatch
const isMatch: boolean = nanomatch.isMatch("foo.txt", "*.txt");

// contains
const contains: boolean = nanomatch.contains("foo/bar", "bar");

// any / all
const any: boolean = nanomatch.any("foo", ["bar", "foo"]);
const all: boolean = nanomatch.all("foo", ["f*", "*o"]);

// some / every
const some: boolean = nanomatch.some(["foo", "bar"], "foo");
const every: boolean = nanomatch.every(["foo", "fob"], "f*");

// not
const notMatched: string[] = nanomatch.not(["foo", "bar"], "foo");

// matcher
const fn = nanomatch.matcher("*.txt");
const result: boolean = fn("file.txt");

// makeRe
const re: RegExp = nanomatch.makeRe("*.js");

// capture
const captured = nanomatch.capture("*.txt", "file.txt");

// clearCache
nanomatch.clearCache();

// @ts-expect-error - list must be string array
nanomatch("not an array", "*.txt");
