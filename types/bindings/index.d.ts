// Type definitions for bindings 1.5
// Project: https://github.com/TooTallNate/node-bindings
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

/**
 * The main `bindings()` function loads the compiled bindings for a given module.
 * It uses V8's Error API to determine the parent filename that this function is
 * being invoked from, which is then used to find the root directory.
 */
declare function bindings(mod: string | bindings.Options): any;
declare namespace bindings {
    interface Options {
        /** @default process.env.NODE_BINDINGS_ARROW || ' → ' */
        arrow?: string | undefined;
        /** @default process.env.NODE_BINDINGS_COMPILED_DIR || 'compiled' */
        compiled?: string | undefined;
        /** @default process.platform */
        platform?: NodeJS.Platform | undefined;
        /** @default process.arch */
        arch?: string | undefined;
        /** @default `node-v${process.versions.modules}-${process.platform}-${process.arch}` */
        nodePreGyp?: string | undefined;
        /** @default process.versions.node */
        version?: string | undefined;
        /** @default 'bindings.node' */
        bindings?: string | undefined;
        try?: ReadonlyArray<ReadonlyArray<string>> | undefined;
    }

    /**
     * Gets the filename of the JavaScript file that invokes this function.
     * Used to help find the root directory of a module.
     * Optionally accepts an filename argument to skip when searching for the invoking filename
     */
    function getFileName(calling_file?: string): string;

    /**
     * Gets the root directory of a module, given an arbitrary filename
     * somewhere in the module tree. The "root directory" is the directory
     * containing the `package.json` file.
     *
     *   In:  /home/nate/node-native-module/lib/index.js
     *   Out: /home/nate/node-native-module
     */
    function getRoot(file: string): string;
}

export = bindings;
