// Type definitions for Frisby 2.0
// Project: https://github.com/vlucas/frisby, http://frisbyjs.com
// Definitions by: Christopher E. Woodland <https://github.com/cwoodland>
//                 Johnny Li <https://github.com/johnny4753>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

/// <reference types='jest'/>

// #region Imports
export import nodeFetch = require('node-fetch'); // Import all definitions from node-fetch.
//#endregion

// #region Joi Methods
// Reference file: https://github.com/hapijs/joi
export import Joi = require("joi");
// #endregion

// #region Frisby FrisbySpec Methods
// Reference file: https://github.com/vlucas/frisby/blob/master/src/frisby/spec.js

// **************************************CHANGE LOG**************************************
// C.E.W. This is an attempt to create some sort of changelog for these types.
// If you make any changes, please try and note those changes in this section.
// If this section gets too long we can always trim it.
// ## 2018-03-05
// ### Changed
// - Update _Frisbyspec.get_, _Frisbyspec.post_, _Frisbyspec.put_, _Frisbyspec.del_, _Frisbyspec.patch_,  _Frisbyspec.fetch_ to allow _params_ to be optional.
// - Update _FrisbySpec.then_ to allow _onRejected_ to be optional.
// **************************************CHANGE LOG**************************************

export class FrisbySpec {
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
    promise(): Promise<nodeFetch.Response>;
    put(url: string, params?: {}): FrisbySpec;
    setup(opts: {}, replace: boolean): FrisbySpec;
    then(onFulfilled: {} | ((...args: any[]) => void), onRejected?: (...args: any[]) => void): FrisbySpec;
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
