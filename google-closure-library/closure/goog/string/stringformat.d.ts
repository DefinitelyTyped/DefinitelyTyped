declare module goog.string$ {

    /**
     * Performs sprintf-like conversion, ie. puts the values in a template.
     * DO NOT use it instead of built-in conversions in simple cases such as
     * 'Cost: %.2f' as it would introduce unneccessary latency oposed to
     * 'Cost: ' + cost.toFixed(2).
     * @param {string} formatString Template string containing % specifiers.
     * @param {...string|number} var_args Values formatString is to be filled with.
     * @return {string} Formatted string.
     */
    function format(formatString: string, ...var_args: (string|number)[]): string;
}
