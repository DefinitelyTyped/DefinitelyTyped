// Type definitions for non-npm package LocalizeJS Library 1.0
// Project: https://help.localizejs.com/docs/library-api
// Definitions by: Samer Albahra <https://github.com/salbahra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace LocalizeJS.Context {
    interface Options {
        /**
         * Required. Your project key.
         */
        key: string;

        /**
         * Defaults to false.
         * If true and you have machine translations enabled, any new phrases found in your website will be automatically
         * moved to the Published bin, and a machine translation will be generated.
         */
        autoApprove: boolean;

        /**
         * Language to translate your website to.
         */
        targetLanguage: string;

        /**
         * Defaults to false. If true, Localize will translate your website to the last selected language on subsequent page views.
         */
        rememberLanguage: boolean;

        /**
         * Defaults to true. If true, translations will be fetched from Localize if not bootstrapped.
         */
        fetchTranslations: boolean;

        /**
         * Defaults to true. If true, "alt" attributes will be translated.
         */
        translateAlt: boolean;

        /**
         * Defaults to true. If true, aria-label attributes within HTML elements will be found by Localize and brought into the dashboard, allowing you to translate them.
         */
        translateAriaLabels: boolean;

        /**
         * Defaults to false. Set to true to prefetch all active languages, or pass a language code or an array of codes to.
         */
        prefetch: boolean;

        /**
         * Array of class names for which Localize will ignore.
         */
        blockedClasses: string[];

        /**
         * Array of CSS ID selectors.
         */
        blockedIds: string[];

        /**
         * Defaults to false. When true, the default Localize widget is disabled.
         */
        disableWidget: boolean;

        /**
         * Defaults to false. If true, the image URLs used in your website will appear in your phrases bin to allow for image replacement based on language.
         */
        localizeImages: boolean;

        /**
         * Array of class names for which Localize will translate. If you use this option, Localize will only translate content
         * contained in these classes and will ignore all other content in the body of the page.
         */
        translateClasses: string[];

        /**
         * Defaults to true. Automatically default the page language to the user's preferred language. The first path segment
         * in the URL is used to check to detect the language, ie. www.localize.com/fr. If no language dictionary exists for that
         * segment then the language setting in their browser is used.
         */
        autodetectLanguage: boolean;

        /**
         * Defaults to false. When true, Localize will attempt to translate the entire body of the page.
         * If false, Localize will only translate content contained with a "localizejs" class name.
         */
        translateBody: boolean;

        /**
         * The default language your website will be in when no language has been selected. Defaults to the source language of your website.
         */
        defaultLanguage: string;

        /**
         * The base path will be stripped from the URL of the phrase as seen in the "Filter by pages" feature.
         */
        basePath: string;

        /**
         * Defaults to true. If true, the <title> of the page will translate.
         */
        translateTitle: boolean;

        /**
         * Defaults to false. Allows users to turn on meta tag translation. This optimizes your site for SEO.
         */
        translateMetaTags: boolean;

        /**
         * Defaults to true. If true, unrecognized phrases will be added to your Localize account. Disable this in development.
         */
        saveNewPhrases: boolean;

        /**
         * Defaults to false. If true, Localize will detect phrases only when the page is not translated.
         * Please contact support@localizejs.com prior to updating this option.
         */
        saveNewPhrasesFromSource: boolean;

        /**
         * Defaults to false. Automatically translate content that is added dynamically to your webpage.
         * For example, if your webpage dynamically adds html into the source of the page, our library
         * will translate it once the translations have been generated. Behind the scenes this means the
         * dictionary file with all your translated content is available for use with Localize.translate().
         * However, translations are not generated instantly, so use with our library event updatedDictionary is recommended.
         */
        retranslateOnNewPhrases: boolean;

        /**
         * Defaults to false. If true, the Localize library will not send additional metadata to our servers.
         * This metadata includes the surrounding HTML of the phrases detected on your website.
         */
        enhancedContentSecurity: boolean;

        /**
         * Defaults to false. If true, the Localize library will pick up phrases in the <time> elements.
         */
        translateTimeElement: boolean;

        /**
         * Defaults to false. If true, the Localize library will pick up numbers as phrases.
         */
        translateNumbers: boolean;

        /**
         * Defaults to true. If true, text contained within SVGs will be found by Localize and brought into the dashboard,
         * allowing you to translate the text. (SVG files are not supported)
         */
        translateSVGElement: boolean;
    }

    interface RateData {
        fromCurrency: string;
        toCurrency: string;
        rate: string;
    }
}

declare var Localize: {
    /**
     * Initializes LocalizeJS with the supplied options.
     * @param options An object containing the supplied options.
     */
    initialize(options: LocalizeJS.Context.Options): void;

    /**
     * Translates the page into the given language.
     * @param language Required. Language codes can be found on your Languages page.
     */
    setLanguage(language: string): void;

    /**
     * Returns the current language of the page. If a language hasn't been set, source is returned.
     */
    getLanguage(): string;

    /**
     * Returns the language code for the source language of the current project.
     */
    getSourceLanguage(): string;

    /**
     * Returns the visitor's list of preferred languages, based on the browser's "accept-language" header.
     * @param callback Required.
     */
    detectLanguage(callback: (error: any, languages: string[]) => void): void;

    /**
     * Returns all available languages for the project.
     * @param callback Required.
     */
    getAvailableLanguages(callback: (error: any, languages: string[]) => void): void;

    /**
     * Calling this function will hide the widget if it's currently visible.
     * You can use this function to hide the widget on certain pages.
     */
    hideWidget(): void;

    /**
     * Calling this function will show the widget if it's currently hidden.
     */
    showWidget(): void;

    /**
     * Translates text or text within html.
     *
     * If the Localize.translate() input is a string, instances of %{variable} will be replaced with the given value in the variables object.
     * You may also use HTML <var> tags in the string
     *
     * If the active language is the source language of the page, Localize.translate will return the untranslated phrase.
     * Localize.translate can be used with or without a callback. We highly recommend using the callback approach if you're calling
     * Localize.translate in the first 10 seconds of page load to ensure that the latest translations are available. The callback will
     * allow the translation to delay until translations have been fully loaded into the browser. If the translations are already
     * loaded, the callback is executed immediately.
     *
     * @param input Required. Can be text, html or native DOM elements
     * @param variables Optional. Object of variables that will be replaced in the input, if it's a string
     * @param callback Optional. Callback will trigger once translations have been fetched from Localize.
     */
    translate(
        input: string | HTMLElement,
        variables?: any,
        callback?: (translation: string | HTMLElement) => void,
    ): void;

    /**
     * Translates all text on the page
     */
    translatePage(): void;

    /**
     * Untranslates all text on the page
     */
    untranslatePage(): void;

    /**
     * Untranslates a specified element on the page. Use Localize.untranslatePage() if untranslating the whole page.
     * @param element Required. A DOM node to untranslate
     */
    untranslate(element: string): void;

    /**
     * Speed up language switching by prefetching
     * @param languages Required. Accepts a string or an array or languages (ex. 'zh-CN')
     */
    prefetch(languages: string | string[]): void;

    /**
     * Saves the phrase, if unrecognized, to your Localize project. Useful for ensuring rarely printed text
     * (ie. an obscure error message) is translated. Returns the phrase it was passed.
     * @param phrase Required. A string or an array of strings
     */
    phrase(phrase: string | string[]): string | string[];

    /**
     * Attach an event handler to Localize events.
     * @param eventName Required. Name of event to bind to. Can optionally be namespaced: "setLanguage.ns"
     * @param fn Required. Event handler.
     */
    on(
        eventName: 'initialize' | 'setLanguage' | 'pluralize' | 'translate' | 'untranslatePage' | 'updatedDictionary',
        fn: (event: Event) => void,
    ): void;

    /**
     * Remove an event handler.
     * @param eventName Required. Name of event to unbind to. Can optionally be namespaced: "setLanguage.ns"
     * @param fn Optional. The function to unbind from the event.
     */
    off(
        eventName: 'initialize' | 'setLanguage' | 'pluralize' | 'translate' | 'untranslatePage' | 'updatedDictionary',
        fn?: (event: Event) => void,
    ): void;

    /**
     * Returns exchange rate for provided currencies.
     *
     * @param fromCurrency Required. The default source currency, to be converted from.
     * @param toCurrency Required. The new currency, to be converted to.
     * @param callback Required. Receives err and rateData arguments.
     */
    getExchangeRate(
        fromCurrency: string,
        toCurrency: string,
        callback: (error: any, rateData: LocalizeJS.Context.RateData) => void,
    ): void;
};
