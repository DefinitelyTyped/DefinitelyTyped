import { APIGatewayEvent } from "aws-lambda";
import { MiddlewareFunction } from "middy";

export interface JwtGatewayEvent extends APIGatewayEvent {
    decodedJwt?: {
        sub?: number;
    };
}

export interface VerifyJwtMiddleware {
    before: MiddlewareFunction<JwtGatewayEvent, any>;
}

export default function verifyJwtMiddleware(): VerifyJwtMiddleware;
