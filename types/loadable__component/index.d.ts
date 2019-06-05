// Type definitions for @loadable/component 5.9
// Project: https://github.com/smooth-code/loadable-components
// Definitions by: Martynas Kadiša <https://github.com/martynaskadisa>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface DefaultImportedComponent<P> {
	default: React.ComponentType<P>;
}

export type DefaultComponent<P> = React.ComponentType<P> | DefaultImportedComponent<P>;

export interface Options {
	fallback?: JSX.Element;
	ssr?: boolean;
}

export interface LoadableReadyOptions {
  namespace?: string;
}

export type LoadableComponent<T> = React.ComponentType<T & { fallback?: JSX.Element }> & { preload(props?: T): void };
export type LoadableLibrary<TModule> = React.ComponentType<{
	fallback?: JSX.Element;
	children?: (module: TModule) => React.ReactNode;
	ref?: React.Ref<TModule>;
}> &
	TModule & { preload(props?: object): void };

declare function lib<T>(
	loadFn: (props: object) => Promise<T>,
	options?: Options
): LoadableLibrary<T>;

declare function loadableFunc<T>(
	loadFn: (props: T) => Promise<DefaultComponent<T>>,
	options?: Options
): LoadableComponent<T>;

declare const loadable: typeof loadableFunc & { lib: typeof lib };

export default loadable;

export namespace lazy {
	function lib<TModule>(loadFn: (props: object) => Promise<TModule>): LoadableLibrary<TModule>;
}

export function lazy<T>(loadFn: (props: T) => Promise<DefaultComponent<T>>): LoadableComponent<T>;

export function loadableReady(done?: () => any, options?: LoadableReadyOptions): Promise<void>;
