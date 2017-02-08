// Type definitions for jsonrpc-serializer 0.2
// Project: https://github.com/soggie/jsonrpc-serializer#readme
// Definitions by: Akim95 <https://github.com/Akim95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function request<T>(id: string | number, method: string, params?: T): string;
export function notification<T>(method: string, params?: T): string;
export function success<T>(id: string, result: T): string;
export function error<T>(id: string, error: T): string;
export function deserialize<T>(msg: string): T;
export function requestObject<T>(id: string | number, method: string, params?: T): string;
export function notificationObject<T>(method: string, params?: T): string;
export function successObject<T>(id: string, result: T): string;
export function errorObject<T>(id: string, error: T): string;
export function deserializeObject<T>(msg: T): void;

export const errorHandler: any;

export namespace err {
    class JsonRpcError {
        constructor(msg: string);
        serialize(): any;
    }
    class InvalidParamsError {}
    class InvalidRequestError {}
    class MethodNotFoundError {}
    class ParseError {}
}
