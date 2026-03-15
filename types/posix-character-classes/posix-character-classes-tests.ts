import posix = require("posix-character-classes");

// Access character classes
const digit: string = posix.digit;
const alpha: string = posix.alpha;
const alnum: string = posix.alnum;
const space: string = posix.space;
const upper: string = posix.upper;
const lower: string = posix.lower;
const punct: string = posix.punct;

// Use in regex
const re = new RegExp(`[${posix.digit}]`);
