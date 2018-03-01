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
export import Joi = require("joi");
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
