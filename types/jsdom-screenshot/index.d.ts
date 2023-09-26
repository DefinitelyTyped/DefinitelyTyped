import { LaunchOptions, Page, ScreenshotOptions, Viewport } from "puppeteer";

export interface GenerateImageOptions {
    launch?: LaunchOptions | undefined;
    screenshot?: ScreenshotOptions | undefined;
    serve?: ReadonlyArray<string> | undefined;
    debug?: boolean | undefined;
    waitUntilNetworkIdle?: boolean | undefined;
    viewport?: Viewport | undefined;
    intercept?: VoidFunction | undefined;
}

export function debug(element?: Element | Document): void;
export function generateImage(options?: GenerateImageOptions): ReturnType<Page["screenshot"]>;
export function restoreDefaultOptions(): void;
export function setDefaultOptions(options: GenerateImageOptions): void;
