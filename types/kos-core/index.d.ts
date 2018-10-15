// Type definitions for react-beautiful-dnd 7.1
// Project: https://github.com/ali-kos/kos
// Definitions by: alibaba ali-kos <https://github.com/ali-kos>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from 'react';

type IReactComponent<P = any, S = any> = React.ComponentClass<P, S>;

interface IUtil {
    getActionType: (action: string) => { namespace: string | null; type: string };
}

interface IWrapperConfig {
    model: IModel;
    autoLoad?: boolean;
    autoReset?: boolean;
    namespace?: string;
}

interface IAction<T = any> {
    type: string;
    payload?: Partial<T>;
}

export interface IKOSProps<T = any> {
    dispatch?: (action: IAction<T>) => void;
    getParam?: () => string;
    getNamespace?: () => string;
}

export type IDispatch = (action: IAction) => void;

export type IGetState<T = any> = () => T;

export interface IModel<T = any> {
    namespace: string;
    initial: T;
    reducers: {
        [key: string]: (state: T, { payload }: { payload: T }) => void;
    };
    asyncs: {
        [key: string]: (dispatch: IDispatch, getState?: IGetState<T>) => void;
    };
    setup?: (dispatch: IDispatch, getState: IGetState<T>) => void;
    getAsync?: (
        key: string
    ) => (dispatch: IDispatch, getState?: IGetState) => void;
}

interface IKOS {
    Util: IUtil;
    registeModel: (model: any) => void;
    removeModel: (namespace: string) => void;
    getModel: (namespace: string) => IModel;
    use: (middleware: (api: { dispatch: any; getState: any }) => void) => void;
    Wrapper: (
        config: IWrapperConfig
    ) => (component: IReactComponent<any & IKOSProps>) => any;
    start: (Layout: IReactComponent, container?: string) => void;
}

declare let KOS: IKOS;
export default KOS;
