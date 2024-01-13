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
