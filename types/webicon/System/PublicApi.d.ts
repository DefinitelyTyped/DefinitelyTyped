import { CssClassConfig } from "../Icon/CssClassConfig";
import { CssIconSet } from "../Icon/CssIconSet";
import { ImageIcon } from "../Icon/ImageIcon";
import { SvgCumulativeIconSet } from "../Icon/SvgCumulativeIconSet";
import { SvgIcon } from "../Icon/SvgIcon";
import { SvgIconSet } from "../Icon/SvgIconSet";
import { UrlConfig } from "../Web/UrlConfig";
import { IconLoadedEventHandler } from "./IconLoadedEventHandler";
import { Injector } from "./Injector";

/**
 * An object for configuring the `webicon`-module.
 */
export interface PublicApi {
    /**
     * Adds a new icon.
     *
     * @param id
     * The id of the icon to add.
     *
     * @param urlConfig
     * The url to download the icon from.
     *
     * @param options
     * Additional options for the icon.
     */
    icon(id: string, urlConfig: UrlConfig<undefined>, options?: ImageIcon | SvgIcon): this;

    /**
     * Adds an icon-set.
     *
     * @param id
     * The id of the icon-set to add.
     *
     * @param urlConfig
     * The url to download the icon-set from.
     *
     * @param options
     * Additional options for the icon-set.
     */
    svgSet(id: string, urlConfig: UrlConfig<undefined>, options?: SvgIconSet): this;

    /**
     * Adds an icon-set.
     *
     * @param id
     * The id of the icon-set to add.
     *
     * @param urlConfig
     * The url to download the icon-set from.
     *
     * @param options
     * Additional options for the icon-set.
     */
    svgSet(id: string, urlConfig: UrlConfig<string[]>, options?: SvgCumulativeIconSet): this;

    /**
     * An alias of the `svgSet`-method.
     */
    iconSet: this["svgSet"];

    /**
     * Adds a font icon-set.
     *
     * @param id
     * The id of the icon-set to add.
     *
     * @param cssClassConfig
     * The css-class to add to icons.
     *
     * @param options
     * Additional options for the icon-set.
     */
    font(id: string, cssClassConfig: CssClassConfig, options?: CssIconSet): this;

    /**
     * Adds a sprite icon-set.
     *
     * @param id
     * The id of the icon-set to add.
     *
     * @param cssClassConfig
     * The css-class to add to icons.
     *
     * @param options
     * Additional options for the icon-set.
     */
    sprite(id: string, cssClassConfig: CssClassConfig, options?: CssIconSet): this;

    /**
     * Adds a link to the `alias` icon-set.
     *
     * @param id
     * The id which links to the `alias`.
     *
     * @param alias
     * The id of the icon-set to refer to.
     */
    alias(id: string, alias: string): this;

    /**
     * An alias of the `alias`-method.
     */
    sourceAlias: this["alias"];

    /**
     * Adds a default svg-set.
     *
     * @param url
     * The url to the default svg-set to use.
     *
     * @param options
     * Additional options for the svg-set.
     */
    defaultIconSetUrl(url: string, options?: SvgIconSet | SvgCumulativeIconSet): this;

    /**
     * An alias of the `defaultSvgSetUrl`-method.
     */
    defaultSvgSetUrl: this["defaultIconSetUrl"];

    /**
     * An alias of the `defaultSvgSetUrl`-method.
     */
    defaultSvgIconSetUrl: this["defaultIconSetUrl"];

    /**
     * Sets a default icon-set.
     *
     * @param id
     * The id of the default icon-set.
     */
    defaultSource(id: string): this;

    /**
     * An alias of the `defaultSource`-method.
     */
    default: this["defaultSource"];

    /**
     * Sets the default icon-size for svg-icons.
     *
     * @param size
     * The default svg icon-size.
     */
    defaultSvgIconSize(size: number): this;

    /**
     * Preloads the icons.
     *
     * @param eventHandler
     * A callback for handling the icon-loader `Promise`.
     */
    preload(eventHandler?: IconLoadedEventHandler): this;

    /**
     * Preloads the icons.
     *
     * @param names
     * Either a value indicating whether to preload all icons or the names of the icons to preload.
     *
     * @param eventHandler
     * A callback for handling the icon-loader `Promise`.
     */
    preload(names: string | string[] | boolean, eventHandler?: IconLoadedEventHandler): this;

    /**
     * Adds an event-handler to the `ready`-event.
     *
     * @param eventHandler
     * THe event-handler for handling the `ready`-event.
     */
    ready(eventHandler: (injector: Injector) => void): this;
}
