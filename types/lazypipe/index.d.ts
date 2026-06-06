/// <reference types="node"/>

interface IPipelineBuilder {
    /**
     * Returns a stream where all the internal steps are processed sequentially
     * and the final result is passed on.
     */
    (): NodeJS.ReadWriteStream;

    /**
     * Creates a new lazy pipeline with all the previous steps, and the new step added to the end.
     * @param fn A stream creation function to call when the pipeline is created later.
     * @param args Any remaining arguments are saved and passed into fn when the pipeline is created.
     */
    pipe<T extends (...args: any[]) => any>(fn: T, ...args: Parameters<T>): IPipelineBuilder;
}

/**
 * Initializes a lazypipe.
 */
declare function lazypipe(): IPipelineBuilder;
export = lazypipe;
