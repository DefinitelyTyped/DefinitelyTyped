// Type definitions for react-beautiful-dnd 7.1
// Project: https://github.com/ali-kos/kos
// Definitions by: alibaba ali-kos <https://github.com/ali-kos>
//                                 xshong2008 <https://github.com/orgs/ali-kos/people/xshong2008>
//                                 rockyou9000 <https://github.com/orgs/ali-kos/people/rockyou9000>
//                                 welkang <https://github.com/orgs/ali-kos/people/welkang>
//                                 fangyongbao <https://github.com/orgs/ali-kos/people/fangyongbao>
//                                 zetay <https://github.com/orgs/ali-kos/people/zetay>
//                                 bianlin <https://github.com/orgs/ali-kos/people/bianlin>
//                                 mh1874 <https://github.com/orgs/ali-kos/people/mh1874>
//                                 leejaen <https://github.com/orgs/ali-kos/people/leejaen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from 'react';

type IReactComponent<P = any, S = any> = React.ComponentClass<P, S>;

interface IUtil {
    getActionType: (action: string) => { namespace: string | null; type: string };
}

interface WrapperConfig {
    model: Model;
    autoLoad?: boolean;
    autoReset?: boolean;
    namespace?: string;
}

interface IAction<T = any> {
    type: string;
    payload?: Partial<T>;
}

export interface KOSProps<T = any> {
    dispatch?: (action: IAction<T>) => void;
    getParam?: () => string;
    getNamespace?: () => string;
}

export type IDispatch = (action: IAction) => void;

export type IGetState<T = any> = () => T;

export interface Model<T = any> {
    namespace: string;
    initial: T;
    reducers: {
        [key: string]: (state: T, { payload }: { payload: T }) => void;
    };
    asyncs: {
        [key: string]: (dispatch: IDispatch, getState?: IGetState<T>) => void;
    };
    setup: Function;
    getAsync?: (
        key: string
    ) => (dispatch: IDispatch, getState?: IGetState) => void;
}

interface IKOS {
    Util: IUtil;
    registeModel: (model: any) => void;
    removeModel: (namespace: string) => void;
    getModel: (namespace: string) => Model;
    use: (middleware: (api: { dispatch: any; getState: any }) => void) => void;
    Wrapper: (
        config: WrapperConfig
    ) => <T>(component: IReactComponent<T & KOSProps>) => any;
    start: (Layout: IReactComponent<any>, container?: string) => void;
}

declare let KOS: IKOS;
export default KOS;
