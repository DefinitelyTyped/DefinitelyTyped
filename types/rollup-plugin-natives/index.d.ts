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
