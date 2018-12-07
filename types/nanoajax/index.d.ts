// Type definitions for nanoajax v0.2.4
// Project: https://github.com/yanatan16/nanoajax
// Definitions by: Nathan Cahill <https://github.com/nathancahill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


interface RequestParameters {
    url: string;
    headers?: { [key: string]: string; };
    body?: string | FormData;
    method?: string;
    cors?: boolean;
}

interface Callback {
    (statusCode: number, response: string, request: XMLHttpRequest): any
}

export declare function ajax(params: RequestParameters, callback: Callback): XMLHttpRequest
