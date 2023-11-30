type LEVELS = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export function start(config?: Record<string, any>): void;
export const appConfig: Record<string, any>;

export interface RouteType {
    get: (url: string, str: string, middleware?: any) => void;
    post: (url: string, str: string, middleware?: any) => void;
    put: (url: string, str: string, middleware?: any) => void;
    delete: (url: string, str: string, middleware?: any) => void;
    group: (prefix: string, callback: any, middleware?: any) => void;
}

export type ExceptionType = (msg?: string, errorCode?: number, statusCode?: number) => void;

export interface Context {
    [key: string]: any;
}

export interface PoolConnection {
    [key: string]: any;
}

export class Controller {
    ShowSuccess(data?: any, msg?: string, code?: number, statusCode?: number): Object;
    ApiException(msg?: string, errorCode?: number, statusCode?: number): void;
    GetParams(ctx: Context, validate?: boolean, url?: string): Object;
    View(url: string, data?: Object, type?: string): string;
    Log4j(str: string, level?: LEVELS): void;
    Utils: any;
    M(modelPath: string): any;
    Db(tableName?: string, db?: string): any;
    EDb(db?: string): any;
    RDb(db?: string): any;
    MDb(modelName: string, db?: string): any;
}

export function ShowSuccess(data?: any, msg?: string, code?: number, statusCode?: number): Object;
export function ApiException(msg?: string, errorCode?: number, statusCode?: number): void;
export function GetParams(ctx: Context, validate?: boolean, url?: string): Object;
export function View(url: string, data?: Object, type?: string): string;
export function Log4j(str: string, level?: LEVELS): void;
export const Utils: any;
export function M(modelPath: string): any;
export function Db(tableName?: string, db?: string): any;
export function EDb(db?: string): any;
export function RDb(db?: string): any;
export function MDb(modelName: string, db?: string): any;
export {};
