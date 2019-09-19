// Type definitions for redux-immutable-state-invariant 2.1
// Project: https://github.com/leoasis/redux-immutable-state-invariant
// Definitions by: Remo H. Jansen <https://github.com/remojansen>
//                 Ben Rogers <https://github.com/highflying>
//                 Mihai Dinculescu <https://github.com/mihai-dinculescu>
//                 Nick Galloway <https://github.com/blackarctic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Redux from "redux";

interface immutableStateInvariantMiddlewareOptions {
    isImmutable?: (value: any) => boolean;
    ignore?: string[];
}
type immutableStateInvariantMiddlewareInterface = (
    options?: immutableStateInvariantMiddlewareOptions,
) => Redux.Middleware;
declare let immutableStateInvariantMiddleware: immutableStateInvariantMiddlewareInterface;
export default immutableStateInvariantMiddleware;
