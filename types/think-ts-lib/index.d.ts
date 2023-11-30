/*
 * @Author: zhangyu
 * @Date: 2023-11-29 19:18:42
 * @LastEditTime: 2023-11-30 21:07:46
 */
export const Utils: any;

export type LEVELS = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

export interface RouteType {
    get: (url: string, str: string, middleware?: any) => void;
    post: (url: string, str: string, middleware?: any) => void;
    put: (url: string, str: string, middleware?: any) => void;
    delete: (url: string, str: string, middleware?: any) => void;
    group: (prefix: string, callback: any, middleware?: any) => void;
}

export interface ThinkObj {
    [key: string]: any;
}

export interface Context {
    [key: string]: any;
}

export interface PoolConnection {
    [key: string]: any;
}

export class Controller {
    ShowSuccess(data?: any, msg?: string, code?: number, statusCode?: number): ThinkObj;
    ApiException(msg?: string, errorCode?: number, statusCode?: number): void;
    GetParams(ctx: Context, validate?: boolean, url?: string): ThinkObj;
    View(url: string, data?: ThinkObj, type?: string): string;
    Log4j(str: string, level?: LEVELS): void;
    Utils: any;
    M(modelPath: string): any;
    Db(tableName?: string, db?: string): any;
    EDb(db?: string): any;
    RDb(db?: string): any;
    MDb(modelName: string, db?: string): any;
    appConfig(): ThinkObj;
}

export function ShowSuccess(data?: any, msg?: string, code?: number, statusCode?: number): ThinkObj;
export function ApiException(msg?: string, errorCode?: number, statusCode?: number): void;
export function GetParams(ctx: Context, validate?: boolean, url?: string): ThinkObj;
export function View(url: string, data?: ThinkObj, type?: string): string;
export function Log4j(str: string, level?: LEVELS): void;
export function M(modelPath: string): any;
export function Db(tableName?: string, db?: string): any;
export function EDb(db?: string): any;
export function RDb(db?: string): any;
export function MDb(modelName: string, db?: string): any;
export function ExceptionType(msg?: string, errorCode?: number, statusCode?: number): void;
export function start(config?: Record<string, any>): void;
export function appConfig(): ThinkObj;
export {};
