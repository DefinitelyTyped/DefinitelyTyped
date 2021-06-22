import { SvgIcon } from "./SvgIcon";

/**
 * Represents an svg icon-set.
 */
export interface SvgIconSet extends SvgIcon {
    /**
     * A value indicating whether the icons are loaded separately.
     */
    cumulative?: false;
}
