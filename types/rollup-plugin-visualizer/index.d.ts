// Type definitions for rollup-plugin-visualizer 4.2
// Project: https://github.com/doesdev/rollup-plugin-analyzer#readme
// Definitions by: Nick <https://github.com/fobdy>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2

/// <reference types="node" />
import { Plugin } from "rollup";

declare namespace visualizer {
    interface PluginVisualizerOptions {
        /**
         * Name of the file with diagram to generate
         * @default "stats.html"
         */
        filename?: string;
        /**
         * Title tag value
         * @default "Rollup Visualizer"
         */
        title?: string;
        /**
         * Use sourcemaps to calculate sizes (e.g. after UglifyJs or Terser)
         * @default false
         */
        sourcemap?: boolean;
        /**
         * Open generated file in default user agent
         * @default false
         */
        open?: boolean;
        /**
         * Which diagram type to use
         * @default "treemap"
         */
        template?: "treemap" | "sunburst" | "network";
        /**
         * Product portable json file that can be used with
         * plugin CLI util to generate graph from several json files.
         * Every UI property ignored in this case.
         * @default false
         */
        json?: boolean;
        /**
         * Collect gzip size from source code and display it at chart
         * @default false
         */
        gzipSize?: boolean;
        /**
         * Collect brotli size from source code and display it at chart.
         * Only if current node version supports it
         * @default false
         */
        brotliSize?: boolean;
    }
}

declare function visualizer(options?: visualizer.PluginVisualizerOptions): Plugin;

export = visualizer;
