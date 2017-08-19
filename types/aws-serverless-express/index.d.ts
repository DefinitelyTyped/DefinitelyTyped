// Type definitions for aws-serverless-express 2.1
// Project: https://github.com/awslabs/aws-serverless-express
// Definitions by: Ben Speakman <https://github.com/threesquared>, Josh Caffey <https://github.com/jcaffey>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
import * as http from 'http';
import * as lambda from 'aws-lambda';

export function createServer(
    requestListener: (request: http.IncomingMessage, response: http.ServerResponse) => http.Server,
    serverListenCallback?: () => any
): http.Server;

export function proxy(
    server: http.Server,
    event: any,
    context: lambda.Context
): void;
