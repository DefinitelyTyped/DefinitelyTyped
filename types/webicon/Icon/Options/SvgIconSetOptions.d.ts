import { IconSetOptions } from "./IconSetOptions";
import { Storeable } from "./Storeable";

/**
 * Provides options for svg-icon sets.
 */
export interface SvgIconSetOptions extends IconSetOptions, Storeable {
    cumulative?: false;
}
