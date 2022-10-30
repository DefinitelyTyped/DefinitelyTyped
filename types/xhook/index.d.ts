// Type definitions for xhook 1.5
// Project: https://github.com/jpillora/xhook#readme
// Definitions by: Sudarsan Balaji <https://github.com/artfuldev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Request {
    method: string;
    url: string;
    body: string;
    headers: Record<string, string>;
    timeout: number;
    type: string;
    withCredentials: boolean;
}

export type ResponseType = ArrayBuffer | Document | Blob | object | string;

export interface Response {
    status: number;
    statusText: string;
    text: string;
    headers: Record<string, string>;
    xml: XMLDocument;
    data: ResponseType;
}

export interface BeforeHandler {
    (request: Request, callback: (response?: Response) => void): Response | void;
}

export interface AfterHandler {
    (request: Request, response: Response, callback: () => void): void;
}

interface XHook {
    enable: () => void;
    disable: () => void;
    before: (handler: BeforeHandler, index?: number) => void;
    after: (handler: AfterHandler, index?: number) => void;
}

declare const xhook: XHook;

export default xhook;
