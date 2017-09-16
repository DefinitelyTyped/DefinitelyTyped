// Type definitions for flux-standard-action 0.5.0
// Project: https://github.com/acdlite/flux-standard-action
// Definitions by: Qubo <https://github.com/tkqubo>
//                 Simon Fridlund <https://github.com/zimme>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export interface ErrorAction extends Action<Error> {
    error: true;
}

export interface Action<T> {
    type: string;
    payload?: T;
    error?: boolean;
}

/** Usage: `var action: Action<string> & AnyMeta;` */
export interface AnyMeta {
    meta?: any;
}

/** Usage: `var action: Action<string> & TypedMeta<string>;` */
export interface TypedMeta<T> {
    meta?: T;
}

export declare function isFSA(action: any): action is Action<any>;

export declare function isError(action: any): action is ErrorAction;
