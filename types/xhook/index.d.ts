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

// eslint-disable-next-line @typescript-eslint/ban-types
export type ResponseType = ArrayBuffer | Document | Blob | Object | string;

export interface Response<T extends ResponseType = string> {
    status: number;
    statusText: string;
    text: string;
    headers: Record<string, string>;
    xml: XMLDocument;
    data: T;
}

export interface EffectBeforeHandler {
    (request: Request): void;
}

export interface EagerBeforeHandler<T extends ResponseType = string> {
    (request: Request): Response<T>;
}

export interface AsyncEagerBeforeHandler<T extends ResponseType = string> {
    (request: Request, callback: (response?: Response<T>) => void): void;
}

export type BeforeHandler<T extends ResponseType = string> =
    | EffectBeforeHandler
    | EagerBeforeHandler<T>
    | AsyncEagerBeforeHandler<T>;

export interface EffectAfterHandler<T extends ResponseType = string> {
    (request: Request, response: Response<T>): void;
}
export interface AsyncEffectAfterHandler<T extends ResponseType = string> {
    (request: Request, response: Response<T>, callback: () => void): void;
}
export type AfterHandler<T extends ResponseType = string> = EffectAfterHandler<T> | AsyncEffectAfterHandler<T>;

type XHook = {
    enable: () => void;
    disable: () => void;
    before: <T extends ResponseType = string>(handler: BeforeHandler<T>, index?: number) => void;
    after: <T extends ResponseType = string>(handler: AfterHandler<T>, index?: number) => void;
};

declare const xhook: XHook;

export default xhook;
