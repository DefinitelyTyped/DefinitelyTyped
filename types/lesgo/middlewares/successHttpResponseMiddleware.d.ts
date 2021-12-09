import { MiddlewareFunction } from "middy";
import { HttpGatewayEvent } from "./normalizeHttpRequestMiddleware";

export interface MiddlewareOptions {
    headers?: Record<string, string>;
    debugMode?: boolean;
    zipWhenRequest?: Array<"ELB" | "APIGATEWAY">;
}

export interface SuccessHttpResponse {
    headers: Record<string, string | null>;
    statusCode: number;
    body: string;
    isBase64Encoded: boolean;
}

export interface SuccessHttpMiddleware {
    after: MiddlewareFunction<HttpGatewayEvent, SuccessHttpResponse>;
}

export default function successHttpResponseMiddleware(opts?: MiddlewareOptions): SuccessHttpMiddleware;
