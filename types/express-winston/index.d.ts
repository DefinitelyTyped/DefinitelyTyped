// Type definitions for express-winston 3.0
// Project: https://github.com/bithavoc/express-winston#readme
// Definitions by: Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { ErrorRequestHandler, Handler, Request, Response } from 'express';
import * as winston from 'winston';
import * as Transport from 'winston-transport';

export type DynamicMetaFunction = (req: Request, res: Response, err: Error) => object;
export type DynamicLevelFunction = (req: Request, res: Response, err: Error) => string;
export type RequestFilter = (req: Request, propName: string) => boolean;
export type ResponseFilter = (res: Response, propName: string) => boolean;
export type RouteFilter = (req: Request, res: Response) => boolean;

export interface BaseLoggerOptions {
  baseMeta?: object;
  bodyBlacklist?: string[];
  bodyWhitelist?: string[];
  colorize?: boolean;
  dynamicMeta?: DynamicMetaFunction;
  expressFormat?: boolean;
  ignoreRoute?: RouteFilter;
  ignoredRoutes?: string[];
  level?: string | DynamicLevelFunction;
  meta?: boolean;
  metaField?: string;
  msg?: string;
  requestFilter?: RequestFilter;
  requestWhitelist?: string[];
  responseFilter?: ResponseFilter;
  responseWhitelist?: string[];
  skip?: RouteFilter;
  statusLevels?: {
    error?: string;
    success?: string;
    warn?: string;
  };
}

export interface LoggerOptionsWithTransports extends BaseLoggerOptions {
  transports: Transport[];
}

export interface LoggerOptionsWithWinstonInstance extends BaseLoggerOptions {
  winstonInstance: winston.Logger;
}

export type LoggerOptions = LoggerOptionsWithTransports | LoggerOptionsWithWinstonInstance;

export function logger(options: LoggerOptions): Handler;

export interface BaseErrorLoggerOptions {
  baseMeta?: object;
  dynamicMeta?: DynamicMetaFunction;
  level?: string | DynamicLevelFunction;
  metaField?: string;
  msg?: string;
  requestFilter?: RequestFilter;
  requestWhitelist?: string[];
}

export interface ErrorLoggerOptionsWithTransports extends BaseErrorLoggerOptions {
  transports: Transport[];
}

export interface ErrorLoggerOptionsWithWinstonInstance extends BaseErrorLoggerOptions {
  winstonInstance: winston.Logger;
}

export type ErrorLoggerOptions = ErrorLoggerOptionsWithTransports | ErrorLoggerOptionsWithWinstonInstance;

export function errorLogger(options: ErrorLoggerOptions): ErrorRequestHandler;

export let requestWhitelist: string[];

export let bodyWhitelist: string[];

export let bodyBlacklist: string[];

export let responseWhitelist: string[];

export let ignoredRoutes: string[];

export let defaultRequestFilter: RequestFilter;

export let defaultResponseFilter: ResponseFilter;

export function defaultSkip(): boolean;

export interface ExpressWinstonRequest extends Request {
  _routeWhitelists: {
    body: string[];
    req: string[];
    res: string[];
  };
}
