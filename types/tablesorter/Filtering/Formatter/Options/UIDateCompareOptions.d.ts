import "jqueryui";
import { ControlOptions } from "./ControlOptions";
import { ComparableOptions } from "./ComparableOptions";
import { DateOptions } from "./DateOptions";

/**
 * Provides options for the date-comparsion control.
 */
export interface UIDateCompareOptions extends
    JQueryUI.DatepickerOptions,
    DateOptions,
    ControlOptions,
    ComparableOptions { }
