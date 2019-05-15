// Type definitions for redux-immutable-state-invariant 2.1
// Project: https://github.com/leoasis/redux-immutable-state-invariant
// Definitions by: Remo H. Jansen <https://github.com/remojansen>, Ben Rogers <https://github.com/highflying>, Mihai Dinculescu <https://github.com/mihai-dinculescu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Redux from "redux";

type isImmutableDefault = (value: any) => boolean;
type immutableStateInvariantMiddlewareInterface = (isImmutable?: isImmutableDefault) => Redux.Middleware;
declare let immutableStateInvariantMiddleware: immutableStateInvariantMiddlewareInterface;
export default immutableStateInvariantMiddleware;
