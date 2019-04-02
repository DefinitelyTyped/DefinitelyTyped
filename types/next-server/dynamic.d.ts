import * as React from "react";
import {
    LoadableComponent,
    CommonOptions as LoadableOptions,
    LoadingComponentProps as LoadableLoadingComponentProps
} from "react-loadable";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type AsyncComponent<P = any> = Promise<React.ComponentType<P> | { default: React.ComponentType<P> }>;
type AsyncComponentLoader<P = any> = () => AsyncComponent<P>;
type ModuleMapping<P = any> = Record<string, AsyncComponent<P> | AsyncComponentLoader<P>>;
type LoadedModuleMapping = Record<string, React.ComponentType>;

type DynamicComponent<P> = React.ComponentType<P> & LoadableComponent;

// Base dynamic loader options (essential Loadable config required by `next/dynamic`)
interface NextDynamicOptionsBase extends Omit<LoadableOptions, "loading" | "modules"> {
    loading?: LoadableOptions["loading"]; // optional
    ssr?: boolean;
    loadableGenerated?: {
        webpack?: any;
        modules?: any;
    };
}

// Dynamic loader options with `loader` key.
interface NextDynamicLoaderOptions<P = {}> extends NextDynamicOptionsBase {
    loader?: AsyncComponentLoader<P>;
}

// Dynamic loader options for mapped modules.
// Note: this currently requires the mapped props of each loaded component to exist.
// See tests for an example.
interface NextModuleMapOptions<P, E extends { [key: string]: any }> extends NextDynamicOptionsBase {
    modules: () => {
        [P in keyof E]: AsyncComponentLoader<E[P]>
    };
    render: (props: P, loaded: {
        [P in keyof E]: DynamicComponent<E[P]>
    }) => React.ReactNode;
}

/**
 * Overloaded dynamic function.
 * https://github.com/zeit/next.js/blob/7.0.0/lib/dynamic.js#L55
 */
declare function dynamic<
    P = {},
    E = { [key: string]: any }
>(options: NextModuleMapOptions<P, E>): DynamicComponent<P>;
declare function dynamic<P = {}>(
    options: NextDynamicLoaderOptions<P>
): DynamicComponent<P>;
declare function dynamic<P = {}>(
    asyncModule: AsyncComponentLoader<P> | AsyncComponent<P>,
    options: NextDynamicOptionsBase
): DynamicComponent<P>;
declare function dynamic<P = {}>(
    moduleOrOptions: AsyncComponentLoader<P> | AsyncComponent<P> | NextDynamicOptionsBase,
    options?: any
): DynamicComponent<P>;

export type LoadingComponentProps = LoadableLoadingComponentProps;
export default dynamic;
