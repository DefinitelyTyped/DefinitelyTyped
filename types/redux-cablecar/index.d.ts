import { Action, Middleware, Store } from "redux";

export interface Options {
    connected?: (() => void) | undefined;
    disconnected?: (() => void) | undefined;
    params?: object | undefined;
    prefix?: string | undefined;
    optimisticOnFail?: boolean | undefined;
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
