// Type definitions for jsonrpc-serializer 0.2
// Project: https://github.com/soggie/jsonrpc-serializer
// Definitions by: Akim95 <https://github.com/Akim95>, many20 <https://github.com/many20>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

export type PayloadType = 'request' | 'notification' | 'success' | 'error';
// export const PayloadType = {
//    request: 'request' as PayloadType,
//    notification: 'notification' as PayloadType,
//    success: 'success' as PayloadType,
//    error: 'error' as PayloadType
// };

export interface DeserializeObject {
    type: PayloadType;
    payload: RequestPayloadObject | NotificationPayloadObject | SuccessPayloadObject | ErrorPayloadObject;
}

export interface PayloadObject {
    id?: string | number;
    method?: string;
    params?: any;
    result?: any;
    error?: SerializerError;
}

export interface RequestPayloadObject extends PayloadObject {
    id: string;
    method: string;
    params: any;
}

export interface NotificationPayloadObject extends PayloadObject {
    method: string;
    params: any;
}

export interface SuccessPayloadObject extends PayloadObject {
    id: string | number;
    result: any;
}

export interface ErrorPayloadObject extends PayloadObject {
    id: string | number;
    error: SerializerError;
}

export interface SerializerError extends Error {
    name: string;
    code: number;
    message: string;
    data?: any[];
}

export function request(id: string | number, method: string, params?: any): string;
export function notification(method: string, params?: any): string;
export function success(id: string | number, result: any): string;
export function error(id: string | number, error: err.JsonRpcError): string;
export function deserialize(msg: string): DeserializeObject;
export function requestObject(id: string | number, method: string, params?: any): PayloadObject;
export function notificationObject(method: string, params?: any): PayloadObject;
export function successObject(id: string | number, result: any): PayloadObject;
export function errorObject(id: string | number, error: SerializerError): PayloadObject;
export function deserializeObject(msg: PayloadObject): DeserializeObject;

export type errorHandler = (errors: string[] | null) => void;

export namespace err {
    type ErrorName = 'JsonRpcError' | 'ParseError' | 'InvalidRequestError' | 'MethodNotFoundError' | 'InvalidParamsError';
    // const ErrorName = {
    //    JsonRpcError: 'JsonRpcError' as ErrorName,
    //    ParseError: 'ParseError' as ErrorName,
    //    InvalidRequestError: 'InvalidRequestError' as ErrorName,
    //    MethodNotFoundError: 'MethodNotFoundError' as ErrorName,
    //    InvalidParamsError: 'InvalidParamsError' as ErrorName
    // };

    type ErrorCode = -32603 | -32700 | -32600 | -32601 | -32602;
    // const ErrorCode = {
    //    JsonRpcError: -32603 as ErrorCode,
    //    ParseError: -32700 as ErrorCode,
    //    InvalidRequestError: -32600 as ErrorCode,
    //    MethodNotFoundError: -32601 as ErrorCode,
    //    InvalidParamsError: -32602 as ErrorCode
    // };

    class JsonRpcError extends Error implements SerializerError {
        name: string | ErrorName;
        code: number | ErrorCode;
        message: string;
        data?: any[];

        constructor(msg: string, ...args: any[]);
        serialize(): string;
    }

    class InvalidParamsError extends JsonRpcError {
        constructor(...args: any[]);
    }

    class InvalidRequestError extends JsonRpcError {
        constructor(...args: any[]);
    }

    class MethodNotFoundError extends JsonRpcError {
        constructor(...args: any[]);
    }

    class ParseError extends JsonRpcError {
        constructor(...args: any[]);
    }
}
