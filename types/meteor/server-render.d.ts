import * as http from 'http';
declare module 'meteor/server-render' {
    interface Sink {
        request?: http.IncomingMessage | undefined;
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
        getHeaders?(): http.IncomingHttpHeaders;
        getCookies?(): { [key: string]: string };
    }

    type Callback = (sink: Sink) => Promise<any> | any;
    export function onPageLoad<T extends Callback>(callback: T): T;
}
