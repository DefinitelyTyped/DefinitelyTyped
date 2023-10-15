// Type definitions for rollup-plugin-url 3.0
// Project: https://github.com/Swatinem/rollup-plugin-url#readme
// Definitions by: Jeroen Claassens <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
import { Plugin } from "rollup";

interface PluginURLOptions {
    limit?: number | undefined;
    include?: string[] | undefined;
    exclude?: string[] | undefined;
    publicPath?: string | undefined;
    emitFiles?: boolean | undefined;
    fileName?: string | undefined;
    sourceDir?: string | undefined;
    destDist?: string | undefined;
}

declare function url(options?: PluginURLOptions): Plugin;

export default url;
