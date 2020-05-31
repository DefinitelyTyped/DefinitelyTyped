// Type definitions for streamsaver 2.0
// Project: https://github.com/jimmywarting/StreamSaver.js
// Definitions by: Enn Michael <https://github.com/ennmichael/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.2

export as namespace streamSaver;

/**
 * Create a WritableStream. The data written to this stream will be streamed to the user's browser as a file download.
 * @param filename File name for the download.
 * @param options Additional options.
 */
export function createWriteStream(
    filename: string, options?: CreateWriteStreamOptions): WritableStream;

export interface CreateWriteStreamOptions<I = any, O = any> {
    /**
     * Indicates the size of the streamed data and allows the browser to show progress while downloading.
     */
    size?: number;
    /**
     * URL to serve the stream from. This is the URL that the browser is going to request from the service worker.
     * You might need to provide this if you're using a custom service worker.
     */
    pathname?: string;
    writableStrategy?: QueuingStrategy<I>;
    readableStrategy?: QueuingStrategy<O>;
}

export interface Version {
    full: string;
    major: number;
    minor: number;
    dot: number;
}

/**
 * StreamSaver.js library version.
 */
export const version: Version;

export let supported: boolean;

/**
 * URL to the man-in-the-middle page. By default, this is
 * https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0, but you can also serve this
 * file from your own server, or even provide a custom MITM file with a custom service worker.
 */
export let mitm: string;

/**
 * The WritableStream class that will be used by StreamSaver.js. By default, this is window.WritableStream,
 * but you can also provide a ponyfill or a polyfill if your target browser does not support it natively.
 */
export let WritableStream: {
    prototype: WritableStream,
    new<W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>;
};

/**
 * The TransformStream class that will be used by StreamSaver.js. By default, this is the native TransformStream,
 * but you can also provide a ponyfill or a polyfill if your target browser does not support it natively.
 */
export let TransformStream: {
    prototype: TransformStream,
    new<I = any, O = any>(
        transformer: Transformer<I, O>,
        writableStrategy: QueuingStrategy<I>,
        readableStrategy: QueuingStrategy<O>): TransformStream<I, O>,
};
