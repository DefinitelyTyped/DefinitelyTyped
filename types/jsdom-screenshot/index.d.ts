import { LaunchOptions, Page, Request, ScreenshotOptions, Viewport } from "puppeteer";

export interface GenerateImageOptions {
    launch?: LaunchOptions | undefined;
    screenshot?: ScreenshotOptions | undefined;
    serve?: readonly string[] | undefined;
    debug?: boolean | undefined;
    waitUntilNetworkIdle?: boolean | undefined;
    viewport?: Viewport | undefined;
    intercept?: ((request: Request) => void) | undefined;
}

export function debug(element?: Element | Document): void;
export function generateImage(options?: GenerateImageOptions): ReturnType<Page["screenshot"]>;
export function restoreDefaultOptions(): void;
export function setDefaultOptions(options: GenerateImageOptions): void;
