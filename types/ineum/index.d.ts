// Website Monitoring API from Instana (status: 2022-01-11)

declare function ineum(command: "key" | "page" | "reportingUrl" | "traceId", value: string): void;

declare function ineum(command: "user", userId?: string, userName?: string, userEmail?: string): void;

declare function ineum(command: "meta", key: string, value: string | number | boolean): void;

declare function ineum(command: "ignorePings" | "wrapEventHandlers" | "wrapTimers", value: boolean): void;

declare function ineum(
    command: "trackSessions",
    sessionInactivityTimeout?: number,
    sessionTerminationTimeout?: number,
): void;

declare function ineum(command: "terminateSession"): void;

declare function ineum(command: "getPageLoadId"): string | undefined;

declare function ineum(
    command:
        | "beaconBatchingTime"
        | "maxMaitForPageLoadMetricsMillis"
        | "maxWaitForResourceTimingsMillis"
        | "xhrTransmissionTimeout",
    durationMillis: number,
): void;

declare function ineum(
    command: "reportError",
    error: Error | string,
    opts?: {
        componentStack?: string | undefined;
        meta?: {
            [key: string]: string | number | boolean;
        } | undefined;
    },
): void;
declare function ineum(
    command: "reportEvent",
    name: string,
    opts?: {
        duration?: number | undefined;
        timestamp?: number | undefined;
        backendTraceId?: string | undefined;
        error?: Error | undefined;
        componentStack?: string | undefined;
        meta?: {
            [key: string]: string | number | boolean;
        } | undefined;
    },
): void;

declare function ineum(
    command:
        | "allowedOrigins"
        | "captureHeaders"
        | "ignoreErrorMessages"
        | "ignoreUrls"
        | "ignoreUserTimings"
        | "secrets"
        | "urlsToCheckForGraphQlInsights",
    values: RegExp[],
): void;

/**
 * Use command: 'key' instead.
 *
 * @deprecated
 */
// tslint:disable-next-line unified-signatures
declare function ineum(command: "apiKey", value: string): void;

/**
 * Use command: 'allowedOrigins' instead (from release 185).
 *
 * @deprecated
 */
// tslint:disable-next-line unified-signatures
declare function ineum(command: "whitelistedOrigins", values: RegExp[]): void;
