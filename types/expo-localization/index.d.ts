// Type definitions for expo-localization 1.0
// Project: https://docs.expo.io/versions/latest/sdk/localization
// Definitions by: Bartosz Dotryw <https://github.com/burtek>
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
    country: string | undefined | null;

    /**
     * A list of all the supported ISO codes
     */
    isoCurrencyCodes: string[] | undefined | null;

    /**
     * The current time zone in display format. ex: `America/Los_Angeles`
     */
    timezone: string;

    /**
     * This will return `true` if the current language is Right-to-Left
     */
    isRTL: boolean;
}

export namespace Localization {
    /**
     * Native device language, returned in standard format. ex: `en-US`, `es-US`
     */
    const locale: string;

    /**
     * List of all the native languages provided by the user settings. These are returned in the order the user defines in their native settings
     */
    const locales: string[];

    /**
     * Country code for your device
     */
    const country: string | undefined | null;

    /**
     * A list of all the supported ISO codes
     */
    const isoCurrencyCodes: string[] | undefined | null;

    /**
     * The current time zone in display format. ex: `America/Los_Angeles`
     */
    const timezone: string;

    /**
     * This will return `true` if the current language is Right-to-Left
     */
    const isRTL: boolean;

    /**
     * Android only, on iOS changing the locale settings will cause all the apps to reset
     */
    function getLocalizationAsync(): Promise<LocalizationProps>;
}
