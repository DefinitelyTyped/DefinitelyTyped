// Type definitions for express-winston 2.4
// Project: https://github.com/bithavoc/express-winston#readme
// Definitions by: Alex Brick <https://github.com/bricka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { ErrorRequestHandler, Handler, Request, Response } from 'express';
import { TransportInstance, Winston } from 'winston';

export interface MetaObject {
  [field: string]: string;
}

export type DynamicMetaFunction = (req: Request, res: Response, err: Error) => MetaObject | undefined;
export type RequestFilter = (req: Request, propName: string) => boolean;
export type ResponseFilter = (res: Response, propName: string) => boolean;
export type RouteFilter = (req: Request, res: Response) => boolean;

export interface BaseLoggerOptions {
  baseMeta?: MetaObject;
  bodyBlacklist?: string[];
  bodyWhitelist?: string[];
  colorize?: boolean;
  dynamicMeta?: DynamicMetaFunction;
  expressFormat?: boolean;
  ignoreRoute?: RouteFilter;
  ignoredRoutes?: string[];
  level?: string;
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
  transports: TransportInstance[];
}

export interface LoggerOptionsWithWinstonInstance extends BaseLoggerOptions {
  winstonInstance: Winston;
}

export type LoggerOptions = LoggerOptionsWithTransports | LoggerOptionsWithWinstonInstance;

export function logger(options: LoggerOptions): Handler;

export interface BaseErrorLoggerOptions {
  baseMeta?: MetaObject;
  dynamicMeta?: DynamicMetaFunction;
  level?: string;
  metaField?: string;
  msg?: string;
  requestFilter?: RequestFilter;
  requestWhitelist?: string[];
}

export interface ErrorLoggerOptionsWithTransports extends BaseErrorLoggerOptions {
  transports: TransportInstance[];
}

export interface ErrorLoggerOptionsWithWinstonInstance extends BaseErrorLoggerOptions {
  winstonInstance: Winston;
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
