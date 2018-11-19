// Type definitions for redux-sentry-middleware 0.0
// Project: https://github.com/vidit-sh/redux-sentry-middleware#readme
// Definitions by: Jan Dolezel <https://github.com/dolezel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { Action, Middleware } from "redux";
import * as Sentry from "@sentry/browser";

export interface SentryMiddlewareOptions<T> {
    breadcrumbDataFromAction?: (action: Action) => any;
    actionTransformer?: (action: Action) => Action;
    stateTransformer?: (state: T) => T;
    breadcrumbCategory?: string;
    filterBreadcrumbActions?: (action: Action) => boolean;
    getUserContext?: (state: T) => Sentry.User;
    getTags?: (state: T) => Sentry.SentryEvent['tags'];
}

// tslint:disable-next-line: no-unnecessary-generics
export default function createSentryMiddleware<T>(sentry: typeof Sentry, options?: SentryMiddlewareOptions<T>): Middleware;
