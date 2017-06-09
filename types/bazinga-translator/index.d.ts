// Type definitions for Translator
// Project: https://github.com/willdurand/BazingaJsTranslationBundle
// Definitions by: Alex <https://github.com/alexndlm>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface BazingaTranslator {
    /**
     * The current locale.
     *
     * @type {String}
     */
    locale: string;

    /**
     * Fallback locale.
     *
     * @type {String}
     */
    fallback: string;

    /**
     * Placeholder prefix.
     *
     * @type {String}
     */
    placeHolderPrefix: string;

    /**
     * Placeholder suffix.
     *
     * @type {String}
     */
    placeHolderSuffix: string;

    /**
     * Default domain.
     *
     * @type {String}
     */
    defaultDomain: string;

    /**
     * Plural separator.
     *
     * @type {String}
     */
    pluralSeparator: string;

    /**
     * Adds a translation entry.
     *
     * @param {String} id         The message id
     * @param {String} message    The message to register for the given id
     * @param {String} [domain]   The domain for the message or null to use the default
     * @param {String} [locale]   The locale or null to use the default
     *
     * @return {Object}           Translator
     */
    add(id: string, message: string, domain: string, locale: string): BazingaTranslator;


    /**
     * Translates the given message.
     *
     * @param {String} id               The message id
     * @param {Object} [parameters]     An array of parameters for the message
     * @param {String} [domain]         The domain for the message or null to guess it
     * @param {String} [locale]         The locale or null to use the default
     *
     * @return {String}                 The translated string
     */
    trans(id: string, parameters: any, domain: string, locale?: string): string;

    /**
     * Translates the given choice message by choosing a translation according to a number.
     *
     * @param {String} id               The message id
     * @param {Number} number           The number to use to find the indice of the message
     * @param {Object} [parameters]     An array of parameters for the message
     * @param {String} [domain]         The domain for the message or null to guess it
     * @param {String} [locale]         The locale or null to use the default
     *
     * @return {String}                 The translated string
     */
    transChoice(id: string, number: number, parameters: any, domain: string, locale?: string): string,

    /**
     * Loads translations from JSON.
     *
     * @param {String} data     A JSON string or object literal
     *
     * @return {Object}         Translator
     */
    fromJSON(data: string): BazingaTranslator;

    reset(): void;
}

declare const Translator: BazingaTranslator;