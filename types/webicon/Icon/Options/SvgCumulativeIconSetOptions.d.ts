import { IconSetOptions } from "./IconSetOptions";

/**
 * Provides options for svg-sets which are loaded lazily.
 */
export interface SvgCumulativeIconSetOptions extends IconSetOptions {
    cumulative: true;

    /**
     * The amount of miliseconds to wait before downloading the icons.
     */
    waitDuration?: number;
}
