import { MiddlewareFunction } from "middy";
import { APIGatewayEvent } from "aws-lambda";

export interface JwtGatewayEvent extends APIGatewayEvent {
    decodedJwt?: string;
}

export interface VerifyJwtMiddleware {
    before: MiddlewareFunction<JwtGatewayEvent, {}>;
}

export default function verifyJwtMiddleware(): VerifyJwtMiddleware;
