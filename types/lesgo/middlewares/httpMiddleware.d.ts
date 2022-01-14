import { APIGatewayEvent } from 'aws-lambda';
import { NormalizeHttpMiddleware } from './normalizeHttpRequestMiddleware';
import { MiddlewareOptions, SuccessHttpMiddleware } from './successHttpResponseMiddleware';
import { ErrorHttpMiddleware } from './errorHttpResponseMiddleware';

export type HttpMiddleware = NormalizeHttpMiddleware & SuccessHttpMiddleware & ErrorHttpMiddleware;

export default function httpMiddleware(opts?: MiddlewareOptions): HttpMiddleware;
