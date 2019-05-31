// Type definitions for lazypipe
// Project: https://github.com/OverZealous/lazypipe
// Definitions by: Thomas Corbière <https://github.com/tomc974>
//                 Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="node"/>


interface IPipelineBuilder {
    (): NodeJS.ReadWriteStream

    /**
     * Adds a step to the end of the pipeline.
     *
     * @param destination
     * The destination stream creation function to call when invoking the pipeline.
     *
     * @param args
     * The arguments for the `destination`-function.
     *
     * A pipeline-builder.
     */
    pipe<TArgs extends any[]>(destination: (...args: TArgs) => NodeJS.ReadWriteStream, ...args: TArgs): IPipelineBuilder;
}

/**
 * Returns a stream where all the internal steps are processed sequentially
 * and the final result is passed on.
 */
declare function lazypipe(): IPipelineBuilder;
export = lazypipe;
