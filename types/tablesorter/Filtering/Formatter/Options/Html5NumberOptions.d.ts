import { ControlOptions } from "./ControlOptions";
import { ComparableOptions } from "./ComparableOptions";
import { DefaultValueOptions } from "./DefaultValueOptions";
import { DelayableOptions } from "./DelayableOptions";
import { IntervalOptions } from "./IntervalOptions";
import { StrictOptions } from "./StrictOptions";
import { TestableOptions } from "./TestableOptions";
import { ToggleableOptions } from "./ToggleableOptions";

/**
 * Provides options for the html5 number control.
 */
export interface Html5NumberOptions extends
    IntervalOptions,
    ControlOptions,
    DefaultValueOptions<number>,
    ComparableOptions,
    ToggleableOptions,
    DelayableOptions,
    StrictOptions,
    TestableOptions { }
