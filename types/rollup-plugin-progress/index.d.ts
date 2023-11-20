/// <reference types="node" />
import { Plugin } from "rollup";

export interface PluginProgressOptions {
    clearLine?: boolean | undefined;
}

declare function progress(options?: PluginProgressOptions): Plugin;

export default progress;
