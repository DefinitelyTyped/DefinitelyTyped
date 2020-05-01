// Type definitions for non-npm package Node.js 11.15
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
//                 Jeremie Rodriguez <https://github.com/jeremiergz>
//                 Samuel Ainsworth <https://github.com/samuela>
//                 Kyle Uehlein <https://github.com/kuehlein>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
//                 Ivan Sieder <https://github.com/ivansieder>
//                 Minh Son Nguyen <https://github.com/nguymin4>
//                 ExE Boss <https://github.com/ExE-Boss>
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
    displayErrors?: boolean;
    timeout?: number;
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
export class Script {
    constructor(code: string, options?: ScriptOptions);
    runInContext(contextifiedSandbox: Context, options?: RunningScriptOptions): any;
    runInNewContext(sandbox?: Context, options?: RunningScriptOptions): any;
    runInThisContext(options?: RunningScriptOptions): any;
}
export function createContext(sandbox?: Context): Context;
export function isContext(sandbox: Context): boolean;
export function runInContext(code: string, contextifiedSandbox: Context, options?: RunningScriptOptions | string): any;
export function runInNewContext(code: string, sandbox?: Context, options?: RunningScriptOptions | string): any;
export function runInThisContext(code: string, options?: RunningScriptOptions | string): any;
export function compileFunction(code: string, params?: ReadonlyArray<string>, options?: CompileFunctionOptions): Function;
