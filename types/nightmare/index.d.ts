// Type definitions for Nightmare 2.10.1
// Project: https://github.com/segmentio/nightmare
// Definitions by: horiuchi <https://github.com/horiuchi>
//                 Sam Yang <https://github.com/samyang-au>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

declare class Nightmare {
    constructor(options?: Nightmare.IConstructorOptions);

    // Interact
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
    wait<T1, T2, T3, T4, T5>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => any, value1: T1, value2: T2, value3: T3, value4: T4, value5: T5): Nightmare;
    wait<T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => any, value1: T1, value2: T2, value3: T3, value4: T4): Nightmare;
    wait<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3) => any, value1: T1, value2: T2, value3: T3): Nightmare;
    wait<T1, T2>(fn: (arg1: T1, arg2: T2) => any, value1: T1, value2: T2): Nightmare;
    wait<T1>(fn: (arg1: T1) => any, value1: T1): Nightmare;
    wait(fn: () => any, value: any, delay?: number): Nightmare;
    wait(fn: () => any): Nightmare;
    wait(ms: number): Nightmare;
    wait(selector: string): Nightmare;
    wait(): Nightmare;
    header(header: string, value: string): Nightmare;
    use(plugin: (nightmare: Nightmare) => void): Nightmare;
    run(cb?: (err: any, nightmare: Nightmare) => void): Nightmare;

    // Extract
    exists(selector: string, cb?: (result: boolean) => void): Nightmare;
    visible(selector: string, cb?: (result: boolean) => void): Nightmare;
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
    pdf(cb: (err: Error, data: Buffer) => void): Nightmare;
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
        waitTimeout?:number | undefined //in ms
        gotoTimeout?:number | undefined
        pollInterval?:number | undefined
        executionTimeout?:number | undefined
        interval?: any; // number | string;
        port?: number | undefined;
        weak?: boolean | undefined;
        loadImages?: boolean | undefined;
        ignoreSslErrors?: boolean | undefined;
        sslProtocol?: string | undefined;
        webSecurity?: boolean | undefined;
        proxy?: string | undefined;
        proxyType?: string | undefined;
        proxyAuth?: string | undefined;
        cookiesFile?: string | undefined;
        phantomPath?: string | undefined;
        show?: boolean | undefined;
        paths?: {
            downloads?:string | undefined;
        } | undefined;
        maxDownloadRequestWait?:number | undefined;
        ignoreDownloads?:boolean | undefined;
        typeInterval?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        electronPath?: string | undefined;
        openDevTools?: {
            /**
             * Opens the devtools with specified dock state, can be right, bottom, undocked, detach.
             * https://github.com/electron/electron/blob/master/docs/api/web-contents.md#contentsopendevtoolsoptions
             */
            mode?: string | undefined;
        } | undefined;
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
        function?: string | undefined;
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
        url?: string | undefined;
        name?: string | undefined;
        domain?: string | undefined;
        path?: string | undefined;
        secure?: boolean | undefined;
        session?: boolean | undefined;

    }
    export interface ICookie {
        name: string;
        value: string;
        url?: string | undefined
        domain?: string | undefined;
        hostOnly?: boolean | undefined;
        path?: string | undefined;
        secure?: boolean | undefined;
        httpOnly?: boolean | undefined;
        session?: boolean | undefined;
        expirationDate?: number | undefined;
    }
}

export = Nightmare;
