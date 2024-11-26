import type { EleventyConfig } from "11ty.ts";

declare namespace dirOutputPlugin {
    interface Options {
        columns?: {
            filesize?: boolean | undefined;
            benchmark?: boolean | undefined;
        } | undefined;
        warningFileSize?: number | undefined;
    }
}

/**
 * Group and sort Eleventy’s verbose output by directory (and show file size with benchmarks)
 */
declare function dirOutputPlugin(config: EleventyConfig, options: dirOutputPlugin.Options): void;

export = dirOutputPlugin;
