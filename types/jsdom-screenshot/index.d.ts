// Type definitions for jsdom-screenshot 3.2
// Project: https://github.com/dferber90/jsdom-screenshot
// Definitions by: Adam Golan <https://github.com/Tismas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { LaunchOptions, ScreenshotOptions, Viewport, Page } from 'puppeteer';

export interface GenerateImageOptions {
    launch?: LaunchOptions;
    screenshot?: ScreenshotOptions;
    serve?: ReadonlyArray<string>;
    debug?: boolean;
    waitUntilNetworkIdle?: boolean;
    viewport?: Viewport;
    intercept?: VoidFunction;
}

export function debug(element?: Element | Document): void;
export function generateImage(options?: GenerateImageOptions): ReturnType<Page['screenshot']>;
export function restoreDefaultOptions(): void;
export function setDefaultOptions(options: GenerateImageOptions): void;
