export = Module;
declare function Module(id: any, parent: any): void;
declare class Module {
    constructor(id: any, parent: any);
    id: any;
    exports: {};
    parent: any;
    filename: string;
    loaded: boolean;
    children: any[];
    private resolveFileNameCache_;
    protected compileSource_(content: string, fileName: string): void;
    protected compile_(fileName: string): void;
    load(path: string): void;
    paths: any[];
    require(path: string | number): any;
}
declare namespace Module {
    export {
        global_,
        Regex_,
        cache_,
        packageMainCache_,
        isAbsolutePathRegex_,
        runOnFileSystem_,
        readFileContent_,
        fileExists_,
        isDirectory_,
        resolvePath_,
        extractFileName_,
        extractFileExt_,
        extractDirName_,
        runInThisContext_,
        tryReadPackageMain_,
        tryPackage_,
        tryFile_,
        tryExtensions_,
        addToCache,
        removeFromCache,
        load_,
        resolveFileName_,
        extensions,
        extensionIds_,
        fileSystems,
        clearCache,
        useCurrentContextAsMainModule,
        keyToPath_,
        ENGINE_MODULES_PREFIX,
        searchPackagesInRootDirectory,
        ModuleFileSystem,
    };
}
declare var global_: any;
declare var Regex_: any;
declare var cache_: any;
declare var packageMainCache_: any;
declare var isAbsolutePathRegex_: Regex;
declare function runOnFileSystem_(filePath: string, method: string): any;
declare function readFileContent_(path: string): string;
declare function fileExists_(path: string): boolean;
declare function isDirectory_(path: string): boolean;
declare function resolvePath_(basePath: string, relativePath: string): string;
declare function extractFileName_(path: string): string;
declare function extractFileExt_(path: string): string;
declare function extractDirName_(path: string): string;
declare function runInThisContext_(content: any, module: any, require: any, fileName: any): void;
declare function tryReadPackageMain_(path: string): string | null;
declare function tryPackage_(requestPath: string, extensions: string[]): string | null;
declare function tryFile_(requestPath: string): string;
declare function tryExtensions_(path: string, extensions: string[]): string;
declare function addToCache(path: string, module: any): void;
declare function removeFromCache(path: string): void;
declare function load_(request: string, parent: Module): any;
declare function resolveFileName_(request: string, parent: Module): string;
declare var extensions: any;
declare var extensionIds_: string[];
declare var fileSystems: {
    [x: string]: ModuleFileSystem;
};
declare function clearCache(opt_fileName: any): void;
declare function useCurrentContextAsMainModule(): void;
declare function keyToPath_(key: number): string;
declare var ENGINE_MODULES_PREFIX: string;
declare var searchPackagesInRootDirectory: boolean;
interface ModuleFileSystem {
    readFileContent: (arg0: string) => string;
    exists: (arg0: string) => boolean;
    isDirectory: (arg0: string) => boolean;
}
