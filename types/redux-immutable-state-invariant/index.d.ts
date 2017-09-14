// Type definitions for redux-immutable-state-invariant v2.0.0
// Project: https://github.com/leoasis/redux-immutable-state-invariant
// Definitions by: Remo H. Jansen <https://github.com/remojansen>, Ben Rogers <https://github.com/highflying>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="redux" />

import * as Redux from "redux";

type isImmutableDefault = (value: any) => boolean;
type immutableStateInvariantMiddlewareInterface = (isImmutable?: isImmutableDefault) => Redux.Middleware;
declare let immutableStateInvariantMiddleware: immutableStateInvariantMiddlewareInterface;
export default immutableStateInvariantMiddleware;
