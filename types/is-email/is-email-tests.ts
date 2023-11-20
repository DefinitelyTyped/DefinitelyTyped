import isEmail = require("is-email");

isEmail("abc"); // $ExpectType boolean

// @ts-expect-error
isEmail(123);

// @ts-expect-error
isEmail();
