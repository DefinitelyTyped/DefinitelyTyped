import isResolvable = require("is-resolvable");

// Test with module name
const builtIn: boolean = isResolvable("fs");
const npmModule: boolean = isResolvable("typescript");

// Test with relative path
const relativePath: boolean = isResolvable("./index.js");
const parentPath: boolean = isResolvable("../package.json");

// Test with options
const withPaths: boolean = isResolvable("some-module", {
    paths: ["/custom/path", "/another/path"],
});

// Test with empty options
const emptyOptions: boolean = isResolvable("module", {});

// Result is always boolean
const result: boolean = isResolvable("anything");
