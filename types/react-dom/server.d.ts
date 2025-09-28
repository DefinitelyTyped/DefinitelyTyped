// forward declarations
declare global {
    namespace NodeJS {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ReadableStream {}

        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface WritableStream {}
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
    interface ReadableStream {}
}

import { ReactNode } from "react";
import { ErrorInfo, ReactFormState } from "./client";
import { PostponedState, ResumeOptions } from "./static";

export interface BootstrapScriptDescriptor {
    src: string;
    integrity?: string | undefined;
    crossOrigin?: string | undefined;
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

export interface RenderToPipeableStreamOptions {
    identifierPrefix?: string;
    namespaceURI?: string;
    nonce?: string;
    bootstrapScriptContent?: string;
    bootstrapScripts?: Array<string | BootstrapScriptDescriptor>;
    bootstrapModules?: Array<string | BootstrapScriptDescriptor>;
    /**
     * Maximum length of the header content in unicode code units i.e. string.length.
     * Must be a positive integer if specified.
     * @default 2000
     */
    headersLengthHint?: number | undefined;
    importMap?: ReactImportMap | undefined;
    progressiveChunkSize?: number;
    onHeaders?: ((headers: Headers) => void) | undefined;
    onShellReady?: () => void;
    onShellError?: (error: unknown) => void;
    onAllReady?: () => void;
    onError?: (error: unknown, errorInfo: ErrorInfo) => string | void;
    formState?: ReactFormState | null;
}

export interface PipeableStream {
    abort: (reason?: unknown) => void;
    pipe: <Writable extends NodeJS.WritableStream>(destination: Writable) => Writable;
}

export interface ServerOptions {
    identifierPrefix?: string;
}

/**
 * Only available in the environments with [Node.js Streams](https://nodejs.dev/learn/nodejs-streams).
 *
 * @see [API](https://reactjs.org/docs/react-dom-server.html#rendertopipeablestream)
 *
 * @param children
 * @param options
 */
export function renderToPipeableStream(children: ReactNode, options?: RenderToPipeableStreamOptions): PipeableStream;

/**
 * Render a React element to its initial HTML. This should only be used on the server.
 * React will return an HTML string. You can use this method to generate HTML on the server
 * and send the markup down on the initial request for faster page loads and to allow search
 * engines to crawl your pages for SEO purposes.
 *
 * If you call `ReactDOMClient.hydrateRoot()` on a node that already has this server-rendered markup,
 * React will preserve it and only attach event handlers, allowing you
 * to have a very performant first-load experience.
 */
export function renderToString(element: ReactNode, options?: ServerOptions): string;

/**
 * Similar to `renderToString`, except this doesn't create extra DOM attributes
 * such as `data-reactid`, that React uses internally. This is useful if you want
 * to use React as a simple static page generator, as stripping away the extra
 * attributes can save lots of bytes.
 */
export function renderToStaticMarkup(element: ReactNode, options?: ServerOptions): string;

export interface RenderToReadableStreamOptions {
    identifierPrefix?: string;
    importMap?: ReactImportMap | undefined;
    namespaceURI?: string;
    nonce?: string;
    bootstrapScriptContent?: string;
    bootstrapScripts?: Array<string | BootstrapScriptDescriptor>;
    bootstrapModules?: Array<string | BootstrapScriptDescriptor>;
    /**
     * Maximum length of the header content in unicode code units i.e. string.length.
     * Must be a positive integer if specified.
     * @default 2000
     */
    headersLengthHint?: number | undefined;
    progressiveChunkSize?: number;
    signal?: AbortSignal;
    onError?: (error: unknown, errorInfo: ErrorInfo) => string | void;
    onHeaders?: ((headers: Headers) => void) | undefined;
    formState?: ReactFormState | null;
}

export interface ReactDOMServerReadableStream extends ReadableStream {
    allReady: Promise<void>;
}

/**
 * Only available in the environments with [Web Streams](https://developer.mozilla.org/en-US/docs/Web/API/Streams_API) (this includes browsers, Deno, and some modern edge runtimes).
 *
 * @see [API](https://reactjs.org/docs/react-dom-server.html#rendertoreadablestream)
 */
export function renderToReadableStream(
    children: ReactNode,
    options?: RenderToReadableStreamOptions,
): Promise<ReactDOMServerReadableStream>;

export { ResumeOptions };

/**
 * @see {@link https://react.dev/reference/react-dom/server/resume `resume`` reference documentation}
 * @version 19.2
 */
export function resume(
    children: React.ReactNode,
    postponedState: PostponedState,
    options?: ResumeOptions,
): Promise<ReactDOMServerReadableStream>;

/**
 * @see {@link https://react.dev/reference/react-dom/server/resumeToPipeableStream `resumeToPipeableStream`` reference documentation}
 * @version 19.2
 */
export function resumeToPipeableStream(
    children: React.ReactNode,
    postponedState: PostponedState,
    options?: ResumeOptions,
): Promise<PipeableStream>;

export const version: string;

export as namespace ReactDOMServer;
