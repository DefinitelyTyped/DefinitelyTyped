import "jqueryui";
import { ComparableOptions } from "./ComparableOptions";
import { ControlOptions } from "./ControlOptions";
import { DateOptions } from "./DateOptions";

/**
 * Provides options for the date-comparsion control.
 */
export interface UIDateCompareOptions
    extends JQueryUI.DatepickerOptions, DateOptions, ControlOptions, ComparableOptions
{}
