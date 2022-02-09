declare interface Sink {
    request?: any | undefined;
    arch?: string | undefined;
    head?: string | undefined;
    body?: string | undefined;
    htmlById?: { [key: string]: string } | undefined;
    maybeMadeChanges?: boolean | undefined;
    appendToHead?(html: string): void;
    appendToBody?(html: string): void;
    appendToElementById?(id: string, html: string): void;
    renderIntoElementById?(id: string, html: string): void;
    renderIntoElementById?(id: string, html: NodeJS.ReadableStream): void;
    redirect?(location: string, code?: number): void;
    setStatusCode?(code: number): void;
    setHeader?(key: string, value: number | string | string[]): void;
    getHeaders?(): any;
    getCookies?(): { [key: string]: string };
}

declare type Callback = (sink: Sink) => Promise<any> | any;
declare function onPageLoad<T extends Callback>(callback: T): T;
