import { Html5Formatter } from "./Html5Formatter";
import { UIFormatter } from "./UIFormatter";
import { Select2Formatter } from "./Select2Formatter";

/**
 * Provides the functionality to generate filter-controls.
 */
export interface FilterFormatter extends
    Html5Formatter,
    UIFormatter,
    Select2Formatter { }
