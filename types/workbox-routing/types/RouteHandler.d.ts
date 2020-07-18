export type RouteHandler = RouteHandlerCallback | RouteHandlerObject;

export interface RouteHandlerObject {
    handle: RouteHandlerCallback;
}

export type RouteHandlerCallback = (context: RouteHandlerCallbackContext) => Promise<Response>;

export interface RouteHandlerCallbackContext {
    url: URL;
    event?: FetchEvent;
    params?: string[] | Record<string, string>;
    request?: Request;
}
