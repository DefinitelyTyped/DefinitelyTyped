// Type definitions for webicon 0.10
// Project: https://icons8.github.io/webicon/
// Definitions by: Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { CssClassConfig } from "./Icon/CssClassConfig";
import { CssIconSet } from "./Icon/CssIconSet";
import { IconClassGenerator } from "./Icon/IconClassGenerator";
import { ImageIcon } from "./Icon/ImageIcon";
import { AliasOptions } from "./Icon/Options/AliasOptions";
import { CssIconSetOptions } from "./Icon/Options/CssIconSetOptions";
import { ImageIconOptions } from "./Icon/Options/ImageIconOptions";
import { SvgCumulativeIconSetOptions } from "./Icon/Options/SvgCumulativeIconSetOptions";
import { SvgIconOptions } from "./Icon/Options/SvgIconOptions";
import { SvgIconSetOptions } from "./Icon/Options/SvgIconSetOptions";
import { SvgCumulativeIconSet } from "./Icon/SvgCumulativeIconSet";
import { SvgIcon } from "./Icon/SvgIcon";
import { SvgIconSet } from "./Icon/SvgIconSet";
import { Config } from "./System/Config";
import { ConfigurationHandler } from "./System/ConfigurationHandler";
import { IconLoadedEventHandler } from "./System/IconLoadedEventHandler";
import { IconPreloader } from "./System/IconPreloader";
import { Identifiable } from "./System/Identifiable";
import { Injector } from "./System/Injector";
import { PublicApi } from "./System/PublicApi";
import { DynamicUrlDeclaration } from "./Web/DynamicUrlDeclaration";
import { StaticUrlDeclaration } from "./Web/StaticUrlDeclaration";
import { UrlConfig } from "./Web/UrlConfig";

export {
    CssClassConfig,
    CssIconSet,
    IconClassGenerator,
    ImageIcon,
    AliasOptions,
    CssIconSetOptions,
    ImageIconOptions,
    SvgCumulativeIconSetOptions,
    SvgIconOptions,
    SvgIconSetOptions,
    SvgCumulativeIconSet,
    SvgIcon,
    SvgIconSet,
    Config,
    ConfigurationHandler,
    IconLoadedEventHandler,
    IconPreloader,
    Identifiable,
    Injector,
    PublicApi,
    DynamicUrlDeclaration,
    StaticUrlDeclaration,
    UrlConfig
};

declare global {
    interface JQuery<TElement = HTMLElement> {
        /**
         * Initializes the web-icons.
         *
         * @param config
         * Either the configuration for initializing web-icons or a callback for configuring the web-icons.
         */
        webicons(config: Config | ConfigurationHandler): this;
    }
}
