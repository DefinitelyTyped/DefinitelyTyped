export interface RouteMatchCallback {
    (options: RouteMatchCallbackOptions): any;
}

export interface RouteMatchCallbackOptions {
    request: Request;
    url: URL;
    event?: ExtendableEvent;
}
