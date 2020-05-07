// Type definitions for non-npm package ineum-browser 175.0
// Project: https://docs.instana.io/products/website_monitoring/api/
// Definitions by: Enzo Volkmann <https://github.com/evolkmann>, Benjamin Blackmore <https://github.com/bripkens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

// Website Monitoring API from Instana (status: 2020-04-19)

declare function ineum(command: 'key' | 'reportingUrl' | 'page' | 'traceId', value: string): void;
declare function ineum(command: 'user', userId?: string, userName?: string, userEmail?: string): void;
declare function ineum(command: 'meta', key: string, value: string | number | boolean): void;
declare function ineum(command: 'autoClearResourceTimings' | 'wrapEventHandlers' | 'wrapTimers', enable: boolean): void;
declare function ineum(command: 'trackSessions', sessionInactivityTimeout?: number, sessionTerminationTimeout?: number): void;
declare function ineum(command: 'terminateSession'): void;
declare function ineum(command: 'getPageLoadId'): string | undefined;
declare function ineum(command: 'reportError', error: string, opts?: {
    componentStack: string
}): void;
declare function ineum(command: 'reportEvent', name: string, opts?: {
    duration?: number,
    backendTraceId?: string,
    error?: Error,
    componentStack?: string,
    meta?: {
        [key: string]: string | number | boolean
    },
}): void;
declare function ineum(command: 'ignoreUrls' | 'ignoreErrorMessages' | 'whitelistedOrigins' | 'ignoreUserTimings', values: RegExp[]): void;
