// Type definitions for @loadable/component 5.2
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
}

export type LoadableComponent<T> = React.ComponentType<T & { fallback?: JSX.Element }>;
export type LoadableLibrary<TModule> = React.ComponentType<{
	fallback?: JSX.Element;
	children?: (module: TModule) => React.ReactNode;
	ref?: React.Ref<TModule>;
}> &
	TModule;

declare function lib<TProps, TModule>(
	loadFn: (props: TProps) => Promise<TModule>,
	options?: Options
): LoadableLibrary<TModule>

declare function loadableFunc<TProps, TComponent>(
	loadFn: (props: TProps) => Promise<DefaultComponent<TProps>>,
	options?: Options
): LoadableComponent<TProps>

declare const loadable: typeof loadableFunc & { lib: typeof lib };

export default loadable;

export namespace lazy {
	export function lib<TProps, TModule>(loadFn: (props: TProps) => Promise<TModule>): LoadableLibrary<TModule>;
}

export function lazy<T>(loadFn: (props: T) => Promise<DefaultComponent<T>>): LoadableComponent<T>;

export function loadableReady(done?: () => any): Promise<void>;
