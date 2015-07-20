import jsonStable = require("json-stable-stringify");

jsonStable({"a": 2});
jsonStable({"a": 2}, {space: "   "});
jsonStable({"a": 2}, {space: 3});
jsonStable({"a": 2}, {replacer: (key: string, value: any) => value });
jsonStable({"a": 2}, {cmp: (a, b) => 1});