export interface MakeRequestCallback {
    (options: MakeRequestCallbackOptions): Promise<Response>;
}

export interface MakeRequestCallbackOptions {
    request: string | Request;
    event?: ExtendableEvent;
}
