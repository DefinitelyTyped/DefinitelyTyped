import * as Highcharts from "highcharts";

/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
declare function factory(highcharts: typeof Highcharts): void;

/**
 * The Highcharts object is the placeholder for all other members, and various
 * utility functions. The most important member of the namespace would be the
 * chart constructor.
 */
declare module "../highcharts" {
    interface Chart {
        /**
         * Apply context to a format string from lang options of the chart.
         *
         * @param langKey
         *        Key (using dot notation) into lang option structure.
         *
         * @param context
         *        Context to apply to the format string.
         *
         * @return The formatted string.
         */
        langFormat(langKey: string, context: Highcharts.Dictionary<any>): string;
    }

    /**
     * i18n formatting function. Extends Highcharts.format() functionality by
     * also handling arrays and plural conditionals. Arrays can be indexed as
     * follows: - Format: 'This is the first index: {myArray[0]}. The last:
     * {myArray[-1]}.' - Context: { myArray: [0, 1, 2, 3, 4, 5] } - Result:
     * 'This is the first index: 0. The last: 5.' They can also be iterated
     * using the #each() function. This will repeat the contents of the bracket
     * expression for each element. Example: - Format: 'List contains:
     * {#each(myArray)cm }' - Context: { myArray: [0, 1, 2] } - Result: 'List
     * contains: 0cm 1cm 2cm ' The #each() function optionally takes a length
     * parameter. If positive, this parameter specifies the max number of
     * elements to iterate through. If negative, the function will subtract the
     * number from the length of the array. Use this to stop iterating before
     * the array ends. Example: - Format: 'List contains: {#each(myArray, -1)
     * }and {myArray[-1]}.' - Context: { myArray: [0, 1, 2, 3] } - Result: 'List
     * contains: 0, 1, 2, and 3.' Use the #plural() function to pick a string
     * depending on whether or not a context object is 1. Arguments are
     * #plural(obj, plural, singular). Example: - Format: 'Has {numPoints}
     * {#plural(numPoints, points, point}.' - Context: { numPoints: 5 } -
     * Result: 'Has 5 points.' Optionally there are additional parameters for
     * dual and none: #plural(obj, plural, singular, dual, none). Example: -
     * Format: 'Has {#plural(numPoints, many points, one point, two points,
     * none}.' - Context: { numPoints: 2 } - Result: 'Has two points.' The dual
     * or none parameters will take precedence if they are supplied.
     *
     * @param formatString
     *        The string to format.
     *
     * @param context
     *        Context to apply to the format string.
     *
     * @param time
     *        A `Time` instance for date formatting, passed on to H.format().
     *
     * @return The formatted string.
     */
    function i18nFormat(formatString: string, context: Highcharts.Dictionary<any>, time: Highcharts.Time): string;
}

export = factory;
export as namespace AccessibilityFactory;
