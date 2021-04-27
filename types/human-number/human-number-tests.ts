import humanNumber = require("human-number");

humanNumber(100); // $ExpectType string
humanNumber(0.1, n => (n * 100).toFixed(2)); // $ExpectType string
