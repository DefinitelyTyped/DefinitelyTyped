declare module "util" {
    export interface InspectOptions extends NodeJS.InspectOptions {}
    export function format(format: any, ...param: any[]): string;
    export function debug(string: string): void;
    export function error(...param: any[]): void;
    export function puts(...param: any[]): void;
    export function print(...param: any[]): void;
    export function log(string: string): void;
    export function inspect(object: any, showHidden?: boolean, depth?: number | null, color?: boolean): string;
    export function inspect(object: any, options: InspectOptions): string;
    export function isArray(object: any): object is any[];
    export function isRegExp(object: any): object is RegExp;
    export function isDate(object: any): object is Date;
    export function isError(object: any): object is Error;
    export function inherits(constructor: any, superConstructor: any): void;
    export function debuglog(key: string): (msg: string, ...param: any[]) => void;
    export function isBoolean(object: any): object is boolean;
    export function isBuffer(object: any): object is Buffer;
    export function isFunction(object: any): boolean;
    export function isNull(object: any): object is null;
    export function isNullOrUndefined(object: any): object is null | undefined;
    export function isNumber(object: any): object is number;
    export function isObject(object: any): boolean;
    export function isPrimitive(object: any): boolean;
    export function isString(object: any): object is string;
    export function isSymbol(object: any): object is symbol;
    export function isUndefined(object: any): object is undefined;
    export function deprecate<T extends Function>(fn: T, message: string): T;
}
