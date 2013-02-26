/// <reference path="jquery.d.ts" />

interface spy {
    called: bool;
    getCall(x: number): any;
    fakeServer: ISinonFakeServer;
    calledOnce: bool;
    calledWith(x: any, message: string): bool;
}

interface IJsonReponse {
    responseCode: number;
    responseHeaders: any;
    responseString: string;
}

interface ISinonFakeServer {
    create(): any;
    restore(): void;
    respondWith(postType: string, relativeUrl: string, x: any): any;
    respond(): any;
}

declare module sinon {
    export function spy(): spy;
    export function spy(fn: Function): spy;
    //export function spy(jquery: JQueryStatic , x: string): spy;
    export function spy(jquery: JQueryStatic , x: any): spy;
    export function spy(obj: Object , methodName: string): spy;
    export var fakeServer: ISinonFakeServer;
    export function stub(x: any, name: string);
    export function useFakeTimers(): void;
}