// Type definitions for Nightmare 1.6.5
// Project: https://github.com/segmentio/nightmare
// Definitions by: horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "nightmare" {

  class Nightmare {
    constructor(options?: Nightmare.IConstructorOptions);

    // Interact
    goto(url: string): Nightmare;
    back(): Nightmare;
    forward(): Nightmare;
    refresh(): Nightmare;
    click(selector: string): Nightmare;
    type(selector: string, text: string): Nightmare;
    upload(selector: string, path: string): Nightmare;
    scrollTo(top: number, left: number): Nightmare;
    inject(type: string, file: string): Nightmare;
    evaluate(fn: () => void): Nightmare;
    evaluate<R>(fn: () => R, cb: (result: R) => void): Nightmare;
    evaluate<T>(fn: (arg: T) => void, cb: () => void, arg: T): Nightmare;
    evaluate<T, R>(fn: (arg: T) => R, cb: (result: R) => void, arg: T): Nightmare;
    evaluate<T1, T2, R>(fn: (arg1: T1, arg2: T2) => R, cb: (result: R) => void, arg1: T1, arg2: T2): Nightmare;
    evaluate<T1, T2, T3, R>(fn: (arg1: T1, arg2: T2, arg3: T3) => R, cb: (result: R) => void, arg1: T1, arg2: T2, arg3: T3): Nightmare;
    wait(): Nightmare;
    wait(ms: number): Nightmare;
    wait(selector: string): Nightmare;
    wait(fn: () => any, value: any, delay?: number): Nightmare;
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
    screenshot(path: string): Nightmare;
    pdf(path: string): Nightmare;
    title(cb: (title: string) => void): Nightmare;
    url(cb: (url: string) => void): Nightmare;

    // Settings
    authentication(user: string, password: string): Nightmare;
    useragent(useragent: string): Nightmare;
    viewport(width: number, height: number): Nightmare;
    zoom(zoomFactor: number): Nightmare;
    headers(headers: Object): Nightmare;
  }

  module Nightmare {
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
  }

  export = Nightmare;
}

