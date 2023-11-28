export = XMLHttpRequest;
declare function XMLHttpRequest(options?: XHRConfig): void;
declare class XMLHttpRequest {
    constructor(options?: XHRConfig);
    open(method: string, url: string): void;
    setRequestHeader(header: string, value: string): void;
    send(body?: string | ArrayBuffer): void;
    timeout: number;
    readyState: number;
    status: number;
    statusText: string;
    responseText: string;
    responseType: string;
    response: string | ArrayBuffer | Record<any, any>;
    getResponseHeader(header: string): string;
    getAllResponseHeaders(): string;
    overrideMimeType(mimeType: string): void;
}
declare namespace XMLHttpRequest {
    export { UNSENT, OPENED, HEADERS_RECEIVED, LOADING, DONE, XHRConfig };
}
interface XHRConfig {
    keyPath?: string;
    certPath?: string;
    pfxPath?: string;
    passphrase?: string;
    ignoreSslErrors?: boolean;
    proxy?: string;
}
declare let UNSENT: number;
declare let OPENED: number;
declare let HEADERS_RECEIVED: number;
declare let LOADING: number;
declare let DONE: number;
