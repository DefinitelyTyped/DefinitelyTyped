// Type definitions for flux-standard-action 0.5.0
// Project: https://github.com/acdlite/flux-standard-action
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ErrorAction extends Action<Error> {
    error: boolean;
}

export interface Action<T> {
    /**
     * The type of an action identifies to the consumer the nature of the action that has occurred. Two actions with the same type MUST be strictly equivalent (using ===)
     */
    type: string | symbol;
    /**
     * The optional payload property MAY be any type of value. It represents the payload of the action. Any information about the action that is not the type or status of the action should be part of the payload field.
     * By convention, if error is true, the payload SHOULD be an error object. This is akin to rejecting a promise with an error object.
     */
    payload?: T;
    /**
     * The optional error property MAY be set to true if the action represents an error.
     * An action whose error is true is analogous to a rejected Promise. By convention, the payload SHOULD be an error object.
     * If error has any other value besides true, including undefined and null, the action MUST NOT be interpreted as an error.
     */
    error?: boolean;
}

// Usage: var action: Action<string> & AnyMeta;
export interface AnyMeta {
    meta: any
}

// Usage: var action: Action<string> & TypedMeta<string>;
export interface TypedMeta<T> {
    meta: T
}

export declare function isFSA(action: any): boolean;

export declare function isError(action: any): boolean;
