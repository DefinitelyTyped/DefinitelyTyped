// Type definitions for svg-sprite
// Project: https://github.com/jkphl/svg-sprite
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />
import File = require('vinyl');
import { Logger } from 'winston';

declare namespace sprite {
    interface SVGSpriterConstructor extends NodeJS.EventEmitter {
        /**
         * The spriter's constructor (always the entry point)
         * @param config Main configuration for the spriting process
         */
        new (config: Config): SVGSpriter;
    }

    interface SVGSpriter {
        /**
         * Registering source SVG files
         * @param file Absolute path to the SVG file or a vinyl file object carrying all the necessary values (the following arguments are ignored then).
         * @param name The "local" part of the file path, possibly including subdirectories which will get traversed to CSS selectors using the shape.id.separator configuration option.
         * @param svg SVG file content.
         */
        add(file: string | File, name: string, svg: string): SVGSpriter;
        /**
         * Registering source SVG files
         * @param file Absolute path to the SVG file or a vinyl file object carrying all the necessary values (the following arguments are ignored then).
         */
        add(file: File): SVGSpriter;
        /**
         * Triggering the sprite compilation
         * @param config Configuration object setting the output mode parameters for a single compilation run. If omitted, the mode property of the main configuration used for the constructor will be used.
         * @param callback Callback triggered when the compilation has finished.
         */
        compile(config: Config, callback: CompileCallback): SVGSpriter;
        /**
         * Triggering the sprite compilation
         * @param callback Callback triggered when the compilation has finished.
         */
        compile(callback: CompileCallback): void;
        /**
         * Accessing the intermediate SVG resources
         * @param dest Base directory for the SVG files in case the will be written to disk.
         * @param callback Callback triggered when the shapes are available.
         */
        getShapes(dest: string, callback: GetShapesCallback): void;
    }

    interface Config {
        /**
         * Main output directory
         * @default '.'
         */
        dest?: string;
        /**
         * Logging verbosity or custom logger
         */
        log?: string | Logger;
        /**
         * SVG shape configuration
         */
        shape?: Shape;
        /**
         * Sprite SVG options
         */
        svg?: Svg;
        /**
         * Custom templating variables
         */
        variables?: any;
        /**
         * Output mode configurations
         */
        mode?: Mode;
    }

    /**
     * All settings affecting the SVG shapes of the sprite
     */
    interface Shape {
        /**
         * SVG shape ID related options
         */
        id?: {
            /**
             * Separator for directory name traversal
             */
            separator?: string;
            /**
             * SVG shape ID generator callback
             */
            generator?: string | ((svg: string) => string);
            /**
             * File name separator for shape states (e.g. ':hover')
             */
            pseudo?: string;
            /**
             * Whitespace replacement for shape IDs
             */
            whitespace?: string;
        };
        /**
         * Dimension related options
         */
        dimension?: {
            /**
             * Max. shape width
             */
            maxWidth?: number;
            /**
             * Max. shape height
             */
            maxHeight?: number;
            /**
             * Floating point precision
             */
            precision?: number;
            /**
             * Width and height attributes on embedded shapes
             */
            attributes?: boolean;
        };
        /**
         * Spacing related options
         */
        spacing?: {
            /**
             * Padding around all shapes
             */
            padding?: number | number[];
            /**
             * Padding strategy (similar to CSS `box-sizing`)
             */
            box?: string;
        };
        /**
         * List of transformations / optimizations
         */
        transform?: (string | CustomConfigurationTransform | CustomCallbackTransform)[];
        /**
         * Path to YAML file with meta / accessibility data
         */
        meta?: string;
        /**
         * Path to YAML file with extended alignment data
         */
        align?: string;
        /**
         * Output directory for optimized intermediate SVG shapes
         */
        dest?: string;
    }

    /**
     * Pre-defined shape transformation with custom configuration
     */
    interface CustomConfigurationTransform {
        [transformationName: string]: {
            plugins?: { [transformationName: string]: boolean }[];
        }
    }

    /**
     * Custom callback transformation
     */
    interface CustomCallbackTransform {
        [transformationName: string]: {
            /**
             * Custom callback transformation
             * @param shape SVG shape object
             * @param sprite SVG spriter
             * @param callback Callback
             */
            (shape: any, sprite: SVGSpriter, callback: Function): any;
        }
    }

    interface Svg {
        /**
         * Output an XML declaration at the very beginning of each compiled sprite.
         * If you provide a non-empty string here, it will be used one-to-one as declaration (e.g. <?xml version="1.0" encoding="utf-8"?>).
         * If you set this to TRUE, *svg-sprite* will look at the registered shapes for an XML declaration and use the first one it can find.
         * @default true
         */
        xmlDeclaration?: boolean | string;
        /**
         * Include a <DOCTYPE> declaration in each compiled sprite. If you provide a non-empty string here,
         * it will be used one-to-one as declaration (e.g. <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Basic//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-basic.dtd">).
         * If you set this to TRUE, *svg-sprite* will look at the registered shapes for a DOCTYPE declaration and use the first one it can find.
         * @default true
         */
        doctypeDeclaration?: boolean | string;
        /**
         * In order to avoid ID clashes, the default behavior is to namespace all IDs in the source SVGs before compiling them into a sprite.
         * Each ID is prepended with a unique string. In some situations, it might be desirable to disable ID namespacing, e.g. when you want to script the resulting sprite.
         * Just set svg.namespaceIDs to FALSE then and be aware that you might also want to disable SVGO's ID minification (shape.transform.svgo.plugins: [{cleanupIDs: false}]).
         * @default true
         */
        namespaceIDs?: boolean;
        /**
         * In order to avoid CSS class name ambiguities, the default behavior is to namespace CSS class names in the source SVGs before compiling them into a sprite.
         * Each class name is prepended with a unique string. Disable this option to keep the class names untouched.
         * @default true
         */
        namespaceClassnames?: boolean;
        /**
         * If truthy, width and height attributes will be set on the sprite's <svg> element (where applicable).
         * @default true
         */
        dimensionAttributes?: boolean;
        /**
         * Shorthand for applying custom attributes to the outermost <svg> element.
         * Please be aware that certain attributes (e.g. viewBox) will be calculated dynamically and override custom rootAttributes in any case.
         */
        rootAttributes?: any;
        /**
         * Floating point precision for CSS positioning values (defaults to -1 meaning highest possible precision).
         */
        precision?: number;
        /**
         * Callback (or list of callbacks) that will be applied to the resulting SVG sprites as global [post-processing transformation](#svg-sprite-customization).
         * transform: Function∣Array
         */
        transform?: SvgTransformer | SvgTransformer[];
    }

    interface SvgTransformer {
        /**
         * Custom sprite SVG transformation
         * @param svg Sprite SVG
         * @return Processed SVG
         */
        (svg: string): string;
    }

    interface Mode {
        css?: CssAndViewSpecificModeConfig | boolean;
        view?: CssAndViewSpecificModeConfig | boolean;
        defs?: DefsAndSymbolSpecificModeConfig | boolean;
        symbol?: DefsAndSymbolSpecificModeConfig | boolean;
        stack?: ModeConfig | boolean;
        [customConfigName: string]: ModeConfig | boolean;
    }

    interface ModeConfig {
        /**
         * Base directory for sprite and CSS file output. If not absolute, the path will be resolved using the main output directory (see global dest option).
         * @default "<mode>"
         */
        dest?: string;
        /**
         * Used for prefixing the [shape ID](#shape-ids) during CSS selector construction. If the value is empty,
         * no prefix will be used. The prefix may contain the placeholder "%s" (e.g. ".svg %s-svg"),
         * which will then get replaced by the shape ID. Please be aware that "%" is a special character
         * in this context and that you'll have to escape it by another percent sign ("%%") in case you want
         * to output it to your stylesheets (e.g. for a [Sass placeholder selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#placeholder_selectors_)).
         * @default ".svg-%s"
         */
        prefix?: string;
        /**
         * A non-empty string value will trigger the creation of additional CSS rules specifying the dimensions of each shape in the sprite.
         * The string will be used as suffix to mode.<mode>.prefix during CSS selector construction and may contain the placeholder "%s",
         * which will get replaced by the value of mode.<mode>.prefix.
         * A boolean TRUE will cause the dimensions to be included directly into each shape's CSS rule (only available for «css» and «view» sprites).
         * @default "-dims"
         */
        dimensions?: string | boolean;
        /**
         * SVG sprite path and file name, relative to the mode.<mode>.dest directory.
         * You may omit the file extension, in which case it will be set to ".svg" automatically.
         * @default "svg/sprite.<mode>.svg"
         */
        sprite?: string;
        /**
         * Add a content based hash to the name of the sprite file so that clients reliably reload the sprite
         * when it's content changes («cache busting»). Defaults to false except for «css» and «view» sprites.
         * @default true∣false
         */
        bust?: boolean;
        /**
         * Collection of [stylesheet rendering configurations](#rendering-configurations).
         * The keys are used as file extensions as well as file return keys. At present,
         * there are default templates for the file extensions css ([CSS](http://www.w3.org/Style/CSS/)),
         * scss ([Sass](http://sass-lang.com/)), less ([Less](http://lesscss.org/)) and styl ([Stylus](http://learnboost.github.io/stylus/)),
         * which all reside in the directory tmpl/css. Example: {css: true, scss: {dest: '_sprite.scss'}}
         * @default {}
         */
        render?: { [key: string]: RenderingConfiguration | boolean };
        /**
         * Enabling this will trigger the creation of an HTML document demoing the usage of the sprite. Please see below for details on [rendering configurations](#rendering-configurations).
         * @default false
         */
        example?: RenderingConfiguration | boolean;
        /**
         * Specify svg-sprite which output mode to use with this configuration
         */
        mode?: string;
    }

    interface RenderingConfiguration {
        /**
         * HTML document Mustache template
         * @default "tmpl/<mode>/sprite.html"
         */
        template?: string;
        /**
         * HTML document destination
         * @default "sprite.<mode>.html"
         */
        dest?: string;
    }

    interface CssAndViewSpecificModeConfig extends ModeConfig {
        /**
         * The arrangement of the shapes within the sprite. Might be "vertical", "horizontal", "diagonal" or "packed"
         * (with the latter being the most compact type). It depends on your project which layout is best for you.
         * @default "packed"
         */
        layout?: string;
        /**
         * If given and not empty, this will be the selector name of a CSS rule commonly specifying the background-image
         * and background-repeat properties for all the shapes in the sprite (thus saving some bytes by not unnecessarily repeating them for each shape)
         */
        common?: string;
        /**
         * If given and not empty, a mixin with this name will be added to supporting output formats (e.g. Sass, LESS, Stylus),
         * specifying the background-image and background-repeat properties for all the shapes in the sprite.
         * You may use it for creating custom CSS within @media rules. The mixin acts much like the common rule.
         * In fact, you can even combine the two - if both are enabled, the common rule will use the mixin internally.
         */
        mixin?: string;
    }

    interface DefsAndSymbolSpecificModeConfig extends ModeConfig {
        /**
         * If you want to embed the sprite into your HTML source, you will want to set this to true
         * in order to prevent the creation of SVG namespace declarations and to set some other attributes for effectively hiding the library sprite.
         * @default false
         */
        inline?: boolean;
    }

    interface CompileCallback {
        (error: Error, result: any, data: any): any;
    }

    interface GetShapesCallback {
        (error: Error, result: File[]): any;
    }
}

declare var sprite: sprite.SVGSpriterConstructor;

export = sprite;
