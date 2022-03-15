import { Sizeable } from "../Sizeable";

/**
 * Provides options for sizeable objects.
 */
export interface SizeableOptions extends Sizeable {
    /**
     * An alias of the `iconSize`-property.
     */
    size?: this["iconSize"] | undefined;

    /**
     * An alias of the `iconSize`-property.
     */
    svgIconSize?: this["iconSize"] | undefined;
}
