// Type definitions for raven-for-redux 1.1.1
// Project: https://github.com/captbaritone/raven-for-redux
// Definitions by: Daniel Chiu <https://github.com/chiubaka/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Action, Middleware } from "redux";
import * as Raven from "raven-js";

export = createRavenMiddleware;

declare function createRavenMiddleware<T>(raven: Raven.RavenStatic, options?: createRavenMiddleware.RavenMiddlewareOptions<T>): Middleware;

declare namespace createRavenMiddleware {
    interface RavenUserContext {
        id?: string;
        username?: string;
        email?: string;
    }

    interface RavenMiddlewareOptions<T> {
        breadcrumbDataFromAction?: (action: Action) => any;
        actionTransformer?: (action: Action) => Action;
        stateTransformer?: (state: T) => T;
        breadcrumbCategory?: string;
        filterBreadcrumbActions?: (action: Action) => boolean;
        getUserContext?: (state: T) => RavenUserContext;
    }
}
