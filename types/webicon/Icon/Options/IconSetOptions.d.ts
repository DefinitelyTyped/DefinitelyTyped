import { IconOptions } from "./IconOptions";
import { SvgIcon } from "../SvgIcon";
import { SizeableOptions } from "./SizeableOptions";
import { Downloadable } from "./Downloadable";

/**
 * Provides options for svg-icon sets.
 */
export interface IconSetOptions extends IconOptions, SvgIcon, SizeableOptions, Downloadable {
    /**
     * A value indicating whether icons must be 
     */
    cumulative?: boolean;
}