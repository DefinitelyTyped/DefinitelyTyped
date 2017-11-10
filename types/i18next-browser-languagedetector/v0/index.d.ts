// Type definitions for i18next-browser-languagedetector 0.0
// Project: http://i18next.com/
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>, Giedrius Grabauskas <https://github.com/GiedriusGrabauskas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as i18next from "i18next";

declare namespace I18next {
    interface I18nextStatic extends i18nextBrowserLanguageDetector.I18nextStatic { }
    interface I18nextOptions extends i18nextBrowserLanguageDetector.I18nextOptions { }
}

declare namespace i18nextBrowserLanguageDetector {
    /** Interface for Language detector options. */
    interface LanguageDetectorOptions {
        caches?: string[] | boolean;
        cookieDomain?: string;
        cookieExpirationDate?: Date;
        lookupCookie?: string;
        lookupFromPathIndex?: number;
        lookupQuerystring?: string;
        lookupSession?: string;
        order?: string[];
    }

    /** Interface for custom detector. */
    interface CustomDetector {
        name: string;

        // todo: Checks paramters type.
        cacheUserLanguage(lng: string, options: {}): void;
        lookup(options: {}): string;
    }

    /** i18next options. */
    interface I18nextOptions {
        detection?: LanguageDetectorOptions;
    }

    /** i18next interface. */
    interface I18nextStatic {
        use(module: LngDetector): I18nextStatic;
    }

    /** i18next language detection. */
    class LngDetector {
        constructor(services?: any, options?: LanguageDetectorOptions);

        /** Adds detector. */
        addDetector(detector: CustomDetector): LngDetector;

        /** Initializes detector. */
        init(options?: LanguageDetectorOptions): void;
    }
}

export default i18nextBrowserLanguageDetector.LngDetector;
