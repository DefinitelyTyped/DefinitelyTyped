import { Omit } from "../../../Omit";
import { DelayableOptions } from "./DelayableOptions";
import { NumericOptions } from "./NumericOptions";
import { PreviewableOptions } from "./PreviewableOptions";
import { UIOptionsBase } from "./UIOptionsBase";

/**
 * Provides options for the ui-range control.
 */
export interface UIRangeOptions
    extends Omit<UIOptionsBase<JQueryUI.SliderOptions>, "value">, NumericOptions, DelayableOptions, PreviewableOptions
{}
