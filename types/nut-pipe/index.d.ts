// Type definitions for nut-pipe 1.1
// Project: https://github.com/nodejs-projects-kenanhancer/nut-pipe
// Definitions by: kenan hancer <https://github.com/kenanhancer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2, Context } from "aws-lambda";

export type AsyncBasicHandler<TContext = any, TResult = any> = (context: TContext) => Promise<TResult>;

export type AsyncLambdaHandler<TEvent = APIGatewayProxyEventV2, TContext = Context, TResult = APIGatewayProxyStructuredResultV2> =
    (event: TEvent, context: Context | TContext) => Promise<APIGatewayProxyStructuredResultV2 | TResult>;

export type AsyncBasicMiddleware<T extends AsyncBasicHandler = AsyncBasicHandler> =
    T extends AsyncBasicHandler<infer TContext, infer TResult> ?
    (context: TContext, next: AsyncBasicHandler<TContext, TResult>) => Promise<TResult> :
    never;

export type AsyncLambdaMiddleware<T extends AsyncLambdaHandler = AsyncLambdaHandler> =
    T extends AsyncLambdaHandler<infer TEvent, infer TContext, infer TResult> ?
    (event: TEvent, context: TContext, next: AsyncLambdaHandler<TEvent, TContext, TResult>) => Promise<TResult> :
    never;

export type AsyncBasicMiddlewareWithServices<T extends AsyncBasicHandler = AsyncBasicHandler> =
    T extends AsyncBasicHandler<infer TContext, infer TResult> ?
    (context: TContext, services: any, next: AsyncBasicHandler<TContext, TResult>) => Promise<TResult> :
    never;

export type AsyncLambdaMiddlewareWithServices<T extends AsyncLambdaHandler = AsyncLambdaHandler> =
    T extends AsyncLambdaHandler<infer TEvent, infer TContext, infer TResult> ?
    (event: TEvent, context: TContext, services: any, next: AsyncLambdaHandler<TEvent, TContext, TResult>) => Promise<TResult> :
    never;

export type AsyncHandler = AsyncBasicHandler & AsyncLambdaHandler;

export type AsyncMiddleware =
    AsyncBasicMiddleware<AsyncHandler> |
    AsyncBasicMiddlewareWithServices<AsyncHandler> |
    AsyncLambdaMiddleware<AsyncHandler> |
    AsyncLambdaMiddlewareWithServices<AsyncHandler>;

export type Middleware = ((...args: any[]) => any);

export function buildPipeline(functions: Middleware[], services?: Record<string, any>, index?: number): Middleware;
