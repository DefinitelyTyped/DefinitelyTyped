/**
 * WARNING: This entrypoint is only available starting with `react-dom@18.0.0-rc.1`
 */

// See https://github.com/facebook/react/blob/main/packages/react-dom/client.js to see how the exports are declared,

import React = require('react');
export interface HydrationOptions {
    /**
     * Prefix for `useId`.
     */
    identifierPrefix?: string;
    onRecoverableError?: (error: unknown) => void;
}

export interface RootOptions {
    /**
     * Prefix for `useId`.
     */
    identifierPrefix?: string;
    onRecoverableError?: (error: unknown) => void;
}

export interface Root {
    render(children: React.ReactChild | Iterable<React.ReactNode>): void;
    unmount(): void;
}

/**
 * Replaces `ReactDOM.render` when the `.render` method is called and enables Concurrent Mode.
 *
 * @see https://reactjs.org/docs/concurrent-mode-reference.html#createroot
 */
export function createRoot(container: Element | DocumentFragment, options?: RootOptions): Root;

export function hydrateRoot(
    container: Element | Document,
    initialChildren: React.ReactChild | Iterable<React.ReactNode>,
    options?: HydrationOptions,
): Root;
