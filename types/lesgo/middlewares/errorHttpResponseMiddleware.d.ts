import middy from '@middy/core';
import { HttpGatewayEvent } from './normalizeHttpRequestMiddleware';
import { MiddlewareOptions } from './successHttpResponseMiddleware';

export interface ErrorHttpMiddleware {
    onError: middy.MiddlewareFunction<HttpGatewayEvent, any>;
}

export default function errorHttpResponseMiddleware(opts?: MiddlewareOptions): ErrorHttpMiddleware;
