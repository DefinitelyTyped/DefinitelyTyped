export const features: string[];

export interface BrowserSupport {
    [browser: string]: {
        y?: number | undefined;
        n?: number | undefined;
        a?: number | undefined;
        x?: number | undefined;
        p?: number | undefined;
    };
}

export function getSupport(feature: string): BrowserSupport;

export function isSupported(
    feature: string,
    browsers: string | readonly string[],
): boolean;

export function find(query: string): string[];

export function getLatestStableBrowsers(): string[];

export function setBrowserScope(
    browserscope: string | readonly string[],
): void;

export function getBrowserScope(): string[];
