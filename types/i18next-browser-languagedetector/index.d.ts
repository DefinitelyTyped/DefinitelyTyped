// Type definitions for i18next-browser-languagedetector 2.0
// Project: http://i18next.com/
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>, Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace i18nextBrowserLanguageDetector {
    interface DetectorOptions {
        /**
         * order and from where user language should be detected
         */
        order?: Array<"querystring" | "cookie" | "localStorage" | "navigator" | "htmlTag" | string>;

        /**
         * keys or params to lookup language from
         */
        lookupQuerystring?: string;
        lookupCookie?: string;
        lookupLocalStorage?: string;

        /**
         * cache user language on
         */
        caches?: string[];

        /**
         * languages to not persist (cookie, localStorage)
         */
        excludeCacheFor?: string[];

        /**
         * optional expire and domain for set cookie
         * @default 10
         */
        cookieMinutes?: number;
        cookieDomain?: string;

        /**
         * optional htmlTag with lang attribute
         * @default document.documentElement
         */
        htmlTag?: HTMLElement;
    }

    interface CustomDetector {
        name: string;
        cacheUserLanguage?(lng: string, options: DetectorOptions): void;
        lookup(options: DetectorOptions): string | undefined;
    }
}

declare class i18nextBrowserLanguageDetector {
    constructor(services?: any, options?: i18nextBrowserLanguageDetector.DetectorOptions);
    /**
     * Adds detector.
     */
    addDetector(detector: i18nextBrowserLanguageDetector.CustomDetector): i18nextBrowserLanguageDetector;

    /**
     * Initializes detector.
     */
    init(options?: i18nextBrowserLanguageDetector.DetectorOptions): void;
}

export = i18nextBrowserLanguageDetector;
