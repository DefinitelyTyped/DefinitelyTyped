import { UrlConfig } from "../../Web/UrlConfig";
import { IconOptions } from "./IconOptions";

/**
 * Represents a downloadable object.
 */
export interface Downloadable<TUriParam = never> extends IconOptions {
    /**
     * The url to load the source from.
     */
    url?: UrlConfig<TUriParam> | undefined;

    /**
     * An alias of the `url`-property.
     */
    uri?: this["url"] | undefined;
}
