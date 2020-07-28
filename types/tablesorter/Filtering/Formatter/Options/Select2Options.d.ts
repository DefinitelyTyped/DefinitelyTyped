import { Options } from "select2";
import { ControlOptions } from "./ControlOptions";
import { DefaultValueOptions } from "./DefaultValueOptions";
import { StrictOptions } from "./StrictOptions";

/**
 * Provides options for the select2-control.
 */
export interface Select2Options extends
    Options,
    ControlOptions,
    StrictOptions,
    DefaultValueOptions<string> { }
