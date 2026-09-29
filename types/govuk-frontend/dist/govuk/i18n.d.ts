/**
 * Internal support for selecting messages to render, with placeholder
 * interpolation and locale-aware number formatting and pluralisation
 *
 * @internal
 */
export class I18n {
    /**
     * @internal
     * @param {{ [key: string]: string | TranslationPluralForms }} translations - Key-value pairs of the translation strings to use.
     * @param {object} [config] - Configuration options for the function.
     * @param {string | null} [config.locale] - An overriding locale for the PluralRules functionality.
     */
    constructor(
        translations?: {
            [key: string]: string | TranslationPluralForms;
        },
        config?: {
            locale?: string | null | undefined;
        },
    );
    translations: {
        [key: string]: string | TranslationPluralForms;
    };
    locale: string;

    /**
     * The most used function - takes the key for a given piece of UI text and
     * returns the appropriate string.
     *
     * @internal
     * @param {string} lookupKey - The lookup key of the string to use.
     * @param {{ [key: string]: unknown }} [options] - Any options passed with the translation string, e.g: for string interpolation.
     * @returns {string} The appropriate translation string.
     * @throws {Error} Lookup key required
     * @throws {Error} Options required for `${}` placeholders
     */
    t(
        lookupKey: string,
        options?: {
            [key: string]: unknown;
        },
    ): string;

    /**
     * Takes a translation string with placeholders, and replaces the placeholders
     * with the provided data
     *
     * @internal
     * @param {string} translationString - The translation string
     * @param {{ [key: string]: unknown }} options - Any options passed with the translation string, e.g: for string interpolation.
     * @returns {string} The translation string to output, with $\{\} placeholders replaced
     */
    replacePlaceholders(
        translationString: string,
        options: {
            [key: string]: unknown;
        },
    ): string;

    /**
     * Check to see if the browser supports Intl.PluralRules
     *
     * It requires all conditions to be met in order to be supported:
     * - The implementation of Intl supports PluralRules (NOT true in Safari 10–12)
     * - The browser/OS has plural rules for the current locale (browser dependent)
     *
     * {@link https://browsersl.ist/#q=supports+es6-module+and+not+supports+intl-pluralrules}
     *
     * @internal
     * @returns {boolean} Returns true if all conditions are met. Returns false otherwise.
     */
    hasIntlPluralRulesSupport(): boolean;

    /**
     * Get the appropriate suffix for the plural form.
     *
     * Uses Intl.PluralRules (or our own fallback implementation) to get the
     * 'preferred' form to use for the given count.
     *
     * Checks that a translation has been provided for that plural form – if it
     * hasn't, it'll fall back to the 'other' plural form (unless that doesn't exist
     * either, in which case an error will be thrown)
     *
     * @internal
     * @param {string} lookupKey - The lookup key of the string to use.
     * @param {number} count - Number used to determine which pluralisation to use.
     * @returns {PluralRule} The suffix associated with the correct pluralisation for this locale.
     * @throws {Error} Plural form `.other` required when preferred plural form is missing
     */
    getPluralSuffix(lookupKey: string, count: number): PluralRule;
}

/**
 * Plural rule category mnemonic tags
 */
export type PluralRule = "zero" | "one" | "two" | "few" | "many" | "other";

/**
 * Translated message by plural rule they correspond to.
 *
 * Allows to group pluralised messages under a single key when passing
 * translations to a component's constructor
 */
export interface TranslationPluralForms {
    /**
     * - General plural form
     */
    other?: string | undefined;

    /**
     * - Plural form used with 0
     */
    zero?: string | undefined;

    /**
     * - Plural form used with 1
     */
    one?: string | undefined;

    /**
     * - Plural form used with 2
     */
    two?: string | undefined;

    /**
     * - Plural form used for a few
     */
    few?: string | undefined;

    /**
     * - Plural form used for many
     */
    many?: string | undefined;
}
