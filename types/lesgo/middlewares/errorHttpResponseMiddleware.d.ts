import { MiddlewareFunction } from "middy";
import { HttpGatewayEvent } from "./normalizeHttpRequestMiddleware";
import { MiddlewareOptions } from "./successHttpResponseMiddleware";

export interface ErrorHttpResponse {
    headers: Record<string, string | null>;
    statusCode: number;
    body: string;
}

export interface ErrorHttpMiddleware {
    onError: MiddlewareFunction<HttpGatewayEvent, ErrorHttpResponse>;
}

export default function errorHttpResponseMiddleware(opts?: MiddlewareOptions): ErrorHttpMiddleware;
