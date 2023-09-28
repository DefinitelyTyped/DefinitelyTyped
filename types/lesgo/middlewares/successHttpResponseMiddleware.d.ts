import middy from "@middy/core";
import AuroraDbRDSProxyService from "../services/AuroraDbRDSProxyService";
import AuroraDbService from "../services/AuroraDbService";
import { HttpMiddlewareOptions } from "./httpMiddleware";
import { HttpGatewayEvent } from "./normalizeHttpRequestMiddleware";

export interface SuccessHttpMiddleware {
    after: middy.MiddlewareFunction<HttpGatewayEvent, any>;
}

export interface SuccessHttpMiddlewareOptions extends HttpMiddlewareOptions {
    zipWhenRequest?: Array<"ELB" | "APIGATEWAY">;
}

export function successHttpResponseAfterHandler(
    handler: middy.HandlerLambda<HttpGatewayEvent>,
    next: middy.NextFunction,
    opts?: SuccessHttpMiddlewareOptions,
): void;

export function successHttpResponseHandler(opts?: SuccessHttpMiddlewareOptions): any;

export default function successHttpResponseMiddleware(opts?: SuccessHttpMiddlewareOptions): SuccessHttpMiddleware;
