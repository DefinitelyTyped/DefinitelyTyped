import * as React from "react";
import {
    LoadableComponent,
    CommonOptions as LoadableOptions,
    LoadingComponentProps as LoadableLoadingComponentProps
} from "react-loadable";

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

type AsyncComponent<P = any> = Promise<React.ComponentType<P>>;
type AsyncComponentLoader<P = any> = () => AsyncComponent<P>;
type ModuleMapping = Record<string, AsyncComponent>;
type LoadedModuleMapping = Record<string, React.ComponentType>;

interface NextDynamicOptions<P = {}> extends Omit<LoadableOptions, "loading" | "modules"> {
    modules?: () => ModuleMapping; // overridden
    loading?: LoadableOptions["loading"]; // optional
    loader?: AsyncComponentLoader<P>; // optional, overriden
    render?: (props: P, loaded: LoadedModuleMapping) => React.ReactNode; // optional, overriden
    ssr?: boolean;
    loadableGenerated?: {
        webpack?: any;
        modules?: any;
    };
}

type DynamicComponent<P> = React.ComponentType<P> & LoadableComponent;

/**
 * Overloaded dynamic function.
 * https://github.com/zeit/next.js/blob/7.0.0/lib/dynamic.js#L55
 */
declare function dynamic<P = {}>(
    options: AsyncComponent<P> | NextDynamicOptions<P>
): DynamicComponent<P>;
declare function dynamic<P = {}>(
    asyncModule: AsyncComponent<P>,
    options: NextDynamicOptions<P>
): DynamicComponent<P>;

export type LoadingComponentProps = LoadableLoadingComponentProps;
export default dynamic;
