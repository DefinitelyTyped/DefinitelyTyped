// Type definitions for Nightmare 2.10.0
// Project: https://github.com/segmentio/nightmare
// Definitions by: horiuchi <https://github.com/horiuchi>
//                 Sam Yang <https://github.com/samyang-au>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

declare class Nightmare {
    constructor(options?: Nightmare.IConstructorOptions);

    // Interact
    userAgent(agent: string): Nightmare;
    end(): Nightmare;
    then<T, R>(fn: (value: T) => R): Promise<R>;
    halt(error: string, cb: () => void): Nightmare;
    goto(url: string): Nightmare;
    goto(url: string, headers: Object): Nightmare;
    back(): Nightmare;
    forward(): Nightmare;
    refresh(): Nightmare;
    click(selector: string): Nightmare;
    mousedown(selector: string): Nightmare;
    mouseup(selector: string): Nightmare;
    mouseover(selector: string): Nightmare;
    type(selector: string, text: string): Nightmare;
    insert(selector: string, text: string): Nightmare;
    check(seletor: string): Nightmare;
    uncheck(seletor: string): Nightmare;
    select(seletor: string, option: string): Nightmare;
    upload(selector: string, path: string): Nightmare;
    download(path:string): Nightmare;
    download(action: "cancel" | "continue"): Nightmare;
    scrollTo(top: number, left: number): Nightmare;
    viewport(width: number, height: number): Nightmare;
    inject(type: string, file: string): Nightmare;
    evaluate<T1, T2, T3, R>(fn: (arg1: T1, arg2: T2, arg3: T3) => R, cb: (result: R) => void, arg1: T1, arg2: T2, arg3: T3): Nightmare;
    evaluate<T1, T2, R>(fn: (arg1: T1, arg2: T2) => R, cb: (result: R) => void, arg1: T1, arg2: T2): Nightmare;
    evaluate<T, R>(fn: (arg: T) => R, cb: (result: R) => void, arg: T): Nightmare;
    evaluate<T>(fn: (arg: T) => void, cb: () => void, arg: T): Nightmare;
    evaluate<R>(fn: () => R, cb: (result: R) => void): Nightmare;
    evaluate(fn: () => void): Nightmare;
    wait(): Nightmare;
    wait(ms: number): Nightmare;
    wait(selector: string): Nightmare;
    wait<T>(fn: (arg1: T) => any, value1: T): Nightmare;
    wait<T, U>(fn: (arg1: T, arg2: U) => any, value1: T, value2: U): Nightmare;
    wait<T, U, V>(fn: (arg1: T, arg2: U, arg3: V) => any, value1: T, value2: U, value3: V): Nightmare;
    wait<T, U, V, W>(fn: (arg1: T, arg2: U, arg3: V, arg4: W) => any, value1: T, value2: U, value3: V, value4: W): Nightmare;
    wait<T, U, V, W, X>(fn: (arg1: T, arg2: U, arg3: V, arg4: W, arg5: X) => any, value1: T, value2: U, value3: V, value4: W, value5: X): Nightmare;
    wait(fn: () => any, value: any, delay?: number): Nightmare;
    header(header: string, value: string): Nightmare;
    use(plugin: (nightmare: Nightmare) => void): Nightmare;
    run(cb?: (err: any, nightmare: Nightmare) => void): Nightmare;

    // Extract
    exists(selector: string, cb: (result: boolean) => void): Nightmare;
    visible(selector: string, cb: (result: boolean) => void): Nightmare;
    on(event: string, cb: () => void): Nightmare;
    on(event: 'initialized', cb: () => void): Nightmare;
    on(event: 'loadStarted', cb: () => void): Nightmare;
    on(event: 'loadFinished', cb: (status: string) => void): Nightmare;
    on(event: 'urlChanged', cb: (targetUrl: string) => void): Nightmare;
    on(event: 'navigationRequested', cb: (url: string, type: string, willNavigate: boolean, main: boolean) => void): Nightmare;
    on(event: 'resourceRequested', cb: (requestData: Nightmare.IRequest, networkRequest: Nightmare.INetwordRequest) => void): Nightmare;
    on(event: 'resourceReceived', cb: (response: Nightmare.IResponse) => void): Nightmare;
    on(event: 'resourceError', cb: (resourceError: Nightmare.IResourceError) => void): Nightmare;
    on(event: 'consoleMessage', cb: (msg: string, lineNumber: number, sourceId: number) => void): Nightmare;
    on(event: 'alert', cb: (msg: string) => void): Nightmare;
    on(event: 'confirm', cb: (msg: string) => void): Nightmare;
    on(event: 'prompt', cb: (msg: string, defaultValue?: string) => void): Nightmare;
    on(event: 'error', cb: (msg: string, trace?: Nightmare.IStackTrace[]) => void): Nightmare;
    on(event: 'timeout', cb: (msg: string) => void): Nightmare;
    once(event: string, cb: () => void): Nightmare;
    once(event: 'initialized', cb: () => void): Nightmare;
    once(event: 'loadStarted', cb: () => void): Nightmare;
    once(event: 'loadFinished', cb: (status: string) => void): Nightmare;
    once(event: 'urlChanged', cb: (targetUrl: string) => void): Nightmare;
    once(event: 'navigationRequested', cb: (url: string, type: string, willNavigate: boolean, main: boolean) => void): Nightmare;
    once(event: 'resourceRequested', cb: (requestData: Nightmare.IRequest, networkRequest: Nightmare.INetwordRequest) => void): Nightmare;
    once(event: 'resourceReceived', cb: (response: Nightmare.IResponse) => void): Nightmare;
    once(event: 'resourceError', cb: (resourceError: Nightmare.IResourceError) => void): Nightmare;
    once(event: 'consoleMessage', cb: (msg: string, lineNumber: number, sourceId: number) => void): Nightmare;
    once(event: 'alert', cb: (msg: string) => void): Nightmare;
    once(event: 'confirm', cb: (msg: string) => void): Nightmare;
    once(event: 'prompt', cb: (msg: string, defaultValue?: string) => void): Nightmare;
    once(event: 'error', cb: (msg: string, trace?: Nightmare.IStackTrace[]) => void): Nightmare;
    once(event: 'timeout', cb: (msg: string) => void): Nightmare;
    removeListener(event: string, cb: () => void): Nightmare;
    removeListener(event: 'initialized', cb: () => void): Nightmare;
    removeListener(event: 'loadStarted', cb: () => void): Nightmare;
    removeListener(event: 'loadFinished', cb: (status: string) => void): Nightmare;
    removeListener(event: 'urlChanged', cb: (targetUrl: string) => void): Nightmare;
    removeListener(event: 'navigationRequested', cb: (url: string, type: string, willNavigate: boolean, main: boolean) => void): Nightmare;
    removeListener(event: 'resourceRequested', cb: (requestData: Nightmare.IRequest, networkRequest: Nightmare.INetwordRequest) => void): Nightmare;
    removeListener(event: 'resourceReceived', cb: (response: Nightmare.IResponse) => void): Nightmare;
    removeListener(event: 'resourceError', cb: (resourceError: Nightmare.IResourceError) => void): Nightmare;
    removeListener(event: 'consoleMessage', cb: (msg: string, lineNumber: number, sourceId: number) => void): Nightmare;
    removeListener(event: 'alert', cb: (msg: string) => void): Nightmare;
    removeListener(event: 'confirm', cb: (msg: string) => void): Nightmare;
    removeListener(event: 'prompt', cb: (msg: string, defaultValue?: string) => void): Nightmare;
    removeListener(event: 'error', cb: (msg: string, trace?: Nightmare.IStackTrace[]) => void): Nightmare;
    removeListener(event: 'timeout', cb: (msg: string) => void): Nightmare;
    screenshot(done?: (err: any, buffer: Buffer) => void): Nightmare;
    screenshot(path: string, done?: (err: any) => void): Nightmare;
    screenshot(clip: { x: number, y: number, width: number, height: number }, done?: (err: any, buffer: Buffer) => void): Nightmare;
    screenshot(path: string, clip?: { x: number, y: number, width: number, height: number }, done?: (err: any) => void): Nightmare;
    html(path: string, saveType: string): Nightmare;
    html(path: string, saveType: 'HTMLOnly'): Nightmare;
    html(path: string, saveType: 'HTMLComplete'): Nightmare;
    html(path: string, saveType: 'MHTML'): Nightmare;
    pdf(path: string): Nightmare;
    pdf(path: string, options: Object): Nightmare;
    title(): string;
    title(cb: (title: string) => void): Nightmare;
    url(cb: (url: string) => void): Nightmare;
    url(): string;
    path(): string;

    readonly cookies: Nightmare.Cookies;

    // Settings
    authentication(user: string, password: string): Nightmare;
    useragent(useragent: string): Nightmare;
    viewport(width: number, height: number): Nightmare;
    zoom(zoomFactor: number): Nightmare;
    headers(headers: Object): Nightmare;
}

declare namespace Nightmare {
    export interface IConstructorOptions {
        timeout?: any;  // number | string;
        interval?: any; // number | string;
        port?: number;
        weak?: boolean;
        loadImages?: boolean;
        ignoreSslErrors?: boolean;
        sslProtocol?: string;
        webSecurity?: boolean;
        proxy?: string;
        proxyType?: string;
        proxyAuth?: string;
        cookiesFile?: string;
        phantomPath?: string;
        show?: boolean;
        paths?: {
            downloads?:string;
        };
        maxDownloadRequestWait?:number;
        ignoreDownloads?:boolean;
        typeInterval?: number;
        x?: number;
        y?: number;
        openDevTools?: {
            /**
             * Opens the devtools with specified dock state, can be right, bottom, undocked, detach.
             * https://github.com/electron/electron/blob/master/docs/api/web-contents.md#contentsopendevtoolsoptions
             */
            mode?: string;
        };
    }

    export interface IRequest {
        id: number;
        method: string;
        url: string;
        time: Date;
        headers: Object;
    }
    export interface INetwordRequest {
        abort(): void;
        changeUrl(url: string): void;
        setHeader(key: string, value: string): void;
    }
    export interface IResponse {
        id: number;
        url: string;
        time: Date;
        headers: Object;
        bodySize: number;
        contentType: string;
        redirectURL: string;
        stage: string;
        status: number;
        statusText: string;
    }
    export interface IResourceError {
        id: number;
        url: string;
        errorCode: number;
        errorString: string;
    }
    export interface IStackTrace {
        file: string;
        line: number;
        function?: string;
    }
    export class Cookies {
        get(): [Nightmare.ICookie];
        get(name: string): Nightmare.ICookie;
        get(query: Nightmare.ICookieQuery): [Nightmare.ICookie];
        set(name: string, value: string): Nightmare;
        set(cookie: Nightmare.ICookie): Nightmare;
        set(cookies: [Nightmare.ICookie]): Nightmare;
        clear(): Nightmare;
        clear(name: string): Nightmare;
        clearAll(): Nightmare;
    }
    export interface ICookieQuery {
        url?: string;
        name?: string;
        domain?: string;
        path?: string;
        secure?: boolean;
        session?: boolean;

    }
    export interface ICookie {
        name: string;
        value: string;
        url?: string
        domain?: string;
        hostOnly?: boolean;
        path?: string;
        secure?: boolean;
        httpOnly?: boolean;
        session?: boolean;
        expirationDate?: number;
    }
}

export = Nightmare;
