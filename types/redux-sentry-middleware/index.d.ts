// Type definitions for redux-sentry-middleware 0.2
// Project: https://github.com/vidit-sh/redux-sentry-middleware#readme, https://github.com/viditisonline/redux-sentry-middleware
// Definitions by: Jan Dolezel <https://github.com/dolezel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { Action, Middleware } from "redux";
import * as Sentry from "@sentry/browser";

declare namespace createSentryMiddleware {
    interface Options<T> {
        breadcrumbDataFromAction?: (action: Action) => any;
        breadcrumbMessageFromAction?: (action: Action) => any;
        actionTransformer?: (action: Action) => any;
        stateTransformer?: (state: T) => any;
        breadcrumbCategory?: string;
        filterBreadcrumbActions?: (action: Action) => boolean;
        getUserContext?: (state: T) => Sentry.User;
        getTags?: (state: T) => Sentry.Event['tags'];
    }
}

// tslint:disable-next-line: no-unnecessary-generics
declare function createSentryMiddleware<T>(sentry: typeof Sentry, options?: createSentryMiddleware.Options<T>): Middleware;
export = createSentryMiddleware;
