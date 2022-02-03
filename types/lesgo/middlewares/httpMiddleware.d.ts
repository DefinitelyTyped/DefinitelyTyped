import { APIGatewayEvent } from 'aws-lambda';
import { NormalizeHttpMiddleware } from './normalizeHttpRequestMiddleware';
import { MiddlewareOptions, SuccessHttpMiddleware } from './successHttpResponseMiddleware';
import { ErrorHttpMiddleware } from './errorHttpResponseMiddleware';

export type HttpMiddleware = NormalizeHttpMiddleware & SuccessHttpMiddleware & ErrorHttpMiddleware;

export interface HttpMiddlewareOptions {
    headers?: Record<string, string>;
    debugMode?: boolean;
    zipWhenRequest?: Array<'ELB' | 'APIGATEWAY'>;
    db?: AuroraDbService | AuroraDbRDSProxyService;
    response?: any;
    statusCode?: number;
    event?: any;
}

export default function httpMiddleware(opts?: MiddlewareOptions): HttpMiddleware;
