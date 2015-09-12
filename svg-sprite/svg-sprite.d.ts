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

