import type { JSONRPCErrorResponse, JSONRPCRequest, JSONRPCResponse, JSONRPCSuccessResponse } from "json-rpc";

const request: JSONRPCRequest = {
    "jsonrpc": "2.0",
    "method": "subtract",
    "params": [42, 23],
    "id": 1,
};
const requestWithNamedParams: JSONRPCRequest = {
    "jsonrpc": "2.0",
    "method": "subtract",
    "params": { "subtrahend": 23, "minuend": 42 },
    "id": 3,
};
const notification: JSONRPCRequest = {
    "jsonrpc": "2.0",
    "method": "update",
    "params": [1, 2, 3, 4, 5],
};

const response: JSONRPCResponse = {
    "jsonrpc": "2.0",
    "result": 19,
    "id": 1,
};
const successResponse: JSONRPCSuccessResponse = {
    "jsonrpc": "2.0",
    "result": 19,
    "id": 1,
};
const typedSuccessResponse: JSONRPCSuccessResponse<number> = {
    "jsonrpc": "2.0",
    "result": 19,
    "id": 1,
};

const errorResponse: JSONRPCErrorResponse = {
    "jsonrpc": "2.0",
    "error": {
        "code": -32600,
        "message": "Invalid Request",
    },
    "id": 1,
};

const errorResponseWithNullId: JSONRPCErrorResponse = {
    "jsonrpc": "2.0",
    "error": {
        "code": -32600,
        "message": "Invalid Request",
    },
    "id": null,
};

const errorResponseWithData: JSONRPCErrorResponse = {
    "jsonrpc": "2.0",
    "error": {
        "code": -32600,
        "message": "Invalid Request",
        "data": "some data",
    },
    "id": 1,
};

const typedErrorResponseWithData: JSONRPCErrorResponse<number> = {
    "jsonrpc": "2.0",
    "error": {
        "code": -32600,
        "message": "Invalid Request",
        "data": 42,
    },
    "id": 1,
};
