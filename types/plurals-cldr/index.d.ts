type Form = "zero" | "one" | "two" | "few" | "many" | "other";

interface Plural {
    /**
     * Returns the form name for a given number. If the locale is not
     * supported, returns `null`.
     *
     * @param locale The locale code.
     * @param number The number to check. May be passed as a string to keep
     *     trailing zeroes.
     */
    (locale: string, number: number | string): Form | null;

    /**
     * Returns an array of available forms for the given locale. If the
     * locale is not supported, returns `null`.
     *
     * @param locale The locale code.
     */
    forms(locale: string): Form[] | null;

    /**
     * Returns the index of the form for a given number. If the locale is
     * not supported, returns `-1`.
     *
     * This is convenient for implementing a lookup from a compact, ordered
     * list. The order of forms for all locales is `zero`, `one`, `two`,
     * `few`, `many`, `other`. Remove the forms not used by a locale to get
     * the indices of each.
     *
     * @param locale The locale code.
     * @param number The number to check. May be passed as a string to keep
     *     trailing zeroes.
     */
    indexOf(locale: string, number: number | string): number;
}

/**
 * Gets the CLDR cardinal plural forms for numbers in different locales.
 */
declare const plural: Plural & {
    /**
     * Gets the CLDR ordinal plural forms for numbers in different locales.
     */
    ordinal: Plural;
};

export = plural;
