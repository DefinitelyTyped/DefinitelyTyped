// Type definitions for @loadable/component 5.13
// Project: https://github.com/smooth-code/loadable-components
// Definitions by: Martynas Kadiša <https://github.com/martynaskadisa>
//                 Daniel Playfair Cal <https://github.com/hedgepigdaniel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface DefaultImportedComponent<Props> {
    default: React.ComponentType<Props>;
}

export type DefaultComponent<Props> = React.ComponentType<Props> | DefaultImportedComponent<Props>;

/**
 * Synchronous function that returns the component from the
 * imported module.
 *
 * The default works with default exports, both CommonJS or ESM
 */
export type ComponentResolver<Props, Module = DefaultComponent<Props>> = (
    module: Module,
    props: Props,
) => React.ComponentType<Props>;

export interface OptionsWithoutResolver<Props> {
    cacheKey?(props: Props): any;
    fallback?: JSX.Element;
    ssr?: boolean;
}

export interface Options<Props, Module = DefaultComponent<Props>> extends OptionsWithoutResolver<Props> {
    resolveComponent?: ComponentResolver<Props, Module>;
}

export interface OptionsWithResolver<Props, Module = DefaultComponent<Props>> extends OptionsWithoutResolver<Props> {
    resolveComponent: ComponentResolver<Props, Module>;
}

export interface LoadableReadyOptions {
    namespace?: string;
}

export interface LoadableComponentMethods<Props> {
    preload(props?: Props): void;
    load(props?: Props): Promise<React.ComponentType<Props>>;
}

export interface ExtraComponentProps {
    fallback?: JSX.Element;
}

export type LoadableComponent<Props> = React.ComponentType<Props & ExtraComponentProps> &
    LoadableComponentMethods<Props>;

export interface ExtraClassComponentProps<Component extends React.ComponentClass> extends ExtraComponentProps {
    ref?: React.LegacyRef<InstanceType<Component>>;
}

export type LoadableClassComponent<Component extends React.ComponentClass> = React.ComponentType<
    React.ComponentProps<Component> & ExtraClassComponentProps<Component>
> &
    LoadableComponentMethods<React.ComponentProps<Component>>;

export type LoadableLibrary<Module> = React.ComponentType<{
    fallback?: JSX.Element;
    children?: (module: Module) => React.ReactNode;
    ref?: React.Ref<Module>;
}> &
    Module &
    LoadableComponentMethods<object>;

declare function lib<Props, Module>(
    loadFn: (props: Props) => Promise<Module>,
    options?: OptionsWithoutResolver<Props>,
): LoadableLibrary<Module>;

declare function loadableFunc<Props, Module = DefaultComponent<Props>>(
    loadFn: (props: Props) => Promise<Module>,
    options: OptionsWithResolver<Props, Module>,
): LoadableComponent<Props>;

declare function loadableFunc<Props>(
    loadFn: (props: Props) => Promise<DefaultComponent<Props>>,
    options?: OptionsWithoutResolver<Props>,
): LoadableComponent<Props>;

declare function loadableFunc<Component extends React.ComponentClass<any>>(
    loadFn: (props: React.ComponentProps<Component>) => Promise<Component | { default: Component }>,
    options?: Options<React.ComponentProps<Component>, Component>,
): LoadableClassComponent<Component>;

declare const loadable: typeof loadableFunc & { lib: typeof lib };

export default loadable;

export namespace lazy {
    function lib<Module>(loadFn: (props: object) => Promise<Module>): LoadableLibrary<Module>;
}

export function lazy<Props>(loadFn: (props: Props) => Promise<DefaultComponent<Props>>): LoadableComponent<Props>;

export function loadableReady(done?: () => any, options?: LoadableReadyOptions): Promise<void>;
