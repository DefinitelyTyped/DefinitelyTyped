// Type definitions for xhook 1.5
// Project: https://github.com/jpillora/xhook#readme
// Definitions by: Sudarsan Balaji <https://github.com/artfuldev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace xhook {
    interface Request {
        method: string;
        url: string;
        body: string;
        headers: Record<string, string>;
        timeout: number;
        type: string;
        withCredentials: boolean;
    }

    type ResponseType = ArrayBuffer | Document | Blob | object | string;

    interface Response {
        status: number;
        statusText: string;
        text: string;
        headers: Record<string, string>;
        xml: XMLDocument;
        data: ResponseType;
    }

    interface BeforeHandler {
        (request: Request, callback: (response?: Response) => void): Response | void;
    }

    interface AfterHandler {
        (request: Request, response: Response, callback: () => void): void;
    }
}

declare const xhook: {
    enable: () => void;
    disable: () => void;
    before: (handler: xhook.BeforeHandler, index?: number) => void;
    after: (handler: xhook.AfterHandler, index?: number) => void;
};

export = xhook;
