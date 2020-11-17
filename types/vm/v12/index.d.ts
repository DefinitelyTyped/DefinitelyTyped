// Type definitions for non-npm package Node.js 12.19
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Alexander T. <https://github.com/a-tarasyuk>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Benjamin Toueg <https://github.com/btoueg>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Chigozirim C. <https://github.com/smac89>
//                 David Junger <https://github.com/touffy>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Eugene Y. Q. Shen <https://github.com/eyqs>
//                 Flarna <https://github.com/Flarna>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Huw <https://github.com/hoo29>
//                 Kelvin Jin <https://github.com/kjin>
//                 Klaus Meinhardt <https://github.com/ajafff>
//                 Lishude <https://github.com/islishude>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 Mohsen Azimi <https://github.com/mohsen1>
//                 Nicolas Even <https://github.com/n-e>
//                 Nikita Galkin <https://github.com/galkin>
//                 Parambir Singh <https://github.com/parambirs>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Simon Schick <https://github.com/SimonSchick>
//                 Thomas den Hollander <https://github.com/ThomasdenH>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Zane Hannan AU <https://github.com/ZaneHannanAU>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Marcin Kopacz <https://github.com/chyzwar>
//                 Trivikram Kamat <https://github.com/trivikr>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 Junxiao Shi <https://github.com/yoursunny>
//                 Ilia Baryshnikov <https://github.com/qwelias>
//                 ExE Boss <https://github.com/ExE-Boss>
//                 Jason Kwok <https://github.com/JasonHK>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer } from 'buffer';

export {};

export interface Context {
    [key: string]: any;
}
export interface BaseOptions {
    /**
     * Specifies the filename used in stack traces produced by this script.
     * Default: `''`.
     */
    filename?: string;
    /**
     * Specifies the line number offset that is displayed in stack traces produced by this script.
     * Default: `0`.
     */
    lineOffset?: number;
    /**
     * Specifies the column number offset that is displayed in stack traces produced by this script.
     * Default: `0`
     */
    columnOffset?: number;
}
export interface ScriptOptions extends BaseOptions {
    displayErrors?: boolean;
    timeout?: number;
    cachedData?: Buffer;
    produceCachedData?: boolean;
}
export interface RunningScriptOptions extends BaseOptions {
    /**
     * When `true`, if an `Error` occurs while compiling the `code`, the line of code causing the error is attached to the stack trace.
     * Default: `true`.
     */
    displayErrors?: boolean;
    /**
     * Specifies the number of milliseconds to execute code before terminating execution.
     * If execution is terminated, an `Error` will be thrown. This value must be a strictly positive integer.
     */
    timeout?: number;
    /**
     * If `true`, the execution will be terminated when `SIGINT` (Ctrl+C) is received.
     * Existing handlers for the event that have been attached via `process.on('SIGINT')` will be disabled during script execution, but will continue to work after that.
     * If execution is terminated, an `Error` will be thrown.
     * Default: `false`.
     */
    breakOnSigint?: boolean;
}
export interface CompileFunctionOptions extends BaseOptions {
    /**
     * Provides an optional data with V8's code cache data for the supplied source.
     */
    cachedData?: Buffer;
    /**
     * Specifies whether to produce new cache data.
     * Default: `false`,
     */
    produceCachedData?: boolean;
    /**
     * The sandbox/context in which the said function should be compiled in.
     */
    parsingContext?: Context;

    /**
     * An array containing a collection of context extensions (objects wrapping the current scope) to be applied while compiling
     */
    contextExtensions?: object[];
}

export interface CreateContextOptions {
    /**
     * Human-readable name of the newly created context.
     * @default 'VM Context i' Where i is an ascending numerical index of the created context.
     */
    name?: string;
    /**
     * Corresponds to the newly created context for display purposes.
     * The origin should be formatted like a `URL`, but with only the scheme, host, and port (if necessary),
     * like the value of the `url.origin` property of a URL object.
     * Most notably, this string should omit the trailing slash, as that denotes a path.
     * @default ''
     */
    origin?: string;
    codeGeneration?: {
        /**
         * If set to false any calls to eval or function constructors (Function, GeneratorFunction, etc)
         * will throw an EvalError.
         * @default true
         */
        strings?: boolean;
        /**
         * If set to false any attempt to compile a WebAssembly module will throw a WebAssembly.CompileError.
         * @default true
         */
        wasm?: boolean;
    };
}

export class Script {
    constructor(code: string, options?: ScriptOptions);
    runInContext(contextifiedSandbox: Context, options?: RunningScriptOptions): any;
    runInNewContext(sandbox?: Context, options?: RunningScriptOptions): any;
    runInThisContext(options?: RunningScriptOptions): any;
    createCachedData(): Buffer;
}
export function createContext(sandbox?: Context, options?: CreateContextOptions): Context;
export function isContext(sandbox: Context): boolean;
export function runInContext(code: string, contextifiedSandbox: Context, options?: RunningScriptOptions | string): any;
export function runInNewContext(code: string, sandbox?: Context, options?: RunningScriptOptions | string): any;
export function runInThisContext(code: string, options?: RunningScriptOptions | string): any;
export function compileFunction(code: string, params?: ReadonlyArray<string>, options?: CompileFunctionOptions): Function;
