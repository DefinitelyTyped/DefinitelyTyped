// Type definitions for a2hs.js 0.4
// Project: https://github.io/koddr/a2hs.js
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * A useful modern JavaScript solution for adding a progressive
 * web application (PWA) to the home screen of your mobile
 * iOS device.
 */
declare function AddToHomeScreen(settings?: AddToHomeScreen.Settings): void;

declare namespace AddToHomeScreen {
    interface Settings {
        /**
         * Background color for container
         * @default '#f9f9f9'
         */
        backgroundColor?: string;
        /**
         * Padding for container
         * @default '10px'
         */
        padding?: string;
        /**
         * Shadow color for top of container
         * @default '#e9e9e9'
         */
        shadowColor?: string;
        /**
         * Shadow size for top of container
         * @default '10px'
         */
        shadowSize?: string;
        /**
         * Font family for content in container
         * @default '-apple-system, sans-serif'
         */
        fontFamily?: string;
        /**
         * Font color for content in container
         * @default '#5d5d5d'
         */
        color?: string;
        /**
         * Font size for content in container
         * @default '0.9rem'
         */
        fontSize?: string;
        /**
         * Brand for default `htmlContent`
         * @default ''
         */
        brandName?: string;
        /**
         * Logo for container
         */
        logoImage?: string;
        /**
         * Content for container with HTML
         */
        htmlContent?: string;
    }
}
export = AddToHomeScreen;
