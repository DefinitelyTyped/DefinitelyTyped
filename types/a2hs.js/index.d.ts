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
        backgroundColor?: string | undefined;
        /**
         * Padding for container
         * @default '10px'
         */
        padding?: string | undefined;
        /**
         * Shadow color for top of container
         * @default '#e9e9e9'
         */
        shadowColor?: string | undefined;
        /**
         * Shadow size for top of container
         * @default '10px'
         */
        shadowSize?: string | undefined;
        /**
         * Font family for content in container
         * @default '-apple-system, sans-serif'
         */
        fontFamily?: string | undefined;
        /**
         * Font color for content in container
         * @default '#5d5d5d'
         */
        color?: string | undefined;
        /**
         * Font size for content in container
         * @default '0.9rem'
         */
        fontSize?: string | undefined;
        /**
         * Brand for default `htmlContent`
         * @default ''
         */
        brandName?: string | undefined;
        /**
         * Logo for container
         */
        logoImage?: string | undefined;
        /**
         * Content for container with HTML
         */
        htmlContent?: string | undefined;
    }
}
export = AddToHomeScreen;
