// Type definitions for markdown-magic 1.0
// Project: https://github.com/DavidWells/markdown-magic#readme
// Definitions by: Piotr Błażejewicz (Peter Blazejewicz) <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param path Path or glob pattern
 * @param config See configuration options below
 * @param callback callback to run after markdown updates
 */
declare function markdownMagic(
    path: string | ReadonlyArray<string>,
    config?: markdownMagic.Configuration,
    callback?: markdownMagic.Callback,
): void;

declare namespace markdownMagic {
    interface Configuration {
        /**
         * Custom commands to transform block contents, see transforms & custom transforms sections below.
         */
        transforms?: {
            [name: string]: TransformFunction;
        };
        /**
         * Change output path of new content. Default behavior is replacing the original file
         */
        outputDir?: string;
        /**
         * Comment pattern to look for & replace inner contents. Default AUTO-GENERATED-CONTENT
         */
        matchWord?: string;
        /**
         * set debug flag to true to inspect the process
         */
        DEBUG?: boolean;
    }

    /**
     *  transform function
     */
    interface TransformFunction {
        (content: string, options: any): string;
    }

    interface ProcessedConfig extends Configuration {
        readonly outputFilePath: string;
        readonly originalPath: string;
        readonly outputDir: string;
        readonly outputContent: string;
    }

    interface Callback {
        (error: Error | undefined, output: ReadonlyArray<ProcessedConfig>): void;
    }
}

export = markdownMagic;
