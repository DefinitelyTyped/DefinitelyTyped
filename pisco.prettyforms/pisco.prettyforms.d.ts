// Type definitions for pisco.prettyforms 1.0.0
// Project: https://github.com/albertofortes/piscoPrettyForms
// Definitions by: Petr Kadlec <https://github.com/mormegil-cz/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts" />

interface PiscoPrettyformsOptions {
    /**
     * Currently unused
     */
    className?: string;
    /**
     * The width of styled SELECT elements
     */
    selectWidth?: any; // number | string
    /**
     * Additional custom CSS class to be added to the styled elements
     */
    customClass?: string;
}

interface JQuery {
    /**
     * Prettify the form elements
     * @param options The options
     * @example
     * $('.pretty').piscoPrettyForms({
     *   selectWidth: 200
     * });
     */
    piscoPrettyForms(options?: PiscoPrettyformsOptions): JQuery;
}
