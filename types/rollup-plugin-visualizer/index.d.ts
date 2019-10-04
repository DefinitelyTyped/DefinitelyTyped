// Type definitions for rollup-plugin-visualizer 2.6
// Project: https://www.npmjs.com/package/rollup-plugin-visualizer
// Definitions by: Nick <https://github.com/fobdy>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node" />
import { Plugin } from 'rollup';

declare namespace visualizer {
    interface PluginVisualizerOptions {
        filename?: string;
        title?: string;
        sourcemap?: boolean;
        open?: boolean;
        template?: string;
        bundlesRelative?: boolean;
    }
}

declare function visualizer(options?: visualizer.PluginVisualizerOptions): Plugin;

export = visualizer;
