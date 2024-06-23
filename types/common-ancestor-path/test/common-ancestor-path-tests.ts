import ancestor = require("common-ancestor-path");

ancestor("C:\\a\\b\\c"); // $ExpectType string | null
ancestor("/a/b/c/d", "/a/b/x/y/z", "/a/b/c/i/j/k"); // $ExpectType string | null
