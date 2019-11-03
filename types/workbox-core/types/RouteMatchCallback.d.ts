export interface RouteMatchCallback<R = void> {
    (options: RouteMatchCallbackOptions): R;
}

export interface RouteMatchCallbackOptions {
    request: Request;
    url: URL;
    event?: ExtendableEvent;
}
