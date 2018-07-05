// Type definitions for jQuery Flagstrap Plugin v1.0
// Project: https://github.com/blazeworx/flagstrap
// Definitions by: Felipe de Sena Garcia <https://github.com/felipedgarcia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

///<reference types="jquery" />

declare module jQueryFlagStrap {
    interface FlagStrapOptions {
        /**
         * Default: uniquely generated
         * the `name` attribute for the actual `select` input
         */
        inputName: string;
        /**
         * Default: uniquely generated
         * the `id` attribute for the actual `select` input
         */
        inputId?: string;
        /**
         * Default: "btn-md"
         * The bootstrap button size `class` for this drop down
         */
        buttonSize: string;
        /**
         * Default: "btn-default"
         * The bootstrap button type `class` for this drop down
         */
        buttonType: string;
        /**
         * Default: "20px"
         * The `margin` between `flag` and `text label`
         */
        labelMargin: string;
        /**
         * Default: false
         * Scrollable or full height drop down
         */
        scrollable: boolean;
        /**
         * Default: "250px"
         * `max-height` for the scrollable drop down
         */
        scrollableHeight?: string;
        /**
        * Default: (all)
        * Only show specific countries
        * Example:
        * 
        * {"GB": "United Kingdom", "US": "United States"}
        * 
        * will only show the USA and UK.
        */
        countries?: Object;
        /**
         * Default: {value: "", text: "Please select a country"}
         * Set the placeholder value and text. To disable the placeholder define as (boolean) false.
         */
        placeholder: boolean | FlagStrapPlaceholderOptions; 
        /**
         * Default: null
         * This callback gets called each time the select is changed. It receives two parameters, the new value, and the select element.
         */
        onSelect?(value: any, element: any): void; 
    }

    interface FlagStrapStatic {
        flagStrap?: void;
    }

    interface FlagStrapPlaceholderOptions {
        value: string;
        text: string;
    }
}

interface JQuery {
    /**
     * A lightwieght jQuery plugin for creating Bootstrap 3 compatible country select boxes with flags.
     */
    
    flagStrap(): void;
    flagStrap(options: jQueryFlagStrap.FlagStrapOptions): void;
}
