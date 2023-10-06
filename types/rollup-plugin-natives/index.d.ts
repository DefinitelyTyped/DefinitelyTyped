// Type definitions for rollup-plugin-natives 0.7
// Project: https://github.com/danielgindi/rollup-plugin-natives
// Definitions by: Mohammad Kermani <https://github.com/mkermani144>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin } from "rollup";

interface RollupPluginNativesOptions {
    copyTo?: string;
    destDir?: string;
    dlopen?: boolean;
    map?: (modulePath: string) => string | { name: string; copyTo: string };
    targetEsm?: boolean;
    sourcemap?: boolean;
}

declare function nativePlugin(options: RollupPluginNativesOptions): Plugin;

export = nativePlugin;
