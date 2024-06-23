import { APIGatewayEvent } from "aws-lambda";
import { MiddlewareFunction } from "middy";

export interface HttpGatewayEvent extends APIGatewayEvent {
    input?: Record<string, any> | null | string;
    auth?: {
        sub?: Record<string, any> | null;
    };
}

export interface NormalizeHttpMiddleware {
    before: MiddlewareFunction<HttpGatewayEvent, any>;
}

export default function normalizeHttpRequestMiddleware(): NormalizeHttpMiddleware;
