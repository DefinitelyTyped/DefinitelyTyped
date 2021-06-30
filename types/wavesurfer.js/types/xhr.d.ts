export interface XHROptions {
    url?: string;
    method?: string;
    mode?: string;
    credentials?: string;
    cache?: string;
    responseType?: "arraybuffer" | "blob" | "json" | "text";
    requestHeaders?: XHRRequestHeader[];
    redirect?: string;
    referrer?: string;
    withCredentials?: boolean;
}

export interface XHRRequestHeader {
    key: string;
    value: string;
}
