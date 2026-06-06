import * as http from 'http';
declare module 'meteor/server-render' {
    // NodeJS.ReadableStream only works on server.
    // HTMLElement only works on client.
    type Content = string | Content[] | NodeJS.ReadableStream | HTMLElement;

    interface ClientSink {
        // Client and server. Only client
        appendToHead(html: Content): void;
        appendToBody(html: Content): void;
        appendToElementById(id: string, html: Content): void;
        renderIntoElementById(id: string, html: Content): void;
        redirect(location: string, code?: number): void;

        // Server-only, but error-raising stubs provided to client:
        setStatusCode(code: number): void;
        setHeader(key: string, value: number | string | string[]): void;
        getHeaders(): http.IncomingHttpHeaders;
        getCookies(): { [key: string]: string };
    }

    interface ServerSink extends ClientSink {
        // Server-only:
        request: http.IncomingMessage;
        arch: string;
        head: string;
        body: string;
        htmlById: { [key: string]: string };
        maybeMadeChanges: boolean;
    }

    type Sink = ClientSink | ServerSink;
    type Callback = (sink: Sink) => Promise<any> | any;
    export function onPageLoad<T extends Callback>(callback: T): T;
}
