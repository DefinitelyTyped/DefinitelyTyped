import { MiddlewareFunction } from 'middy';
import { APIGatewayEvent } from 'aws-lambda';

export interface JwtGatewayEvent extends APIGatewayEvent {
    decodedJwt?: {
        sub?: number;
    };
}

export interface VerifyJwtMiddleware {
    before: MiddlewareFunction<JwtGatewayEvent, any>;
}

export default function verifyJwtMiddleware(): VerifyJwtMiddleware;
