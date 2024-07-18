import { Html5Formatter } from "./Html5Formatter";
import { Select2Formatter } from "./Select2Formatter";
import { UIFormatter } from "./UIFormatter";

/**
 * Provides the functionality to generate filter-controls.
 */
export interface FilterFormatter extends Html5Formatter, UIFormatter, Select2Formatter {}
