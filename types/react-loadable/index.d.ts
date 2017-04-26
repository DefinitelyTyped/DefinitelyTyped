// Type definitions for react-loadable 3.3
// Project: https://github.com/thejameskyle/react-loadable#readme
// Definitions by: Diogo Franco <https://github.com/Kovensky>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as React from 'react';

export type LoadedComponent<Props> = React.ComponentClass<Props> | React.SFC<Props>;

export interface LoadingComponentProps {
    isLoading: boolean;
    pastDelay: boolean;
    error: any;
}

export type Options<Props, T extends object> = OptionsWithoutResolve<Props> | OptionsWithResolve<Props, T>;

export interface CommonOptions {
    /**
     * React component displayed after delay until loader() succeeds. Also responsible for displaying errors.
     *
     * If you don't want to render anything you can pass a function that returns null
     * (this is considered a valid React component).
     */
    // NOTE: () => null is only needed until React.SFC supports components returning null
    LoadingComponent: React.ComponentClass<LoadingComponentProps> | React.SFC<LoadingComponentProps> | (() => null);
    /**
     * Defaults to 200, in milliseconds
     *
     * Only show the LoadingComponent if the loader() has taken this long to succeed or error.
     */
    delay?: number;
    /**
     * When rendering server-side, require() this path to load the component instead, this way it happens
     * synchronously. If you are rendering server-side you should use this option.
     *
     * If you are using Babel, you might want to use the Babel plugin to add this option automatically.
     */
    serverSideRequirePath?: string;
    /**
     * In order for Loadable to require() a component synchronously (when possible) instead of waiting for
     * the promise returned by import() to resolve. If you are using Webpack you should use this option.
     *
     * ```ts
     * Loadable({
     *     // ...
     *     webpackRequireWeakId: () => require.resolveWeak('./MyComponent')
     * });
     * ```
     *
     * If you are using Babel, you might want to use the Babel plugin to add this option automatically.
     */
    webpackRequireWeakId?(): number|string;
}

export interface OptionsWithoutResolve<Props> extends CommonOptions {
    /**
     * Function returning promise returning a React component displayed on success.
     *
     * Resulting React component receives all the props passed to the generated component.
     */
    loader(): Promise<LoadedComponent<Props> | { default: LoadedComponent<Props> }>;
}

export interface OptionsWithResolve<Props, T extends object> extends CommonOptions {
    /**
     * Function returning promise returning a React component displayed on success.
     *
     * Resulting React component receives all the props passed to the generated component.
     */
    loader(): Promise<T>;
    /**
     * If the component that you want to load is not the default exported from a module you can use this
     * function to resolve it.
     *
     * ```ts
     * Loadable({
     *     // ...
     *     resolveModule: module => module.MyComponent
     * });
     * ```
     */
    resolveModule(obj: T): LoadedComponent<Props>;
}

export interface LoadableComponent {
    /**
     * The generated component has a static method preload() for calling the loader function ahead of time.
     * This is useful for scenarios where you think the user might do something next and want to load the
     * next component eagerly.
     *
     * Note: preload() intentionally does not return a promise. You should not be depending on the timing of
     * preload(). It's meant as a performance optimization, not for creating UI logic.
     */
    preload(): void;
}

export default function Loadable<Props, T extends object>(options: Options<Props, T>): LoadedComponent<Props> & LoadableComponent;

/**
 * In case you are rendering server-side and want to find out after a render cycle which
 * serverSideRequirePath's and webpackRequireWeakId's were actually rendered, you can use
 * flushServerSideRequirePaths or flushWebpackRequireWeakIds to get an array of them.
 *
 * Note: These are flushed individually, one does not affect the other.
 */
export function flushServerSideRequirePaths(): string[];

/**
 * In case you are rendering server-side and want to find out after a render cycle which
 * serverSideRequirePath's and webpackRequireWeakId's were actually rendered, you can use
 * flushServerSideRequirePaths or flushWebpackRequireWeakIds to get an array of them.
 *
 * Note: These are flushed individually, one does not affect the other.
 */
export function flushWebpackRequireWeakIds(): string[]|number[];
