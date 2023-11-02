declare module "node:module" {
    export * from "module";
}

declare module "module" {
    function createRequire(filename: string): NodeJS.Require;
    function _resolveFilename(path: string, parent: string, isMain: boolean): string;
    /**
     * Bun's module cache is not exposed but this property exists for compatibility.
     */
    let _cache: {};

    let builtinModules: string[];
}
