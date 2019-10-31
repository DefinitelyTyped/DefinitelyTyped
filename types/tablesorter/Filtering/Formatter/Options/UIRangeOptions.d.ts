import { NumericOptions } from "./NumericOptions";
import { DelayableOptions } from "./DelayableOptions";
import { PreviewableOptions } from "./PreviewableOptions";
import { Omit } from "../../../Omit";
import { UIOptionsBase } from "./UIOptionsBase";

/**
 * Provides options for the ui-range control.
 */
export interface UIRangeOptions extends
    Omit<UIOptionsBase<JQueryUI.SliderOptions>, "value">,
    NumericOptions,
    DelayableOptions,
    PreviewableOptions { }
