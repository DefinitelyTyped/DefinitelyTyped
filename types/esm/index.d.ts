// Type definitions for esm 3.2
// Project: https://github.com/standard-things/esm#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

declare namespace Options {
    interface Esm {
        cache: boolean;
        esModule: boolean;
        extensions: boolean;
        mutableNamespace: boolean;
        namedExports: boolean;
        paths: boolean;
        vars: boolean;
        dedefault: boolean;
        topLevelReturn: boolean;
    }

    interface Options {
        cjs: boolean | Partial<Esm>;
        mainFields: string[];
        mode: "auto" | "all" | "strict";
        await: boolean;
        force: boolean;
        wasm: boolean;
    }
}

declare function esm(mod: typeof module, options?: Partial<Options.Options>): typeof require;
export = esm;
