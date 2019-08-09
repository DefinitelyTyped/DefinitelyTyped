// Type definitions for koa-bouncer 6.0.4
// Project: https://github.com/danneu/koa-bouncer
// Definitions by: maruware <https://github.com/maruware>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Middleware, Context } from 'koa';

declare namespace KoaBouncer {
    export class ValidationError extends Error {
        name: string;
        message: string;
        bouncer: {
            key: string,
            message: string
        }
        constructor(key: string, message: string);
    }

    export class Validator {
        constructor(props: {ctx: Context, key: string, vals: any})
        required(tip?: string): Validator
        optional(): Validator
        check(result: any, tip?: string): Validator
        checkNot(result: any, tip?: string): Validator
        checkPred(pred: any, tip?: string): Validator
        checkNotPred(pred: any, tip?: string): Validator
        tap(f: (arg: any) => any, tip?: string): Validator
        isIn(arr: any[], tip?: string): Validator
        isNotIn(arr: any[], tip?: string): Validator
        isArray(tip?: string): Validator
        eq(otherVal: string, tip?: string): Validator
        gt(otherVal: number, tip?: string): Validator
        gte(otherVal: number, tip?: string): Validator
        lt(otherVal: number, tip?: string): Validator
        lte(otherVal: number, tip?: string): Validator
        isLength(min: number, max: number, tip?: string): Validator
        defaultTo(valueOrFunction: any): Validator
        isString(tip?: string): Validator
        isInt(tip?: string): Validator
        toInt(tip?: string): Validator
        isFiniteNumber(tip?: string): Validator
        toArray(): Validator
        toInts(tip?: string): Validator
        uniq(): Validator
        toBoolean(): Validator
        toDecimal(tip?: string): Validator
        toFloat(tip?: string): Validator
        toFiniteFloat(): Validator
        toString(): Validator
        trim(): Validator
        match(regexp: RegExp, tip?: string): Validator
        notMatch(regexp: RegExp, tip?: string): Validator
        fromJson(tip?: string): Validator
        isAlpha(tip?: string): Validator
        isAlphanumeric(tip?: string): Validator
        isNumeric(tip?: string): Validator
        isAscii(tip?: string): Validator
        isBase64(tip?: string): Validator
        isEmail(tip?: string): Validator
        isHexColor(tip?: string): Validator
        isUuid(tip?: string): Validator
        isJson(tip?: string): Validator
        encodeBase64(tip?: string): Validator
        clamp(min: number, max: number): Validator

        static addMethod(name: string, fn: Function): void;
    }

    interface MiddlewareOption {
        getParams?: (ctx: Context) => any;
        getQuery?: (ctx: Context) => any;
        getBody?: (ctx: Context) => any;
    }

    export function middleware(opts?: MiddlewareOption): Middleware;
    export function isSafeInteger(n: number): boolean;
}

declare module "koa" {
    interface Context {
        vals: any;
        validateBody: (key: string) => KoaBouncer.Validator;
        validateQuery: (key: string) => KoaBouncer.Validator;
        validateParam: (key: string) => KoaBouncer.Validator;
        check: (result: any, tip?: string) => void;
        checkNot: (result: any, tip?: string) => KoaBouncer.Validator;
    }
}
    
export = KoaBouncer;
