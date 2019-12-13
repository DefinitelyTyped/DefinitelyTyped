// Type definitions for @loadable/component 5.10
// Project: https://github.com/smooth-code/loadable-components
// Definitions by: Martynas Kadiša <https://github.com/martynaskadisa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface DefaultImportedComponent<Props> {
    default: React.ComponentType<Props>;
}

export type DefaultComponent<Props> = React.ComponentType<Props> | DefaultImportedComponent<Props>;

export interface Options<Props> {
    cacheKey?(props: Props): any;
    fallback?: JSX.Element;
    ssr?: boolean;
}

export interface LoadableReadyOptions {
    namespace?: string;
}

export interface LoadableComponentMethods<Props> {
    preload(props?: Props): void;
    load(props?: Props): Promise<React.ComponentType<Props>>;
}

export type LoadableComponent<Props> = React.ComponentType<Props & { fallback?: JSX.Element }> &
    LoadableComponentMethods<Props>;

export type LoadableLibrary<TModule> = React.ComponentType<{
    fallback?: JSX.Element;
    children?: (module: TModule) => React.ReactNode;
    ref?: React.Ref<TModule>;
}> &
    TModule &
    LoadableComponentMethods<object>;

declare function lib<Props>(loadFn: (props: object) => Promise<Props>, options?: Options<any>): LoadableLibrary<Props>;

declare function loadableFunc<Props>(
    loadFn: (props: Props) => Promise<DefaultComponent<Props>>,
    options?: Options<Props>,
): LoadableComponent<Props>;

declare const loadable: typeof loadableFunc & { lib: typeof lib };

export default loadable;

export namespace lazy {
    function lib<TModule>(loadFn: (props: object) => Promise<TModule>): LoadableLibrary<TModule>;
}

export function lazy<Props>(loadFn: (props: Props) => Promise<DefaultComponent<Props>>): LoadableComponent<Props>;

export function loadableReady(done?: () => any, options?: LoadableReadyOptions): Promise<void>;
