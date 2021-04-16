// Type definitions for aws-lambda-fastify 1.4
// Project: https://github.com/fastify/aws-lambda-fastify
// Definitions by: Kang Chan <https://github.com/kentakang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Context, Callback } from 'aws-lambda';
import { FastifyInstance } from 'fastify';

interface AwsLambdaFastifyOptions {
    binaryMimeTypes?: string[];
    callbackWaitsForEmptyEventLoop?: boolean;
}

type Handler<TEvent = any, TResult = any> = (
    event: TEvent,
    context: Context,
    callback?: Callback<TResult>,
) => void | Promise<TResult>;

declare function awsLambdaFastify(app: FastifyInstance, options?: AwsLambdaFastifyOptions): Handler;

export = awsLambdaFastify;
