import "jqueryui";
import { DateOptions } from "./DateOptions";

/**
 * Provides settings for the date-range control.
 */
export interface UIDateRangeOptions extends JQueryUI.DatepickerOptions, DateOptions {
    /**
     * The label of the "from"-input.
     */
    textFrom?: string | undefined;

    /**
     * The label of the "to"-input.
     */
    textTo?: string | undefined;

    /**
     * The default `from`-value.
     */
    from?: Date | undefined;

    /**
     * The default `to`-value.
     */
    to?: Date | undefined;
}
