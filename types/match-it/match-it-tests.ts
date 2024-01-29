import matchIt = require("match-it");

matchIt("Hello World!", /(World|Mars)/); // $ExpectType string[]
