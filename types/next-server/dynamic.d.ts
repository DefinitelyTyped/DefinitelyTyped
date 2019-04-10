import * as React from "react";
import {
    LoadableComponent,
    CommonOptions as LoadableOptions,
    LoadingComponentProps as LoadableLoadingComponentProps
} from "react-loadable";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type AsyncComponent<P = any> = Promise<React.ComponentType<P> | { default: React.ComponentType<P> }>;
type AsyncComponentLoader<P = any> = () => AsyncComponent<P>;

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
interface NextDynamicLoaderOptions<P extends {}> extends NextDynamicOptionsBase {
    loader?: AsyncComponentLoader<P>;
}

// Dynamic loader options for mapped modules.
interface NextModuleMapOptions<P extends {}, E extends { [key: string]: any }> extends NextDynamicOptionsBase {
    modules: () => {
        [P in keyof E]: AsyncComponentLoader<E[P]>
    };
    render: (props: P, loaded: {
        [P in keyof E]: DynamicComponent<E[P]>
    }) => React.ReactNode;
}

/**
 * Overloaded dynamic function.
 * https://github.com/zeit/next.js/blob/v8.0.4/packages/next-server/lib/dynamic.js#L24
 */
// tslint:disable:no-unnecessary-generics
declare function dynamic<
    P extends {},
    E extends { [key: string]: any }
>(options: NextModuleMapOptions<P, E>): DynamicComponent<P>;
declare function dynamic<P extends {}>(
    options: NextDynamicLoaderOptions<P>
): DynamicComponent<P>;
declare function dynamic<P extends {}>(
    asyncModule: AsyncComponentLoader<P> | AsyncComponent<P>,
    options: NextDynamicOptionsBase
): DynamicComponent<P>;
declare function dynamic<P extends {}>(
    asyncModuleOrOptions: AsyncComponentLoader<P> | AsyncComponent<P> | NextDynamicOptionsBase,
    options?: any
): DynamicComponent<P>;
// tslint:enable:no-unnecessary-generics

export type LoadingComponentProps = LoadableLoadingComponentProps;
export default dynamic;
