interface RequestParameters {
    url: string;
    headers?: { [key: string]: string } | undefined;
    body?: string | FormData | undefined;
    method?: string | undefined;
    cors?: boolean | undefined;
}

interface Callback {
    (statusCode: number, response: string, request: XMLHttpRequest): any;
}

export declare function ajax(params: RequestParameters, callback: Callback): XMLHttpRequest;
