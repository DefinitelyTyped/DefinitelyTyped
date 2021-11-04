import "jquery";
import {
    Config,
    ImageIconOptions,
    SvgIconOptions,
    Identifiable,
    SvgIconSetOptions,
    SvgCumulativeIconSetOptions,
    CssIconSetOptions,
    ImageIcon,
    DynamicUrlDeclaration,
    SvgIconSet,
    SvgCumulativeIconSet,
    CssIconSet
} from "webicon";

/**
 * Provides tests for the `webicon`-module.
 */
export class WebiconTests {
    getUrlObject<TUriParam = undefined>(): DynamicUrlDeclaration<TUriParam> {
        const result: DynamicUrlDeclaration<TUriParam> = {
            url: "",
            params: {}
        };

        return result;
    }

    getStringUrlCallback<TUriParam = undefined>(): DynamicUrlDeclaration<TUriParam> {
        const result: DynamicUrlDeclaration<TUriParam> = {
            url: (arg) => {
                // $ExpectType TUriParam
                arg;
                return "";
            },
            params: {}
        };
        return result;
    }

    getObjectUrlCallback<TUriParam = undefined>(): DynamicUrlDeclaration<TUriParam> {
        const result: DynamicUrlDeclaration<TUriParam> = {
            url: (arg) => {
                // $ExpectType TUriParam
                arg;
                return {
                    url: "",
                    params: {}
                };
            }
        };

        return result;
    }

    /**
     * Tests for the `webicon`-module.
     */
    Test() {
        const config: Config = {};
        const IDParser: ImageIconOptions["iconIdParser"] = (id, params) => {
            // $ExpectType string
            id;
            // $ExpectType string[]
            params;
            return "";
        };

        const IDResolver: ImageIconOptions["iconIdResolver"] = (id) => {
            // $ExpectType string
            id;
            return "";
        };

        const ClassResolver: CssIconSetOptions["className"] = (id, params) => {
            // $ExpectType string
            id;
            // $ExpectType string[]
            params;
            return "";
        };

        const icon: ImageIcon = {
            iconIdParser: IDParser
        };

        const set: SvgIconSet = {
            cumulative: false,
            iconIdParser: IDParser,
            iconSize: 1,
            viewBox: ""
        };

        const cumulativeSet: SvgCumulativeIconSet = {
            cumulative: true,
            iconIdParser: IDParser,
            iconSize: 1,
            viewBox: "",
            waitDuration: 1
        };

        const cssIconSet: CssIconSet = {
            iconIdParser: IDParser
        };

        const iconOptions: SvgIconOptions = {
            iconIdParser: IDParser,
            iconIdResolver: IDResolver,
            iconSize: 1,
            svgIconSize: 1,
            preloadable: true,
            size: 1,
            url: "",
            uri: "",
            viewBox: ""
        };

        const idIconOptions: Identifiable & SvgIconOptions = {
            id: "clock",
            iconIdParser: IDParser,
            iconIdResolver: IDResolver,
            iconSize: 1,
            svgIconSize: 1,
            preloadable: true,
            size: 1,
            url: "",
            uri: "",
            viewBox: ""
        };

        const setOptions: SvgIconSetOptions = {
            cumulative: false,
            iconIdParser: IDParser,
            iconIdResolver: IDResolver,
            iconSize: 1,
            preloadable: true,
            size: 1,
            svgIconSize: 1,
            uri: "",
            url: "",
            viewBox: ""
        };

        const cumulativeSetOptions: SvgCumulativeIconSetOptions = {
            cumulative: true,
            iconIdParser: IDParser,
            iconSize: 1,
            size: 1,
            svgIconSize: 1,
            uri: "",
            url: "",
            viewBox: "",
            waitDuration: 0
        };

        const idSetOptions: Identifiable & SvgIconSetOptions = {
            id: "",
            cumulative: false,
            iconIdParser: IDParser,
            iconIdResolver: IDResolver,
            iconSize: 1,
            preloadable: true,
            size: 1,
            svgIconSize: 1,
            uri: "",
            url: "",
            viewBox: ""
        };

        const cssIconSetOptions: CssIconSetOptions = {
            class: "",
            className: "",
            cssClass: "",
            iconIdParser: IDParser
        };

        const idCssIconOptions: Identifiable & CssIconSetOptions = {
            id: "",
            class: "",
            className: "",
            cssClass: "",
            iconIdParser: IDParser
        };

        /**
         * Configuring `webicon` using a configuration-handler.
         */
        $().webicons(
            (config) => {
                // $ExpectType PublicApi
                config;
                config.icon("", "", icon);
                config.icon("", this.getUrlObject(), icon);
                config.icon("", this.getStringUrlCallback(), icon);
                config.icon("", this.getObjectUrlCallback(), icon);

                config.svgSet("", "");
                config.svgSet("", "", set);
                config.svgSet("", "", cumulativeSet);
                config.svgSet("", this.getUrlObject());
                config.svgSet("", this.getUrlObject(), set);
                config.svgSet("", this.getUrlObject<string[]>(), cumulativeSet);
                config.svgSet("", this.getStringUrlCallback());
                config.svgSet("", this.getStringUrlCallback(), set);
                config.svgSet("", this.getStringUrlCallback<string[]>(), cumulativeSet);
                config.svgSet("", this.getObjectUrlCallback());
                config.svgSet("", this.getObjectUrlCallback(), set);
                config.svgSet("", this.getObjectUrlCallback<string[]>(), cumulativeSet);
                config.iconSet("", "");
                config.iconSet("", "", set);
                config.iconSet("", "", cumulativeSet);
                config.iconSet("", this.getUrlObject());
                config.iconSet("", this.getUrlObject(), set);
                config.iconSet("", this.getUrlObject<string[]>(), cumulativeSet);
                config.iconSet("", this.getStringUrlCallback());
                config.iconSet("", this.getStringUrlCallback(), set);
                config.iconSet("", this.getStringUrlCallback<string[]>(), cumulativeSet);
                config.iconSet("", this.getObjectUrlCallback());
                config.iconSet("", this.getObjectUrlCallback(), set);
                config.iconSet("", this.getObjectUrlCallback<string[]>(), cumulativeSet);

                config.font("", "", cssIconSet);
                config.font("", ClassResolver, cssIconSet);

                config.sprite("", "", cssIconSet);
                config.sprite("", ClassResolver, cssIconSet);

                config.alias("", "");
                config.sourceAlias("", "");

                config.defaultIconSetUrl("");
                config.defaultIconSetUrl("", set);
                config.defaultSvgSetUrl("");
                config.defaultSvgSetUrl("", set);
                config.defaultSvgIconSetUrl("");
                config.defaultSvgIconSetUrl("", set);

                config.defaultSource("");
                config.default("");

                config.defaultSvgIconSize(1);

                config.preload(
                    (loader) => {
                        // $ExpectType IconPreloader
                        loader;
                    });

                config.ready(
                    (injector) => {
                        // $ExpectType Injector
                        injector;
                    });
            });

        /**
         * Declaring urls
         * Using a string
         */
        setOptions.url =
            setOptions.uri =
            iconOptions.url =
            iconOptions.uri = "";

        /**
         * Using an object
         */
        setOptions.url =
            setOptions.uri =
            iconOptions.url =
            iconOptions.uri = this.getUrlObject();

        /**
         * Using a function
         * Returning a string
         */
        setOptions.url =
            setOptions.uri =
            iconOptions.url =
            iconOptions.uri = this.getStringUrlCallback();

        /**
         * Returning an object
         */
        setOptions.url =
            setOptions.uri =
            iconOptions.url =
            iconOptions.uri = this.getObjectUrlCallback();

        /**
         * Declaring class-resolvers
         * Using a string
         */
        cssIconSetOptions.className =
            cssIconSetOptions.cssClass =
            cssIconSetOptions.class = "";

        /**
         * Using a function
         */
        cssIconSetOptions.className =
            cssIconSetOptions.cssClass =
            cssIconSetOptions.class = ClassResolver;

        /**
         * Setting icons
         * Simple
         */
        config.icons =
            config.icon = {
                clock: ""
            };

        /**
         * Complex
         */
        config.icons =
            config.icon = {
                clock: iconOptions
            };

        /**
         * Array
         */
        config.icons =
            config.icon = [
                idIconOptions
            ];

        /**
         * Setting svg-sets
         * Simple
         */
        config.svgSets =
            config.svgSet =
            config.iconSets =
            config.iconSet = {
                clock: ""
            };

        /**
         * Complex
         */
        config.svgSets =
            config.svgSet =
            config.iconSets =
            config.iconSet = {
                clock: setOptions,
                alt: cumulativeSetOptions
            };

        /**
         * Array
         */
        config.svgSets =
            config.svgSet =
            config.iconSets =
            config.iconSet = [
                idSetOptions
            ];

        /**
         * Setting css-class icons
         * Simple
         */
        config.fonts =
            config.font =
            config.sprites =
            config.sprite = {
                clock: ""
            };

        /**
         * Complex
         */
        config.fonts =
            config.font =
            config.sprites =
            config.sprite = {
                clock: cssIconSetOptions
            };

        /**
         * Array
         */
        config.fonts =
            config.font =
            config.sprites =
            config.sprite = [
                idCssIconOptions
            ];

        /**
         * Setting aliases
         * Simple
         */
        config.alias =
            config.sourceAlias = {
                alt: "clock"
            };

        /**
         * Complex
         */
        config.alias =
            config.sourceAlias = {
                id: {
                    alias: ""
                }
            };

        /**
         * Array
         */
        config.alias =
            config.sourceAlias = [
                {
                    id: "id",
                    alias: ""
                }
            ];

        /**
         * Setting a default icon-set url
         * Simple
         */
        config.defaultIconSetUrl =
            config.defaultSvgSetUrl =
            config.defaultSvgIconSetUrl = "";

        /**
         * Complex
         */
        config.defaultIconSetUrl =
            config.defaultSvgSetUrl =
            config.defaultSvgIconSetUrl = setOptions;

        /**
         * Setting a default icon-set
         * Simple
         */
        config.defaultSource =
            config.default = "";

        /**
         * Complex
         */
        config.defaultSource =
            config.default = {
                id: ""
            };

        /**
         * Setting a default icon-size for vector-icons
         * Simple
         */
        config.defaultSvgIconSize = 1;

        /**
         * Complex
         */
        config.defaultSvgIconSize = {
            iconSize: 1,
            size: 1,
            svgIconSize: 1
        };

        $().webicons(config);
    }
}
