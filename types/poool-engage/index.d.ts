declare global {
    var Engage: Poool.Engage;
    /**
     * Use PooolEngage just if you have done `Engage.noConflict()` before
     */
    var PooolEngage: Poool.Engage;

    interface Window {
        Engage: Poool.Engage;
        /**
         * Use PooolEngage just if you have done `Engage.noConflict()` before
         */
        PooolEngage: Poool.Engage;
    }
}
export namespace Poool {
    interface EngageConfigOptions {
        /**
         * When debug mode is enabled, Engage.js will log everything it does in the browser console.
         *
         * default: `false`
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/configuration#debug
         */
        debug?: boolean;

        /**
         * When autoPageViews is enabled, Engage.js will automatically increment the page views counter on every page load (front-end applications using virtual routing should commit pageviews using .commitPageView()).
         *
         * default: `true`
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/configuration#autopageviews
         */
        autoPageViews?: boolean;

        /**
         * Used to enable Stripe credit card form fields inside elements.
         *
         * default: `null`
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/configuration#stripepublickey
         */
        stripePublicKey?: string;

        /**
         * The locale used by default texts inside elements.
         *
         * default: `en`
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/configuration#locale
         */
        locale?: "fr" | "en";

        /**
         * Enable/disable automatic Piano tracking for particular events.
        ⚠️ Piano SDK integration required, i.e using pa() tracking method.
        *
        * default: `false`
        *
        * More infos: https://www.poool.dev/docs/engage/javascript/configuration#pianoautotrackingenabled
        */
        pianoAutoTrackingEnabled?: boolean;

        /**
         * Enable/disable automatic Google Analytics 4 tracking (Google Analytics 4 tag required) for particular events.
            ⚠️ Google Analytics 4 integration required, i.e using gtag() tracking method
        *
        * default: `false`
        *
        * More infos: https://www.poool.dev/docs/engage/javascript/configuration#gtagautotrackingenabled
        */
        gtagAutoTrackingEnabled?: boolean;
    }

    interface EngageConfig {
        /**
         * While the default configuration works for most use cases, you might want to configure some of Engage.js behaviors.
         *
         * ℹ️ Your Dashboard configuration will override these configuration values unless they have been set with a read-only mode.
         *
         * @param config - the configuration object
         * @param [readonly=false] - if true, the configuration will be read-only and cannot be overridden by the Dashboard
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/configuration
         */
        (config: EngageConfigOptions, readonly?: boolean): Engage;
        /**
         * While the default configuration works for most use cases, you might want to configure some of Engage.js behaviors.
         *
         * ℹ️ Your Dashboard configuration will override these configuration values unless they have been set with a read-only mode.
         *
         * @param optionName The configuration option name
         * @param optionValue The configuration option value
         * @param [readonly=false] - if true, the configuration will be read-only and cannot be overridden by the Dashboard
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/configuration
         */
        (optionName: string, optionValue: any, readonly?: boolean): Engage;
    }

    interface EngageVariables {
        /**
         * Some texts inside elements benefit from predefined & automatically integrated variables, such as {app_name}.
            The .variable function allows you to define custom variables, which can be used in all element texts.
         *
         * The `.variable` function allows you to define custom variables, which can be used inside some textkeys.
         *
         * @param keyName - the variable key name
         * @param value - the variable value
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/variables
        */
        (keyName: string, value: string | number | boolean): Engage;
        /**
         * Some texts inside elements benefit from predefined & automatically integrated variables, such as {app_name}.
             The variable function allows you to define custom variables, which can be used in all element texts.
         *
         * The `.variable` function allows you to define custom variables, which can be used inside some textkeys.
         *
         * @param variables - the variables object
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/variables
        */
        (variables: { [key: string]: string | number | boolean }): Engage;
    }

    type EngageEventsList =
        | "ready"
        | "onReady"
        | "seen"
        | "onSeen"
        | "click"
        | "onClick"
        | "formSubmit"
        | "onFormSubmit"
        | "destroy"
        | "onDestroy"
        | "error"
        | "onError";

    type EngageTextsType =
        | "form_optional"
        | "form_no_options"
        | "form_error"
        | "form_error_required_field"
        | "form_error_invalid_field"
        | "form_error_invalid_email_field"
        | "form_error_invalid_phone_field"
        | "form_error_invalid_date_field"
        | "form_error_invalid_credit_card_field"
        | "form_error_non_existent_email";

    type EngageDisplayConditionsType =
        | "target"
        | "delay"
        | "scroll"
        | "views"
        | "viewsPerDay"
        | "visits"
        | "visitsPerDay"
        | "device"
        | "geoloc"
        | "url"
        | "referrer"
        | "date"
        | "time"
        | "customFilter"
        | "priority"
        | "and"
        | "or";

    interface EngageDisplayConditions {
        id: string;
        type: EngageDisplayConditionsType;
        value: string | number | boolean | EngageDisplayConditions[];
    }

    interface EngageElement {
        slug: string;
        name: string;
        conditions: EngageDisplayConditions[];
        /**
         * Destroys the element
         *
         * @returns Promise<void>
         */
        destroy: () => void;
    }

    interface EngageTexts {
        /**
         * You may need to override the default text displayed to your visitors, either to change the wording, or to add a new locale.
         *
         * Each text key modified using the .texts function is added to the default locale (if no locale has been defined in the general configuration options, or passed in the .texts function).
         *
         * ℹ️ These configuration values are overridden by your Dashboard configuration.
         *
         * @param keyName - the text key name
         * @param value - the text value
         * @param [readonly=false] - if true, the configuration will be read-only and cannot be overridden by the Dashboard
         * @param [locale] - the locale to use
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/texts
         */
        (keyName: EngageTextsType | string, value: string, readonly?: boolean, locale?: string): Engage;
        /**
         * You may need to override the default text displayed to your visitors, either to change the wording, or to add a new locale.
         *
         * Each text key modified using the .texts function is added to the default locale (if no locale has been defined in the general configuration options, or passed in the .texts function).
         *
         * ℹ️ These configuration values are overridden by your Dashboard configuration.
         *
         * @param texts - the texts object
         * @param [readonly=false] - if true, the configuration will be read-only and cannot be overridden by the Dashboard
         * @param [locale] - the locale to use
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/texts
         */
        (texts: { [key: EngageTextsType | string]: string }, readonly?: boolean, locale?: string): Engage;
    }

    interface Engage {
        /**
         * Whether the Element is a Poool instance, or not
         */
        isPoool: boolean;

        /**
         * Creates a new Engage instance (required to display Engage elements) using your app ID.
         *
         * @param key - Your poool app ID
         * @returns The Engage instance.
         *
         *  More infos: https://www.poool.dev/fr/docs/engage/javascript/methods#init
         */
        init(key: string): Engage;

        /**
         * If an Engage object already exists in the global object of the current page, the Engage.js library will be renamed to PooolEngage and the original Engage object will be restored.
         *
         *  @returns the Engage instance
         *
         * More infos: https://www.poool.dev/fr/docs/engage/javascript/methods#noconflict
         */
        noConflict(): Engage;

        /**
         * Allows to set some configuration options.
         *
         * @returns a promise that resolves with the Element instance
         * More Infos: https://www.poool.dev/docs/engage/javascript/methods#config
         */
        config: EngageConfig;

        /**
         * Allows to set custom variables to be replaced inside some text keys
         *
         *  @returns a promise that resolves with the Element instance
         * More infos: https://www.poool.dev/docs/engage/javascript/methods#variables
         */
        variables: EngageVariables;

        /**
         * Allows to override some hard coded texts.
         *
         * @returns a promise that resolves with the Element instance
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/methods#texts
         */
        texts: EngageTexts;

        /**
         * @param event the event name
         * @param callback the event callback
         * @returns the Engage instance
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/methods#on
         */
        on(event: EngageEventsList, callback: (...props: any) => any, opts?: { once?: boolean }): Engage;

        /**
         * @param event the event name
         * @param callback the event callback
         * @returns the Engage instance
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/methods#off
         */
        off(event: EngageEventsList, callback: (...props: any) => any): Engage;

        /**
         *Creates a new Element instance.

         * @param slug the element slug
         * @param target the target element or selector
         * @returns a promise that resolves with the Element instance
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/methods#createelement
         */
        createElement(slug: string, target: string | Element): Promise<EngageElement>;

        /**
         * Creates all elements matching multiple conditions like device, country, custom filters, etc.
         *
         * @param opts the filtering options
         * @returns a promise that resolves with an array of Element instances
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/methods#autocreate
         */
        autoCreate(opts?: { filters?: string[] }): Promise<EngageElement[]>;

        /**
         * Increment the page view counter in the browser's localStorage for elements with a page view count limit.
         *
         * @returns the Engage instance
         *
         * More infos: https://www.poool.dev/docs/engage/javascript/methods#commitpageview
         */
        commitPageView(): Engage;
    }
}
