/**
 * These are types for things that are present in the React 18 alpha.
 *
 * Once React 18 is released they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react-dom/alpha"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react-dom/alpha'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react-dom/alpha" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/master/packages/react-dom/src/client/ReactDOM.js to see how the exports are declared,

import React = require('react');
import ReactDOM = require('.');

export {};

declare module '.' {
    interface HydrationOptions {
        onHydrated?(suspenseInstance: Comment): void;
        onDeleted?(suspenseInstance: Comment): void;
    }

    interface RootOptions {
        hydrate?: boolean;
        hydrationOptions?: HydrationOptions;
    }

    interface Root {
        render(children: React.ReactChild | React.ReactNodeArray): void;
        unmount(): void;
    }

    /**
     * Replaces `ReactDOM.render` when the `.render` method is called and enables Concurrent Mode.
     *
     * @see https://reactjs.org/docs/concurrent-mode-reference.html#createroot
     */
    function createRoot(container: Element | Document | DocumentFragment | Comment, options?: RootOptions): Root;
}
