import type { Browser, DirectNavigationOptions, Response, ScreenshotOptions, SetCookie } from "puppeteer";

export = penthouse;

declare function penthouse(options: penthouse.PenthouseOptions, callback: penthouse.PenthouseCallback): void;
declare function penthouse(options: penthouse.PenthouseOptions): Promise<string>;

declare namespace penthouse {
    interface PuppeteerSettings {
        getBrowser?(): Browser | Promise<Browser>;
        pageGotoOptions?: DirectNavigationOptions;
    }

    interface PenthouseBaseOptions {
        /**
         * Accessible URL. Use the `file:///` protocol for local HTML files.
         */
        url: string;
        /**
         * Width for the critical viewport.
         *
         * @defaultValue `1300`
         */
        width?: number;
        /**
         * Height for the critical viewport.
         *
         * @defaultValue `900`
         */
        height?: number;
        /**
         * Configuration for screenshots. Not used by default.
         */
        screenshots?: Omit<ScreenshotOptions, "path">;
        /**
         * Keep media queries even for width or height values larger than the critical viewport.
         *
         * @defaultValue `false`
         */
        keepLargerMediaQueries?: boolean;
        /**
         * CSS selectors to keep in the critical CSS even if they do not appear in the critical viewport.
         *
         * @defaultValue `[]`
         */
        forceInclude?: Array<RegExp | string>;
        /**
         * CSS selectors to remove from the critical CSS even if they appear in the critical viewport.
         *
         * @defaultValue `[]`
         */
        forceExclude?: Array<RegExp | string>;
        /**
         * CSS properties to filter out from the critical CSS.
         *
         * @defaultValue `["(.*)transition(.*)", "cursor", "pointer-events", "(-webkit-)?tap-highlight-color", "(.*)user-select"]`
         */
        propertiesToRemove?: Array<RegExp | string>;
        /**
         * Abort critical CSS generation after this many milliseconds.
         *
         * @defaultValue `30000`
         */
        timeout?: number;
        /**
         * Settings for Puppeteer.
         */
        puppeteer?: PuppeteerSettings;
        /**
         * Stop waiting for page load after this many milliseconds.
         * Useful for sites where the page load event is unreliable.
         *
         * @defaultValue `0`
         */
        pageLoadSkipTimeout?: number;
        /**
         * Wait time in milliseconds after page load before critical CSS extraction starts.
         *
         * @defaultValue `100`
         */
        renderWaitTime?: number;
        /**
         * Set to `false` to load JavaScript requests.
         *
         * @defaultValue `true`
         */
        blockJSRequests?: boolean;
        /**
         * Maximum length of embedded base64 assets to keep.
         *
         * @defaultValue `1000`
         */
        maxEmbeddedBase64Length?: number;
        /**
         * Maximum number of elements to check per selector.
         *
         * @defaultValue `undefined`
         */
        maxElementsToCheckPerSelector?: number;
        /**
         * User agent string to use for the page request.
         *
         * @defaultValue `"Penthouse Critical Path CSS Generator"`
         */
        userAgent?: string;
        /**
         * Additional HTTP headers to send with page requests.
         */
        customPageHeaders?: Record<string, string>;
        /**
         * Cookies to set before loading the page.
         *
         * @defaultValue `[]`
         */
        cookies?: SetCookie[];
        /**
         * Enable strict mode behavior.
         *
         * @defaultValue `false`
         */
        strict?: boolean;
        /**
         * Allowed response code matcher for the page request.
         */
        allowedResponseCode?: number | RegExp | ((response: Response) => boolean);
    }

    interface PenthouseOptionsWithCss extends PenthouseBaseOptions {
        /**
         * Original CSS to extract critical CSS from.
         */
        cssString?: string;
        /**
         * Path to the original CSS file on disk, if using this instead of `cssString`.
         */
        css: string;
    }

    interface PenthouseOptionsWithCssString extends PenthouseBaseOptions {
        /**
         * Original CSS to extract critical CSS from.
         */
        cssString: string;
        /**
         * Path to the original CSS file on disk, if using this instead of `cssString`.
         */
        css?: string;
    }

    type PenthouseOptions = PenthouseOptionsWithCss | PenthouseOptionsWithCssString;

    interface PenthouseCallback {
        (error: Error | null, criticalCss: string): void;
    }
}
