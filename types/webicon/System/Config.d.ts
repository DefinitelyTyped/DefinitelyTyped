import { CssClassConfig } from "../Icon/CssClassConfig";
import { AliasOptions } from "../Icon/Options/AliasOptions";
import { CssIconSetOptions } from "../Icon/Options/CssIconSetOptions";
import { ImageIconOptions } from "../Icon/Options/ImageIconOptions";
import { SizeableOptions } from "../Icon/Options/SizeableOptions";
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
    icons?: IdentityMap<string, ImageIconOptions | SvgIconOptions> | undefined;

    /**
     * An alias of the `icons`-property.
     */
    icon?: this["icons"] | undefined;

    /**
     * The svg-sets to provide.
     */
    svgSets?: IdentityMap<string, SvgIconSetOptions | SvgCumulativeIconSetOptions> | undefined;

    /**
     * An alias of the `svgSets`-property.
     */
    svgSet?: this["svgSets"] | undefined;

    /**
     * An alias of the `svgSets`-property.
     */
    iconSet?: this["svgSets"] | undefined;

    /**
     * An alias of the `svgSets`-property.
     */
    iconSets?: this["svgSets"] | undefined;

    /**
     * A set of icon-fonts to provide.
     */
    fonts?: IdentityMap<CssClassConfig, CssIconSetOptions> | undefined;

    /**
     * An alias of the `fonts`-property.
     */
    font?: this["fonts"] | undefined;

    /**
     * A set of sprite-icons to provide.
     */
    sprites?: IdentityMap<CssClassConfig, CssIconSetOptions> | undefined;

    /**
     * An alias of the `sprites`-property.
     */
    sprite?: this["sprites"] | undefined;

    /**
     * A set of alias-names for icon-sets.
     */
    alias?: IdentityMap<string, AliasOptions> | undefined;

    /**
     * An alias of the `alias`-property.
     */
    sourceAlias?: this["alias"] | undefined;

    /**
     * The default icon-set to provide.
     */
    defaultIconSetUrl?: string | (SvgIconSetOptions | SvgCumulativeIconSetOptions) | undefined;

    /**
     * An alias of the `defaultIconSetUrl`-property.
     */
    defaultSvgSetUrl?: this["defaultIconSetUrl"] | undefined;

    /**
     * An alias of the `defaultIconSetUrl`-property.
     */
    defaultSvgIconSetUrl?: this["defaultIconSetUrl"] | undefined;

    /**
     * The default icon-set to use.
     */
    defaultSource?: string | Identifiable | undefined;

    /**
     * An alias of the `defaultSource`-property.
     */
    default?: this["defaultSource"] | undefined;

    /**
     * The default size for svg-icons.
     */
    defaultSvgIconSize?: number | SizeableOptions | undefined;
}
