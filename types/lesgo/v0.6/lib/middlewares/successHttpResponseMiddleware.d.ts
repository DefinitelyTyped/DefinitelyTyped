import { MiddlewareFunction } from "middy";
import AuroraDbService from "../services/AuroraDbService";
import { HttpGatewayEvent } from "./normalizeHttpRequestMiddleware";

export interface MiddlewareOptions {
    headers?: Record<string, string>;
    debugMode?: boolean;
    zipWhenRequest?: Array<"ELB" | "APIGATEWAY">;
    db?: AuroraDbService;
}

export interface SuccessHttpMiddleware {
    after: MiddlewareFunction<HttpGatewayEvent, any>;
}

export default function successHttpResponseMiddleware(opts?: MiddlewareOptions): SuccessHttpMiddleware;
