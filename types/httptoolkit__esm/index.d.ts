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
