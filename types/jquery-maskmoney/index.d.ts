// Type definitions for jQuery maskMoney 3.0
// Project: https://github.com/plentz/jquery-maskmoney
// Definitions by: Anderson Friaça <https://github.com/AndersonFriaca>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="jquery" />

declare namespace jQueryMaskMoney {
    interface Options {
        /**
         * The prefix to be displayed before the value entered
         */
        prefix?: string;

        /**
         * The prefix to be displayed after the value entered
         */
        suffix?: string;

        /**
         * Set if the prefix and suffix will stay in the field's value after the user exits the field
         */
        affixesStay?: boolean;

        /**
         * The thousands separator
         */
        thousands?: string;

        /**
         * The decimal separator
         */
        decimal?: string;

        /**
         * How many decimal places are allowed
         */
        precision?: number;

        /**
         * Setting to prevent users from inputing zero
         */
        allowZero?: boolean;

        /**
         * Setting to prevent negative values
         */
        allowNegative?: boolean;
    }
}
interface JQuery {
    /**
     * Apply mask to input, can be pass default value to it
     */
    maskMoney(methodName: 'mask', defaultValue?: number): JQuery;

    /**
     * Returns a float value from input field masked
     */
    maskMoney(method?: 'unmasked'): number[];

    /**
     * Apply mask to input when the argument are options
     * Remove maskMoney from an element when the argument is "destroy"
     */
    maskMoney(methodOrOption?: 'destroy' | jQueryMaskMoney.Options): JQuery;
}
