// Type definitions for Google Analytics (Classic and Universal)
// Project: https://developers.google.com/analytics/devguides/collection/gajs/, https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference
// Definitions by: Ronnie Haakon Hegelund <http://ronniehegelund.blogspot.dk>, Pat Kujawa <http://patkujawa.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

declare namespace UniversalAnalytics {
    // https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference

    enum HitType {
        'pageview', 'screenview', 'event', 'transaction', 'item', 'social', 'exception', 'timing'
    }

    interface ga {
        l: number;
        q: any[];

        (command: 'send', hitType: 'event', eventCategory: string, eventAction: string,
            eventLabel?: string, eventValue?: number, fieldsObject?: {}): void;
        (command: 'send', hitType: 'event', fieldsObject: {
            eventCategory: string,
            eventAction: string,
            eventLabel?: string,
            eventValue?: number,
            nonInteraction?: boolean}): void;
        (command: 'send', fieldsObject: {
            hitType: HitType, // 'event'
            eventCategory: string,
            eventAction: string,
            eventLabel?: string,
            eventValue?: number,
            nonInteraction?: boolean}): void;
        (command: 'send', hitType: 'pageview', page: string): void;
        (command: 'send', hitType: 'social',
            socialNetwork: string, socialAction: string, socialTarget: string): void;
        (command: 'send', hitType: 'social',
            fieldsObject: {socialNetwork: string, socialAction: string, socialTarget: string}): void;
        (command: 'send', hitType: 'timing',
            timingCategory: string, timingVar: string, timingValue: number): void;
        (command: 'send', hitType: 'timing',
            fieldsObject: {timingCategory: string, timingVar: string, timingValue: number}): void;
        (command: 'send', fieldsObject: {}): void;
        (command: string, hitType: HitType, ...fields: any[]): void;

        (command: 'create', trackingId: string, cookieDomain?: string, name?: string, fieldsObject?: {}): void;
        (command: 'remove'): void;

        (command: string, ...fields: any[]): void;

        (readyCallback: (defaultTracker?: UniversalAnalytics.Tracker) => void): void;

        create(trackingId: string, cookieDomain: string, name: string, fieldsObject?: {}): UniversalAnalytics.Tracker;
        create(trackingId: string, cookieDomain: string, fieldsObject?: {}): UniversalAnalytics.Tracker;
        create(trackingId: string, fieldsObject?: {}): UniversalAnalytics.Tracker;

        getAll(): UniversalAnalytics.Tracker[];
        getByName(name: string): UniversalAnalytics.Tracker;
        remove(name: string): void;
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
