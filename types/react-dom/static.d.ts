// forward declarations
declare global {
    namespace NodeJS {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ReadableStream {}
    }

    /**
     * Stub for https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface AbortSignal {}

    /**
     * Stub for https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface ReadableStream<R = any> {}

    /**
     * Stub for https://developer.mozilla.org/en-US/docs/Web/API/Uint8Array
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Uint8Array {}
}

import { ReactNode } from "react";
import { ErrorInfo } from "./client";

export type BootstrapScriptDescriptor = {
    src: string;
    integrity?: string | undefined;
    crossOrigin?: string | undefined;
};

export interface PrerenderOptions {
    bootstrapScriptContent?: string;
    bootstrapScripts?: Array<string | BootstrapScriptDescriptor>;
    bootstrapModules?: Array<string | BootstrapScriptDescriptor>;
    identifierPrefix?: string;
    namespaceURI?: string;
    onError?: (error: unknown, errorInfo: ErrorInfo) => string | void;
    progressiveChunkSize?: number;
    signal?: AbortSignal;
}

export interface PrerenderResult {
    prelude: ReadableStream<Uint8Array>;
}

/**
 * Only available in the environments with [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) (this includes browsers, Deno, and some modern edge runtimes).
 *
 * @see [API](https://react.dev/reference/react-dom/static/prerender)
 */
export function prerender(
    reactNode: ReactNode,
    options?: PrerenderOptions,
): Promise<PrerenderResult>;

export interface PrerenderToNodeStreamResult {
    prelude: NodeJS.ReadableStream;
}

/**
 * Only available in the environments with [Node.js Streams](https://nodejs.dev/learn/nodejs-streams).
 *
 * @see [API](https://react.dev/reference/react-dom/static/prerenderToNodeStream)
 *
 * @param children
 * @param options
 */
export function prerenderToNodeStream(
    reactNode: ReactNode,
    options?: PrerenderOptions,
): Promise<PrerenderToNodeStreamResult>;

export const version: string;
