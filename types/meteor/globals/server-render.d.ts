// NodeJS.ReadableStream only works on server.
// HTMLElement only works on client.
declare type Content = string | Content[] | NodeJS.ReadableStream | HTMLElement;

declare interface ClientSink {
    // Client and server. Only client
    appendToHead(html: Content): void;
    appendToBody(html: Content): void;
    appendToElementById(id: string, html: Content): void;
    renderIntoElementById(id: string, html: Content): void;
    redirect(location: string, code?: number): void;

    // Server-only, but error-raising stubs provided to client:
    setStatusCode(code: number): void;
    setHeader(key: string, value: number | string | string[]): void;
    getHeaders(): { [key: string]: string | string[] };
    getCookies(): { [key: string]: string };
}

declare interface ServerSink extends ClientSink {
    // Server-only:
    request: unknown;
    arch: string;
    head: string;
    body: string;
    htmlById: { [key: string]: string };
    maybeMadeChanges: boolean;
}

declare type Sink = ClientSink | ServerSink;
declare type Callback = (sink: Sink) => Promise<any> | any;
declare function onPageLoad<T extends Callback>(callback: T): T;
