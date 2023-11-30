// 声明模块名及其所包含的内容
declare module 'think-ts-lib' {
    // 导出的函数和变量声明
    export const start: (config?: Record<string, any>) => void;
    export const appConfig: Record<string, any>;
    
    // 导出的接口类型声明
    export interface RouteType {
        get: (url: string, str: string, middleware?: any) => void;
        post: (url: string, str: string, middleware?: any) => void;
        put: (url: string, str: string, middleware?: any) => void;
        delete: (url: string, str: string, middleware?: any) => void;
        group: (prefix: string, callback: any, middleware?: any) => void;
    }
    
    // 导出的类型别名声明
    export type ExceptionType = (msg?: string, errorCode?: number, statusCode?: number) => void;
    export interface Context { [key: string]: any }
    export interface PoolConnection { [key: string]: any }
    
    // 导出的类声明及其方法
    export class Controller {
        ShowSuccess(data?: any, msg?: string, code?: number, statusCode?: number): Object;
        ApiException(msg?: string, errorCode?: number, statusCode?: number): void;
        GetParams(ctx: Context, validate?: boolean, url?: string): Object;
        View(url: string, data?: Object, type?: string): string;
        Log4j(str: string, level?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal'): void;
        Utils: any;
        M(modelPath: string): any;
        Db(tableName?: string, db?: string): any;
        EDb(db?: string): any;
        RDb(db?: string): any;
        MDb(modelName: string, db?: string): any;
    }
    
    // 导出的具名函数声明
    export const ShowSuccess: (data?: any, msg?: string, code?: number, statusCode?: number) => Object;
    export const ApiException: (msg?: string, errorCode?: number, statusCode?: number) => void;
    export const GetParams: (ctx: Context, validate?: boolean, url?: string) => Object;
    export const View: (url: string, data?: Object, type?: string) => string;
    export const Log4j: (str: string, level?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal') => void;
    export const Utils: any;
    export const M: (modelPath: string) => any;
    export const Db: (tableName?: string, db?: string) => any;
    export const EDb: (db?: string) => any;
    export const RDb: (db?: string) => any;
    export const MDb: (modelName: string, db?: string) => any;
}