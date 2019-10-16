import { NumericOptions } from "./NumericOptions";

/**
 * Provides options for interval filter-controls.
 */
export interface IntervalOptions extends NumericOptions {
    /**
     * The interval of the control.
     */
    step?: number;
}
