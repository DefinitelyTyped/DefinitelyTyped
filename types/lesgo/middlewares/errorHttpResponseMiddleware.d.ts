import middy from '@middy/core';
import { HttpGatewayEvent } from './normalizeHttpRequestMiddleware';
import { HttpMiddlewareOptions } from './httpMiddleware';

export interface ErrorHttpMiddlewareOptions extends HttpMiddlewareOptions {
    logger?: (message: any) => void;
    error?: Error;
}

export interface ErrorHttpMiddleware {
    onError: middy.MiddlewareFunction<HttpGatewayEvent, any>;
}

export function errorHttpResponseAfterHandler(
    handler: middy.HandlerLambda<HttpGatewayEvent>,
    next: middy.NextFunction,
    opts?: ErrorHttpMiddlewareOptions,
): void;

export function errorHttpResponseHandler(opts?: ErrorHttpMiddlewareOptions): any;

export default function errorHttpResponseMiddleware(opts?: ErrorHttpMiddlewareOptions): ErrorHttpMiddleware;
