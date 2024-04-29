declare namespace parseDecimalNumber {
    type ArrayOptions = [thousands: string, decimal: string];

    interface HashOptions {
        /**
         * Decimal point character.
         * Default: ".".
         */
        decimal: string;
        /**
         * Thousands separator character.
         * Default: ",".
         */
        thousands: string;
    }

    type Options = ArrayOptions | HashOptions | string;

    /**
     * Has the same effect as `parseDecimalNumber.setOptions({ thousands: ",", decimal: "." })`.
     */
    function factoryReset(): void;
    /**
     * Set the default thousands and decimal characters that are used when no options are passed to
     * {@link parseDecimalNumber}.
     */
    function setOptions(hash: HashOptions): void;
    /**
     * Returns a function that will take a string as an argument and return a float or `NaN`,
     * just like {@link parseDecimalNumber}.
     */
    function withOptions(options: Options, enforceGroupSize?: boolean): (string: string) => number;
}

declare function parseDecimalNumber(
    /**
     * A string that is supposed to contain a number.
     */
    string: string,
    /**
     * A string, array or hash with thousands and decimal separators.
     */
    options?: parseDecimalNumber.Options,
    /**
     * A boolean indicating whether to support that individual groups between the thousands
     * character are exactly 3 digits.
     */
    enforceGroupSize?: boolean,
): number;

export = parseDecimalNumber;
