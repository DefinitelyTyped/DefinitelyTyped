// Type definitions for caniuse-api 3.0
// Project: https://github.com/nyalab/caniuse-api#readme
// Definitions by: Dave Cardwell <https://github.com/davecardwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const features: string[];

export interface BrowserSupport {
    [browser: string]: {
        y?: number;
        n?: number;
        a?: number;
        x?: number;
    };
}

export function getSupport(feature: string): BrowserSupport;

export function isSupported(
    feature: string,
    browsers: string | ReadonlyArray<string>
): boolean;

export function find(query: string): string[];

export function getLatestStableBrowsers(): string[];

export function setBrowserScope(
    browserscope: string | ReadonlyArray<string>
): void;

export function getBrowserScope(): string[];
