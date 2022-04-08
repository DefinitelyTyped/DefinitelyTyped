import { SvgIcon } from "../SvgIcon";
import { Downloadable } from "./Downloadable";
import { IconOptions } from "./IconOptions";
import { SizeableOptions } from "./SizeableOptions";

/**
 * Provides options for svg-icon sets.
 */
export interface IconSetOptions extends IconOptions, SvgIcon, SizeableOptions, Downloadable {
    /**
     * A value indicating whether the icons are loaded separately.
     */
    cumulative?: boolean;
}
