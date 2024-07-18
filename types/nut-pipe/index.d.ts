import {
    APIGatewayProxyEventV2,
    APIGatewayProxyHandlerV2,
    APIGatewayProxyStructuredResultV2,
    Context,
} from "aws-lambda";

export type AsyncBasicHandler<TContext = any, TResult = any> = (context: TContext) => Promise<TResult | Error>;

export type AsyncBasicMiddleware<T extends AsyncBasicHandler = AsyncBasicHandler> = T extends
    AsyncBasicHandler<infer TContext, infer TResult>
    ? (context: TContext, next: AsyncBasicHandler<TContext, TResult>) => Promise<TResult>
    : never;

export type AsyncLambdaHandler<
    TEvent = APIGatewayProxyEventV2,
    TContext = Context,
    TResult = APIGatewayProxyStructuredResultV2,
> = (event: TEvent, context: TContext) => Promise<TResult | Error>;

export type AsyncLambdaMiddleware<T extends AsyncLambdaHandler = AsyncLambdaHandler> = T extends
    AsyncLambdaHandler<infer TEvent, infer TContext, infer TResult>
    ? (event: TEvent, context: TContext, next: T) => Promise<TResult | Error>
    : never;

export type AsyncBasicMiddlewareWithServices<T extends AsyncBasicHandler = AsyncBasicHandler> = T extends
    AsyncBasicHandler<infer TContext, infer TResult> ? (
        context: TContext,
        services: Record<string, any>,
        next: AsyncBasicHandler<TContext, TResult>,
    ) => Promise<TResult | Error>
    : never;

export type AsyncLambdaMiddlewareWithServices<T extends AsyncLambdaHandler = AsyncLambdaHandler> = T extends
    AsyncLambdaHandler<infer TEvent, infer TContext, infer TResult>
    ? (event: TEvent, context: TContext, services: Record<string, any>, next: T) => Promise<TResult | Error>
    : never;

export type AsyncHandler = AsyncBasicHandler & AsyncLambdaHandler;

export type AsyncMiddleware<T = never> =
    | AsyncBasicMiddleware
    | AsyncBasicMiddlewareWithServices
    | AsyncLambdaMiddleware
    | AsyncLambdaMiddlewareWithServices
    | T;

export function buildPipeline(
    functions: Array<AsyncMiddleware<any>>,
    services?: Record<string, any>,
    index?: number,
): AsyncHandler;
