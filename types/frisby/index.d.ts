// Type definitions for Frisby 2.0
// Project: https://github.com/vlucas/frisby, http://frisbyjs.com
// Definitions by: Christopher E. Woodland <https://github.com/cwoodland>
//                 Johnny Li <https://github.com/johnny4753>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

export import nodeFetch = require('node-fetch');
export import Joi = require('joi');

export class FrisbySpec<TResult = FrisbyResponse> {
    constructor(...args: any[]);
    catch(onRejected?: (error: Error) => void): FrisbySpec;
    del(url: string, params?: {}): FrisbySpec;
    done(doneFn: (...args: any[]) => void): FrisbySpec;
    expect(expectName: string, ...args: any[]): FrisbySpec;
    expectNot(expectName: string, ...args: any[]): FrisbySpec;
    fetch(url: string, params?: {}, options?: {}): FrisbySpec;
    fromJSON(json: {}): FrisbySpec;
    get(url: string, params?: {}): FrisbySpec;
    getBaseUrl(): string | boolean;
    inspectBody(): FrisbySpec;
    inspectHeaders(): FrisbySpec;
    inspectJSON(): FrisbySpec;
    inspectLog(...args: any[]): FrisbySpec;
    inspectRequest(): FrisbySpec;
    inspectRequestHeaders(): FrisbySpec;
    inspectResponse(): FrisbySpec;
    inspectStatus(): FrisbySpec;
    patch(url: string, params?: {}): FrisbySpec;
    post(url: string, params?: {}): FrisbySpec;
    promise(): Promise<TResult>;
    put(url: string, params?: {}): FrisbySpec;
    setup(opts: {}, replace: boolean): FrisbySpec;
    then<T>(onFulfilled: FrisbySpec<T>): FrisbySpec<T>;
    then<T>(
        onFulfilled: (response: TResult) => T | Promise<T>,
        onRejected?: (...args: any[]) => void,
    ): [T] extends [FrisbySpec<infer U>] ? FrisbySpec<U> : FrisbySpec<T>;
    timeout(timeout: number): number;
    use(fn: (...args: any[]) => void): FrisbySpec;
    static addExpectHandler(expectName: string, expectFn: (...args: any[]) => any): void;
    static removeExpectHandler(expectName: string): void;
}

export interface FrisbyResponse {
    readonly status: nodeFetch.Response['status'];
    readonly body: nodeFetch.Response['body'];
    readonly headers: nodeFetch.Response['headers'];
    readonly json: any;
    readonly responseTime: number;
}

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
