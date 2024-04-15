export interface CommonConfig {
    asyncCaptureLimit?: number | undefined;
    asyncCompareLimit?: number | undefined;
    baseUrl?: string | undefined;
    ci?:
        | {
            format?: string | undefined;
            testReportFileName?: string | undefined;
            testSuiteName?: string | undefined;
        }
        | undefined;
    debugWindow?: boolean | undefined;
    debug?: boolean | undefined;
    dockerCommandTemplate?: string | undefined;
    id: string;
    onBeforeScript?: string | undefined;
    onReadyScript?: string | undefined;
    paths?:
        | {
            ci_report?: string | undefined;
            bitmaps_reference?: string | undefined;
            bitmaps_test?: string | undefined;
            engine_scripts?: string | undefined;
            html_report?: string | undefined;
            json_report?: string | undefined;
        }
        | undefined;
    report?: Array<"browser" | "CI" | "json"> | undefined;
    resembleOutputOptions?:
        | {
            // See https://github.com/rsmbl/Resemble.js
            errorColor?:
                | {
                    red: number;
                    green: number;
                    blue: number;
                }
                | undefined;
            errorType?: string | undefined;
            transparency?: number | undefined;
            ignoreAntialiasing?: boolean | undefined;
        }
        | undefined;
    scenarios: Scenario[];
    viewports: Viewport[];
}

export interface CommonEngineOptions {
    args: string[];
    chromeFlags?: string[] | undefined;
    chromePath?: string | undefined;
    ignoreHTTPSErrors?: boolean | undefined;
    waitTimeout?: number | undefined;
}

export interface PlaywrightEngineConfig extends CommonConfig {
    engine?: "playwright" | undefined;
    engineOptions?:
        | ({
            browser?: "chromium" | "firefox" | "webkit";
            storageState?: string;
        } & CommonEngineOptions)
        | undefined;
}

export interface PuppeteerEngineConfig extends CommonConfig {
    engine?: "puppeteer" | undefined;
    engineOptions?:
        | ({
            browser?: never;
            storageState?: never;
        } & CommonEngineOptions)
        | undefined;
}

export type Config = PlaywrightEngineConfig | PuppeteerEngineConfig;

export interface KeypressSelector {
    selector: string;
    keyPress: string;
}

/** The Backstop test definition. See https://github.com/garris/BackstopJS#advanced-scenarios */
export interface Scenario {
    [key: string]: any; // Allow for custom properties.
    clickSelector?: string | undefined; // Click the specified DOM element prior to screenshot
    clickSelectors?: string[] | undefined; // Simulates multiple sequential click interactions
    cookiePath?: string | undefined; // Import cookies in JSON format
    delay?: number | undefined; // Wait for x milliseconds
    expect?: number | undefined; // Use with selectorExpansion true to expect number of results found
    hideSelectors?: string[] | undefined; // Selectors set to visibility: hidden
    hoverSelector?: string | undefined; // Move pointer over the given DOM element prior to screenshot
    hoverSelectors?: string[] | undefined; // Simulates multiple sequential hover interactions
    keyPressSelector?: KeypressSelector | undefined; // Press key in the DOM element prior to screenshot
    keyPressSelectors?: KeypressSelector[] | undefined; // Simulates multiple sequential keypress interactions
    label: string; // Tag saved with your reference images
    misMatchThreshold?: number | undefined; // Percentage of different pixels allowed to pass test
    onBeforeScript?: string | undefined; // Used to set up browser state e.g. cookies
    onReadyScript?: string | undefined; // Used to modify UI state prior to screenshots e.g. hovers, clicks etc
    postInteractionWait?: number | undefined; // Wait for selector (ms) after interacting with hover or click
    readyEvent?: string | undefined; // Wait until this string has been logged to the console
    readySelector?: string | undefined; // Wait until this selector exists before continuing
    referenceUrl?: string | undefined; // Specify a different state or environment when creating reference
    removeSelectors?: string[] | undefined; // Selectors set to display: none
    requireSameDimensions?: boolean | undefined; // If true, any change in selector size will trigger a failure
    selectors?: string[] | undefined; // Selectors to capture
    selectorExpansion?: boolean | undefined; // If true, take screenshots of all matching selector instances
    scrollToSelector?: string | undefined; // Scroll the specified DOM element into view prior to screenshots
    url: string; // The url of your app state
    viewports?: Viewport[] | undefined; // Override global viewports
}

export type Viewport = ViewportNext | ViewportLegacy;

export interface ViewportNext {
    label: string;
    width: number;
    height: number;
}

// Create a Viewport version that uses `name` for legacy support.
// https://github.com/garris/BackstopJS/blob/aa7de8ee059074f947768cfd04db1776348e1a7a/core/util/createBitmaps.js#L25
export interface ViewportLegacy {
    name: "phone" | "tablet" | "desktop";
    width: number;
    height: number;
}

export default function backstop(
    command: "approve" | "init" | "reference" | "test",
    options?: { docker?: boolean; config?: Config | string | undefined; filter?: string | undefined },
): Promise<void>;
