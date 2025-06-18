import * as Redux from "redux";

interface immutableStateInvariantMiddlewareOptions {
    isImmutable?: ((value: any) => boolean) | undefined;
    ignore?: string[] | undefined;
}
type immutableStateInvariantMiddlewareInterface = (
    options?: immutableStateInvariantMiddlewareOptions,
) => Redux.Middleware;
declare let immutableStateInvariantMiddleware: immutableStateInvariantMiddlewareInterface;
export default immutableStateInvariantMiddleware;
