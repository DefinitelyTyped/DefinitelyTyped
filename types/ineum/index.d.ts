// Type definitions for ineum, the Website Monitoring API from Instana (status: 2019-09-10)
// Project: https://docs.instana.io/products/website_monitoring/api/
// Definitions by: Enzo Volkmann <https://github.com/evolkmann>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function ineum(command: 'key', trackingKey: string): void;
declare function ineum(command: 'reportingUrl', reportingUrl: string): void;
declare function ineum(command: 'page', pageName: string): void;
declare function ineum(command: 'user', userId: string, userName: string, userEmail: string): void;
declare function ineum(command: 'meta', key: string, value: string): void;
declare function ineum(command: 'traceId', traceId: string): void;
declare function ineum(command: 'ignoreUrls', ignoreUrls: RegExp[]): void;
declare function ineum(command: 'autoClearResourceTimings', autoClearResourceTimings: boolean): void;
declare function ineum(command: 'getPageLoadId'): string | undefined;
declare function ineum(command: 'reportError', error: string, opts?: {
    componentStack: string
}): void;
declare function ineum(command: 'ignoreErrorMessages', ignoreErrorMessages: RegExp[]): void;
declare function ineum(command: 'wrapEventHandlers', wrapEventHandlers: boolean): void;
declare function ineum(command: 'wrapTimers', wrapTimers: boolean): void;
declare function ineum(command: 'whitelistedOrigins', whitelistedOrigins: RegExp[]): void;
