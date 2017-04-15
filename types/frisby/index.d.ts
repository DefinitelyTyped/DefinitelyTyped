// Type definitions for Frisby v0.8.5
// Project: https://github.com/vlucas/frisby
// Definitions by: Johnny Li <https://github.com/johnny4753/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

///<reference types="jasmine"/>

declare interface Frisby {
    globalSetup(opts: any): any;
    timeout(seconds?: number): Frisby;
    reset(): Frisby;
    not(): Frisby;
    addHeader(key: string, content: string): Frisby;
    addHeaders(headers: object): Frisby;
    removeHeader(key: string): Frisby;
    responseType(type: any): Frisby;
    // HTTP Basic Auth
    auth(username: string, password: string, digest: boolean): Frisby;
    // HTTP Request
    get(uri: string, params?: any): Frisby;
    patch(uri: string, data?: any, params?: any): Frisby;
    post(uri: string, data?: any, params?: any): Frisby;
    put(uri: string, data?: any, params?: any): Frisby;
    delete(uri: string, data?: any, params?: any): Frisby;
    head(uri: string, params?: any): Frisby;
    options(uri: string, params?: any): Frisby;

    expectMaxResponseTime(milliseconds: number): Frisby;
    expectStatus(statusCode: number): Frisby;
    expectHeader(header: string, content: string): Frisby;
    expectHeaderContains(header: string, content: string): Frisby;
    expectHeaderToMatch(header: string, pattern: RegExp): Frisby;
    expectBodyContains(content: string): Frisby;
    expectJSONTypes(json: any): Frisby;
    expectJSONTypes(path: string, json: any): Frisby;
    expectJSON(json: any): Frisby;
    expectJSON(path: string, json: any): Frisby;
    expectJSONSchema(path: string, jsonSchema: any): Frisby;
    expectJSONLength(length: number): Frisby;
    expectJSONLength(path: string, length: number): Frisby;
    inspectRequest(): Frisby;
    inspectResponse(): Frisby;
    inspectHeaders(): Frisby;
    inspectBody(): Frisby;
    inspectJSON(): Frisby;
    inspectStatus(): Frisby;
    retry(count: number, delayInMilliseconds?: number): Frisby;
    waits(delayInMilliseconds: number): Frisby;
    after(callback: (...args: any[]) => void): Frisby;
    afterJSON(callback: (...args: any[]) => void): Frisby;
    exceptionHandler(fn: (...args: any[]) => void): Frisby;
    toss(): void;

    create(msg: string): Frisby;

}

declare global {
    namespace jasmine {
        interface Matchers<T> {
            toMatchOrBeNull(expected: any): boolean;
            toMatchOrBeEmpty(expected: any): boolean;
            toBeType(expected: any): boolean;
            toBeTypeOrNull(expected: any): boolean;
            toBeTypeOrUndefined(expected: any): boolean;
            toContainJson(expected: any, isNot?: boolean): boolean;
            toContainJsonTypes(expected: any, isNot?: boolean): boolean;
        }
    }
}

declare const frisby: Frisby;
export = frisby;

