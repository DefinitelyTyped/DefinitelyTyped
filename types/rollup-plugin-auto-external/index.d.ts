// Type definitions for foo rollup-plugin-auto-external 2.0
// Project: https://github.com/stevenbenisek/rollup-plugin-auto-external
// Definitions by: rxliuli <https://github.com/rxliuli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from 'rollup';

interface AutoExternalOptions {
    /**
     * defaults to true. Add all Node.js builtin modules (in the running version) as externals. Specify a string value (e.g., '6.0.0') to add all builtin modules for a specific version of Node.js.
     * Rollup will complain if builtins is present, and the build target is a browser. You may want [rollup-plugin-node-builtins](https://npm.im/package/rollup-plugin-node-builtins).
     */
    builtins?: boolean | string;

    /**
     * defaults to true.
     */
    dependencies?: boolean;

    /**
     * defaults to process.cwd(). Path to a package.json file or its directory.
     */
    packagePath?: string;

    /**
     * defaults to true.
     */
    peerDependencies?: boolean;
}

declare function autoExternal(options?: AutoExternalOptions): Plugin;
export = autoExternal;
