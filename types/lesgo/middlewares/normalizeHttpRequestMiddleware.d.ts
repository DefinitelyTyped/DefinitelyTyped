import middy from '@middy/core';
import { APIGatewayEvent, Context } from 'aws-lambda';
import { HttpMiddlewareOptions } from './httpMiddleware';

export interface NormalizeHttpMiddlewareOptions extends HttpMiddlewareOptions {
    logger?: (message: any) => void;
    qs?: Record<string, string>;
    body?: string;
}
export interface HttpGatewayEvent extends APIGatewayEvent {
    input?: Record<string, any> | null | string;
    auth?: {
        sub?: Record<string, any> | null;
    };
}

export interface NormalizeHttpMiddleware {
    before: middy.MiddlewareFunction<HttpGatewayEvent, any>;
}

export function normalizeRequest(opts?: NormalizeHttpMiddlewareOptions): any;

export function normalizeHttpRequestBeforeHandler(
    handler: middy.HandlerLambda<HttpGatewayEvent>,
    next: middy.NextFunction,
): void;

export default function normalizeHttpRequestMiddleware(): NormalizeHttpMiddleware;
