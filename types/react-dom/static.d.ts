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
export {};

declare const POSTPONED_STATE_SIGIL: unique symbol;

/**
 * This is an opaque type i.e. users should not make any assumptions about its structure.
 * It is JSON-serializeable to be a able to store it and retrvieve later for use with {@link https://react.dev/reference/react-dom/server/resume `resume`}.
 */
export interface PostponedState {
    [POSTPONED_STATE_SIGIL]: never;
}

/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap Import maps}
 */
// TODO: Ideally TypeScripts standard library would include this type.
// Until then we keep the prefixed one for future compatibility.
export interface ReactImportMap {
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap#imports `imports` reference}
     */
    imports?: {
        [specifier: string]: string;
    } | undefined;
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap#integrity `integrity` reference}
     */
    integrity?: {
        [moduleURL: string]: string;
    } | undefined;
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap#scopes `scopes` reference}
     */
    scopes?: {
        [scope: string]: {
            [specifier: string]: string;
        };
    } | undefined;
}

export interface BootstrapScriptDescriptor {
    src: string;
    integrity?: string | undefined;
    crossOrigin?: string | undefined;
}

export interface PrerenderOptions {
    bootstrapScriptContent?: string;
    bootstrapScripts?: Array<string | BootstrapScriptDescriptor>;
    bootstrapModules?: Array<string | BootstrapScriptDescriptor>;
    /**
     * Maximum length of the header content in unicode code units i.e. string.length.
     * Must be a positive integer if specified.
     * @default 2000
     */
    headersLengthHint?: number | undefined;
    identifierPrefix?: string;
    importMap?: ReactImportMap | undefined;
    namespaceURI?: string;
    onError?: (error: unknown, errorInfo: ErrorInfo) => string | void;
    onHeaders?: (headers: Headers) => void | undefined;
    progressiveChunkSize?: number;
    signal?: AbortSignal;
}

export interface PrerenderResult {
    postponed: null | PostponedState;
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
    postponed: null | PostponedState;
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

export interface ResumeOptions {
    nonce?: string;
    signal?: AbortSignal;
    onError?: (error: unknown) => string | undefined | void;
}

/**
 * @see {@link https://react.dev/reference/react-dom/static/resumeAndPrerender `resumeAndPrerender` reference documentation}
 * @version 19.2
 */
export function resumeAndPrerender(
    children: React.ReactNode,
    postponedState: null | PostponedState,
    options?: Omit<ResumeOptions, "nonce">,
): Promise<PrerenderResult>;

/**
 * @see {@link https://react.dev/reference/react-dom/static/resumeAndPrerenderToNodeStream `resumeAndPrerenderToNodeStream`` reference documentation}
 * @version 19.2
 */
export function resumeAndPrerenderToNodeStream(
    children: React.ReactNode,
    postponedState: null | PostponedState,
    options?: Omit<ResumeOptions, "nonce">,
): Promise<PrerenderToNodeStreamResult>;

export const version: string;
