// Type definitions for Frisby 2.0
// Project: https://github.com/vlucas/frisby
// Definitions by: Christopher E. Woodland <https://github.com/cwoodland>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types='jasmine'/>

// #region Imports
import { Response } from 'node-fetch'; // Import all definitions from node-fetch.
//#endregion

// #region Joi Methods
// Reference file: https://github.com/hapijs/joi
export namespace Joi {
    const isImmutable: boolean;
    const isJoi: boolean;
    const schemaType: string;
    const version: string;
    function allow(...args: any[]): void;
    function alt(args: any): any;
    function alternatives(args: any): any;
    function any(args: any): any;
    function applyFunctionToChildren(...args: any[]): void;
    function array(args: any): any;
    function assert(value: any, schema: any, message: string): void;
    function attempt(value: any, schema: any, message: string): any;
    function binary(args: any): any;
    function bool(args: any): any;
    function checkOptions(...args: any[]): void;
    function clone(...args: any[]): void;
    function compile(schema: any): any;
    function concat(...args: any[]): void;
    function createError(...args: any[]): void;
    function createOverrideError(...args: any[]): void;
    function date(args: any): any;
    function defaults(fn: any): any;
    function describe(args: any): any;
    function description(...args: any[]): void;
    function disallow(...args: any[]): void;
    function empty(...args: any[]): void;
    function equal(...args: any[]): void;
    function error(...args: any[]): void;
    function example(...args: any[]): void;
    function exist(...args: any[]): void;
    function extend(args: any): any;
    function forbidden(...args: any[]): void;
    function func(args: any): any;
    function invalid(...args: any[]): void;
    function isRef(ref: any): any;
    function label(...args: any[]): void;
    function lazy(fn: any): any;
    function meta(...args: any[]): void;
    function not(...args: any[]): void;
    function notes(...args: any[]): void;
    function number(args: any): any;
    function object(args: any): any;
    function only(...args: any[]): void;
    function optional(...args: any[]): void;
    function options(...args: any[]): void;
    function raw(...args: any[]): void;
    function reach(schema: any, path: any): any;
    function ref(args: any): any;
    function required(...args: any[]): void;
    function strict(...args: any[]): void;
    function string(args: any): any;
    function strip(...args: any[]): void;
    function tags(...args: any[]): void;
    function unit(...args: any[]): void;
    function valid(...args: any[]): void;
    function validate(value: any, args: any): any;
    function when(...args: any[]): void;

    namespace extensionSchema {
        const isImmutable: boolean;
        const isJoi: boolean;
        const schemaType: string;
        function allow(...args: any[]): void;
        function and(...args: any[]): void;
        function applyFunctionToChildren(...args: any[]): void;
        function assert(...args: any[]): void;
        function checkOptions(...args: any[]): void;
        function clone(...args: any[]): void;
        function concat(...args: any[]): void;
        function createError(...args: any[]): void;
        function createOverrideError(...args: any[]): void;
        function describe(...args: any[]): void;
        function description(...args: any[]): void;
        function disallow(...args: any[]): void;
        function empty(...args: any[]): void;
        function equal(...args: any[]): void;
        function error(...args: any[]): void;
        function example(...args: any[]): void;
        function exist(...args: any[]): void;
        function forbidden(...args: any[]): void;
        function forbiddenKeys(...args: any[]): void;
        function invalid(...args: any[]): void;
        function keys(...args: any[]): void;
        function label(...args: any[]): void;
        function length(...args: any[]): void;
        function max(...args: any[]): void;
        function meta(...args: any[]): void;
        function min(...args: any[]): void;
        function nand(...args: any[]): void;
        function not(...args: any[]): void;
        function notes(...args: any[]): void;
        function only(...args: any[]): void;
        function optional(...args: any[]): void;
        function optionalKeys(...args: any[]): void;
        function options(...args: any[]): void;
        function or(...args: any[]): void;
        function pattern(...args: any[]): void;
        function raw(...args: any[]): void;
        function rename(...args: any[]): void;
        function required(...args: any[]): void;
        function requiredKeys(...args: any[]): void;
        function schema(...args: any[]): void;
        function strict(...args: any[]): void;
        function strip(...args: any[]): void;
        function tags(...args: any[]): void;
        function type(...args: any[]): void;
        function unit(...args: any[]): void;
        function unknown(...args: any[]): void;
        function valid(...args: any[]): void;
        function validate(...args: any[]): void;
        function when(...args: any[]): void;
        function without(...args: any[]): void;
        function xor(...args: any[]): void;
    }

    namespace extensionsSchema {
        const isImmutable: boolean;
        const isJoi: boolean;
        const schemaType: string;
        function allow(...args: any[]): void;
        function applyFunctionToChildren(...args: any[]): void;
        function checkOptions(...args: any[]): void;
        function clone(...args: any[]): void;
        function concat(...args: any[]): void;
        function createError(...args: any[]): void;
        function createOverrideError(...args: any[]): void;
        function describe(...args: any[]): void;
        function description(...args: any[]): void;
        function disallow(...args: any[]): void;
        function empty(...args: any[]): void;
        function equal(...args: any[]): void;
        function error(...args: any[]): void;
        function example(...args: any[]): void;
        function exist(...args: any[]): void;
        function forbidden(...args: any[]): void;
        function invalid(...args: any[]): void;
        function items(...args: any[]): void;
        function label(...args: any[]): void;
        function length(...args: any[]): void;
        function max(...args: any[]): void;
        function meta(...args: any[]): void;
        function min(...args: any[]): void;
        function not(...args: any[]): void;
        function notes(...args: any[]): void;
        function only(...args: any[]): void;
        function optional(...args: any[]): void;
        function options(...args: any[]): void;
        function ordered(...args: any[]): void;
        function raw(...args: any[]): void;
        function required(...args: any[]): void;
        function single(...args: any[]): void;
        function sparse(...args: any[]): void;
        function strict(...args: any[]): void;
        function strip(...args: any[]): void;
        function tags(...args: any[]): void;
        function unique(...args: any[]): void;
        function unit(...args: any[]): void;
        function valid(...args: any[]): void;
        function validate(...args: any[]): void;
        function when(...args: any[]): void;
    }
}
// #endregion

// #region Frisby FrisbySpec Methods
// Reference file: https://github.com/vlucas/frisby/blob/master/src/frisby/spec.js
export class FrisbySpec {
    constructor(...args: any[]);
    catch(onRejected?: (error: Error) => void): FrisbySpec;
    del(url: string, params: {}): FrisbySpec;
    done(doneFn: (...args: any[]) => void): FrisbySpec;
    expect(expectName: string, ...args: any[]): FrisbySpec;
    expectNot(expectName: string): FrisbySpec;
    fetch(url: string, params: {}, options?: {}): FrisbySpec;
    fromJSON(json: {}): FrisbySpec;
    get(url: string, params: {}): FrisbySpec;
    getBaseUrl(): string | boolean;
    inspectBody(): FrisbySpec;
    inspectHeaders(): FrisbySpec;
    inspectJSON(): FrisbySpec;
    inspectLog(...args: any[]): FrisbySpec;
    inspectRequest(): FrisbySpec;
    inspectRequestHeaders(): FrisbySpec;
    inspectResponse(): FrisbySpec;
    inspectStatus(): FrisbySpec;
    patch(url: string, params: {}): FrisbySpec;
    post(url: string, params: {}): FrisbySpec;
    promise(): Promise<Response>;
    put(url: string, params: {}): FrisbySpec;
    setup(opts: {}, replace: boolean): FrisbySpec;
    then(onFulfilled: {} | ((...args: any[]) => void), onRejected: (...args: any[]) => void): FrisbySpec;
    timeout(timeout: number): number;
    use(fn: (...args: any[]) => void): FrisbySpec;
    static addExpectHandler(expectName: string, expectFn: (...args: any[]) => any): void;
    static removeExpectHandler(expectName: string): void;
}
// #endregion

// #region General Frisby Methods
// Reference file: https://github.com/vlucas/frisby/blob/master/src/frisby.js

export const version: string;
export function addExpectHandler(expectName: string, expectFn: (...args: any[]) => any): FrisbySpec;
export function baseUrl(url: string): void;
export function create(name: string): void;
export function del(...args: any[]): FrisbySpec;
export function fetch(...args: any[]): FrisbySpec;
export function formData(): FormData;
export function fromJSON(...args: any[]): FrisbySpec;
export function get(...args: any[]): FrisbySpec;
export function globalSetup(opts: {}): void;
export function patch(...args: any[]): FrisbySpec;
export function post(...args: any[]): FrisbySpec;
export function put(...args: any[]): FrisbySpec;
export function removeExpectHandler(expectName: string, expectFn: (...args: any[]) => any): FrisbySpec;
export function setup(...args: any[]): FrisbySpec;
export function timeout(...args: any[]): FrisbySpec;
export function use(...args: any[]): FrisbySpec;
// #endregion
