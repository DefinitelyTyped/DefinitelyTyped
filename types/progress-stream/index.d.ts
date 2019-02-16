// Type definitions for progress-stream 2.0
// Project: https://github.com/freeall/progress-stream
// Definitions by: Mick Dekkers <https://github.com/mickdekkers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="node" />

import stream = require("stream");
export = progress_stream;

declare function progress_stream(
    options: progress_stream.Options,
    progressListener: progress_stream.ProgressListener,
): progress_stream.ProgressStream;

declare function progress_stream(
    optionsOrProgressListener?:
        | progress_stream.Options
        | progress_stream.ProgressListener,
): progress_stream.ProgressStream;

declare namespace progress_stream {
    interface Options {
        time?: number;
        speed?: number;
        length?: number;
        drain?: boolean;
        transferred?: number;
    }

    type ProgressListener = (progress: Progress) => void;

    type ProgressStream = stream.Transform & {
        on(event: "progress", listener: ProgressListener): ProgressStream;
        on(event: "length", listener: (length: number) => void): ProgressStream;
        setLength(length: number): void;
        progress(): Progress;
    };

    interface Progress {
        percentage: number;
        transferred: number;
        length: number;
        remaining: number;
        eta: number;
        runtime: number;
        delta: number;
        speed: number;
    }
}
