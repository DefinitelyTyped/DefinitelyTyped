// Type definitions for aws-serverless-express 3.3
// Project: https://github.com/awslabs/aws-serverless-express
// Definitions by: Ben Speakman <https://github.com/threesquared>
//                 Josh Caffey <https://github.com/jcaffey>
//                 Matthias Meyer <https://github.com/mattmeye>
//                 Alberto Vasquez <https://github.com/albertovasquez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>
import * as http from 'http';
import * as lambda from 'aws-lambda';

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
    binaryMimeTypes?: string[]
): http.Server;

export function proxy(
    server: http.Server,
    event: any,
    context: lambda.Context,
): http.Server;

export function proxy(
    server: http.Server,
    event: any,
    context: lambda.Context,
    resolutionMode: 'CONTEXT_SUCCEED',
): void;

export function proxy(
    server: http.Server,
    event: any,
    context: lambda.Context,
    resolutionMode: 'PROMISE'
): ProxyResult;

export function proxy(
    server: http.Server,
    event: any,
    context: lambda.Context,
    resolutionMode: 'CALLBACK',
    callback?: (error: any, response: Response) => void
): void;
