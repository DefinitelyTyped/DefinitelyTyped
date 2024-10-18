import isCore = require("is-core-module");

isCore("fs"); // $ExpectType boolean
isCore("fs", "12.14.0"); // $ExpectType boolean
