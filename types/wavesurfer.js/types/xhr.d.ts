export interface XHROptions {
    url?: string | undefined;
    method?: string | undefined;
    mode?: string | undefined;
    credentials?: string | undefined;
    cache?: string | undefined;
    responseType?: "arraybuffer" | "blob" | "json" | "text" | undefined;
    requestHeaders?: XHRRequestHeader[] | undefined;
    redirect?: string | undefined;
    referrer?: string | undefined;
    withCredentials?: boolean | undefined;
}

export interface XHRRequestHeader {
    key: string;
    value: string;
}
