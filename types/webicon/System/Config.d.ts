import { SizeableOptions } from "../Icon/Options/SizeableOptions";
import { CssClassConfig } from "../Icon/CssClassConfig";
import { AliasOptions } from "../Icon/Options/AliasOptions";
import { CssIconSetOptions } from "../Icon/Options/CssIconSetOptions";
import { ImageIconOptions } from "../Icon/Options/ImageIconOptions";
import { SvgCumulativeIconSetOptions } from "../Icon/Options/SvgCumulativeIconSetOptions";
import { SvgIconOptions } from "../Icon/Options/SvgIconOptions";
import { SvgIconSetOptions } from "../Icon/Options/SvgIconSetOptions";
import { Identifiable } from "./Identifiable";
import { IdentityMap } from "./IdentityMap";

/**
 * Provides settings for the `webicon`-module.
 */
export interface Config {
    /**
     * The icons to provide.
     */
    icons?: IdentityMap<string, ImageIconOptions | SvgIconOptions>;

    /**
     * An alias of the `icons`-property.
     */
    icon?: this["icons"];

    /**
     * The svg-sets to provide.
     */
    svgSets?: IdentityMap<string, SvgIconSetOptions | SvgCumulativeIconSetOptions>;

    /**
     * An alias of the `svgSets`-property.
     */
    svgSet?: this["svgSets"];

    /**
     * An alias of the `svgSets`-property.
     */
    iconSet?: this["svgSets"];

    /**
     * An alias of the `svgSets`-property.
     */
    iconSets?: this["svgSets"];

    /**
     * A set of icon-fonts to provide.
     */
    fonts?: IdentityMap<CssClassConfig, CssIconSetOptions>;

    /**
     * An alias of the `fonts`-property.
     */
    font?: this["fonts"];

    /**
     * A set of sprite-icons to provide.
     */
    sprites?: IdentityMap<CssClassConfig, CssIconSetOptions>;

    /**
     * An alias of the `sprites`-property.
     */
    sprite?: this["sprites"];

    /**
     * A set of alias-names for icon-sets.
     */
    alias?: IdentityMap<string, AliasOptions>;

    /**
     * An alias of the `alias`-property.
     */
    sourceAlias?: this["alias"];

    /**
     * The default icon-set to provide.
     */
    defaultIconSetUrl?: string | (SvgIconSetOptions | SvgCumulativeIconSetOptions);

    /**
     * An alias of the `defaultIconSetUrl`-property.
     */
    defaultSvgSetUrl?: this["defaultIconSetUrl"];

    /**
     * An alias of the `defaultIconSetUrl`-property.
     */
    defaultSvgIconSetUrl?: this["defaultIconSetUrl"];

    /**
     * The default icon-set to use.
     */
    defaultSource?: string | Identifiable;

    /**
     * An alias of the `defaultSource`-property.
     */
    default?: this["defaultSource"];

    /**
     * The default size for svg-icons.
     */
    defaultSvgIconSize?: number | SizeableOptions;
}
