// Type definitions for Pace 1.0.1
// Project: http://github.hubspot.com/pace/docs/welcome/
// Definitions by: Charles Solar <https://github.com/volak>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface PaceElementOptions {
    checkInterval?: number;
    selectors?: string[];
}

interface PaceEventLagOptions {
    minSamples?: number;
    sampleCount?: number;
    lagThreshold?: number;
}

interface PaceAjaxOptions {
    trackMethods?: string[];
    trackWebSockets?: boolean;
    ignoreUrls?: string[];
}

interface PaceOptions {
    catchupTime?: number;
    initialRate?: number;
    minTime?: number;
    ghostTime?: number;
    maxProgressPerFrame?: number;
    easeFactor?: number;
    startOnPageLoad?: boolean;
    restartOnPushState?: boolean;
    restartOnRequestAfter?: number;
    target?: string;
    elements?: PaceElementOptions;
    eventLag?: PaceEventLagOptions;
    ajax?: PaceAjaxOptions;
    document?: boolean;
}

interface PaceEventCallback {
    (ctx: any, args: any): void;
}

interface Pace {
    options: PaceOptions;

    start(options: PaceOptions): void;
    restart(): void;
    stop(): void;
    track(func: Function): void;
    ignore(func: Function): void;

    on(event: string, handler: PaceEventCallback, ctx?: any, once?: boolean);
    off(event: string, handler: PaceEventCallback);
    once(event, handler: PaceEventCallback, ctx?: any);
}

declare var pace: Pace;

declare module "pace" {
    export = pace;
}