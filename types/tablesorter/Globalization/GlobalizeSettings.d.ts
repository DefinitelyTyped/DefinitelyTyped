import Globalize = require("globalize");
import { DateFormatterOptions } from "globalize";

/**
 * Provides settings for `Globalize`.
 */
export interface GlobalizeSettings extends DateFormatterOptions {
    /**
     * The language to localize the dates to.
     */
    lang: string;

    /**
     * The `Globalize`-object to use for localization.
     */
    Globalize: Globalize;
}
