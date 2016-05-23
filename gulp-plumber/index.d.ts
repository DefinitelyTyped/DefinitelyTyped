// Type definitions for gulp-plumber
// Project: https://github.com/floatdrop/gulp-plumber
// Definitions by: Joe Skeen <http://github.com/joeskeen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/** Prevent pipe breaking caused by errors from gulp plugins */


/** Prevent pipe breaking caused by errors from gulp plugins */
interface GulpPlumber {
    /**
     * Returns Stream, that fixes pipe methods on Streams that are next in pipeline.
     * 
     * @param options Sets options as described in the Options interface
     */
    (options?: Options): NodeJS.ReadWriteStream;
    /**
     * Returns Stream, that fixes pipe methods on Streams that are next in pipeline.
     * 
     * @param errorHandler the function to be attached to the stream on('error')
     */
    (errorHandler: ErrorHandlerFunction): NodeJS.ReadWriteStream;
    /** returns default behaviour for pipeline after it was piped */
    stop(): NodeJS.ReadWriteStream;
}

interface Options {
    /** 
     * Handle errors in underlying streams and output them to console. Default true.
     * If function passed, it will be attached to stream on('error')
     * If false passed, error handler will not be attached
     * If undefined passed, default error handler will be attached
     */
    errorHandler?: ErrorHandlerFunction | boolean;
    /** Monkeypatch pipe functions in underlying streams in pipeline. Default true. */
    inherit?: boolean;
}

/** an error handler function to be attached to the stream on('error') */
interface ErrorHandlerFunction {
    /** an error handler function to be attached to the stream on('error') */
    (error: any): void;
}

/** Prevent pipe breaking caused by errors from gulp plugins */
declare var gulpPlumber: GulpPlumber;

export = gulpPlumber;
