import middy from "@middy/core";
import { HttpMiddlewareOptions } from "./httpMiddleware";
import { HttpGatewayEvent } from "./normalizeHttpRequestMiddleware";

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
