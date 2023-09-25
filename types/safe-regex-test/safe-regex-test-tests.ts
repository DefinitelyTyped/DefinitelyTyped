import regexTester = require("safe-regex-test");

regexTester(/a/); // $ExpectType (s: string) => boolean
regexTester(/a/)("a"); // $ExpectType boolean
