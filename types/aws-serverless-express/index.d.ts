/// <reference types="node"/>
import lambda = require("aws-lambda");
import http = require("http");

export interface Response {
    statusCode: number;
    body: string;
    headers: {};
}

export interface ProxyResult {
    promise: Promise<Response>;
}

export function createServer(
    requestListener: (request: http.IncomingMessage, response: http.ServerResponse) => void,
    serverListenCallback?: () => any,
    binaryMimeTypes?: string[],
): http.Server;

export function proxy(
    server: http.Server,
    event: lambda.APIGatewayProxyEvent,
    context: lambda.Context,
): http.Server;

export function proxy(
    server: http.Server,
    event: lambda.APIGatewayProxyEvent,
    context: lambda.Context,
    resolutionMode: "CONTEXT_SUCCEED" | "PROMISE",
): ProxyResult;

export function proxy(
    server: http.Server,
    event: lambda.APIGatewayProxyEvent,
    context: lambda.Context,
    resolutionMode: "CALLBACK",
    callback?: (error: any, response: Response) => void,
): ProxyResult;
