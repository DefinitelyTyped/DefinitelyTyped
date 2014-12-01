// Type definitions for PhantomJS bridge for NodeJS 0.7.0
// Project: https://github.com/sgentle/phantomjs-node
// Definitions by: horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "phantom" {

  function create(callback: (ph: PhantomJS) => void): void;
  function create(options: ICreateOptions, callback: (ph: PhantomJS) => void): void;
  function create(arg: string, callback: (ph: PhantomJS) => void): void;
  function create(arg: string, options: ICreateOptions, callback: (ph: PhantomJS) => void): void;
  function create(arg1: string, arg2: string, callback: (ph: PhantomJS) => void): void;
  function create(arg1: string, arg2: string, options: ICreateOptions, callback: (ph: PhantomJS) => void): void;
  function create(arg1: string, arg2: string, arg3: string, callback: (ph: PhantomJS) => void): void;
  function create(arg1: string, arg2: string, arg3: string, options: ICreateOptions, callback: (ph: PhantomJS) => void): void;

  interface PhantomJS {
    createPage(callback: (page: WebPage) => void): void;
    exit(returnValue?: number): void;
    injectJs(filename: string, callback?: (result: boolean) => void): void;

    addCookie(name: string, value: string, domain: string, callback?: (res: boolean) => void): void;
    clearCookies(callback?: () => void): void;
    getCookies(callback: (cookies: { name: string; value: string; domain?: string; }[]) => void): void;
  }

  interface WebPage {
    open(url: string, callback: (status: string) => void): void;
    close(): void;

    get(key: string, callback: (result: any) => void): void;
    set(key: string, value: any, callback?: (result: any) => void): void;
    setHeaders(headers: Object, callback?: () => void): void;
    setViewportSize(width: number, height: number, callback?: () => void): void;
    setPaperSize(options: IPaperSizeOptions, callback?: () => void): void;
    setZoomFactor(factor: number, callback?: () => void): void;

    evaluate(callback: () => void): void;
    evaluate<R>(callback: () => R, returnCallback: (result: R) => void): void;
    evaluate<T>(callback: (arg: T) => void, returnCallback: () => void, arg: T): void;
    evaluate<T, R>(callback: (arg: T) => R, returnCallback: (result: R) => void, arg: T): void;
    evaluate<T1, T2, R>(callback: (arg1: T1, arg2: T2) => R, returnCallback: (result: R) => void, arg1: T1, arg2: T2): void;
    evaluate<T1, T2, T3, R>(callback: (arg1: T1, arg2: T2, arg3: T3) => R, returnCallback: (result: R) => void, arg1: T1, arg2: T2, arg3: T3): void;
    includeJs(url: string, callback?: () => void): void;
    injectJs(filename: string, callback?: (res: boolean) => void): void;
    sendEvent(mouseEventType: string, mouseX: number, mouseY: number, button?: string): void;
    sendEvent(keyboardEventType: string, key: string, null1?: void, null2?: void, modifier?: number): void;
    uploadFile(selector: string, filename: string): void;

    render(filename: string, callback?: () => void): void;
    render(filename: string, options?: { format?: string; quality?: string; }, callback?: () => void): void;
    renderBase64(type: string, callback: (data: string) => void): void;

    goBack(): void;
    goForward(): void;
    reload(): void;

    getContent(callback: (content: string) => void): void;
    setContent(html: string, url: string, callback?: (status: string) => void): void;
    getCookies(callback: (cookies: { name: string; value: string; domain?: string; }[]) => void): void;
  }

  interface ICreateOptions {
    binary?: string;
    hostname?: string;
    path?: string;
    port?: number;
  }
  interface IPaperSizeOptions {
    width?: string;
    height?: string;
    format?: string;
    orientation?: string;
    margin?: any; // string | { top?: string; left?: string; bottom?: string; right?: string;  }
  }

}

