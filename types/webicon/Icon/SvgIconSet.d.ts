import { SvgIcon } from "./SvgIcon";

/**
 * Represents an svg icon-set.
 */
export interface SvgIconSet extends SvgIcon {
    /**
     * A value indicating whether icons must be 
     */
    cumulative?: false;
}