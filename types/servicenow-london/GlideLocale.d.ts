/**
 * GlideLocale provides information about display information for the local instance.
 *
 * There is no constructor for a GlideLocale object. Use the `get()` method to get a GlideLocale
 * object.
 */
declare class GlideLocale {
    /**
     * Returns the GlideLocale object.
     *
     * @returns The GlideLocale object.
     * @example
     *
     * var locale = GlideLocale.get();
     */
    static get(): GlideLocale;

    /**
     * Returns the decimal separator.
     *
     * @returns The decimal separator.
     * @example
     *
     * var locale = GlideLocale.get();
     * var decimalSeparator = locale.getDecimalSeparator();
     * gs.info( "The decimal separator is " + decimalSeparator);
     * // The decimal separator is .
     */
    getDecimalSeparator(): string;

    /**
     * Returns the grouping separator.
     *
     * @returns The grouping separator.
     * @example
     *
     * var locale = GlideLocale.get();
     * var groupingSeparator = locale.getGroupingSeparator();
     * gs.info( "The grouping separator is " + groupingSeparator);
     */
    getGroupingSeparator(): string;
}
