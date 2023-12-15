import { Buffer } from "buffer";

export function isNumber(value?: unknown): value is number;
export function isString(value?: unknown): value is string;
export function isBoolean(value?: unknown): value is boolean;
export function isNull(value?: unknown): value is null;
export function isNullOrUndefined(value?: unknown): value is null | undefined;
export function isUndefined(value?: unknown): value is undefined;
export function isObject(value?: unknown): value is object;
export function isDate(value?: unknown): value is Date;
export function isError(value?: unknown): value is Error;
export function isFunction(value?: unknown): value is (...args: unknown[]) => unknown;
export function isRegExp(value?: unknown): value is RegExp;
export function isArray(value?: unknown): value is unknown[];
export function isSymbol(value?: unknown): value is symbol;
export function isPrimitive(value?: unknown): value is null | undefined | string | number | boolean | symbol;
export function isBuffer(value?: unknown): value is Buffer;
