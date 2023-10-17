/// <reference types="node"/>

/**
 * Options controlling behavior when capturing
 */
export interface CaptureOptions {
    /**
     * Option to silence the output going to the console
     */
    quiet?: boolean | undefined;
}

/**
 * Executes the provided function with the output
 * on the provided streams.
 */
export function capture(
    streams: ReadonlyArray<NodeJS.WritableStream> | NodeJS.WritableStream,
    exec: () => void,
): string[];

/**
 * Executes the provided function with the output
 * on the provided streams. Accepts options to silence
 * the output going to the console.
 */
export function capture(
    streams: ReadonlyArray<NodeJS.WritableStream> | NodeJS.WritableStream,
    opts: CaptureOptions,
    exec: () => void,
): string[];

/**
 * Captures stderr for the provided execution scope.
 */
export function captureStderr(exec: () => void): string;

/**
 * Captures stderr for the provided execution scope.
 */
export function captureStderr(opts: CaptureOptions, exec: () => void): string;

/**
 * Captures stdout and stderr into an object for
 * the provided execution scope.
 */
export function captureStdio(exec: () => void): { stdout: string; stderr: string };

/**
 * Captures stdout and stderr into an object for
 * the provided execution scope.
 */
export function captureStdio(opts: CaptureOptions, exec: () => void): { stdout: string; stderr: string };

/**
 * Captures stdout for the provided execution scope.
 */
export function captureStdout(exec: () => void): string;

/**
 * Captures stdout for the provided execution scope.
 */
export function captureStdout(opts: CaptureOptions, exec: () => void): string;

/**
 * Listens to a provided stream, and executes the provided
 * function for every write call. Accepts options to silence
 * the output going to the console.
 *
 * Returns a function to call when you wish to stop listening
 * to the call.
 */
export function hook(
    stream: NodeJS.WritableStream,
    exec: (
        string: string,
        encoding?: string,
        fd?: (error?: any) => void,
    ) => void,
): () => boolean;

/**
 * Listens to a provided stream, and executes the provided
 * function for every write call. Accepts options to silence
 * the output going to the console.
 *
 * Returns a function to call when you wish to stop listening
 * to the call.
 */
export function hook(
    stream: NodeJS.WritableStream,
    opts: CaptureOptions,
    exec: (
        string: string,
        encoding?: string,
        fd?: (error?: any) => void,
    ) => void,
): () => boolean;

/**
 * Delegate to #capture with a quiet passthrough.
 */
export function intercept(stream: NodeJS.WritableStream, exec: () => void): string[];

/**
 * Delegate to #capture with a quiet passthrough.
 */
export function intercept(stream: NodeJS.WritableStream, opts: CaptureOptions, exec: () => void): string[];

/**
 * Delegate to #captureStderr with a quiet passthrough.
 */
export function interceptStderr(exec: () => void): string;

/**
 * Delegate to #captureStderr with a quiet passthrough.
 */
export function interceptStderr(opts: CaptureOptions, exec: () => void): string;

/**
 * Delegate to #captureStdio with a quiet passthrough.
 */
export function interceptStdio(exec: () => void): { stdout: string; stderr: string };

/**
 * Delegate to #captureStdio with a quiet passthrough.
 */
export function interceptStdio(opts: CaptureOptions, exec: () => void): { stdout: string; stderr: string };

/**
 * Delegate to #captureStdout with a quiet passthrough.
 */
export function interceptStdout(exec: () => void): string;

/**
 * Delegate to #captureStdout with a quiet passthrough.
 */
export function interceptStdout(opts: CaptureOptions, exec: () => void): string;

/**
 * Starts a capture on the provided stream using the
 * provided options and stream execution.
 */
export function startCapture(
    stream: NodeJS.WritableStream,
    exec: (
        string: string,
        encoding?: string,
        fd?: (error?: any) => void,
    ) => void,
): boolean;

/**
 * Starts a capture on the provided stream using the
 * provided options and stream execution.
 */
export function startCapture(
    stream: NodeJS.WritableStream,
    opts: CaptureOptions,
    exec: (
        string: string,
        encoding?: string,
        fd?: (error?: any) => void,
    ) => void,
): boolean;

/**
 * Delegate to #startCapture with a quiet passthrough.
 */
export function startIntercept(stream: NodeJS.WritableStream, exec: () => void): boolean;

/**
 * Delegate to #startCapture with a quiet passthrough.
 */
export function startIntercept(stream: NodeJS.WritableStream, opts: CaptureOptions, exec: () => void): boolean;

/**
 * Stops a capture on the provided stream.
 */
export function stopCapture(stream: NodeJS.WritableStream): boolean;

/**
 * Delegate to #stopCapture with a quiet passthrough.
 */
export function stopIntercept(stream: NodeJS.WritableStream): boolean;
