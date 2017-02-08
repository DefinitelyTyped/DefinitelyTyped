// Type definitions for jsonrpc-serializer 0.2
// Project: https://github.com/soggie/jsonrpc-serializer#readme
// Definitions by: Akim95 <https://github.com/Akim95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param  {string|number} id
 * @param  {string} method
 * @param  {T} params?
 * @returns string
 */
export function request<T>(id: string | number, method: string, params?: T): string;

/**
 * @param  {string} method
 * @param  {T} params?
 * @returns string
 */
export function notification<T>(method: string, params?: T): string;

/**
 * @param  {string} id
 * @param  {T} result
 * @returns string
 */
export function success<T>(id: string, result: T): string;

/**
 * @param  {string} id
 * @param  {T} error
 * @returns string
 */
export function error<T>(id: string, error: T): string;

/**
 * @param  {string} msg
 * @returns T
 */
export function deserialize<T>(msg: string): T;

/**
 * @param  {string|number} id
 * @param  {string} method
 * @param  {T} params?
 * @returns string
 */
export function requestObject<T>(id: string | number, method: string, params?: T): string;

/**
 * @param  {string} method
 * @param  {T} params?
 * @returns string
 */
export function notificationObject<T>(method: string, params?: T): string;

/**
 * @param  {string} id
 * @param  {T} result
 * @returns string
 */
export function successObject<T>(id: string, result: T): string;

/**
 * @param  {string} id
 * @param  {T} error
 * @returns string
 */
export function errorObject<T>(id: string, error: T): string;

/**
 * @param  {T} msg
 * @returns void
 */
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
