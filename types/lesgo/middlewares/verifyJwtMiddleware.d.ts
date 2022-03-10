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

export function token(headers: Record<string, string>): string;

export function verifyJwtMiddlewareBeforeHandler(
    handler: middy.HandlerLambda<JwtGatewayEvent>,
    next: middy.NextFunction,
): void;

export default function verifyJwtMiddleware(): VerifyJwtMiddleware;
