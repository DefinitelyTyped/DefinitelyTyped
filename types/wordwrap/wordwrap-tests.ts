import wordwrap = require("wordwrap");

// $ExpectType Wrap
wordwrap(80);

// $ExpectType string
wordwrap(80)("");

// $ExpectType string
wordwrap(20, 80)("");

// $ExpectType string
wordwrap({ start: 20, stop: 80 })("");

// $ExpectType string
wordwrap(80, { mode: "hard" })("");

// $ExpectType string
wordwrap.hard(80)("");
