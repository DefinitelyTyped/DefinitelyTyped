export type RouteHandler = RouteHandlerCallback | RouteHandlerObject;

export interface RouteHandlerObject {
    handle: RouteHandlerCallback;
}

export interface RouteHandlerCallback {
    (options: RouteHandlerCallbackOptions): Promise<Response>;
}

export interface RouteHandlerCallbackOptions {
    request: Request;
    event?: ExtendableEvent;
    params?: string[] | Record<string, string>;
    url?: URL;
}
