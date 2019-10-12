// Type definitions for non-npm package ineum-browser 1.0
// Project: https://docs.instana.io/products/website_monitoring/api/
// Definitions by: Enzo Volkmann <https://github.com/evolkmann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

// Website Monitoring API from Instana (status: 2019-09-10)

declare function ineum(command: 'key' | 'reportingUrl' | 'page' | 'traceId', value: string): void;
declare function ineum(command: 'user', userId: string, userName?: string, userEmail?: string): void;
declare function ineum(command: 'meta', key: string, value: string): void;
declare function ineum(command: 'autoClearResourceTimings' | 'wrapEventHandlers' | 'wrapTimers', enable: boolean): void;
declare function ineum(command: 'getPageLoadId'): string | undefined;
declare function ineum(command: 'reportError', error: string, opts?: {
    componentStack: string
}): void;
declare function ineum(command: 'ignoreUrls' | 'ignoreErrorMessages' | 'whitelistedOrigins', values: RegExp[]): void;
