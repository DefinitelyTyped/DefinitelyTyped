// Type definitions for PhantomJS bridge for NodeJS
// Project: https://github.com/sgentle/phantomjs-node
// Definitions by: Random <https://github.com/llRandom/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "phantom" {

  function create(args?: string[]): Promise<PhantomJS>;

  interface PhantomJS {
    createPage(): Promise<WebPage>;
    exit(returnValue?: number): void;
  }

  interface WebPage {
    open(url: string): Promise<string>;
    close(): void;

    get(key: string): Promise<any>;
    set(key: string, value: any): Promise<any>;
    setHeaders(headers: Object): Promise<void>;
    setViewportSize(width: number, height: number): Promise<void>;
    setPaperSize(options: IPaperSizeOptions): Promise<void>;
    setZoomFactor(factor: number): Promise<void>;

    evaluate<R>(callback: () => R): Promise<R>;
    evaluate<T>(callback: (arg: T) => void, arg: T): Promise<void>;
    evaluate<T, R>(callback: (arg: T) => R, arg: T): Promise<R>;
    evaluate<T1, T2, R>(callback: (arg1: T1, arg2: T2) => R, arg1: T1, arg2: T2): Promise<R>;
    evaluate<T1, T2, T3, R>(callback: (arg1: T1, arg2: T2, arg3: T3) => R, arg1: T1, arg2: T2, arg3: T3): Promise<R>;
    includeJs(url: string): Promise<void>;
    injectJs(filename: string): Promise<boolean>;
    sendEvent(mouseEventType: string, mouseX: number, mouseY: number, button?: string): void;
    sendEvent(keyboardEventType: string, key: string, null1?: void, null2?: void, modifier?: number): void;
    uploadFile(selector: string, filename: string): void;

    render(filename: string): Promise<void>;
    render(filename: string, options?: { format?: string; quality?: string; }): Promise<void>;
    renderBase64(type: string): Promise<string>;

    goBack(): void;
    goForward(): void;
    reload(): void;

    getContent(): Promise<string>;
    setContent(html: string, url: string): Promise<string>;
    getCookies(): Promise<{ name: string; value: string; domain?: string; }[]>;
  }

  interface IPaperSizeOptions {
    width?: string;
    height?: string;
    format?: string;
    orientation?: string;
    margin?: any; // string | { top?: string; left?: string; bottom?: string; right?: string;  }
  }
}