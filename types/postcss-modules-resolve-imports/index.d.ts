import { Plugin } from "postcss";

declare namespace resolveImports {
    interface Resolve {
        alias?: { [alias: string]: string } | undefined;
        extensions?: string[] | undefined;
        modules?: string[] | undefined;
        mainFile?: string | undefined;
        preserveSymlinks?: boolean | undefined;
    }

    interface Options {
        icssExports?: boolean | undefined;
        resolve?: Resolve | undefined;
    }

    type ResolveImports = Plugin<Options>;
}

declare const resolveImports: resolveImports.ResolveImports;
export = resolveImports;
