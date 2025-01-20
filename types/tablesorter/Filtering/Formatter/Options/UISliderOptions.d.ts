import "jqueryui";
import { Omit } from "../../../Omit";
import { ComparableOptions } from "./ComparableOptions";
import { ControlOptions } from "./ControlOptions";
import { DefaultValueOptions } from "./DefaultValueOptions";
import { DelayableOptions } from "./DelayableOptions";
import { PreviewableOptions } from "./PreviewableOptions";
import { RangeOptions } from "./RangeOptions";
import { StrictOptions } from "./StrictOptions";
import { UIOptionsBase } from "./UIOptionsBase";

/**
 * Provides options for the ui-slider control.
 */
export interface UISliderOptions
    extends
        Omit<UIOptionsBase<JQueryUI.SliderOptions>, "values">,
        RangeOptions,
        ControlOptions,
        DefaultValueOptions<number>,
        ComparableOptions,
        PreviewableOptions,
        DelayableOptions,
        StrictOptions
{}
