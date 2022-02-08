export type RouteHandler = RouteHandlerCallback | RouteHandlerObject;

export interface RouteHandlerObject {
    handle: RouteHandlerCallback;
}

export type RouteHandlerCallback = (context: RouteHandlerCallbackContext) => Promise<Response>;

export interface RouteHandlerCallbackContext {
    url: URL;
    event?: FetchEvent | undefined;
    params?: string[] | Record<string, string> | undefined;
    request?: Request | undefined;
}
