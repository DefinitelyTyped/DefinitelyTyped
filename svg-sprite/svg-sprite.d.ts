// Type definitions for svg-sprite
// Project: https://github.com/jkphl/svg-sprite
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../vinyl/vinyl.d.ts" />
/// <reference path="../winston/winston.d.ts" />

import {LoggerInstance} from "winston";
declare module "svg-sprite" {
    import File = require('vinyl');

    namespace sprite {
        import Function = Stream.Function;
        interface SVGSpriterConstructor extends NodeJS.EventEmitter {
            new(config: Config): SVGSpriter;
        }

        interface SVGSpriter {
            add(file: string|File, name: string, svg: string): SVGSpriter;
            compile(config: Config, callback: CompileCallback): SVGSpriter;
            compile(callback: CompileCallback): void;
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
            log?: string|LoggerInstance;
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
            id: {
                /**
                 * Separator for directory name traversal
                 */
                separator: string;
                /**
                 * SVG shape ID generator callback
                 */
                generator: string|((string) => string);
                /**
                 * File name separator for shape states (e.g. ':hover')
                 */
                pseudo: string;
                /**
                 * Whitespace replacement for shape IDs
                 */
                whitespace: string;
            };
            /**
             * Dimension related options
             */
            dimension: {
                /**
                 * Max. shape width
                 */
                maxWidth: number;
                /**
                 * Max. shape height
                 */
                maxHeight: number;
                /**
                 * Floating point precision
                 */
                precision: number;
                /**
                 * Width and height attributes on embedded shapes
                 */
                attributes: boolean;
            };
            /**
             * Spacing related options
             */
            spacing: {
                /**
                 * Padding around all shapes
                 */
                padding: number|number[];
                /**
                 * Padding strategy (similar to CSS `box-sizing`)
                 */
                box: string;
            };
            /**
             * List of transformations / optimizations
             */
            transform: (string|CustomConfigurationTransform|CustomCallbackTransform)[];
            /**
             * Path to YAML file with meta / accessibility data
             */
            meta: string;
            /**
             * Path to YAML file with extended alignment data
             */
            align: string;
            /**
             * Output directory for optimized intermediate SVG shapes
             */
            dest: string;
        }

        /**
         * Pre-defined shape transformation with custom configuration
         */
        interface CustomConfigurationTransform {
            [transformationName: string]: {
                plugins: { [transformationName: string]: boolean }[];
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
            xmlDeclaration: boolean|string;
            /**
             * Include a <DOCTYPE> declaration in each compiled sprite. If you provide a non-empty string here,
             * it will be used one-to-one as declaration (e.g. <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Basic//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-basic.dtd">).
             * If you set this to TRUE, *svg-sprite* will look at the registered shapes for a DOCTYPE declaration and use the first one it can find.
             * @default true
             */
            doctypeDeclaration: boolean|string;
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
            transform?: SvgTransformer|SvgTransformer[];
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

        }

        interface CompileCallback {
            (error: Error, result: any, data: any): any;
        }

        interface GetShapesCallback {
            (error: Error, result: File[]): any;
        }
    }

    var sprite: sprite.SVGSpriterConstructor;

    export = sprite;
}

