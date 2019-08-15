import { ComparableOptions } from "./ComparableOptions";
import { ControlOptions } from "./ControlOptions";
import { DefaultValueOptions } from "./DefaultValueOptions";
import { DelayableOptions } from "./DelayableOptions";
import { PreviewableOptions } from "./PreviewableOptions";
import { RangeOptions } from "./RangeOptions";
import { StrictOptions } from "./StrictOptions";
import { TestableOptions } from "./TestableOptions";

/**
 * Provides options for the html5 range control.
 */
export interface Html5RangeOptions extends
    RangeOptions,
    ControlOptions,
    DefaultValueOptions<number>,
    ComparableOptions,
    StrictOptions,
    PreviewableOptions,
    DelayableOptions,
    TestableOptions { }
