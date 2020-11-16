export type RouteMatchCallback<R = any> = (options: RouteMatchCallbackOptions) => R;

export interface RouteMatchCallbackOptions {
    url: URL;
    event?: ExtendableEvent;
    request?: Request;
}
