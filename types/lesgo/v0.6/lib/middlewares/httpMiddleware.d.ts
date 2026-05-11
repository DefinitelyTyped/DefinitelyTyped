import { APIGatewayEvent, Context } from "aws-lambda";
import { MiddlewareObject } from "middy";
import { ErrorHttpMiddleware } from "./errorHttpResponseMiddleware";
import { NormalizeHttpMiddleware } from "./normalizeHttpRequestMiddleware";
import { MiddlewareOptions, SuccessHttpMiddleware } from "./successHttpResponseMiddleware";

export type HttpMiddleware = NormalizeHttpMiddleware & SuccessHttpMiddleware & ErrorHttpMiddleware;

export default function httpMiddleware(opts?: MiddlewareOptions): HttpMiddleware;
