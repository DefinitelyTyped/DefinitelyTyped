// Type definitions for rollup-plugin-url 3.0
// Project: https://github.com/Swatinem/rollup-plugin-url#readme
// Definitions by: Jeroen Claassens <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />
import { Plugin } from 'rollup';

interface PluginURLOptions {
    limit?: number;
    include?: string[];
    exclude?: string[];
    publicPath?: string;
    emitFiles?: boolean;
    fileName?: string;
    sourceDir?: string;
    destDist?: string;
}

declare function url(options?: PluginURLOptions): Plugin;

export default url;
