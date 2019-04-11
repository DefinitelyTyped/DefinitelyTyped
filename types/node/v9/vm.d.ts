declare module "vm" {
    export interface Context {
        [key: string]: any;
    }
    export interface ScriptOptions {
        filename?: string;
        lineOffset?: number;
        columnOffset?: number;
        displayErrors?: boolean;
        timeout?: number;
        cachedData?: Buffer;
        produceCachedData?: boolean;
    }
    export interface RunningScriptOptions {
        filename?: string;
        lineOffset?: number;
        columnOffset?: number;
        displayErrors?: boolean;
        timeout?: number;
    }
    export class Script {
        constructor(code: string, options?: ScriptOptions);
        runInContext(contextifiedSandbox: Context, options?: RunningScriptOptions): any;
        runInNewContext(sandbox?: Context, options?: RunningScriptOptions): any;
        runInThisContext(options?: RunningScriptOptions): any;
    }
    export function createContext(sandbox?: Context): Context;
    export function isContext(sandbox: Context): boolean;
    export function runInContext(code: string, contextifiedSandbox: Context, options?: RunningScriptOptions | string): any;
    /** @deprecated */
    export function runInDebugContext(code: string): any;
    export function runInNewContext(code: string, sandbox?: Context, options?: RunningScriptOptions | string): any;
    export function runInThisContext(code: string, options?: RunningScriptOptions | string): any;
}
