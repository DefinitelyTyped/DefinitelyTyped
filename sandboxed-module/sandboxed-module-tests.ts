// Type definitions for sandboxed-module v2.0.3
// Project: https://github.com/felixge/node-sandboxed-module
// Definitions by: Sven Reglitzki <https://github.com/svi3c/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="sandboxed-module.d.ts" />

import SandboxedModule = require("sandboxed-module");

var sandboxedModule:SandboxedModule = SandboxedModule.load("foo");
var sandboxedModuleExports:any = SandboxedModule.require("foo");

var sandboxedModuleExportsWithOptions:any = SandboxedModule.require("foo", {
    requires: {
        someDep: {}
    },
    globals: {
        theAnswer: 42
    },
    locals: {
        someLocal: 1
    },
    sourceTransformers: {
        identity: (src:string) => src
    },
    singleOnly: true,
    sourceTransformersSingleOnly: true
});
