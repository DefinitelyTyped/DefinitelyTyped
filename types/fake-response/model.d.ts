import * as express from "express";
import { Middlewares } from "./middlewares";
export declare type UserDB = string | Object | Db[];
export interface Db {
    _d_index?: number;
    data?: string | DataUrl | Object;
    dataType?: DataType;
    routes: string | string[];
    middlewares?: Middleware | Array<Middleware | undefined>;
    delays?: number | number[];
    env?: {
        [key: string]: any;
    };
}
export interface DataUrl {
    url: string;
    config?: object;
}
export declare type DataType = "default" | "file" | "url";
export declare type Middleware = (params: MiddlewareParams) => any;
export interface Config {
    port?: number;
    rootPath?: string;
    env?: string;
    excludeRoutes?: string[];
    middleware?: Middleware | ConfigMiddleware;
    delay?: number | ConfigDelay;
}
export interface ConfigMiddleware extends middlewareAndDelayCommon {
    func: Middleware;
    excludeRoutes?: string[];
}
export interface ConfigDelay extends middlewareAndDelayCommon {
    time: number;
}
interface middlewareAndDelayCommon {
    excludeRoutes?: string[];
    override?: boolean;
}
export interface Globals {
    [key: string]: any;
}
export interface MiddlewareParams {
    req: express.Request;
    res: express.Response;
    next: express.NextFunction;
    data: any;
    globals: Globals;
    locals: Locals;
}
export interface Locals {
    data: any;
    dataType: string;
    specificMiddleware: Middlewares;
    commonMiddleware: Middlewares;
    delay: number;
    fileType: FileType;
    urlType: URLType;
}
export interface FileType {
    url: string;
    data?: any;
    extension?: string;
}
export interface URLType {
    url: string;
    params?: object;
    data?: any;
    headers?: object;
}
export interface Injectors {
    middleware?: Middleware;
    delay?: number;
    routes: string | string[];
}
export interface RouteResult {
    routes: string | string[];
    _d_index: number;
    _s_index: number;
    _r_index?: number;
    status: Status;
    error?: string;
}
export declare type Status = "success" | "failure";
export {};
