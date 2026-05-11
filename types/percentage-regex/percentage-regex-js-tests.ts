import percentageRegex = require("percentage-regex");

let exactData: percentageRegex.RegexOptions = { exact: true };

let result2 = percentageRegex(exactData).test("hello world");
