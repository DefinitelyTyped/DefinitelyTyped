import { ImageIcon } from "./ImageIcon";
import { Sizeable } from "./Sizeable";

/**
 * Represents an svg-icon.
 */
export interface SvgIcon extends ImageIcon, Sizeable {
    /**
     * The default viewBox of the icon.
     */
    viewBox?: string;
}
