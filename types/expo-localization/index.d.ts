// Type definitions for expo-localization 1.0
// Project: https://docs.expo.io/
// Definitions by: burtek <https://github.com/burtek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface LocalizationProps {
    /**
     * Native device language, returned in standard format. ex: `en-US`, `es-US`
     */
    locale: string;

    /**
     * List of all the native languages provided by the user settings. These are returned in the order the user defines in their native settings
     */
    locales: string[];

    /**
     * Country code for your device
     */
    country: string | undefined;

    /**
     * A list of all the supported ISO codes
     */
    isoCurrencyCodes: string[] | undefined;

    /**
     * The current time zone in display format. ex: `America/Los_Angeles`
     */
    timezone: string;

    /**
     * This will return `true` if the current language is Right-to-Left
     */
    isRTL: boolean;
}

export class Localization {
    /**
     * Native device language, returned in standard format. ex: `en-US`, `es-US`
     */
    static locale: string;

    /**
     * List of all the native languages provided by the user settings. These are returned in the order the user defines in their native settings
     */
    static locales: string[];

    /**
     * Country code for your device
     */
    static country: string | undefined;

    /**
     * A list of all the supported ISO codes
     */
    static isoCurrencyCodes: string[] | undefined;

    /**
     * The current time zone in display format. ex: `America/Los_Angeles`
     */
    static timezone: string;

    /**
     * This will return `true` if the current language is Right-to-Left
     */
    static isRTL: boolean;

    /**
     * Android only, on iOS changing the locale settings will cause all the apps to reset
     */
    static getLocalizationAsync(): Promise<LocalizationProps>;
}
