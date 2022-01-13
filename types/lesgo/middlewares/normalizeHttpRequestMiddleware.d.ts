import middy from '@middy/core';
import { APIGatewayEvent, Context } from 'aws-lambda';

export interface HttpGatewayEvent extends APIGatewayEvent {
    input?: Record<string, any> | null | string;
    auth?: {
        sub?: Record<string, any> | null;
    };
}

export interface NormalizeHttpMiddleware {
    before: middy.MiddlewareFunction<HttpGatewayEvent, any>;
}

export default function normalizeHttpRequestMiddleware(): NormalizeHttpMiddleware;
