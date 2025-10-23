import * as Raven from "raven-js";
import { Action, Middleware } from "redux";

export = createRavenMiddleware;

declare function createRavenMiddleware(
    raven: Raven.RavenStatic,
    options?: createRavenMiddleware.RavenMiddlewareOptions<any>,
): Middleware;

declare namespace createRavenMiddleware {
    interface RavenUserContext {
        id?: string | undefined;
        username?: string | undefined;
        email?: string | undefined;
    }

    interface RavenMiddlewareOptions<T> {
        breadcrumbDataFromAction?: ((action: Action) => any) | undefined;
        actionTransformer?: ((action: Action) => Action) | undefined;
        stateTransformer?: ((state: T) => T) | undefined;
        breadcrumbCategory?: string | undefined;
        filterBreadcrumbActions?: ((action: Action) => boolean) | undefined;
        getUserContext?: ((state: T) => RavenUserContext) | undefined;
    }
}
