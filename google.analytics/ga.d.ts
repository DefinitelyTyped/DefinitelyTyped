// Type definitions for Google Analytics (Classic and Universal)
// Project: https://developers.google.com/analytics/devguides/collection/gajs/, https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference
// Definitions by: Ronnie Haakon Hegelund <http://ronniehegelund.blogspot.dk>, Pat Kujawa <http://patkujawa.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Tracker {
    _trackPageview(): void;
    _getName(): string;
    _getAccount(): string;
    _getVersion(): string;
    _getVisitorCustomVar(index: number): string;
    _setAccount(): string;
    _setCustomVar(index: number, name: string, value: string, opt_scope?: number): boolean;
    _setSampleRate(newRate: string): void;
    _setSessionCookieTimeout(cookieTimeoutMillis: number): void;
    _setSiteSpeedSampleRate(sampleRate: number): void;
    _setVisitorCookieTimeout(milliseconds: number): void;
    _trackPageLoadTime(): void;
}

interface GoogleAnalyticsCode {
    push(commandArray: string[]): void;
    push(func: Function): void;
}

interface GoogleAnalyticsTracker {
    _getTracker(account: string): Tracker;
    _createTracker(opt_account: string, opt_name?: string): Tracker;
    _getTrackerByName(opt_name?: string): Tracker;
    _anonymizeIp(): void;
}

interface GoogleAnalytics {
    type: string;
    src: string;
    async: boolean;
}

declare module UniversalAnalytics {
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference

    interface ga {
        (command: string, poly: string, opt_poly?: {}): UniversalAnalytics.Tracker;
        (command: string, trackingId: string, auto: string, opt_configObject?: {}): UniversalAnalytics.Tracker;
        (command: string, hitDetails: {}): void;
        create(trackingId: string, opt_configObject?: {}): UniversalAnalytics.Tracker;
        create(trackingId: string, auto: string, opt_configObject?: {}): UniversalAnalytics.Tracker;
        getAll(): UniversalAnalytics.Tracker[];
        getByName(name: string): UniversalAnalytics.Tracker;
    }

    interface Tracker {
        get<T>(fieldName: string): T;
        send(hitType: string, opt_fieldObject?: {}): void;
        set(fieldName: string, value: string): void;
        set(fieldName: string, value: {}): void;
        set(fieldName: string, value: number): void;
        set(fieldName: string, value: boolean): void;
    }
}

declare var gaClassic: GoogleAnalytics;
declare var ga: UniversalAnalytics.ga;
declare var _gaq: GoogleAnalyticsCode;
declare var _gat: GoogleAnalyticsTracker;
