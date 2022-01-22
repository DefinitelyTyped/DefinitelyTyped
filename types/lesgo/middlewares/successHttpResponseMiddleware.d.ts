import middy from '@middy/core';
import { HttpGatewayEvent } from './normalizeHttpRequestMiddleware';
import AuroraDbService from '../services/AuroraDbService';
import AuroraDbRDSProxyService from '../services/AuroraDbRDSProxyService';

export interface MiddlewareOptions {
    headers?: Record<string, string>;
    debugMode?: boolean;
    zipWhenRequest?: Array<'ELB' | 'APIGATEWAY'>;
    db?: AuroraDbService | AuroraDbRDSProxyService;
}

export interface SuccessHttpMiddleware {
    after: middy.MiddlewareFunction<HttpGatewayEvent, any>;
}

export default function successHttpResponseMiddleware(opts?: MiddlewareOptions): SuccessHttpMiddleware;
