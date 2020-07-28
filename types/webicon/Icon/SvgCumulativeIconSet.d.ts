import { SvgIcon } from "./SvgIcon";

/**
 * Represents an svg icon-set which is loaded delayed.
 */
export interface SvgCumulativeIconSet extends SvgIcon {
    /**
     * A value indicating whether the icons are loaded separately.
     */
    cumulative: true;

    /**
     * The number of miliseconds to wait before downloading the icons.
     */
    waitDuration?: number;
}
