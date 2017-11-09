// Type definitions for react-loadable 4.0
// Project: https://github.com/thejameskyle/react-loadable#readme
// Definitions by: Diogo Franco <https://github.com/Kovensky>, Oden S. <https://github.com/odensc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from 'react';

export interface LoadingComponentProps {
    isLoading: boolean;
    pastDelay: boolean;
    timedOut: boolean;
    error: any;
}

export type Options<Props, Exports extends object> = OptionsWithoutRender<Props> | OptionsWithRender<Props, Exports>;

export interface CommonOptions {
    /**
     * React component displayed after delay until loader() succeeds. Also responsible for displaying errors.
     *
     * If you don't want to render anything you can pass a function that returns null
     * (this is considered a valid React component).
     */
    // NOTE: () => null is only needed until React.SFC supports components returning null
    loading: React.ComponentType<LoadingComponentProps> | (() => null);
    /**
     * Defaults to 200, in milliseconds.
     *
     * Only show the loading component if the loader() has taken this long to succeed or error.
     */
    delay?: number | false | null;
    /**
     * Disabled by default.
     *
     * After the specified time in milliseconds passes, the component's `timedOut` prop will be set to true.
     */
    timeout?: number | false | null;
}

export interface OptionsWithoutRender<Props> extends CommonOptions {
    /**
     * Function returning a promise which returns a React component displayed on success.
     *
     * Resulting React component receives all the props passed to the generated component.
     */
    loader(): Promise<React.ComponentType<Props> | { default: React.ComponentType<Props> }>;
}

export interface OptionsWithRender<Props, Exports extends object> extends CommonOptions {
    /**
     * Function returning a promise which returns an object to be passed to `render` on success.
     */
    loader(): Promise<Exports>;
    /**
     * If you want to customize what gets rendered from your loader you can also pass `render`.
     *
     * Note: If you want to load multiple resources at once, you can also use `Loadable.Map`.
     *
     * ```ts
     * Loadable({
     *     // ...
     *     render(loaded, props) {
     *         const Component = loaded.default;
     *         return <Component {...props} />
     *     }
     * });
     * ```
     */
    render(loaded: Exports, props: Props): React.ReactNode;

    // NOTE: render is not optional if the loader return type is not compatible with the type
    // expected in `OptionsWithoutRender`. If you do not want to provide a render function, ensure that your
    // function is returning a promise for a React.ComponentType or is the result of import()ing a module
    // that has a component as its `default` export.
}

export interface OptionsWithMap<Props, Exports extends { [key: string]: any }> extends CommonOptions {
    /**
     * An object containing functions which return promises, which resolve to an object to be passed to `render` on success.
     */
    loader: {
        [P in keyof Exports]: () => Promise<Exports[P]>
    };
    /**
     * If you want to customize what gets rendered from your loader you can also pass `render`.
     *
     * Note: If you want to load multiple resources at once, you can also use `Loadable.Map`.
     *
     * ```ts
     * Loadable({
     *     // ...
     *     render(loaded, props) {
     *         const Component = loaded.default;
     *         return <Component {...props} />
     *     }
     * });
     * ```
     */
    render(loaded: Exports, props: Props): React.ReactNode;
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

export interface Loadable {
    <Props, Exports extends object>(options: Options<Props, Exports>): React.ComponentType<Props> & LoadableComponent;
    Map<Props, Exports extends { [key: string]: any }>(options: OptionsWithMap<Props, Exports>): React.ComponentType<Props> & LoadableComponent;
}

declare const LoadableExport: Loadable;
export default LoadableExport;
