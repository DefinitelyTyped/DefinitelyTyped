// Type definitions for non-npm package ineum-browser 187.0
// Project: https://docs.instana.io/products/website_monitoring/api/
// Definitions by: Enzo Volkmann <https://github.com/evolkmann>
//                 Benjamin Blackmore <https://github.com/bripkens>
//                 David Taylor <https://github.com/dtaylor84>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

// Website Monitoring API from Instana (status: 2020-09-29)

declare function ineum(command: 'key' | 'page' | 'reportingUrl' | 'traceId', value: string): void;

declare function ineum(command: 'user', userId?: string, userName?: string, userEmail?: string): void;

declare function ineum(command: 'meta', key: string, value: string | number | boolean): void;

declare function ineum(command: 'ignorePings' | 'wrapEventHandlers' | 'wrapTimers', value: boolean): void;

declare function ineum(
    command: 'trackSessions',
    sessionInactivityTimeout?: number,
    sessionTerminationTimeout?: number,
): void;

declare function ineum(command: 'terminateSession'): void;

declare function ineum(command: 'getPageLoadId'): string | undefined;

declare function ineum(
    command:
        | 'beaconBatchingTime'
        | 'maxMaitForPageLoadMetricsMillis'
        | 'maxWaitForResourceTimingsMillis'
        | 'xhrTransmissionTimeout',
    durationMillis: number,
): void;

declare function ineum(
    command: 'reportError',
    error: Error | string,
    opts?: {
        componentStack?: string;
        meta?: {
            [key: string]: string | number | boolean;
        };
    },
): void;
declare function ineum(
    command: 'reportEvent',
    name: string,
    opts?: {
        duration?: number;
        timestamp?: number;
        backendTraceId?: string;
        error?: Error;
        componentStack?: string;
        meta?: {
            [key: string]: string | number | boolean;
        };
    },
): void;

declare function ineum(
    command:
        | 'allowedOrigins'
        | 'ignoreErrorMessages'
        | 'ignoreUrls'
        | 'ignoreUserTimings'
        | 'urlsToCheckForGraphQlInsights',
    values: RegExp[],
): void;

/**
 * Use command: 'key' instead.
 *
 * @deprecated
 */
// tslint:disable-next-line unified-signatures
declare function ineum(command: 'apiKey', value: string): void;

/**
 * Use command: 'allowedOrigins' instead (from release 185).
 *
 * @deprecated
 */
// tslint:disable-next-line unified-signatures
declare function ineum(command: 'whitelistedOrigins', values: RegExp[]): void;
