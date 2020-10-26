// Type definitions for timing.js 1.2
// Project: https://github.com/addyosmani/timing.js
// Definitions by: rhysd <https://github.com/rhysd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Timings {
    appcacheTime: number;
    connectEnd: number;
    connectStart: number;
    connectTime: number;
    domComplete: number;
    domContentLoadedEventEnd: number;
    domContentLoadedEventStart: number;
    domInteractive: number;
    domLoading: number;
    domReadyTime: number;
    domainLookupEnd: number;
    domainLookupStart: number;
    fetchStart: number;
    firstPaint: number;
    firstPaintTime: number;
    initDomTreeTime: number;
    loadEventEnd: number;
    loadEventStart: number;
    loadEventTime: number;
    loadTime: number;
    lookupDomainTime: number;
    navigationStart: number;
    readyStart: number;
    redirectEnd: number;
    redirectStart: number;
    redirectTime: number;
    requestStart: number;
    requestTime: number;
    responseEnd: number;
    responseStart: number;
    secureConnectionStart: number;
    unloadEventEnd: number;
    unloadEventStart: number;
    unloadEventTime: number;
}

export function getTimes(): Timings;
export function printSimpleTable(): void;
export function printTable(): void;
