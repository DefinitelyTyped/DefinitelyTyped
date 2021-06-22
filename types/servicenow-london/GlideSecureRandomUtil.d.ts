/**
 * The scoped GlideSecureRandomUtil API provides methods for generating integers, long values, and
 * strings.
 *
 * There is no constructor for this class. Methods are accessed through the static object
 * `GlideSecureRandomUtil`. The `GlideSecureRandomUtil` class is available in both global and scoped
 *  applications.
 */
declare const GlideSecureRandomUtil: {
    /**
     * Generates a pseudo-random integer.
     *
     * @returns The pseudo-randomly generated integer.
     * @example
     *
     * gs.info(GlideSecureRandomUtil.getSecureRandomInt());
     */
    getSecureRandomInt(): number;

    /**
     * Generates a pseudo-random integer between 0 (inclusive) and the bound (exclusive) value that
     * you pass into the method.
     *
     * @param bound The bound value.
     * @returns The pseudo-randomly generated integer.
     * @example
     *
     * gs.info(GlideSecureRandomUtil.getSecureRandomIntBound(100));
     */
    getSecureRandomIntBound(bound: number): number;

    /**
     * Generates pseudo-random long value.
     *
     * @returns The pseudo-randomly generated 64-bit integer.
     * @example
     *
     * gs.info(GlideSecureRandomUtil.getSecureRandomLong());
     */
    getSecureRandomLong(): number;

    /**
     * Generates a random alpha-numeric String with the specified length.
     *
     * @param length The length of the string in number of characters.
     * @returns The randomly generated string.
     * @example
     *
     * gs.info(GlideSecureRandomUtil.getSecureRandomString(12));
     */
    getSecureRandomString(length: number): string;
};
