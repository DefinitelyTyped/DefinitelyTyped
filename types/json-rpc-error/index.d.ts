// Type definitions for json-rpc-error 2.0
// Project: https://github.com/claudijo/json-rpc-error
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare class JsonRpcError extends Error {
    constructor(message: string, code: number, data?: string);
}

declare namespace JsonRpcError {
    class ParseError extends JsonRpcError {
        constructor();
    }
    class InvalidRequest extends JsonRpcError {
        constructor();
    }
    class InvalidParams extends JsonRpcError {
        constructor();
    }
    class InternalError extends JsonRpcError {
        constructor(err?: Error | string);
    }
    class MethodNotFound extends JsonRpcError {
        constructor();
    }
    class ServerError extends JsonRpcError {
        constructor(code: number);
    }
}

export = JsonRpcError;
