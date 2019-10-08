// Type definitions for redux-cablecar 3.0
// Project: https://github.com/ndhays/redux-cablecar#readme
// Definitions by: Christoph Flick <https://github.com/ChFlick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { Action, Middleware, Store } from 'redux';

export interface Options {
    connected?: () => void;
    disconnected?: () => void;
    params?: object;
    prefix?: string;
    optimisticOnFail?: boolean;
}

export interface CableCar {
    changeChannel: (channel: string, options?: Options) => void;
    getChannel: () => string;
    getParams: () => object;
    perform: (method: string, payload?: any) => void;
    send: (action: string) => void;
}

declare var middleware: Middleware & {
    connect: (store: Store, channel: string, options?: Options) => CableCar;
    setProvider: (actionCableProvider: string) => void;
};

export default middleware;
