import padLeft = require("pad-left");

padLeft("a"); // $ExpectType string
padLeft("a", 2); // $ExpectType string
padLeft("4", 4, "0"); // $ExpectType string
