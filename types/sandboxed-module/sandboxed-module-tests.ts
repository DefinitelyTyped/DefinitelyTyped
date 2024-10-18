import SandboxedModule = require("sandboxed-module");

var sandboxedModule: SandboxedModule = SandboxedModule.load("foo");
var sandboxedModuleExports: any = SandboxedModule.require("foo");

SandboxedModule.configure({
    globals: { Math },
});

SandboxedModule.registerBuiltInSourceTransformer("coffee");

var sandboxedModuleExportsWithOptions: any = SandboxedModule.require("foo", {
    requires: {
        someDep: {},
    },
    globals: {
        theAnswer: 42,
    },
    locals: {
        someLocal: 1,
    },
    sourceTransformers: {
        identity: (src: string) => src,
    },
    singleOnly: true,
    sourceTransformersSingleOnly: true,
});
