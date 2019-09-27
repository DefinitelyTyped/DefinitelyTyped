// Type definitions for rollup-plugin-visualizer 2.6
// Project: https://www.npmjs.com/package/rollup-plugin-visualizer
// Definitions by: Nikolai Tsapkin <https://github.com/>
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
// import { Plugin } from 'rollup';

export interface PluginVisualizerOptions {
    filename?: string;
    title?: string;
    sourcemap?: boolean;
    open?: boolean;
    template?: string;
    bundlesRelative?: boolean;
}

export default function visualizer(options?: PluginVisualizerOptions): any;
