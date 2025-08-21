import Module = require("node:module");
import { URL } from "node:url";

Module.Module === Module;

// Module class and NodeJS.Module
{
    const module: NodeJS.Module = new Module("moduleId");
    new Module("childModuleId", module);

    // $ExpectType Module[]
    module.children;
    // $ExpectType any
    module.exports;
    // $ExpectType string
    module.filename;
    // $ExpectType string
    module.id;
    // $ExpectType boolean
    module.isPreloading;
    // $ExpectType boolean
    module.loaded;
    // $ExpectType string
    module.path;
    // $ExpectType string[]
    module.paths;

    // $ExpectType any
    module.require("moduleId");
    // @ts-expect-error module.require() does not have the additional static properties of global require()
    const require: NodeJS.Require = module.require;
}

// Deprecated global aliases
{
    ({} as NodeModule) satisfies NodeJS.Module;
    ({} as NodeRequire) satisfies NodeJS.Require;
}

// Top-level properties/functions
{
    // $ExpectType readonly string[]
    Module.builtinModules;

    // $ExpectType Require
    Module.createRequire("/usr/lib/node");
    // $ExpectType Require
    Module.createRequire(new URL("file:///usr/lib/node"));

    // $ExpectType boolean
    Module.isBuiltin("process");

    // $ExpectType void
    Module.syncBuiltinESMExports();
}

// Undocumented monkeypatching definitions
{
    // $ExpectType void
    Module.runMain(process.argv[1]);

    // $ExpectType string
    Module.wrap("assert(module.exports === exports)");
}

// Source maps
{
    const sourceMap = new Module.SourceMap({
        file: "test.js",
        mappings: "ASDF;GHJK",
        names: [],
        sourceRoot: "/",
        sources: [],
        version: 3,
        sourcesContent: [],
    });

    // $ExpectType SourceMapPayload
    sourceMap.payload;
    // $ExpectType SourceMapping | {}
    sourceMap.findEntry(1, 1);
    // $ExpectType SourceOrigin | {}
    sourceMap.findOrigin(1, 1);

    // $ExpectType SourceMap | undefined
    Module.findSourceMap("/path/to/file.js");
}

// Hooks
{
    const specifier = "./myLoader.js";
    const parentURL = "some-url"; // import.meta.url
    Module.register(specifier);
    Module.register(specifier, { parentURL });
    Module.register(specifier, { parentURL: new URL("data:") });
    Module.register(specifier, parentURL);
    Module.register(specifier, new URL("data:"));

    const someArrayBuffer = new ArrayBuffer(100);
    Module.register(specifier, {
        parentURL,
        data: someArrayBuffer,
        transferList: [someArrayBuffer],
    });

    Module.register<{ number: number }>(specifier, {
        parentURL,
        data: { number: 1 },
    });

    const initialize: Module.InitializeHook<{ number: number }> = async ({ number }) => {
        number; // $ExpectType number
    };

    const resolve: Module.ResolveHook = async (specifier, context, nextResolve) => {
        const { parentURL = null } = context;
        console.log(context.importAttributes.type);

        if (Math.random() > 0.5) {
            return {
                shortCircuit: true,
                url: parentURL
                    ? new URL(specifier, parentURL).href
                    : new URL(specifier).href,
            };
        }

        if (Math.random() < 0.5) {
            return nextResolve(specifier, {
                ...context,
                conditions: [...context.conditions, "another-condition"],
            });
        }

        return nextResolve(specifier);
    };

    const load: Module.LoadHook = async (url, context, nextLoad) => {
        const { format } = context;

        if (format) {
            return {
                format,
                shortCircuit: true,
                source: "...",
            };
        }

        if (format === null) {
            return {
                format,
                shortCircuit: true,
                source: "...",
            };
        }

        return nextLoad(url);
    };

    const globalPreload: Module.GlobalPreloadHook = (context) => {
        return `\
            globalThis.someInjectedProperty = 42;
            console.log('I just set some globals!');

            const { createRequire } = getBuiltin('module');
            const { cwd } = getBuiltin('process');

            const require = createRequire(cwd() + '/<preload>');
            // [...]
        `;
    };
}

// import.meta
{
    let importmeta!: ImportMeta; // because we cannot access the true `import.meta` with module:commonjs
    importmeta.url; // $ExpectType string
    importmeta.resolve("local"); // $ExpectType string
    importmeta.resolve("local", "/parent"); // $ExpectType string
    importmeta.resolve("local", undefined); // $ExpectType string
    importmeta.resolve("local", new URL("https://parent.module")); // $ExpectType string
}
