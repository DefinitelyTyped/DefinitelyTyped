import { MiddlewareFunction } from 'middy';
import { HttpGatewayEvent } from './normalizeHttpRequestMiddleware';
import { MiddlewareOptions } from './successHttpResponseMiddleware';

export interface ErrorHttpMiddleware {
    onError: MiddlewareFunction<HttpGatewayEvent, any>;
}

export default function errorHttpResponseMiddleware(opts?: MiddlewareOptions): ErrorHttpMiddleware;
