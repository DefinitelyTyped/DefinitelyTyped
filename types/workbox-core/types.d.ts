/**
 * Options passed to a `RouteMatchCallback` function.
 */
export interface RouteMatchCallbackOptions {
    url: URL;
    request: Request;
    event?: ExtendableEvent;
}

/**
 * The "match" callback is used to determine if a `Route` should apply for a
 * particular URL and request. When matching occurs in response to a fetch
 * event from the client, the `event` object is also supplied. However, since
 * the match callback can be invoked outside of a fetch event, matching logic
 * should not assume the `event` object will always be available.
 * 
 * If the match callback returns a truthy value, the matching route's
 * `RouteHandlerCallback` will be invoked immediately. If the value returned
 * is a non-empty array or object, that value will be set on the handler's
 * `options.params` argument.
 */
export interface RouteMatchCallback {
    (options: RouteMatchCallbackOptions): any;
}
