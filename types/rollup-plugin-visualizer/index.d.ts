/// <reference types="node" />
import { Plugin } from "rollup";

declare namespace visualizer {
    interface PluginVisualizerOptions {
        /**
         * Name of the file with diagram to generate
         * @default "stats.html"
         */
        filename?: string | undefined;
        /**
         * Title tag value
         * @default "Rollup Visualizer"
         */
        title?: string | undefined;
        /**
         * Use sourcemaps to calculate sizes (e.g. after UglifyJs or Terser)
         * @default false
         */
        sourcemap?: boolean | undefined;
        /**
         * Open generated file in default user agent
         * @default false
         */
        open?: boolean | undefined;
        /**
         * Which diagram type to use
         * @default "treemap"
         */
        template?: "treemap" | "sunburst" | "network" | undefined;
        /**
         * Product portable json file that can be used with
         * plugin CLI util to generate graph from several json files.
         * Every UI property ignored in this case.
         * @default false
         */
        json?: boolean | undefined;
        /**
         * Collect gzip size from source code and display it at chart
         * @default false
         */
        gzipSize?: boolean | undefined;
        /**
         * Collect brotli size from source code and display it at chart.
         * Only if current node version supports it
         * @default false
         */
        brotliSize?: boolean | undefined;
    }
}

declare function visualizer(options?: visualizer.PluginVisualizerOptions): Plugin;

export = visualizer;
