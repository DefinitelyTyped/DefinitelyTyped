import { APIGatewayEvent } from 'aws-lambda';
import { NormalizeHttpMiddleware } from './normalizeHttpRequestMiddleware';
import { SuccessHttpMiddleware } from './successHttpResponseMiddleware';
import { ErrorHttpMiddleware } from './errorHttpResponseMiddleware';
import AuroraDbService from '../services/AuroraDbService';
import AuroraDbRDSProxyService from '../services/AuroraDbRDSProxyService';

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

export default function httpMiddleware(opts?: HttpMiddlewareOptions): HttpMiddleware;
