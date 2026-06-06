import * as React from "react";

type ReactComponent<P = any, S = any> = React.ComponentClass<P, S>;

interface Util {
    getActionType: (action: string) => { namespace: string | null; type: string };
    getParam: () => any;
}

interface WrapperConfig {
    model: KosModel;
    autoLoad?: boolean | undefined;
    autoReset?: boolean | undefined;
    namespace?: string | undefined;
}

interface Action<T = any> {
    type: string;
    payload?: Partial<T> & { [x: string]: any } | undefined;
}

export interface KosProps<T = any> {
    dispatch?: ((action: Action<T>) => void) | undefined;
    getParam?: (() => any) | undefined;
    getNamespace?: (() => string) | undefined;
}

export type KosDispatch = (action: Action) => void;

export type GetKosState<T = any> = () => T;

export interface KosModel<T = any> {
    namespace: string;
    initial: T;
    reducers: {
        [key: string]: (state: T, { payload }: { payload: T }) => void;
    };
    asyncs: {
        [key: string]: (dispatch?: KosDispatch, getState?: GetKosState<T>, action?: { payload: T }) => void;
    };
    setup?:
        | ((dispatch: KosDispatch, getState: GetKosState<T>, action: { payload: { param: any } }) => void)
        | undefined;
    getAsync?:
        | ((
            key: string,
        ) => (dispatch: KosDispatch, getState?: GetKosState) => void)
        | undefined;
}

interface Kos {
    Util: Util;
    registeModel: (model: any) => void;
    removeModel: (namespace: string) => void;
    getModel: (namespace: string) => KosModel;
    use: (middleware: (api: { dispatch: any; getState: any }) => void) => void;
    Wrapper: (
        config: WrapperConfig,
    ) => (component: ReactComponent<any & KosProps>) => any;
    start: (Layout: ReactComponent, container?: string) => void;
}

declare let KOS: Kos;
export default KOS;
