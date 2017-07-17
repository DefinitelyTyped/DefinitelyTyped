// Type definitions for jquery-easy-loading 1.2.0
// Project: http://carlosbonetti.github.io/jquery-loading/
// Definitions by: delphinus <https://github.com/delphinus35/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace JQueryEasyLoading {

    interface Static {

        /**
         * Extend the Loading plugin default settings with the user options
         * Use it as `$.Loading.setDefaults({ ... })`
         *
         * @param {Object} options Custom options to override the plugin defaults
         */
        setDefaults(options: Options): void;
    }

    interface LoadingObject {

        /**
         * Initializes the overlay and attach handlers to the appropriate events
         */
        init(): void;

        /**
         * Return a new default overlay
         *
         * @return {jQuery} A new overlay already appended to the page's body
         */
        createOerlay(): JQuery;

        /**
         * Attach some internal methods to external events
         * e.g. overlay click, window resize etc
         */
        attachMethodsToExternalEvents(): void;

        /**
         * Attach the handlers defined on `options` for the respective events
         */
        attachOptionsHandlers(): void;

        /**
         * Calculate the z-index for the default overlay element
         * Return the z-index passed as setting to the plugin or calculate it
         * based on the target's z-index
         */
        calcZIndex(): number;

        /**
         * Reposition the overlay on the top of the target element
         * This method needs to be called if the target element changes position
         *  or dimension
         */
        resize(): void;

        /**
         * Trigger the `loading.start` event and turn on the loading state
         */
        start(): void;

        /**
         * Trigger the `loading.stop` event and turn off the loading state
         */
        stop(): void;

        /**
         * Check whether the loading state is active or not
         *
         * @return {Boolean}
         */
        active(): boolean;

        /**
         * Toggle the state of the loading overlay
         */
        toggle(): void;
    }

    interface Options {

        /**
         * jQuery element to be used as overlay
         * If not defined, a default overlay will be created
         */
        overlay?: JQuery;

        /**
         * z-index to be used by the default overlay
         * If not defined, a z-index will be calculated based on the
         * target's z-index
         * Has no effect if a custom overlay is defined
         */
        zIndex?: number;

        /**
         * Message to be rendered on the overlay content
         * Has no effect if a custom overlay is defined
         */
        message?: string;

        /**
         * Theme to be applied on the loading element
         *
         * Some default themes are implemented on `jquery.loading.css`, but you can
         *  define your own. Just add a `.loading-theme-my_awesome_theme` selector
         *  somewhere with your custom styles and change this option
         *  to 'my_awesome_theme'. The class is applied to the parent overlay div
         *
         * Has no effect if a custom overlay is defined
         */
        theme?: string;

        /**
         * Class(es) to be applied to the overlay element when the loading state is started
         */
        shownClass?: string;

        /**
         * Class(es) to be applied to the overlay element when the loading state is stopped
         */
        hiddenClass?: string;

        /**
         * Set to true to stop the loading state if the overlay is clicked
         * This options does NOT override the onClick event
         */
        stoppable?: boolean;

        /**
         * Set to false to not start the loading state when initialized
         */
        start?: boolean;

        /**
         * Function to be executed when the loading state is started
         * Receives the loading object as parameter
         *
         * The function is attached to the `loading.start` event
         */
        onStart?: (loading: LoadingObject) => void;

        /**
         * Function to be executed when the loading state is stopped
         * Receives the loading object as parameter
         *
         * The function is attached to the `loading.stop` event
         */
        onStop?: (loading: LoadingObject) => void;

        /**
         * Function to be executed when the overlay is clicked
         * Receives the loading object as parameter
         *
         * The function is attached to the `loading.click` event
         */
        onClick?: Function;
    }

    type Command = "resize" | "start" | "stop" | "toggle";
}

interface JQueryStatic {

    Loading: JQueryEasyLoading.Static;
}

interface JQuery {
    /**
     * Initializes the plugin and return a chainable jQuery object
     *
     * @param {Object} [options] Initialization options. Extends `Loading.defaults`
     * @return {jQuery}
     */
    loading(options?: JQueryEasyLoading.Options | JQueryEasyLoading.Command): JQuery;

    /**
     * Return the loading object associated to the element or initialize it
     * This method is interesting if you need the plugin object to access the
     * internal API
     * Example: `$('#some-element').Loading().toggle()`
     *
     * @param {Object} [options] Initialization options. If new options are given
     * to a previously initialized object, the old ones are overriden and the
     * plugin restarted
     * @return {Loading}
     */
    Loading(options?: JQueryEasyLoading.Options): JQueryEasyLoading.LoadingObject;
}

declare var factory: (root?: any, jQuery?: JQueryStatic) => JQueryStatic;

declare module "jquery-easy-loading" {

    /**
     * The package `jquery-easy-loading` would return a factory for the library
     * itself if you use this not in the browser env.
     *
     * <pre>
     * import * as factory from "jquery-easy-loading";
     * const $: JQueryStatic = factory(window);
     * </pre>
     */
    export = factory;
}
