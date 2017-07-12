// Type definitions for react-bootstrap 1.0
// Project: https://github.com/remojansen/redux-bootstrap
// Definitions by: Remo H. Jansen <https://github.com/remojansen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";
import { Middleware, Reducer, Store } from "redux";
import { History } from "history";

export interface BootstrapOptions {
    routes: JSX.Element;
    reducers: ReducersOption;
    middlewares?: Middleware[];
    initialState?: any;
    container?: string;
}

export interface BootstrapResult {
    store: Store<any>;
    history: History;
    root: JSX.Element;
}

export interface ReducersOption {
    [index: string]: Reducer<any>;
}

export default function bootstrap(options: BootstrapOptions): BootstrapResult;

