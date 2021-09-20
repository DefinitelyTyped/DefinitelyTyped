// Type definitions for nut-pipe 1.1
// Project: https://github.com/nodejs-projects-kenanhancer/nut-pipe
// Definitions by: kenan hancer <https://github.com/kenanhancer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context, Callback } from "aws-lambda";

export type AsyncBasicHandler<TEvent = any, TResult = any> = (event: TEvent) => Promise<TResult | Error>;

export type AsyncBasicMiddleware<TEvent = any, T extends AsyncBasicHandler = AsyncBasicHandler<TEvent>> =
    T extends AsyncBasicHandler<TEvent, infer TResult> ?
    (event: TEvent, next: T) => Promise<TResult> :
    never;

export type AsyncBasicMiddlewareWithServices<TEvent = any, TServices = Record<string, any>, T extends AsyncBasicHandler = AsyncBasicHandler<TEvent>> =
    T extends AsyncBasicHandler<TEvent, infer TResult> ?
    (event: TEvent, services: TServices, next: T) => Promise<TResult | Error> :
    never;

export type AsyncLambdaHandler<TEvent = APIGatewayProxyEventV2, TContext = Context, TResult = APIGatewayProxyResultV2> =
    (event: TEvent, context: TContext, callback?: Callback<TResult>) => Promise<TResult | Error | unknown>;

export type AsyncLambdaMiddleware<TEvent = APIGatewayProxyEventV2, T = AsyncLambdaHandler<TEvent>> =
    T extends AsyncLambdaHandler<TEvent, infer TContext, infer TResult> ?
    (event: TEvent, context: TContext, callback: Callback<TResult>, next: T) => void | Promise<TResult | Error | unknown> :
    never;

export type AsyncLambdaMiddlewareWithServices<TEvent = APIGatewayProxyEventV2, TServices = Record<string, any>, T = AsyncLambdaHandler<TEvent>> =
    T extends AsyncLambdaHandler<TEvent, infer TContext, infer TResult> ?
    (event: TEvent, context: TContext, callback: Callback<TResult>, services: TServices, next: T) => void | Promise<TResult | Error | unknown> :
    never;

export type AsyncHandler = AsyncBasicHandler & AsyncLambdaHandler;

export type AsyncMiddleware<T = never> =
    AsyncBasicMiddleware |
    AsyncBasicMiddlewareWithServices |
    AsyncLambdaMiddleware |
    AsyncLambdaMiddlewareWithServices |
    T;

export function buildPipeline(functions: Array<AsyncMiddleware<any>>, services?: Record<string, any>, index?: number): AsyncHandler;
