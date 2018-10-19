// Type definitions for kos-core 0.3
// Project: https://github.com/ali-Kos/Kos
// Definitions by: alibaba ali-Kos <https://github.com/ali-Kos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from 'react';

type ReactComponent<P = any, S = any> = React.ComponentClass<P, S>;

interface Util {
    getActionType: (action: string) => { namespace: string | null; type: string };
}

interface WrapperConfig {
    model: KosModel;
    autoLoad?: boolean;
    autoReset?: boolean;
    namespace?: string;
}

interface Action<T = any> {
    type: string;
    payload?: Partial<T>;
}

export interface KosProps<T = any> {
    dispatch?: (action: Action<T>) => void;
    getParam?: () => string;
    getNamespace?: () => string;
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
        [key: string]: (dispatch: KosDispatch, getState?: GetKosState<T>) => void;
    };
    setup?: (dispatch: KosDispatch, getState: GetKosState<T>) => void;
    getAsync?: (
        key: string
    ) => (dispatch: KosDispatch, getState?: GetKosState) => void;
}

interface Kos {
    Util: Util;
    registeModel: (model: any) => void;
    removeModel: (namespace: string) => void;
    getModel: (namespace: string) => KosModel;
    use: (middleware: (api: { dispatch: any; getState: any }) => void) => void;
    Wrapper: (
        config: WrapperConfig
    ) => (component: ReactComponent<any & KosProps>) => any;
    start: (Layout: ReactComponent, container?: string) => void;
}

declare let KOS: Kos;
export default KOS;
