import safe = require("safe-regex");

// This is a safe regex
safe("regex"); // $ExpectType boolean
// This is a safe regex
safe(/regex/); // $ExpectType boolean
// This is an unsafe regex
safe("^([a-zA-Z0-9]+\\s?)+$"); // $ExpectType boolean
// This is an unsafe regex
safe(/^([a-zA-Z0-9]+\s?)+$/g); // $ExpectType boolean
