import guessFormat = require("moment-guess");

// $ExpectType string | string[]
const result = guessFormat("date");

// $ExpectType string | string[]
const result2 = guessFormat("date", "format");

// expect error when giving date object
// @ts-expect-error
guessFormat(new Date());

// Expect error when giving unix timestamp
// @ts-expect-error
guessFormat(1673972566);
