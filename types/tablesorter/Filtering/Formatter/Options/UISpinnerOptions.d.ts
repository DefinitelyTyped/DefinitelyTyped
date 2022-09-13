import "jqueryui";
import { ComparableOptions } from "./ComparableOptions";
import { ControlOptions } from "./ControlOptions";
import { DefaultValueOptions } from "./DefaultValueOptions";
import { DelayableOptions } from "./DelayableOptions";
import { IntervalOptions } from "./IntervalOptions";
import { StrictOptions } from "./StrictOptions";
import { ToggleableOptions } from "./ToggleableOptions";
import { UIOptionsBase } from "./UIOptionsBase";

/**
 * Provides options for the ui-slider control.
 */
export interface UISpinnerOptions extends
    UIOptionsBase<JQueryUI.SpinnerOptions>,
    IntervalOptions,
    ControlOptions,
    DefaultValueOptions<number>,
    ToggleableOptions,
    ComparableOptions,
    DelayableOptions,
    StrictOptions { }
