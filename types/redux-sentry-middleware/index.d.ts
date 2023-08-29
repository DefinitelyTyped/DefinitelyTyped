// Type definitions for redux-sentry-middleware 0.2
// Project: https://github.com/vidit-sh/redux-sentry-middleware#readme, https://github.com/viditisonline/redux-sentry-middleware
// Definitions by: Jan Dolezel <https://github.com/dolezel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { Action, Middleware } from "redux";
import * as Sentry from "@sentry/browser";

declare namespace createSentryMiddleware {
    interface Options<T> {
        breadcrumbDataFromAction?: ((action: Action) => any) | undefined;
        breadcrumbMessageFromAction?: ((action: Action) => any) | undefined;
        actionTransformer?: ((action: Action) => any) | undefined;
        stateTransformer?: ((state: T) => any) | undefined;
        breadcrumbCategory?: string | undefined;
        filterBreadcrumbActions?: ((action: Action) => boolean) | undefined;
        getUserContext?: ((state: T) => Sentry.User) | undefined;
        getTags?: ((state: T) => Sentry.Event['tags']) | undefined;
    }
}

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
declare function createSentryMiddleware<T>(sentry: typeof Sentry, options?: createSentryMiddleware.Options<T>): Middleware;
export = createSentryMiddleware;
