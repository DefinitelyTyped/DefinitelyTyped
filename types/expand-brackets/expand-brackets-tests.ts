import brackets = require("expand-brackets");

// Basic usage
const result: string = brackets("[:alpha:]");

// With options
brackets("[:digit:]", { toRegex: true });

// Match
const matched: string[] = brackets.match(["a", "1", "!"], "[:alpha:]");

// isMatch
const isMatch: boolean = brackets.isMatch("a", "[:alpha:]");

// Matcher
const matcher = brackets.matcher("[:digit:]");
const matches: boolean = matcher("5");

// makeRe
const re: RegExp = brackets.makeRe("[:alpha:]");

// create
const compiled: object = brackets.create("[:alpha:]");

// @ts-expect-error - pattern must be a string
brackets(42);
