import { CssClassConfig } from "../CssClassConfig";
import { IconOptions } from "./IconOptions";

/**
 * Provides options for css icon-sets.
 */
export interface CssIconSetOptions extends IconOptions {
    /**
     * Either a text-pattern or a callback which provides a css-classname.
     *
     * The symbols `?` and `%` in the text-pattern are replaced by the icon-id.
     */
    className?: CssClassConfig;

    /**
     * An alias of the `className`-property.
     */
    class?: this["className"];

    /**
     * An alias of the `className`-property.
     */
    cssClass?: this["className"];
}
