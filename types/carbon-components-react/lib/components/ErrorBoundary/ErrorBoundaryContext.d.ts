import * as React from "react";

export interface ErrorBoundaryContextValue {
    log: React.ComponentLifecycle<unknown, unknown>["componentDidCatch"],
}

export declare const ErrorBoundaryContext: React.Context<ErrorBoundaryContextValue>;
