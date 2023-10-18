/// <reference types="node" />

import { Callback, Context } from "aws-lambda";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

interface AwsLambdaFastifyOptions {
    binaryMimeTypes?: string[] | undefined;
    callbackWaitsForEmptyEventLoop?: boolean | undefined;
}

type Handler<TEvent = FastifyRequest, TResult = FastifyReply> = (
    event: TEvent,
    context: Context,
    callback?: Callback<TResult>,
) => void | Promise<TResult>;

declare function awsLambdaFastify(app: FastifyInstance, options?: AwsLambdaFastifyOptions): Handler;

export = awsLambdaFastify;
