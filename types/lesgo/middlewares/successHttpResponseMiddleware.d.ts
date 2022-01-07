import { MiddlewareFunction } from 'middy';
import { HttpGatewayEvent } from './normalizeHttpRequestMiddleware';
import AuroraDbService from '../services/AuroraDbService';

export interface MiddlewareOptions {
    headers?: Record<string, string>;
    debugMode?: boolean;
    zipWhenRequest?: Array<'ELB' | 'APIGATEWAY'>;
    db?: AuroraDbService;
}

export interface SuccessHttpMiddleware {
    after: MiddlewareFunction<HttpGatewayEvent, any>;
}

export default function successHttpResponseMiddleware(opts?: MiddlewareOptions): SuccessHttpMiddleware;
