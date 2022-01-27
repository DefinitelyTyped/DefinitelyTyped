import middy from '@middy/core';
import { APIGatewayEvent } from 'aws-lambda';

export interface JwtGatewayEvent extends APIGatewayEvent {
    decodedJwt?: {
        sub?: number;
    };
}

export interface VerifyJwtMiddleware {
    before: middy.MiddlewareFunction<JwtGatewayEvent, any>;
}

export default function verifyJwtMiddleware(): VerifyJwtMiddleware;
