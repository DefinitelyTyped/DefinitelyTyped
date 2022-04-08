// Type definitions for rollup-plugin-postcss 2.0
// Project: https://github.com/egoist/rollup-plugin-postcss
// Definitions by: Jeroen Claassens <https://github.com/favna>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />
import { Plugin } from 'rollup';
import { CssNanoOptions } from 'cssnano';

export interface PostCssPluginOptions {
    extensions?: string[];
    plugins?: any[];
    inject?: boolean | {
        insertAt?: 'top' | string;
    } | ((cssVariableName: string, fileId: string) => string);
    extract?: boolean | string;
    modules?: boolean | unknown;
    autoModules?: boolean;
    minimize?: boolean | CssNanoOptions;
    sourceMap?: boolean | 'inline';
    exec?: boolean;
    config?: boolean | {
        path: string;
        ctx: any;
    };
    name?: any[] | any[][];
    loaders?: any[];
    namedExports?: ((name: string) => string) | boolean;
    parser?: ((...args: any[]) => void) | string;
    syntax?: ((...args: any[]) => void) | string;
    stringifier?: ((...args: any[]) => void) | string;
    onImport?: (id: any) => void;
}

declare function postcss(options?: PostCssPluginOptions): Plugin;

export default postcss;
