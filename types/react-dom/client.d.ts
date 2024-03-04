/**
 * WARNING: This entrypoint is only available starting with `react-dom@18.0.0-rc.1`
 */

// See https://github.com/facebook/react/blob/main/packages/react-dom/client.js to see how the exports are declared,

import React = require("react");
export interface HydrationOptions {
    /**
     * Prefix for `useId`.
     */
    identifierPrefix?: string;
    onRecoverableError?: (error: unknown, errorInfo: ErrorInfo) => void;
}

export interface RootOptions {
    /**
     * Prefix for `useId`.
     */
    identifierPrefix?: string;
    onRecoverableError?: (error: unknown, errorInfo: ErrorInfo) => void;
}

export interface ErrorInfo {
    digest?: string;
    componentStack?: string;
}

export interface Root {
    render(children: React.ReactNode): void;
    unmount(): void;
}

/**
 * createRoot lets you create a root to display React components inside a browser DOM node.
 *
 * @see {@link https://react.dev/reference/react-dom/client/createRoot API Reference for `createRoot`}
 */
export function createRoot(container: Element | DocumentFragment, options?: RootOptions): Root;

/**
 * Same as `createRoot()`, but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer.
 *
 * React will attempt to attach event listeners to the existing markup.
 *
 * **Example Usage**
 *
 * ```jsx
 * hydrateRoot(document.querySelector('#root'), <App />)
 * ```
 *
 * @see https://reactjs.org/docs/react-dom-client.html#hydrateroot
 */
export function hydrateRoot(
    container: Element | Document,
    initialChildren: React.ReactNode,
    options?: HydrationOptions,
): Root;
