// Type definitions for flux-standard-action 0.5.0
// Project: https://github.com/acdlite/flux-standard-action
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "flux-standard-action" {
    export interface ErrorAction extends Action<Error> {
        error: boolean;
    }

    export interface Action<T> {
        type: string;
        payload?: T;
        error?: boolean;
    }

    export interface AnyMeta {
        meta: any
    }

    export interface TypedMeta<T> {
        meta: T
    }

    export function isFSA(action: Action<any>): boolean;

    export function isError(action: Action<any>): boolean;
}

