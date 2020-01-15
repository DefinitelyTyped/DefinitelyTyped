import snakeCase = require("just-snake-case");

// Pass single `object`.
snakeCase('myString'); // $ExpectType string

// Incorrect argument
snakeCase(); // $ExpectError
snakeCase(0); // $ExpectError
snakeCase([]); // $ExpectError
snakeCase({}); // $ExpectError
snakeCase(false); // $ExpectError
snakeCase(null); // $ExpectError
snakeCase(undefined); // $ExpectError
