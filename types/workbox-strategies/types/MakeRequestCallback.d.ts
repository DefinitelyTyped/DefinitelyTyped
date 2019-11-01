export interface MakeRequestCallback {
    (options: MakeRequestCallbackOptions): Promise<Response>;
}

export interface MakeRequestCallbackOptions {
    request: Request | string;
    event?: ExtendableEvent;
    params?: string[] | Record<string, string>;
    url?: URL;
}
