/// <reference path="recursive-readdir.d.ts" />

import recursiveReaddir = require("recursive-readdir");

recursiveReaddir("some/path", (err, files) => {});
recursiveReaddir("some/path", ["foo.cs", "*.html"], (err, files) => {});
