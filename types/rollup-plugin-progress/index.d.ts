// Type definitions for rollup-plugin-progress 1.1
// Project: https://github.com/jkuri/rollup-plugin-progress#readme
// Definitions by: Jeroen Claassens <https://github.com/favna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import { Plugin } from 'rollup';

export interface PluginProgressOptions {
    clearLine?: boolean;
}

declare function progress(options?: PluginProgressOptions): Plugin;

export default progress;
