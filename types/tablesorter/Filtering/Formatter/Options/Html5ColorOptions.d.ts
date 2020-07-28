import { DefaultValueOptions } from "./DefaultValueOptions";
import { PreviewableOptions } from "./PreviewableOptions";
import { StrictOptions } from "./StrictOptions";
import { TestableOptions } from "./TestableOptions";
import { ToggleableOptions } from "./ToggleableOptions";

/**
 * Provides options for the html5 color control.
 */
export interface Html5ColorOptions extends
    DefaultValueOptions<string>,
    ToggleableOptions,
    StrictOptions,
    PreviewableOptions,
    TestableOptions { }
