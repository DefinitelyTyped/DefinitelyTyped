/**
 * @namespace PIXI
 */
declare namespace PIXI {
    /**
     * String of the current PIXI version.
     *
     * @static
     * @constant
     * @memberof PIXI
     * @name VERSION
     * @type {string}
     */
    var VERSION: string;
    /**
     * This namespace contains WebGL-only display filters that can be applied
     * to DisplayObjects using the {@link PIXI.DisplayObject#filters filters} property.
     *
     * Since PixiJS only had a handful of built-in filters, additional filters
     * can be downloaded {@link https://github.com/pixijs/pixi-filters here} from the
     * PixiJS Filters repository.
     *
     * All filters must extend {@link PIXI.Filter}.
     *
     * @example
     * // Create a new application
     * const app = new PIXI.Application();
     *
     * // Draw a green rectangle
     * const rect = new PIXI.Graphics()
     *     .beginFill(0x00ff00)
     *     .drawRect(40, 40, 200, 200);
     *
     * // Add a blur filter
     * rect.filters = [new PIXI.filters.BlurFilter()];
     *
     * // Display rectangle
     * app.stage.addChild(rect);
     * document.body.appendChild(app.view);
     * @namespace PIXI.filters
     */
    namespace filters {
        /**
         * Simplest filter - applies alpha.
         *
         * Use this instead of Container's alpha property to avoid visual layering of individual elements.
         * AlphaFilter applies alpha evenly across the entire display object and any opaque elements it contains.
         * If elements are not opaque, they will blend with each other anyway.
         *
         * Very handy if you want to use common features of all filters:
         *
         * 1. Assign a blendMode to this filter, blend all elements inside display object with background.
         *
         * 2. To use clipping in display coordinates, assign a filterArea to the same container that has this filter.
         *
         * @class
         * @extends PIXI.Filter
         * @memberof PIXI.filters
         */
        class AlphaFilter extends PIXI.Filter {
            constructor(alpha?: number);
            /**
             * Coefficient for alpha multiplication
             *
             * @member {number}
             * @default 1
             */
            alpha: number;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} PIXI.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} PIXI.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} PIXI.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} PIXI.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} PIXI.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {PIXI.State} PIXI.Filter#state
             */
            state: PIXI.State;
            /**
             * Applies the filter
             *
             * @param {PIXI.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
             * @param {PIXI.RenderTexture} input - The input render target.
             * @param {PIXI.RenderTexture} output - The target to output to.
             * @param {boolean} clear - Should the output be cleared before rendering to it
             * @param {object} [currentState] - It's current state of filter.
             *        There are some useful properties in the currentState :
             *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
             */
            apply(filterManager: PIXI.systems.FilterSystem, input: PIXI.RenderTexture, output: PIXI.RenderTexture, clear: boolean, currentState?: any): void;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default PIXI.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {PIXI.Program} PIXI.Shader#program
             */
            program: PIXI.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        /**
         * The BlurFilter applies a Gaussian blur to an object.
         *
         * The strength of the blur can be set for the x-axis and y-axis separately.
         *
         * @class
         * @extends PIXI.Filter
         * @memberof PIXI.filters
         */
        class BlurFilter extends PIXI.Filter {
            constructor(strength?: number, quality?: number, resolution?: number, kernelSize?: number);
            /**
             * Applies the filter.
             *
             * @param {PIXI.systems.FilterSystem} filterManager - The manager.
             * @param {PIXI.RenderTexture} input - The input target.
             * @param {PIXI.RenderTexture} output - The output target.
             */
            apply(filterManager: PIXI.systems.FilterSystem, input: PIXI.RenderTexture, output: PIXI.RenderTexture): void;
            /**
             * Sets the strength of both the blurX and blurY properties simultaneously
             *
             * @member {number}
             * @default 2
             */
            blur: number;
            /**
             * Sets the number of passes for blur. More passes means higher quaility bluring.
             *
             * @member {number}
             * @default 1
             */
            quality: number;
            /**
             * Sets the strength of the blurX property
             *
             * @member {number}
             * @default 2
             */
            blurX: number;
            /**
             * Sets the strength of the blurY property
             *
             * @member {number}
             * @default 2
             */
            blurY: number;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default PIXI.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * If set to true the edge of the target will be clamped
             *
             * @member {bool}
             * @default false
             */
            repeatEdgePixels: boolean;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} PIXI.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} PIXI.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} PIXI.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} PIXI.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} PIXI.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {PIXI.State} PIXI.Filter#state
             */
            state: PIXI.State;
            /**
             * Program that the shader uses
             *
             * @member {PIXI.Program} PIXI.Shader#program
             */
            program: PIXI.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        /**
         * The BlurFilterPass applies a horizontal or vertical Gaussian blur to an object.
         *
         * @class
         * @extends PIXI.Filter
         * @memberof PIXI.filters
         */
        class BlurFilterPass extends PIXI.Filter {
            constructor(horizontal: boolean, strength: number, quality: number, resolution: number, kernelSize?: number);
            /**
             * Sets the strength of both the blur.
             *
             * @member {number}
             * @default 16
             */
            blur: number;
            /**
             * Sets the quality of the blur by modifying the number of passes. More passes means higher
             * quaility bluring but the lower the performance.
             *
             * @member {number}
             * @default 4
             */
            quality: number;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} PIXI.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} PIXI.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} PIXI.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} PIXI.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} PIXI.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {PIXI.State} PIXI.Filter#state
             */
            state: PIXI.State;
            /**
             * Applies the filter
             *
             * @param {PIXI.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
             * @param {PIXI.RenderTexture} input - The input render target.
             * @param {PIXI.RenderTexture} output - The target to output to.
             * @param {boolean} clear - Should the output be cleared before rendering to it
             * @param {object} [currentState] - It's current state of filter.
             *        There are some useful properties in the currentState :
             *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
             */
            apply(filterManager: PIXI.systems.FilterSystem, input: PIXI.RenderTexture, output: PIXI.RenderTexture, clear: boolean, currentState?: any): void;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default PIXI.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {PIXI.Program} PIXI.Shader#program
             */
            program: PIXI.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        /**
         * The ColorMatrixFilter class lets you apply a 5x4 matrix transformation on the RGBA
         * color and alpha values of every pixel on your displayObject to produce a result
         * with a new set of RGBA color and alpha values. It's pretty powerful!
         *
         * ```js
         *  let colorMatrix = new PIXI.filters.ColorMatrixFilter();
         *  container.filters = [colorMatrix];
         *  colorMatrix.contrast(2);
         * ```
         * @author Clément Chenebault <clement@goodboydigital.com>
         * @class
         * @extends PIXI.Filter
         * @memberof PIXI.filters
         */
        class ColorMatrixFilter extends PIXI.Filter {
            constructor();
            /**
             * Transforms current matrix and set the new one
             *
             * @param {number[]} matrix - 5x4 matrix
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            _loadMatrix(matrix: number[], multiply: boolean): void;
            /**
             * Adjusts brightness
             *
             * @param {number} b - value of the brigthness (0-1, where 0 is black)
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            brightness(b: number, multiply: boolean): void;
            /**
             * Set the matrices in grey scales
             *
             * @param {number} scale - value of the grey (0-1, where 0 is black)
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            greyscale(scale: number, multiply: boolean): void;
            /**
             * Set the black and white matrice.
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            blackAndWhite(multiply: boolean): void;
            /**
             * Set the hue property of the color
             *
             * @param {number} rotation - in degrees
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            hue(rotation: number, multiply: boolean): void;
            /**
             * Set the contrast matrix, increase the separation between dark and bright
             * Increase contrast : shadows darker and highlights brighter
             * Decrease contrast : bring the shadows up and the highlights down
             *
             * @param {number} amount - value of the contrast (0-1)
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            contrast(amount: number, multiply: boolean): void;
            /**
             * Set the saturation matrix, increase the separation between colors
             * Increase saturation : increase contrast, brightness, and sharpness
             *
             * @param {number} amount - The saturation amount (0-1)
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            saturate(amount: number, multiply: boolean): void;
            /**
             * Desaturate image (remove color)
             *
             * Call the saturate function
             *
             */
            desaturate(): void;
            /**
             * Negative image (inverse of classic rgb matrix)
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            negative(multiply: boolean): void;
            /**
             * Sepia image
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            sepia(multiply: boolean): void;
            /**
             * Color motion picture process invented in 1916 (thanks Dominic Szablewski)
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            technicolor(multiply: boolean): void;
            /**
             * Polaroid filter
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            polaroid(multiply: boolean): void;
            /**
             * Filter who transforms : Red -> Blue and Blue -> Red
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            toBGR(multiply: boolean): void;
            /**
             * Color reversal film introduced by Eastman Kodak in 1935. (thanks Dominic Szablewski)
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            kodachrome(multiply: boolean): void;
            /**
             * Brown delicious browni filter (thanks Dominic Szablewski)
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            browni(multiply: boolean): void;
            /**
             * Vintage filter (thanks Dominic Szablewski)
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            vintage(multiply: boolean): void;
            /**
             * We don't know exactly what it does, kind of gradient map, but funny to play with!
             *
             * @param {number} desaturation - Tone values.
             * @param {number} toned - Tone values.
             * @param {string} lightColor - Tone values, example: `0xFFE580`
             * @param {string} darkColor - Tone values, example: `0xFFE580`
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            colorTone(desaturation: number, toned: number, lightColor: string, darkColor: string, multiply: boolean): void;
            /**
             * Night effect
             *
             * @param {number} intensity - The intensity of the night effect.
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            night(intensity: number, multiply: boolean): void;
            /**
             * Predator effect
             *
             * Erase the current matrix by setting a new indepent one
             *
             * @param {number} amount - how much the predator feels his future victim
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            predator(amount: number, multiply: boolean): void;
            /**
             * LSD effect
             *
             * Multiply the current matrix
             *
             * @param {boolean} multiply - if true, current matrix and matrix are multiplied. If false,
             *  just set the current matrix with @param matrix
             */
            lsd(multiply: boolean): void;
            /**
             * Erase the current matrix by setting the default one
             *
             */
            reset(): void;
            /**
             * The matrix of the color matrix filter
             *
             * @member {number[]}
             * @default [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
             */
            matrix: number[];
            /**
             * The opacity value to use when mixing the original and resultant colors.
             *
             * When the value is 0, the original color is used without modification.
             * When the value is 1, the result color is used.
             * When in the range (0, 1) the color is interpolated between the original and result by this amount.
             *
             * @member {number}
             * @default 1
             */
            alpha: number;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} PIXI.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} PIXI.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} PIXI.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} PIXI.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} PIXI.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {PIXI.State} PIXI.Filter#state
             */
            state: PIXI.State;
            /**
             * Applies the filter
             *
             * @param {PIXI.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
             * @param {PIXI.RenderTexture} input - The input render target.
             * @param {PIXI.RenderTexture} output - The target to output to.
             * @param {boolean} clear - Should the output be cleared before rendering to it
             * @param {object} [currentState] - It's current state of filter.
             *        There are some useful properties in the currentState :
             *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
             */
            apply(filterManager: PIXI.systems.FilterSystem, input: PIXI.RenderTexture, output: PIXI.RenderTexture, clear: boolean, currentState?: any): void;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default PIXI.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {PIXI.Program} PIXI.Shader#program
             */
            program: PIXI.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        /**
         * The DisplacementFilter class uses the pixel values from the specified texture
         * (called the displacement map) to perform a displacement of an object.
         *
         * You can use this filter to apply all manor of crazy warping effects.
         * Currently the `r` property of the texture is used to offset the `x`
         * and the `g` property of the texture is used to offset the `y`.
         *
         * The way it works is it uses the values of the displacement map to look up the
         * correct pixels to output. This means it's not technically moving the original.
         * Instead, it's starting at the output and asking "which pixel from the original goes here".
         * For example, if a displacement map pixel has `red = 1` and the filter scale is `20`,
         * this filter will output the pixel approximately 20 pixels to the right of the original.
         *
         * @class
         * @extends PIXI.Filter
         * @memberof PIXI.filters
         */
        class DisplacementFilter extends PIXI.Filter {
            constructor(sprite: PIXI.Sprite, scale?: number);
            /**
             * scaleX, scaleY for displacements
             * @member {PIXI.Point} PIXI.filters.DisplacementFilter#scale
             */
            scale: PIXI.Point;
            /**
             * Applies the filter.
             *
             * @param {PIXI.systems.FilterSystem} filterManager - The manager.
             * @param {PIXI.RenderTexture} input - The input target.
             * @param {PIXI.RenderTexture} output - The output target.
             * @param {boolean} clear - Should the output be cleared before rendering to it.
             */
            apply(filterManager: PIXI.systems.FilterSystem, input: PIXI.RenderTexture, output: PIXI.RenderTexture, clear: boolean): void;
            /**
             * The texture used for the displacement map. Must be power of 2 sized texture.
             *
             * @member {PIXI.Texture}
             */
            map: PIXI.Texture;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} PIXI.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} PIXI.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} PIXI.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} PIXI.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} PIXI.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {PIXI.State} PIXI.Filter#state
             */
            state: PIXI.State;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default PIXI.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {PIXI.Program} PIXI.Shader#program
             */
            program: PIXI.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        /**
         * Basic FXAA (Fast Approximate Anti-Aliasing) implementation based on the code on geeks3d.com
         * with the modification that the texture2DLod stuff was removed since it is unsupported by WebGL.
         *
         * @see https://github.com/mitsuhiko/webgl-meincraft
         *
         * @class
         * @extends PIXI.Filter
         * @memberof PIXI.filters
         *
         */
        class FXAAFilter extends PIXI.Filter {
            constructor();
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} PIXI.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} PIXI.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} PIXI.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} PIXI.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} PIXI.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {PIXI.State} PIXI.Filter#state
             */
            state: PIXI.State;
            /**
             * Applies the filter
             *
             * @param {PIXI.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
             * @param {PIXI.RenderTexture} input - The input render target.
             * @param {PIXI.RenderTexture} output - The target to output to.
             * @param {boolean} clear - Should the output be cleared before rendering to it
             * @param {object} [currentState] - It's current state of filter.
             *        There are some useful properties in the currentState :
             *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
             */
            apply(filterManager: PIXI.systems.FilterSystem, input: PIXI.RenderTexture, output: PIXI.RenderTexture, clear: boolean, currentState?: any): void;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default PIXI.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {PIXI.Program} PIXI.Shader#program
             */
            program: PIXI.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
        /**
         * A Noise effect filter.
         *
         * @class
         * @extends PIXI.Filter
         * @memberof PIXI.filters
         */
        class NoiseFilter extends PIXI.Filter {
            constructor(noise?: number, seed?: number);
            /**
             * The amount of noise to apply, this value should be in the range (0, 1].
             *
             * @member {number}
             * @default 0.5
             */
            noise: number;
            /**
             * A seed value to apply to the random noise generation. `Math.random()` is a good value to use.
             *
             * @member {number}
             */
            seed: number;
            /**
             * The padding of the filter. Some filters require extra space to breath such as a blur.
             * Increasing this will add extra width and height to the bounds of the object that the
             * filter is applied to.
             *
             * @member {number} PIXI.Filter#padding
             */
            padding: number;
            /**
             * The resolution of the filter. Setting this to be lower will lower the quality but
             * increase the performance of the filter.
             *
             * @member {number} PIXI.Filter#resolution
             */
            resolution: number;
            /**
             * If enabled is true the filter is applied, if false it will not.
             *
             * @member {boolean} PIXI.Filter#enabled
             */
            enabled: boolean;
            /**
             * If enabled, PixiJS will fit the filter area into boundaries for better performance.
             * Switch it off if it does not work for specific shader.
             *
             * @member {boolean} PIXI.Filter#autoFit
             */
            autoFit: boolean;
            /**
             * Legacy filters use position and uvs from attributes
             * @member {boolean} PIXI.Filter#legacy
             * @readonly
             */
            readonly legacy: boolean;
            /**
             * The WebGL state the filter requires to render
             * @member {PIXI.State} PIXI.Filter#state
             */
            state: PIXI.State;
            /**
             * Applies the filter
             *
             * @param {PIXI.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
             * @param {PIXI.RenderTexture} input - The input render target.
             * @param {PIXI.RenderTexture} output - The target to output to.
             * @param {boolean} clear - Should the output be cleared before rendering to it
             * @param {object} [currentState] - It's current state of filter.
             *        There are some useful properties in the currentState :
             *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
             */
            apply(filterManager: PIXI.systems.FilterSystem, input: PIXI.RenderTexture, output: PIXI.RenderTexture, clear: boolean, currentState?: any): void;
            /**
             * Sets the blendmode of the filter
             *
             * @member {number}
             * @default PIXI.BLEND_MODES.NORMAL
             */
            blendMode: number;
            /**
             * Program that the shader uses
             *
             * @member {PIXI.Program} PIXI.Shader#program
             */
            program: PIXI.Program;
            /**
             * Shader uniform values, shortcut for `uniformGroup.uniforms`
             * @readonly
             * @member {object}
             */
            readonly uniforms: any;
        }
    }
    /**
     * This namespace contains an accessibility plugin for allowing interaction via the keyboard.
     *
     * Do not instantiate this plugin directly. It is available from the `renderer.plugins` property.
     * See {@link PIXI.CanvasRenderer#plugins} or {@link PIXI.Renderer#plugins}.
     * @namespace PIXI.accessibility
     */
    namespace accessibility {
        /**
         * The Accessibility manager recreates the ability to tab and have content read by screen readers.
         * This is very important as it can possibly help people with disabilities access PixiJS content.
         *
         * A DisplayObject can be made accessible just like it can be made interactive. This manager will map the
         * events as if the mouse was being used, minimizing the effort required to implement.
         *
         * An instance of this class is automatically created by default, and can be found at `renderer.plugins.accessibility`
         *
         * @class
         * @memberof PIXI.accessibility
         */
        class AccessibilityManager {
            constructor(renderer: PIXI.Renderer);
            /**
             * Setting this to true will visually show the divs.
             *
             * @type {boolean}
             */
            debug: boolean;
            /**
             * The renderer this accessibility manager works for.
             *
             * @member {PIXI.AbstractRenderer} PIXI.accessibility.AccessibilityManager#renderer
             */
            renderer: PIXI.AbstractRenderer;
            /**
             * A flag
             * @type {boolean}
             * @readonly
             */
            readonly isActive: boolean;
            /**
             * A flag
             * @type {boolean}
             * @readonly
             */
            readonly isMobileAccessibility: boolean;
            /**
             * private function that will visually add the information to the
             * accessability div
             *
             * @param {HTMLDivElement} div
             */
            updateDebugHTML(div: HTMLDivElement): void;
            /**
             * Adjust the hit area based on the bounds of a display object
             *
             * @param {PIXI.Rectangle} hitArea - Bounds of the child
             */
            capHitArea(hitArea: PIXI.Rectangle): void;
            /**
             * Destroys the accessibility manager
             *
             */
            destroy(): void;
        }
    }
    /**
     * Convenience class to create a new PIXI application.
     *
     * This class automatically creates the renderer, ticker and root container.
     *
     * @example
     * // Create the application
     * const app = new PIXI.Application();
     *
     * // Add the view to the DOM
     * document.body.appendChild(app.view);
     *
     * // ex, add display objects
     * app.stage.addChild(PIXI.Sprite.from('something.png'));
     *
     * @class
     * @memberof PIXI
     */
    class Application {
        constructor(options?: {
            autoStart?: boolean;
            width?: number;
            height?: number;
            view?: HTMLCanvasElement;
            transparent?: boolean;
            autoDensity?: boolean;
            antialias?: boolean;
            preserveDrawingBuffer?: boolean;
            resolution?: number;
            forceCanvas?: boolean;
            backgroundColor?: number;
            clearBeforeRender?: boolean;
            forceFXAA?: boolean;
            powerPreference?: string;
            sharedTicker?: boolean;
            sharedLoader?: boolean;
            resizeTo?: Window | HTMLElement;
        });
        /**
         * WebGL renderer if available, otherwise CanvasRenderer.
         * @member {PIXI.Renderer|PIXI.CanvasRenderer} PIXI.Application#renderer
         */
        renderer: PIXI.Renderer;
        /**
         * The root display container that's rendered.
         * @member {PIXI.Container} PIXI.Application#stage
         */
        stage: PIXI.Container;
        /**
         * Register a middleware plugin for the application
         * @static
         * @param {PIXI.Application.Plugin} plugin - Plugin being installed
         */
        static registerPlugin(plugin: PIXI.Application.Plugin): void;
        /**
         * Render the current stage.
         */
        render(): void;
        /**
         * Reference to the renderer's canvas element.
         * @member {HTMLCanvasElement}
         * @readonly
         */
        readonly view: HTMLCanvasElement;
        /**
         * Reference to the renderer's screen rectangle. Its safe to use as `filterArea` or `hitArea` for the whole screen.
         * @member {PIXI.Rectangle}
         * @readonly
         */
        readonly screen: PIXI.Rectangle;
        /**
         * Destroy and don't use after this.
         * @param {Boolean} [removeView=false] Automatically remove canvas from DOM.
         * @param {object|boolean} [stageOptions] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [stageOptions.children=false] - if set to true, all the children will have their destroy
         *  method called as well. 'stageOptions' will be passed on to those calls.
         * @param {boolean} [stageOptions.texture=false] - Only used for child Sprites if stageOptions.children is set
         *  to true. Should it destroy the texture of the child sprite
         * @param {boolean} [stageOptions.baseTexture=false] - Only used for child Sprites if stageOptions.children is set
         *  to true. Should it destroy the base texture of the child sprite
         */
        destroy(removeView?: boolean, stageOptions?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * The element or window to resize the application to.
         * @type {Window|HTMLElement}
         * @name resizeTo
         * @memberof PIXI.Application#
         */
        resizeTo: Window | HTMLElement;
        /**
         * If `resizeTo` is set, calling this function
         * will resize to the width and height of that element.
         * @method PIXI.Application#resize
         */
        resize(): void;
        /**
         * Loader instance to help with asset loading.
         * @name PIXI.Application#loader
         * @type {PIXI.Loader}
         * @readonly
         */
        readonly loader: PIXI.Loader;
        /**
         * Convenience method for stopping the render.
         *
         * @method PIXI.Application#stop
         */
        stop(): void;
        /**
         * Convenience method for starting the render.
         *
         * @method PIXI.Application#start
         */
        start(): void;
        /**
         * Ticker for doing render updates.
         *
         * @type {PIXI.Ticker}
         * @name ticker
         * @memberof PIXI.Application#
         * @default PIXI.Ticker.shared
         */
        ticker: PIXI.Ticker;
    }
    module Application {
        /**
         * @memberof PIXI.Application
         * @typedef {object} Plugin
         * @property {function} init - Called when Application is constructed, scoped to Application instance.
         *  Passes in `options` as the only argument, which are Application constructor options.
         * @property {function} destroy - Called when destroying Application, scoped to Application instance
         */
        type Plugin = {
            init: (...params: any[]) => any;
            destroy: (...params: any[]) => any;
        };
    }
    /**
     * Different types of environments for WebGL.
     *
     * @static
     * @memberof PIXI
     * @name ENV
     * @enum {number}
     * @property {number} WEBGL_LEGACY - Used for older v1 WebGL devices. PixiJS will aim to ensure compatibility
     *  with older / less advanced devices. If you experience unexplained flickering prefer this environment.
     * @property {number} WEBGL - Version 1 of WebGL
     * @property {number} WEBGL2 - Version 2 of WebGL
     */
    enum ENV {
        WEBGL_LEGACY,
        WEBGL,
        WEBGL2
    }
    /**
     * Constant to identify the Renderer Type.
     *
     * @static
     * @memberof PIXI
     * @name RENDERER_TYPE
     * @enum {number}
     * @property {number} UNKNOWN - Unknown render type.
     * @property {number} WEBGL - WebGL render type.
     * @property {number} CANVAS - Canvas render type.
     */
    enum RENDERER_TYPE {
        UNKNOWN,
        WEBGL,
        CANVAS
    }
    /**
     * Various blend modes supported by PIXI.
     *
     * IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
     * Anything else will silently act like NORMAL.
     *
     * @memberof PIXI
     * @name BLEND_MODES
     * @enum {number}
     * @property {number} NORMAL
     * @property {number} ADD
     * @property {number} MULTIPLY
     * @property {number} SCREEN
     * @property {number} OVERLAY
     * @property {number} DARKEN
     * @property {number} LIGHTEN
     * @property {number} COLOR_DODGE
     * @property {number} COLOR_BURN
     * @property {number} HARD_LIGHT
     * @property {number} SOFT_LIGHT
     * @property {number} DIFFERENCE
     * @property {number} EXCLUSION
     * @property {number} HUE
     * @property {number} SATURATION
     * @property {number} COLOR
     * @property {number} LUMINOSITY
     * @property {number} NORMAL_NPM
     * @property {number} ADD_NPM
     * @property {number} SCREEN_NPM
     * @property {number} NONE
     * @property {number} SRC_IN
     * @property {number} SRC_OUT
     * @property {number} SRC_ATOP
     * @property {number} DST_OVER
     * @property {number} DST_IN
     * @property {number} DST_OUT
     * @property {number} DST_ATOP
     * @property {number} SUBTRACT
     * @property {number} SRC_OVER
     * @property {number} ERASE
     * @property {number} XOR
     */
    enum BLEND_MODES {
        NORMAL,
        ADD,
        MULTIPLY,
        SCREEN,
        OVERLAY,
        DARKEN,
        LIGHTEN,
        COLOR_DODGE,
        COLOR_BURN,
        HARD_LIGHT,
        SOFT_LIGHT,
        DIFFERENCE,
        EXCLUSION,
        HUE,
        SATURATION,
        COLOR,
        LUMINOSITY,
        NORMAL_NPM,
        ADD_NPM,
        SCREEN_NPM,
        NONE,
        SRC_IN,
        SRC_OUT,
        SRC_ATOP,
        DST_OVER,
        DST_IN,
        DST_OUT,
        DST_ATOP,
        SUBTRACT,
        SRC_OVER,
        ERASE,
        XOR
    }
    /**
     * Various webgl draw modes. These can be used to specify which GL drawMode to use
     * under certain situations and renderers.
     *
     * @memberof PIXI
     * @static
     * @name DRAW_MODES
     * @enum {number}
     * @property {number} POINTS
     * @property {number} LINES
     * @property {number} LINE_LOOP
     * @property {number} LINE_STRIP
     * @property {number} TRIANGLES
     * @property {number} TRIANGLE_STRIP
     * @property {number} TRIANGLE_FAN
     */
    enum DRAW_MODES {
        POINTS,
        LINES,
        LINE_LOOP,
        LINE_STRIP,
        TRIANGLES,
        TRIANGLE_STRIP,
        TRIANGLE_FAN
    }
    /**
     * Various GL texture/resources formats.
     *
     * @memberof PIXI
     * @static
     * @name FORMATS
     * @enum {number}
     * @property {number} RGBA=6408
     * @property {number} RGB=6407
     * @property {number} ALPHA=6406
     * @property {number} LUMINANCE=6409
     * @property {number} LUMINANCE_ALPHA=6410
     * @property {number} DEPTH_COMPONENT=6402
     * @property {number} DEPTH_STENCIL=34041
     */
    enum FORMATS {
        RGBA,
        RGB,
        ALPHA,
        LUMINANCE,
        LUMINANCE_ALPHA,
        DEPTH_COMPONENT,
        DEPTH_STENCIL
    }
    /**
     * Various GL target types.
     *
     * @memberof PIXI
     * @static
     * @name TARGETS
     * @enum {number}
     * @property {number} TEXTURE_2D=3553
     * @property {number} TEXTURE_CUBE_MAP=34067
     * @property {number} TEXTURE_2D_ARRAY=35866
     * @property {number} TEXTURE_CUBE_MAP_POSITIVE_X=34069
     * @property {number} TEXTURE_CUBE_MAP_NEGATIVE_X=34070
     * @property {number} TEXTURE_CUBE_MAP_POSITIVE_Y=34071
     * @property {number} TEXTURE_CUBE_MAP_NEGATIVE_Y=34072
     * @property {number} TEXTURE_CUBE_MAP_POSITIVE_Z=34073
     * @property {number} TEXTURE_CUBE_MAP_NEGATIVE_Z=34074
     */
    enum TARGETS {
        TEXTURE_2D,
        TEXTURE_CUBE_MAP,
        TEXTURE_2D_ARRAY,
        TEXTURE_CUBE_MAP_POSITIVE_X,
        TEXTURE_CUBE_MAP_NEGATIVE_X,
        TEXTURE_CUBE_MAP_POSITIVE_Y,
        TEXTURE_CUBE_MAP_NEGATIVE_Y,
        TEXTURE_CUBE_MAP_POSITIVE_Z,
        TEXTURE_CUBE_MAP_NEGATIVE_Z
    }
    /**
     * Various GL data format types.
     *
     * @memberof PIXI
     * @static
     * @name TYPES
     * @enum {number}
     * @property {number} UNSIGNED_BYTE=5121
     * @property {number} UNSIGNED_SHORT=5123
     * @property {number} UNSIGNED_SHORT_5_6_5=33635
     * @property {number} UNSIGNED_SHORT_4_4_4_4=32819
     * @property {number} UNSIGNED_SHORT_5_5_5_1=32820
     * @property {number} FLOAT=5126
     * @property {number} HALF_FLOAT=36193
     */
    enum TYPES {
        UNSIGNED_BYTE,
        UNSIGNED_SHORT,
        UNSIGNED_SHORT_5_6_5,
        UNSIGNED_SHORT_4_4_4_4,
        UNSIGNED_SHORT_5_5_5_1,
        FLOAT,
        HALF_FLOAT
    }
    /**
     * The scale modes that are supported by pixi.
     *
     * The {@link PIXI.settings.SCALE_MODE} scale mode affects the default scaling mode of future operations.
     * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
     *
     * @memberof PIXI
     * @static
     * @name SCALE_MODES
     * @enum {number}
     * @property {number} LINEAR Smooth scaling
     * @property {number} NEAREST Pixelating scaling
     */
    enum SCALE_MODES {
        LINEAR,
        NEAREST
    }
    /**
     * The wrap modes that are supported by pixi.
     *
     * The {@link PIXI.settings.WRAP_MODE} wrap mode affects the default wrapping mode of future operations.
     * It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
     * If the texture is non power of two then clamp will be used regardless as WebGL can
     * only use REPEAT if the texture is po2.
     *
     * This property only affects WebGL.
     *
     * @name WRAP_MODES
     * @memberof PIXI
     * @static
     * @enum {number}
     * @property {number} CLAMP - The textures uvs are clamped
     * @property {number} REPEAT - The texture uvs tile and repeat
     * @property {number} MIRRORED_REPEAT - The texture uvs tile and repeat with mirroring
     */
    enum WRAP_MODES {
        CLAMP,
        REPEAT,
        MIRRORED_REPEAT
    }
    /**
     * Mipmap filtering modes that are supported by pixi.
     *
     * The {@link PIXI.settings.MIPMAP_TEXTURES} affects default texture filtering.
     * Mipmaps are generated for a baseTexture if its `mipmap` field is `ON`,
     * or its `POW2` and texture dimensions are powers of 2.
     * Due to platform restriction, `ON` option will work like `POW2` for webgl-1.
     *
     * This property only affects WebGL.
     *
     * @name MIPMAP_MODES
     * @memberof PIXI
     * @static
     * @enum {number}
     * @property {number} OFF - No mipmaps
     * @property {number} POW2 - Generate mipmaps if texture dimensions are pow2
     * @property {number} ON - Always generate mipmaps
     */
    enum MIPMAP_MODES {
        OFF,
        POW2,
        ON
    }
    /**
     * How to treat textures with premultiplied alpha
     *
     * @name ALPHA_MODES
     * @memberof PIXI
     * @static
     * @enum {number}
     * @property {number} NO_PREMULTIPLIED_ALPHA - Source is not premultiplied, leave it like that.
     *  Option for compressed and data textures that are created from typed arrays.
     * @property {number} PREMULTIPLY_ON_UPLOAD - Source is not premultiplied, premultiply on upload.
     *  Default option, used for all loaded images.
     * @property {number} PREMULTIPLIED_ALPHA - Source is already premultiplied
     *  Example: spine atlases with `_pma` suffix.
     * @property {number} NPM - Alias for NO_PREMULTIPLIED_ALPHA.
     * @property {number} UNPACK - Default option, alias for PREMULTIPLY_ON_UPLOAD.
     * @property {number} PMA - Alias for PREMULTIPLIED_ALPHA.
     */
    enum ALPHA_MODES {
        NO_PREMULTIPLIED_ALPHA,
        PREMULTIPLY_ON_UPLOAD,
        PREMULTIPLIED_ALPHA,
        NPM,
        UNPACK,
        PMA
    }
    /**
     * The gc modes that are supported by pixi.
     *
     * The {@link PIXI.settings.GC_MODE} Garbage Collection mode for PixiJS textures is AUTO
     * If set to GC_MODE, the renderer will occasionally check textures usage. If they are not
     * used for a specified period of time they will be removed from the GPU. They will of course
     * be uploaded again when they are required. This is a silent behind the scenes process that
     * should ensure that the GPU does not  get filled up.
     *
     * Handy for mobile devices!
     * This property only affects WebGL.
     *
     * @name GC_MODES
     * @enum {number}
     * @static
     * @memberof PIXI
     * @property {number} AUTO - Garbage collection will happen periodically automatically
     * @property {number} MANUAL - Garbage collection will need to be called manually
     */
    enum GC_MODES {
        AUTO,
        MANUAL
    }
    /**
     * Constants that specify float precision in shaders.
     *
     * @name PRECISION
     * @memberof PIXI
     * @static
     * @enum {string}
     * @constant
     * @property {string} LOW='lowp'
     * @property {string} MEDIUM='mediump'
     * @property {string} HIGH='highp'
     */
    const enum PRECISION {
        LOW,
        MEDIUM,
        HIGH
    }
    /**
     * Constants for mask implementations.
     * We use `type` suffix because it leads to very different behaviours
     *
     * @name MASK_TYPES
     * @memberof PIXI
     * @static
     * @enum {number}
     * @property {number} NONE - Mask is ignored
     * @property {number} SCISSOR - Scissor mask, rectangle on screen, cheap
     * @property {number} STENCIL - Stencil mask, 1-bit, medium, works only if renderer supports stencil
     * @property {number} SPRITE - Mask that uses SpriteMaskFilter, uses temporary RenderTexture
     */
    enum MASK_TYPES {
        NONE,
        SCISSOR,
        STENCIL,
        SPRITE
    }
    /**
     * The AbstractRenderer is the base for a PixiJS Renderer. It is extended by the {@link PIXI.CanvasRenderer}
     * and {@link PIXI.Renderer} which can be used for rendering a PixiJS scene.
     *
     * @abstract
     * @class
     * @extends PIXI.utils.EventEmitter
     * @memberof PIXI
     */
    class AbstractRenderer extends PIXI.utils.EventEmitter {
        constructor(system: string, options?: {
            width?: number;
            height?: number;
            view?: HTMLCanvasElement;
            transparent?: boolean;
            autoDensity?: boolean;
            antialias?: boolean;
            resolution?: number;
            preserveDrawingBuffer?: boolean;
            clearBeforeRender?: boolean;
            backgroundColor?: number;
        });
        /**
         * The supplied constructor options.
         *
         * @member {Object} PIXI.AbstractRenderer#options
         * @readOnly
         */
        readonly options: any;
        /**
         * The type of the renderer.
         *
         * @member {number} PIXI.AbstractRenderer#type
         * @default PIXI.RENDERER_TYPE.UNKNOWN
         * @see PIXI.RENDERER_TYPE
         */
        type: number;
        /**
         * Measurements of the screen. (0, 0, screenWidth, screenHeight).
         *
         * Its safe to use as filterArea or hitArea for the whole stage.
         *
         * @member {PIXI.Rectangle} PIXI.AbstractRenderer#screen
         */
        screen: PIXI.Rectangle;
        /**
         * The canvas element that everything is drawn to.
         *
         * @member {HTMLCanvasElement} PIXI.AbstractRenderer#view
         */
        view: HTMLCanvasElement;
        /**
         * The resolution / device pixel ratio of the renderer.
         *
         * @member {number} PIXI.AbstractRenderer#resolution
         * @default 1
         */
        resolution: number;
        /**
         * Whether the render view is transparent.
         *
         * @member {boolean} PIXI.AbstractRenderer#transparent
         */
        transparent: boolean;
        /**
         * Whether CSS dimensions of canvas view should be resized to screen dimensions automatically.
         *
         * @member {boolean} PIXI.AbstractRenderer#autoDensity
         */
        autoDensity: boolean;
        /**
         * The value of the preserveDrawingBuffer flag affects whether or not the contents of
         * the stencil buffer is retained after rendering.
         *
         * @member {boolean} PIXI.AbstractRenderer#preserveDrawingBuffer
         */
        preserveDrawingBuffer: boolean;
        /**
         * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
         * If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
         * frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
         * to clear the canvas every frame. Disable this by setting this to false. For example, if
         * your game has a canvas filling background image you often don't need this set.
         *
         * @member {boolean} PIXI.AbstractRenderer#clearBeforeRender
         * @default
         */
        clearBeforeRender: boolean;
        /**
         * The background color as a number.
         *
         * @member {number} PIXI.AbstractRenderer#_backgroundColor
         * @protected
         */
        protected _backgroundColor: number;
        /**
         * The background color as an [R, G, B] array.
         *
         * @member {number[]} PIXI.AbstractRenderer#_backgroundColorRgba
         * @protected
         */
        protected _backgroundColorRgba: number[];
        /**
         * The background color as a string.
         *
         * @member {string} PIXI.AbstractRenderer#_backgroundColorString
         * @protected
         */
        protected _backgroundColorString: string;
        /**
         * This temporary display object used as the parent of the currently being rendered item.
         *
         * @member {PIXI.DisplayObject} PIXI.AbstractRenderer#_tempDisplayObjectParent
         * @protected
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * The last root object that the renderer tried to render.
         *
         * @member {PIXI.DisplayObject} PIXI.AbstractRenderer#_lastObjectRendered
         * @protected
         */
        protected _lastObjectRendered: PIXI.DisplayObject;
        /**
         * Collection of plugins.
         * @readonly
         * @member {object} PIXI.AbstractRenderer#plugins
         */
        readonly plugins: any;
        /**
         * Initialize the plugins.
         *
         * @protected
         * @param {object} staticMap - The dictionary of statically saved plugins.
         */
        protected initPlugins(staticMap: any): void;
        /**
         * Same as view.width, actual number of pixels in the canvas by horizontal.
         *
         * @member {number}
         * @readonly
         * @default 800
         */
        readonly width: number;
        /**
         * Same as view.height, actual number of pixels in the canvas by vertical.
         *
         * @member {number}
         * @readonly
         * @default 600
         */
        readonly height: number;
        /**
         * Resizes the screen and canvas to the specified width and height.
         * Canvas dimensions are multiplied by resolution.
         *
         * @param {number} screenWidth - The new width of the screen.
         * @param {number} screenHeight - The new height of the screen.
         */
        resize(screenWidth: number, screenHeight: number): void;
        /**
         * Useful function that returns a texture of the display object that can then be used to create sprites
         * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
         *
         * @param {PIXI.DisplayObject} displayObject - The displayObject the object will be generated from.
         * @param {number} scaleMode - Should be one of the scaleMode consts.
         * @param {number} resolution - The resolution / device pixel ratio of the texture being generated.
         * @param {PIXI.Rectangle} [region] - The region of the displayObject, that shall be rendered,
         *        if no region is specified, defaults to the local bounds of the displayObject.
         * @return {PIXI.RenderTexture} A texture of the graphics object.
         */
        generateTexture(displayObject: PIXI.DisplayObject, scaleMode: number, resolution: number, region?: PIXI.Rectangle): PIXI.RenderTexture;
        /**
         * Removes everything from the renderer and optionally removes the Canvas DOM element.
         *
         * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
         */
        destroy(removeView?: boolean): void;
        /**
         * The background color to fill if not transparent
         *
         * @member {number}
         */
        backgroundColor: number;
    }
    /**
     * The Renderer draws the scene and all its content onto a WebGL enabled canvas.
     *
     * This renderer should be used for browsers that support WebGL.
     *
     * This renderer works by automatically managing WebGLBatchesm, so no need for Sprite Batches or Sprite Clouds.
     * Don't forget to add the view to your DOM or you will not see anything!
     *
     * @class
     * @memberof PIXI
     * @extends PIXI.AbstractRenderer
     */
    class Renderer extends PIXI.AbstractRenderer {
        constructor(options?: {
            width?: number;
            height?: number;
            view?: HTMLCanvasElement;
            transparent?: boolean;
            autoDensity?: boolean;
            antialias?: boolean;
            forceFXAA?: boolean;
            resolution?: number;
            clearBeforeRender?: boolean;
            preserveDrawingBuffer?: boolean;
            backgroundColor?: number;
            powerPreference?: string;
            context?: any;
        });
        /**
         * The type of this renderer as a standardized const
         *
         * @member {number} PIXI.Renderer#type
         * @see PIXI.RENDERER_TYPE
         */
        type: number;
        /**
         * WebGL context, set by the contextSystem (this.context)
         *
         * @readonly
         * @member {WebGLRenderingContext} PIXI.Renderer#gl
         */
        readonly gl: WebGLRenderingContext;
        /**
         * Global uniforms
         * @member {PIXI.UniformGroup} PIXI.Renderer#globalUniforms
         */
        globalUniforms: PIXI.UniformGroup;
        /**
         * Mask system instance
         * @member {PIXI.systems.MaskSystem} mask
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly mask: PIXI.systems.MaskSystem;
        /**
         * Context system instance
         * @member {PIXI.systems.ContextSystem} context
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly context: PIXI.systems.ContextSystem;
        /**
         * State system instance
         * @member {PIXI.systems.StateSystem} state
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly state: PIXI.systems.StateSystem;
        /**
         * Shader system instance
         * @member {PIXI.systems.ShaderSystem} shader
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly shader: PIXI.systems.ShaderSystem;
        /**
         * Texture system instance
         * @member {PIXI.systems.TextureSystem} texture
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly texture: PIXI.systems.TextureSystem;
        /**
         * Geometry system instance
         * @member {PIXI.systems.GeometrySystem} geometry
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly geometry: PIXI.systems.GeometrySystem;
        /**
         * Framebuffer system instance
         * @member {PIXI.systems.FramebufferSystem} framebuffer
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly framebuffer: PIXI.systems.FramebufferSystem;
        /**
         * Scissor system instance
         * @member {PIXI.systems.ScissorSystem} scissor
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly scissor: PIXI.systems.ScissorSystem;
        /**
         * Stencil system instance
         * @member {PIXI.systems.StencilSystem} stencil
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly stencil: PIXI.systems.StencilSystem;
        /**
         * Projection system instance
         * @member {PIXI.systems.ProjectionSystem} projection
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly projection: PIXI.systems.ProjectionSystem;
        /**
         * Texture garbage collector system instance
         * @member {PIXI.systems.TextureGCSystem} textureGC
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly textureGC: PIXI.systems.TextureGCSystem;
        /**
         * Filter system instance
         * @member {PIXI.systems.FilterSystem} filter
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly filter: PIXI.systems.FilterSystem;
        /**
         * RenderTexture system instance
         * @member {PIXI.systems.RenderTextureSystem} renderTexture
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly renderTexture: PIXI.systems.RenderTextureSystem;
        /**
         * Batch system instance
         * @member {PIXI.systems.BatchSystem} batch
         * @memberof PIXI.Renderer#
         * @readonly
         */
        readonly batch: PIXI.systems.BatchSystem;
        /**
         * Flag if we are rendering to the screen vs renderTexture
         * @member {boolean} PIXI.Renderer#renderingToScreen
         * @readonly
         * @default true
         */
        readonly renderingToScreen: boolean;
        /**
         * Add a new system to the renderer.
         * @param {Function} ClassRef - Class reference
         * @param {string} [name] - Property name for system, if not specified
         *        will use a static `name` property on the class itself. This
         *        name will be assigned as s property on the Renderer so make
         *        sure it doesn't collide with properties on Renderer.
         * @return {PIXI.Renderer} Return instance of renderer
         */
        addSystem(ClassRef: (...params: any[]) => any, name?: string): PIXI.Renderer;
        /**
         * Renders the object to its WebGL view
         *
         * @param {PIXI.DisplayObject} displayObject - The object to be rendered.
         * @param {PIXI.RenderTexture} [renderTexture] - The render texture to render to.
         * @param {boolean} [clear=true] - Should the canvas be cleared before the new render.
         * @param {PIXI.Matrix} [transform] - A transform to apply to the render texture before rendering.
         * @param {boolean} [skipUpdateTransform=false] - Should we skip the update transform pass?
         */
        render(displayObject: PIXI.DisplayObject, renderTexture?: PIXI.RenderTexture, clear?: boolean, transform?: PIXI.Matrix, skipUpdateTransform?: boolean): void;
        /**
         * Resizes the WebGL view to the specified width and height.
         *
         * @param {number} screenWidth - The new width of the screen.
         * @param {number} screenHeight - The new height of the screen.
         */
        resize(screenWidth: number, screenHeight: number): void;
        /**
         * Resets the WebGL state so you can render things however you fancy!
         *
         * @return {PIXI.Renderer} Returns itself.
         */
        reset(): PIXI.Renderer;
        /**
         * Clear the frame buffer
         */
        clear(): void;
        /**
         * Removes everything from the renderer (event listeners, spritebatch, etc...)
         *
         * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
         *  See: https://github.com/pixijs/pixi.js/issues/2233
         */
        destroy(removeView?: boolean): void;
        /**
         * Collection of installed plugins. These are included by default in PIXI, but can be excluded
         * by creating a custom build. Consult the README for more information about creating custom
         * builds and excluding plugins.
         * @name PIXI.Renderer#plugins
         * @type {object}
         * @readonly
         * @property {PIXI.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
         * @property {PIXI.extract.Extract} extract Extract image data from renderer.
         * @property {PIXI.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
         * @property {PIXI.prepare.Prepare} prepare Pre-render display objects.
         */
        readonly plugins: {
            accessibility: PIXI.accessibility.AccessibilityManager;
            extract: PIXI.extract.Extract;
            interaction: PIXI.interaction.InteractionManager;
            prepare: PIXI.prepare.Prepare;
        };
        /**
         * Adds a plugin to the renderer.
         *
         * @method
         * @param {string} pluginName - The name of the plugin.
         * @param {Function} ctor - The constructor function or class for the plugin.
         */
        static registerPlugin(pluginName: string, ctor: (...params: any[]) => any): void;
        /**
         * Collection of methods for extracting data (image, pixels, etc.) from a display object or render texture
         *
         * @member {PIXI.extract.Extract} extract
         * @memberof PIXI.Renderer#
         * @see PIXI.extract.Extract
         */
        extract: PIXI.extract.Extract;
        /**
         * The supplied constructor options.
         *
         * @member {Object} PIXI.AbstractRenderer#options
         * @readOnly
         */
        readonly options: any;
        /**
         * Measurements of the screen. (0, 0, screenWidth, screenHeight).
         *
         * Its safe to use as filterArea or hitArea for the whole stage.
         *
         * @member {PIXI.Rectangle} PIXI.AbstractRenderer#screen
         */
        screen: PIXI.Rectangle;
        /**
         * The canvas element that everything is drawn to.
         *
         * @member {HTMLCanvasElement} PIXI.AbstractRenderer#view
         */
        view: HTMLCanvasElement;
        /**
         * The resolution / device pixel ratio of the renderer.
         *
         * @member {number} PIXI.AbstractRenderer#resolution
         * @default 1
         */
        resolution: number;
        /**
         * Whether the render view is transparent.
         *
         * @member {boolean} PIXI.AbstractRenderer#transparent
         */
        transparent: boolean;
        /**
         * Whether CSS dimensions of canvas view should be resized to screen dimensions automatically.
         *
         * @member {boolean} PIXI.AbstractRenderer#autoDensity
         */
        autoDensity: boolean;
        /**
         * The value of the preserveDrawingBuffer flag affects whether or not the contents of
         * the stencil buffer is retained after rendering.
         *
         * @member {boolean} PIXI.AbstractRenderer#preserveDrawingBuffer
         */
        preserveDrawingBuffer: boolean;
        /**
         * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
         * If the scene is NOT transparent PixiJS will use a canvas sized fillRect operation every
         * frame to set the canvas background color. If the scene is transparent PixiJS will use clearRect
         * to clear the canvas every frame. Disable this by setting this to false. For example, if
         * your game has a canvas filling background image you often don't need this set.
         *
         * @member {boolean} PIXI.AbstractRenderer#clearBeforeRender
         * @default
         */
        clearBeforeRender: boolean;
        /**
         * The background color as a number.
         *
         * @member {number} PIXI.AbstractRenderer#_backgroundColor
         * @protected
         */
        protected _backgroundColor: number;
        /**
         * The background color as an [R, G, B] array.
         *
         * @member {number[]} PIXI.AbstractRenderer#_backgroundColorRgba
         * @protected
         */
        protected _backgroundColorRgba: number[];
        /**
         * The background color as a string.
         *
         * @member {string} PIXI.AbstractRenderer#_backgroundColorString
         * @protected
         */
        protected _backgroundColorString: string;
        /**
         * This temporary display object used as the parent of the currently being rendered item.
         *
         * @member {PIXI.DisplayObject} PIXI.AbstractRenderer#_tempDisplayObjectParent
         * @protected
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * The last root object that the renderer tried to render.
         *
         * @member {PIXI.DisplayObject} PIXI.AbstractRenderer#_lastObjectRendered
         * @protected
         */
        protected _lastObjectRendered: PIXI.DisplayObject;
        /**
         * Initialize the plugins.
         *
         * @protected
         * @param {object} staticMap - The dictionary of statically saved plugins.
         */
        protected initPlugins(staticMap: any): void;
        /**
         * Same as view.width, actual number of pixels in the canvas by horizontal.
         *
         * @member {number}
         * @readonly
         * @default 800
         */
        readonly width: number;
        /**
         * Same as view.height, actual number of pixels in the canvas by vertical.
         *
         * @member {number}
         * @readonly
         * @default 600
         */
        readonly height: number;
        /**
         * Useful function that returns a texture of the display object that can then be used to create sprites
         * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
         *
         * @param {PIXI.DisplayObject} displayObject - The displayObject the object will be generated from.
         * @param {number} scaleMode - Should be one of the scaleMode consts.
         * @param {number} resolution - The resolution / device pixel ratio of the texture being generated.
         * @param {PIXI.Rectangle} [region] - The region of the displayObject, that shall be rendered,
         *        if no region is specified, defaults to the local bounds of the displayObject.
         * @return {PIXI.RenderTexture} A texture of the graphics object.
         */
        generateTexture(displayObject: PIXI.DisplayObject, scaleMode: number, resolution: number, region?: PIXI.Rectangle): PIXI.RenderTexture;
        /**
         * The background color to fill if not transparent
         *
         * @member {number}
         */
        backgroundColor: number;
    }
    /**
     * System is a base class used for extending systems used by the {@link PIXI.Renderer}
     *
     * @see PIXI.Renderer#addSystem
     * @class
     * @memberof PIXI
     */
    class System {
        constructor(renderer: PIXI.Renderer);
        /**
         * The renderer this manager works for.
         *
         * @member {PIXI.Renderer} PIXI.System#renderer
         */
        renderer: PIXI.Renderer;
        /**
         * Generic destroy methods to be overridden by the subclass
         */
        destroy(): void;
    }
    /**
     * This helper function will automatically detect which renderer you should be using.
     * WebGL is the preferred renderer as it is a lot faster. If WebGL is not supported by
     * the browser then this function will return a canvas renderer
     *
     * @memberof PIXI
     * @function autoDetectRenderer
     * @param {object} [options] - The optional renderer parameters
     * @param {number} [options.width=800] - the width of the renderers view
     * @param {number} [options.height=600] - the height of the renderers view
     * @param {HTMLCanvasElement} [options.view] - the canvas to use as a view, optional
     * @param {boolean} [options.transparent=false] - If the render view is transparent, default false
     * @param {boolean} [options.autoDensity=false] - Resizes renderer view in CSS pixels to allow for
     *   resolutions other than 1
     * @param {boolean} [options.antialias=false] - sets antialias
     * @param {boolean} [options.preserveDrawingBuffer=false] - enables drawing buffer preservation, enable this if you
     *  need to call toDataUrl on the webgl context
     * @param {number} [options.backgroundColor=0x000000] - The background color of the rendered area
     *  (shown if not transparent).
     * @param {boolean} [options.clearBeforeRender=true] - This sets if the renderer will clear the canvas or
     *   not before the new render pass.
     * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the renderer, retina would be 2
     * @param {boolean} [options.forceCanvas=false] - prevents selection of WebGL renderer, even if such is present, this
     *   option only is available when using **pixi.js-legacy** or **@pixi/canvas-renderer** modules, otherwise
     *   it is ignored.
     * @param {boolean} [options.forceFXAA=false] - forces FXAA antialiasing to be used over native.
     *  FXAA is faster, but may not always look as great **webgl only**
     * @param {string} [options.powerPreference] - Parameter passed to webgl context, set to "high-performance"
     *  for devices with dual graphics card **webgl only**
     * @return {PIXI.Renderer|PIXI.CanvasRenderer} Returns WebGL renderer if available, otherwise CanvasRenderer
     */
    function autoDetectRenderer(options?: {
        width?: number;
        height?: number;
        view?: HTMLCanvasElement;
        transparent?: boolean;
        autoDensity?: boolean;
        antialias?: boolean;
        preserveDrawingBuffer?: boolean;
        backgroundColor?: number;
        clearBeforeRender?: boolean;
        resolution?: number;
        forceCanvas?: boolean;
        forceFXAA?: boolean;
        powerPreference?: string;
    }): PIXI.Renderer;
    /**
     * Renderer dedicated to drawing and batching sprites.
     *
     * This is the default batch renderer. It buffers objects
     * with texture-based geometries and renders them in
     * batches. It uploads multiple textures to the GPU to
     * reduce to the number of draw calls.
     *
     * @class
     * @protected
     * @memberof PIXI
     * @extends PIXI.ObjectRenderer
     */
    class AbstractBatchRenderer extends PIXI.ObjectRenderer {
        constructor(renderer: PIXI.Renderer);
        /**
         * This is used to generate a shader that can
         * color each vertex based on a `aTextureId`
         * attribute that points to an texture in `uSampler`.
         *
         * This enables the objects with different textures
         * to be drawn in the same draw call.
         *
         * You can customize your shader by creating your
         * custom shader generator.
         *
         * @member {PIXI.BatchShaderGenerator} PIXI.AbstractBatchRenderer#shaderGenerator
         * @protected
         */
        protected shaderGenerator: PIXI.BatchShaderGenerator;
        /**
         * The class that represents the geometry of objects
         * that are going to be batched with this.
         *
         * @member {object} PIXI.AbstractBatchRenderer#geometryClass
         * @default PIXI.BatchGeometry
         * @protected
         */
        protected geometryClass: any;
        /**
         * Size of data being buffered per vertex in the
         * attribute buffers (in floats). By default, the
         * batch-renderer plugin uses 6:
         *
         * | aVertexPosition | 2 |
         * |-----------------|---|
         * | aTextureCoords  | 2 |
         * | aColor          | 1 |
         * | aTextureId      | 1 |
         *
         * @member {number} PIXI.AbstractBatchRenderer#vertexSize
         * @readonly
         */
        readonly vertexSize: number;
        /**
         * The WebGL state in which this renderer will work.
         *
         * @member {PIXI.State} PIXI.AbstractBatchRenderer#state
         * @readonly
         */
        readonly state: PIXI.State;
        /**
         * The number of bufferable objects before a flush
         * occurs automatically.
         *
         * @member {number} PIXI.AbstractBatchRenderer#size
         * @default settings.SPRITE_BATCH_SIZE * 4
         */
        size: number;
        /**
         * This shader is generated by `this.shaderGenerator`.
         *
         * It is generated specifically to handle the required
         * number of textures being batched together.
         *
         * @member {PIXI.Shader} PIXI.AbstractBatchRenderer#_shader
         * @protected
         */
        protected _shader: PIXI.Shader;
        /**
         * Maximum number of textures that can be uploaded to
         * the GPU under the current context. It is initialized
         * properly in `this.contextChange`.
         *
         * @member {number} PIXI.AbstractBatchRenderer#MAX_TEXTURES
         * @see PIXI.AbstractBatchRenderer#contextChange
         * @readonly
         */
        readonly MAX_TEXTURES: number;
        /**
         * Handles the `contextChange` signal.
         *
         * It calculates `this.MAX_TEXTURES` and allocating the
         * packed-geometry object pool.
         */
        contextChange(): void;
        /**
         * Makes sure that static and dynamic flush pooled objects have correct dimensions
         */
        initFlushBuffers(): void;
        /**
         * Handles the `prerender` signal.
         *
         * It ensures that flushes start from the first geometry
         * object again.
         */
        onPrerender(): void;
        /**
         * Buffers the "batchable" object. It need not be rendered
         * immediately.
         *
         * @param {PIXI.DisplayObject} element - the element to render when
         *    using this renderer
         */
        render(element: PIXI.DisplayObject): void;
        /**
         * Populating drawcalls for rendering
         *
         * @param {PIXI.BatchTextureArray} texArray
         * @param {number} start
         * @param {number} finish
         */
        buildDrawCalls(texArray: PIXI.BatchTextureArray, start: number, finish: number): void;
        /**
         * Bind textures for current rendering
         *
         * @param {PIXI.BatchTextureArray} texArray
         */
        bindAndClearTexArray(texArray: PIXI.BatchTextureArray): void;
        /**
         * Renders the content _now_ and empties the current batch.
         */
        flush(): void;
        /**
         * Starts a new sprite batch.
         */
        start(): void;
        /**
         * Stops and flushes the current batch.
         */
        stop(): void;
        /**
         * Destroys this `AbstractBatchRenderer`. It cannot be used again.
         */
        destroy(): void;
        /**
         * Takes the four batching parameters of `element`, interleaves
         * and pushes them into the batching attribute/index buffers given.
         *
         * It uses these properties: `vertexData` `uvs`, `textureId` and
         * `indicies`. It also uses the "tint" of the base-texture, if
         * present.
         *
         * @param {PIXI.Sprite} element - element being rendered
         * @param {PIXI.ViewableBuffer} attributeBuffer - attribute buffer.
         * @param {Uint16Array} indexBuffer - index buffer
         * @param {number} aIndex - number of floats already in the attribute buffer
         * @param {number} iIndex - number of indices already in `indexBuffer`
         */
        packInterleavedGeometry(element: PIXI.Sprite, attributeBuffer: PIXI.ViewableBuffer, indexBuffer: Uint16Array, aIndex: number, iIndex: number): void;
        /**
         * Pool of `BatchDrawCall` objects that `flush` used
         * to create "batches" of the objects being rendered.
         *
         * These are never re-allocated again.
         * Shared between all batch renderers because it can be only one "flush" working at the moment.
         *
         * @static
         * @member {PIXI.BatchDrawCall[]}
         */
        static _drawCallPool: PIXI.BatchDrawCall[];
        /**
         * Pool of `BatchDrawCall` objects that `flush` used
         * to create "batches" of the objects being rendered.
         *
         * These are never re-allocated again.
         * Shared between all batch renderers because it can be only one "flush" working at the moment.
         *
         * @static
         * @member {PIXI.BatchTextureArray[]}
         */
        static _textureArrayPool: PIXI.BatchTextureArray[];
        /**
         * The renderer this manager works for.
         *
         * @member {PIXI.Renderer} PIXI.ObjectRenderer#renderer
         */
        renderer: PIXI.Renderer;
    }
    /**
     * Used by the batcher to draw batches.
     * Each one of these contains all information required to draw a bound geometry.
     *
     * @class
     * @memberof PIXI
     */
    class BatchDrawCall {
        constructor();
        /**
         * data for uniforms or custom webgl state
         * @member {object} PIXI.BatchDrawCall#data
         */
        data: any;
    }
    /**
     * Geometry used to batch standard PIXI content (e.g. Mesh, Sprite, Graphics objects).
     *
     * @class
     * @memberof PIXI
     */
    class BatchGeometry {
        constructor(_static?: boolean);
        /**
         * Buffer used for position, color, texture IDs
         *
         * @member {PIXI.Buffer} PIXI.BatchGeometry#_buffer
         * @protected
         */
        protected _buffer: PIXI.Buffer;
        /**
         * Index buffer data
         *
         * @member {PIXI.Buffer} PIXI.BatchGeometry#_indexBuffer
         * @protected
         */
        protected _indexBuffer: PIXI.Buffer;
    }
    /**
     * @class
     * @memberof PIXI
     * @hideconstructor
     */
    class BatchPluginFactory {
        /**
         * Create a new BatchRenderer plugin for Renderer. this convenience can provide an easy way
         * to extend BatchRenderer with all the necessary pieces.
         * @example
         * const fragment = `
         * varying vec2 vTextureCoord;
         * varying vec4 vColor;
         * varying float vTextureId;
         * uniform sampler2D uSamplers[%count%];
         *
         * void main(void){
         *     vec4 color;
         *     %forloop%
         *     gl_FragColor = vColor * vec4(color.a - color.rgb, color.a);
         * }
         * `;
         * const InvertBatchRenderer = PIXI.BatchPluginFactory.create({ fragment });
         * PIXI.Renderer.registerPlugin('invert', InvertBatchRenderer);
         * const sprite = new PIXI.Sprite();
         * sprite.pluginName = 'invert';
         *
         * @static
         * @param {object} [options]
         * @param {string} [options.vertex=PIXI.BatchPluginFactory.defaultVertexSrc] - Vertex shader source
         * @param {string} [options.fragment=PIXI.BatchPluginFactory.defaultFragmentTemplate] - Fragment shader template
         * @param {number} [options.vertexSize=6] - Vertex size
         * @param {object} [options.geometryClass=PIXI.BatchGeometry]
         * @return {*} New batch renderer plugin
         */
        static create(options?: {
            vertex?: string;
            fragment?: string;
            vertexSize?: number;
            geometryClass?: any;
        }): any;
        /**
         * The default vertex shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        static readonly defaultVertexSrc: string;
        /**
         * The default fragment shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        static readonly defaultFragmentTemplate: string;
    }
    /**
     * Helper that generates batching multi-texture shader. Use it with your new BatchRenderer
     *
     * @class
     * @memberof PIXI
     */
    class BatchShaderGenerator {
        constructor(vertexSrc: string, fragTemplate: string);
        /**
         * Reference to the vertex shader source.
         *
         * @member {string} PIXI.BatchShaderGenerator#vertexSrc
         */
        vertexSrc: string;
        /**
         * Reference to the fragement shader template. Must contain "%count%" and "%forloop%".
         *
         * @member {string} PIXI.BatchShaderGenerator#fragTemplate
         */
        fragTemplate: string;
    }
    /**
     * Used by the batcher to build texture batches.
     * Holds list of textures and their respective locations.
     *
     * @class
     * @memberof PIXI
     */
    class BatchTextureArray {
        constructor();
        /**
         * inside textures array
         * @member {PIXI.BaseTexture[]} PIXI.BatchTextureArray#elements
         */
        elements: PIXI.BaseTexture[];
        /**
         * Respective locations for textures
         * @member {number[]} PIXI.BatchTextureArray#ids
         */
        ids: number[];
        /**
         * number of filled elements
         * @member {number} PIXI.BatchTextureArray#count
         */
        count: number;
    }
    /**
     * Base for a common object renderer that can be used as a
     * system renderer plugin.
     *
     * @class
     * @extends PIXI.System
     * @memberof PIXI
     */
    class ObjectRenderer extends PIXI.System {
        constructor(renderer: PIXI.Renderer);
        /**
         * The renderer this manager works for.
         *
         * @member {PIXI.Renderer} PIXI.ObjectRenderer#renderer
         */
        renderer: PIXI.Renderer;
        /**
         * Stub method that should be used to empty the current
         * batch by rendering objects now.
         */
        flush(): void;
        /**
         * Generic destruction method that frees all resources. This
         * should be called by subclasses.
         */
        destroy(): void;
        /**
         * Stub method that initializes any state required before
         * rendering starts. It is different from the `prerender`
         * signal, which occurs every frame, in that it is called
         * whenever an object requests _this_ renderer specifically.
         */
        start(): void;
        /**
         * Stops the renderer. It should free up any state and
         * become dormant.
         */
        stop(): void;
        /**
         * Keeps the object to render. It doesn't have to be
         * rendered immediately.
         *
         * @param {PIXI.DisplayObject} object - The object to render.
         */
        render(object: PIXI.DisplayObject): void;
    }
    /**
     * Filter is a special type of WebGL shader that is applied to the screen.
     *
     * {@link http://pixijs.io/examples/#/filters/blur-filter.js Example} of the
     * {@link PIXI.filters.BlurFilter BlurFilter}.
     *
     * ### Usage
     * Filters can be applied to any DisplayObject or Container.
     * PixiJS' `FilterSystem` renders the container into temporary Framebuffer,
     * then filter renders it to the screen.
     * Multiple filters can be added to the `filters` array property and stacked on each other.
     *
     * ```
     * const filter = new PIXI.Filter(myShaderVert, myShaderFrag, { myUniform: 0.5 });
     * const container = new PIXI.Container();
     * container.filters = [filter];
     * ```
     *
     * ### Previous Version Differences
     *
     * In PixiJS **v3**, a filter was always applied to _whole screen_.
     *
     * In PixiJS **v4**, a filter can be applied _only part of the screen_.
     * Developers had to create a set of uniforms to deal with coordinates.
     *
     * In PixiJS **v5** combines _both approaches_.
     * Developers can use normal coordinates of v3 and then allow filter to use partial Framebuffers,
     * bringing those extra uniforms into account.
     *
     * Also be aware that we have changed default vertex shader, please consult
     * {@link https://github.com/pixijs/pixi.js/wiki/v5-Creating-filters Wiki}.
     *
     * ### Built-in Uniforms
     *
     * PixiJS viewport uses screen (CSS) coordinates, `(0, 0, renderer.screen.width, renderer.screen.height)`,
     * and `projectionMatrix` uniform maps it to the gl viewport.
     *
     * **uSampler**
     *
     * The most important uniform is the input texture that container was rendered into.
     * _Important note: as with all Framebuffers in PixiJS, both input and output are
     * premultiplied by alpha._
     *
     * By default, input normalized coordinates are passed to fragment shader with `vTextureCoord`.
     * Use it to sample the input.
     *
     * ```
     * const fragment = `
     * varying vec2 vTextureCoord;
     * uniform sampler2D uSampler;
     * void main(void)
     * {
     *    gl_FragColor = texture2D(uSampler, vTextureCoord);
     * }
     * `;
     *
     * const myFilter = new PIXI.Filter(null, fragment);
     * ```
     *
     * This filter is just one uniform less than {@link PIXI.filters.AlphaFilter AlphaFilter}.
     *
     * **outputFrame**
     *
     * The `outputFrame` holds the rectangle where filter is applied in screen (CSS) coordinates.
     * It's the same as `renderer.screen` for a fullscreen filter.
     * Only a part of  `outputFrame.zw` size of temporary Framebuffer is used,
     * `(0, 0, outputFrame.width, outputFrame.height)`,
     *
     * Filters uses this quad to normalized (0-1) space, its passed into `aVertexPosition` attribute.
     * To calculate vertex position in screen space using normalized (0-1) space:
     *
     * ```
     * vec4 filterVertexPosition( void )
     * {
     *     vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;
     *     return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
     * }
     * ```
     *
     * **inputSize**
     *
     * Temporary framebuffer is different, it can be either the size of screen, either power-of-two.
     * The `inputSize.xy` are size of temporary framebuffer that holds input.
     * The `inputSize.zw` is inverted, it's a shortcut to evade division inside the shader.
     *
     * Set `inputSize.xy = outputFrame.zw` for a fullscreen filter.
     *
     * To calculate input normalized coordinate, you have to map it to filter normalized space.
     * Multiply by `outputFrame.zw` to get input coordinate.
     * Divide by `inputSize.xy` to get input normalized coordinate.
     *
     * ```
     * vec2 filterTextureCoord( void )
     * {
     *     return aVertexPosition * (outputFrame.zw * inputSize.zw); // same as /inputSize.xy
     * }
     * ```
     * **resolution**
     *
     * The `resolution` is the ratio of screen (CSS) pixels to real pixels.
     *
     * **inputPixel**
     *
     * `inputPixel.xy` is the size of framebuffer in real pixels, same as `inputSize.xy * resolution`
     * `inputPixel.zw` is inverted `inputPixel.xy`.
     *
     * It's handy for filters that use neighbour pixels, like {@link PIXI.filters.FXAAFilter FXAAFilter}.
     *
     * **inputClamp**
     *
     * If you try to get info from outside of used part of Framebuffer - you'll get undefined behaviour.
     * For displacements, coordinates has to be clamped.
     *
     * The `inputClamp.xy` is left-top pixel center, you may ignore it, because we use left-top part of Framebuffer
     * `inputClamp.zw` is bottom-right pixel center.
     *
     * ```
     * vec4 color = texture2D(uSampler, clamp(modifigedTextureCoord, inputClamp.xy, inputClamp.zw))
     * ```
     * OR
     * ```
     * vec4 color = texture2D(uSampler, min(modifigedTextureCoord, inputClamp.zw))
     * ```
     *
     * ### Additional Information
     *
     * Complete documentation on Filter usage is located in the
     * {@link https://github.com/pixijs/pixi.js/wiki/v5-Creating-filters Wiki}.
     *
     * Since PixiJS only had a handful of built-in filters, additional filters can be downloaded
     * {@link https://github.com/pixijs/pixi-filters here} from the PixiJS Filters repository.
     *
     * @class
     * @memberof PIXI
     * @extends PIXI.Shader
     */
    class Filter extends PIXI.Shader {
        constructor(vertexSrc?: string, fragmentSrc?: string, uniforms?: any);
        /**
         * The padding of the filter. Some filters require extra space to breath such as a blur.
         * Increasing this will add extra width and height to the bounds of the object that the
         * filter is applied to.
         *
         * @member {number} PIXI.Filter#padding
         */
        padding: number;
        /**
         * The resolution of the filter. Setting this to be lower will lower the quality but
         * increase the performance of the filter.
         *
         * @member {number} PIXI.Filter#resolution
         */
        resolution: number;
        /**
         * If enabled is true the filter is applied, if false it will not.
         *
         * @member {boolean} PIXI.Filter#enabled
         */
        enabled: boolean;
        /**
         * If enabled, PixiJS will fit the filter area into boundaries for better performance.
         * Switch it off if it does not work for specific shader.
         *
         * @member {boolean} PIXI.Filter#autoFit
         */
        autoFit: boolean;
        /**
         * Legacy filters use position and uvs from attributes
         * @member {boolean} PIXI.Filter#legacy
         * @readonly
         */
        readonly legacy: boolean;
        /**
         * The WebGL state the filter requires to render
         * @member {PIXI.State} PIXI.Filter#state
         */
        state: PIXI.State;
        /**
         * Applies the filter
         *
         * @param {PIXI.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
         * @param {PIXI.RenderTexture} input - The input render target.
         * @param {PIXI.RenderTexture} output - The target to output to.
         * @param {boolean} clear - Should the output be cleared before rendering to it
         * @param {object} [currentState] - It's current state of filter.
         *        There are some useful properties in the currentState :
         *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
         */
        apply(filterManager: PIXI.systems.FilterSystem, input: PIXI.RenderTexture, output: PIXI.RenderTexture, clear: boolean, currentState?: any): void;
        /**
         * Sets the blendmode of the filter
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL
         */
        blendMode: number;
        /**
         * The default vertex shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        static readonly defaultVertexSrc: string;
        /**
         * The default fragment shader source
         *
         * @static
         * @type {string}
         * @constant
         */
        static readonly defaultFragmentSrc: string;
        /**
         * Used for caching shader IDs
         *
         * @static
         * @type {object}
         * @protected
         */
        protected static SOURCE_KEY_MAP: any;
        /**
         * Program that the shader uses
         *
         * @member {PIXI.Program} PIXI.Shader#program
         */
        program: PIXI.Program;
        /**
         * Shader uniform values, shortcut for `uniformGroup.uniforms`
         * @readonly
         * @member {object}
         */
        readonly uniforms: any;
    }
    /**
     * This handles a Sprite acting as a mask, as opposed to a Graphic.
     *
     * WebGL only.
     *
     * @class
     * @extends PIXI.Filter
     * @memberof PIXI
     */
    class SpriteMaskFilter extends PIXI.Filter {
        constructor(sprite: PIXI.Sprite);
        /**
         * Sprite mask
         * @member {PIXI.Sprite} PIXI.SpriteMaskFilter#maskSprite
         */
        maskSprite: PIXI.Sprite;
        /**
         * Mask matrix
         * @member {PIXI.Matrix} PIXI.SpriteMaskFilter#maskMatrix
         */
        maskMatrix: PIXI.Matrix;
        /**
         * Applies the filter
         *
         * @param {PIXI.systems.FilterSystem} filterManager - The renderer to retrieve the filter from
         * @param {PIXI.RenderTexture} input - The input render target.
         * @param {PIXI.RenderTexture} output - The target to output to.
         * @param {boolean} clear - Should the output be cleared before rendering to it.
         */
        apply(filterManager: PIXI.systems.FilterSystem, input: PIXI.RenderTexture, output: PIXI.RenderTexture, clear: boolean): void;
        /**
         * The padding of the filter. Some filters require extra space to breath such as a blur.
         * Increasing this will add extra width and height to the bounds of the object that the
         * filter is applied to.
         *
         * @member {number} PIXI.Filter#padding
         */
        padding: number;
        /**
         * The resolution of the filter. Setting this to be lower will lower the quality but
         * increase the performance of the filter.
         *
         * @member {number} PIXI.Filter#resolution
         */
        resolution: number;
        /**
         * If enabled is true the filter is applied, if false it will not.
         *
         * @member {boolean} PIXI.Filter#enabled
         */
        enabled: boolean;
        /**
         * If enabled, PixiJS will fit the filter area into boundaries for better performance.
         * Switch it off if it does not work for specific shader.
         *
         * @member {boolean} PIXI.Filter#autoFit
         */
        autoFit: boolean;
        /**
         * Legacy filters use position and uvs from attributes
         * @member {boolean} PIXI.Filter#legacy
         * @readonly
         */
        readonly legacy: boolean;
        /**
         * The WebGL state the filter requires to render
         * @member {PIXI.State} PIXI.Filter#state
         */
        state: PIXI.State;
        /**
         * Sets the blendmode of the filter
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL
         */
        blendMode: number;
        /**
         * Program that the shader uses
         *
         * @member {PIXI.Program} PIXI.Shader#program
         */
        program: PIXI.Program;
        /**
         * Shader uniform values, shortcut for `uniformGroup.uniforms`
         * @readonly
         * @member {object}
         */
        readonly uniforms: any;
    }
    /**
     * Default vertex shader
     * @memberof PIXI
     * @member {string} defaultVertex
     */
    var defaultVertex: string;
    /**
     * Default filter vertex shader
     * @memberof PIXI
     * @member {string} defaultFilterVertex
     */
    var defaultFilterVertex: string;
    /**
     * Frame buffer used by the BaseRenderTexture
     *
     * @class
     * @memberof PIXI
     */
    class Framebuffer {
        constructor(width: number, height: number);
        /**
         * Reference to the colorTexture.
         *
         * @member {PIXI.Texture[]}
         * @readonly
         */
        readonly colorTexture: PIXI.Texture[];
        /**
         * Add texture to the colorTexture array
         *
         * @param {number} [index=0] - Index of the array to add the texture to
         * @param {PIXI.Texture} [texture] - Texture to add to the array
         */
        addColorTexture(index?: number, texture?: PIXI.Texture): void;
        /**
         * Add a depth texture to the frame buffer
         *
         * @param {PIXI.Texture} [texture] - Texture to add
         */
        addDepthTexture(texture?: PIXI.Texture): void;
        /**
         * Enable depth on the frame buffer
         */
        enableDepth(): void;
        /**
         * Enable stencil on the frame buffer
         */
        enableStencil(): void;
        /**
         * Resize the frame buffer
         *
         * @param {number} width - Width of the frame buffer to resize to
         * @param {number} height - Height of the frame buffer to resize to
         */
        resize(width: number, height: number): void;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
    }
    /**
     * Holds the information for a single attribute structure required to render geometry.
     *
     * This does not contain the actual data, but instead has a buffer id that maps to a {@link PIXI.Buffer}
     * This can include anything from positions, uvs, normals, colors etc.
     *
     * @class
     * @memberof PIXI
     */
    class Attribute {
        constructor(buffer: string, size?: number, normalized?: boolean, type?: number, stride?: number, start?: number);
        /**
         * Destroys the Attribute.
         */
        destroy(): void;
        /**
         * Helper function that creates an Attribute based on the information provided
         *
         * @static
         * @param {string} buffer  the id of the buffer that this attribute will look for
         * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
         * @param {Boolean} [normalized=false] should the data be normalized.
         * @param {Number} [start=0] How far into the array to start reading values (used for interleaving data)
         * @param {Number} [type=PIXI.TYPES.FLOAT] what type of number is the attribute. Check {@link PIXI.TYPES} to see the ones available
         * @param {Number} [stride=0] How far apart (in floats) the start of each value is. (used for interleaving data)
         *
         * @returns {PIXI.Attribute} A new {@link PIXI.Attribute} based on the information provided
         */
        static from(buffer: string, size?: number, normalized?: boolean, start?: number, type?: number, stride?: number): PIXI.Attribute;
    }
    /**
     * A wrapper for data so that it can be used and uploaded by WebGL
     *
     * @class
     * @memberof PIXI
     */
    class Buffer {
        constructor(data: ArrayBuffer | SharedArrayBuffer | ArrayBufferView, _static?: boolean, index?: boolean);
        /**
         * The data in the buffer, as a typed array
         *
         * @member {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} PIXI.Buffer#data
         */
        data: ArrayBuffer | SharedArrayBuffer | ArrayBufferView;
        /**
         * flags this buffer as requiring an upload to the GPU
         * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView} [data] the data to update in the buffer.
         */
        update(data?: ArrayBuffer | SharedArrayBuffer | ArrayBufferView): void;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
        /**
         * Destroys the buffer
         */
        destroy(): void;
        /**
         * Helper function that creates a buffer based on an array or TypedArray
         *
         * @static
         * @param {ArrayBufferView | number[]} data the TypedArray that the buffer will store. If this is a regular Array it will be converted to a Float32Array.
         * @return {PIXI.Buffer} A new Buffer based on the data provided.
         */
        static from(data: ArrayBufferView | number[]): PIXI.Buffer;
    }
    /**
     * The Geometry represents a model. It consists of two components:
     * - GeometryStyle - The structure of the model such as the attributes layout
     * - GeometryData - the data of the model - this consists of buffers.
     * This can include anything from positions, uvs, normals, colors etc.
     *
     * Geometry can be defined without passing in a style or data if required (thats how I prefer!)
     *
     * ```js
     * let geometry = new PIXI.Geometry();
     *
     * geometry.addAttribute('positions', [0, 0, 100, 0, 100, 100, 0, 100], 2);
     * geometry.addAttribute('uvs', [0,0,1,0,1,1,0,1],2)
     * geometry.addIndex([0,1,2,1,3,2])
     *
     * ```
     * @class
     * @memberof PIXI
     */
    class Geometry {
        constructor(buffers?: PIXI.Buffer[], attributes?: any);
        /**
         * A map of renderer IDs to webgl VAOs
         *
         * @protected
         * @type {object}
         */
        protected glVertexArrayObjects: any;
        /**
         * Number of instances in this geometry, pass it to `GeometrySystem.draw()`
         * @member {number} PIXI.Geometry#instanceCount
         * @default 1
         */
        instanceCount: number;
        /**
         * Count of existing (not destroyed) meshes that reference this geometry
         * @member {number} PIXI.Geometry#refCount
         */
        refCount: number;
        /**
         *
         * Adds an attribute to the geometry
         *
         * @param {String} id - the name of the attribute (matching up to a shader)
         * @param {PIXI.Buffer|number[]} [buffer] the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
         * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
         * @param {Boolean} [normalized=false] should the data be normalized.
         * @param {Number} [type=PIXI.TYPES.FLOAT] what type of number is the attribute. Check {PIXI.TYPES} to see the ones available
         * @param {Number} [stride=0] How far apart (in floats) the start of each value is. (used for interleaving data)
         * @param {Number} [start=0] How far into the array to start reading values (used for interleaving data)
         *
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        addAttribute(id: string, buffer?: PIXI.Buffer | number[], size?: number, normalized?: boolean, type?: number, stride?: number, start?: number): PIXI.Geometry;
        /**
         * returns the requested attribute
         *
         * @param {String} id  the name of the attribute required
         * @return {PIXI.Attribute} the attribute requested.
         */
        getAttribute(id: string): PIXI.Attribute;
        /**
         * returns the requested buffer
         *
         * @param {String} id  the name of the buffer required
         * @return {PIXI.Buffer} the buffer requested.
         */
        getBuffer(id: string): PIXI.Buffer;
        /**
         *
         * Adds an index buffer to the geometry
         * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
         *
         * @param {PIXI.Buffer|number[]} [buffer] the buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        addIndex(buffer?: PIXI.Buffer | number[]): PIXI.Geometry;
        /**
         * returns the index buffer
         *
         * @return {PIXI.Buffer} the index buffer.
         */
        getIndex(): PIXI.Buffer;
        /**
         * this function modifies the structure so that all current attributes become interleaved into a single buffer
         * This can be useful if your model remains static as it offers a little performance boost
         *
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        interleave(): PIXI.Geometry;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
        /**
         * Destroys the geometry.
         */
        destroy(): void;
        /**
         * returns a clone of the geometry
         *
         * @returns {PIXI.Geometry} a new clone of this geometry
         */
        clone(): PIXI.Geometry;
        /**
         * merges an array of geometries into a new single one
         * geometry attribute styles must match for this operation to work
         *
         * @param {PIXI.Geometry[]} geometries array of geometries to merge
         * @returns {PIXI.Geometry} shiny new geometry!
         */
        static merge(geometries: PIXI.Geometry[]): PIXI.Geometry;
    }
    /**
     * Flexible wrapper around `ArrayBuffer` that also provides
     * typed array views on demand.
     *
     * @class
     * @memberof PIXI
     */
    class ViewableBuffer {
        constructor(size: number);
        /**
         * Underlying `ArrayBuffer` that holds all the data
         * and is of capacity `size`.
         *
         * @member {ArrayBuffer} PIXI.ViewableBuffer#rawBinaryData
         */
        rawBinaryData: ArrayBuffer;
        /**
         * View on the raw binary data as a `Uint32Array`.
         *
         * @member {Uint32Array} PIXI.ViewableBuffer#uint32View
         */
        uint32View: Uint32Array;
        /**
         * View on the raw binary data as a `Float32Array`.
         *
         * @member {Float32Array} PIXI.ViewableBuffer#float32View
         */
        float32View: Float32Array;
        /**
         * View on the raw binary data as a `Int8Array`.
         *
         * @member {Int8Array}
         */
        int8View: Int8Array;
        /**
         * View on the raw binary data as a `Uint8Array`.
         *
         * @member {Uint8Array}
         */
        uint8View: Uint8Array;
        /**
         * View on the raw binary data as a `Int16Array`.
         *
         * @member {Int16Array}
         */
        int16View: Int16Array;
        /**
         * View on the raw binary data as a `Uint16Array`.
         *
         * @member {Uint16Array}
         */
        uint16View: Uint16Array;
        /**
         * View on the raw binary data as a `Int32Array`.
         *
         * @member {Int32Array}
         */
        int32View: Int32Array;
        /**
         * Returns the view of the given type.
         *
         * @param {string} type - One of `int8`, `uint8`, `int16`,
         *    `uint16`, `int32`, `uint32`, and `float32`.
         * @return {object} typed array of given type
         */
        view(type: string): any;
        /**
         * Destroys all buffer references. Do not use after calling
         * this.
         */
        destroy(): void;
    }
    /**
     * Component for masked elements
     *
     * Holds mask mode and temporary data about current mask
     *
     * @class
     * @memberof PIXI
     */
    class MaskData {
        constructor(maskObject?: PIXI.DisplayObject);
        /**
         * Mask type
         * @member {PIXI.MASK_TYPES} PIXI.MaskData#type
         */
        type: PIXI.MASK_TYPES;
        /**
         * Whether we know the mask type beforehand
         * @member {boolean} PIXI.MaskData#autoDetect
         * @default true
         */
        autoDetect: boolean;
        /**
         * Which element we use to mask
         * @member {PIXI.DisplayObject} PIXI.MaskData#maskObject
         */
        maskObject: PIXI.DisplayObject;
        /**
         * Whether it belongs to MaskSystem pool
         * @member {boolean} PIXI.MaskData#pooled
         */
        pooled: boolean;
        /**
         * Indicator of the type
         * @member {boolean} PIXI.MaskData#isMaskData
         */
        isMaskData: boolean;
        /**
         * Scissor operation above the mask in stack.
         * Null if _scissorCounter is zero, rectangle instance if positive.
         * @member {PIXI.Rectangle} PIXI.MaskData#_scissorRect
         */
        _scissorRect: PIXI.Rectangle;
        /**
         * resets the mask data after popMask()
         */
        reset(): void;
        /**
         * copies counters from maskData above, called from pushMask()
         * @param {PIXI.MaskData|null} maskAbove
         */
        copyCountersOrReset(maskAbove: PIXI.MaskData | null): void;
    }
    /**
     * A BaseRenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
     *
     * __Hint__: All DisplayObjects (i.e. Sprites) that render to a BaseRenderTexture should be preloaded
     * otherwise black rectangles will be drawn instead.
     *
     * A BaseRenderTexture takes a snapshot of any Display Object given to its render method. The position
     * and rotation of the given Display Objects is ignored. For example:
     *
     * ```js
     * let renderer = PIXI.autoDetectRenderer();
     * let baseRenderTexture = new PIXI.BaseRenderTexture({ width: 800, height: 600 });
     * let renderTexture = new PIXI.RenderTexture(baseRenderTexture);
     * let sprite = PIXI.Sprite.from("spinObj_01.png");
     *
     * sprite.position.x = 800/2;
     * sprite.position.y = 600/2;
     * sprite.anchor.x = 0.5;
     * sprite.anchor.y = 0.5;
     *
     * renderer.render(sprite, renderTexture);
     * ```
     *
     * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
     * you can clear the transform
     *
     * ```js
     *
     * sprite.setTransform()
     *
     * let baseRenderTexture = new PIXI.BaseRenderTexture({ width: 100, height: 100 });
     * let renderTexture = new PIXI.RenderTexture(baseRenderTexture);
     *
     * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
     * ```
     *
     * @class
     * @extends PIXI.BaseTexture
     * @memberof PIXI
     */
    class BaseRenderTexture extends PIXI.BaseTexture {
        constructor(options?: {
            width?: number;
            height?: number;
            scaleMode?: PIXI.SCALE_MODES;
            resolution?: number;
        });
        /**
         * A reference to the canvas render target (we only need one as this can be shared across renderers)
         *
         * @protected
         * @member {object} PIXI.BaseRenderTexture#_canvasRenderTarget
         */
        protected _canvasRenderTarget: any;
        /**
         * The data structure for the stencil masks.
         *
         * @member {PIXI.MaskData[]} PIXI.BaseRenderTexture#maskStack
         */
        maskStack: PIXI.MaskData[];
        /**
         * The data structure for the filters.
         *
         * @member {Object[]} PIXI.BaseRenderTexture#filterStack
         */
        filterStack: any[];
        /**
         * Resizes the BaseRenderTexture.
         *
         * @param {number} width - The width to resize to.
         * @param {number} height - The height to resize to.
         */
        resize(width: number, height: number): void;
        /**
         * Frees the texture and framebuffer from WebGL memory without destroying this texture object.
         * This means you can still use the texture later which will upload it to GPU
         * memory again.
         *
         * @fires PIXI.BaseTexture#dispose
         */
        dispose(): void;
        /**
         * Destroys this texture.
         *
         */
        destroy(): void;
        /**
         * The width of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number} PIXI.BaseTexture#width
         */
        readonly width: number;
        /**
         * The height of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number} PIXI.BaseTexture#height
         */
        readonly height: number;
        /**
         * The resolution / device pixel ratio of the texture
         *
         * @member {number} PIXI.BaseTexture#resolution
         * @default PIXI.settings.RESOLUTION
         */
        resolution: number;
        /**
         * Mipmap mode of the texture, affects downscaled images
         *
         * @member {PIXI.MIPMAP_MODES} PIXI.BaseTexture#mipmap
         * @default PIXI.settings.MIPMAP_TEXTURES
         */
        mipmap: PIXI.MIPMAP_MODES;
        /**
         * Anisotropic filtering level of texture
         *
         * @member {number} PIXI.BaseTexture#anisotropicLevel
         * @default PIXI.settings.ANISOTROPIC_LEVEL
         */
        anisotropicLevel: number;
        /**
         * How the texture wraps
         * @member {number} PIXI.BaseTexture#wrapMode
         */
        wrapMode: number;
        /**
         * The scale mode to apply when scaling this texture
         *
         * @member {PIXI.SCALE_MODES} PIXI.BaseTexture#scaleMode
         * @default PIXI.settings.SCALE_MODE
         */
        scaleMode: PIXI.SCALE_MODES;
        /**
         * The pixel format of the texture
         *
         * @member {PIXI.FORMATS} PIXI.BaseTexture#format
         * @default PIXI.FORMATS.RGBA
         */
        format: PIXI.FORMATS;
        /**
         * The type of resource data
         *
         * @member {PIXI.TYPES} PIXI.BaseTexture#type
         * @default PIXI.TYPES.UNSIGNED_BYTE
         */
        type: PIXI.TYPES;
        /**
         * The target type
         *
         * @member {PIXI.TARGETS} PIXI.BaseTexture#target
         * @default PIXI.TARGETS.TEXTURE_2D
         */
        target: PIXI.TARGETS;
        /**
         * How to treat premultiplied alpha, see {@link PIXI.ALPHA_MODES}.
         *
         * @member {PIXI.ALPHA_MODES} PIXI.BaseTexture#alphaMode
         * @default PIXI.ALPHA_MODES.UNPACK
         */
        alphaMode: PIXI.ALPHA_MODES;
        /**
         * Global unique identifier for this BaseTexture
         *
         * @member {string} PIXI.BaseTexture#uid
         * @protected
         */
        protected uid: string;
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         *
         * @member {number} PIXI.BaseTexture#touched
         * @protected
         */
        protected touched: number;
        /**
         * Whether or not the texture is a power of two, try to use power of two textures as much
         * as you can
         *
         * @readonly
         * @member {boolean} PIXI.BaseTexture#isPowerOfTwo
         * @default false
         */
        readonly isPowerOfTwo: boolean;
        /**
         * Used by TextureSystem to only update texture to the GPU when needed.
         * Please call `update()` to increment it.
         *
         * @readonly
         * @member {number} PIXI.BaseTexture#dirtyId
         */
        readonly dirtyId: number;
        /**
         * Used by TextureSystem to only update texture style when needed.
         *
         * @protected
         * @member {number} PIXI.BaseTexture#dirtyStyleId
         */
        protected dirtyStyleId: number;
        /**
         * Currently default cache ID.
         *
         * @member {string} PIXI.BaseTexture#cacheId
         */
        cacheId: string;
        /**
         * Generally speaking means when resource is loaded.
         * @readonly
         * @member {boolean} PIXI.BaseTexture#valid
         */
        readonly valid: boolean;
        /**
         * The collection of alternative cache ids, since some BaseTextures
         * can have more than one ID, short name and longer full URL
         *
         * @member {Array<string>} PIXI.BaseTexture#textureCacheIds
         * @readonly
         */
        readonly textureCacheIds: string[];
        /**
         * Flag if BaseTexture has been destroyed.
         *
         * @member {boolean} PIXI.BaseTexture#destroyed
         * @readonly
         */
        readonly destroyed: boolean;
        /**
         * The resource used by this BaseTexture, there can only
         * be one resource per BaseTexture, but textures can share
         * resources.
         *
         * @member {PIXI.resources.Resource} PIXI.BaseTexture#resource
         * @readonly
         */
        readonly resource: PIXI.resources.Resource;
        /**
         * Number of the texture batch, used by multi-texture renderers
         *
         * @member {number} PIXI.BaseTexture#_batchEnabled
         */
        _batchEnabled: number;
        /**
         * Location inside texture batch, used by multi-texture renderers
         *
         * @member {number} PIXI.BaseTexture#_batchLocation
         */
        _batchLocation: number;
        /**
         * Pixel width of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        readonly realWidth: number;
        /**
         * Pixel height of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        readonly realHeight: number;
        /**
         * Changes style options of BaseTexture
         *
         * @param {PIXI.SCALE_MODES} [scaleMode] - Pixi scalemode
         * @param {PIXI.MIPMAP_MODES} [mipmap] - enable mipmaps
         * @returns {PIXI.BaseTexture} this
         */
        setStyle(scaleMode?: PIXI.SCALE_MODES, mipmap?: PIXI.MIPMAP_MODES): PIXI.BaseTexture;
        /**
         * Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.
         *
         * @param {number} width Visual width
         * @param {number} height Visual height
         * @param {number} [resolution] Optionally set resolution
         * @returns {PIXI.BaseTexture} this
         */
        setSize(width: number, height: number, resolution?: number): PIXI.BaseTexture;
        /**
         * Sets real size of baseTexture, preserves current resolution.
         *
         * @param {number} realWidth Full rendered width
         * @param {number} realHeight Full rendered height
         * @param {number} [resolution] Optionally set resolution
         * @returns {PIXI.BaseTexture} this
         */
        setRealSize(realWidth: number, realHeight: number, resolution?: number): PIXI.BaseTexture;
        /**
         * Changes resolution
         *
         * @param {number} [resolution] res
         * @returns {PIXI.BaseTexture} this
         */
        setResolution(resolution?: number): PIXI.BaseTexture;
        /**
         * Sets the resource if it wasn't set. Throws error if resource already present
         *
         * @param {PIXI.resources.Resource} resource - that is managing this BaseTexture
         * @returns {PIXI.BaseTexture} this
         */
        setResource(resource: PIXI.resources.Resource): PIXI.BaseTexture;
        /**
         * Invalidates the object. Texture becomes valid if width and height are greater than zero.
         */
        update(): void;
    }
    /**
     * A RenderTexture is a special texture that allows any PixiJS display object to be rendered to it.
     *
     * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded
     * otherwise black rectangles will be drawn instead.
     *
     * __Hint-2__: The actual memory allocation will happen on first render.
     * You shouldn't create renderTextures each frame just to delete them after, try to reuse them.
     *
     * A RenderTexture takes a snapshot of any Display Object given to its render method. For example:
     *
     * ```js
     * let renderer = PIXI.autoDetectRenderer();
     * let renderTexture = PIXI.RenderTexture.create(800, 600);
     * let sprite = PIXI.Sprite.from("spinObj_01.png");
     *
     * sprite.position.x = 800/2;
     * sprite.position.y = 600/2;
     * sprite.anchor.x = 0.5;
     * sprite.anchor.y = 0.5;
     *
     * renderer.render(sprite, renderTexture);
     * ```
     *
     * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
     * you can clear the transform
     *
     * ```js
     *
     * sprite.setTransform()
     *
     * let renderTexture = new PIXI.RenderTexture.create(100, 100);
     *
     * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
     * ```
     *
     * @class
     * @extends PIXI.Texture
     * @memberof PIXI
     */
    class RenderTexture extends PIXI.Texture {
        constructor(baseRenderTexture: PIXI.BaseRenderTexture, frame?: PIXI.Rectangle);
        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean} PIXI.RenderTexture#valid
         */
        valid: boolean;
        /**
         * Stores `sourceFrame` when this texture is inside current filter stack.
         * You can read it inside filters.
         *
         * @readonly
         * @member {PIXI.Rectangle} PIXI.RenderTexture#filterFrame
         */
        readonly filterFrame: PIXI.Rectangle;
        /**
         * The key for pooled texture of FilterSystem
         * @protected
         * @member {string} PIXI.RenderTexture#filterPoolKey
         */
        protected filterPoolKey: string;
        /**
         * Resizes the RenderTexture.
         *
         * @param {number} width - The width to resize to.
         * @param {number} height - The height to resize to.
         * @param {boolean} [resizeBaseTexture=true] - Should the baseTexture.width and height values be resized as well?
         */
        resize(width: number, height: number, resizeBaseTexture?: boolean): void;
        /**
         * Changes the resolution of baseTexture, but does not change framebuffer size.
         *
         * @param {number} resolution - The new resolution to apply to RenderTexture
         */
        setResolution(resolution: number): void;
        /**
         * A short hand way of creating a render texture.
         *
         * @param {object} [options] - Options
         * @param {number} [options.width=100] - The width of the render texture
         * @param {number} [options.height=100] - The height of the render texture
         * @param {number} [options.scaleMode=PIXI.settings.SCALE_MODE] - See {@link PIXI.SCALE_MODES} for possible values
         * @param {number} [options.resolution=1] - The resolution / device pixel ratio of the texture being generated
         * @return {PIXI.RenderTexture} The new render texture
         */
        static create(options?: {
            width?: number;
            height?: number;
            scaleMode?: number;
            resolution?: number;
        }): PIXI.RenderTexture;
        /**
         * Does this Texture have any frame data assigned to it?
         *
         * This mode is enabled automatically if no frame was passed inside constructor.
         *
         * In this mode texture is subscribed to baseTexture events, and fires `update` on any change.
         *
         * Beware, after loading or resize of baseTexture event can fired two times!
         * If you want more control, subscribe on baseTexture itself.
         *
         * ```js
         * texture.on('update', () => {});
         * ```
         *
         * Any assignment of `frame` switches off `noFrame` mode.
         *
         * @member {boolean} PIXI.Texture#noFrame
         */
        noFrame: boolean;
        /**
         * The base texture that this texture uses.
         *
         * @member {PIXI.BaseTexture} PIXI.Texture#baseTexture
         */
        baseTexture: PIXI.BaseTexture;
        /**
         * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
         * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
         *
         * @member {PIXI.Rectangle} PIXI.Texture#_frame
         */
        _frame: PIXI.Rectangle;
        /**
         * This is the trimmed area of original texture, before it was put in atlas
         * Please call `updateUvs()` after you change coordinates of `trim` manually.
         *
         * @member {PIXI.Rectangle} PIXI.Texture#trim
         */
        trim: PIXI.Rectangle;
        /**
         * This will let a renderer know that a texture has been updated (used mainly for WebGL uv updates)
         *
         * @member {boolean} PIXI.Texture#requiresUpdate
         */
        requiresUpdate: boolean;
        /**
         * The WebGL UV data cache. Can be used as quad UV
         *
         * @member {PIXI.TextureUvs} PIXI.Texture#_uvs
         * @protected
         */
        protected _uvs: PIXI.TextureUvs;
        /**
         * Default TextureMatrix instance for this texture
         * By default that object is not created because its heavy
         *
         * @member {PIXI.TextureMatrix} PIXI.Texture#uvMatrix
         */
        uvMatrix: PIXI.TextureMatrix;
        /**
         * This is the area of original texture, before it was put in atlas
         *
         * @member {PIXI.Rectangle} PIXI.Texture#orig
         */
        orig: PIXI.Rectangle;
        /**
         * Anchor point that is used as default if sprite is created with this texture.
         * Changing the `defaultAnchor` at a later point of time will not update Sprite's anchor point.
         * @member {PIXI.Point} PIXI.Texture#defaultAnchor
         * @default {0,0}
         */
        defaultAnchor: PIXI.Point;
        /**
         * Update ID is observed by sprites and TextureMatrix instances.
         * Call updateUvs() to increment it.
         *
         * @member {number} PIXI.Texture#_updateID
         * @protected
         */
        protected _updateID: number;
        /**
         * The ids under which this Texture has been added to the texture cache. This is
         * automatically set as long as Texture.addToCache is used, but may not be set if a
         * Texture is added directly to the TextureCache array.
         *
         * @member {string[]} PIXI.Texture#textureCacheIds
         */
        textureCacheIds: string[];
        /**
         * Updates this texture on the gpu.
         *
         * Calls the TextureResource update.
         *
         * If you adjusted `frame` manually, please call `updateUvs()` instead.
         *
         */
        update(): void;
        /**
         * Called when the base texture is updated
         *
         * @protected
         * @param {PIXI.BaseTexture} baseTexture - The base texture.
         */
        protected onBaseTextureUpdated(baseTexture: PIXI.BaseTexture): void;
        /**
         * Destroys this texture
         *
         * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
         */
        destroy(destroyBase?: boolean): void;
        /**
         * Creates a new texture object that acts the same as this one.
         *
         * @return {PIXI.Texture} The new texture
         */
        clone(): PIXI.Texture;
        /**
         * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
         * Call it after changing the frame
         */
        updateUvs(): void;
        /**
         * Returns resolution of baseTexture
         *
         * @member {number}
         * @readonly
         */
        readonly resolution: number;
        /**
         * The frame specifies the region of the base texture that this texture uses.
         * Please call `updateUvs()` after you change coordinates of `frame` manually.
         *
         * @member {PIXI.Rectangle}
         */
        frame: PIXI.Rectangle;
        /**
         * Indicates whether the texture is rotated inside the atlas
         * set to 2 to compensate for texture packer rotation
         * set to 6 to compensate for spine packer rotation
         * can be used to rotate or mirror sprites
         * See {@link PIXI.groupD8} for explanation
         *
         * @member {number}
         */
        rotate: number;
        /**
         * The width of the Texture in pixels.
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Texture in pixels.
         *
         * @member {number}
         */
        height: number;
    }
    /**
     * Experimental!
     *
     * Texture pool, used by FilterSystem and plugins
     * Stores collection of temporary pow2 or screen-sized renderTextures
     *
     * If you use custom RenderTexturePool for your filters, you can use methods
     * `getFilterTexture` and `returnFilterTexture` same as in
     *
     * @class
     * @memberof PIXI
     */
    class RenderTexturePool {
        constructor(textureOptions?: {
            scaleMode?: PIXI.SCALE_MODES;
        });
        /**
         * Allow renderTextures of the same size as screen, not just pow2
         *
         * Automatically sets to true after `setScreenSize`
         *
         * @member {boolean} PIXI.RenderTexturePool#enableFullScreen
         * @default false
         */
        enableFullScreen: boolean;
        /**
         * creates of texture with params that were specified in pool constructor
         *
         * @param {number} realWidth width of texture in pixels
         * @param {number} realHeight height of texture in pixels
         * @returns {RenderTexture}
         */
        createTexture(realWidth: number, realHeight: number): RenderTexture;
        /**
         * Gets a Power-of-Two render texture or fullScreen texture
         *
         * @protected
         * @param {number} minWidth - The minimum width of the render texture in real pixels.
         * @param {number} minHeight - The minimum height of the render texture in real pixels.
         * @param {number} [resolution=1] - The resolution of the render texture.
         * @return {PIXI.RenderTexture} The new render texture.
         */
        protected getOptimalTexture(minWidth: number, minHeight: number, resolution?: number): PIXI.RenderTexture;
        /**
         * Gets extra texture of the same size as input renderTexture
         *
         * `getFilterTexture(input, 0.5)` or `getFilterTexture(0.5, input)`
         *
         * @param {PIXI.RenderTexture} input renderTexture from which size and resolution will be copied
         * @param {number} [resolution] override resolution of the renderTexture
         *  It overrides, it does not multiply
         * @returns {PIXI.RenderTexture}
         */
        getFilterTexture(input: PIXI.RenderTexture, resolution?: number): PIXI.RenderTexture;
        /**
         * Place a render texture back into the pool.
         * @param {PIXI.RenderTexture} renderTexture - The renderTexture to free
         */
        returnTexture(renderTexture: PIXI.RenderTexture): void;
        /**
         * Alias for returnTexture, to be compliant with FilterSystem interface
         * @param {PIXI.RenderTexture} renderTexture - The renderTexture to free
         */
        returnFilterTexture(renderTexture: PIXI.RenderTexture): void;
        /**
         * Clears the pool
         *
         * @param {boolean} [destroyTextures=true] destroy all stored textures
         */
        clear(destroyTextures?: boolean): void;
        /**
         * If screen size was changed, drops all screen-sized textures,
         * sets new screen size, sets `enableFullScreen` to true
         *
         * Size is measured in pixels, `renderer.view` can be passed here, not `renderer.screen`
         *
         * @param {PIXI.ISize} size - Initial size of screen
         */
        setScreenSize(size: PIXI.ISize): void;
        /**
         * Key that is used to store fullscreen renderTextures in a pool
         *
         * @static
         * @const {string}
         */
        static readonly SCREEN_KEY: string;
    }
    /**
     * Helper class to create a WebGL Program
     *
     * @class
     * @memberof PIXI
     */
    class GLProgram {
        constructor(program: WebGLProgram, uniformData: any);
        /**
         * The shader program
         *
         * @member {WebGLProgram} PIXI.GLProgram#program
         */
        program: WebGLProgram;
        /**
         * holds the uniform data which contains uniform locations
         * and current uniform values used for caching and preventing unneeded GPU commands
         * @member {Object} PIXI.GLProgram#uniformData
         */
        uniformData: any;
        /**
         * uniformGroups holds the various upload functions for the shader. Each uniform group
         * and program have a unique upload function generated.
         * @member {Object} PIXI.GLProgram#uniformGroups
         */
        uniformGroups: any;
        /**
         * Destroys this program
         */
        destroy(): void;
    }
    /**
     * Helper class to create a shader program.
     *
     * @class
     * @memberof PIXI
     */
    class Program {
        constructor(vertexSrc?: string, fragmentSrc?: string, name?: string);
        /**
         * The vertex shader.
         *
         * @member {string} PIXI.Program#vertexSrc
         */
        vertexSrc: string;
        /**
         * The fragment shader.
         *
         * @member {string} PIXI.Program#fragmentSrc
         */
        fragmentSrc: string;
        /**
         * Extracts the data for a buy creating a small test program
         * or reading the src directly.
         * @protected
         *
         * @param {string} [vertexSrc] - The source of the vertex shader.
         * @param {string} [fragmentSrc] - The source of the fragment shader.
         */
        protected extractData(vertexSrc?: string, fragmentSrc?: string): void;
        /**
         * The default vertex shader source
         *
         * @static
         * @constant
         * @member {string}
         */
        static defaultVertexSrc: string;
        /**
         * The default fragment shader source
         *
         * @static
         * @constant
         * @member {string}
         */
        static defaultFragmentSrc: string;
        /**
         * A short hand function to create a program based of a vertex and fragment shader
         * this method will also check to see if there is a cached program.
         *
         * @param {string} [vertexSrc] - The source of the vertex shader.
         * @param {string} [fragmentSrc] - The source of the fragment shader.
         * @param {string} [name=pixi-shader] - Name for shader
         *
         * @returns {PIXI.Program} an shiny new Pixi shader!
         */
        static from(vertexSrc?: string, fragmentSrc?: string, name?: string): PIXI.Program;
    }
    /**
     * A helper class for shaders
     *
     * @class
     * @memberof PIXI
     */
    class Shader {
        constructor(program?: PIXI.Program, uniforms?: any);
        /**
         * Program that the shader uses
         *
         * @member {PIXI.Program} PIXI.Shader#program
         */
        program: PIXI.Program;
        /**
         * Shader uniform values, shortcut for `uniformGroup.uniforms`
         * @readonly
         * @member {object}
         */
        readonly uniforms: any;
        /**
         * A short hand function to create a shader based of a vertex and fragment shader
         *
         * @param {string} [vertexSrc] - The source of the vertex shader.
         * @param {string} [fragmentSrc] - The source of the fragment shader.
         * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
         *
         * @returns {PIXI.Shader} an shiny new Pixi shader!
         */
        static from(vertexSrc?: string, fragmentSrc?: string, uniforms?: any): PIXI.Shader;
    }
    /**
     * Uniform group holds uniform map and some ID's for work
     *
     * @class
     * @memberof PIXI
     */
    class UniformGroup {
        constructor(uniforms?: any, _static?: boolean);
        /**
         * uniform values
         * @member {object} PIXI.UniformGroup#uniforms
         * @readonly
         */
        readonly uniforms: any;
        /**
         * Its a group and not a single uniforms
         * @member {boolean} PIXI.UniformGroup#group
         * @readonly
         * @default true
         */
        readonly group: boolean;
        /**
         * dirty version
         * @protected
         * @member {number} PIXI.UniformGroup#dirtyId
         */
        protected dirtyId: number;
        /**
         * unique id
         * @protected
         * @member {number} PIXI.UniformGroup#id
         */
        protected id: number;
        /**
         * Uniforms wont be changed after creation
         * @member {boolean} PIXI.UniformGroup#static
         */
        static: boolean;
    }
    /**
     * This is a WebGL state, and is is passed The WebGL StateManager.
     *
     * Each mesh rendered may require WebGL to be in a different state.
     * For example you may want different blend mode or to enable polygon offsets
     *
     * @class
     * @memberof PIXI
     */
    class State {
        constructor();
        /**
         * Activates blending of the computed fragment color values
         *
         * @member {boolean}
         */
        blend: boolean;
        /**
         * Activates adding an offset to depth values of polygon's fragments
         *
         * @member {boolean}
         * @default false
         */
        offsets: boolean;
        /**
         * Activates culling of polygons.
         *
         * @member {boolean}
         * @default false
         */
        culling: boolean;
        /**
         * Activates depth comparisons and updates to the depth buffer.
         *
         * @member {boolean}
         * @default false
         */
        depthTest: boolean;
        /**
         * Specifies whether or not front or back-facing polygons can be culled.
         * @member {boolean}
         * @default false
         */
        clockwiseFrontFace: boolean;
        /**
         * The blend mode to be applied when this state is set. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
         *
         * @member {number}
         * @default 0
         */
        polygonOffset: number;
    }
    /**
     * Systems are individual components to the Renderer pipeline.
     * @namespace PIXI.systems
     */
    namespace systems {
        /**
         * System plugin to the renderer to manage batching.
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class BatchSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * An empty renderer.
             *
             * @member {PIXI.ObjectRenderer} PIXI.systems.BatchSystem#emptyRenderer
             */
            emptyRenderer: PIXI.ObjectRenderer;
            /**
             * The currently active ObjectRenderer.
             *
             * @member {PIXI.ObjectRenderer} PIXI.systems.BatchSystem#currentRenderer
             */
            currentRenderer: PIXI.ObjectRenderer;
            /**
             * Changes the current renderer to the one given in parameter
             *
             * @param {PIXI.ObjectRenderer} objectRenderer - The object renderer to use.
             */
            setObjectRenderer(objectRenderer: PIXI.ObjectRenderer): void;
            /**
             * This should be called if you wish to do some custom rendering
             * It will basically render anything that may be batched up such as sprites
             */
            flush(): void;
            /**
             * Reset the system to an empty renderer
             */
            reset(): void;
            /**
             * Handy function for batch renderers: copies bound textures in first maxTextures locations to array
             * sets actual _batchLocation for them
             *
             * @param arr
             * @param maxTextures
             */
            copyBoundTextures(arr: any, maxTextures: any): void;
            /**
             * Assigns batch locations to textures in array based on boundTextures state.
             * All textures in texArray should have `_batchEnabled = _batchId`,
             * and their count should be less than `maxTextures`.
             *
             * @param {PIXI.BatchTextureArray} texArray textures to bound
             * @param {PIXI.BaseTexture[]} boundTextures current state of bound textures
             * @param {number} batchId marker for _batchEnabled param of textures in texArray
             * @param {number} maxTextures number of texture locations to manipulate
             */
            boundArray(texArray: PIXI.BatchTextureArray, boundTextures: PIXI.BaseTexture[], batchId: number, maxTextures: number): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * System plugin to the renderer to manage the context.
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class ContextSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * Either 1 or 2 to reflect the WebGL version being used
             * @member {number} PIXI.systems.ContextSystem#webGLVersion
             * @readonly
             */
            readonly webGLVersion: number;
            /**
             * Extensions being used
             * @member {object} PIXI.systems.ContextSystem#extensions
             * @readonly
             * @property {WEBGL_draw_buffers} drawBuffers - WebGL v1 extension
             * @property {WEBGL_depth_texture} depthTexture - WebGL v1 extension
             * @property {OES_texture_float} floatTexture - WebGL v1 extension
             * @property {WEBGL_lose_context} loseContext - WebGL v1 extension
             * @property {OES_vertex_array_object} vertexArrayObject - WebGL v1 extension
             * @property {EXT_texture_filter_anisotropic} anisotropicFiltering - WebGL v1 and v2 extension
             */
            readonly extensions: {
                drawBuffers: WEBGL_draw_buffers;
                depthTexture: WEBGL_depth_texture;
                floatTexture: OES_texture_float;
                loseContext: WEBGL_lose_context;
                vertexArrayObject: OES_vertex_array_object;
                anisotropicFiltering: EXT_texture_filter_anisotropic;
            };
            /**
             * `true` if the context is lost
             * @member {boolean}
             * @readonly
             */
            readonly isLost: boolean;
            /**
             * Handle the context change event
             * @param {WebGLRenderingContext} gl new webgl context
             */
            contextChange(gl: WebGLRenderingContext): void;
            /**
             * Initialize the context
             *
             * @protected
             * @param {WebGLRenderingContext} gl - WebGL context
             */
            protected initFromContext(gl: WebGLRenderingContext): void;
            /**
             * Initialize from context options
             *
             * @protected
             * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
             * @param {object} options - context attributes
             */
            protected initFromOptions(options: any): void;
            /**
             * Helper class to create a WebGL Context
             *
             * @param canvas {HTMLCanvasElement} the canvas element that we will get the context from
             * @param options {object} An options object that gets passed in to the canvas element containing the context attributes
             * @see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext
             * @return {WebGLRenderingContext} the WebGL context
             */
            createContext(canvas: HTMLCanvasElement, options: any): WebGLRenderingContext;
            /**
             * Auto-populate the extensions
             *
             * @protected
             */
            protected getExtensions(): void;
            /**
             * Handles a lost webgl context
             *
             * @protected
             * @param {WebGLContextEvent} event - The context lost event.
             */
            protected handleContextLost(event: WebGLContextEvent): void;
            /**
             * Handles a restored webgl context
             *
             * @protected
             */
            protected handleContextRestored(): void;
            /**
             * Handle the post-render runner event
             *
             * @protected
             */
            protected postrender(): void;
            /**
             * Validate context
             *
             * @protected
             * @param {WebGLRenderingContext} gl - Render context
             */
            protected validateContext(gl: WebGLRenderingContext): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * System plugin to the renderer to manage the filters.
         *
         * @class
         * @memberof PIXI.systems
         * @extends PIXI.System
         */
        class FilterSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * List of filters for the FilterSystem
             * @member {Object[]} PIXI.systems.FilterSystem#defaultFilterStack
             * @readonly
             */
            readonly defaultFilterStack: any[];
            /**
             * stores a bunch of PO2 textures used for filtering
             * @member {Object} PIXI.systems.FilterSystem#texturePool
             */
            texturePool: any;
            /**
             * a pool for storing filter states, save us creating new ones each tick
             * @member {Object[]} PIXI.systems.FilterSystem#statePool
             */
            statePool: any[];
            /**
             * A very simple geometry used when drawing a filter effect to the screen
             * @member {PIXI.Quad} PIXI.systems.FilterSystem#quad
             */
            quad: PIXI.Quad;
            /**
             * Quad UVs
             * @member {PIXI.QuadUv} PIXI.systems.FilterSystem#quadUv
             */
            quadUv: PIXI.QuadUv;
            /**
             * Temporary rect for maths
             * @type {PIXI.Rectangle}
             */
            tempRect: PIXI.Rectangle;
            /**
             * Active state
             * @member {object} PIXI.systems.FilterSystem#activeState
             */
            activeState: any;
            /**
             * This uniform group is attached to filter uniforms when used
             * @member {PIXI.UniformGroup} PIXI.systems.FilterSystem#globalUniforms
             * @property {PIXI.Rectangle} outputFrame
             * @property {Float32Array} inputSize
             * @property {Float32Array} inputPixel
             * @property {Float32Array} inputClamp
             * @property {Number} resolution
             * @property {Float32Array} filterArea
             * @property {Fload32Array} filterClamp
             */
            globalUniforms: PIXI.UniformGroup;
            /**
             * Adds a new filter to the System.
             *
             * @param {PIXI.DisplayObject} target - The target of the filter to render.
             * @param {PIXI.Filter[]} filters - The filters to apply.
             */
            push(target: PIXI.DisplayObject, filters: PIXI.Filter[]): void;
            /**
             * Pops off the filter and applies it.
             *
             */
            pop(): void;
            /**
             * Draws a filter.
             *
             * @param {PIXI.Filter} filter - The filter to draw.
             * @param {PIXI.RenderTexture} input - The input render target.
             * @param {PIXI.RenderTexture} output - The target to output to.
             * @param {boolean} clear - Should the output be cleared before rendering to it
             */
            applyFilter(filter: PIXI.Filter, input: PIXI.RenderTexture, output: PIXI.RenderTexture, clear: boolean): void;
            /**
             * Multiply _input normalized coordinates_ to this matrix to get _sprite texture normalized coordinates_.
             *
             * Use `outputMatrix * vTextureCoord` in the shader.
             *
             * @param {PIXI.Matrix} outputMatrix - The matrix to output to.
             * @param {PIXI.Sprite} sprite - The sprite to map to.
             * @return {PIXI.Matrix} The mapped matrix.
             */
            calculateSpriteMatrix(outputMatrix: PIXI.Matrix, sprite: PIXI.Sprite): PIXI.Matrix;
            /**
             * Destroys this Filter System.
             */
            destroy(): void;
            /**
             * Gets a Power-of-Two render texture or fullScreen texture
             *
             * @protected
             * @param {number} minWidth - The minimum width of the render texture in real pixels.
             * @param {number} minHeight - The minimum height of the render texture in real pixels.
             * @param {number} [resolution=1] - The resolution of the render texture.
             * @return {PIXI.RenderTexture} The new render texture.
             */
            protected getOptimalFilterTexture(minWidth: number, minHeight: number, resolution?: number): PIXI.RenderTexture;
            /**
             * Gets extra render texture to use inside current filter
             * To be compliant with older filters, you can use params in any order
             *
             * @param {PIXI.RenderTexture} [input] renderTexture from which size and resolution will be copied
             * @param {number} [resolution] override resolution of the renderTexture
             * @returns {PIXI.RenderTexture}
             */
            getFilterTexture(input?: PIXI.RenderTexture, resolution?: number): PIXI.RenderTexture;
            /**
             * Frees a render texture back into the pool.
             *
             * @param {PIXI.RenderTexture} renderTexture - The renderTarget to free
             */
            returnFilterTexture(renderTexture: PIXI.RenderTexture): void;
            /**
             * Empties the texture pool.
             */
            emptyPool(): void;
            /**
             * calls `texturePool.resize()`, affects fullScreen renderTextures
             */
            resize(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
        }
        /**
         * System plugin to the renderer to manage framebuffers.
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class FramebufferSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * A list of managed framebuffers
             * @member {PIXI.Framebuffer[]} PIXI.systems.FramebufferSystem#managedFramebuffers
             * @readonly
             */
            readonly managedFramebuffers: PIXI.Framebuffer[];
            /**
             * Framebuffer value that shows that we don't know what is bound
             * @member {Framebuffer} PIXI.systems.FramebufferSystem#unknownFramebuffer
             * @readonly
             */
            readonly unknownFramebuffer: Framebuffer;
            /**
             * Sets up the renderer context and necessary buffers.
             */
            contextChange(): void;
            /**
             * Bind a framebuffer
             *
             * @param {PIXI.Framebuffer} framebuffer
             * @param {PIXI.Rectangle} [frame] frame, default is framebuffer size
             */
            bind(framebuffer: PIXI.Framebuffer, frame?: PIXI.Rectangle): void;
            /**
             * Set the WebGLRenderingContext's viewport.
             *
             * @param {Number} x - X position of viewport
             * @param {Number} y - Y position of viewport
             * @param {Number} width - Width of viewport
             * @param {Number} height - Height of viewport
             */
            setViewport(x: number, y: number, width: number, height: number): void;
            /**
             * Get the size of the current width and height. Returns object with `width` and `height` values.
             *
             * @member {object}
             * @readonly
             */
            readonly size: any;
            /**
             * Clear the color of the context
             *
             * @param {Number} r - Red value from 0 to 1
             * @param {Number} g - Green value from 0 to 1
             * @param {Number} b - Blue value from 0 to 1
             * @param {Number} a - Alpha value from 0 to 1
             */
            clear(r: number, g: number, b: number, a: number): void;
            /**
             * Initialize framebuffer
             *
             * @protected
             * @param {PIXI.Framebuffer} framebuffer
             */
            protected initFramebuffer(framebuffer: PIXI.Framebuffer): void;
            /**
             * Resize the framebuffer
             *
             * @protected
             * @param {PIXI.Framebuffer} framebuffer
             */
            protected resizeFramebuffer(framebuffer: PIXI.Framebuffer): void;
            /**
             * Update the framebuffer
             *
             * @protected
             * @param {PIXI.Framebuffer} framebuffer
             */
            protected updateFramebuffer(framebuffer: PIXI.Framebuffer): void;
            /**
             * Disposes framebuffer
             * @param {PIXI.Framebuffer} framebuffer framebuffer that has to be disposed of
             * @param {boolean} [contextLost=false] If context was lost, we suppress all delete function calls
             */
            disposeFramebuffer(framebuffer: PIXI.Framebuffer, contextLost?: boolean): void;
            /**
             * Disposes all framebuffers, but not textures bound to them
             * @param {boolean} [contextLost=false] If context was lost, we suppress all delete function calls
             */
            disposeAll(contextLost?: boolean): void;
            /**
             * resets framebuffer stored state, binds screen framebuffer
             *
             * should be called before renderTexture reset()
             */
            reset(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * System plugin to the renderer to manage geometry.
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class GeometrySystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * `true` if we has `*_vertex_array_object` extension
             * @member {boolean} PIXI.systems.GeometrySystem#hasVao
             * @readonly
             */
            readonly hasVao: boolean;
            /**
             * `true` if has `ANGLE_instanced_arrays` extension
             * @member {boolean} PIXI.systems.GeometrySystem#hasInstance
             * @readonly
             */
            readonly hasInstance: boolean;
            /**
             * `true` if support `gl.UNSIGNED_INT` in `gl.drawElements` or `gl.drawElementsInstanced`
             * @member {boolean} PIXI.systems.GeometrySystem#canUseUInt32ElementIndex
             * @readonly
             */
            readonly canUseUInt32ElementIndex: boolean;
            /**
             * A cache of currently bound buffer,
             * contains only two members with keys ARRAY_BUFFER and ELEMENT_ARRAY_BUFFER
             * @member {Object.<number, PIXI.Buffer>} PIXI.systems.GeometrySystem#boundBuffers
             * @readonly
             */
            readonly boundBuffers: {
                [key: number]: PIXI.Buffer;
            };
            /**
             * Cache for all geometries by id, used in case renderer gets destroyed or for profiling
             * @member {object} PIXI.systems.GeometrySystem#managedGeometries
             * @readonly
             */
            readonly managedGeometries: any;
            /**
             * Cache for all buffers by id, used in case renderer gets destroyed or for profiling
             * @member {object} PIXI.systems.GeometrySystem#managedBuffers
             * @readonly
             */
            readonly managedBuffers: any;
            /**
             * Sets up the renderer context and necessary buffers.
             */
            contextChange(): void;
            /**
             * Binds geometry so that is can be drawn. Creating a Vao if required
             *
             * @param {PIXI.Geometry} geometry instance of geometry to bind
             * @param {PIXI.Shader} [shader] instance of shader to use vao for
             */
            bind(geometry: PIXI.Geometry, shader?: PIXI.Shader): void;
            /**
             * Reset and unbind any active VAO and geometry
             */
            reset(): void;
            /**
             * Update buffers
             * @protected
             */
            protected updateBuffers(): void;
            /**
             * Check compability between a geometry and a program
             * @protected
             * @param {PIXI.Geometry} geometry - Geometry instance
             * @param {PIXI.Program} program - Program instance
             */
            protected checkCompatibility(geometry: PIXI.Geometry, program: PIXI.Program): void;
            /**
             * Takes a geometry and program and generates a unique signature for them.
             *
             * @param {PIXI.Geometry} geometry to get signature from
             * @param {PIXI.Program} program to test geometry against
             * @returns {String} Unique signature of the geometry and program
             * @protected
             */
            protected getSignature(geometry: PIXI.Geometry, program: PIXI.Program): string;
            /**
             * Creates or gets Vao with the same structure as the geometry and stores it on the geometry.
             * If vao is created, it is bound automatically.
             *
             * @protected
             * @param {PIXI.Geometry} geometry - Instance of geometry to to generate Vao for
             * @param {PIXI.Program} program - Instance of program
             */
            protected initGeometryVao(geometry: PIXI.Geometry, program: PIXI.Program): void;
            /**
             * Disposes buffer
             * @param {PIXI.Buffer} buffer buffer with data
             * @param {boolean} [contextLost=false] If context was lost, we suppress deleteVertexArray
             */
            disposeBuffer(buffer: PIXI.Buffer, contextLost?: boolean): void;
            /**
             * Disposes geometry
             * @param {PIXI.Geometry} geometry Geometry with buffers. Only VAO will be disposed
             * @param {boolean} [contextLost=false] If context was lost, we suppress deleteVertexArray
             */
            disposeGeometry(geometry: PIXI.Geometry, contextLost?: boolean): void;
            /**
             * dispose all WebGL resources of all managed geometries and buffers
             * @param {boolean} [contextLost=false] If context was lost, we suppress `gl.delete` calls
             */
            disposeAll(contextLost?: boolean): void;
            /**
             * Activate vertex array object
             *
             * @protected
             * @param {PIXI.Geometry} geometry - Geometry instance
             * @param {PIXI.Program} program - Shader program instance
             */
            protected activateVao(geometry: PIXI.Geometry, program: PIXI.Program): void;
            /**
             * Draw the geometry
             *
             * @param {Number} type - the type primitive to render
             * @param {Number} [size] - the number of elements to be rendered
             * @param {Number} [start] - Starting index
             * @param {Number} [instanceCount] - the number of instances of the set of elements to execute
             */
            draw(type: number, size?: number, start?: number, instanceCount?: number): void;
            /**
             * Unbind/reset everything
             * @protected
             */
            protected unbind(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * System plugin to the renderer to manage masks of certain type
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class AbstractMaskSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * The mask stack
             * @member {PIXI.MaskData[]} PIXI.systems.AbstractMaskSystem#maskStack
             */
            maskStack: PIXI.MaskData[];
            /**
             * gets count of masks of certain type
             * @returns {number}
             */
            getStackLength(): number;
            /**
             * Changes the mask stack that is used by this System.
             *
             * @param {PIXI.MaskData[]} maskStack - The mask stack
             */
            setMaskStack(maskStack: PIXI.MaskData[]): void;
            /**
             * Destroys the mask stack.
             *
             */
            destroy(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
        }
        /**
         * System plugin to the renderer to manage masks.
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class MaskSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * Target to mask
             * @member {PIXI.DisplayObject} PIXI.systems.MaskSystem#scissorRenderTarget
             * @readonly
             */
            readonly scissorRenderTarget: PIXI.DisplayObject;
            /**
             * Enable scissor
             * @member {boolean} PIXI.systems.MaskSystem#enableScissor
             * @readonly
             */
            readonly enableScissor: boolean;
            /**
             * Pool of used sprite mask filters
             * @member {PIXI.SpriteMaskFilter[]} PIXI.systems.MaskSystem#alphaMaskPool
             * @readonly
             */
            readonly alphaMaskPool: PIXI.SpriteMaskFilter[];
            /**
             * Pool of mask data
             * @member {PIXI.MaskData[]} PIXI.systems.MaskSystem#maskDataPool
             * @readonly
             */
            readonly maskDataPool: PIXI.MaskData[];
            /**
             * Current index of alpha mask pool
             * @member {number} PIXI.systems.MaskSystem#alphaMaskIndex
             * @default 0
             * @readonly
             */
            readonly alphaMaskIndex: number;
            /**
             * Changes the mask stack that is used by this System.
             *
             * @param {PIXI.MaskData[]} maskStack - The mask stack
             */
            setMaskStack(maskStack: PIXI.MaskData[]): void;
            /**
             * Applies the Mask and adds it to the current filter stack.
             * Renderer batch must be flushed beforehand.
             *
             * @param {PIXI.DisplayObject} target - Display Object to push the mask to
             * @param {PIXI.MaskData|PIXI.Sprite|PIXI.Graphics|PIXI.DisplayObject} maskData - The masking data.
             */
            push(target: PIXI.DisplayObject, maskData: PIXI.MaskData | PIXI.Sprite | PIXI.Graphics | PIXI.DisplayObject): void;
            /**
             * Removes the last mask from the mask stack and doesn't return it.
             * Renderer batch must be flushed beforehand.
             *
             * @param {PIXI.DisplayObject} target - Display Object to pop the mask from
             */
            pop(target: PIXI.DisplayObject): void;
            /**
             * Sets type of MaskData based on its maskObject
             * @param {PIXI.MaskData} maskData
             */
            detect(maskData: PIXI.MaskData): void;
            /**
             * Applies the Mask and adds it to the current filter stack.
             *
             * @param {PIXI.MaskData} maskData - Sprite to be used as the mask
             */
            pushSpriteMask(maskData: PIXI.MaskData): void;
            /**
             * Removes the last filter from the filter stack and doesn't return it.
             */
            popSpriteMask(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * System plugin to the renderer to manage scissor rects (used for masks).
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class ScissorSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * Applies the Mask and adds it to the current stencil stack. @alvin
             *
             * @param {PIXI.MaskData} maskData - The mask data
             */
            push(maskData: PIXI.MaskData): void;
            /**
             * Pops scissor mask. MaskData is already removed from stack
             */
            pop(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * System plugin to the renderer to manage stencils (used for masks).
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class StencilSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * Applies the Mask and adds it to the current stencil stack.
             *
             * @param {PIXI.MaskData} maskData - The mask data
             */
            push(maskData: PIXI.MaskData): void;
            /**
             * Pops stencil mask. MaskData is already removed from stack
             *
             * @param {PIXI.DisplayObject} maskObject - object of popped mask data
             */
            pop(maskObject: PIXI.DisplayObject): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * System plugin to the renderer to manage the projection matrix.
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class ProjectionSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * Destination frame
             * @member {PIXI.Rectangle} PIXI.systems.ProjectionSystem#destinationFrame
             * @readonly
             */
            readonly destinationFrame: PIXI.Rectangle;
            /**
             * Source frame
             * @member {PIXI.Rectangle} PIXI.systems.ProjectionSystem#sourceFrame
             * @readonly
             */
            readonly sourceFrame: PIXI.Rectangle;
            /**
             * Default destination frame
             * @member {PIXI.Rectangle} PIXI.systems.ProjectionSystem#defaultFrame
             * @readonly
             */
            readonly defaultFrame: PIXI.Rectangle;
            /**
             * Project matrix
             * @member {PIXI.Matrix} PIXI.systems.ProjectionSystem#projectionMatrix
             * @readonly
             */
            readonly projectionMatrix: PIXI.Matrix;
            /**
             * A transform that will be appended to the projection matrix
             * if null, nothing will be applied
             * @member {PIXI.Matrix} PIXI.systems.ProjectionSystem#transform
             */
            transform: PIXI.Matrix;
            /**
             * Updates the projection matrix based on a projection frame (which is a rectangle)
             *
             * @param {PIXI.Rectangle} destinationFrame - The destination frame.
             * @param {PIXI.Rectangle} sourceFrame - The source frame.
             * @param {Number} resolution - Resolution
             * @param {boolean} root - If is root
             */
            update(destinationFrame: PIXI.Rectangle, sourceFrame: PIXI.Rectangle, resolution: number, root: boolean): void;
            /**
             * Updates the projection matrix based on a projection frame (which is a rectangle)
             *
             * @param {PIXI.Rectangle} destinationFrame - The destination frame.
             * @param {PIXI.Rectangle} sourceFrame - The source frame.
             * @param {Number} resolution - Resolution
             * @param {boolean} root - If is root
             */
            calculateProjection(destinationFrame: PIXI.Rectangle, sourceFrame: PIXI.Rectangle, resolution: number, root: boolean): void;
            /**
             * Sets the transform of the active render target to the given matrix
             *
             * @param {PIXI.Matrix} matrix - The transformation matrix
             */
            setTransform(matrix: PIXI.Matrix): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * System plugin to the renderer to manage render textures.
         *
         * Should be added after FramebufferSystem
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class RenderTextureSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * The clear background color as rgba
             * @member {number[]} PIXI.systems.RenderTextureSystem#clearColor
             */
            clearColor: number[];
            /**
             * List of masks for the StencilSystem
             * @member {PIXI.Graphics[]} PIXI.systems.RenderTextureSystem#defaultMaskStack
             * @readonly
             */
            readonly defaultMaskStack: PIXI.Graphics[];
            /**
             * Render texture
             * @member {PIXI.RenderTexture} PIXI.systems.RenderTextureSystem#current
             * @readonly
             */
            readonly current: PIXI.RenderTexture;
            /**
             * Source frame
             * @member {PIXI.Rectangle} PIXI.systems.RenderTextureSystem#sourceFrame
             * @readonly
             */
            readonly sourceFrame: PIXI.Rectangle;
            /**
             * Destination frame
             * @member {PIXI.Rectangle} PIXI.systems.RenderTextureSystem#destinationFrame
             * @readonly
             */
            readonly destinationFrame: PIXI.Rectangle;
            /**
             * Bind the current render texture
             * @param {PIXI.RenderTexture} [renderTexture] - RenderTexture to bind, by default its `null`, the screen
             * @param {PIXI.Rectangle} [sourceFrame] - part of screen that is mapped to the renderTexture
             * @param {PIXI.Rectangle} [destinationFrame] - part of renderTexture, by default it has the same size as sourceFrame
             */
            bind(renderTexture?: PIXI.RenderTexture, sourceFrame?: PIXI.Rectangle, destinationFrame?: PIXI.Rectangle): void;
            /**
             * Erases the render texture and fills the drawing area with a colour
             *
             * @param {number[]} [clearColor] - The color as rgba, default to use the renderer backgroundColor
             * @return {PIXI.Renderer} Returns itself.
             */
            clear(clearColor?: number[]): PIXI.Renderer;
            /**
             * Resets renderTexture state
             */
            reset(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * System plugin to the renderer to manage shaders.
         *
         * @class
         * @memberof PIXI.systems
         * @extends PIXI.System
         */
        class ShaderSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * The current WebGL rendering context
             *
             * @member {WebGLRenderingContext} PIXI.systems.ShaderSystem#gl
             */
            gl: WebGLRenderingContext;
            /**
             * Changes the current shader to the one given in parameter
             *
             * @param {PIXI.Shader} shader - the new shader
             * @param {boolean} dontSync - false if the shader should automatically sync its uniforms.
             * @returns {PIXI.GLProgram} the glProgram that belongs to the shader.
             */
            bind(shader: PIXI.Shader, dontSync: boolean): PIXI.GLProgram;
            /**
             * Uploads the uniforms values to the currently bound shader.
             *
             * @param {object} uniforms - the uniforms values that be applied to the current shader
             */
            setUniforms(uniforms: any): void;
            /**
             * Returns the underlying GLShade rof the currently bound shader.
             * This can be handy for when you to have a little more control over the setting of your uniforms.
             *
             * @return {PIXI.GLProgram} the glProgram for the currently bound Shader for this context
             */
            getglProgram(): PIXI.GLProgram;
            /**
             * Resets ShaderSystem state, does not affect WebGL state
             */
            reset(): void;
            /**
             * Destroys this System and removes all its textures
             */
            destroy(): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
        }
        /**
         * System plugin to the renderer to manage WebGL state machines.
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class StateSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * GL context
             * @member {WebGLRenderingContext} PIXI.systems.StateSystem#gl
             * @readonly
             */
            readonly gl: WebGLRenderingContext;
            /**
             * State ID
             * @member {number} PIXI.systems.StateSystem#stateId
             * @readonly
             */
            readonly stateId: number;
            /**
             * Polygon offset
             * @member {number} PIXI.systems.StateSystem#polygonOffset
             * @readonly
             */
            readonly polygonOffset: number;
            /**
             * Blend mode
             * @member {number} PIXI.systems.StateSystem#blendMode
             * @default PIXI.BLEND_MODES.NONE
             * @readonly
             */
            readonly blendMode: number;
            /**
             * Whether current blend equation is different
             * @member {boolean} PIXI.systems.StateSystem#_blendEq
             * @protected
             */
            protected _blendEq: boolean;
            /**
             * Collection of calls
             * @member {function[]} PIXI.systems.StateSystem#map
             * @readonly
             */
            readonly map: ((...params: any[]) => any)[];
            /**
             * Collection of check calls
             * @member {function[]} PIXI.systems.StateSystem#checks
             * @readonly
             */
            readonly checks: ((...params: any[]) => any)[];
            /**
             * Default WebGL State
             * @member {PIXI.State} PIXI.systems.StateSystem#defaultState
             * @readonly
             */
            readonly defaultState: PIXI.State;
            /**
             * Sets the current state
             *
             * @param {*} state - The state to set.
             */
            set(state: any): void;
            /**
             * Sets the state, when previous state is unknown
             *
             * @param {*} state - The state to set
             */
            forceState(state: any): void;
            /**
             * Enables or disabled blending.
             *
             * @param {boolean} value - Turn on or off webgl blending.
             */
            setBlend(value: boolean): void;
            /**
             * Enables or disable polygon offset fill
             *
             * @param {boolean} value - Turn on or off webgl polygon offset testing.
             */
            setOffset(value: boolean): void;
            /**
             * Sets whether to enable or disable depth test.
             *
             * @param {boolean} value - Turn on or off webgl depth testing.
             */
            setDepthTest(value: boolean): void;
            /**
             * Sets whether to enable or disable cull face.
             *
             * @param {boolean} value - Turn on or off webgl cull face.
             */
            setCullFace(value: boolean): void;
            /**
             * Sets the gl front face.
             *
             * @param {boolean} value - true is clockwise and false is counter-clockwise
             */
            setFrontFace(value: boolean): void;
            /**
             * Sets the blend mode.
             *
             * @param {number} value - The blend mode to set to.
             */
            setBlendMode(value: number): void;
            /**
             * Sets the polygon offset.
             *
             * @param {number} value - the polygon offset
             * @param {number} scale - the polygon offset scale
             */
            setPolygonOffset(value: number, scale: number): void;
            /**
             * Resets all the logic and disables the vaos
             */
            reset(): void;
            /**
             * checks to see which updates should be checked based on which settings have been activated.
             * For example, if blend is enabled then we should check the blend modes each time the state is changed
             * or if polygon fill is activated then we need to check if the polygon offset changes.
             * The idea is that we only check what we have too.
             *
             * @param {Function} func  the checking function to add or remove
             * @param {boolean} value  should the check function be added or removed.
             */
            updateCheck(func: (...params: any[]) => any, value: boolean): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * System plugin to the renderer to manage texture garbage collection on the GPU,
         * ensuring that it does not get clogged up with textures that are no longer being used.
         *
         * @class
         * @memberof PIXI.systems
         * @extends PIXI.System
         */
        class TextureGCSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * Count
             * @member {number} PIXI.systems.TextureGCSystem#count
             * @readonly
             */
            readonly count: number;
            /**
             * Check count
             * @member {number} PIXI.systems.TextureGCSystem#checkCount
             * @readonly
             */
            readonly checkCount: number;
            /**
             * Maximum idle time, in seconds
             * @member {number} PIXI.systems.TextureGCSystem#maxIdle
             * @see PIXI.settings.GC_MAX_IDLE
             */
            maxIdle: number;
            /**
             * Maximum number of item to check
             * @member {number} PIXI.systems.TextureGCSystem#checkCountMax
             * @see PIXI.settings.GC_MAX_CHECK_COUNT
             */
            checkCountMax: number;
            /**
             * Current garabage collection mode
             * @member {PIXI.GC_MODES} PIXI.systems.TextureGCSystem#mode
             * @see PIXI.settings.GC_MODE
             */
            mode: PIXI.GC_MODES;
            /**
             * Checks to see when the last time a texture was used
             * if the texture has not been used for a specified amount of time it will be removed from the GPU
             */
            postrender(): void;
            /**
             * Checks to see when the last time a texture was used
             * if the texture has not been used for a specified amount of time it will be removed from the GPU
             */
            run(): void;
            /**
             * Removes all the textures within the specified displayObject and its children from the GPU
             *
             * @param {PIXI.DisplayObject} displayObject - the displayObject to remove the textures from.
             */
            unload(displayObject: PIXI.DisplayObject): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
        /**
         * System plugin to the renderer to manage textures.
         *
         * @class
         * @extends PIXI.System
         * @memberof PIXI.systems
         */
        class TextureSystem extends PIXI.System {
            constructor(renderer: PIXI.Renderer);
            /**
             * Bound textures
             * @member {PIXI.BaseTexture[]} PIXI.systems.TextureSystem#boundTextures
             * @readonly
             */
            readonly boundTextures: PIXI.BaseTexture[];
            /**
             * Current location
             * @member {number} PIXI.systems.TextureSystem#currentLocation
             * @readonly
             */
            readonly currentLocation: number;
            /**
             * List of managed textures
             * @member {PIXI.BaseTexture[]} PIXI.systems.TextureSystem#managedTextures
             * @readonly
             */
            readonly managedTextures: PIXI.BaseTexture[];
            /**
             * BaseTexture value that shows that we don't know what is bound
             * @member {PIXI.BaseTexture} PIXI.systems.TextureSystem#unknownTexture
             * @readonly
             */
            readonly unknownTexture: PIXI.BaseTexture;
            /**
             * Sets up the renderer context and necessary buffers.
             */
            contextChange(): void;
            /**
             * Bind a texture to a specific location
             *
             * If you want to unbind something, please use `unbind(texture)` instead of `bind(null, textureLocation)`
             *
             * @param {PIXI.Texture|PIXI.BaseTexture} texture - Texture to bind
             * @param {number} [location=0] - Location to bind at
             */
            bind(texture: PIXI.Texture | PIXI.BaseTexture, location?: number): void;
            /**
             * Resets texture location and bound textures
             *
             * Actual `bind(null, i)` calls will be performed at next `unbind()` call
             */
            reset(): void;
            /**
             * Unbind a texture
             * @param {PIXI.Texture|PIXI.BaseTexture} texture - Texture to bind
             */
            unbind(texture: PIXI.Texture | PIXI.BaseTexture): void;
            /**
             * The renderer this manager works for.
             *
             * @member {PIXI.Renderer} PIXI.System#renderer
             */
            renderer: PIXI.Renderer;
            /**
             * Generic destroy methods to be overridden by the subclass
             */
            destroy(): void;
        }
    }
    /**
     * A Texture stores the information that represents an image.
     * All textures have a base texture, which contains information about the source.
     * Therefore you can have many textures all using a single BaseTexture
     *
     * @class
     * @extends PIXI.utils.EventEmitter
     * @memberof PIXI
     * @param {PIXI.resources.Resource|string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement} [resource=null]
     *        The current resource to use, for things that aren't Resource objects, will be converted
     *        into a Resource.
     * @param {Object} [options] - Collection of options
     * @param {PIXI.MIPMAP_MODES} [options.mipmap=PIXI.settings.MIPMAP_TEXTURES] - If mipmapping is enabled for texture
     * @param {number} [options.anisotropicLevel=PIXI.settings.ANISOTROPIC_LEVEL] - Anisotropic filtering level of texture
     * @param {PIXI.WRAP_MODES} [options.wrapMode=PIXI.settings.WRAP_MODE] - Wrap mode for textures
     * @param {PIXI.SCALE_MODES} [options.scaleMode=PIXI.settings.SCALE_MODE] - Default scale mode, linear, nearest
     * @param {PIXI.FORMATS} [options.format=PIXI.FORMATS.RGBA] - GL format type
     * @param {PIXI.TYPES} [options.type=PIXI.TYPES.UNSIGNED_BYTE] - GL data type
     * @param {PIXI.TARGETS} [options.target=PIXI.TARGETS.TEXTURE_2D] - GL texture target
     * @param {PIXI.ALPHA_MODES} [options.alphaMode=PIXI.ALPHA_MODES.UNPACK] - Pre multiply the image alpha
     * @param {number} [options.width=0] - Width of the texture
     * @param {number} [options.height=0] - Height of the texture
     * @param {number} [options.resolution] - Resolution of the base texture
     * @param {object} [options.resourceOptions] - Optional resource options,
     *        see {@link PIXI.resources.autoDetectResource autoDetectResource}
     */
    class BaseTexture extends PIXI.utils.EventEmitter {
        constructor(resource?: PIXI.resources.Resource | string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement, options?: {
            mipmap?: PIXI.MIPMAP_MODES;
            anisotropicLevel?: number;
            wrapMode?: PIXI.WRAP_MODES;
            scaleMode?: PIXI.SCALE_MODES;
            format?: PIXI.FORMATS;
            type?: PIXI.TYPES;
            target?: PIXI.TARGETS;
            alphaMode?: PIXI.ALPHA_MODES;
            width?: number;
            height?: number;
            resolution?: number;
            resourceOptions?: any;
        });
        /**
         * The width of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number} PIXI.BaseTexture#width
         */
        readonly width: number;
        /**
         * The height of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number} PIXI.BaseTexture#height
         */
        readonly height: number;
        /**
         * The resolution / device pixel ratio of the texture
         *
         * @member {number} PIXI.BaseTexture#resolution
         * @default PIXI.settings.RESOLUTION
         */
        resolution: number;
        /**
         * Mipmap mode of the texture, affects downscaled images
         *
         * @member {PIXI.MIPMAP_MODES} PIXI.BaseTexture#mipmap
         * @default PIXI.settings.MIPMAP_TEXTURES
         */
        mipmap: PIXI.MIPMAP_MODES;
        /**
         * Anisotropic filtering level of texture
         *
         * @member {number} PIXI.BaseTexture#anisotropicLevel
         * @default PIXI.settings.ANISOTROPIC_LEVEL
         */
        anisotropicLevel: number;
        /**
         * How the texture wraps
         * @member {number} PIXI.BaseTexture#wrapMode
         */
        wrapMode: number;
        /**
         * The scale mode to apply when scaling this texture
         *
         * @member {PIXI.SCALE_MODES} PIXI.BaseTexture#scaleMode
         * @default PIXI.settings.SCALE_MODE
         */
        scaleMode: PIXI.SCALE_MODES;
        /**
         * The pixel format of the texture
         *
         * @member {PIXI.FORMATS} PIXI.BaseTexture#format
         * @default PIXI.FORMATS.RGBA
         */
        format: PIXI.FORMATS;
        /**
         * The type of resource data
         *
         * @member {PIXI.TYPES} PIXI.BaseTexture#type
         * @default PIXI.TYPES.UNSIGNED_BYTE
         */
        type: PIXI.TYPES;
        /**
         * The target type
         *
         * @member {PIXI.TARGETS} PIXI.BaseTexture#target
         * @default PIXI.TARGETS.TEXTURE_2D
         */
        target: PIXI.TARGETS;
        /**
         * How to treat premultiplied alpha, see {@link PIXI.ALPHA_MODES}.
         *
         * @member {PIXI.ALPHA_MODES} PIXI.BaseTexture#alphaMode
         * @default PIXI.ALPHA_MODES.UNPACK
         */
        alphaMode: PIXI.ALPHA_MODES;
        /**
         * Global unique identifier for this BaseTexture
         *
         * @member {string} PIXI.BaseTexture#uid
         * @protected
         */
        protected uid: string;
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         *
         * @member {number} PIXI.BaseTexture#touched
         * @protected
         */
        protected touched: number;
        /**
         * Whether or not the texture is a power of two, try to use power of two textures as much
         * as you can
         *
         * @readonly
         * @member {boolean} PIXI.BaseTexture#isPowerOfTwo
         * @default false
         */
        readonly isPowerOfTwo: boolean;
        /**
         * Used by TextureSystem to only update texture to the GPU when needed.
         * Please call `update()` to increment it.
         *
         * @readonly
         * @member {number} PIXI.BaseTexture#dirtyId
         */
        readonly dirtyId: number;
        /**
         * Used by TextureSystem to only update texture style when needed.
         *
         * @protected
         * @member {number} PIXI.BaseTexture#dirtyStyleId
         */
        protected dirtyStyleId: number;
        /**
         * Currently default cache ID.
         *
         * @member {string} PIXI.BaseTexture#cacheId
         */
        cacheId: string;
        /**
         * Generally speaking means when resource is loaded.
         * @readonly
         * @member {boolean} PIXI.BaseTexture#valid
         */
        readonly valid: boolean;
        /**
         * The collection of alternative cache ids, since some BaseTextures
         * can have more than one ID, short name and longer full URL
         *
         * @member {Array<string>} PIXI.BaseTexture#textureCacheIds
         * @readonly
         */
        readonly textureCacheIds: string[];
        /**
         * Flag if BaseTexture has been destroyed.
         *
         * @member {boolean} PIXI.BaseTexture#destroyed
         * @readonly
         */
        readonly destroyed: boolean;
        /**
         * The resource used by this BaseTexture, there can only
         * be one resource per BaseTexture, but textures can share
         * resources.
         *
         * @member {PIXI.resources.Resource} PIXI.BaseTexture#resource
         * @readonly
         */
        readonly resource: PIXI.resources.Resource;
        /**
         * Number of the texture batch, used by multi-texture renderers
         *
         * @member {number} PIXI.BaseTexture#_batchEnabled
         */
        _batchEnabled: number;
        /**
         * Location inside texture batch, used by multi-texture renderers
         *
         * @member {number} PIXI.BaseTexture#_batchLocation
         */
        _batchLocation: number;
        /**
         * Pixel width of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        readonly realWidth: number;
        /**
         * Pixel height of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        readonly realHeight: number;
        /**
         * Changes style options of BaseTexture
         *
         * @param {PIXI.SCALE_MODES} [scaleMode] - Pixi scalemode
         * @param {PIXI.MIPMAP_MODES} [mipmap] - enable mipmaps
         * @returns {PIXI.BaseTexture} this
         */
        setStyle(scaleMode?: PIXI.SCALE_MODES, mipmap?: PIXI.MIPMAP_MODES): PIXI.BaseTexture;
        /**
         * Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.
         *
         * @param {number} width Visual width
         * @param {number} height Visual height
         * @param {number} [resolution] Optionally set resolution
         * @returns {PIXI.BaseTexture} this
         */
        setSize(width: number, height: number, resolution?: number): PIXI.BaseTexture;
        /**
         * Sets real size of baseTexture, preserves current resolution.
         *
         * @param {number} realWidth Full rendered width
         * @param {number} realHeight Full rendered height
         * @param {number} [resolution] Optionally set resolution
         * @returns {PIXI.BaseTexture} this
         */
        setRealSize(realWidth: number, realHeight: number, resolution?: number): PIXI.BaseTexture;
        /**
         * Changes resolution
         *
         * @param {number} [resolution] res
         * @returns {PIXI.BaseTexture} this
         */
        setResolution(resolution?: number): PIXI.BaseTexture;
        /**
         * Sets the resource if it wasn't set. Throws error if resource already present
         *
         * @param {PIXI.resources.Resource} resource - that is managing this BaseTexture
         * @returns {PIXI.BaseTexture} this
         */
        setResource(resource: PIXI.resources.Resource): PIXI.BaseTexture;
        /**
         * Invalidates the object. Texture becomes valid if width and height are greater than zero.
         */
        update(): void;
        /**
         * Destroys this base texture.
         * The method stops if resource doesn't want this texture to be destroyed.
         * Removes texture from all caches.
         */
        destroy(): void;
        /**
         * Frees the texture from WebGL memory without destroying this texture object.
         * This means you can still use the texture later which will upload it to GPU
         * memory again.
         *
         * @fires PIXI.BaseTexture#dispose
         */
        dispose(): void;
        /**
         * Helper function that creates a base texture based on the source you provide.
         * The source can be - image url, image element, canvas element. If the
         * source is an image url or an image element and not in the base texture
         * cache, it will be created and loaded.
         *
         * @static
         * @param {string|HTMLImageElement|HTMLCanvasElement|SVGElement|HTMLVideoElement} source - The
         *        source to create base texture from.
         * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
         * @param {boolean} [strict] Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
         * @returns {PIXI.BaseTexture} The new base texture.
         */
        static from(source: string | HTMLImageElement | HTMLCanvasElement | SVGElement | HTMLVideoElement, options?: any, strict?: boolean): PIXI.BaseTexture;
        /**
         * Create a new BaseTexture with a BufferResource from a Float32Array.
         * RGBA values are floats from 0 to 1.
         * @static
         * @param {Float32Array|Uint8Array} buffer The optional array to use, if no data
         *        is provided, a new Float32Array is created.
         * @param {number} width - Width of the resource
         * @param {number} height - Height of the resource
         * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
         * @return {PIXI.BaseTexture} The resulting new BaseTexture
         */
        static fromBuffer(buffer: Float32Array | Uint8Array, width: number, height: number, options?: any): PIXI.BaseTexture;
        /**
         * Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole PIXI object.
         *
         * @static
         * @param {PIXI.BaseTexture} baseTexture - The BaseTexture to add to the cache.
         * @param {string} id - The id that the BaseTexture will be stored against.
         */
        static addToCache(baseTexture: PIXI.BaseTexture, id: string): void;
        /**
         * Remove a BaseTexture from the global BaseTextureCache.
         *
         * @static
         * @param {string|PIXI.BaseTexture} baseTexture - id of a BaseTexture to be removed, or a BaseTexture instance itself.
         * @return {PIXI.BaseTexture|null} The BaseTexture that was removed.
         */
        static removeFromCache(baseTexture: string | PIXI.BaseTexture): PIXI.BaseTexture | null;
        /**
         * Global number of the texture batch, used by multi-texture renderers
         *
         * @static
         * @member {number}
         */
        static _globalBatch: number;
    }
    /**
     * A Texture that depends on six other resources.
     *
     * @class
     * @extends PIXI.BaseTexture
     * @memberof PIXI
     */
    class CubeTexture extends PIXI.BaseTexture {
        static from(resources: string|HTMLImageElement|HTMLCanvasElement|SVGElement|HTMLVideoElement, options?: any): BaseTexture;
        /**
         * Generate a new CubeTexture.
         * @static
         * @param {string[]|PIXI.resources.Resource[]} resources - Collection of 6 URLs or resources
         * @param {object} [options] - Optional options passed to the resources being loaded.
         *        See {@PIXI.resources.autoDetectResource autoDetectResource} for more info
         *        on the options available to each resource.
         * @returns {PIXI.CubeTexture} new cube texture
         */
        static from(resources: string[] | PIXI.resources.Resource[], options?: any): PIXI.CubeTexture;
        /**
         * The width of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number} PIXI.BaseTexture#width
         */
        readonly width: number;
        /**
         * The height of the base texture set when the image has loaded
         *
         * @readonly
         * @member {number} PIXI.BaseTexture#height
         */
        readonly height: number;
        /**
         * The resolution / device pixel ratio of the texture
         *
         * @member {number} PIXI.BaseTexture#resolution
         * @default PIXI.settings.RESOLUTION
         */
        resolution: number;
        /**
         * Mipmap mode of the texture, affects downscaled images
         *
         * @member {PIXI.MIPMAP_MODES} PIXI.BaseTexture#mipmap
         * @default PIXI.settings.MIPMAP_TEXTURES
         */
        mipmap: PIXI.MIPMAP_MODES;
        /**
         * Anisotropic filtering level of texture
         *
         * @member {number} PIXI.BaseTexture#anisotropicLevel
         * @default PIXI.settings.ANISOTROPIC_LEVEL
         */
        anisotropicLevel: number;
        /**
         * How the texture wraps
         * @member {number} PIXI.BaseTexture#wrapMode
         */
        wrapMode: number;
        /**
         * The scale mode to apply when scaling this texture
         *
         * @member {PIXI.SCALE_MODES} PIXI.BaseTexture#scaleMode
         * @default PIXI.settings.SCALE_MODE
         */
        scaleMode: PIXI.SCALE_MODES;
        /**
         * The pixel format of the texture
         *
         * @member {PIXI.FORMATS} PIXI.BaseTexture#format
         * @default PIXI.FORMATS.RGBA
         */
        format: PIXI.FORMATS;
        /**
         * The type of resource data
         *
         * @member {PIXI.TYPES} PIXI.BaseTexture#type
         * @default PIXI.TYPES.UNSIGNED_BYTE
         */
        type: PIXI.TYPES;
        /**
         * The target type
         *
         * @member {PIXI.TARGETS} PIXI.BaseTexture#target
         * @default PIXI.TARGETS.TEXTURE_2D
         */
        target: PIXI.TARGETS;
        /**
         * How to treat premultiplied alpha, see {@link PIXI.ALPHA_MODES}.
         *
         * @member {PIXI.ALPHA_MODES} PIXI.BaseTexture#alphaMode
         * @default PIXI.ALPHA_MODES.UNPACK
         */
        alphaMode: PIXI.ALPHA_MODES;
        /**
         * Global unique identifier for this BaseTexture
         *
         * @member {string} PIXI.BaseTexture#uid
         * @protected
         */
        protected uid: string;
        /**
         * Used by automatic texture Garbage Collection, stores last GC tick when it was bound
         *
         * @member {number} PIXI.BaseTexture#touched
         * @protected
         */
        protected touched: number;
        /**
         * Whether or not the texture is a power of two, try to use power of two textures as much
         * as you can
         *
         * @readonly
         * @member {boolean} PIXI.BaseTexture#isPowerOfTwo
         * @default false
         */
        readonly isPowerOfTwo: boolean;
        /**
         * Used by TextureSystem to only update texture to the GPU when needed.
         * Please call `update()` to increment it.
         *
         * @readonly
         * @member {number} PIXI.BaseTexture#dirtyId
         */
        readonly dirtyId: number;
        /**
         * Used by TextureSystem to only update texture style when needed.
         *
         * @protected
         * @member {number} PIXI.BaseTexture#dirtyStyleId
         */
        protected dirtyStyleId: number;
        /**
         * Currently default cache ID.
         *
         * @member {string} PIXI.BaseTexture#cacheId
         */
        cacheId: string;
        /**
         * Generally speaking means when resource is loaded.
         * @readonly
         * @member {boolean} PIXI.BaseTexture#valid
         */
        readonly valid: boolean;
        /**
         * The collection of alternative cache ids, since some BaseTextures
         * can have more than one ID, short name and longer full URL
         *
         * @member {Array<string>} PIXI.BaseTexture#textureCacheIds
         * @readonly
         */
        readonly textureCacheIds: string[];
        /**
         * Flag if BaseTexture has been destroyed.
         *
         * @member {boolean} PIXI.BaseTexture#destroyed
         * @readonly
         */
        readonly destroyed: boolean;
        /**
         * The resource used by this BaseTexture, there can only
         * be one resource per BaseTexture, but textures can share
         * resources.
         *
         * @member {PIXI.resources.Resource} PIXI.BaseTexture#resource
         * @readonly
         */
        readonly resource: PIXI.resources.Resource;
        /**
         * Number of the texture batch, used by multi-texture renderers
         *
         * @member {number} PIXI.BaseTexture#_batchEnabled
         */
        _batchEnabled: number;
        /**
         * Location inside texture batch, used by multi-texture renderers
         *
         * @member {number} PIXI.BaseTexture#_batchLocation
         */
        _batchLocation: number;
        /**
         * Pixel width of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        readonly realWidth: number;
        /**
         * Pixel height of the source of this texture
         *
         * @readonly
         * @member {number}
         */
        readonly realHeight: number;
        /**
         * Changes style options of BaseTexture
         *
         * @param {PIXI.SCALE_MODES} [scaleMode] - Pixi scalemode
         * @param {PIXI.MIPMAP_MODES} [mipmap] - enable mipmaps
         * @returns {PIXI.BaseTexture} this
         */
        setStyle(scaleMode?: PIXI.SCALE_MODES, mipmap?: PIXI.MIPMAP_MODES): PIXI.BaseTexture;
        /**
         * Changes w/h/resolution. Texture becomes valid if width and height are greater than zero.
         *
         * @param {number} width Visual width
         * @param {number} height Visual height
         * @param {number} [resolution] Optionally set resolution
         * @returns {PIXI.BaseTexture} this
         */
        setSize(width: number, height: number, resolution?: number): PIXI.BaseTexture;
        /**
         * Sets real size of baseTexture, preserves current resolution.
         *
         * @param {number} realWidth Full rendered width
         * @param {number} realHeight Full rendered height
         * @param {number} [resolution] Optionally set resolution
         * @returns {PIXI.BaseTexture} this
         */
        setRealSize(realWidth: number, realHeight: number, resolution?: number): PIXI.BaseTexture;
        /**
         * Changes resolution
         *
         * @param {number} [resolution] res
         * @returns {PIXI.BaseTexture} this
         */
        setResolution(resolution?: number): PIXI.BaseTexture;
        /**
         * Sets the resource if it wasn't set. Throws error if resource already present
         *
         * @param {PIXI.resources.Resource} resource - that is managing this BaseTexture
         * @returns {PIXI.BaseTexture} this
         */
        setResource(resource: PIXI.resources.Resource): PIXI.BaseTexture;
        /**
         * Invalidates the object. Texture becomes valid if width and height are greater than zero.
         */
        update(): void;
        /**
         * Destroys this base texture.
         * The method stops if resource doesn't want this texture to be destroyed.
         * Removes texture from all caches.
         */
        destroy(): void;
        /**
         * Frees the texture from WebGL memory without destroying this texture object.
         * This means you can still use the texture later which will upload it to GPU
         * memory again.
         *
         * @fires PIXI.BaseTexture#dispose
         */
        dispose(): void;
    }
    /**
     * Internal texture for WebGL context
     * @class
     * @memberof PIXI
     */
    class GLTexture {
        constructor();
        /**
         * The WebGL texture
         * @member {WebGLTexture} PIXI.GLTexture#texture
         */
        texture: WebGLTexture;
        /**
         * Width of texture that was used in texImage2D
         * @member {number} PIXI.GLTexture#width
         */
        width: number;
        /**
         * Height of texture that was used in texImage2D
         * @member {number} PIXI.GLTexture#height
         */
        height: number;
        /**
         * Texture contents dirty flag
         * @member {number} PIXI.GLTexture#dirtyId
         */
        dirtyId: number;
        /**
         * Texture style dirty flag
         * @member {number} PIXI.GLTexture#dirtyStyleId
         */
        dirtyStyleId: number;
        /**
         * Whether mip levels has to be generated
         * @member {boolean} PIXI.GLTexture#mipmap
         */
        mipmap: boolean;
        /**
         * WrapMode copied from baseTexture
         * @member {number} PIXI.GLTexture#wrapMode
         */
        wrapMode: number;
        /**
         * Type copied from baseTexture
         * @member {number} PIXI.GLTexture#type
         */
        type: number;
        /**
         * Type copied from baseTexture
         * @member {number} PIXI.GLTexture#internalFormat
         */
        internalFormat: number;
    }
    /**
     * A texture stores the information that represents an image or part of an image.
     *
     * It cannot be added to the display list directly; instead use it as the texture for a Sprite.
     * If no frame is provided for a texture, then the whole image is used.
     *
     * You can directly create a texture from an image and then reuse it multiple times like this :
     *
     * ```js
     * let texture = PIXI.Texture.from('assets/image.png');
     * let sprite1 = new PIXI.Sprite(texture);
     * let sprite2 = new PIXI.Sprite(texture);
     * ```
     *
     * If you didnt pass the texture frame to constructor, it enables `noFrame` mode:
     * it subscribes on baseTexture events, it automatically resizes at the same time as baseTexture.
     *
     * Textures made from SVGs, loaded or not, cannot be used before the file finishes processing.
     * You can check for this by checking the sprite's _textureID property.
     * ```js
     * var texture = PIXI.Texture.from('assets/image.svg');
     * var sprite1 = new PIXI.Sprite(texture);
     * //sprite1._textureID should not be undefined if the texture has finished processing the SVG file
     * ```
     * You can use a ticker or rAF to ensure your sprites load the finished textures after processing. See issue #3068.
     *
     * @class
     * @extends PIXI.utils.EventEmitter
     * @memberof PIXI
     */
    class Texture extends PIXI.utils.EventEmitter {
        constructor(baseTexture: PIXI.BaseTexture, frame?: PIXI.Rectangle, orig?: PIXI.Rectangle, trim?: PIXI.Rectangle, rotate?: number, anchor?: PIXI.Point);
        /**
         * Does this Texture have any frame data assigned to it?
         *
         * This mode is enabled automatically if no frame was passed inside constructor.
         *
         * In this mode texture is subscribed to baseTexture events, and fires `update` on any change.
         *
         * Beware, after loading or resize of baseTexture event can fired two times!
         * If you want more control, subscribe on baseTexture itself.
         *
         * ```js
         * texture.on('update', () => {});
         * ```
         *
         * Any assignment of `frame` switches off `noFrame` mode.
         *
         * @member {boolean} PIXI.Texture#noFrame
         */
        noFrame: boolean;
        /**
         * The base texture that this texture uses.
         *
         * @member {PIXI.BaseTexture} PIXI.Texture#baseTexture
         */
        baseTexture: PIXI.BaseTexture;
        /**
         * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
         * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
         *
         * @member {PIXI.Rectangle} PIXI.Texture#_frame
         */
        _frame: PIXI.Rectangle;
        /**
         * This is the trimmed area of original texture, before it was put in atlas
         * Please call `updateUvs()` after you change coordinates of `trim` manually.
         *
         * @member {PIXI.Rectangle} PIXI.Texture#trim
         */
        trim: PIXI.Rectangle;
        /**
         * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
         *
         * @member {boolean} PIXI.Texture#valid
         */
        valid: boolean;
        /**
         * This will let a renderer know that a texture has been updated (used mainly for WebGL uv updates)
         *
         * @member {boolean} PIXI.Texture#requiresUpdate
         */
        requiresUpdate: boolean;
        /**
         * The WebGL UV data cache. Can be used as quad UV
         *
         * @member {PIXI.TextureUvs} PIXI.Texture#_uvs
         * @protected
         */
        protected _uvs: PIXI.TextureUvs;
        /**
         * Default TextureMatrix instance for this texture
         * By default that object is not created because its heavy
         *
         * @member {PIXI.TextureMatrix} PIXI.Texture#uvMatrix
         */
        uvMatrix: PIXI.TextureMatrix;
        /**
         * This is the area of original texture, before it was put in atlas
         *
         * @member {PIXI.Rectangle} PIXI.Texture#orig
         */
        orig: PIXI.Rectangle;
        /**
         * Anchor point that is used as default if sprite is created with this texture.
         * Changing the `defaultAnchor` at a later point of time will not update Sprite's anchor point.
         * @member {PIXI.Point} PIXI.Texture#defaultAnchor
         * @default {0,0}
         */
        defaultAnchor: PIXI.Point;
        /**
         * Update ID is observed by sprites and TextureMatrix instances.
         * Call updateUvs() to increment it.
         *
         * @member {number} PIXI.Texture#_updateID
         * @protected
         */
        protected _updateID: number;
        /**
         * The ids under which this Texture has been added to the texture cache. This is
         * automatically set as long as Texture.addToCache is used, but may not be set if a
         * Texture is added directly to the TextureCache array.
         *
         * @member {string[]} PIXI.Texture#textureCacheIds
         */
        textureCacheIds: string[];
        /**
         * Updates this texture on the gpu.
         *
         * Calls the TextureResource update.
         *
         * If you adjusted `frame` manually, please call `updateUvs()` instead.
         *
         */
        update(): void;
        /**
         * Called when the base texture is updated
         *
         * @protected
         * @param {PIXI.BaseTexture} baseTexture - The base texture.
         */
        protected onBaseTextureUpdated(baseTexture: PIXI.BaseTexture): void;
        /**
         * Destroys this texture
         *
         * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
         */
        destroy(destroyBase?: boolean): void;
        /**
         * Creates a new texture object that acts the same as this one.
         *
         * @return {PIXI.Texture} The new texture
         */
        clone(): PIXI.Texture;
        /**
         * Updates the internal WebGL UV cache. Use it after you change `frame` or `trim` of the texture.
         * Call it after changing the frame
         */
        updateUvs(): void;
        /**
         * Helper function that creates a new Texture based on the source you provide.
         * The source can be - frame id, image url, video url, canvas element, video element, base texture
         *
         * @static
         * @param {string|HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|PIXI.BaseTexture} source
         *        Source to create texture from
         * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
         * @param {boolean} [strict] Enforce strict-mode, see {@link PIXI.settings.STRICT_TEXTURE_CACHE}.
         * @return {PIXI.Texture} The newly created texture
         */
        static from(source: string | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | PIXI.BaseTexture, options?: any, strict?: boolean): PIXI.Texture;
        /**
         * Create a new Texture with a BufferResource from a Float32Array.
         * RGBA values are floats from 0 to 1.
         * @static
         * @param {Float32Array|Uint8Array} buffer The optional array to use, if no data
         *        is provided, a new Float32Array is created.
         * @param {number} width - Width of the resource
         * @param {number} height - Height of the resource
         * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
         * @return {PIXI.Texture} The resulting new BaseTexture
         */
        static fromBuffer(buffer: Float32Array | Uint8Array, width: number, height: number, options?: any): PIXI.Texture;
        /**
         * Create a texture from a source and add to the cache.
         *
         * @static
         * @param {HTMLImageElement|HTMLCanvasElement} source - The input source.
         * @param {String} imageUrl - File name of texture, for cache and resolving resolution.
         * @param {String} [name] - Human readable name for the texture cache. If no name is
         *        specified, only `imageUrl` will be used as the cache ID.
         * @return {PIXI.Texture} Output texture
         */
        static fromLoader(source: HTMLImageElement | HTMLCanvasElement, imageUrl: string, name?: string): PIXI.Texture;
        /**
         * Adds a Texture to the global TextureCache. This cache is shared across the whole PIXI object.
         *
         * @static
         * @param {PIXI.Texture} texture - The Texture to add to the cache.
         * @param {string} id - The id that the Texture will be stored against.
         */
        static addToCache(texture: PIXI.Texture, id: string): void;
        /**
         * Remove a Texture from the global TextureCache.
         *
         * @static
         * @param {string|PIXI.Texture} texture - id of a Texture to be removed, or a Texture instance itself
         * @return {PIXI.Texture|null} The Texture that was removed
         */
        static removeFromCache(texture: string | PIXI.Texture): PIXI.Texture | null;
        /**
         * Returns resolution of baseTexture
         *
         * @member {number}
         * @readonly
         */
        readonly resolution: number;
        /**
         * The frame specifies the region of the base texture that this texture uses.
         * Please call `updateUvs()` after you change coordinates of `frame` manually.
         *
         * @member {PIXI.Rectangle}
         */
        frame: PIXI.Rectangle;
        /**
         * Indicates whether the texture is rotated inside the atlas
         * set to 2 to compensate for texture packer rotation
         * set to 6 to compensate for spine packer rotation
         * can be used to rotate or mirror sprites
         * See {@link PIXI.groupD8} for explanation
         *
         * @member {number}
         */
        rotate: number;
        /**
         * The width of the Texture in pixels.
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Texture in pixels.
         *
         * @member {number}
         */
        height: number;
        /**
         * An empty texture, used often to not have to create multiple empty textures.
         * Can not be destroyed.
         *
         * @static
         * @constant
         * @member {PIXI.Texture}
         */
        static EMPTY: PIXI.Texture;
        /**
         * A white texture of 16x16 size, used for graphics and other things
         * Can not be destroyed.
         *
         * @static
         * @constant
         * @member {PIXI.Texture}
         */
        static WHITE: PIXI.Texture;
    }
    /**
     * Class controls uv mapping from Texture normal space to BaseTexture normal space.
     *
     * Takes `trim` and `rotate` into account. May contain clamp settings for Meshes and TilingSprite.
     *
     * Can be used in Texture `uvMatrix` field, or separately, you can use different clamp settings on the same texture.
     * If you want to add support for texture region of certain feature or filter, that's what you're looking for.
     *
     * Takes track of Texture changes through `_lastTextureID` private field.
     * Use `update()` method call to track it from outside.
     *
     * @see PIXI.Texture
     * @see PIXI.Mesh
     * @see PIXI.TilingSprite
     * @class
     * @memberof PIXI
     */
    class TextureMatrix {
        constructor(texture: PIXI.Texture, clampMargin?: number);
        /**
         * Matrix operation that converts texture region coords to texture coords
         * @member {PIXI.Matrix} PIXI.TextureMatrix#mapCoord
         * @readonly
         */
        readonly mapCoord: PIXI.Matrix;
        /**
         * Clamp region for normalized coords, left-top pixel center in xy , bottom-right in zw.
         * Calculated based on clampOffset.
         * @member {Float32Array} PIXI.TextureMatrix#uClampFrame
         * @readonly
         */
        readonly uClampFrame: Float32Array;
        /**
         * Normalized clamp offset.
         * Calculated based on clampOffset.
         * @member {Float32Array} PIXI.TextureMatrix#uClampOffset
         * @readonly
         */
        readonly uClampOffset: Float32Array;
        /**
         * Tracks Texture frame changes
         * @member {number} PIXI.TextureMatrix#_updateID
         * @protected
         */
        protected _updateID: number;
        /**
         * Changes frame clamping
         * Works with TilingSprite and Mesh
         * Change to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders
         *
         * @default 0
         * @member {number} PIXI.TextureMatrix#clampOffset
         */
        clampOffset: number;
        /**
         * Changes frame clamping
         * Works with TilingSprite and Mesh
         * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
         *
         * @default 0.5
         * @member {number} PIXI.TextureMatrix#clampMargin
         */
        clampMargin: number;
        /**
         * If texture size is the same as baseTexture
         * @member {boolean} PIXI.TextureMatrix#isSimple
         * @default false
         * @readonly
         */
        readonly isSimple: boolean;
        /**
         * texture property
         * @member {PIXI.Texture}
         */
        texture: PIXI.Texture;
        /**
         * Multiplies uvs array to transform
         * @param {Float32Array} uvs mesh uvs
         * @param {Float32Array} [out=uvs] output
         * @returns {Float32Array} output
         */
        multiplyUvs(uvs: Float32Array, out?: Float32Array): Float32Array;
        /**
         * updates matrices if texture was changed
         * @param {boolean} [forceUpdate=false] if true, matrices will be updated any case
         * @returns {boolean} whether or not it was updated
         */
        update(forceUpdate?: boolean): boolean;
    }
    /**
     * Stores a texture's frame in UV coordinates, in
     * which everything lies in the rectangle `[(0,0), (1,0),
     * (1,1), (0,1)]`.
     *
     * | Corner       | Coordinates |
     * |--------------|-------------|
     * | Top-Left     | `(x0,y0)`   |
     * | Top-Right    | `(x1,y1)`   |
     * | Bottom-Right | `(x2,y2)`   |
     * | Bottom-Left  | `(x3,y3)`   |
     *
     * @class
     * @protected
     * @memberof PIXI
     */
    class TextureUvs {
        constructor();
        /**
         * X-component of top-left corner `(x0,y0)`.
         *
         * @member {number} PIXI.TextureUvs#x0
         */
        x0: number;
        /**
         * Y-component of top-left corner `(x0,y0)`.
         *
         * @member {number} PIXI.TextureUvs#y0
         */
        y0: number;
        /**
         * X-component of top-right corner `(x1,y1)`.
         *
         * @member {number} PIXI.TextureUvs#x1
         */
        x1: number;
        /**
         * Y-component of top-right corner `(x1,y1)`.
         *
         * @member {number} PIXI.TextureUvs#y1
         */
        y1: number;
        /**
         * X-component of bottom-right corner `(x2,y2)`.
         *
         * @member {number} PIXI.TextureUvs#x2
         */
        x2: number;
        /**
         * Y-component of bottom-right corner `(x2,y2)`.
         *
         * @member {number} PIXI.TextureUvs#y2
         */
        y2: number;
        /**
         * X-component of bottom-left corner `(x3,y3)`.
         *
         * @member {number} PIXI.TextureUvs#x3
         */
        x3: number;
        /**
         * Y-component of bottom-right corner `(x3,y3)`.
         *
         * @member {number} PIXI.TextureUvs#y3
         */
        y3: number;
        /**
         * Sets the texture Uvs based on the given frame information.
         *
         * @protected
         * @param {PIXI.Rectangle} frame - The frame of the texture
         * @param {PIXI.Rectangle} baseFrame - The base frame of the texture
         * @param {number} rotate - Rotation of frame, see {@link PIXI.groupD8}
         */
        protected set(frame: PIXI.Rectangle, baseFrame: PIXI.Rectangle, rotate: number): void;
    }
    /**
     * Collection of base resource types supported by PixiJS.
     *
     * Resources are used by {@link PIXI.BaseTexture} to handle different media types
     * such as images, video, SVG graphics, etc. In most use-cases, you should not
     * instantiate the resources directly. The easy thing is to use
     * {@link PIXI.BaseTexture.from}.
     * @example
     * const baseTexture = PIXI.BaseTexture.from('path/to/image.jpg');
     * @namespace PIXI.resources
     */
    namespace resources {
        /**
         * A resource that contains a number of sources.
         *
         * @class
         * @extends PIXI.resources.Resource
         * @memberof PIXI.resources
         * @param {number|Array<*>} source - Number of items in array or the collection
         *        of image URLs to use. Can also be resources, image elements, canvas, etc.
         * @param {object} [options] Options to apply to {@link PIXI.resources.autoDetectResource}
         * @param {number} [options.width] - Width of the resource
         * @param {number} [options.height] - Height of the resource
         */
        class ArrayResource extends PIXI.resources.Resource {
            constructor(source: number | any[], options?: {
                width?: number;
                height?: number;
            });
            /**
             * Collection of resources.
             * @member {Array<PIXI.BaseTexture>} PIXI.resources.ArrayResource#items
             * @readonly
             */
            readonly items: PIXI.BaseTexture[];
            /**
             * Dirty IDs for each part
             * @member {Array<number>} PIXI.resources.ArrayResource#itemDirtyIds
             * @readonly
             */
            readonly itemDirtyIds: number[];
            /**
             * Number of elements in array
             *
             * @member {number} PIXI.resources.ArrayResource#length
             * @readonly
             */
            readonly length: number;
            /**
             * Set a resource by ID
             *
             * @param {PIXI.resources.Resource} resource
             * @param {number} index - Zero-based index of resource to set
             * @return {PIXI.resources.ArrayResource} Instance for chaining
             */
            addResourceAt(resource: PIXI.resources.Resource, index: number): PIXI.resources.ArrayResource;
            /**
             * Upload the resources to the GPU.
             * @param {PIXI.Renderer} renderer
             * @param {PIXI.BaseTexture} texture
             * @param {PIXI.GLTexture} glTexture
             * @returns {boolean} whether texture was uploaded
             */
            upload(renderer: PIXI.Renderer, texture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Internal width of the resource
             * @member {number} PIXI.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} PIXI.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} PIXI.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} PIXI.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * Has been updated trigger event
             */
            update(): void;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Set the style, optional to override
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} `true` is success
             */
            style(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Base for all the image/canvas resources
         * @class
         * @extends PIXI.resources.Resource
         * @memberof PIXI.resources
         */
        class BaseImageResource extends PIXI.resources.Resource {
            constructor(source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement);
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} PIXI.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Set cross origin based detecting the url and the crossorigin
             * @protected
             * @param {HTMLElement} element - Element to apply crossOrigin
             * @param {string} url - URL to check
             * @param {boolean|string} [crossorigin=true] - Cross origin value to use
             */
            protected static crossOrigin(element: HTMLElement, url: string, crossorigin?: boolean | string): void;
            /**
             * Upload the texture to the GPU.
             * @param {PIXI.Renderer} renderer Upload to the renderer
             * @param {PIXI.BaseTexture} baseTexture Reference to parent texture
             * @param {PIXI.GLTexture} glTexture
             * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
             * @returns {boolean} true is success
             */
            upload(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture, source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement): boolean;
            /**
             * Checks if source width/height was changed, resize can cause extra baseTexture update.
             * Triggers one update in any case.
             */
            update(): void;
            /**
             * Internal width of the resource
             * @member {number} PIXI.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} PIXI.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} PIXI.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} PIXI.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Set the style, optional to override
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} `true` is success
             */
            style(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Buffer resource with data of typed array.
         * @class
         * @extends PIXI.resources.Resource
         * @memberof PIXI.resources
         */
        class BufferResource extends PIXI.resources.Resource {
            constructor(source: Float32Array | Uint8Array | Uint32Array, options: {
                width: number;
                height: number;
            });
            /**
             * Source array
             * Cannot be ClampedUint8Array because it cant be uploaded to WebGL
             *
             * @member {Float32Array|Uint8Array|Uint32Array} PIXI.resources.BufferResource#data
             */
            data: Float32Array | Uint8Array | Uint32Array;
            /**
             * Upload the texture to the GPU.
             * @param {PIXI.Renderer} renderer Upload to the renderer
             * @param {PIXI.BaseTexture} baseTexture Reference to parent texture
             * @param {PIXI.GLTexture} glTexture glTexture
             * @returns {boolean} true is success
             */
            upload(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Used to auto-detect the type of resource.
             *
             * @static
             * @param {*} source - The source object
             * @return {boolean} `true` if <canvas>
             */
            static test(source: any): boolean;
            /**
             * Internal width of the resource
             * @member {number} PIXI.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} PIXI.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} PIXI.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} PIXI.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * Has been updated trigger event
             */
            update(): void;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Set the style, optional to override
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} `true` is success
             */
            style(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Resource type for HTMLCanvasElement.
         * @class
         * @extends PIXI.resources.BaseImageResource
         * @memberof PIXI.resources
         * @param {HTMLCanvasElement} source - Canvas element to use
         */
        class CanvasResource extends PIXI.resources.BaseImageResource {
            constructor(source: HTMLCanvasElement);
            /**
             * Used to auto-detect the type of resource.
             *
             * @static
             * @param {HTMLCanvasElement|OffscreenCanvas} source - The source object
             * @return {boolean} `true` if source is HTMLCanvasElement or OffscreenCanvas
             */
            static test(source: HTMLCanvasElement | OffscreenCanvas): boolean;
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} PIXI.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Upload the texture to the GPU.
             * @param {PIXI.Renderer} renderer Upload to the renderer
             * @param {PIXI.BaseTexture} baseTexture Reference to parent texture
             * @param {PIXI.GLTexture} glTexture
             * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
             * @returns {boolean} true is success
             */
            upload(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture, source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement): boolean;
            /**
             * Checks if source width/height was changed, resize can cause extra baseTexture update.
             * Triggers one update in any case.
             */
            update(): void;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Internal width of the resource
             * @member {number} PIXI.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} PIXI.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} PIXI.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} PIXI.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Set the style, optional to override
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} `true` is success
             */
            style(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Resource for a CubeTexture which contains six resources.
         *
         * @class
         * @extends PIXI.resources.ArrayResource
         * @memberof PIXI.resources
         * @param {Array<string|PIXI.resources.Resource>} [source] Collection of URLs or resources
         *        to use as the sides of the cube.
         * @param {object} [options] - ImageResource options
         * @param {number} [options.width] - Width of resource
         * @param {number} [options.height] - Height of resource
         */
        class CubeResource extends PIXI.resources.ArrayResource {
            constructor(source?: (string | PIXI.resources.Resource)[], options?: {
                width?: number;
                height?: number;
            });
            /**
             * Upload the resource
             *
             * @returns {boolean} true is success
             */
            upload(): boolean;
            /**
             * Number of texture sides to store for CubeResources
             *
             * @name PIXI.resources.CubeResource.SIDES
             * @static
             * @member {number}
             * @default 6
             */
            static SIDES: number;
            /**
             * Collection of resources.
             * @member {Array<PIXI.BaseTexture>} PIXI.resources.ArrayResource#items
             * @readonly
             */
            readonly items: PIXI.BaseTexture[];
            /**
             * Dirty IDs for each part
             * @member {Array<number>} PIXI.resources.ArrayResource#itemDirtyIds
             * @readonly
             */
            readonly itemDirtyIds: number[];
            /**
             * Number of elements in array
             *
             * @member {number} PIXI.resources.ArrayResource#length
             * @readonly
             */
            readonly length: number;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Set a resource by ID
             *
             * @param {PIXI.resources.Resource} resource
             * @param {number} index - Zero-based index of resource to set
             * @return {PIXI.resources.ArrayResource} Instance for chaining
             */
            addResourceAt(resource: PIXI.resources.Resource, index: number): PIXI.resources.ArrayResource;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: PIXI.BaseTexture): void;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * Internal width of the resource
             * @member {number} PIXI.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} PIXI.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} PIXI.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} PIXI.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * Has been updated trigger event
             */
            update(): void;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Set the style, optional to override
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} `true` is success
             */
            style(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Resource type for DepthTexture.
         * @class
         * @extends PIXI.resources.BufferResource
         * @memberof PIXI.resources
         */
        class DepthResource extends PIXI.resources.BufferResource {
            /**
             * Upload the texture to the GPU.
             * @param {PIXI.Renderer} renderer Upload to the renderer
             * @param {PIXI.BaseTexture} baseTexture Reference to parent texture
             * @param {PIXI.GLTexture} glTexture glTexture
             * @returns {boolean} true is success
             */
            upload(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Source array
             * Cannot be ClampedUint8Array because it cant be uploaded to WebGL
             *
             * @member {Float32Array|Uint8Array|Uint32Array} PIXI.resources.BufferResource#data
             */
            data: Float32Array | Uint8Array | Uint32Array;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Internal width of the resource
             * @member {number} PIXI.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} PIXI.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} PIXI.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} PIXI.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * Has been updated trigger event
             */
            update(): void;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Set the style, optional to override
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} `true` is success
             */
            style(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Resource type for ImageBitmap.
         * @class
         * @extends PIXI.resources.BaseImageResource
         * @memberof PIXI.resources
         * @param {ImageBitmap} source - Image element to use
         */
        class ImageBitmapResource extends PIXI.resources.BaseImageResource {
            constructor(source: ImageBitmap);
            /**
             * Used to auto-detect the type of resource.
             *
             * @static
             * @param {ImageBitmap} source - The source object
             * @return {boolean} `true` if source is an ImageBitmap
             */
            static test(source: ImageBitmap): boolean;
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} PIXI.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Upload the texture to the GPU.
             * @param {PIXI.Renderer} renderer Upload to the renderer
             * @param {PIXI.BaseTexture} baseTexture Reference to parent texture
             * @param {PIXI.GLTexture} glTexture
             * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
             * @returns {boolean} true is success
             */
            upload(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture, source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement): boolean;
            /**
             * Checks if source width/height was changed, resize can cause extra baseTexture update.
             * Triggers one update in any case.
             */
            update(): void;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Internal width of the resource
             * @member {number} PIXI.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} PIXI.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} PIXI.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} PIXI.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Set the style, optional to override
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} `true` is success
             */
            style(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Resource type for HTMLImageElement.
         * @class
         * @extends PIXI.resources.BaseImageResource
         * @memberof PIXI.resources
         */
        class ImageResource extends PIXI.resources.BaseImageResource {
            constructor(source: HTMLImageElement | string);
            /**
             * URL of the image source
             * @member {string} PIXI.resources.ImageResource#url
             */
            url: string;
            /**
             * If the image should be disposed after upload
             * @member {boolean} PIXI.resources.ImageResource#preserveBitmap
             * @default false
             */
            preserveBitmap: boolean;
            /**
             * If capable, convert the image using createImageBitmap API
             * @member {boolean} PIXI.resources.ImageResource#createBitmap
             * @default PIXI.settings.CREATE_IMAGE_BITMAP
             */
            createBitmap: boolean;
            /**
             * Controls texture alphaMode field
             * Copies from options
             * Default is `null`, copies option from baseTexture
             *
             * @member {PIXI.ALPHA_MODES|null} PIXI.resources.ImageResource#alphaMode
             * @readonly
             */
            readonly alphaMode: PIXI.ALPHA_MODES | null;
            /**
             * The ImageBitmap element created for HTMLImageElement
             * @member {ImageBitmap} PIXI.resources.ImageResource#bitmap
             * @default null
             */
            bitmap: ImageBitmap;
            /**
             * returns a promise when image will be loaded and processed
             *
             * @param {boolean} [createBitmap=true] whether process image into bitmap
             * @returns {Promise<void>}
             */
            load(createBitmap?: boolean): Promise<void>;
            /**
             * Called when we need to convert image into BitmapImage.
             * Can be called multiple times, real promise is cached inside.
             *
             * @returns {Promise<void>} cached promise to fill that bitmap
             */
            process(): Promise<void>;
            /**
             * Upload the image resource to GPU.
             *
             * @param {PIXI.Renderer} renderer - Renderer to upload to
             * @param {PIXI.BaseTexture} baseTexture - BaseTexture for this resource
             * @param {PIXI.GLTexture} glTexture - GLTexture to use
             * @returns {boolean} true is success
             */
            upload(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} PIXI.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Checks if source width/height was changed, resize can cause extra baseTexture update.
             * Triggers one update in any case.
             */
            update(): void;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Internal width of the resource
             * @member {number} PIXI.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} PIXI.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} PIXI.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} PIXI.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Set the style, optional to override
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} `true` is success
             */
            style(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Base resource class for textures that manages validation and uploading, depending on its type.
         *
         * Uploading of a base texture to the GPU is required.
         *
         * @class
         * @memberof PIXI.resources
         */
        class Resource {
            constructor(width?: number, height?: number);
            /**
             * Internal width of the resource
             * @member {number} PIXI.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} PIXI.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} PIXI.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} PIXI.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * Has been updated trigger event
             */
            update(): void;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Uploads the texture or returns false if it cant for some reason. Override this.
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} true is success
             */
            upload(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Set the style, optional to override
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} `true` is success
             */
            style(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Resource type for SVG elements and graphics.
         * @class
         * @extends PIXI.resources.BaseImageResource
         * @memberof PIXI.resources
         * @param {string} source - Base64 encoded SVG element or URL for SVG file.
         * @param {object} [options] - Options to use
         * @param {number} [options.scale=1] Scale to apply to SVG. Overridden by...
         * @param {number} [options.width] Rasterize SVG this wide. Aspect ratio preserved if height not specified.
         * @param {number} [options.height] Rasterize SVG this high. Aspect ratio preserved if width not specified.
         * @param {boolean} [options.autoLoad=true] Start loading right away.
         */
        class SVGResource extends PIXI.resources.BaseImageResource {
            constructor(source: string, options?: {
                scale?: number;
                width?: number;
                height?: number;
                autoLoad?: boolean;
            });
            /**
             * Base64 encoded SVG element or URL for SVG file
             * @readonly
             * @member {string} PIXI.resources.SVGResource#svg
             */
            readonly svg: string;
            /**
             * The source scale to apply when rasterizing on load
             * @readonly
             * @member {number} PIXI.resources.SVGResource#scale
             */
            readonly scale: number;
            /**
             * A width override for rasterization on load
             * @readonly
             * @member {number} PIXI.resources.SVGResource#_overrideWidth
             */
            readonly _overrideWidth: number;
            /**
             * A height override for rasterization on load
             * @readonly
             * @member {number} PIXI.resources.SVGResource#_overrideHeight
             */
            readonly _overrideHeight: number;
            /**
             * Get size from an svg string using regexp.
             *
             * @method
             * @param {string} svgString - a serialized svg element
             * @return {PIXI.ISize} image extension
             */
            static getSize(svgString: string): PIXI.ISize;
            /**
             * Used to auto-detect the type of resource.
             *
             * @static
             * @param {*} source - The source object
             * @param {string} extension - The extension of source, if set
             */
            static test(source: any, extension: string): void;
            /**
             * RegExp for SVG size.
             *
             * @static
             * @constant {RegExp|string} SVG_SIZE
             * @memberof PIXI.resources.SVGResource
             * @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
             */
            static readonly SVG_SIZE: RegExp | string;
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} PIXI.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Upload the texture to the GPU.
             * @param {PIXI.Renderer} renderer Upload to the renderer
             * @param {PIXI.BaseTexture} baseTexture Reference to parent texture
             * @param {PIXI.GLTexture} glTexture
             * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
             * @returns {boolean} true is success
             */
            upload(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture, source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement): boolean;
            /**
             * Checks if source width/height was changed, resize can cause extra baseTexture update.
             * Triggers one update in any case.
             */
            update(): void;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Internal width of the resource
             * @member {number} PIXI.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} PIXI.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} PIXI.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} PIXI.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * This can be overridden to start preloading a resource
             * or do any other prepare step.
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Set the style, optional to override
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} `true` is success
             */
            style(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Resource type for HTMLVideoElement.
         * @class
         * @extends PIXI.resources.BaseImageResource
         * @memberof PIXI.resources
         * @param {HTMLVideoElement|object|string|Array<string|object>} source - Video element to use.
         * @param {object} [options] - Options to use
         * @param {boolean} [options.autoLoad=true] - Start loading the video immediately
         * @param {boolean} [options.autoPlay=true] - Start playing video immediately
         * @param {number} [options.updateFPS=0] - How many times a second to update the texture from the video.
         * Leave at 0 to update at every render.
         * @param {boolean} [options.crossorigin=true] - Load image using cross origin
         */
        class VideoResource extends PIXI.resources.BaseImageResource {
            constructor(source: HTMLVideoElement | any | string | (string | any)[], options?: {
                autoLoad?: boolean;
                autoPlay?: boolean;
                updateFPS?: number;
                crossorigin?: boolean;
            });
            /**
             * When set to true will automatically play videos used by this texture once
             * they are loaded. If false, it will not modify the playing state.
             *
             * @member {boolean} PIXI.resources.VideoResource#autoPlay
             * @default true
             */
            autoPlay: boolean;
            /**
             * Trigger updating of the texture
             *
             * @param {number} [deltaTime=0] - time delta since last tick
             */
            update(deltaTime?: number): void;
            /**
             * Start preloading the video resource.
             *
             * @protected
             * @return {Promise<void>} Handle the validate event
             */
            protected load(): Promise<void>;
            /**
             * Should the base texture automatically update itself, set to true by default
             *
             * @member {boolean}
             */
            autoUpdate: boolean;
            /**
             * How many times a second to update the texture from the video. Leave at 0 to update at every render.
             * A lower fps can help performance, as updating the texture at 60fps on a 30ps video may not be efficient.
             *
             * @member {number}
             */
            updateFPS: number;
            /**
             * Used to auto-detect the type of resource.
             *
             * @static
             * @param {*} source - The source object
             * @param {string} extension - The extension of source, if set
             * @return {boolean} `true` if video source
             */
            static test(source: any, extension: string): boolean;
            /**
             * List of common video file extensions supported by VideoResource.
             * @constant
             * @member {Array<string>}
             * @static
             * @readonly
             */
            static readonly TYPES: string[];
            /**
             * The source element
             * @member {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} PIXI.resources.BaseImageResource#source
             * @readonly
             */
            readonly source: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement;
            /**
             * Upload the texture to the GPU.
             * @param {PIXI.Renderer} renderer Upload to the renderer
             * @param {PIXI.BaseTexture} baseTexture Reference to parent texture
             * @param {PIXI.GLTexture} glTexture
             * @param {HTMLImageElement|HTMLCanvasElement|HTMLVideoElement|SVGElement} [source] (optional)
             * @returns {boolean} true is success
             */
            upload(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture, source?: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | SVGElement): boolean;
            /**
             * Clean up anything, this happens when destroying is ready.
             *
             * @protected
             */
            protected dispose(): void;
            /**
             * Internal width of the resource
             * @member {number} PIXI.resources.Resource#_width
             * @protected
             */
            protected _width: number;
            /**
             * Internal height of the resource
             * @member {number} PIXI.resources.Resource#_height
             * @protected
             */
            protected _height: number;
            /**
             * If resource has been destroyed
             * @member {boolean} PIXI.resources.Resource#destroyed
             * @readonly
             * @default false
             */
            readonly destroyed: boolean;
            /**
             * `true` if resource is created by BaseTexture
             * useful for doing cleanup with BaseTexture destroy
             * and not cleaning up resources that were created
             * externally.
             * @member {boolean} PIXI.resources.Resource#internal
             * @protected
             */
            protected internal: boolean;
            /**
             * Bind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            bind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Unbind to a parent BaseTexture
             *
             * @param {PIXI.BaseTexture} baseTexture - Parent texture
             */
            unbind(baseTexture: PIXI.BaseTexture): void;
            /**
             * Trigger a resize event
             * @param {number} width X dimension
             * @param {number} height Y dimension
             */
            resize(width: number, height: number): void;
            /**
             * Has been validated
             * @readonly
             * @member {boolean}
             */
            readonly valid: boolean;
            /**
             * The width of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly width: number;
            /**
             * The height of the resource.
             *
             * @member {number}
             * @readonly
             */
            readonly height: number;
            /**
             * Set the style, optional to override
             *
             * @param {PIXI.Renderer} renderer - yeah, renderer!
             * @param {PIXI.BaseTexture} baseTexture - the texture
             * @param {PIXI.GLTexture} glTexture - texture instance for this webgl context
             * @returns {boolean} `true` is success
             */
            style(renderer: PIXI.Renderer, baseTexture: PIXI.BaseTexture, glTexture: PIXI.GLTexture): boolean;
            /**
             * Call when destroying resource, unbind any BaseTexture object
             * before calling this method, as reference counts are maintained
             * internally.
             */
            destroy(): void;
        }
        /**
         * Collection of installed resource types, class must extend {@link PIXI.resources.Resource}.
         * @example
         * class CustomResource extends PIXI.resources.Resource {
         *   // MUST have source, options constructor signature
         *   // for auto-detected resources to be created.
         *   constructor(source, options) {
         *     super();
         *   }
         *   upload(renderer, baseTexture, glTexture) {
         *     // upload with GL
         *     return true;
         *   }
         *   // used to auto-detect resource
         *   static test(source, extension) {
         *     return extension === 'xyz'|| source instanceof SomeClass;
         *   }
         * }
         * // Install the new resource type
         * PIXI.resources.INSTALLED.push(CustomResource);
         *
         * @name PIXI.resources.INSTALLED
         * @type {Array<*>}
         * @static
         * @readonly
         */
        var INSTALLED: any[];
        /**
         * Create a resource element from a single source element. This
         * auto-detects which type of resource to create. All resources that
         * are auto-detectable must have a static `test` method and a constructor
         * with the arguments `(source, options?)`. Currently, the supported
         * resources for auto-detection include:
         *  - {@link PIXI.resources.ImageResource}
         *  - {@link PIXI.resources.CanvasResource}
         *  - {@link PIXI.resources.VideoResource}
         *  - {@link PIXI.resources.SVGResource}
         *  - {@link PIXI.resources.BufferResource}
         * @static
         * @function PIXI.resources.autoDetectResource
         * @param {string|*} source - Resource source, this can be the URL to the resource,
         *        a typed-array (for BufferResource), HTMLVideoElement, SVG data-uri
         *        or any other resource that can be auto-detected. If not resource is
         *        detected, it's assumed to be an ImageResource.
         * @param {object} [options] - Pass-through options to use for Resource
         * @param {number} [options.width] - Width of BufferResource or SVG rasterization
         * @param {number} [options.height] - Height of BufferResource or SVG rasterization
         * @param {boolean} [options.autoLoad=true] - Image, SVG and Video flag to start loading
         * @param {number} [options.scale=1] - SVG source scale. Overridden by width, height
         * @param {boolean} [options.createBitmap=PIXI.settings.CREATE_IMAGE_BITMAP] - Image option to create Bitmap object
         * @param {boolean} [options.crossorigin=true] - Image and Video option to set crossOrigin
         * @param {boolean} [options.autoPlay=true] - Video option to start playing video immediately
         * @param {number} [options.updateFPS=0] - Video option to update how many times a second the
         *        texture should be updated from the video. Leave at 0 to update at every render
         * @return {PIXI.resources.Resource} The created resource.
         */
        function autoDetectResource(source: string | any, options?: {
            width?: number;
            height?: number;
            autoLoad?: boolean;
            scale?: number;
            createBitmap?: boolean;
            crossorigin?: boolean;
            autoPlay?: boolean;
            updateFPS?: number;
        }): PIXI.resources.Resource;
    }
    /**
     * Helper class to create a quad
     *
     * @class
     * @memberof PIXI
     */
    class Quad {
        constructor();
    }
    /**
     * Helper class to create a quad with uvs like in v4
     *
     * @class
     * @memberof PIXI
     * @extends PIXI.Geometry
     */
    class QuadUv extends PIXI.Geometry {
        constructor();
        /**
         * An array of vertices
         *
         * @member {Float32Array} PIXI.QuadUv#vertices
         */
        vertices: Float32Array;
        /**
         * The Uvs of the quad
         *
         * @member {Float32Array} PIXI.QuadUv#uvs
         */
        uvs: Float32Array;
        /**
         * Maps two Rectangle to the quad.
         *
         * @param {PIXI.Rectangle} targetTextureFrame - the first rectangle
         * @param {PIXI.Rectangle} destinationFrame - the second rectangle
         * @return {PIXI.Quad} Returns itself.
         */
        map(targetTextureFrame: PIXI.Rectangle, destinationFrame: PIXI.Rectangle): PIXI.Quad;
        /**
         * legacy upload method, just marks buffers dirty
         * @returns {PIXI.QuadUv} Returns itself.
         */
        invalidate(): PIXI.QuadUv;
        /**
         * A map of renderer IDs to webgl VAOs
         *
         * @protected
         * @type {object}
         */
        protected glVertexArrayObjects: any;
        /**
         * Number of instances in this geometry, pass it to `GeometrySystem.draw()`
         * @member {number} PIXI.Geometry#instanceCount
         * @default 1
         */
        instanceCount: number;
        /**
         * Count of existing (not destroyed) meshes that reference this geometry
         * @member {number} PIXI.Geometry#refCount
         */
        refCount: number;
        /**
         *
         * Adds an attribute to the geometry
         *
         * @param {String} id - the name of the attribute (matching up to a shader)
         * @param {PIXI.Buffer|number[]} [buffer] the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
         * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
         * @param {Boolean} [normalized=false] should the data be normalized.
         * @param {Number} [type=PIXI.TYPES.FLOAT] what type of number is the attribute. Check {PIXI.TYPES} to see the ones available
         * @param {Number} [stride=0] How far apart (in floats) the start of each value is. (used for interleaving data)
         * @param {Number} [start=0] How far into the array to start reading values (used for interleaving data)
         *
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        addAttribute(id: string, buffer?: PIXI.Buffer | number[], size?: number, normalized?: boolean, type?: number, stride?: number, start?: number): PIXI.Geometry;
        /**
         * returns the requested attribute
         *
         * @param {String} id  the name of the attribute required
         * @return {PIXI.Attribute} the attribute requested.
         */
        getAttribute(id: string): PIXI.Attribute;
        /**
         * returns the requested buffer
         *
         * @param {String} id  the name of the buffer required
         * @return {PIXI.Buffer} the buffer requested.
         */
        getBuffer(id: string): PIXI.Buffer;
        /**
         *
         * Adds an index buffer to the geometry
         * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
         *
         * @param {PIXI.Buffer|number[]} [buffer] the buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        addIndex(buffer?: PIXI.Buffer | number[]): PIXI.Geometry;
        /**
         * returns the index buffer
         *
         * @return {PIXI.Buffer} the index buffer.
         */
        getIndex(): PIXI.Buffer;
        /**
         * this function modifies the structure so that all current attributes become interleaved into a single buffer
         * This can be useful if your model remains static as it offers a little performance boost
         *
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        interleave(): PIXI.Geometry;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
        /**
         * Destroys the geometry.
         */
        destroy(): void;
        /**
         * returns a clone of the geometry
         *
         * @returns {PIXI.Geometry} a new clone of this geometry
         */
        clone(): PIXI.Geometry;
    }
    /**
     * 'Builder' pattern for bounds rectangles.
     *
     * This could be called an Axis-Aligned Bounding Box.
     * It is not an actual shape. It is a mutable thing; no 'EMPTY' or those kind of problems.
     *
     * @class
     * @memberof PIXI
     */
    class Bounds {
        constructor();
        /**
         * @member {number} PIXI.Bounds#minX
         * @default 0
         */
        minX: number;
        /**
         * @member {number} PIXI.Bounds#minY
         * @default 0
         */
        minY: number;
        /**
         * @member {number} PIXI.Bounds#maxX
         * @default 0
         */
        maxX: number;
        /**
         * @member {number} PIXI.Bounds#maxY
         * @default 0
         */
        maxY: number;
        /**
         * Checks if bounds are empty.
         *
         * @return {boolean} True if empty.
         */
        isEmpty(): boolean;
        /**
         * Clears the bounds and resets.
         *
         */
        clear(): void;
        /**
         * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
         * It is not guaranteed that it will return tempRect
         *
         * @param {PIXI.Rectangle} rect - temporary object will be used if AABB is not empty
         * @returns {PIXI.Rectangle} A rectangle of the bounds
         */
        getRectangle(rect: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * This function should be inlined when its possible.
         *
         * @param {PIXI.Point} point - The point to add.
         */
        addPoint(point: PIXI.Point): void;
        /**
         * Adds a quad, not transformed
         *
         * @param {Float32Array} vertices - The verts to add.
         */
        addQuad(vertices: Float32Array): void;
        /**
         * Adds sprite frame, transformed.
         *
         * @param {PIXI.Transform} transform - transform to apply
         * @param {number} x0 - left X of frame
         * @param {number} y0 - top Y of frame
         * @param {number} x1 - right X of frame
         * @param {number} y1 - bottom Y of frame
         */
        addFrame(transform: PIXI.Transform, x0: number, y0: number, x1: number, y1: number): void;
        /**
         * Adds sprite frame, multiplied by matrix
         *
         * @param {PIXI.Matrix} matrix - matrix to apply
         * @param {number} x0 - left X of frame
         * @param {number} y0 - top Y of frame
         * @param {number} x1 - right X of frame
         * @param {number} y1 - bottom Y of frame
         */
        addFrameMatrix(matrix: PIXI.Matrix, x0: number, y0: number, x1: number, y1: number): void;
        /**
         * Adds screen vertices from array
         *
         * @param {Float32Array} vertexData - calculated vertices
         * @param {number} beginOffset - begin offset
         * @param {number} endOffset - end offset, excluded
         */
        addVertexData(vertexData: Float32Array, beginOffset: number, endOffset: number): void;
        /**
         * Add an array of mesh vertices
         *
         * @param {PIXI.Transform} transform - mesh transform
         * @param {Float32Array} vertices - mesh coordinates in array
         * @param {number} beginOffset - begin offset
         * @param {number} endOffset - end offset, excluded
         */
        addVertices(transform: PIXI.Transform, vertices: Float32Array, beginOffset: number, endOffset: number): void;
        /**
         * Add an array of mesh vertices
         *
         * @param {PIXI.Matrix} matrix - mesh matrix
         * @param {Float32Array} vertices - mesh coordinates in array
         * @param {number} beginOffset - begin offset
         * @param {number} endOffset - end offset, excluded
         * @param {number} [padX] - x padding
         * @param {number} [padY] - y padding
         */
        addVerticesMatrix(matrix: PIXI.Matrix, vertices: Float32Array, beginOffset: number, endOffset: number, padX?: number, padY?: number): void;
        /**
         * Adds other Bounds
         *
         * @param {PIXI.Bounds} bounds - TODO
         */
        addBounds(bounds: PIXI.Bounds): void;
        /**
         * Adds other Bounds, masked with Bounds
         *
         * @param {PIXI.Bounds} bounds - TODO
         * @param {PIXI.Bounds} mask - TODO
         */
        addBoundsMask(bounds: PIXI.Bounds, mask: PIXI.Bounds): void;
        /**
         * Adds other Bounds, multiplied by matrix. Bounds shouldn't be empty
         *
         * @param {PIXI.Bounds} bounds other bounds
         * @param {PIXI.Matrix} matrix multiplicator
         */
        addBoundsMatrix(bounds: PIXI.Bounds, matrix: PIXI.Matrix): void;
        /**
         * Adds other Bounds, masked with Rectangle
         *
         * @param {PIXI.Bounds} bounds - TODO
         * @param {PIXI.Rectangle} area - TODO
         */
        addBoundsArea(bounds: PIXI.Bounds, area: PIXI.Rectangle): void;
        /**
         * Pads bounds object, making it grow in all directions.
         * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
         *
         * @param {number} [paddingX=0] - The horizontal padding amount.
         * @param {number} [paddingY=0] - The vertical padding amount.
         */
        pad(paddingX?: number, paddingY?: number): void;
        /**
         * Adds padded frame. (x0, y0) should be strictly less than (x1, y1)
         *
         * @param {number} x0 - left X of frame
         * @param {number} y0 - top Y of frame
         * @param {number} x1 - right X of frame
         * @param {number} y1 - bottom Y of frame
         * @param {number} padX - padding X
         * @param {number} padY - padding Y
         */
        addFramePad(x0: number, y0: number, x1: number, y1: number, padX: number, padY: number): void;
    }
    /**
     * A Container represents a collection of display objects.
     *
     * It is the base class of all display objects that act as a container for other objects (like Sprites).
     *
     *```js
     * let container = new PIXI.Container();
     * container.addChild(sprite);
     * ```
     *
     * @class
     * @extends PIXI.DisplayObject
     * @memberof PIXI
     */
    class Container extends PIXI.DisplayObject {
        constructor();
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Recalculates the bounds of the object. Override this to
         * calculate the bounds of the specific object (not including children).
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * To be overridden by the subclasses.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * Removes all internal references and listeners as well as removes children from the display list.
         * Do not use a Container after calling `destroy`.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *  method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the texture of the child sprite
         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the base texture of the child sprite
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * The base class for all objects that are rendered on the screen.
     *
     * This is an abstract class and should not be used on its own; rather it should be extended.
     *
     * @class
     * @extends PIXI.utils.EventEmitter
     * @memberof PIXI
     */
    class DisplayObject extends PIXI.utils.EventEmitter {
        constructor();
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * Mixes all enumerable properties and methods from a source object to DisplayObject.
         *
         * @param {object} source The source of properties and methods to mix in.
         */
        static mixin(source: any): void;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Updates the object transform for rendering.
         *
         * TODO - Optimization pass!
         */
        updateTransform(): void;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Renders the object using the WebGL renderer.
         *
         * @param {PIXI.Renderer} renderer - The renderer.
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * Base destroy method for generic display objects. This will automatically
         * remove the display object from its parent Container as well as remove
         * all current event listeners and internal references. Do not use a DisplayObject
         * after calling `destroy()`.
         *
         */
        destroy(): void;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * This namespace provides renderer-specific plugins for exporting content from a renderer.
     * For instance, these plugins can be used for saving an Image, Canvas element or for exporting the raw image data (pixels).
     *
     * Do not instantiate these plugins directly. It is available from the `renderer.plugins` property.
     * See {@link PIXI.CanvasRenderer#plugins} or {@link PIXI.Renderer#plugins}.
     * @example
     * // Create a new app (will auto-add extract plugin to renderer)
     * const app = new PIXI.Application();
     *
     * // Draw a red circle
     * const graphics = new PIXI.Graphics()
     *     .beginFill(0xFF0000)
     *     .drawCircle(0, 0, 50);
     *
     * // Render the graphics as an HTMLImageElement
     * const image = app.renderer.plugins.extract.image(graphics);
     * document.body.appendChild(image);
     * @namespace PIXI.extract
     */
    namespace extract {
        /**
         * The extract manager provides functionality to export content from the renderers.
         *
         * An instance of this class is automatically created by default, and can be found at `renderer.plugins.extract`
         *
         * @class
         * @memberof PIXI.extract
         */
        class Extract {
            constructor(renderer: PIXI.Renderer);
            /**
             * Will return a HTML Image of the target
             *
             * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
             *  to convert. If left empty will use the main renderer
             * @param {string} [format] - Image format, e.g. "image/jpeg" or "image/webp".
             * @param {number} [quality] - JPEG or Webp compression from 0 to 1. Default is 0.92.
             * @return {HTMLImageElement} HTML Image of the target
             */
            image(target: PIXI.DisplayObject | PIXI.RenderTexture, format?: string, quality?: number): HTMLImageElement;
            /**
             * Will return a a base64 encoded string of this target. It works by calling
             *  `Extract.getCanvas` and then running toDataURL on that.
             *
             * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
             *  to convert. If left empty will use the main renderer
             * @param {string} [format] - Image format, e.g. "image/jpeg" or "image/webp".
             * @param {number} [quality] - JPEG or Webp compression from 0 to 1. Default is 0.92.
             * @return {string} A base64 encoded string of the texture.
             */
            base64(target: PIXI.DisplayObject | PIXI.RenderTexture, format?: string, quality?: number): string;
            /**
             * Creates a Canvas element, renders this target to it and then returns it.
             *
             * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
             *  to convert. If left empty will use the main renderer
             * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.
             */
            canvas(target: PIXI.DisplayObject | PIXI.RenderTexture): HTMLCanvasElement;
            /**
             * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
             * order, with integer values between 0 and 255 (included).
             *
             * @param {PIXI.DisplayObject|PIXI.RenderTexture} target - A displayObject or renderTexture
             *  to convert. If left empty will use the main renderer
             * @return {Uint8Array} One-dimensional array containing the pixel data of the entire texture
             */
            pixels(target: PIXI.DisplayObject | PIXI.RenderTexture): Uint8Array;
            /**
             * Destroys the extract
             *
             */
            destroy(): void;
        }
    }
    /**
     * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
     * rectangles to the display, and to color and fill them.
     *
     * Note that because Graphics can share a GraphicsGeometry with other instances,
     * it is necessary to call `destroy()` to properly dereference the underlying
     * GraphicsGeometry and avoid a memory leak. Alternatively, keep using the same
     * Graphics instance and call `clear()` between redraws.
     *
     * @class
     * @extends PIXI.Container
     * @memberof PIXI
     */
    class Graphics extends PIXI.Container {
        constructor(geometry?: PIXI.GraphicsGeometry);
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh or Graphics objects.
         * @member {PIXI.GraphicsGeometry} PIXI.Graphics#geometry
         * @readonly
         */
        readonly geometry: PIXI.GraphicsGeometry;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Graphics objects.
         * @member {PIXI.Shader} PIXI.Graphics#shader
         */
        shader: PIXI.Shader;
        /**
         * Represents the WebGL state the Graphics required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {PIXI.State} PIXI.Graphics#state
         */
        state: PIXI.State;
        /**
         * Current fill style
         *
         * @member {PIXI.FillStyle} PIXI.Graphics#_fillStyle
         * @protected
         */
        protected _fillStyle: PIXI.FillStyle;
        /**
         * Current line style
         *
         * @member {PIXI.LineStyle} PIXI.Graphics#_lineStyle
         * @protected
         */
        protected _lineStyle: PIXI.LineStyle;
        /**
         * Current shape transform matrix.
         *
         * @member {PIXI.Matrix} PIXI.Graphics#_matrix
         * @protected
         */
        protected _matrix: PIXI.Matrix;
        /**
         * Current hole mode is enabled.
         *
         * @member {boolean} PIXI.Graphics#_holeMode
         * @default false
         * @protected
         */
        protected _holeMode: boolean;
        /**
         * Current path
         *
         * @member {PIXI.Polygon} PIXI.Graphics#currentPath
         * @protected
         */
        protected currentPath: PIXI.Polygon;
        /**
         * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
         * This is useful if your graphics element does not change often, as it will speed up the rendering
         * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
         * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
         * you are constantly redrawing the graphics element.
         *
         * @name cacheAsBitmap
         * @member {boolean}
         * @memberof PIXI.Graphics#
         * @default false
         */
        cacheAsBitmap: boolean;
        /**
         * A collections of batches! These can be drawn by the renderer batch system.
         *
         * @protected
         * @member {object[]} PIXI.Graphics#batches
         */
        protected batches: any[];
        /**
         * Update dirty for limiting calculating tints for batches.
         *
         * @protected
         * @member {number} PIXI.Graphics#batchTint
         * @default -1
         */
        protected batchTint: number;
        /**
         * Copy of the object vertex data.
         *
         * @protected
         * @member {Float32Array} PIXI.Graphics#vertexData
         */
        protected vertexData: Float32Array;
        /**
         * Renderer plugin for batching
         *
         * @member {string} PIXI.Graphics#pluginName
         * @default 'batch'
         */
        pluginName: string;
        /**
         * Creates a new Graphics object with the same values as this one.
         * Note that the only the properties of the object are cloned, not its transform (position,scale,etc)
         *
         * @return {PIXI.Graphics} A clone of the graphics object
         */
        clone(): PIXI.Graphics;
        /**
         * The blend mode to be applied to the graphic shape. Apply a value of
         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL;
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * The tint applied to the graphic shape. This is a hex value. A value of
         * 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The current fill style.
         *
         * @member {PIXI.FillStyle}
         * @readonly
         */
        readonly fill: PIXI.FillStyle;
        /**
         * The current line style.
         *
         * @member {PIXI.LineStyle}
         * @readonly
         */
        readonly line: PIXI.LineStyle;
        /**
         * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
         * method or the drawCircle() method.
         *
         * @method PIXI.Graphics#lineStyle
         * @param {number} [width=0] - width of the line to draw, will update the objects stored style
         * @param {number} [color=0x0] - color of the line to draw, will update the objects stored style
         * @param {number} [alpha=1] - alpha of the line to draw, will update the objects stored style
         * @param {number} [alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
         * @param {boolean} [native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        lineStyle(width?: number, color?: number, alpha?: number, alignment?: number, native?: boolean): PIXI.Graphics;
        /**
         * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
         * method or the drawCircle() method.
         *
         * @method PIXI.Graphics#lineStyle
         * @param {number} [width=0] - width of the line to draw, will update the objects stored style
         * @param {number} [color=0x0] - color of the line to draw, will update the objects stored style
         * @param {number} [alpha=1] - alpha of the line to draw, will update the objects stored style
         * @param {number} [alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
         * @param {boolean} [native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        lineStyle(width?: number, color?: number, alpha?: number, alignment?: number, native?: boolean): PIXI.Graphics;
        /**
         * Like line style but support texture for line fill.
         *
         * @param {object} [options] - Collection of options for setting line style.
         * @param {number} [options.width=0] - width of the line to draw, will update the objects stored style
         * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to use
         * @param {number} [options.color=0x0] - color of the line to draw, will update the objects stored style.
         *  Default 0xFFFFFF if texture present.
         * @param {number} [options.alpha=1] - alpha of the line to draw, will update the objects stored style
         * @param {PIXI.Matrix} [options.matrix=null] Texture matrix to transform texture
         * @param {number} [options.alignment=0.5] - alignment of the line to draw, (0 = inner, 0.5 = middle, 1 = outter)
         * @param {boolean} [options.native=false] - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        lineTextureStyle(options?: {
            width?: number;
            texture?: PIXI.Texture;
            color?: number;
            alpha?: number;
            matrix?: PIXI.Matrix;
            alignment?: number;
            native?: boolean;
        }): PIXI.Graphics;
        /**
         * Start a polygon object internally
         * @protected
         */
        protected startPoly(): void;
        /**
         * Finish the polygon object.
         * @protected
         */
        protected finishPoly(): void;
        /**
         * Moves the current drawing position to x, y.
         *
         * @param {number} x - the X coordinate to move to
         * @param {number} y - the Y coordinate to move to
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        moveTo(x: number, y: number): PIXI.Graphics;
        /**
         * Draws a line using the current line style from the current drawing position to (x, y);
         * The current drawing position is then set to (x, y).
         *
         * @param {number} x - the X coordinate to draw to
         * @param {number} y - the Y coordinate to draw to
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        lineTo(x: number, y: number): PIXI.Graphics;
        /**
         * Initialize the curve
         *
         * @protected
         * @param {number} [x=0]
         * @param {number} [y=0]
         */
        protected _initCurve(x?: number, y?: number): void;
        /**
         * Calculate the points for a quadratic bezier curve and then draws it.
         * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
         *
         * @param {number} cpX - Control point x
         * @param {number} cpY - Control point y
         * @param {number} toX - Destination point x
         * @param {number} toY - Destination point y
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        quadraticCurveTo(cpX: number, cpY: number, toX: number, toY: number): PIXI.Graphics;
        /**
         * Calculate the points for a bezier curve and then draws it.
         *
         * @param {number} cpX - Control point x
         * @param {number} cpY - Control point y
         * @param {number} cpX2 - Second Control point x
         * @param {number} cpY2 - Second Control point y
         * @param {number} toX - Destination point x
         * @param {number} toY - Destination point y
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        bezierCurveTo(cpX: number, cpY: number, cpX2: number, cpY2: number, toX: number, toY: number): PIXI.Graphics;
        /**
         * The arcTo() method creates an arc/curve between two tangents on the canvas.
         *
         * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
         *
         * @param {number} x1 - The x-coordinate of the first tangent point of the arc
         * @param {number} y1 - The y-coordinate of the first tangent point of the arc
         * @param {number} x2 - The x-coordinate of the end of the arc
         * @param {number} y2 - The y-coordinate of the end of the arc
         * @param {number} radius - The radius of the arc
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): PIXI.Graphics;
        /**
         * The arc method creates an arc/curve (used to create circles, or parts of circles).
         *
         * @param {number} cx - The x-coordinate of the center of the circle
         * @param {number} cy - The y-coordinate of the center of the circle
         * @param {number} radius - The radius of the circle
         * @param {number} startAngle - The starting angle, in radians (0 is at the 3 o'clock position
         *  of the arc's circle)
         * @param {number} endAngle - The ending angle, in radians
         * @param {boolean} [anticlockwise=false] - Specifies whether the drawing should be
         *  counter-clockwise or clockwise. False is default, and indicates clockwise, while true
         *  indicates counter-clockwise.
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        arc(cx: number, cy: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): PIXI.Graphics;
        /**
         * Specifies a simple one-color fill that subsequent calls to other Graphics methods
         * (such as lineTo() or drawCircle()) use when drawing.
         *
         * @param {number} [color=0] - the color of the fill
         * @param {number} [alpha=1] - the alpha of the fill
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        beginFill(color?: number, alpha?: number): PIXI.Graphics;
        /**
         * Begin the texture fill
         *
         * @param {object} [options] - Object object.
         * @param {PIXI.Texture} [options.texture=PIXI.Texture.WHITE] - Texture to fill
         * @param {number} [options.color=0xffffff] - Background to fill behind texture
         * @param {number} [options.alpha=1] - Alpha of fill
         * @param {PIXI.Matrix} [options.matrix=null] - Transform matrix
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        beginTextureFill(options?: {
            texture?: PIXI.Texture;
            color?: number;
            alpha?: number;
            matrix?: PIXI.Matrix;
        }): PIXI.Graphics;
        /**
         * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
         *
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        endFill(): PIXI.Graphics;
        /**
         * Draws a rectangle shape.
         *
         * @param {number} x - The X coord of the top-left of the rectangle
         * @param {number} y - The Y coord of the top-left of the rectangle
         * @param {number} width - The width of the rectangle
         * @param {number} height - The height of the rectangle
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        drawRect(x: number, y: number, width: number, height: number): PIXI.Graphics;
        /**
         * Draw a rectangle shape with rounded/beveled corners.
         *
         * @param {number} x - The X coord of the top-left of the rectangle
         * @param {number} y - The Y coord of the top-left of the rectangle
         * @param {number} width - The width of the rectangle
         * @param {number} height - The height of the rectangle
         * @param {number} radius - Radius of the rectangle corners
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        drawRoundedRect(x: number, y: number, width: number, height: number, radius: number): PIXI.Graphics;
        /**
         * Draws a circle.
         *
         * @param {number} x - The X coordinate of the center of the circle
         * @param {number} y - The Y coordinate of the center of the circle
         * @param {number} radius - The radius of the circle
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        drawCircle(x: number, y: number, radius: number): PIXI.Graphics;
        /**
         * Draws an ellipse.
         *
         * @param {number} x - The X coordinate of the center of the ellipse
         * @param {number} y - The Y coordinate of the center of the ellipse
         * @param {number} width - The half width of the ellipse
         * @param {number} height - The half height of the ellipse
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        drawEllipse(x: number, y: number, width: number, height: number): PIXI.Graphics;
        /**
         * Draws a polygon using the given path.
         *
         * @param {number[]|PIXI.Point[]|PIXI.Polygon} path - The path data used to construct the polygon.
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        drawPolygon(path: number[] | PIXI.Point[] | PIXI.Polygon): PIXI.Graphics;
        /**
         * Draw any shape.
         *
         * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - Shape to draw
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        drawShape(shape: PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.Rectangle | PIXI.RoundedRectangle): PIXI.Graphics;
        /**
         * Draw a star shape with an arbitrary number of points.
         *
         * @param {number} x - Center X position of the star
         * @param {number} y - Center Y position of the star
         * @param {number} points - The number of points of the star, must be > 1
         * @param {number} radius - The outer radius of the star
         * @param {number} [innerRadius] - The inner radius between points, default half `radius`
         * @param {number} [rotation=0] - The rotation of the star in radians, where 0 is vertical
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        drawStar(x: number, y: number, points: number, radius: number, innerRadius?: number, rotation?: number): PIXI.Graphics;
        /**
         * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
         *
         * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
         */
        clear(): PIXI.Graphics;
        /**
         * True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
         * masked with gl.scissor.
         *
         * @returns {boolean} True if only 1 rect.
         */
        isFastRect(): boolean;
        /**
         * Renders the object using the WebGL renderer
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * Populating batches for rendering
         *
         * @protected
         */
        protected _populateBatches(): void;
        /**
         * Renders the batches using the BathedRenderer plugin
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected _renderBatched(renderer: PIXI.Renderer): void;
        /**
         * Renders the graphics direct
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected _renderDirect(renderer: PIXI.Renderer): void;
        /**
         * Renders specific DrawCall
         *
         * @param {PIXI.Renderer} renderer
         * @param {PIXI.BatchDrawCall} drawCall
         */
        _renderDrawCallDirect(renderer: PIXI.Renderer, drawCall: PIXI.BatchDrawCall): void;
        /**
         * Resolves shader for direct rendering
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected _resolveDirectShader(renderer: PIXI.Renderer): void;
        /**
         * Retrieves the bounds of the graphic shape as a rectangle object
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this graphics object
         *
         * @param {PIXI.Point} point - the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: PIXI.Point): boolean;
        /**
         * Recalcuate the tint by applying tin to batches using Graphics tint.
         * @protected
         */
        protected calculateTints(): void;
        /**
         * If there's a transform update or a change to the shape of the
         * geometry, recaculate the vertices.
         * @protected
         */
        protected calculateVertices(): void;
        /**
         * Closes the current path.
         *
         * @return {PIXI.Graphics} Returns itself.
         */
        closePath(): PIXI.Graphics;
        /**
         * Apply a matrix to the positional data.
         *
         * @param {PIXI.Matrix} matrix - Matrix to use for transform current shape.
         * @return {PIXI.Graphics} Returns itself.
         */
        setMatrix(matrix: PIXI.Matrix): PIXI.Graphics;
        /**
         * Begin adding holes to the last draw shape
         * IMPORTANT: holes must be fully inside a shape to work
         * Also weirdness ensues if holes overlap!
         * Ellipses, Circles, Rectangles and Rounded Rectangles cannot be holes or host for holes in CanvasRenderer,
         * please use `moveTo` `lineTo`, `quadraticCurveTo` if you rely on pixi-legacy bundle.
         * @return {PIXI.Graphics} Returns itself.
         */
        beginHole(): PIXI.Graphics;
        /**
         * End adding holes to the last draw shape
         * @return {PIXI.Graphics} Returns itself.
         */
        endHole(): PIXI.Graphics;
        /**
         * Destroys the Graphics object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the texture of the child sprite
         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the base texture of the child sprite
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * A class to contain data useful for Graphics objects
     *
     * @class
     * @memberof PIXI
     */
    class GraphicsData {
        constructor(shape: PIXI.Circle | PIXI.Rectangle | PIXI.Ellipse | PIXI.Polygon, fillStyle?: PIXI.FillStyle, lineStyle?: PIXI.LineStyle, matrix?: PIXI.Matrix);
        /**
         * The shape object to draw.
         * @member {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} PIXI.GraphicsData#shape
         */
        shape: PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.Rectangle | PIXI.RoundedRectangle;
        /**
         * The style of the line.
         * @member {PIXI.LineStyle} PIXI.GraphicsData#lineStyle
         */
        lineStyle: PIXI.LineStyle;
        /**
         * The style of the fill.
         * @member {PIXI.FillStyle} PIXI.GraphicsData#fillStyle
         */
        fillStyle: PIXI.FillStyle;
        /**
         * The transform matrix.
         * @member {PIXI.Matrix} PIXI.GraphicsData#matrix
         */
        matrix: PIXI.Matrix;
        /**
         * The type of the shape, see the Const.Shapes file for all the existing types,
         * @member {number} PIXI.GraphicsData#type
         */
        type: number;
        /**
         * The collection of points.
         * @member {number[]} PIXI.GraphicsData#points
         */
        points: number[];
        /**
         * The collection of holes.
         * @member {PIXI.GraphicsData[]} PIXI.GraphicsData#holes
         */
        holes: PIXI.GraphicsData[];
        /**
         * Creates a new GraphicsData object with the same values as this one.
         *
         * @return {PIXI.GraphicsData} Cloned GraphicsData object
         */
        clone(): PIXI.GraphicsData;
        /**
         * Destroys the Graphics data.
         */
        destroy(): void;
    }
    /**
     * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
     * rectangles to the display, and to color and fill them.
     *
     * GraphicsGeometry is designed to not be continually updating the geometry since it's expensive
     * to re-tesselate using **earcut**. Consider using {@link PIXI.Mesh} for this use-case, it's much faster.
     *
     * @class
     * @extends PIXI.BatchGeometry
     * @memberof PIXI
     */
    class GraphicsGeometry extends PIXI.BatchGeometry {
        constructor();
        /**
         * An array of points to draw, 2 numbers per point
         *
         * @member {number[]} PIXI.GraphicsGeometry#points
         * @protected
         */
        protected points: number[];
        /**
         * The collection of colors
         *
         * @member {number[]} PIXI.GraphicsGeometry#colors
         * @protected
         */
        protected colors: number[];
        /**
         * The UVs collection
         *
         * @member {number[]} PIXI.GraphicsGeometry#uvs
         * @protected
         */
        protected uvs: number[];
        /**
         * The indices of the vertices
         *
         * @member {number[]} PIXI.GraphicsGeometry#indices
         * @protected
         */
        protected indices: number[];
        /**
         * Reference to the texture IDs.
         *
         * @member {number[]} PIXI.GraphicsGeometry#textureIds
         * @protected
         */
        protected textureIds: number[];
        /**
         * The collection of drawn shapes.
         *
         * @member {PIXI.GraphicsData[]} PIXI.GraphicsGeometry#graphicsData
         * @protected
         */
        protected graphicsData: PIXI.GraphicsData[];
        /**
         * Used to detect if the graphics object has changed.
         *
         * @member {number} PIXI.GraphicsGeometry#dirty
         * @protected
         */
        protected dirty: number;
        /**
         * Batches need to regenerated if the geometry is updated.
         *
         * @member {number} PIXI.GraphicsGeometry#batchDirty
         * @protected
         */
        protected batchDirty: number;
        /**
         * Used to check if the cache is dirty.
         *
         * @member {number} PIXI.GraphicsGeometry#cacheDirty
         * @protected
         */
        protected cacheDirty: number;
        /**
         * Used to detect if we cleared the graphicsData.
         *
         * @member {number} PIXI.GraphicsGeometry#clearDirty
         * @default 0
         * @protected
         */
        protected clearDirty: number;
        /**
         * List of current draw calls drived from the batches.
         *
         * @member {object[]} PIXI.GraphicsGeometry#drawCalls
         * @protected
         */
        protected drawCalls: any[];
        /**
         * Intermediate abstract format sent to batch system.
         * Can be converted to drawCalls or to batchable objects.
         *
         * @member {BatchPart[]} PIXI.GraphicsGeometry#batches
         * @protected
         */
        protected batches: BatchPart[];
        /**
         * Index of the last batched shape in the stack of calls.
         *
         * @member {number} PIXI.GraphicsGeometry#shapeIndex
         * @protected
         */
        protected shapeIndex: number;
        /**
         * Cached bounds.
         *
         * @member {PIXI.Bounds} PIXI.GraphicsGeometry#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The bounds dirty flag.
         *
         * @member {number} PIXI.GraphicsGeometry#boundsDirty
         * @protected
         */
        protected boundsDirty: number;
        /**
         * Padding to add to the bounds.
         *
         * @member {number} PIXI.GraphicsGeometry#boundsPadding
         * @default 0
         */
        boundsPadding: number;
        /**
         * Minimal distance between points that are considered different.
         * Affects line tesselation.
         *
         * @member {number} PIXI.GraphicsGeometry#closePointEps
         */
        closePointEps: number;
        /**
         * Get the current bounds of the graphic geometry.
         *
         * @member {PIXI.Bounds}
         * @readonly
         */
        readonly bounds: PIXI.Bounds;
        /**
         * Call if you changed graphicsData manually.
         * Empties all batch buffers.
         */
        invalidate(): void;
        /**
         * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
         *
         * @return {PIXI.GraphicsGeometry} This GraphicsGeometry object. Good for chaining method calls
         */
        clear(): PIXI.GraphicsGeometry;
        /**
         * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
         *
         * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
         * @param {PIXI.FillStyle} fillStyle - Defines style of the fill.
         * @param {PIXI.LineStyle} lineStyle - Defines style of the lines.
         * @param {PIXI.Matrix} matrix - Transform applied to the points of the shape.
         * @return {PIXI.GraphicsGeometry} Returns geometry for chaining.
         */
        drawShape(shape: PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.Rectangle | PIXI.RoundedRectangle, fillStyle: PIXI.FillStyle, lineStyle: PIXI.LineStyle, matrix: PIXI.Matrix): PIXI.GraphicsGeometry;
        /**
         * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
         *
         * @param {PIXI.Circle|PIXI.Ellipse|PIXI.Polygon|PIXI.Rectangle|PIXI.RoundedRectangle} shape - The shape object to draw.
         * @param {PIXI.Matrix} matrix - Transform applied to the points of the shape.
         * @return {PIXI.GraphicsGeometry} Returns geometry for chaining.
         */
        drawHole(shape: PIXI.Circle | PIXI.Ellipse | PIXI.Polygon | PIXI.Rectangle | PIXI.RoundedRectangle, matrix: PIXI.Matrix): PIXI.GraphicsGeometry;
        /**
         * Destroys the Graphics object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the texture of the child sprite
         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the base texture of the child sprite
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * Check to see if a point is contained within this geometry.
         *
         * @param {PIXI.Point} point - Point to check if it's contained.
         * @return {Boolean} `true` if the point is contained within geometry.
         */
        containsPoint(point: PIXI.Point): boolean;
        /**
         * Generates intermediate batch data. Either gets converted to drawCalls
         * or used to convert to batch objects directly by the Graphics object.
         */
        updateBatches(): void;
        /**
         * Affinity check
         *
         * @param {PIXI.FillStyle | PIXI.LineStyle} styleA
         * @param {PIXI.FillStyle | PIXI.LineStyle} styleB
         */
        _compareStyles(styleA: PIXI.FillStyle | PIXI.LineStyle, styleB: PIXI.FillStyle | PIXI.LineStyle): void;
        /**
         * Test geometry for batching process.
         *
         * @protected
         */
        protected validateBatching(): void;
        /**
         * Offset the indices so that it works with the batcher.
         *
         * @protected
         */
        protected packBatches(): void;
        /**
         * Checks to see if this graphics geometry can be batched.
         * Currently it needs to be small enough and not contain any native lines.
         *
         * @protected
         */
        protected isBatchable(): void;
        /**
         * Converts intermediate batches data to drawCalls.
         *
         * @protected
         */
        protected buildDrawCalls(): void;
        /**
         * Packs attributes to single buffer.
         *
         * @protected
         */
        protected packAttributes(): void;
        /**
         * Process fill part of Graphics.
         *
         * @param {PIXI.GraphicsData} data
         * @protected
         */
        protected processFill(data: PIXI.GraphicsData): void;
        /**
         * Process line part of Graphics.
         *
         * @param {PIXI.GraphicsData} data
         * @protected
         */
        protected processLine(data: PIXI.GraphicsData): void;
        /**
         * Process the holes data.
         *
         * @param {PIXI.GraphicsData[]} holes - Holes to render
         * @protected
         */
        protected processHoles(holes: PIXI.GraphicsData[]): void;
        /**
         * Update the local bounds of the object. Expensive to use performance-wise.
         *
         * @protected
         */
        protected calculateBounds(): void;
        /**
         * Transform points using matrix.
         *
         * @protected
         * @param {number[]} points - Points to transform
         * @param {PIXI.Matrix} matrix - Transform matrix
         */
        protected transformPoints(points: number[], matrix: PIXI.Matrix): void;
        /**
         * Add colors.
         *
         * @protected
         * @param {number[]} colors - List of colors to add to
         * @param {number} color - Color to add
         * @param {number} alpha - Alpha to use
         * @param {number} size - Number of colors to add
         */
        protected addColors(colors: number[], color: number, alpha: number, size: number): void;
        /**
         * Add texture id that the shader/fragment wants to use.
         *
         * @protected
         * @param {number[]} textureIds
         * @param {number} id
         * @param {number} size
         */
        protected addTextureIds(textureIds: number[], id: number, size: number): void;
        /**
         * Generates the UVs for a shape.
         *
         * @protected
         * @param {number[]} verts - Vertices
         * @param {number[]} uvs - UVs
         * @param {PIXI.Texture} texture - Reference to Texture
         * @param {number} start - Index buffer start index.
         * @param {number} size - The size/length for index buffer.
         * @param {PIXI.Matrix} [matrix] - Optional transform for all points.
         */
        protected addUvs(verts: number[], uvs: number[], texture: PIXI.Texture, start: number, size: number, matrix?: PIXI.Matrix): void;
        /**
         * Modify uvs array according to position of texture region
         * Does not work with rotated or trimmed textures
         *
         * @param {number[]} uvs array
         * @param {PIXI.Texture} texture region
         * @param {number} start starting index for uvs
         * @param {number} size how many points to adjust
         */
        adjustUvs(uvs: number[], texture: PIXI.Texture, start: number, size: number): void;
        /**
         * The maximum number of points to consider an object "batchable",
         * able to be batched by the renderer's batch system.
         *
         * @memberof PIXI.GraphicsGeometry
         * @static
         * @member {number} BATCHABLE_SIZE
         * @default 100
         */
        static BATCHABLE_SIZE: number;
        /**
         * Buffer used for position, color, texture IDs
         *
         * @member {PIXI.Buffer} PIXI.BatchGeometry#_buffer
         * @protected
         */
        protected _buffer: PIXI.Buffer;
        /**
         * Index buffer data
         *
         * @member {PIXI.Buffer} PIXI.BatchGeometry#_indexBuffer
         * @protected
         */
        protected _indexBuffer: PIXI.Buffer;
    }
    /**
     * Graphics curves resolution settings. If `adaptive` flag is set to `true`,
     * the resolution is calculated based on the curve's length to ensure better visual quality.
     * Adaptive draw works with `bezierCurveTo` and `quadraticCurveTo`.
     *
     * @static
     * @constant
     * @memberof PIXI
     * @name GRAPHICS_CURVES
     * @type {object}
     * @property {boolean} adaptive=false - flag indicating if the resolution should be adaptive
     * @property {number} maxLength=10 - maximal length of a single segment of the curve (if adaptive = false, ignored)
     * @property {number} minSegments=8 - minimal number of segments in the curve (if adaptive = false, ignored)
     * @property {number} maxSegments=2048 - maximal number of segments in the curve (if adaptive = false, ignored)
     */
    var GRAPHICS_CURVES: {
        adaptive: boolean;
        maxLength: number;
        minSegments: number;
        maxSegments: number;
    };
    /**
     * Fill style object for Graphics.
     *
     * @class
     * @memberof PIXI
     */
    class FillStyle {
        constructor();
        /**
         * Clones the object
         *
         * @return {PIXI.FillStyle}
         */
        clone(): PIXI.FillStyle;
        /**
         * Reset
         */
        reset(): void;
        /**
         * The hex color value used when coloring the Graphics object.
         *
         * @member {number} PIXI.FillStyle#color
         * @default 1
         */
        color: number;
        /**
         * The alpha value used when filling the Graphics object.
         *
         * @member {number} PIXI.FillStyle#alpha
         * @default 1
         */
        alpha: number;
        /**
         * The texture to be used for the fill.
         *
         * @member {string} PIXI.FillStyle#texture
         * @default 0
         */
        texture: string;
        /**
         * The transform aplpied to the texture.
         *
         * @member {string} PIXI.FillStyle#matrix
         * @default 0
         */
        matrix: string;
        /**
         * If the current fill is visible.
         *
         * @member {boolean} PIXI.FillStyle#visible
         * @default false
         */
        visible: boolean;
        /**
         * Destroy and don't use after this
         */
        destroy(): void;
    }
    /**
     * Represents the line style for Graphics.
     * @memberof PIXI
     * @class
     * @extends PIXI.FillStyle
     */
    class LineStyle extends PIXI.FillStyle {
        /**
         * Clones the object
         *
         * @return {PIXI.LineStyle}
         */
        clone(): PIXI.LineStyle;
        /**
         * Reset the line style to default.
         */
        reset(): void;
        /**
         * The width (thickness) of any lines drawn.
         *
         * @member {number} PIXI.LineStyle#width
         * @default 0
         */
        width: number;
        /**
         * The alignment of any lines drawn (0.5 = middle, 1 = outter, 0 = inner).
         *
         * @member {number} PIXI.LineStyle#alignment
         * @default 0
         */
        alignment: number;
        /**
         * If true the lines will be draw using LINES instead of TRIANGLE_STRIP
         *
         * @member {boolean} PIXI.LineStyle#native
         * @default false
         */
        native: boolean;
        /**
         * The hex color value used when coloring the Graphics object.
         *
         * @member {number} PIXI.FillStyle#color
         * @default 1
         */
        color: number;
        /**
         * The alpha value used when filling the Graphics object.
         *
         * @member {number} PIXI.FillStyle#alpha
         * @default 1
         */
        alpha: number;
        /**
         * The texture to be used for the fill.
         *
         * @member {string} PIXI.FillStyle#texture
         * @default 0
         */
        texture: string;
        /**
         * The transform aplpied to the texture.
         *
         * @member {string} PIXI.FillStyle#matrix
         * @default 0
         */
        matrix: string;
        /**
         * If the current fill is visible.
         *
         * @member {boolean} PIXI.FillStyle#visible
         * @default false
         */
        visible: boolean;
        /**
         * Destroy and don't use after this
         */
        destroy(): void;
    }
    /**
     * Draw a star shape with an arbitrary number of points.
     *
     * @class
     * @extends PIXI.Polygon
     * @memberof PIXI
     * @param {number} x - Center X position of the star
     * @param {number} y - Center Y position of the star
     * @param {number} points - The number of points of the star, must be > 1
     * @param {number} radius - The outer radius of the star
     * @param {number} [innerRadius] - The inner radius between points, default half `radius`
     * @param {number} [rotation=0] - The rotation of the star in radians, where 0 is vertical
     * @return {PIXI.Graphics} This Graphics object. Good for chaining method calls
     */
    class Star extends PIXI.Polygon {
        constructor(x: number, y: number, points: number, radius: number, innerRadius?: number, rotation?: number);
        /**
         * An array of the points of this polygon
         *
         * @member {number[]} PIXI.Polygon#points
         */
        points: number[];
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} PIXI.Polygon#type
         * @readOnly
         * @default PIXI.SHAPES.POLY
         * @see PIXI.SHAPES
         */
        readonly type: number;
        /**
         * `false` after moveTo, `true` after `closePath`. In all other cases it is `true`.
         * @member {boolean} PIXI.Polygon#closeStroke
         * @default true
         */
        closeStroke: boolean;
        /**
         * Creates a clone of this polygon
         *
         * @return {PIXI.Polygon} a copy of the polygon
         */
        clone(): PIXI.Polygon;
        /**
         * Checks whether the x and y coordinates passed to this function are contained within this polygon
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this polygon
         */
        contains(x: number, y: number): boolean;
    }
    /**
     * Generalized convenience utilities for Graphics.
     *
     * @namespace PIXI.graphicsUtils
     */
    namespace graphicsUtils { }
    /**
     * This namespace contains a renderer plugin for handling mouse, pointer, and touch events.
     *
     * Do not instantiate this plugin directly. It is available from the `renderer.plugins` property.
     * See {@link PIXI.CanvasRenderer#plugins} or {@link PIXI.Renderer#plugins}.
     * @namespace PIXI.interaction
     */
    namespace interaction {
        /**
         * Holds all information related to an Interaction event
         *
         * @class
         * @memberof PIXI.interaction
         */
        class InteractionData {
            constructor();
            /**
             * This point stores the global coords of where the touch/mouse event happened
             *
             * @member {PIXI.Point} PIXI.interaction.InteractionData#global
             */
            global: PIXI.Point;
            /**
             * The target Sprite that was interacted with
             *
             * @member {PIXI.Sprite} PIXI.interaction.InteractionData#target
             */
            target: PIXI.Sprite;
            /**
             * When passed to an event handler, this will be the original DOM Event that was captured
             *
             * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
             * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent
             * @member {MouseEvent|TouchEvent|PointerEvent} PIXI.interaction.InteractionData#originalEvent
             */
            originalEvent: MouseEvent | TouchEvent | PointerEvent;
            /**
             * Unique identifier for this interaction
             *
             * @member {number} PIXI.interaction.InteractionData#identifier
             */
            identifier: number;
            /**
             * Indicates whether or not the pointer device that created the event is the primary pointer.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary
             * @type {Boolean}
             */
            isPrimary: boolean;
            /**
             * Indicates which button was pressed on the mouse or pointer device to trigger the event.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
             * @type {number}
             */
            button: number;
            /**
             * Indicates which buttons are pressed on the mouse or pointer device when the event is triggered.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
             * @type {number}
             */
            buttons: number;
            /**
             * The width of the pointer's contact along the x-axis, measured in CSS pixels.
             * radiusX of TouchEvents will be represented by this value.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width
             * @type {number}
             */
            width: number;
            /**
             * The height of the pointer's contact along the y-axis, measured in CSS pixels.
             * radiusY of TouchEvents will be represented by this value.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height
             * @type {number}
             */
            height: number;
            /**
             * The angle, in degrees, between the pointer device and the screen.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX
             * @type {number}
             */
            tiltX: number;
            /**
             * The angle, in degrees, between the pointer device and the screen.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY
             * @type {number}
             */
            tiltY: number;
            /**
             * The type of pointer that triggered the event.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType
             * @type {string}
             */
            pointerType: string;
            /**
             * Pressure applied by the pointing device during the event. A Touch's force property
             * will be represented by this value.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure
             * @type {number}
             */
            pressure: number;
            /**
             * From TouchEvents (not PointerEvents triggered by touches), the rotationAngle of the Touch.
             * @see https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle
             * @type {number}
             */
            rotationAngle: number;
            /**
             * Twist of a stylus pointer.
             * @see https://w3c.github.io/pointerevents/#pointerevent-interface
             * @type {number}
             */
            twist: number;
            /**
             * Barrel pressure on a stylus pointer.
             * @see https://w3c.github.io/pointerevents/#pointerevent-interface
             * @type {number}
             */
            tangentialPressure: number;
            /**
             * The unique identifier of the pointer. It will be the same as `identifier`.
             * @readonly
             * @member {number}
             * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId
             */
            readonly pointerId: number;
            /**
             * This will return the local coordinates of the specified displayObject for this InteractionData
             *
             * @param {PIXI.DisplayObject} displayObject - The DisplayObject that you would like the local
             *  coords off
             * @param {PIXI.Point} [point] - A Point object in which to store the value, optional (otherwise
             *  will create a new point)
             * @param {PIXI.Point} [globalPos] - A Point object containing your custom global coords, optional
             *  (otherwise will use the current global coords)
             * @return {PIXI.Point} A point containing the coordinates of the InteractionData position relative
             *  to the DisplayObject
             */
            getLocalPosition(displayObject: PIXI.DisplayObject, point?: PIXI.Point, globalPos?: PIXI.Point): PIXI.Point;
            /**
             * Copies properties from normalized event data.
             *
             * @param {Touch|MouseEvent|PointerEvent} event The normalized event data
             */
            copyEvent(event: Touch | MouseEvent | PointerEvent): void;
            /**
             * Resets the data for pooling.
             */
            reset(): void;
        }
        /**
         * Event class that mimics native DOM events.
         *
         * @class
         * @memberof PIXI.interaction
         */
        class InteractionEvent {
            constructor();
            /**
             * Whether this event will continue propagating in the tree.
             *
             * Remaining events for the {@link stopsPropagatingAt} object
             * will still be dispatched.
             *
             * @member {boolean} PIXI.interaction.InteractionEvent#stopped
             */
            stopped: boolean;
            /**
             * The object which caused this event to be dispatched.
             * For listener callback see {@link PIXI.interaction.InteractionEvent.currentTarget}.
             *
             * @member {PIXI.DisplayObject} PIXI.interaction.InteractionEvent#target
             */
            target: PIXI.DisplayObject;
            /**
             * The object whose event listener’s callback is currently being invoked.
             *
             * @member {PIXI.DisplayObject} PIXI.interaction.InteractionEvent#currentTarget
             */
            currentTarget: PIXI.DisplayObject;
            /**
             * Type of the event
             *
             * @member {string} PIXI.interaction.InteractionEvent#type
             */
            type: string;
            /**
             * InteractionData related to this event
             *
             * @member {PIXI.interaction.InteractionData} PIXI.interaction.InteractionEvent#data
             */
            data: PIXI.interaction.InteractionData;
            /**
             * Prevents event from reaching any objects other than the current object.
             *
             */
            stopPropagation(): void;
            /**
             * Resets the event.
             */
            reset(): void;
        }
        /**
         * The interaction manager deals with mouse, touch and pointer events.
         *
         * Any DisplayObject can be interactive if its `interactive` property is set to true.
         *
         * This manager also supports multitouch.
         *
         * An instance of this class is automatically created by default, and can be found at `renderer.plugins.interaction`
         *
         * @class
         * @extends PIXI.utils.EventEmitter
         * @memberof PIXI.interaction
         */
        class InteractionManager extends PIXI.utils.EventEmitter {
            constructor(renderer: PIXI.Renderer, options?: {
                autoPreventDefault?: boolean;
                interactionFrequency?: number;
            });
            /**
             * The renderer this interaction manager works for.
             *
             * @member {PIXI.AbstractRenderer} PIXI.interaction.InteractionManager#renderer
             */
            renderer: PIXI.AbstractRenderer;
            /**
             * Should default browser actions automatically be prevented.
             * Does not apply to pointer events for backwards compatibility
             * preventDefault on pointer events stops mouse events from firing
             * Thus, for every pointer event, there will always be either a mouse of touch event alongside it.
             *
             * @member {boolean} PIXI.interaction.InteractionManager#autoPreventDefault
             * @default true
             */
            autoPreventDefault: boolean;
            /**
             * Frequency in milliseconds that the mousemove, mouseover & mouseout interaction events will be checked.
             *
             * @member {number} PIXI.interaction.InteractionManager#interactionFrequency
             * @default 10
             */
            interactionFrequency: number;
            /**
             * The mouse data
             *
             * @member {PIXI.interaction.InteractionData} PIXI.interaction.InteractionManager#mouse
             */
            mouse: PIXI.interaction.InteractionData;
            /**
             * An event data object to handle all the event tracking/dispatching
             *
             * @member {object} PIXI.interaction.InteractionManager#eventData
             */
            eventData: any;
            /**
             * The DOM element to bind to.
             *
             * @protected
             * @member {HTMLElement} PIXI.interaction.InteractionManager#interactionDOMElement
             */
            protected interactionDOMElement: HTMLElement;
            /**
             * This property determines if mousemove and touchmove events are fired only when the cursor
             * is over the object.
             * Setting to true will make things work more in line with how the DOM version works.
             * Setting to false can make things easier for things like dragging
             * It is currently set to false as this is how PixiJS used to work. This will be set to true in
             * future versions of pixi.
             *
             * @member {boolean} PIXI.interaction.InteractionManager#moveWhenInside
             * @default false
             */
            moveWhenInside: boolean;
            /**
             * Have events been attached to the dom element?
             *
             * @protected
             * @member {boolean} PIXI.interaction.InteractionManager#eventsAdded
             */
            protected eventsAdded: boolean;
            /**
             * Is the mouse hovering over the renderer?
             *
             * @protected
             * @member {boolean} PIXI.interaction.InteractionManager#mouseOverRenderer
             */
            protected mouseOverRenderer: boolean;
            /**
             * Does the device support touch events
             * https://www.w3.org/TR/touch-events/
             *
             * @readonly
             * @member {boolean} PIXI.interaction.InteractionManager#supportsTouchEvents
             */
            readonly supportsTouchEvents: boolean;
            /**
             * Does the device support pointer events
             * https://www.w3.org/Submission/pointer-events/
             *
             * @readonly
             * @member {boolean} PIXI.interaction.InteractionManager#supportsPointerEvents
             */
            readonly supportsPointerEvents: boolean;
            /**
             * Dictionary of how different cursor modes are handled. Strings are handled as CSS cursor
             * values, objects are handled as dictionaries of CSS values for interactionDOMElement,
             * and functions are called instead of changing the CSS.
             * Default CSS cursor values are provided for 'default' and 'pointer' modes.
             * @member {Object.<string, Object>} PIXI.interaction.InteractionManager#cursorStyles
             */
            cursorStyles: {
                [key: string]: any;
            };
            /**
             * The mode of the cursor that is being used.
             * The value of this is a key from the cursorStyles dictionary.
             *
             * @member {string} PIXI.interaction.InteractionManager#currentCursorMode
             */
            currentCursorMode: string;
            /**
             * The current resolution / device pixel ratio.
             *
             * @member {number} PIXI.interaction.InteractionManager#resolution
             * @default 1
             */
            resolution: number;
            /**
             * Hit tests a point against the display tree, returning the first interactive object that is hit.
             *
             * @param {PIXI.Point} globalPoint - A point to hit test with, in global space.
             * @param {PIXI.Container} [root] - The root display object to start from. If omitted, defaults
             * to the last rendered root of the associated renderer.
             * @return {PIXI.DisplayObject} The hit display object, if any.
             */
            hitTest(globalPoint: PIXI.Point, root?: PIXI.Container): PIXI.DisplayObject;
            /**
             * Sets the DOM element which will receive mouse/touch events. This is useful for when you have
             * other DOM elements on top of the renderers Canvas element. With this you'll be bale to delegate
             * another DOM element to receive those events.
             *
             * @param {HTMLElement} element - the DOM element which will receive mouse and touch events.
             * @param {number} [resolution=1] - The resolution / device pixel ratio of the new element (relative to the canvas).
             */
            setTargetElement(element: HTMLElement, resolution?: number): void;
            /**
             * Updates the state of interactive objects.
             * Invoked by a throttled ticker update from {@link PIXI.Ticker.system}.
             *
             * @param {number} deltaTime - time delta since last tick
             */
            update(deltaTime: number): void;
            /**
             * Sets the current cursor mode, handling any callbacks or CSS style changes.
             *
             * @param {string} mode - cursor mode, a key from the cursorStyles dictionary
             */
            setCursorMode(mode: string): void;
            /**
             * Maps x and y coords from a DOM object and maps them correctly to the PixiJS view. The
             * resulting value is stored in the point. This takes into account the fact that the DOM
             * element could be scaled and positioned anywhere on the screen.
             *
             * @param  {PIXI.Point} point - the point that the result will be stored in
             * @param  {number} x - the x coord of the position to map
             * @param  {number} y - the y coord of the position to map
             */
            mapPositionToPoint(point: PIXI.Point, x: number, y: number): void;
            /**
             * This function is provides a neat way of crawling through the scene graph and running a
             * specified function on all interactive objects it finds. It will also take care of hit
             * testing the interactive objects and passes the hit across in the function.
             *
             * @protected
             * @param {PIXI.interaction.InteractionEvent} interactionEvent - event containing the point that
             *  is tested for collision
             * @param {PIXI.Container|PIXI.Sprite|PIXI.TilingSprite} displayObject - the displayObject
             *  that will be hit test (recursively crawls its children)
             * @param {Function} [func] - the function that will be called on each interactive object. The
             *  interactionEvent, displayObject and hit will be passed to the function
             * @param {boolean} [hitTest] - indicates whether we want to calculate hits
             *  or just iterate through all interactive objects
             */
            protected processInteractive(interactionEvent: PIXI.interaction.InteractionEvent, displayObject: PIXI.Container | PIXI.Sprite | PIXI.TilingSprite, func?: (...params: any[]) => any, hitTest?: boolean): void;
            /**
             * Destroys the interaction manager
             *
             */
            destroy(): void;
        }
    }
    /**
     * Interface for classes that represent a hit area.
     *
     * It is implemented by the following classes:
     * - {@link PIXI.Circle}
     * - {@link PIXI.Ellipse}
     * - {@link PIXI.Polygon}
     * - {@link PIXI.RoundedRectangle}
     *
     * @interface IHitArea
     * @memberof PIXI
     */
    interface IHitArea {
        /**
         * Checks whether the x and y coordinates given are contained within this area
         *
         * @method
         * @name contains
         * @memberof PIXI.IHitArea#
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this area
         */
        contains(x: number, y: number): boolean;
    }
    /**
     * Application plugin for supporting loader option. Installing the LoaderPlugin
     * is not necessary if using **pixi.js** or **pixi.js-legacy**.
     * @example
     * import {AppLoaderPlugin} from '@pixi/loaders';
     * import {Application} from '@pixi/app';
     * Application.registerPlugin(AppLoaderPlugin);
     * @class
     * @memberof PIXI
     */
    class AppLoaderPlugin {
    }
    /**
     * Plugin to be installed for handling specific Loader resources.
     *
     * @memberof PIXI
     * @typedef ILoaderPlugin
     * @property {function} [add] - Function to call immediate after registering plugin.
     * @property {PIXI.Loader.loaderMiddleware} [pre] - Middleware function to run before load, the
     *           arguments for this are `(resource, next)`
     * @property {PIXI.Loader.loaderMiddleware} [use] - Middleware function to run after load, the
     *           arguments for this are `(resource, next)`
     */
    type ILoaderPlugin = {
        add?: (...params: any[]) => any;
        pre?: PIXI.Loader.loaderMiddleware;
        use?: PIXI.Loader.loaderMiddleware;
    };
    module Loader {
        /**
         * @memberof PIXI.Loader
         * @callback loaderMiddleware
         * @param {PIXI.LoaderResource} resource
         * @param {function} next
         */
        type loaderMiddleware = (resource: PIXI.LoaderResource, next: (...params: any[]) => any) => void;
    }
    /**
     * The new loader, extends Resource Loader by Chad Engler: https://github.com/englercj/resource-loader
     *
     * ```js
     * const loader = PIXI.Loader.shared; // PixiJS exposes a premade instance for you to use.
     * //or
     * const loader = new PIXI.Loader(); // you can also create your own if you want
     *
     * const sprites = {};
     *
     * // Chainable `add` to enqueue a resource
     * loader.add('bunny', 'data/bunny.png')
     *       .add('spaceship', 'assets/spritesheet.json');
     * loader.add('scoreFont', 'assets/score.fnt');
     *
     * // Chainable `pre` to add a middleware that runs for each resource, *before* loading that resource.
     * // This is useful to implement custom caching modules (using filesystem, indexeddb, memory, etc).
     * loader.pre(cachingMiddleware);
     *
     * // Chainable `use` to add a middleware that runs for each resource, *after* loading that resource.
     * // This is useful to implement custom parsing modules (like spritesheet parsers, spine parser, etc).
     * loader.use(parsingMiddleware);
     *
     * // The `load` method loads the queue of resources, and calls the passed in callback called once all
     * // resources have loaded.
     * loader.load((loader, resources) => {
     *     // resources is an object where the key is the name of the resource loaded and the value is the resource object.
     *     // They have a couple default properties:
     *     // - `url`: The URL that the resource was loaded from
     *     // - `error`: The error that happened when trying to load (if any)
     *     // - `data`: The raw data that was loaded
     *     // also may contain other properties based on the middleware that runs.
     *     sprites.bunny = new PIXI.TilingSprite(resources.bunny.texture);
     *     sprites.spaceship = new PIXI.TilingSprite(resources.spaceship.texture);
     *     sprites.scoreFont = new PIXI.TilingSprite(resources.scoreFont.texture);
     * });
     *
     * // throughout the process multiple signals can be dispatched.
     * loader.onProgress.add(() => {}); // called once per loaded/errored file
     * loader.onError.add(() => {}); // called once per errored file
     * loader.onLoad.add(() => {}); // called once per loaded file
     * loader.onComplete.add(() => {}); // called once when the queued resources all load.
     * ```
     *
     * @see https://github.com/englercj/resource-loader
     *
     * @class Loader
     * @memberof PIXI
     * @param {string} [baseUrl=''] - The base url for all resources loaded by this loader.
     * @param {number} [concurrency=10] - The number of resources to load concurrently.
     */
    class Loader {
        constructor(baseUrl?: string, concurrency?: number);
        /**
         * @memberof PIXI.Loader#
         * @member {object} onStart
         */
        onStart: any;
        /**
         * @memberof PIXI.Loader#
         * @member {object} onProgress
         */
        onProgress: any;
        /**
         * @memberof PIXI.Loader#
         * @member {object} onError
         */
        onError: any;
        /**
         * @memberof PIXI.Loader#
         * @member {object} onLoad
         */
        onLoad: any;
        /**
         * @memberof PIXI.Loader#
         * @member {object} onComplete
         */
        onComplete: any;
        /**
         * A premade instance of the loader that can be used to load resources.
         * @name shared
         * @type {PIXI.Loader}
         * @static
         * @memberof PIXI.Loader
         */
        static shared: PIXI.Loader;
        /**
         * Adds a Loader plugin for the global shared loader and all
         * new Loader instances created.
         *
         * @static
         * @method registerPlugin
         * @memberof PIXI.Loader
         * @param {PIXI.ILoaderPlugin} plugin - The plugin to add
         * @return {PIXI.Loader} Reference to PIXI.Loader for chaining
         */
        static registerPlugin(plugin: PIXI.ILoaderPlugin): PIXI.Loader;
    }
    interface TextureLoader extends PIXI.ILoaderPlugin {
    }
    /**
     * Loader plugin for handling Texture resources.
     * @class
     * @memberof PIXI
     * @implements PIXI.ILoaderPlugin
     */
    class TextureLoader implements PIXI.ILoaderPlugin {
        /**
         * Called after a resource is loaded.
         * @see PIXI.Loader.loaderMiddleware
         * @param {PIXI.LoaderResource} resource
         * @param {function} next
         */
        static use(resource: PIXI.LoaderResource, next: (...params: any[]) => any): void;
    }
    /**
     * Reference to **{@link https://github.com/englercj/resource-loader
     * resource-loader}**'s Resource class.
     * @see http://englercj.github.io/resource-loader/Resource.html
     * @class LoaderResource
     * @memberof PIXI
     */
    class LoaderResource {
    }
    /**
     * Common interface for points. Both Point and ObservablePoint implement it
     * @memberof PIXI
     * @interface IPoint
     */
    interface IPoint {
        /**
         * X coord
         * @memberof PIXI.IPoint#
         * @member {number} x
         */
        x: number;
        /**
         * Y coord
         * @memberof PIXI.IPoint#
         * @member {number} y
         */
        y: number;
        /**
         * Sets the point to a new x and y position.
         * If y is omitted, both x and y will be set to x.
         *
         * @method set
         * @memberof PIXI.IPoint#
         * @param {number} [x=0] - position of the point on the x axis
         * @param {number} [y=x] - position of the point on the y axis
         */
        set(x?: number, y?: number): void;
        /**
         * Copies x and y from the given point
         * @method copyFrom
         * @memberof PIXI.IPoint#
         * @param {PIXI.IPoint} p - The point to copy from
         * @returns {this} Returns itself.
         */
        copyFrom(p: PIXI.IPoint): this;
        /**
         * Copies x and y into the given point
         * @method copyTo
         * @memberof PIXI.IPoint#
         * @param {PIXI.IPoint} p - The point to copy.
         * @returns {PIXI.IPoint} Given point with values updated
         */
        copyTo(p: PIXI.IPoint): PIXI.IPoint;
        /**
         * Returns true if the given point is equal to this point
         *
         * @method equals
         * @memberof PIXI.IPoint#
         * @param {PIXI.IPoint} p - The point to check
         * @returns {boolean} Whether the given point equal to this point
         */
        equals(p: PIXI.IPoint): boolean;
    }
    /**
     * The PixiJS Matrix as a class makes it a lot faster.
     *
     * Here is a representation of it:
     * ```js
     * | a | c | tx|
     * | b | d | ty|
     * | 0 | 0 | 1 |
     * ```
     * @class
     * @memberof PIXI
     */
    class Matrix {
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
        /**
         * @member {number} PIXI.Matrix#a
         * @default 1
         */
        a: number;
        /**
         * @member {number} PIXI.Matrix#b
         * @default 0
         */
        b: number;
        /**
         * @member {number} PIXI.Matrix#c
         * @default 0
         */
        c: number;
        /**
         * @member {number} PIXI.Matrix#d
         * @default 1
         */
        d: number;
        /**
         * @member {number} PIXI.Matrix#tx
         * @default 0
         */
        tx: number;
        /**
         * @member {number} PIXI.Matrix#ty
         * @default 0
         */
        ty: number;
        /**
         * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
         *
         * a = array[0]
         * b = array[1]
         * c = array[3]
         * d = array[4]
         * tx = array[2]
         * ty = array[5]
         *
         * @param {number[]} array - The array that the matrix will be populated from.
         */
        fromArray(array: number[]): void;
        /**
         * sets the matrix properties
         *
         * @param {number} a - Matrix component
         * @param {number} b - Matrix component
         * @param {number} c - Matrix component
         * @param {number} d - Matrix component
         * @param {number} tx - Matrix component
         * @param {number} ty - Matrix component
         *
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */
        set(a: number, b: number, c: number, d: number, tx: number, ty: number): PIXI.Matrix;
        /**
         * Creates an array from the current Matrix object.
         *
         * @param {boolean} transpose - Whether we need to transpose the matrix or not
         * @param {Float32Array} [out=new Float32Array(9)] - If provided the array will be assigned to out
         * @return {number[]} the newly created array which contains the matrix
         */
        toArray(transpose: boolean, out?: Float32Array): number[];
        /**
         * Get a new position with the current transformation applied.
         * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
         *
         * @param {PIXI.Point} pos - The origin
         * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
         * @return {PIXI.Point} The new point, transformed through this matrix
         */
        apply(pos: PIXI.Point, newPos?: PIXI.Point): PIXI.Point;
        /**
         * Get a new position with the inverse of the current transformation applied.
         * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
         *
         * @param {PIXI.Point} pos - The origin
         * @param {PIXI.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
         * @return {PIXI.Point} The new point, inverse-transformed through this matrix
         */
        applyInverse(pos: PIXI.Point, newPos?: PIXI.Point): PIXI.Point;
        /**
         * Translates the matrix on the x and y.
         *
         * @param {number} x How much to translate x by
         * @param {number} y How much to translate y by
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */
        translate(x: number, y: number): PIXI.Matrix;
        /**
         * Applies a scale transformation to the matrix.
         *
         * @param {number} x The amount to scale horizontally
         * @param {number} y The amount to scale vertically
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */
        scale(x: number, y: number): PIXI.Matrix;
        /**
         * Applies a rotation transformation to the matrix.
         *
         * @param {number} angle - The angle in radians.
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */
        rotate(angle: number): PIXI.Matrix;
        /**
         * Appends the given Matrix to this Matrix.
         *
         * @param {PIXI.Matrix} matrix - The matrix to append.
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */
        append(matrix: PIXI.Matrix): PIXI.Matrix;
        /**
         * Sets the matrix based on all the available properties
         *
         * @param {number} x - Position on the x axis
         * @param {number} y - Position on the y axis
         * @param {number} pivotX - Pivot on the x axis
         * @param {number} pivotY - Pivot on the y axis
         * @param {number} scaleX - Scale on the x axis
         * @param {number} scaleY - Scale on the y axis
         * @param {number} rotation - Rotation in radians
         * @param {number} skewX - Skew on the x axis
         * @param {number} skewY - Skew on the y axis
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */
        setTransform(x: number, y: number, pivotX: number, pivotY: number, scaleX: number, scaleY: number, rotation: number, skewX: number, skewY: number): PIXI.Matrix;
        /**
         * Prepends the given Matrix to this Matrix.
         *
         * @param {PIXI.Matrix} matrix - The matrix to prepend
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */
        prepend(matrix: PIXI.Matrix): PIXI.Matrix;
        /**
         * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
         *
         * @param {PIXI.Transform} transform - The transform to apply the properties to.
         * @return {PIXI.Transform} The transform with the newly applied properties
         */
        decompose(transform: PIXI.Transform): PIXI.Transform;
        /**
         * Inverts this matrix
         *
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */
        invert(): PIXI.Matrix;
        /**
         * Resets this Matrix to an identity (default) matrix.
         *
         * @return {PIXI.Matrix} This matrix. Good for chaining method calls.
         */
        identity(): PIXI.Matrix;
        /**
         * Creates a new Matrix object with the same values as this one.
         *
         * @return {PIXI.Matrix} A copy of this matrix. Good for chaining method calls.
         */
        clone(): PIXI.Matrix;
        /**
         * Changes the values of the given matrix to be the same as the ones in this matrix
         *
         * @param {PIXI.Matrix} matrix - The matrix to copy to.
         * @return {PIXI.Matrix} The matrix given in parameter with its values updated.
         */
        copyTo(matrix: PIXI.Matrix): PIXI.Matrix;
        /**
         * Changes the values of the matrix to be the same as the ones in given matrix
         *
         * @param {PIXI.Matrix} matrix - The matrix to copy from.
         * @return {PIXI.Matrix} this
         */
        copyFrom(matrix: PIXI.Matrix): PIXI.Matrix;
        /**
         * A default (identity) matrix
         *
         * @static
         * @const
         * @member {PIXI.Matrix}
         */
        static IDENTITY: PIXI.Matrix;
        /**
         * A temp matrix
         *
         * @static
         * @const
         * @member {PIXI.Matrix}
         */
        static TEMP_MATRIX: PIXI.Matrix;
    }
    interface ObservablePoint extends IPoint {
    }
    /**
     * The Point object represents a location in a two-dimensional coordinate system, where x represents
     * the horizontal axis and y represents the vertical axis.
     *
     * An ObservablePoint is a point that triggers a callback when the point's position is changed.
     *
     * @class
     * @memberof PIXI
     * @implements IPoint
     */
    class ObservablePoint implements IPoint {
        constructor(cb: (...params: any[]) => any, scope: any, x?: number, y?: number);
        /**
         * Creates a clone of this point.
         * The callback and scope params can be overidden otherwise they will default
         * to the clone object's values.
         *
         * @override
         * @param {Function} [cb=null] - callback when changed
         * @param {object} [scope=null] - owner of callback
         * @return {PIXI.ObservablePoint} a copy of the point
         */
        clone(cb?: (...params: any[]) => any, scope?: any): PIXI.ObservablePoint;
        /**
         * Sets the point to a new x and y position.
         * If y is omitted, both x and y will be set to x.
         *
         * @param {number} [x=0] - position of the point on the x axis
         * @param {number} [y=x] - position of the point on the y axis
         */
        set(x?: number, y?: number): void;
        /**
         * Copies x and y from the given point
         *
         * @param {PIXI.IPoint} p - The point to copy from.
         * @returns {this} Returns itself.
         */
        copyFrom(p: PIXI.IPoint): this;
        /**
         * Copies x and y into the given point
         *
         * @param {PIXI.IPoint} p - The point to copy.
         * @returns {PIXI.IPoint} Given point with values updated
         */
        copyTo(p: PIXI.IPoint): PIXI.IPoint;
        /**
         * Returns true if the given point is equal to this point
         *
         * @param {PIXI.IPoint} p - The point to check
         * @returns {boolean} Whether the given point equal to this point
         */
        equals(p: PIXI.IPoint): boolean;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         *
         * @member {number}
         */
        y: number;
    }
    interface Point extends IPoint {
    }
    /**
     * The Point object represents a location in a two-dimensional coordinate system, where x represents
     * the horizontal axis and y represents the vertical axis.
     *
     * @class
     * @memberof PIXI
     * @implements IPoint
     */
    class Point implements IPoint {
        constructor(x?: number, y?: number);
        /**
         * @member {number} PIXI.Point#x
         * @default 0
         */
        x: number;
        /**
         * @member {number} PIXI.Point#y
         * @default 0
         */
        y: number;
        /**
         * Creates a clone of this point
         *
         * @return {PIXI.Point} a copy of the point
         */
        clone(): PIXI.Point;
        /**
         * Copies x and y from the given point
         *
         * @param {PIXI.IPoint} p - The point to copy from
         * @returns {this} Returns itself.
         */
        copyFrom(p: PIXI.IPoint): this;
        /**
         * Copies x and y into the given point
         *
         * @param {PIXI.IPoint} p - The point to copy.
         * @returns {PIXI.IPoint} Given point with values updated
         */
        copyTo(p: PIXI.IPoint): PIXI.IPoint;
        /**
         * Returns true if the given point is equal to this point
         *
         * @param {PIXI.IPoint} p - The point to check
         * @returns {boolean} Whether the given point equal to this point
         */
        equals(p: PIXI.IPoint): boolean;
        /**
         * Sets the point to a new x and y position.
         * If y is omitted, both x and y will be set to x.
         *
         * @param {number} [x=0] - position of the point on the x axis
         * @param {number} [y=x] - position of the point on the y axis
         */
        set(x?: number, y?: number): void;
    }
    /**
     * Transform that takes care about its versions
     *
     * @class
     * @memberof PIXI
     */
    class Transform {
        constructor();
        /**
         * The world transformation matrix.
         *
         * @member {PIXI.Matrix} PIXI.Transform#worldTransform
         */
        worldTransform: PIXI.Matrix;
        /**
         * The local transformation matrix.
         *
         * @member {PIXI.Matrix} PIXI.Transform#localTransform
         */
        localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         *
         * @member {PIXI.ObservablePoint} PIXI.Transform#position
         */
        position: PIXI.ObservablePoint;
        /**
         * The scale factor of the object.
         *
         * @member {PIXI.ObservablePoint} PIXI.Transform#scale
         */
        scale: PIXI.ObservablePoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         *
         * @member {PIXI.ObservablePoint} PIXI.Transform#pivot
         */
        pivot: PIXI.ObservablePoint;
        /**
         * The skew amount, on the x and y axis.
         *
         * @member {PIXI.ObservablePoint} PIXI.Transform#skew
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation amount.
         *
         * @protected
         * @member {number} PIXI.Transform#_rotation
         */
        protected _rotation: number;
        /**
         * The X-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number} PIXI.Transform#_cx
         */
        protected _cx: number;
        /**
         * The Y-coordinate value of the normalized local X axis,
         * the first column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number} PIXI.Transform#_sx
         */
        protected _sx: number;
        /**
         * The X-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number} PIXI.Transform#_cy
         */
        protected _cy: number;
        /**
         * The Y-coordinate value of the normalized local Y axis,
         * the second column of the local transformation matrix without a scale.
         *
         * @protected
         * @member {number} PIXI.Transform#_sy
         */
        protected _sy: number;
        /**
         * The locally unique ID of the local transform.
         *
         * @protected
         * @member {number} PIXI.Transform#_localID
         */
        protected _localID: number;
        /**
         * The locally unique ID of the local transform
         * used to calculate the current local transformation matrix.
         *
         * @protected
         * @member {number} PIXI.Transform#_currentLocalID
         */
        protected _currentLocalID: number;
        /**
         * The locally unique ID of the world transform.
         *
         * @protected
         * @member {number} PIXI.Transform#_worldID
         */
        protected _worldID: number;
        /**
         * The locally unique ID of the parent's world transform
         * used to calculate the current world transformation matrix.
         *
         * @protected
         * @member {number} PIXI.Transform#_parentID
         */
        protected _parentID: number;
        /**
         * Called when a value changes.
         *
         * @protected
         */
        protected onChange(): void;
        /**
         * Called when the skew or the rotation changes.
         *
         * @protected
         */
        protected updateSkew(): void;
        /**
         * Updates the local transformation matrix.
         */
        updateLocalTransform(): void;
        /**
         * Updates the local and the world transformation matrices.
         *
         * @param {PIXI.Transform} parentTransform - The parent transform
         */
        updateTransform(parentTransform: PIXI.Transform): void;
        /**
         * Decomposes a matrix and sets the transforms properties based on it.
         *
         * @param {PIXI.Matrix} matrix - The matrix to decompose
         */
        setFromMatrix(matrix: PIXI.Matrix): void;
        /**
         * The rotation of the object in radians.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * A default (identity) transform
         *
         * @static
         * @constant
         * @member {PIXI.Transform}
         */
        static IDENTITY: PIXI.Transform;
    }
    /**
     * Constants that identify shapes, mainly to prevent `instanceof` calls.
     *
     * @static
     * @constant
     * @name SHAPES
     * @memberof PIXI
     * @type {enum}
     * @property {number} POLY Polygon
     * @property {number} RECT Rectangle
     * @property {number} CIRC Circle
     * @property {number} ELIP Ellipse
     * @property {number} RREC Rounded Rectangle
     * @enum {number}
     */
    enum SHAPES {
        POLY,
        RECT,
        CIRC,
        ELIP,
        RREC
    }
    /**
     * Two Pi.
     *
     * @static
     * @constant {number} PI_2
     * @memberof PIXI
     */
    var PI_2: number;
    /**
     * Conversion factor for converting radians to degrees.
     *
     * @static
     * @constant {number} RAD_TO_DEG
     * @memberof PIXI
     */
    var RAD_TO_DEG: number;
    /**
     * Conversion factor for converting degrees to radians.
     *
     * @static
     * @constant {number} DEG_TO_RAD
     * @memberof PIXI
     */
    var DEG_TO_RAD: number;
    /**
     * @memberof PIXI
     * @typedef {number} GD8Symmetry
     * @see PIXI.groupD8
     */
    type GD8Symmetry = number;
    /**
     * Implements the dihedral group D8, which is similar to
     * [group D4]{@link http://mathworld.wolfram.com/DihedralGroupD4.html};
     * D8 is the same but with diagonals, and it is used for texture
     * rotations.
     *
     * The directions the U- and V- axes after rotation
     * of an angle of `a: GD8Constant` are the vectors `(uX(a), uY(a))`
     * and `(vX(a), vY(a))`. These aren't necessarily unit vectors.
     *
     * **Origin:**<br>
     *  This is the small part of gameofbombs.com portal system. It works.
     *
     * @see PIXI.groupD8.E
     * @see PIXI.groupD8.SE
     * @see PIXI.groupD8.S
     * @see PIXI.groupD8.SW
     * @see PIXI.groupD8.W
     * @see PIXI.groupD8.NW
     * @see PIXI.groupD8.N
     * @see PIXI.groupD8.NE
     * @author Ivan @ivanpopelyshev
     * @namespace PIXI.groupD8
     * @memberof PIXI
     */
    namespace groupD8 {
        /**
         * | Rotation | Direction |
         * |----------|-----------|
         * | 0°       | East      |
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var E: PIXI.GD8Symmetry;
        /**
         * | Rotation | Direction |
         * |----------|-----------|
         * | 45°↻     | Southeast |
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var SE: PIXI.GD8Symmetry;
        /**
         * | Rotation | Direction |
         * |----------|-----------|
         * | 90°↻     | South     |
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var S: PIXI.GD8Symmetry;
        /**
         * | Rotation | Direction |
         * |----------|-----------|
         * | 135°↻    | Southwest |
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var SW: PIXI.GD8Symmetry;
        /**
         * | Rotation | Direction |
         * |----------|-----------|
         * | 180°     | West      |
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var W: PIXI.GD8Symmetry;
        /**
         * | Rotation    | Direction    |
         * |-------------|--------------|
         * | -135°/225°↻ | Northwest    |
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var NW: PIXI.GD8Symmetry;
        /**
         * | Rotation    | Direction    |
         * |-------------|--------------|
         * | -90°/270°↻  | North        |
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var N: PIXI.GD8Symmetry;
        /**
         * | Rotation    | Direction    |
         * |-------------|--------------|
         * | -45°/315°↻  | Northeast    |
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var NE: PIXI.GD8Symmetry;
        /**
         * Reflection about Y-axis.
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var MIRROR_VERTICAL: PIXI.GD8Symmetry;
        /**
         * Reflection about the main diagonal.
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var MAIN_DIAGONAL: PIXI.GD8Symmetry;
        /**
         * Reflection about X-axis.
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var MIRROR_HORIZONTAL: PIXI.GD8Symmetry;
        /**
         * Reflection about reverse diagonal.
         *
         * @memberof PIXI.groupD8
         * @constant {PIXI.GD8Symmetry}
         */
        var REVERSE_DIAGONAL: PIXI.GD8Symmetry;
        /**
         * @memberof PIXI.groupD8
         * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
         * @return {PIXI.GD8Symmetry} The X-component of the U-axis
         *    after rotating the axes.
         */
        function uX(ind: PIXI.GD8Symmetry): PIXI.GD8Symmetry;
        /**
         * @memberof PIXI.groupD8
         * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
         * @return {PIXI.GD8Symmetry} The Y-component of the U-axis
         *    after rotating the axes.
         */
        function uY(ind: PIXI.GD8Symmetry): PIXI.GD8Symmetry;
        /**
         * @memberof PIXI.groupD8
         * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
         * @return {PIXI.GD8Symmetry} The X-component of the V-axis
         *    after rotating the axes.
         */
        function vX(ind: PIXI.GD8Symmetry): PIXI.GD8Symmetry;
        /**
         * @memberof PIXI.groupD8
         * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
         * @return {PIXI.GD8Symmetry} The Y-component of the V-axis
         *    after rotating the axes.
         */
        function vY(ind: PIXI.GD8Symmetry): PIXI.GD8Symmetry;
        /**
         * @memberof PIXI.groupD8
         * @param {PIXI.GD8Symmetry} rotation - symmetry whose opposite
         *   is needed. Only rotations have opposite symmetries while
         *   reflections don't.
         * @return {PIXI.GD8Symmetry} The opposite symmetry of `rotation`
         */
        function inv(rotation: PIXI.GD8Symmetry): PIXI.GD8Symmetry;
        /**
         * Composes the two D8 operations.
         *
         * Taking `^` as reflection:
         *
         * |       | E=0 | S=2 | W=4 | N=6 | E^=8 | S^=10 | W^=12 | N^=14 |
         * |-------|-----|-----|-----|-----|------|-------|-------|-------|
         * | E=0   | E   | S   | W   | N   | E^   | S^    | W^    | N^    |
         * | S=2   | S   | W   | N   | E   | S^   | W^    | N^    | E^    |
         * | W=4   | W   | N   | E   | S   | W^   | N^    | E^    | S^    |
         * | N=6   | N   | E   | S   | W   | N^   | E^    | S^    | W^    |
         * | E^=8  | E^  | N^  | W^  | S^  | E    | N     | W     | S     |
         * | S^=10 | S^  | E^  | N^  | W^  | S    | E     | N     | W     |
         * | W^=12 | W^  | S^  | E^  | N^  | W    | S     | E     | N     |
         * | N^=14 | N^  | W^  | S^  | E^  | N    | W     | S     | E     |
         *
         * [This is a Cayley table]{@link https://en.wikipedia.org/wiki/Cayley_table}
         * @memberof PIXI.groupD8
         * @param {PIXI.GD8Symmetry} rotationSecond - Second operation, which
         *   is the row in the above cayley table.
         * @param {PIXI.GD8Symmetry} rotationFirst - First operation, which
         *   is the column in the above cayley table.
         * @return {PIXI.GD8Symmetry} Composed operation
         */
        function add(rotationSecond: PIXI.GD8Symmetry, rotationFirst: PIXI.GD8Symmetry): PIXI.GD8Symmetry;
        /**
         * Reverse of `add`.
         *
         * @memberof PIXI.groupD8
         * @param {PIXI.GD8Symmetry} rotationSecond - Second operation
         * @param {PIXI.GD8Symmetry} rotationFirst - First operation
         * @return {PIXI.GD8Symmetry} Result
         */
        function sub(rotationSecond: PIXI.GD8Symmetry, rotationFirst: PIXI.GD8Symmetry): PIXI.GD8Symmetry;
        /**
         * Adds 180 degrees to rotation, which is a commutative
         * operation.
         *
         * @memberof PIXI.groupD8
         * @param {number} rotation - The number to rotate.
         * @returns {number} Rotated number
         */
        function rotate180(rotation: number): number;
        /**
         * Checks if the rotation angle is vertical, i.e. south
         * or north. It doesn't work for reflections.
         *
         * @memberof PIXI.groupD8
         * @param {PIXI.GD8Symmetry} rotation - The number to check.
         * @returns {boolean} Whether or not the direction is vertical
         */
        function isVertical(rotation: PIXI.GD8Symmetry): boolean;
        /**
         * Approximates the vector `V(dx,dy)` into one of the
         * eight directions provided by `groupD8`.
         *
         * @memberof PIXI.groupD8
         * @param {number} dx - X-component of the vector
         * @param {number} dy - Y-component of the vector
         * @return {PIXI.GD8Symmetry} Approximation of the vector into
         *  one of the eight symmetries.
         */
        function byDirection(dx: number, dy: number): PIXI.GD8Symmetry;
        /**
         * Helps sprite to compensate texture packer rotation.
         *
         * @memberof PIXI.groupD8
         * @param {PIXI.Matrix} matrix - sprite world matrix
         * @param {PIXI.GD8Symmetry} rotation - The rotation factor to use.
         * @param {number} tx - sprite anchoring
         * @param {number} ty - sprite anchoring
         */
        function matrixAppendRotationInv(matrix: PIXI.Matrix, rotation: PIXI.GD8Symmetry, tx: number, ty: number): void;
    }
    /**
     * The Circle object is used to help draw graphics and can also be used to specify a hit area for displayObjects.
     *
     * @class
     * @memberof PIXI
     */
    class Circle {
        constructor(x?: number, y?: number, radius?: number);
        /**
         * @member {number} PIXI.Circle#x
         * @default 0
         */
        x: number;
        /**
         * @member {number} PIXI.Circle#y
         * @default 0
         */
        y: number;
        /**
         * @member {number} PIXI.Circle#radius
         * @default 0
         */
        radius: number;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} PIXI.Circle#type
         * @readOnly
         * @default PIXI.SHAPES.CIRC
         * @see PIXI.SHAPES
         */
        readonly type: number;
        /**
         * Creates a clone of this Circle instance
         *
         * @return {PIXI.Circle} a copy of the Circle
         */
        clone(): PIXI.Circle;
        /**
         * Checks whether the x and y coordinates given are contained within this circle
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this Circle
         */
        contains(x: number, y: number): boolean;
        /**
         * Returns the framing rectangle of the circle as a Rectangle object
         *
         * @return {PIXI.Rectangle} the framing rectangle
         */
        getBounds(): PIXI.Rectangle;
    }
    /**
     * The Ellipse object is used to help draw graphics and can also be used to specify a hit area for displayObjects.
     *
     * @class
     * @memberof PIXI
     */
    class Ellipse {
        constructor(x?: number, y?: number, halfWidth?: number, halfHeight?: number);
        /**
         * @member {number} PIXI.Ellipse#x
         * @default 0
         */
        x: number;
        /**
         * @member {number} PIXI.Ellipse#y
         * @default 0
         */
        y: number;
        /**
         * @member {number} PIXI.Ellipse#width
         * @default 0
         */
        width: number;
        /**
         * @member {number} PIXI.Ellipse#height
         * @default 0
         */
        height: number;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} PIXI.Ellipse#type
         * @readOnly
         * @default PIXI.SHAPES.ELIP
         * @see PIXI.SHAPES
         */
        readonly type: number;
        /**
         * Creates a clone of this Ellipse instance
         *
         * @return {PIXI.Ellipse} a copy of the ellipse
         */
        clone(): PIXI.Ellipse;
        /**
         * Checks whether the x and y coordinates given are contained within this ellipse
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coords are within this ellipse
         */
        contains(x: number, y: number): boolean;
        /**
         * Returns the framing rectangle of the ellipse as a Rectangle object
         *
         * @return {PIXI.Rectangle} the framing rectangle
         */
        getBounds(): PIXI.Rectangle;
    }
    /**
     * A class to define a shape via user defined co-orinates.
     *
     * @class
     * @memberof PIXI
     */
    class Polygon {
        constructor(...points: (PIXI.Point[] | number[] | number[][])[]);
        /**
         * An array of the points of this polygon
         *
         * @member {number[]} PIXI.Polygon#points
         */
        points: number[];
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} PIXI.Polygon#type
         * @readOnly
         * @default PIXI.SHAPES.POLY
         * @see PIXI.SHAPES
         */
        readonly type: number;
        /**
         * `false` after moveTo, `true` after `closePath`. In all other cases it is `true`.
         * @member {boolean} PIXI.Polygon#closeStroke
         * @default true
         */
        closeStroke: boolean;
        /**
         * Creates a clone of this polygon
         *
         * @return {PIXI.Polygon} a copy of the polygon
         */
        clone(): PIXI.Polygon;
        /**
         * Checks whether the x and y coordinates passed to this function are contained within this polygon
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this polygon
         */
        contains(x: number, y: number): boolean;
    }
    /**
     * Size object, contains width and height
     *
     * @memberof PIXI
     * @typedef {object} ISize
     * @property {number} width - Width component
     * @property {number} height - Height component
     */
    type ISize = {
        width: number;
        height: number;
    };
    /**
     * Rectangle object is an area defined by its position, as indicated by its top-left corner
     * point (x, y) and by its width and its height.
     *
     * @class
     * @memberof PIXI
     */
    class Rectangle {
        constructor(x?: number, y?: number, width?: number, height?: number);
        /**
         * @member {number} PIXI.Rectangle#x
         * @default 0
         */
        x: number;
        /**
         * @member {number} PIXI.Rectangle#y
         * @default 0
         */
        y: number;
        /**
         * @member {number} PIXI.Rectangle#width
         * @default 0
         */
        width: number;
        /**
         * @member {number} PIXI.Rectangle#height
         * @default 0
         */
        height: number;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} PIXI.Rectangle#type
         * @readOnly
         * @default PIXI.SHAPES.RECT
         * @see PIXI.SHAPES
         */
        readonly type: number;
        /**
         * returns the left edge of the rectangle
         *
         * @member {number}
         */
        left: number;
        /**
         * returns the right edge of the rectangle
         *
         * @member {number}
         */
        right: number;
        /**
         * returns the top edge of the rectangle
         *
         * @member {number}
         */
        top: number;
        /**
         * returns the bottom edge of the rectangle
         *
         * @member {number}
         */
        bottom: number;
        /**
         * A constant empty rectangle.
         *
         * @static
         * @constant
         * @member {PIXI.Rectangle}
         * @return {PIXI.Rectangle} An empty rectangle
         */
        static EMPTY: PIXI.Rectangle;
        /**
         * Creates a clone of this Rectangle
         *
         * @return {PIXI.Rectangle} a copy of the rectangle
         */
        clone(): PIXI.Rectangle;
        /**
         * Copies another rectangle to this one.
         *
         * @param {PIXI.Rectangle} rectangle - The rectangle to copy from.
         * @return {PIXI.Rectangle} Returns itself.
         */
        copyFrom(rectangle: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Copies this rectangle to another one.
         *
         * @param {PIXI.Rectangle} rectangle - The rectangle to copy to.
         * @return {PIXI.Rectangle} Returns given parameter.
         */
        copyTo(rectangle: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Checks whether the x and y coordinates given are contained within this Rectangle
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this Rectangle
         */
        contains(x: number, y: number): boolean;
        /**
         * Pads the rectangle making it grow in all directions.
         * If paddingY is omitted, both paddingX and paddingY will be set to paddingX.
         *
         * @param {number} [paddingX=0] - The horizontal padding amount.
         * @param {number} [paddingY=0] - The vertical padding amount.
         * @return {PIXI.Rectangle} Returns itself.
         */
        pad(paddingX?: number, paddingY?: number): PIXI.Rectangle;
        /**
         * Fits this rectangle around the passed one.
         *
         * @param {PIXI.Rectangle} rectangle - The rectangle to fit.
         * @return {PIXI.Rectangle} Returns itself.
         */
        fit(rectangle: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Enlarges rectangle that way its corners lie on grid
         *
         * @param {number} [resolution=1] resolution
         * @param {number} [eps=0.001] precision
         * @return {PIXI.Rectangle} Returns itself.
         */
        ceil(resolution?: number, eps?: number): PIXI.Rectangle;
        /**
         * Enlarges this rectangle to include the passed rectangle.
         *
         * @param {PIXI.Rectangle} rectangle - The rectangle to include.
         * @return {PIXI.Rectangle} Returns itself.
         */
        enlarge(rectangle: PIXI.Rectangle): PIXI.Rectangle;
    }
    /**
     * The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its
     * top-left corner point (x, y) and by its width and its height and its radius.
     *
     * @class
     * @memberof PIXI
     */
    class RoundedRectangle {
        constructor(x?: number, y?: number, width?: number, height?: number, radius?: number);
        /**
         * @member {number} PIXI.RoundedRectangle#x
         * @default 0
         */
        x: number;
        /**
         * @member {number} PIXI.RoundedRectangle#y
         * @default 0
         */
        y: number;
        /**
         * @member {number} PIXI.RoundedRectangle#width
         * @default 0
         */
        width: number;
        /**
         * @member {number} PIXI.RoundedRectangle#height
         * @default 0
         */
        height: number;
        /**
         * @member {number} PIXI.RoundedRectangle#radius
         * @default 20
         */
        radius: number;
        /**
         * The type of the object, mainly used to avoid `instanceof` checks
         *
         * @member {number} PIXI.RoundedRectangle#type
         * @readonly
         * @default PIXI.SHAPES.RREC
         * @see PIXI.SHAPES
         */
        readonly type: number;
        /**
         * Creates a clone of this Rounded Rectangle
         *
         * @return {PIXI.RoundedRectangle} a copy of the rounded rectangle
         */
        clone(): PIXI.RoundedRectangle;
        /**
         * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
         *
         * @param {number} x - The X coordinate of the point to test
         * @param {number} y - The Y coordinate of the point to test
         * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
         */
        contains(x: number, y: number): boolean;
    }
    /**
     * Base mesh class.
     *
     * This class empowers you to have maximum flexibility to render any kind of WebGL visuals you can think of.
     * This class assumes a certain level of WebGL knowledge.
     * If you know a bit this should abstract enough away to make you life easier!
     *
     * Pretty much ALL WebGL can be broken down into the following:
     * - Geometry - The structure and data for the mesh. This can include anything from positions, uvs, normals, colors etc..
     * - Shader - This is the shader that PixiJS will render the geometry with (attributes in the shader must match the geometry)
     * - State - This is the state of WebGL required to render the mesh.
     *
     * Through a combination of the above elements you can render anything you want, 2D or 3D!
     *
     * @class
     * @extends PIXI.Container
     * @memberof PIXI
     */
    class Mesh extends PIXI.Container {
        constructor(geometry: PIXI.Geometry, shader: PIXI.Shader | PIXI.MeshMaterial, state?: PIXI.State, drawMode?: number);
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         * @member {PIXI.Geometry} PIXI.Mesh#geometry
         * @readonly
         */
        readonly geometry: PIXI.Geometry;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Mesh objects.
         * @member {PIXI.Shader|PIXI.MeshMaterial} PIXI.Mesh#shader
         */
        shader: PIXI.Shader | PIXI.MeshMaterial;
        /**
         * Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {PIXI.State} PIXI.Mesh#state
         */
        state: PIXI.State;
        /**
         * The way the Mesh should be drawn, can be any of the {@link PIXI.DRAW_MODES} constants.
         *
         * @member {number} PIXI.Mesh#drawMode
         * @see PIXI.DRAW_MODES
         */
        drawMode: number;
        /**
         * Typically the index of the IndexBuffer where to start drawing.
         * @member {number} PIXI.Mesh#start
         * @default 0
         */
        start: number;
        /**
         * How much of the geometry to draw, by default `0` renders everything.
         * @member {number} PIXI.Mesh#size
         * @default 0
         */
        size: number;
        /**
         * To change mesh uv's, change its uvBuffer data and increment its _updateID.
         * @member {PIXI.Buffer}
         * @readonly
         */
        readonly uvBuffer: PIXI.Buffer;
        /**
         * To change mesh vertices, change its uvBuffer data and increment its _updateID.
         * Incrementing _updateID is optional because most of Mesh objects do it anyway.
         * @member {PIXI.Buffer}
         * @readonly
         */
        readonly verticesBuffer: PIXI.Buffer;
        /**
         * Alias for {@link PIXI.Mesh#shader}.
         * @member {PIXI.Shader|PIXI.MeshMaterial}
         */
        material: PIXI.Shader | PIXI.MeshMaterial;
        /**
         * The blend mode to be applied to the Mesh. Apply a value of
         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL;
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The multiply tint applied to the Mesh. This is a hex value. A value of
         * `0xFFFFFF` will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the Mesh uses.
         *
         * @member {PIXI.Texture}
         */
        texture: PIXI.Texture;
        /**
         * Standard renderer draw.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * Standard non-batching way of rendering.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _renderDefault(renderer: PIXI.Renderer): void;
        /**
         * Rendering by using the Batch system.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _renderToBatch(renderer: PIXI.Renderer): void;
        /**
         * Updates vertexData field based on transform and vertices
         */
        calculateVertices(): void;
        /**
         * Updates uv field based on from geometry uv's or batchUvs
         */
        calculateUvs(): void;
        /**
         * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
         * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this mesh. Works only for PIXI.DRAW_MODES.TRIANGLES.
         *
         * @param {PIXI.Point} point the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: PIXI.Point): boolean;
        /**
         * Destroys the Mesh object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         */
        destroy(options?: {
            children?: boolean;
        }): void;
        /**
         * The maximum number of vertices to consider batchable. Generally, the complexity
         * of the geometry.
         * @memberof PIXI.Mesh
         * @static
         * @member {number} BATCHABLE_SIZE
         */
        static BATCHABLE_SIZE: number;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * Class controls cache for UV mapping from Texture normal space to BaseTexture normal space.
     *
     * @class
     * @memberof PIXI
     */
    class MeshBatchUvs {
        constructor(uvBuffer: PIXI.Buffer, uvMatrix: PIXI.TextureMatrix);
        /**
         * Buffer with normalized UV's
         * @member {PIXI.Buffer} PIXI.MeshBatchUvs#uvBuffer
         */
        uvBuffer: PIXI.Buffer;
        /**
         * Material UV matrix
         * @member {PIXI.TextureMatrix} PIXI.MeshBatchUvs#uvMatrix
         */
        uvMatrix: PIXI.TextureMatrix;
        /**
         * UV Buffer data
         * @member {Float32Array} PIXI.MeshBatchUvs#data
         * @readonly
         */
        readonly data: Float32Array;
        /**
         * updates
         *
         * @param {boolean} forceUpdate - force the update
         */
        update(forceUpdate: boolean): void;
    }
    /**
     * Standard 2D geometry used in PixiJS.
     *
     * Geometry can be defined without passing in a style or data if required.
     *
     * ```js
     * const geometry = new PIXI.Geometry();
     *
     * geometry.addAttribute('positions', [0, 0, 100, 0, 100, 100, 0, 100], 2);
     * geometry.addAttribute('uvs', [0,0,1,0,1,1,0,1], 2);
     * geometry.addIndex([0,1,2,1,3,2]);
     *
     * ```
     * @class
     * @memberof PIXI
     * @extends PIXI.Geometry
     */
    class MeshGeometry extends PIXI.Geometry {
        constructor(vertices: Float32Array | number[], uvs: Float32Array | number[], index: Uint16Array | number[]);
        /**
         * A map of renderer IDs to webgl VAOs
         *
         * @protected
         * @type {object}
         */
        protected glVertexArrayObjects: any;
        /**
         * Number of instances in this geometry, pass it to `GeometrySystem.draw()`
         * @member {number} PIXI.Geometry#instanceCount
         * @default 1
         */
        instanceCount: number;
        /**
         * Count of existing (not destroyed) meshes that reference this geometry
         * @member {number} PIXI.Geometry#refCount
         */
        refCount: number;
        /**
         *
         * Adds an attribute to the geometry
         *
         * @param {String} id - the name of the attribute (matching up to a shader)
         * @param {PIXI.Buffer|number[]} [buffer] the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
         * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
         * @param {Boolean} [normalized=false] should the data be normalized.
         * @param {Number} [type=PIXI.TYPES.FLOAT] what type of number is the attribute. Check {PIXI.TYPES} to see the ones available
         * @param {Number} [stride=0] How far apart (in floats) the start of each value is. (used for interleaving data)
         * @param {Number} [start=0] How far into the array to start reading values (used for interleaving data)
         *
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        addAttribute(id: string, buffer?: PIXI.Buffer | number[], size?: number, normalized?: boolean, type?: number, stride?: number, start?: number): PIXI.Geometry;
        /**
         * returns the requested attribute
         *
         * @param {String} id  the name of the attribute required
         * @return {PIXI.Attribute} the attribute requested.
         */
        getAttribute(id: string): PIXI.Attribute;
        /**
         * returns the requested buffer
         *
         * @param {String} id  the name of the buffer required
         * @return {PIXI.Buffer} the buffer requested.
         */
        getBuffer(id: string): PIXI.Buffer;
        /**
         *
         * Adds an index buffer to the geometry
         * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
         *
         * @param {PIXI.Buffer|number[]} [buffer] the buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        addIndex(buffer?: PIXI.Buffer | number[]): PIXI.Geometry;
        /**
         * returns the index buffer
         *
         * @return {PIXI.Buffer} the index buffer.
         */
        getIndex(): PIXI.Buffer;
        /**
         * this function modifies the structure so that all current attributes become interleaved into a single buffer
         * This can be useful if your model remains static as it offers a little performance boost
         *
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        interleave(): PIXI.Geometry;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
        /**
         * Destroys the geometry.
         */
        destroy(): void;
        /**
         * returns a clone of the geometry
         *
         * @returns {PIXI.Geometry} a new clone of this geometry
         */
        clone(): PIXI.Geometry;
    }
    /**
     * Slightly opinionated default shader for PixiJS 2D objects.
     * @class
     * @memberof PIXI
     * @extends PIXI.Shader
     */
    class MeshMaterial extends PIXI.Shader {
        constructor(uSampler: PIXI.Texture, options?: {
            alpha?: number;
            tint?: number;
            pluginName?: string;
            program?: PIXI.Program;
            uniforms?: any;
        });
        /**
         * TextureMatrix instance for this Mesh, used to track Texture changes
         *
         * @member {PIXI.TextureMatrix} PIXI.MeshMaterial#uvMatrix
         * @readonly
         */
        readonly uvMatrix: PIXI.TextureMatrix;
        /**
         * `true` if shader can be batch with the renderer's batch system.
         * @member {boolean} PIXI.MeshMaterial#batchable
         * @default true
         */
        batchable: boolean;
        /**
         * Renderer plugin for batching
         *
         * @member {string} PIXI.MeshMaterial#pluginName
         * @default 'batch'
         */
        pluginName: string;
        /**
         * Reference to the texture being rendered.
         * @member {PIXI.Texture}
         */
        texture: PIXI.Texture;
        /**
         * This gets automatically set by the object using this.
         *
         * @default 1
         * @member {number}
         */
        alpha: number;
        /**
         * Multiply tint for the material.
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * Gets called automatically by the Mesh. Intended to be overridden for custom
         * MeshMaterial objects.
         */
        update(): void;
        /**
         * Program that the shader uses
         *
         * @member {PIXI.Program} PIXI.Shader#program
         */
        program: PIXI.Program;
        /**
         * Shader uniform values, shortcut for `uniformGroup.uniforms`
         * @readonly
         * @member {object}
         */
        readonly uniforms: any;
    }
    /**
     * The NineSlicePlane allows you to stretch a texture using 9-slice scaling. The corners will remain unscaled (useful
     * for buttons with rounded corners for example) and the other areas will be scaled horizontally and or vertically
     *
     *```js
     * let Plane9 = new PIXI.NineSlicePlane(PIXI.Texture.from('BoxWithRoundedCorners.png'), 15, 15, 15, 15);
     *  ```
     * <pre>
     *      A                          B
     *    +---+----------------------+---+
     *  C | 1 |          2           | 3 |
     *    +---+----------------------+---+
     *    |   |                      |   |
     *    | 4 |          5           | 6 |
     *    |   |                      |   |
     *    +---+----------------------+---+
     *  D | 7 |          8           | 9 |
     *    +---+----------------------+---+
    
     *  When changing this objects width and/or height:
     *     areas 1 3 7 and 9 will remain unscaled.
     *     areas 2 and 8 will be stretched horizontally
     *     areas 4 and 6 will be stretched vertically
     *     area 5 will be stretched both horizontally and vertically
     * </pre>
     *
     * @class
     * @extends PIXI.SimplePlane
     * @memberof PIXI
     *
     */
    class NineSlicePlane extends PIXI.SimplePlane {
        constructor(texture: PIXI.Texture, leftWidth?: number, topHeight?: number, rightWidth?: number, bottomHeight?: number);
        /**
         * The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
         *
         * @member {number} PIXI.NineSlicePlane#_width
         * @override
         */
        _width: number;
        /**
         * The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
         *
         * @member {number} PIXI.NineSlicePlane#_height
         * @override
         */
        _height: number;
        /**
         * Updates the horizontal vertices.
         *
         */
        updateHorizontalVertices(): void;
        /**
         * Updates the vertical vertices.
         *
         */
        updateVerticalVertices(): void;
        /**
         * The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
         *
         * @member {number}
         */
        height: number;
        /**
         * The width of the left column
         *
         * @member {number}
         */
        leftWidth: number;
        /**
         * The width of the right column
         *
         * @member {number}
         */
        rightWidth: number;
        /**
         * The height of the top row
         *
         * @member {number}
         */
        topHeight: number;
        /**
         * The height of the bottom row
         *
         * @member {number}
         */
        bottomHeight: number;
        /**
         * Refreshes NineSlicePlane coords. All of them.
         */
        _refresh(): void;
        /**
         * Method used for overrides, to do something in case texture frame was changed.
         * Meshes based on plane can override it and change more details based on texture.
         */
        textureUpdated(): void;
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         * @member {PIXI.Geometry} PIXI.Mesh#geometry
         * @readonly
         */
        readonly geometry: PIXI.Geometry;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Mesh objects.
         * @member {PIXI.Shader|PIXI.MeshMaterial} PIXI.Mesh#shader
         */
        shader: PIXI.Shader | PIXI.MeshMaterial;
        /**
         * Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {PIXI.State} PIXI.Mesh#state
         */
        state: PIXI.State;
        /**
         * The way the Mesh should be drawn, can be any of the {@link PIXI.DRAW_MODES} constants.
         *
         * @member {number} PIXI.Mesh#drawMode
         * @see PIXI.DRAW_MODES
         */
        drawMode: number;
        /**
         * Typically the index of the IndexBuffer where to start drawing.
         * @member {number} PIXI.Mesh#start
         * @default 0
         */
        start: number;
        /**
         * How much of the geometry to draw, by default `0` renders everything.
         * @member {number} PIXI.Mesh#size
         * @default 0
         */
        size: number;
        /**
         * To change mesh uv's, change its uvBuffer data and increment its _updateID.
         * @member {PIXI.Buffer}
         * @readonly
         */
        readonly uvBuffer: PIXI.Buffer;
        /**
         * To change mesh vertices, change its uvBuffer data and increment its _updateID.
         * Incrementing _updateID is optional because most of Mesh objects do it anyway.
         * @member {PIXI.Buffer}
         * @readonly
         */
        readonly verticesBuffer: PIXI.Buffer;
        /**
         * Alias for {@link PIXI.Mesh#shader}.
         * @member {PIXI.Shader|PIXI.MeshMaterial}
         */
        material: PIXI.Shader | PIXI.MeshMaterial;
        /**
         * The blend mode to be applied to the Mesh. Apply a value of
         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL;
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The multiply tint applied to the Mesh. This is a hex value. A value of
         * `0xFFFFFF` will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the Mesh uses.
         *
         * @member {PIXI.Texture}
         */
        texture: PIXI.Texture;
        /**
         * Standard renderer draw.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * Standard non-batching way of rendering.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _renderDefault(renderer: PIXI.Renderer): void;
        /**
         * Rendering by using the Batch system.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _renderToBatch(renderer: PIXI.Renderer): void;
        /**
         * Updates vertexData field based on transform and vertices
         */
        calculateVertices(): void;
        /**
         * Updates uv field based on from geometry uv's or batchUvs
         */
        calculateUvs(): void;
        /**
         * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
         * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this mesh. Works only for PIXI.DRAW_MODES.TRIANGLES.
         *
         * @param {PIXI.Point} point the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: PIXI.Point): boolean;
        /**
         * Destroys the Mesh object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         */
        destroy(options?: {
            children?: boolean;
        }): void;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * The Simple Mesh class mimics Mesh in PixiJS v4, providing easy-to-use constructor arguments.
     * For more robust customization, use {@link PIXI.Mesh}.
     *
     * @class
     * @extends PIXI.Mesh
     * @memberof PIXI
     */
    class SimpleMesh extends PIXI.Mesh {
        constructor(texture?: PIXI.Texture, vertices?: Float32Array, uvs?: Float32Array, indices?: Uint16Array, drawMode?: number);
        /**
         * upload vertices buffer each frame
         * @member {boolean} PIXI.SimpleMesh#autoUpdate
         */
        autoUpdate: boolean;
        /**
         * Collection of vertices data.
         * @member {Float32Array}
         */
        vertices: Float32Array;
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         * @member {PIXI.Geometry} PIXI.Mesh#geometry
         * @readonly
         */
        readonly geometry: PIXI.Geometry;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Mesh objects.
         * @member {PIXI.Shader|PIXI.MeshMaterial} PIXI.Mesh#shader
         */
        shader: PIXI.Shader | PIXI.MeshMaterial;
        /**
         * Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {PIXI.State} PIXI.Mesh#state
         */
        state: PIXI.State;
        /**
         * The way the Mesh should be drawn, can be any of the {@link PIXI.DRAW_MODES} constants.
         *
         * @member {number} PIXI.Mesh#drawMode
         * @see PIXI.DRAW_MODES
         */
        drawMode: number;
        /**
         * Typically the index of the IndexBuffer where to start drawing.
         * @member {number} PIXI.Mesh#start
         * @default 0
         */
        start: number;
        /**
         * How much of the geometry to draw, by default `0` renders everything.
         * @member {number} PIXI.Mesh#size
         * @default 0
         */
        size: number;
        /**
         * To change mesh uv's, change its uvBuffer data and increment its _updateID.
         * @member {PIXI.Buffer}
         * @readonly
         */
        readonly uvBuffer: PIXI.Buffer;
        /**
         * To change mesh vertices, change its uvBuffer data and increment its _updateID.
         * Incrementing _updateID is optional because most of Mesh objects do it anyway.
         * @member {PIXI.Buffer}
         * @readonly
         */
        readonly verticesBuffer: PIXI.Buffer;
        /**
         * Alias for {@link PIXI.Mesh#shader}.
         * @member {PIXI.Shader|PIXI.MeshMaterial}
         */
        material: PIXI.Shader | PIXI.MeshMaterial;
        /**
         * The blend mode to be applied to the Mesh. Apply a value of
         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL;
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The multiply tint applied to the Mesh. This is a hex value. A value of
         * `0xFFFFFF` will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the Mesh uses.
         *
         * @member {PIXI.Texture}
         */
        texture: PIXI.Texture;
        /**
         * Standard renderer draw.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * Standard non-batching way of rendering.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _renderDefault(renderer: PIXI.Renderer): void;
        /**
         * Rendering by using the Batch system.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _renderToBatch(renderer: PIXI.Renderer): void;
        /**
         * Updates vertexData field based on transform and vertices
         */
        calculateVertices(): void;
        /**
         * Updates uv field based on from geometry uv's or batchUvs
         */
        calculateUvs(): void;
        /**
         * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
         * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this mesh. Works only for PIXI.DRAW_MODES.TRIANGLES.
         *
         * @param {PIXI.Point} point the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: PIXI.Point): boolean;
        /**
         * Destroys the Mesh object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         */
        destroy(options?: {
            children?: boolean;
        }): void;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * The SimplePlane allows you to draw a texture across several points and then manipulate these points
     *
     *```js
     * for (let i = 0; i < 20; i++) {
     *     points.push(new PIXI.Point(i * 50, 0));
     * };
     * let SimplePlane = new PIXI.SimplePlane(PIXI.Texture.from("snake.png"), points);
     *  ```
     *
     * @class
     * @extends PIXI.Mesh
     * @memberof PIXI
     *
     */
    class SimplePlane extends PIXI.Mesh {
        constructor(texture: PIXI.Texture, verticesX: number, verticesY: number);
        /**
         * Method used for overrides, to do something in case texture frame was changed.
         * Meshes based on plane can override it and change more details based on texture.
         */
        textureUpdated(): void;
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         * @member {PIXI.Geometry} PIXI.Mesh#geometry
         * @readonly
         */
        readonly geometry: PIXI.Geometry;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Mesh objects.
         * @member {PIXI.Shader|PIXI.MeshMaterial} PIXI.Mesh#shader
         */
        shader: PIXI.Shader | PIXI.MeshMaterial;
        /**
         * Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {PIXI.State} PIXI.Mesh#state
         */
        state: PIXI.State;
        /**
         * The way the Mesh should be drawn, can be any of the {@link PIXI.DRAW_MODES} constants.
         *
         * @member {number} PIXI.Mesh#drawMode
         * @see PIXI.DRAW_MODES
         */
        drawMode: number;
        /**
         * Typically the index of the IndexBuffer where to start drawing.
         * @member {number} PIXI.Mesh#start
         * @default 0
         */
        start: number;
        /**
         * How much of the geometry to draw, by default `0` renders everything.
         * @member {number} PIXI.Mesh#size
         * @default 0
         */
        size: number;
        /**
         * To change mesh uv's, change its uvBuffer data and increment its _updateID.
         * @member {PIXI.Buffer}
         * @readonly
         */
        readonly uvBuffer: PIXI.Buffer;
        /**
         * To change mesh vertices, change its uvBuffer data and increment its _updateID.
         * Incrementing _updateID is optional because most of Mesh objects do it anyway.
         * @member {PIXI.Buffer}
         * @readonly
         */
        readonly verticesBuffer: PIXI.Buffer;
        /**
         * Alias for {@link PIXI.Mesh#shader}.
         * @member {PIXI.Shader|PIXI.MeshMaterial}
         */
        material: PIXI.Shader | PIXI.MeshMaterial;
        /**
         * The blend mode to be applied to the Mesh. Apply a value of
         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL;
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The multiply tint applied to the Mesh. This is a hex value. A value of
         * `0xFFFFFF` will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the Mesh uses.
         *
         * @member {PIXI.Texture}
         */
        texture: PIXI.Texture;
        /**
         * Standard renderer draw.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * Standard non-batching way of rendering.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _renderDefault(renderer: PIXI.Renderer): void;
        /**
         * Rendering by using the Batch system.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _renderToBatch(renderer: PIXI.Renderer): void;
        /**
         * Updates vertexData field based on transform and vertices
         */
        calculateVertices(): void;
        /**
         * Updates uv field based on from geometry uv's or batchUvs
         */
        calculateUvs(): void;
        /**
         * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
         * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this mesh. Works only for PIXI.DRAW_MODES.TRIANGLES.
         *
         * @param {PIXI.Point} point the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: PIXI.Point): boolean;
        /**
         * Destroys the Mesh object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         */
        destroy(options?: {
            children?: boolean;
        }): void;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * The rope allows you to draw a texture across several points and then manipulate these points
     *
     *```js
     * for (let i = 0; i < 20; i++) {
     *     points.push(new PIXI.Point(i * 50, 0));
     * };
     * let rope = new PIXI.SimpleRope(PIXI.Texture.from("snake.png"), points);
     *  ```
     *
     * @class
     * @extends PIXI.Mesh
     * @memberof PIXI
     *
     */
    class SimpleRope extends PIXI.Mesh {
        constructor(texture: PIXI.Texture, points: PIXI.Point[], textureScale?: number);
        /**
         * re-calculate vertices by rope points each frame
         *
         * @member {boolean} PIXI.SimpleRope#autoUpdate
         */
        autoUpdate: boolean;
        /**
         * Includes vertex positions, face indices, normals, colors, UVs, and
         * custom attributes within buffers, reducing the cost of passing all
         * this data to the GPU. Can be shared between multiple Mesh objects.
         * @member {PIXI.Geometry} PIXI.Mesh#geometry
         * @readonly
         */
        readonly geometry: PIXI.Geometry;
        /**
         * Represents the vertex and fragment shaders that processes the geometry and runs on the GPU.
         * Can be shared between multiple Mesh objects.
         * @member {PIXI.Shader|PIXI.MeshMaterial} PIXI.Mesh#shader
         */
        shader: PIXI.Shader | PIXI.MeshMaterial;
        /**
         * Represents the WebGL state the Mesh required to render, excludes shader and geometry. E.g.,
         * blend mode, culling, depth testing, direction of rendering triangles, backface, etc.
         * @member {PIXI.State} PIXI.Mesh#state
         */
        state: PIXI.State;
        /**
         * The way the Mesh should be drawn, can be any of the {@link PIXI.DRAW_MODES} constants.
         *
         * @member {number} PIXI.Mesh#drawMode
         * @see PIXI.DRAW_MODES
         */
        drawMode: number;
        /**
         * Typically the index of the IndexBuffer where to start drawing.
         * @member {number} PIXI.Mesh#start
         * @default 0
         */
        start: number;
        /**
         * How much of the geometry to draw, by default `0` renders everything.
         * @member {number} PIXI.Mesh#size
         * @default 0
         */
        size: number;
        /**
         * To change mesh uv's, change its uvBuffer data and increment its _updateID.
         * @member {PIXI.Buffer}
         * @readonly
         */
        readonly uvBuffer: PIXI.Buffer;
        /**
         * To change mesh vertices, change its uvBuffer data and increment its _updateID.
         * Incrementing _updateID is optional because most of Mesh objects do it anyway.
         * @member {PIXI.Buffer}
         * @readonly
         */
        readonly verticesBuffer: PIXI.Buffer;
        /**
         * Alias for {@link PIXI.Mesh#shader}.
         * @member {PIXI.Shader|PIXI.MeshMaterial}
         */
        material: PIXI.Shader | PIXI.MeshMaterial;
        /**
         * The blend mode to be applied to the Mesh. Apply a value of
         * `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number}
         * @default PIXI.BLEND_MODES.NORMAL;
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The multiply tint applied to the Mesh. This is a hex value. A value of
         * `0xFFFFFF` will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the Mesh uses.
         *
         * @member {PIXI.Texture}
         */
        texture: PIXI.Texture;
        /**
         * Standard renderer draw.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * Standard non-batching way of rendering.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _renderDefault(renderer: PIXI.Renderer): void;
        /**
         * Rendering by using the Batch system.
         * @protected
         * @param {PIXI.Renderer} renderer - Instance to renderer.
         */
        protected _renderToBatch(renderer: PIXI.Renderer): void;
        /**
         * Updates vertexData field based on transform and vertices
         */
        calculateVertices(): void;
        /**
         * Updates uv field based on from geometry uv's or batchUvs
         */
        calculateUvs(): void;
        /**
         * Updates the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
         * there must be a aVertexPosition attribute present in the geometry for bounds to be calculated correctly.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Tests if a point is inside this mesh. Works only for PIXI.DRAW_MODES.TRIANGLES.
         *
         * @param {PIXI.Point} point the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: PIXI.Point): boolean;
        /**
         * Destroys the Mesh object.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
         *  options have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have
         *  their destroy method called as well. 'options' will be passed on to those calls.
         */
        destroy(options?: {
            children?: boolean;
        }): void;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * RopeGeometry allows you to draw a geometry across several points and then manipulate these points.
     *
     * ```js
     * for (let i = 0; i < 20; i++) {
     *     points.push(new PIXI.Point(i * 50, 0));
     * };
     * const rope = new PIXI.RopeGeometry(100, points);
     * ```
     *
     * @class
     * @extends PIXI.MeshGeometry
     * @memberof PIXI
     *
     */
    class RopeGeometry extends PIXI.MeshGeometry {
        constructor(width?: number, points?: PIXI.Point[], textureScale?: number);
        /**
         * An array of points that determine the rope
         * @member {PIXI.Point[]} PIXI.RopeGeometry#points
         */
        points: PIXI.Point[];
        /**
         * The width (i.e., thickness) of the rope.
         * @member {number} PIXI.RopeGeometry#width
         * @readOnly
         */
        readonly width: number;
        /**
         * Rope texture scale, if zero then the rope texture is stretched.
         * @member {number} PIXI.RopeGeometry#textureScale
         * @readOnly
         */
        readonly textureScale: number;
        /**
         * refreshes vertices of Rope mesh
         */
        updateVertices(): void;
        /**
         * A map of renderer IDs to webgl VAOs
         *
         * @protected
         * @type {object}
         */
        protected glVertexArrayObjects: any;
        /**
         * Number of instances in this geometry, pass it to `GeometrySystem.draw()`
         * @member {number} PIXI.Geometry#instanceCount
         * @default 1
         */
        instanceCount: number;
        /**
         * Count of existing (not destroyed) meshes that reference this geometry
         * @member {number} PIXI.Geometry#refCount
         */
        refCount: number;
        /**
         *
         * Adds an attribute to the geometry
         *
         * @param {String} id - the name of the attribute (matching up to a shader)
         * @param {PIXI.Buffer|number[]} [buffer] the buffer that holds the data of the attribute . You can also provide an Array and a buffer will be created from it.
         * @param {Number} [size=0] the size of the attribute. If you have 2 floats per vertex (eg position x and y) this would be 2
         * @param {Boolean} [normalized=false] should the data be normalized.
         * @param {Number} [type=PIXI.TYPES.FLOAT] what type of number is the attribute. Check {PIXI.TYPES} to see the ones available
         * @param {Number} [stride=0] How far apart (in floats) the start of each value is. (used for interleaving data)
         * @param {Number} [start=0] How far into the array to start reading values (used for interleaving data)
         *
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        addAttribute(id: string, buffer?: PIXI.Buffer | number[], size?: number, normalized?: boolean, type?: number, stride?: number, start?: number): PIXI.Geometry;
        /**
         * returns the requested attribute
         *
         * @param {String} id  the name of the attribute required
         * @return {PIXI.Attribute} the attribute requested.
         */
        getAttribute(id: string): PIXI.Attribute;
        /**
         * returns the requested buffer
         *
         * @param {String} id  the name of the buffer required
         * @return {PIXI.Buffer} the buffer requested.
         */
        getBuffer(id: string): PIXI.Buffer;
        /**
         *
         * Adds an index buffer to the geometry
         * The index buffer contains integers, three for each triangle in the geometry, which reference the various attribute buffers (position, colour, UV coordinates, other UV coordinates, normal, …). There is only ONE index buffer.
         *
         * @param {PIXI.Buffer|number[]} [buffer] the buffer that holds the data of the index buffer. You can also provide an Array and a buffer will be created from it.
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        addIndex(buffer?: PIXI.Buffer | number[]): PIXI.Geometry;
        /**
         * returns the index buffer
         *
         * @return {PIXI.Buffer} the index buffer.
         */
        getIndex(): PIXI.Buffer;
        /**
         * this function modifies the structure so that all current attributes become interleaved into a single buffer
         * This can be useful if your model remains static as it offers a little performance boost
         *
         * @return {PIXI.Geometry} returns self, useful for chaining.
         */
        interleave(): PIXI.Geometry;
        /**
         * disposes WebGL resources that are connected to this geometry
         */
        dispose(): void;
        /**
         * Destroys the geometry.
         */
        destroy(): void;
        /**
         * returns a clone of the geometry
         *
         * @returns {PIXI.Geometry} a new clone of this geometry
         */
        clone(): PIXI.Geometry;
    }
    /**
     * The ParticleContainer class is a really fast version of the Container built solely for speed,
     * so use when you need a lot of sprites or particles.
     *
     * The tradeoff of the ParticleContainer is that most advanced functionality will not work.
     * ParticleContainer implements the basic object transform (position, scale, rotation)
     * and some advanced functionality like tint (as of v4.5.6).
     *
     * Other more advanced functionality like masking, children, filters, etc will not work on sprites in this batch.
     *
     * It's extremely easy to use:
     * ```js
     * let container = new ParticleContainer();
     *
     * for (let i = 0; i < 100; ++i)
     * {
     *     let sprite = PIXI.Sprite.from("myImage.png");
     *     container.addChild(sprite);
     * }
     * ```
     *
     * And here you have a hundred sprites that will be rendered at the speed of light.
     *
     * @class
     * @extends PIXI.Container
     * @memberof PIXI
     */
    class ParticleContainer extends PIXI.Container {
        constructor(maxSize?: number, properties?: {
            vertices?: boolean;
            position?: boolean;
            rotation?: boolean;
            uvs?: boolean;
            tint?: boolean;
        }, batchSize?: number, autoResize?: boolean);
        /**
         * @member {boolean} PIXI.ParticleContainer#interactiveChildren
         *
         */
        interactiveChildren: boolean;
        /**
         * The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL`
         * to reset the blend mode.
         *
         * @member {number} PIXI.ParticleContainer#blendMode
         * @default PIXI.BLEND_MODES.NORMAL
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * If true, container allocates more batches in case there are more than `maxSize` particles.
         * @member {boolean} PIXI.ParticleContainer#autoResize
         * @default false
         */
        autoResize: boolean;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * Default to true here as performance is usually the priority for particles.
         *
         * @member {boolean} PIXI.ParticleContainer#roundPixels
         * @default true
         */
        roundPixels: boolean;
        /**
         * The texture used to render the children.
         *
         * @readonly
         * @member {PIXI.BaseTexture} PIXI.ParticleContainer#baseTexture
         */
        readonly baseTexture: PIXI.BaseTexture;
        /**
         * Sets the private properties array to dynamic / static based on the passed properties object
         *
         * @param {object} properties - The properties to be uploaded
         */
        setProperties(properties: any): void;
        /**
         * The tint applied to the container. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         ** IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * Destroys the container
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their
         *  destroy method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the texture of the child sprite
         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the base texture of the child sprite
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Recalculates the bounds of the object. Override this to
         * calculate the bounds of the specific object (not including children).
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * To be overridden by the subclasses.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Retrieves the local bounds of the displayObject as a rectangle object.
         *
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getLocalBounds(rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * Renderer for Particles that is designer for speed over feature set.
     *
     * @class
     * @memberof PIXI
     */
    class ParticleRenderer {
        constructor(renderer: PIXI.Renderer);
        /**
         * The default shader that is used if a sprite doesn't have a more specific one.
         *
         * @member {PIXI.Shader} PIXI.ParticleRenderer#shader
         */
        shader: PIXI.Shader;
        /**
         * Renders the particle container object.
         *
         * @param {PIXI.ParticleContainer} container - The container to render using this ParticleRenderer
         */
        render(container: PIXI.ParticleContainer): void;
        /**
         * Uploads the vertices.
         *
         * @param {PIXI.DisplayObject[]} children - the array of display objects to render
         * @param {number} startIndex - the index to start from in the children array
         * @param {number} amount - the amount of children that will have their vertices uploaded
         * @param {number[]} array - The vertices to upload.
         * @param {number} stride - Stride to use for iteration.
         * @param {number} offset - Offset to start at.
         */
        uploadVertices(children: PIXI.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
        /**
         * Uploads the position.
         *
         * @param {PIXI.DisplayObject[]} children - the array of display objects to render
         * @param {number} startIndex - the index to start from in the children array
         * @param {number} amount - the amount of children that will have their positions uploaded
         * @param {number[]} array - The vertices to upload.
         * @param {number} stride - Stride to use for iteration.
         * @param {number} offset - Offset to start at.
         */
        uploadPosition(children: PIXI.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
        /**
         * Uploads the rotiation.
         *
         * @param {PIXI.DisplayObject[]} children - the array of display objects to render
         * @param {number} startIndex - the index to start from in the children array
         * @param {number} amount - the amount of children that will have their rotation uploaded
         * @param {number[]} array - The vertices to upload.
         * @param {number} stride - Stride to use for iteration.
         * @param {number} offset - Offset to start at.
         */
        uploadRotation(children: PIXI.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
        /**
         * Uploads the Uvs
         *
         * @param {PIXI.DisplayObject[]} children - the array of display objects to render
         * @param {number} startIndex - the index to start from in the children array
         * @param {number} amount - the amount of children that will have their rotation uploaded
         * @param {number[]} array - The vertices to upload.
         * @param {number} stride - Stride to use for iteration.
         * @param {number} offset - Offset to start at.
         */
        uploadUvs(children: PIXI.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
        /**
         * Uploads the tint.
         *
         * @param {PIXI.DisplayObject[]} children - the array of display objects to render
         * @param {number} startIndex - the index to start from in the children array
         * @param {number} amount - the amount of children that will have their rotation uploaded
         * @param {number[]} array - The vertices to upload.
         * @param {number} stride - Stride to use for iteration.
         * @param {number} offset - Offset to start at.
         */
        uploadTint(children: PIXI.DisplayObject[], startIndex: number, amount: number, array: number[], stride: number, offset: number): void;
        /**
         * Destroys the ParticleRenderer.
         */
        destroy(): void;
    }
    /**
     * The prepare namespace provides renderer-specific plugins for pre-rendering DisplayObjects. These plugins are useful for
     * asynchronously preparing and uploading to the GPU assets, textures, graphics waiting to be displayed.
     *
     * Do not instantiate these plugins directly. It is available from the `renderer.plugins` property.
     * See {@link PIXI.CanvasRenderer#plugins} or {@link PIXI.Renderer#plugins}.
     * @example
     * // Create a new application
     * const app = new PIXI.Application();
     * document.body.appendChild(app.view);
     *
     * // Don't start rendering right away
     * app.stop();
     *
     * // create a display object
     * const rect = new PIXI.Graphics()
     *     .beginFill(0x00ff00)
     *     .drawRect(40, 40, 200, 200);
     *
     * // Add to the stage
     * app.stage.addChild(rect);
     *
     * // Don't start rendering until the graphic is uploaded to the GPU
     * app.renderer.plugins.prepare.upload(app.stage, () => {
     *     app.start();
     * });
     * @namespace PIXI.prepare
     */
    namespace prepare {
        /**
         * The prepare manager provides functionality to upload content to the GPU.
         *
         * BasePrepare handles basic queuing functionality and is extended by
         * {@link PIXI.prepare.Prepare} and {@link PIXI.prepare.CanvasPrepare}
         * to provide preparation capabilities specific to their respective renderers.
         *
         * @example
         * // Create a sprite
         * const sprite = PIXI.Sprite.from('something.png');
         *
         * // Load object into GPU
         * app.renderer.plugins.prepare.upload(sprite, () => {
         *
         *     //Texture(s) has been uploaded to GPU
         *     app.stage.addChild(sprite);
         *
         * })
         *
         * @abstract
         * @class
         * @memberof PIXI.prepare
         */
        class BasePrepare {
            constructor(renderer: PIXI.AbstractRenderer);
            /**
             * The limiter to be used to control how quickly items are prepared.
             * @type {PIXI.prepare.CountLimiter|PIXI.prepare.TimeLimiter}
             */
            limiter: PIXI.prepare.CountLimiter | PIXI.prepare.TimeLimiter;
            /**
             * Reference to the renderer.
             * @type {PIXI.AbstractRenderer}
             * @protected
             */
            protected renderer: PIXI.AbstractRenderer;
            /**
             * The only real difference between CanvasPrepare and Prepare is what they pass
             * to upload hooks. That different parameter is stored here.
             * @type {PIXI.prepare.CanvasPrepare|PIXI.Renderer}
             * @protected
             */
            protected uploadHookHelper: PIXI.Renderer;
            /**
             * Upload all the textures and graphics to the GPU.
             *
             * @param {Function|PIXI.DisplayObject|PIXI.Container|PIXI.BaseTexture|PIXI.Texture|PIXI.Graphics|PIXI.Text} item -
             *        Either the container or display object to search for items to upload, the items to upload themselves,
             *        or the callback function, if items have been added using `prepare.add`.
             * @param {Function} [done] - Optional callback when all queued uploads have completed
             */
            upload(item: ((...params: any[]) => any) | PIXI.DisplayObject | PIXI.Container | PIXI.BaseTexture | PIXI.Texture | PIXI.Graphics | PIXI.Text, done?: (...params: any[]) => any): void;
            /**
             * Adds hooks for finding items.
             *
             * @param {Function} addHook - Function call that takes two parameters: `item:*, queue:Array`
             *          function must return `true` if it was able to add item to the queue.
             * @return {PIXI.prepare.BasePrepare} Instance of plugin for chaining.
             */
            registerFindHook(addHook: (...params: any[]) => any): PIXI.prepare.BasePrepare;
            /**
             * Adds hooks for uploading items.
             *
             * @param {Function} uploadHook - Function call that takes two parameters: `prepare:CanvasPrepare, item:*` and
             *          function must return `true` if it was able to handle upload of item.
             * @return {PIXI.prepare.BasePrepare} Instance of plugin for chaining.
             */
            registerUploadHook(uploadHook: (...params: any[]) => any): PIXI.prepare.BasePrepare;
            /**
             * Manually add an item to the uploading queue.
             *
             * @param {PIXI.DisplayObject|PIXI.Container|PIXI.BaseTexture|PIXI.Texture|PIXI.Graphics|PIXI.Text|*} item - Object to
             *        add to the queue
             * @return {PIXI.prepare.BasePrepare} Instance of plugin for chaining.
             */
            add(item: PIXI.DisplayObject | PIXI.Container | PIXI.BaseTexture | PIXI.Texture | PIXI.Graphics | PIXI.Text | any): PIXI.prepare.BasePrepare;
            /**
             * Destroys the plugin, don't use after this.
             *
             */
            destroy(): void;
        }
        /**
         * CountLimiter limits the number of items handled by a {@link PIXI.prepare.BasePrepare} to a specified
         * number of items per frame.
         *
         * @class
         * @memberof PIXI.prepare
         */
        class CountLimiter {
            constructor(maxItemsPerFrame: number);
            /**
             * Resets any counting properties to start fresh on a new frame.
             */
            beginFrame(): void;
            /**
             * Checks to see if another item can be uploaded. This should only be called once per item.
             * @return {boolean} If the item is allowed to be uploaded.
             */
            allowedToUpload(): boolean;
        }
        /**
         * The prepare manager provides functionality to upload content to the GPU.
         *
         * An instance of this class is automatically created by default, and can be found at `renderer.plugins.prepare`
         *
         * @class
         * @extends PIXI.prepare.BasePrepare
         * @memberof PIXI.prepare
         */
        class Prepare extends PIXI.prepare.BasePrepare {
            constructor(renderer: PIXI.Renderer);
            /**
             * The limiter to be used to control how quickly items are prepared.
             * @type {PIXI.prepare.CountLimiter|PIXI.prepare.TimeLimiter}
             */
            limiter: PIXI.prepare.CountLimiter | PIXI.prepare.TimeLimiter;
            /**
             * Reference to the renderer.
             * @type {PIXI.AbstractRenderer}
             * @protected
             */
            protected renderer: PIXI.AbstractRenderer;
            /**
             * The only real difference between CanvasPrepare and Prepare is what they pass
             * to upload hooks. That different parameter is stored here.
             * @type {PIXI.prepare.CanvasPrepare|PIXI.Renderer}
             * @protected
             */
            protected uploadHookHelper: PIXI.Renderer;
            /**
             * Upload all the textures and graphics to the GPU.
             *
             * @param {Function|PIXI.DisplayObject|PIXI.Container|PIXI.BaseTexture|PIXI.Texture|PIXI.Graphics|PIXI.Text} item -
             *        Either the container or display object to search for items to upload, the items to upload themselves,
             *        or the callback function, if items have been added using `prepare.add`.
             * @param {Function} [done] - Optional callback when all queued uploads have completed
             */
            upload(item: ((...params: any[]) => any) | PIXI.DisplayObject | PIXI.Container | PIXI.BaseTexture | PIXI.Texture | PIXI.Graphics | PIXI.Text, done?: (...params: any[]) => any): void;
            /**
             * Adds hooks for finding items.
             *
             * @param {Function} addHook - Function call that takes two parameters: `item:*, queue:Array`
             *          function must return `true` if it was able to add item to the queue.
             * @return {PIXI.prepare.BasePrepare} Instance of plugin for chaining.
             */
            registerFindHook(addHook: (...params: any[]) => any): PIXI.prepare.BasePrepare;
            /**
             * Adds hooks for uploading items.
             *
             * @param {Function} uploadHook - Function call that takes two parameters: `prepare:CanvasPrepare, item:*` and
             *          function must return `true` if it was able to handle upload of item.
             * @return {PIXI.prepare.BasePrepare} Instance of plugin for chaining.
             */
            registerUploadHook(uploadHook: (...params: any[]) => any): PIXI.prepare.BasePrepare;
            /**
             * Manually add an item to the uploading queue.
             *
             * @param {PIXI.DisplayObject|PIXI.Container|PIXI.BaseTexture|PIXI.Texture|PIXI.Graphics|PIXI.Text|*} item - Object to
             *        add to the queue
             * @return {PIXI.prepare.BasePrepare} Instance of plugin for chaining.
             */
            add(item: PIXI.DisplayObject | PIXI.Container | PIXI.BaseTexture | PIXI.Texture | PIXI.Graphics | PIXI.Text | any): PIXI.prepare.BasePrepare;
            /**
             * Destroys the plugin, don't use after this.
             *
             */
            destroy(): void;
        }
        /**
         * TimeLimiter limits the number of items handled by a {@link PIXI.BasePrepare} to a specified
         * number of milliseconds per frame.
         *
         * @class
         * @memberof PIXI.prepare
         */
        class TimeLimiter {
            constructor(maxMilliseconds: number);
            /**
             * Resets any counting properties to start fresh on a new frame.
             */
            beginFrame(): void;
            /**
             * Checks to see if another item can be uploaded. This should only be called once per item.
             * @return {boolean} If the item is allowed to be uploaded.
             */
            allowedToUpload(): boolean;
        }
    }
    /**
     * A Runner is a highly performant and simple alternative to signals. Best used in situations
     * where events are dispatched to many objects at high frequency (say every frame!)
     *
     *
     * like a signal..
     * ```
     * import { Runner } from '@pixi/runner';
     *
     * const myObject = {
     *     loaded: new Runner('loaded')
     * }
     *
     * const listener = {
     *     loaded: function(){
     *         // thin
     *     }
     * }
     *
     * myObject.update.add(listener);
     *
     * myObject.loaded.emit();
     * ```
     *
     * Or for handling calling the same function on many items
     * ```
     * import { Runner } from '@pixi/runner';
     *
     * const myGame = {
     *     update: new Runner('update')
     * }
     *
     * const gameObject = {
     *     update: function(time){
     *         // update my gamey state
     *     }
     * }
     *
     * myGame.update.add(gameObject1);
     *
     * myGame.update.emit(time);
     * ```
     * @class
     * @memberof PIXI
     */
    class Runner {
        constructor(name: string);
        /**
         * Dispatch/Broadcast Runner to all listeners added to the queue.
         * @param {...any} params - optional parameters to pass to each listener
         * @return {PIXI.Runner}
         */
        emit(...params: any[]): PIXI.Runner;
        /**
         * Add a listener to the Runner
         *
         * Runners do not need to have scope or functions passed to them.
         * All that is required is to pass the listening object and ensure that it has contains a function that has the same name
         * as the name provided to the Runner when it was created.
         *
         * Eg A listener passed to this Runner will require a 'complete' function.
         *
         * ```
         * import { Runner } from '@pixi/runner';
         *
         * const complete = new Runner('complete');
         * ```
         *
         * The scope used will be the object itself.
         *
         * @param {any} item - The object that will be listening.
         * @return {PIXI.Runner}
         */
        add(item: any): PIXI.Runner;
        /**
         * Remove a single listener from the dispatch queue.
         * @param {any} item - The listenr that you would like to remove.
         * @return {PIXI.Runner}
         */
        remove(item: any): PIXI.Runner;
        /**
         * Check to see if the listener is already in the Runner
         * @param {any} item - The listener that you would like to check.
         */
        contains(item: any): void;
        /**
         * Remove all listeners from the Runner
         * @return {PIXI.Runner}
         */
        removeAll(): PIXI.Runner;
        /**
         * Remove all references, don't use after this.
         */
        destroy(): void;
        /**
         * `true` if there are no this Runner contains no listeners
         *
         * @member {boolean}
         * @readonly
         */
        readonly empty: boolean;
        /**
         * The name of the runner.
         *
         * @member {string}
         * @readonly
         */
        readonly name: string;
        /**
         * Alias for `emit`
         * @memberof PIXI.Runner#
         * @method dispatch
         * @see PIXI.Runner#emit
         */
        dispatch(): void;
        /**
         * Alias for `emit`
         * @memberof PIXI.Runner#
         * @method run
         * @see PIXI.Runner#emit
         */
        run(): void;
    }
    /**
     * User's customizable globals for overriding the default PIXI settings, such
     * as a renderer's default resolution, framerate, float precision, etc.
     * @example
     * // Use the native window resolution as the default resolution
     * // will support high-density displays when rendering
     * PIXI.settings.RESOLUTION = window.devicePixelRatio;
     *
     * // Disable interpolation when scaling, will make texture be pixelated
     * PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
     * @namespace PIXI.settings
     */
    namespace settings {
        /**
         * The maximum support for using WebGL. If a device does not
         * support WebGL version, for instance WebGL 2, it will still
         * attempt to fallback support to WebGL 1. If you want to
         * explicitly remove feature support to target a more stable
         * baseline, prefer a lower environment.
         *
         * Due to {@link https://bugs.chromium.org/p/chromium/issues/detail?id=934823|bug in chromium}
         * we disable webgl2 by default for all non-apple mobile devices.
         *
         * @static
         * @name PREFER_ENV
         * @memberof PIXI.settings
         * @type {number}
         * @default PIXI.ENV.WEBGL2
         */
        var PREFER_ENV: number;
        /**
         * If set to `true`, Textures and BaseTexture objects stored
         * in the caches ({@link PIXI.utils.TextureCache TextureCache} and
         * {@link PIXI.utils.BaseTextureCache BaseTextureCache}) can *only* be
         * used when calling {@link PIXI.Texture.from Texture.from} or
         * {@link PIXI.BaseTexture.from BaseTexture.from}.
         * Otherwise, these `from` calls throw an exception. Using this property
         * can be useful if you want to enforce preloading all assets with
         * {@link PIXI.Loader Loader}.
         *
         * @static
         * @name STRICT_TEXTURE_CACHE
         * @memberof PIXI.settings
         * @type {boolean}
         * @default false
         */
        var STRICT_TEXTURE_CACHE: boolean;
        /**
         * Sets the default value for the container property 'sortableChildren'.
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @static
         * @constant
         * @name SORTABLE_CHILDREN
         * @memberof PIXI.settings
         * @type {boolean}
         * @default false
         */
        var SORTABLE_CHILDREN: boolean;
        /**
         * Default number of uploads per frame using prepare plugin.
         *
         * @static
         * @memberof PIXI.settings
         * @name UPLOADS_PER_FRAME
         * @type {number}
         * @default 4
         */
        var UPLOADS_PER_FRAME: number;
        /**
         * If set to true WebGL will attempt make textures mimpaped by default.
         * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
         *
         * @static
         * @name MIPMAP_TEXTURES
         * @memberof PIXI.settings
         * @type {PIXI.MIPMAP_MODES}
         * @default PIXI.MIPMAP_MODES.POW2
         */
        var MIPMAP_TEXTURES: PIXI.MIPMAP_MODES;
        /**
         * Default anisotropic filtering level of textures.
         * Usually from 0 to 16
         *
         * @static
         * @name ANISOTROPIC_LEVEL
         * @memberof PIXI.settings
         * @type {number}
         * @default 0
         */
        var ANISOTROPIC_LEVEL: number;
        /**
         * Default resolution / device pixel ratio of the renderer.
         *
         * @static
         * @name RESOLUTION
         * @memberof PIXI.settings
         * @type {number}
         * @default 1
         */
        var RESOLUTION: number;
        /**
         * Default filter resolution.
         *
         * @static
         * @name FILTER_RESOLUTION
         * @memberof PIXI.settings
         * @type {number}
         * @default 1
         */
        var FILTER_RESOLUTION: number;
        /**
         * The maximum textures that this device supports.
         *
         * @static
         * @name SPRITE_MAX_TEXTURES
         * @memberof PIXI.settings
         * @type {number}
         * @default 32
         */
        var SPRITE_MAX_TEXTURES: number;
        /**
         * The default sprite batch size.
         *
         * The default aims to balance desktop and mobile devices.
         *
         * @static
         * @name SPRITE_BATCH_SIZE
         * @memberof PIXI.settings
         * @type {number}
         * @default 4096
         */
        var SPRITE_BATCH_SIZE: number;
        /**
         * The default render options if none are supplied to {@link PIXI.Renderer}
         * or {@link PIXI.CanvasRenderer}.
         *
         * @static
         * @name RENDER_OPTIONS
         * @memberof PIXI.settings
         * @type {object}
         * @property {HTMLCanvasElement} view=null
         * @property {number} resolution=1
         * @property {boolean} antialias=false
         * @property {boolean} forceFXAA=false
         * @property {boolean} autoDensity=false
         * @property {boolean} transparent=false
         * @property {number} backgroundColor=0x000000
         * @property {boolean} clearBeforeRender=true
         * @property {boolean} preserveDrawingBuffer=false
         * @property {number} width=800
         * @property {number} height=600
         * @property {boolean} legacy=false
         */
        var RENDER_OPTIONS: {
            view: HTMLCanvasElement;
            resolution: number;
            antialias: boolean;
            forceFXAA: boolean;
            autoDensity: boolean;
            transparent: boolean;
            backgroundColor: number;
            clearBeforeRender: boolean;
            preserveDrawingBuffer: boolean;
            width: number;
            height: number;
            legacy: boolean;
        };
        /**
         * Default Garbage Collection mode.
         *
         * @static
         * @name GC_MODE
         * @memberof PIXI.settings
         * @type {PIXI.GC_MODES}
         * @default PIXI.GC_MODES.AUTO
         */
        var GC_MODE: PIXI.GC_MODES;
        /**
         * Default Garbage Collection max idle.
         *
         * @static
         * @name GC_MAX_IDLE
         * @memberof PIXI.settings
         * @type {number}
         * @default 3600
         */
        var GC_MAX_IDLE: number;
        /**
         * Default Garbage Collection maximum check count.
         *
         * @static
         * @name GC_MAX_CHECK_COUNT
         * @memberof PIXI.settings
         * @type {number}
         * @default 600
         */
        var GC_MAX_CHECK_COUNT: number;
        /**
         * Default wrap modes that are supported by pixi.
         *
         * @static
         * @name WRAP_MODE
         * @memberof PIXI.settings
         * @type {PIXI.WRAP_MODES}
         * @default PIXI.WRAP_MODES.CLAMP
         */
        var WRAP_MODE: PIXI.WRAP_MODES;
        /**
         * Default scale mode for textures.
         *
         * @static
         * @name SCALE_MODE
         * @memberof PIXI.settings
         * @type {PIXI.SCALE_MODES}
         * @default PIXI.SCALE_MODES.LINEAR
         */
        var SCALE_MODE: PIXI.SCALE_MODES;
        /**
         * Default specify float precision in vertex shader.
         *
         * @static
         * @name PRECISION_VERTEX
         * @memberof PIXI.settings
         * @type {PIXI.PRECISION}
         * @default PIXI.PRECISION.HIGH
         */
        var PRECISION_VERTEX: PIXI.PRECISION;
        /**
         * Default specify float precision in fragment shader.
         * iOS is best set at highp due to https://github.com/pixijs/pixi.js/issues/3742
         *
         * @static
         * @name PRECISION_FRAGMENT
         * @memberof PIXI.settings
         * @type {PIXI.PRECISION}
         * @default PIXI.PRECISION.MEDIUM
         */
        var PRECISION_FRAGMENT: PIXI.PRECISION;
        /**
         * Can we upload the same buffer in a single frame?
         *
         * @static
         * @name CAN_UPLOAD_SAME_BUFFER
         * @memberof PIXI.settings
         * @type {boolean}
         */
        var CAN_UPLOAD_SAME_BUFFER: boolean;
        /**
         * Enables bitmap creation before image load. This feature is experimental.
         *
         * @static
         * @name CREATE_IMAGE_BITMAP
         * @memberof PIXI.settings
         * @type {boolean}
         * @default false
         */
        var CREATE_IMAGE_BITMAP: boolean;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         *
         * @static
         * @constant
         * @memberof PIXI.settings
         * @type {boolean}
         * @default false
         */
        var ROUND_PIXELS: boolean;
        /**
         * Target frames per millisecond.
         *
         * @static
         * @name TARGET_FPMS
         * @memberof PIXI.settings
         * @type {number}
         * @default 0.06
         */
        var TARGET_FPMS: number;
        /**
         * The prefix that denotes a URL is for a retina asset.
         *
         * @static
         * @name RETINA_PREFIX
         * @memberof PIXI.settings
         * @type {RegExp}
         * @default /@([0-9\.]+)x/
         * @example `@2x`
         */
        var RETINA_PREFIX: RegExp;
        /**
         * Should the `failIfMajorPerformanceCaveat` flag be enabled as a context option used in the `isWebGLSupported` function.
         * For most scenarios this should be left as true, as otherwise the user may have a poor experience.
         * However, it can be useful to disable under certain scenarios, such as headless unit tests.
         *
         * @static
         * @name FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
         * @memberof PIXI.settings
         * @type {boolean}
         * @default true
         */
        var FAIL_IF_MAJOR_PERFORMANCE_CAVEAT: boolean;
    }
    /**
     * The Sprite object is the base for all textured objects that are rendered to the screen
    *
     * A sprite can be created directly from an image like this:
     *
     * ```js
     * let sprite = PIXI.Sprite.from('assets/image.png');
     * ```
     *
     * The more efficient way to create sprites is using a {@link PIXI.Spritesheet},
     * as swapping base textures when rendering to the screen is inefficient.
     *
     * ```js
     * PIXI.Loader.shared.add("assets/spritesheet.json").load(setup);
     *
     * function setup() {
     *   let sheet = PIXI.Loader.shared.resources["assets/spritesheet.json"].spritesheet;
     *   let sprite = new PIXI.Sprite(sheet.textures["image.png"]);
     *   ...
     * }
     * ```
     *
     * @class
     * @extends PIXI.Container
     * @memberof PIXI
     */
    class Sprite extends PIXI.Container {
        constructor(texture?: PIXI.Texture);
        /**
         * The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number} PIXI.Sprite#blendMode
         * @default PIXI.BLEND_MODES.NORMAL
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * The shader that will be used to render the sprite. Set to null to remove a current shader.
         *
         * @member {PIXI.Filter|PIXI.Shader} PIXI.Sprite#shader
         */
        shader: PIXI.Filter | PIXI.Shader;
        /**
         * Cached tint value so we can tell when the tint is changed.
         * Value is used for 2d CanvasRenderer.
         *
         * @protected
         * @member {number} PIXI.Sprite#_cachedTint
         * @default 0xFFFFFF
         */
        protected _cachedTint: number;
        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_render' & '_renderCanvas' methods.
         *
         * @member {string} PIXI.Sprite#pluginName
         * @default 'batch'
         */
        pluginName: string;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.Sprite#isSprite
         */
        isSprite: boolean;
        /**
         * calculates worldTransform * vertices, store it in vertexData
         */
        calculateVertices(): void;
        /**
         * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
         * This is used to ensure that the true width and height of a trimmed texture is respected
         */
        calculateTrimmedVertices(): void;
        /**
         *
         * Renders the object using the WebGL renderer
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The webgl renderer to use.
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * Updates the bounds of the sprite.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Gets the local bounds of the sprite object.
         *
         * @param {PIXI.Rectangle} [rect] - The output rectangle.
         * @return {PIXI.Rectangle} The bounds.
         */
        getLocalBounds(rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Tests if a point is inside this sprite
         *
         * @param {PIXI.Point} point - the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: PIXI.Point): boolean;
        /**
         * Destroys this sprite and optionally its texture and children
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *      method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
         * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * Helper function that creates a new sprite based on the source you provide.
         * The source can be - frame id, image url, video url, canvas element, video element, base texture
         *
         * @static
         * @param {number|string|PIXI.Texture|HTMLCanvasElement|HTMLVideoElement} source Source to create texture from
         * @param {object} [options] See {@link PIXI.BaseTexture}'s constructor for options.
         * @return {PIXI.Sprite} The newly created sprite
         */
        static from(source: number | string | PIXI.Texture | HTMLCanvasElement | HTMLVideoElement, options?: any): PIXI.Sprite;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The width of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * The anchor sets the origin point of the text. The default value is taken from the {@link PIXI.Texture|Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the text's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         *
         * @member {PIXI.ObservablePoint}
         */
        anchor: PIXI.ObservablePoint;
        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the sprite is using
         *
         * @member {PIXI.Texture}
         */
        texture: PIXI.Texture;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    module AnimatedSprite {
        /**
         * @memberof PIXI.AnimatedSprite
         * @typedef {object} FrameObject
         * @type {object}
         * @property {PIXI.Texture} texture - The {@link PIXI.Texture} of the frame
         * @property {number} time - the duration of the frame in ms
         */
        type FrameObject = {
            texture: PIXI.Texture;
            time: number;
        };
    }
    /**
     * An AnimatedSprite is a simple way to display an animation depicted by a list of textures.
     *
     * ```js
     * let alienImages = ["image_sequence_01.png","image_sequence_02.png","image_sequence_03.png","image_sequence_04.png"];
     * let textureArray = [];
     *
     * for (let i=0; i < 4; i++)
     * {
     *      let texture = PIXI.Texture.from(alienImages[i]);
     *      textureArray.push(texture);
     * };
     *
     * let animatedSprite = new PIXI.AnimatedSprite(textureArray);
     * ```
     *
     * The more efficient and simpler way to create an animated sprite is using a {@link PIXI.Spritesheet}
     * containing the animation definitions:
     *
     * ```js
     * PIXI.Loader.shared.add("assets/spritesheet.json").load(setup);
     *
     * function setup() {
     *   let sheet = PIXI.Loader.shared.resources["assets/spritesheet.json"].spritesheet;
     *   animatedSprite = new PIXI.AnimatedSprite(sheet.animations["image_sequence"]);
     *   ...
     * }
     * ```
     *
     * @class
     * @extends PIXI.Sprite
     * @memberof PIXI
     */
    class AnimatedSprite extends PIXI.Sprite {
        constructor(textures: PIXI.Texture[] | PIXI.AnimatedSprite.FrameObject[], autoUpdate?: boolean);
        /**
         * The speed that the AnimatedSprite will play at. Higher is faster, lower is slower.
         *
         * @member {number} PIXI.AnimatedSprite#animationSpeed
         * @default 1
         */
        animationSpeed: number;
        /**
         * Whether or not the animate sprite repeats after playing.
         *
         * @member {boolean} PIXI.AnimatedSprite#loop
         * @default true
         */
        loop: boolean;
        /**
         * Update anchor to [Texture's defaultAnchor]{@link PIXI.Texture#defaultAnchor} when frame changes.
         *
         * Useful with [sprite sheet animations]{@link PIXI.Spritesheet#animations} created with tools.
         * Changing anchor for each frame allows to pin sprite origin to certain moving feature
         * of the frame (e.g. left foot).
         *
         * Note: Enabling this will override any previously set `anchor` on each frame change.
         *
         * @member {boolean} PIXI.AnimatedSprite#updateAnchor
         * @default false
         */
        updateAnchor: boolean;
        /**
         * Function to call when an AnimatedSprite finishes playing.
         *
         * @member {Function} PIXI.AnimatedSprite#onComplete
         */
        onComplete: (...params: any[]) => any;
        /**
         * Function to call when an AnimatedSprite changes which texture is being rendered.
         *
         * @member {Function} PIXI.AnimatedSprite#onFrameChange
         */
        onFrameChange: (...params: any[]) => any;
        /**
         * Function to call when `loop` is true, and an AnimatedSprite is played and loops around to start again.
         *
         * @member {Function} PIXI.AnimatedSprite#onLoop
         */
        onLoop: (...params: any[]) => any;
        /**
         * Indicates if the AnimatedSprite is currently playing.
         *
         * @member {boolean} PIXI.AnimatedSprite#playing
         * @readonly
         */
        readonly playing: boolean;
        /**
         * Stops the AnimatedSprite.
         *
         */
        stop(): void;
        /**
         * Plays the AnimatedSprite.
         *
         */
        play(): void;
        /**
         * Stops the AnimatedSprite and goes to a specific frame.
         *
         * @param {number} frameNumber - Frame index to stop at.
         */
        gotoAndStop(frameNumber: number): void;
        /**
         * Goes to a specific frame and begins playing the AnimatedSprite.
         *
         * @param {number} frameNumber - Frame index to start at.
         */
        gotoAndPlay(frameNumber: number): void;
        /**
         * Stops the AnimatedSprite and destroys it.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value.
         * @param {boolean} [options.children=false] - If set to true, all the children will have their destroy
         *      method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well.
         * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well.
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * A short hand way of creating an AnimatedSprite from an array of frame ids.
         *
         * @static
         * @param {string[]} frames - The array of frames ids the AnimatedSprite will use as its texture frames.
         * @return {AnimatedSprite} The new animated sprite with the specified frames.
         */
        static fromFrames(frames: string[]): AnimatedSprite;
        /**
         * A short hand way of creating an AnimatedSprite from an array of image ids.
         *
         * @static
         * @param {string[]} images - The array of image urls the AnimatedSprite will use as its texture frames.
         * @return {AnimatedSprite} The new animate sprite with the specified images as frames.
         */
        static fromImages(images: string[]): AnimatedSprite;
        /**
         * The total number of frames in the AnimatedSprite. This is the same as number of textures
         * assigned to the AnimatedSprite.
         *
         * @readonly
         * @member {number}
         * @default 0
         */
        readonly totalFrames: number;
        /**
         * The array of textures used for this AnimatedSprite.
         *
         * @member {PIXI.Texture[]}
         */
        textures: PIXI.Texture[];
        /**
         * The AnimatedSprites current frame index.
         *
         * @member {number}
         * @readonly
         */
        readonly currentFrame: number;
        /**
         * The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number} PIXI.Sprite#blendMode
         * @default PIXI.BLEND_MODES.NORMAL
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * The shader that will be used to render the sprite. Set to null to remove a current shader.
         *
         * @member {PIXI.Filter|PIXI.Shader} PIXI.Sprite#shader
         */
        shader: PIXI.Filter | PIXI.Shader;
        /**
         * Cached tint value so we can tell when the tint is changed.
         * Value is used for 2d CanvasRenderer.
         *
         * @protected
         * @member {number} PIXI.Sprite#_cachedTint
         * @default 0xFFFFFF
         */
        protected _cachedTint: number;
        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_render' & '_renderCanvas' methods.
         *
         * @member {string} PIXI.Sprite#pluginName
         * @default 'batch'
         */
        pluginName: string;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.Sprite#isSprite
         */
        isSprite: boolean;
        /**
         * calculates worldTransform * vertices, store it in vertexData
         */
        calculateVertices(): void;
        /**
         * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
         * This is used to ensure that the true width and height of a trimmed texture is respected
         */
        calculateTrimmedVertices(): void;
        /**
         *
         * Renders the object using the WebGL renderer
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The webgl renderer to use.
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * Updates the bounds of the sprite.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Gets the local bounds of the sprite object.
         *
         * @param {PIXI.Rectangle} [rect] - The output rectangle.
         * @return {PIXI.Rectangle} The bounds.
         */
        getLocalBounds(rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Tests if a point is inside this sprite
         *
         * @param {PIXI.Point} point - the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: PIXI.Point): boolean;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The width of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * The anchor sets the origin point of the text. The default value is taken from the {@link PIXI.Texture|Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the text's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         *
         * @member {PIXI.ObservablePoint}
         */
        anchor: PIXI.ObservablePoint;
        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the sprite is using
         *
         * @member {PIXI.Texture}
         */
        texture: PIXI.Texture;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * A tiling sprite is a fast way of rendering a tiling image
     *
     * @class
     * @extends PIXI.Sprite
     * @memberof PIXI
     */
    class TilingSprite extends PIXI.Sprite {
        static from(source: number | string | PIXI.Texture | HTMLCanvasElement | HTMLVideoElement, options?: any): PIXI.Sprite;
        static fromFrame(): PIXI.Sprite;
        static fromImage(): PIXI.Sprite;
        constructor(texture: PIXI.Texture, width?: number, height?: number);
        /**
         * Tile transform
         *
         * @member {PIXI.Transform} PIXI.TilingSprite#tileTransform
         */
        tileTransform: PIXI.Transform;
        /**
         * matrix that is applied to UV to get the coords in Texture normalized space to coords in BaseTexture space
         *
         * @member {PIXI.TextureMatrix} PIXI.TilingSprite#uvMatrix
         */
        uvMatrix: PIXI.TextureMatrix;
        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_render' method.
         *
         * @member {string} PIXI.TilingSprite#pluginName
         * @default 'tilingSprite'
         */
        pluginName: string;
        /**
         * Whether or not anchor affects uvs
         *
         * @member {boolean} PIXI.TilingSprite#uvRespectAnchor
         * @default false
         */
        uvRespectAnchor: boolean;
        /**
         * Changes frame clamping in corresponding textureTransform, shortcut
         * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
         *
         * @default 0.5
         * @member {number}
         */
        clampMargin: number;
        /**
         * The scaling of the image that is being tiled
         *
         * @member {PIXI.ObservablePoint}
         */
        tileScale: PIXI.ObservablePoint;
        /**
         * The offset of the image that is being tiled
         *
         * @member {PIXI.ObservablePoint}
         */
        tilePosition: PIXI.ObservablePoint;
        /**
         * Renders the object using the WebGL renderer
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * Updates the bounds of the tiling sprite.
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Gets the local bounds of the sprite object.
         *
         * @param {PIXI.Rectangle} rect - The output rectangle.
         * @return {PIXI.Rectangle} The bounds.
         */
        getLocalBounds(rect: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Checks if a point is inside this tiling sprite.
         *
         * @param {PIXI.Point} point - the point to check
         * @return {boolean} Whether or not the sprite contains the point.
         */
        containsPoint(point: PIXI.Point): boolean;
        /**
         * Destroys this sprite and optionally its texture and children
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *      method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
         * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * Helper function that creates a new tiling sprite based on the source you provide.
         * The source can be - frame id, image url, video url, canvas element, video element, base texture
         *
         * @static
         * @param {number|string|PIXI.Texture|HTMLCanvasElement|HTMLVideoElement} source - Source to create texture from
         * @param {number} width - the width of the tiling sprite
         * @param {number} height - the height of the tiling sprite
         * @return {PIXI.TilingSprite} The newly created texture
         */
        static from(source: number | string | PIXI.Texture | HTMLCanvasElement | HTMLVideoElement, width: number, height: number): PIXI.TilingSprite;
        /**
         * Helper function that creates a tiling sprite that will use a texture from the TextureCache based on the frameId
         * The frame ids are created when a Texture packer file has been loaded
         *
         * @static
         * @param {string} frameId - The frame Id of the texture in the cache
         * @param {number} width - the width of the tiling sprite
         * @param {number} height - the height of the tiling sprite
         * @return {PIXI.TilingSprite} A new TilingSprite using a texture from the texture cache matching the frameId
         */
        static fromFrame(frameId: string, width: number, height: number): PIXI.TilingSprite;
        /**
         * Helper function that creates a sprite that will contain a texture based on an image url
         * If the image is not in the texture cache it will be loaded
         *
         * @static
         * @param {string} imageId - The image url of the texture
         * @param {number} width - the width of the tiling sprite
         * @param {number} height - the height of the tiling sprite
         * @param {Object} [options] - See {@link PIXI.BaseTexture}'s constructor for options.
         * @return {PIXI.TilingSprite} A new TilingSprite using a texture from the texture cache matching the image id
         */
        static fromImage(imageId: string, width: number, height: number, options?: any): PIXI.TilingSprite;
        /**
         * The width of the sprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the TilingSprite, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number} PIXI.Sprite#blendMode
         * @default PIXI.BLEND_MODES.NORMAL
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * The shader that will be used to render the sprite. Set to null to remove a current shader.
         *
         * @member {PIXI.Filter|PIXI.Shader} PIXI.Sprite#shader
         */
        shader: PIXI.Filter | PIXI.Shader;
        /**
         * Cached tint value so we can tell when the tint is changed.
         * Value is used for 2d CanvasRenderer.
         *
         * @protected
         * @member {number} PIXI.Sprite#_cachedTint
         * @default 0xFFFFFF
         */
        protected _cachedTint: number;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.Sprite#isSprite
         */
        isSprite: boolean;
        /**
         * calculates worldTransform * vertices, store it in vertexData
         */
        calculateVertices(): void;
        /**
         * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
         * This is used to ensure that the true width and height of a trimmed texture is respected
         */
        calculateTrimmedVertices(): void;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The anchor sets the origin point of the text. The default value is taken from the {@link PIXI.Texture|Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the text's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         *
         * @member {PIXI.ObservablePoint}
         */
        anchor: PIXI.ObservablePoint;
        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the sprite is using
         *
         * @member {PIXI.Texture}
         */
        texture: PIXI.Texture;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * WebGL renderer plugin for tiling sprites
     *
     * @class
     * @memberof PIXI
     * @extends PIXI.ObjectRenderer
     */
    class TilingSpriteRenderer extends PIXI.ObjectRenderer {
        constructor(renderer: PIXI.Renderer);
        /**
         *
         * @param {PIXI.TilingSprite} ts tilingSprite to be rendered
         */
        render(ts: PIXI.TilingSprite): void;
        /**
         * The renderer this manager works for.
         *
         * @member {PIXI.Renderer} PIXI.ObjectRenderer#renderer
         */
        renderer: PIXI.Renderer;
        /**
         * Stub method that should be used to empty the current
         * batch by rendering objects now.
         */
        flush(): void;
        /**
         * Generic destruction method that frees all resources. This
         * should be called by subclasses.
         */
        destroy(): void;
        /**
         * Stub method that initializes any state required before
         * rendering starts. It is different from the `prerender`
         * signal, which occurs every frame, in that it is called
         * whenever an object requests _this_ renderer specifically.
         */
        start(): void;
        /**
         * Stops the renderer. It should free up any state and
         * become dormant.
         */
        stop(): void;
    }
    /**
     * Utility class for maintaining reference to a collection
     * of Textures on a single Spritesheet.
     *
     * To access a sprite sheet from your code pass its JSON data file to Pixi's loader:
     *
     * ```js
     * PIXI.Loader.shared.add("images/spritesheet.json").load(setup);
     *
     * function setup() {
     *   let sheet = PIXI.Loader.shared.resources["images/spritesheet.json"].spritesheet;
     *   ...
     * }
     * ```
     * With the `sheet.textures` you can create Sprite objects,`sheet.animations` can be used to create an AnimatedSprite.
     *
     * Sprite sheets can be packed using tools like {@link https://codeandweb.com/texturepacker|TexturePacker},
     * {@link https://renderhjs.net/shoebox/|Shoebox} or {@link https://github.com/krzysztof-o/spritesheet.js|Spritesheet.js}.
     * Default anchor points (see {@link PIXI.Texture#defaultAnchor}) and grouping of animation sprites are currently only
     * supported by TexturePacker.
     *
     * @class
     * @memberof PIXI
     */
    class Spritesheet {
        constructor(baseTexture: PIXI.BaseTexture, data: any, resolutionFilename?: string);
        /**
         * The maximum number of Textures to build per process.
         *
         * @type {number}
         * @default 1000
         */
        static BATCH_SIZE: number;
        /**
         * Reference to ths source texture
         * @type {PIXI.BaseTexture}
         */
        baseTexture: PIXI.BaseTexture;
        /**
         * A map containing all textures of the sprite sheet.
         * Can be used to create a {@link PIXI.Sprite|Sprite}:
         * ```js
         * new PIXI.Sprite(sheet.textures["image.png"]);
         * ```
         * @member {Object} PIXI.Spritesheet#textures
         */
        textures: any;
        /**
         * A map containing the textures for each animation.
         * Can be used to create an {@link PIXI.AnimatedSprite|AnimatedSprite}:
         * ```js
         * new PIXI.AnimatedSprite(sheet.animations["anim_name"])
         * ```
         * @member {Object} PIXI.Spritesheet#animations
         */
        animations: any;
        /**
         * Reference to the original JSON data.
         * @type {Object}
         */
        data: any;
        /**
         * The resolution of the spritesheet.
         * @type {number}
         */
        resolution: number;
        /**
         * Parser spritesheet from loaded data. This is done asynchronously
         * to prevent creating too many Texture within a single process.
         *
         * @param {Function} callback - Callback when complete returns
         *        a map of the Textures for this spritesheet.
         */
        parse(callback: (...params: any[]) => any): void;
        /**
         * Destroy Spritesheet and don't use after this.
         *
         * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
         */
        destroy(destroyBase?: boolean): void;
    }
    interface SpritesheetLoader extends PIXI.ILoaderPlugin {
    }
    /**
     * {@link PIXI.Loader Loader} middleware for loading texture atlases that have been created with
     * TexturePacker or similar JSON-based spritesheet.
     *
     * This middleware automatically generates Texture resources.
     *
     * @class
     * @memberof PIXI
     * @implements PIXI.ILoaderPlugin
     */
    class SpritesheetLoader implements PIXI.ILoaderPlugin {
        /**
         * Called after a resource is loaded.
         * @see PIXI.Loader.loaderMiddleware
         * @param {PIXI.LoaderResource} resource
         * @param {function} next
         */
        static use(resource: PIXI.LoaderResource, next: (...params: any[]) => any): void;
        /**
         * Get the spritesheets root path
         * @param {PIXI.LoaderResource} resource - Resource to check path
         * @param {string} baseUrl - Base root url
         */
        static getResourcePath(resource: PIXI.LoaderResource, baseUrl: string): void;
    }
    /**
     * A Text Object will create a line or multiple lines of text.
     *
     * The text is created using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).
     *
     * The primary advantage of this class over BitmapText is that you have great control over the style of the next,
     * which you can change at runtime.
     *
     * The primary disadvantages is that each piece of text has it's own texture, which can use more memory.
     * When text changes, this texture has to be re-generated and re-uploaded to the GPU, taking up time.
     *
     * To split a line you can use '\n' in your text string, or, on the `style` object,
     * change its `wordWrap` property to true and and give the `wordWrapWidth` property a value.
     *
     * A Text can be created directly from a string and a style object,
     * which can be generated [here](https://pixijs.io/pixi-text-style).
     *
     * ```js
     * let text = new PIXI.Text('This is a PixiJS text',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
     * ```
     *
     * @class
     * @extends PIXI.Sprite
     * @memberof PIXI
     */
    class Text extends PIXI.Sprite {
        constructor(text: string, style?: any | PIXI.TextStyle, canvas?: HTMLCanvasElement);
        /**
         * The canvas element that everything is drawn to
         *
         * @member {HTMLCanvasElement} PIXI.Text#canvas
         */
        canvas: HTMLCanvasElement;
        /**
         * The canvas 2d context that everything is drawn with
         * @member {CanvasRenderingContext2D} PIXI.Text#context
         */
        context: CanvasRenderingContext2D;
        /**
         * The resolution / device pixel ratio of the canvas.
         * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
         * @member {number} PIXI.Text#_resolution
         * @default 1
         */
        _resolution: number;
        /**
         * Gets the local bounds of the text object.
         *
         * @param {PIXI.Rectangle} rect - The output rectangle.
         * @return {PIXI.Rectangle} The bounds.
         */
        getLocalBounds(rect: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * calculates the bounds of the Text as a rectangle. The bounds calculation takes the worldTransform into account.
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Destroys this text object.
         * Note* Unlike a Sprite, a Text object will automatically destroy its baseTexture and texture as
         * the majority of the time the texture will not be shared with any other Sprites.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their
         *  destroy method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=true] - Should it destroy the current texture of the sprite as well
         * @param {boolean} [options.baseTexture=true] - Should it destroy the base texture of the sprite as well
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * The width of the Text, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Text, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Set the style of the text. Set up an event listener to listen for changes on the style
         * object and mark the text as dirty.
         *
         * @member {object|PIXI.TextStyle}
         */
        style: any | PIXI.TextStyle;
        /**
         * Set the copy for the text object. To split a line you can use '\n'.
         *
         * @member {string}
         */
        text: string;
        /**
         * The resolution / device pixel ratio of the canvas.
         * This is set to automatically match the renderer resolution by default, but can be overridden by setting manually.
         * @member {number}
         * @default 1
         */
        resolution: number;
        /**
         * The blend mode to be applied to the sprite. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
         *
         * @member {number} PIXI.Sprite#blendMode
         * @default PIXI.BLEND_MODES.NORMAL
         * @see PIXI.BLEND_MODES
         */
        blendMode: number;
        /**
         * The shader that will be used to render the sprite. Set to null to remove a current shader.
         *
         * @member {PIXI.Filter|PIXI.Shader} PIXI.Sprite#shader
         */
        shader: PIXI.Filter | PIXI.Shader;
        /**
         * Cached tint value so we can tell when the tint is changed.
         * Value is used for 2d CanvasRenderer.
         *
         * @protected
         * @member {number} PIXI.Sprite#_cachedTint
         * @default 0xFFFFFF
         */
        protected _cachedTint: number;
        /**
         * Plugin that is responsible for rendering this element.
         * Allows to customize the rendering process without overriding '_render' & '_renderCanvas' methods.
         *
         * @member {string} PIXI.Sprite#pluginName
         * @default 'batch'
         */
        pluginName: string;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.Sprite#isSprite
         */
        isSprite: boolean;
        /**
         * calculates worldTransform * vertices, store it in vertexData
         */
        calculateVertices(): void;
        /**
         * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
         * This is used to ensure that the true width and height of a trimmed texture is respected
         */
        calculateTrimmedVertices(): void;
        /**
         * Tests if a point is inside this sprite
         *
         * @param {PIXI.Point} point - the point to test
         * @return {boolean} the result of the test
         */
        containsPoint(point: PIXI.Point): boolean;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         *
         * @member {boolean}
         * @default false
         */
        roundPixels: boolean;
        /**
         * The anchor sets the origin point of the text. The default value is taken from the {@link PIXI.Texture|Texture}
         * and passed to the constructor.
         *
         * The default is `(0,0)`, this means the text's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
         *
         * If you pass only single parameter, it will set both x and y to the same value as shown in the example below.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.anchor.set(0.5); // This will set the origin to center. (0.5) is same as (0.5, 0.5).
         *
         * @member {PIXI.ObservablePoint}
         */
        anchor: PIXI.ObservablePoint;
        /**
         * The tint applied to the sprite. This is a hex value.
         * A value of 0xFFFFFF will remove any tint effect.
         *
         * @member {number}
         * @default 0xFFFFFF
         */
        tint: number;
        /**
         * The texture that the sprite is using
         *
         * @member {PIXI.Texture}
         */
        texture: PIXI.Texture;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Updates the transform on all children of this container for rendering
         */
        updateTransform(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * A number, or a string containing a number.
     *
     * @memberof PIXI
     * @typedef IFontMetrics
     * @property {number} ascent - Font ascent
     * @property {number} descent - Font descent
     * @property {number} fontSize - Font size
     */
    type IFontMetrics = {
        ascent: number;
        descent: number;
        fontSize: number;
    };
    /**
     * The TextMetrics object represents the measurement of a block of text with a specified style.
     *
     * ```js
     * let style = new PIXI.TextStyle({fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'})
     * let textMetrics = PIXI.TextMetrics.measureText('Your text', style)
     * ```
     *
     * @class
     * @memberof PIXI
     */
    class TextMetrics {
        constructor(text: string, style: PIXI.TextStyle, width: number, height: number, lines: string[], lineWidths: number[], lineHeight: number, maxLineWidth: number, fontProperties: any);
        /**
         * The text that was measured
         *
         * @member {string} PIXI.TextMetrics#text
         */
        text: string;
        /**
         * The style that was measured
         *
         * @member {PIXI.TextStyle} PIXI.TextMetrics#style
         */
        style: PIXI.TextStyle;
        /**
         * The measured width of the text
         *
         * @member {number} PIXI.TextMetrics#width
         */
        width: number;
        /**
         * The measured height of the text
         *
         * @member {number} PIXI.TextMetrics#height
         */
        height: number;
        /**
         * An array of lines of the text broken by new lines and wrapping is specified in style
         *
         * @member {string[]} PIXI.TextMetrics#lines
         */
        lines: string[];
        /**
         * An array of the line widths for each line matched to `lines`
         *
         * @member {number[]} PIXI.TextMetrics#lineWidths
         */
        lineWidths: number[];
        /**
         * The measured line height for this style
         *
         * @member {number} PIXI.TextMetrics#lineHeight
         */
        lineHeight: number;
        /**
         * The maximum line width for all measured lines
         *
         * @member {number} PIXI.TextMetrics#maxLineWidth
         */
        maxLineWidth: number;
        /**
         * The font properties object from TextMetrics.measureFont
         *
         * @member {PIXI.IFontMetrics} PIXI.TextMetrics#fontProperties
         */
        fontProperties: PIXI.IFontMetrics;
        /**
         * Measures the supplied string of text and returns a Rectangle.
         *
         * @param {string} text - the text to measure.
         * @param {PIXI.TextStyle} style - the text style to use for measuring
         * @param {boolean} [wordWrap] - optional override for if word-wrap should be applied to the text.
         * @param {HTMLCanvasElement} [canvas] - optional specification of the canvas to use for measuring.
         * @return {PIXI.TextMetrics} measured width and height of the text.
         */
        static measureText(text: string, style: PIXI.TextStyle, wordWrap?: boolean, canvas?: HTMLCanvasElement): PIXI.TextMetrics;
        /**
         * Calculates the ascent, descent and fontSize of a given font-style
         *
         * @static
         * @param {string} font - String representing the style of the font
         * @return {PIXI.IFontMetrics} Font properties object
         */
        static measureFont(font: string): PIXI.IFontMetrics;
        /**
         * Clear font metrics in metrics cache.
         *
         * @static
         * @param {string} [font] - font name. If font name not set then clear cache for all fonts.
         */
        static clearMetrics(font?: string): void;
        /**
         * String used for calculate font metrics.
         * These characters are all tall to help calculate the height required for text.
         *
         * @static
         * @memberof PIXI.TextMetrics
         * @name METRICS_STRING
         * @type {string}
         * @default |ÉqÅ
         */
        static METRICS_STRING: string;
        /**
         * Baseline symbol for calculate font metrics.
         *
         * @static
         * @memberof PIXI.TextMetrics
         * @name BASELINE_SYMBOL
         * @type {string}
         * @default M
         */
        static BASELINE_SYMBOL: string;
        /**
         * Baseline multiplier for calculate font metrics.
         *
         * @static
         * @memberof PIXI.TextMetrics
         * @name BASELINE_MULTIPLIER
         * @type {number}
         * @default 1.4
         */
        static BASELINE_MULTIPLIER: number;
    }
    /**
     * A TextStyle Object contains information to decorate a Text objects.
     *
     * An instance can be shared between multiple Text objects; then changing the style will update all text objects using it.
     *
     * A tool can be used to generate a text style [here](https://pixijs.io/pixi-text-style).
     *
     * @class
     * @memberof PIXI
     */
    class TextStyle {
        constructor(style?: {
            align?: string;
            breakWords?: boolean;
            dropShadow?: boolean;
            dropShadowAlpha?: number;
            dropShadowAngle?: number;
            dropShadowBlur?: number;
            dropShadowColor?: string | number;
            dropShadowDistance?: number;
            fill?: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
            fillGradientType?: number;
            fillGradientStops?: number[];
            fontFamily?: string | string[];
            fontSize?: number | string;
            fontStyle?: string;
            fontVariant?: string;
            fontWeight?: string;
            leading?: number;
            letterSpacing?: number;
            lineHeight?: number;
            lineJoin?: string;
            miterLimit?: number;
            padding?: number;
            stroke?: string | number;
            strokeThickness?: number;
            trim?: boolean;
            textBaseline?: string;
            whiteSpace?: string;
            wordWrap?: boolean;
            wordWrapWidth?: number;
        });
        /**
         * Creates a new TextStyle object with the same values as this one.
         * Note that the only the properties of the object are cloned.
         *
         * @return {PIXI.TextStyle} New cloned TextStyle object
         */
        clone(): PIXI.TextStyle;
        /**
         * Resets all properties to the defaults specified in TextStyle.prototype._default
         */
        reset(): void;
        /**
         * Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
         *
         * @member {string}
         */
        align: string;
        /**
         * Indicates if lines can be wrapped within words, it needs wordWrap to be set to true
         *
         * @member {boolean}
         */
        breakWords: boolean;
        /**
         * Set a drop shadow for the text
         *
         * @member {boolean}
         */
        dropShadow: boolean;
        /**
         * Set alpha for the drop shadow
         *
         * @member {number}
         */
        dropShadowAlpha: number;
        /**
         * Set a angle of the drop shadow
         *
         * @member {number}
         */
        dropShadowAngle: number;
        /**
         * Set a shadow blur radius
         *
         * @member {number}
         */
        dropShadowBlur: number;
        /**
         * A fill style to be used on the dropshadow e.g 'red', '#00FF00'
         *
         * @member {string|number}
         */
        dropShadowColor: string | number;
        /**
         * Set a distance of the drop shadow
         *
         * @member {number}
         */
        dropShadowDistance: number;
        /**
         * A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'.
         * Can be an array to create a gradient eg ['#000000','#FFFFFF']
         * {@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
         *
         * @member {string|string[]|number|number[]|CanvasGradient|CanvasPattern}
         */
        fill: string | string[] | number | number[] | CanvasGradient | CanvasPattern;
        /**
         * If fill is an array of colours to create a gradient, this can change the type/direction of the gradient.
         * See {@link PIXI.TEXT_GRADIENT}
         *
         * @member {number}
         */
        fillGradientType: number;
        /**
         * If fill is an array of colours to create a gradient, this array can set the stop points
         * (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
         *
         * @member {number[]}
         */
        fillGradientStops: number[];
        /**
         * The font family
         *
         * @member {string|string[]}
         */
        fontFamily: string | string[];
        /**
         * The font size
         * (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
         *
         * @member {number|string}
         */
        fontSize: number | string;
        /**
         * The font style
         * ('normal', 'italic' or 'oblique')
         *
         * @member {string}
         */
        fontStyle: string;
        /**
         * The font variant
         * ('normal' or 'small-caps')
         *
         * @member {string}
         */
        fontVariant: string;
        /**
         * The font weight
         * ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')
         *
         * @member {string}
         */
        fontWeight: string;
        /**
         * The amount of spacing between letters, default is 0
         *
         * @member {number}
         */
        letterSpacing: number;
        /**
         * The line height, a number that represents the vertical space that a letter uses
         *
         * @member {number}
         */
        lineHeight: number;
        /**
         * The space between lines
         *
         * @member {number}
         */
        leading: number;
        /**
         * The lineJoin property sets the type of corner created, it can resolve spiked text issues.
         * Default is 'miter' (creates a sharp corner).
         *
         * @member {string}
         */
        lineJoin: string;
        /**
         * The miter limit to use when using the 'miter' lineJoin mode
         * This can reduce or increase the spikiness of rendered text.
         *
         * @member {number}
         */
        miterLimit: number;
        /**
         * Occasionally some fonts are cropped. Adding some padding will prevent this from happening
         * by adding padding to all sides of the text.
         *
         * @member {number}
         */
        padding: number;
        /**
         * A canvas fillstyle that will be used on the text stroke
         * e.g 'blue', '#FCFF00'
         *
         * @member {string|number}
         */
        stroke: string | number;
        /**
         * A number that represents the thickness of the stroke.
         * Default is 0 (no stroke)
         *
         * @member {number}
         */
        strokeThickness: number;
        /**
         * The baseline of the text that is rendered.
         *
         * @member {string}
         */
        textBaseline: string;
        /**
         * Trim transparent borders
         *
         * @member {boolean}
         */
        trim: boolean;
        /**
         * How newlines and spaces should be handled.
         * Default is 'pre' (preserve, preserve).
         *
         *  value       | New lines     |   Spaces
         *  ---         | ---           |   ---
         * 'normal'     | Collapse      |   Collapse
         * 'pre'        | Preserve      |   Preserve
         * 'pre-line'   | Preserve      |   Collapse
         *
         * @member {string}
         */
        whiteSpace: string;
        /**
         * Indicates if word wrap should be used
         *
         * @member {boolean}
         */
        wordWrap: boolean;
        /**
         * The width at which text will wrap, it needs wordWrap to be set to true
         *
         * @member {number}
         */
        wordWrapWidth: number;
        /**
         * Generates a font style string to use for `TextMetrics.measureFont()`.
         *
         * @return {string} Font style string, for passing to `TextMetrics.measureFont()`
         */
        toFontString(): string;
    }
    /**
     * Constants that define the type of gradient on text.
     *
     * @static
     * @constant
     * @name TEXT_GRADIENT
     * @memberof PIXI
     * @type {object}
     * @property {number} LINEAR_VERTICAL Vertical gradient
     * @property {number} LINEAR_HORIZONTAL Linear gradient
     */
    var TEXT_GRADIENT: {
        LINEAR_VERTICAL: number;
        LINEAR_HORIZONTAL: number;
    };
    interface BitmapFontLoader extends PIXI.ILoaderPlugin {
    }
    /**
     * {@link PIXI.Loader Loader} middleware for loading
     * bitmap-based fonts suitable for using with {@link PIXI.BitmapText}.
     * @class
     * @memberof PIXI
     * @implements PIXI.ILoaderPlugin
     */
    class BitmapFontLoader implements PIXI.ILoaderPlugin {
        /**
         * Register a BitmapText font from loader resource.
         *
         * @param {PIXI.LoaderResource} resource - Loader resource.
         * @param {PIXI.Texture} texture - Reference to texture.
         */
        static parse(resource: PIXI.LoaderResource, texture: PIXI.Texture): void;
        /**
         * Called when the plugin is installed.
         *
         * @see PIXI.Loader.registerPlugin
         */
        static add(): void;
        /**
         * Called after a resource is loaded.
         * @see PIXI.Loader.loaderMiddleware
         * @param {PIXI.LoaderResource} resource
         * @param {function} next
         */
        static use(resource: PIXI.LoaderResource, next: (...params: any[]) => any): void;
    }
    /**
     * A BitmapText object will create a line or multiple lines of text using bitmap font.
     *
     * The primary advantage of this class over Text is that all of your textures are pre-generated and loading,
     * meaning that rendering is fast, and changing text has no performance implications.
     *
     * The primary disadvantage is that you need to preload the bitmap font assets, and thus the styling is set in stone.
     * Supporting character sets other than latin, such as CJK languages, may be impractical due to the number of characters.
     *
     * To split a line you can use '\n', '\r' or '\r\n' in your string.
     *
     * You can generate the fnt files using
     * http://www.angelcode.com/products/bmfont/ for Windows or
     * http://www.bmglyph.com/ for Mac.
     *
     * A BitmapText can only be created when the font is loaded.
     *
     * ```js
     * // in this case the font is in a file called 'desyrel.fnt'
     * let bitmapText = new PIXI.BitmapText("text using a fancy font!", {font: "35px Desyrel", align: "right"});
     * ```
     *
     * @class
     * @extends PIXI.Container
     * @memberof PIXI
     */
    class BitmapText extends PIXI.Container {
        constructor(text: string, style: {
            font: {
                name?: string;
                size?: number;
            };
            align?: string;
            tint?: number;
        });
        /**
         * The dirty state of this object.
         *
         * @member {boolean} PIXI.BitmapText#dirty
         */
        dirty: boolean;
        /**
         * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
         * Advantages can include sharper image quality (like text) and faster rendering on canvas.
         * The main disadvantage is movement of objects may appear less smooth.
         * To set the global default, change {@link PIXI.settings.ROUND_PIXELS}
         *
         * @member {boolean} PIXI.BitmapText#roundPixels
         * @default false
         */
        roundPixels: boolean;
        /**
         * Validates text before calling parent's getLocalBounds
         *
         * @return {PIXI.Rectangle} The rectangular bounding area
         */
        getLocalBounds(): PIXI.Rectangle;
        /**
         * The tint of the BitmapText object.
         *
         * @member {number}
         */
        tint: number;
        /**
         * The alignment of the BitmapText object.
         *
         * @member {string}
         * @default 'left'
         */
        align: string;
        /**
         * The anchor sets the origin point of the text.
         *
         * The default is `(0,0)`, this means the text's origin is the top left.
         *
         * Setting the anchor to `(0.5,0.5)` means the text's origin is centered.
         *
         * Setting the anchor to `(1,1)` would mean the text's origin point will be the bottom right corner.
         *
         * @member {PIXI.Point | number}
         */
        anchor: PIXI.Point | number;
        /**
         * The font descriptor of the BitmapText object.
         *
         * @member {object}
         */
        font: any;
        /**
         * The text of the BitmapText object.
         *
         * @member {string}
         */
        text: string;
        /**
         * The max width of this bitmap text in pixels. If the text provided is longer than the
         * value provided, line breaks will be automatically inserted in the last whitespace.
         * Disable by setting the value to 0.
         *
         * @member {number}
         */
        maxWidth: number;
        /**
         * The max line height. This is useful when trying to use the total height of the Text,
         * i.e. when trying to vertically align.
         *
         * @member {number}
         * @readonly
         */
        readonly maxLineHeight: number;
        /**
         * The width of the overall text, different from fontSize,
         * which is defined in the style object.
         *
         * @member {number}
         * @readonly
         */
        readonly textWidth: number;
        /**
         * Additional space between characters.
         *
         * @member {number}
         */
        letterSpacing: number;
        /**
         * The height of the overall text, different from fontSize,
         * which is defined in the style object.
         *
         * @member {number}
         * @readonly
         */
        readonly textHeight: number;
        /**
         * Register a bitmap font with data and a texture.
         *
         * @static
         * @param {XMLDocument} xml - The XML document data.
         * @param {Object.<string, PIXI.Texture>|PIXI.Texture|PIXI.Texture[]} textures - List of textures for each page.
         *  If providing an object, the key is the `<page>` element's `file` attribute in the FNT file.
         * @return {Object} Result font object with font, size, lineHeight and char fields.
         */
        static registerFont(xml: XMLDocument, textures: {
            [key: string]: PIXI.Texture;
        } | PIXI.Texture | PIXI.Texture[]): any;
        /**
         * The array of children of this container.
         *
         * @member {PIXI.DisplayObject[]} PIXI.Container#children
         * @readonly
         */
        readonly children: PIXI.DisplayObject[];
        /**
         * If set to true, the container will sort its children by zIndex value
         * when updateTransform() is called, or manually if sortChildren() is called.
         *
         * This actually changes the order of elements in the array, so should be treated
         * as a basic solution that is not performant compared to other solutions,
         * such as @link https://github.com/pixijs/pixi-display
         *
         * Also be aware of that this may not work nicely with the addChildAt() function,
         * as the zIndex sorting may cause the child to automatically sorted to another position.
         *
         * @see PIXI.settings.SORTABLE_CHILDREN
         *
         * @member {boolean} PIXI.Container#sortableChildren
         */
        sortableChildren: boolean;
        /**
         * Should children be sorted by zIndex at the next updateTransform call.
         * Will get automatically set to true if a new child is added, or if a child's zIndex changes.
         *
         * @member {boolean} PIXI.Container#sortDirty
         */
        sortDirty: boolean;
        /**
         * Overridable method that can be used by Container subclasses whenever the children array is modified
         *
         * @protected
         */
        protected onChildrenChange(): void;
        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt<T extends PIXI.DisplayObject>(child: T, index: number): T;
        /**
         * Swaps the position of 2 Display Objects within this container.
         *
         * @param {PIXI.DisplayObject} child - First display object to swap
         * @param {PIXI.DisplayObject} child2 - Second display object to swap
         */
        swapChildren(child: PIXI.DisplayObject, child2: PIXI.DisplayObject): void;
        /**
         * Returns the index position of a child DisplayObject instance
         *
         * @param {PIXI.DisplayObject} child - The DisplayObject instance to identify
         * @return {number} The index position of the child display object to identify
         */
        getChildIndex(child: PIXI.DisplayObject): number;
        /**
         * Changes the position of an existing child in the display object container
         *
         * @param {PIXI.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
         * @param {number} index - The resulting index number for the child display object
         */
        setChildIndex(child: PIXI.DisplayObject, index: number): void;
        /**
         * Returns the child at the specified index
         *
         * @param {number} index - The index to get the child at
         * @return {PIXI.DisplayObject} The child at the given index, if any.
         */
        getChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes one or more children from the container.
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to remove
         * @return {PIXI.DisplayObject} The first child that was removed.
         */
        removeChild<TChildren extends PIXI.DisplayObject[]>(...child: TChildren): TChildren[0];
        /**
         * Removes a child from the specified index position.
         *
         * @param {number} index - The index to get the child from
         * @return {PIXI.DisplayObject} The child that was removed.
         */
        removeChildAt(index: number): PIXI.DisplayObject;
        /**
         * Removes all children from this container that are within the begin and end indexes.
         *
         * @param {number} [beginIndex=0] - The beginning position.
         * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
         * @returns {PIXI.DisplayObject[]} List of removed children
         */
        removeChildren(beginIndex?: number, endIndex?: number): PIXI.DisplayObject[];
        /**
         * Sorts children by zIndex. Previous order is mantained for 2 children with the same zIndex.
         */
        sortChildren(): void;
        /**
         * Recalculates the bounds of the container.
         *
         */
        calculateBounds(): void;
        /**
         * Recalculates the bounds of the object. Override this to
         * calculate the bounds of the specific object (not including children).
         *
         * @protected
         */
        protected _calculateBounds(): void;
        /**
         * Renders the object using the WebGL renderer
         *
         * @param {PIXI.Renderer} renderer - The renderer
         */
        render(renderer: PIXI.Renderer): void;
        /**
         * Render the object using the WebGL renderer and advanced features.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected renderAdvanced(renderer: PIXI.Renderer): void;
        /**
         * To be overridden by the subclasses.
         *
         * @protected
         * @param {PIXI.Renderer} renderer - The renderer
         */
        protected _render(renderer: PIXI.Renderer): void;
        /**
         * Removes all internal references and listeners as well as removes children from the display list.
         * Do not use a Container after calling `destroy`.
         *
         * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
         *  have been set to that value
         * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
         *  method called as well. 'options' will be passed on to those calls.
         * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the texture of the child sprite
         * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
         *  Should it destroy the base texture of the child sprite
         */
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
        /**
         * The width of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        width: number;
        /**
         * The height of the Container, setting this will actually modify the scale to achieve the value set
         *
         * @member {number}
         */
        height: number;
        /**
         * Determines if the children to the displayObject can be clicked/touched
         * Setting this to false allows PixiJS to bypass a recursive `hitTest` function
         *
         * @member {boolean}
         * @memberof PIXI.Container#
         */
        interactiveChildren: boolean;
        /**
         * Returns the display object in the container.
         *
         * @method getChildByName
         * @memberof PIXI.Container#
         * @param {string} name - Instance name.
         * @return {PIXI.DisplayObject} The child with the specified name.
         */
        getChildByName(name: string): PIXI.DisplayObject;
        /**
         *  Flag for if the object is accessible. If true AccessibilityManager will overlay a
         *   shadow div with attributes set
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        accessible: boolean;
        /**
         * Sets the title attribute of the shadow div
         * If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'
         *
         * @member {?string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleTitle: string;
        /**
         * Sets the aria-label attribute of the shadow div
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        accessibleHint: string;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleActive: boolean;
        /**
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @todo Needs docs.
         */
        _accessibleDiv: boolean;
        /**
         * Specify the type of div the accessible layer is. Screen readers treat the element differently
         * depending on this type. Defaults to button.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'button'
         */
        accessibleType: string;
        /**
         * Specify the pointer-events the accessible div will use
         * Defaults to auto.
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         * @default 'auto'
         */
        accessiblePointerEvents: string;
        /**
         * Setting to false will prevent any children inside this container to
         * be accessible. Defaults to true.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         * @default true
         */
        accessibleChildren: boolean;
        /**
         * World transform and local transform of this object.
         * This will become read-only later, please do not assign anything there unless you know what are you doing.
         *
         * @member {PIXI.Transform} PIXI.DisplayObject#transform
         */
        transform: PIXI.Transform;
        /**
         * The opacity of the object.
         *
         * @member {number} PIXI.DisplayObject#alpha
         */
        alpha: number;
        /**
         * The visibility of the object. If false the object will not be drawn, and
         * the updateTransform function will not be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.
         *
         * @member {boolean} PIXI.DisplayObject#visible
         */
        visible: boolean;
        /**
         * Can this object be rendered, if false the object will not be drawn but the updateTransform
         * methods will still be called.
         *
         * Only affects recursive calls from parent. You can ask for bounds manually.
         *
         * @member {boolean} PIXI.DisplayObject#renderable
         */
        renderable: boolean;
        /**
         * The display object container that contains this display object.
         *
         * @member {PIXI.Container} PIXI.DisplayObject#parent
         * @readonly
         */
        readonly parent: PIXI.Container;
        /**
         * The multiplied alpha of the displayObject.
         *
         * @member {number} PIXI.DisplayObject#worldAlpha
         * @readonly
         */
        readonly worldAlpha: number;
        /**
         * Which index in the children array the display component was before the previous zIndex sort.
         * Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.
         *
         * @member {number} PIXI.DisplayObject#_lastSortedIndex
         * @protected
         */
        protected _lastSortedIndex: number;
        /**
         * The zIndex of the displayObject.
         * A higher value will mean it will be rendered on top of other displayObjects within the same container.
         *
         * @member {number} PIXI.DisplayObject#_zIndex
         * @protected
         */
        protected _zIndex: number;
        /**
         * The area the filter is applied to. This is used as more of an optimization
         * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.
         *
         * Also works as an interaction mask.
         *
         * @member {?PIXI.Rectangle} PIXI.DisplayObject#filterArea
         */
        filterArea: PIXI.Rectangle;
        /**
         * Sets the filters for the displayObject.
         * * IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
         * To remove filters simply set this property to `'null'`.
         *
         * @member {?PIXI.Filter[]} PIXI.DisplayObject#filters
         */
        filters: PIXI.Filter[];
        /**
         * The bounds object, this is used to calculate and store the bounds of the displayObject.
         *
         * @member {PIXI.Bounds} PIXI.DisplayObject#_bounds
         * @protected
         */
        protected _bounds: PIXI.Bounds;
        /**
         * The original, cached mask of the object.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask
         * @protected
         */
        protected _mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * If the object has been destroyed via destroy(). If true, it should not be used.
         *
         * @member {boolean} PIXI.DisplayObject#_destroyed
         * @protected
         */
        protected _destroyed: boolean;
        /**
         * used to fast check if a sprite is.. a sprite!
         * @member {boolean} PIXI.DisplayObject#isSprite
         */
        isSprite: boolean;
        /**
         * Does any other displayObject use this object as a mask?
         * @member {boolean} PIXI.DisplayObject#isMask
         */
        isMask: boolean;
        /**
         * @protected
         * @member {PIXI.DisplayObject}
         */
        protected _tempDisplayObjectParent: PIXI.DisplayObject;
        /**
         * Recursively updates transform of all objects from the root to this one
         * internal function for toLocal()
         */
        _recursivePostUpdateTransform(): void;
        /**
         * Retrieves the bounds of the displayObject as a rectangle object.
         *
         * @param {boolean} [skipUpdate] - Setting to `true` will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @param {PIXI.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation.
         * @return {PIXI.Rectangle} The rectangular bounding area.
         */
        getBounds(skipUpdate?: boolean, rect?: PIXI.Rectangle): PIXI.Rectangle;
        /**
         * Calculates the global position of the display object.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
         * @return {PIXI.IPoint} A point object representing the position of this object.
         */
        toGlobal(position: PIXI.IPoint, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Calculates the local position of the display object relative to another point.
         *
         * @param {PIXI.IPoint} position - The world origin to calculate from.
         * @param {PIXI.DisplayObject} [from] - The DisplayObject to calculate the global position from.
         * @param {PIXI.IPoint} [point] - A Point object in which to store the value, optional
         *  (otherwise will create a new Point).
         * @param {boolean} [skipUpdate=false] - Should we skip the update transform
         * @return {PIXI.IPoint} A point object representing the position of this object
         */
        toLocal(position: PIXI.IPoint, from?: PIXI.DisplayObject, point?: PIXI.IPoint, skipUpdate?: boolean): PIXI.IPoint;
        /**
         * Set the parent Container of this DisplayObject.
         *
         * @param {PIXI.Container} container - The Container to add this DisplayObject to.
         * @return {PIXI.Container} The Container that this DisplayObject was added to.
         */
        setParent(container: PIXI.Container): PIXI.Container;
        /**
         * Convenience function to set the position, scale, skew and pivot at once.
         *
         * @param {number} [x=0] - The X position
         * @param {number} [y=0] - The Y position
         * @param {number} [scaleX=1] - The X scale value
         * @param {number} [scaleY=1] - The Y scale value
         * @param {number} [rotation=0] - The rotation
         * @param {number} [skewX=0] - The X skew value
         * @param {number} [skewY=0] - The Y skew value
         * @param {number} [pivotX=0] - The X pivot value
         * @param {number} [pivotY=0] - The Y pivot value
         * @return {PIXI.DisplayObject} The DisplayObject instance
         */
        setTransform(x?: number, y?: number, scaleX?: number, scaleY?: number, rotation?: number, skewX?: number, skewY?: number, pivotX?: number, pivotY?: number): PIXI.DisplayObject;
        /**
         * The position of the displayObject on the x axis relative to the local coordinates of the parent.
         * An alias to position.x
         *
         * @member {number}
         */
        x: number;
        /**
         * The position of the displayObject on the y axis relative to the local coordinates of the parent.
         * An alias to position.y
         *
         * @member {number}
         */
        y: number;
        /**
         * Current transform of the object based on world (parent) factors.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly worldTransform: PIXI.Matrix;
        /**
         * Current transform of the object based on local factors: position, scale, other stuff.
         *
         * @member {PIXI.Matrix}
         * @readonly
         */
        readonly localTransform: PIXI.Matrix;
        /**
         * The coordinate of the object relative to the local coordinates of the parent.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        position: PIXI.IPoint;
        /**
         * The scale factor of the object.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        scale: PIXI.IPoint;
        /**
         * The pivot point of the displayObject that it rotates around.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.IPoint}
         */
        pivot: PIXI.IPoint;
        /**
         * The skew factor for the object in radians.
         * Assignment by value since pixi-v4.
         *
         * @member {PIXI.ObservablePoint}
         */
        skew: PIXI.ObservablePoint;
        /**
         * The rotation of the object in radians.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        rotation: number;
        /**
         * The angle of the object in degrees.
         * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
         *
         * @member {number}
         */
        angle: number;
        /**
         * The zIndex of the displayObject.
         * If a container has the sortableChildren property set to true, children will be automatically
         * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
         * and thus rendered on top of other displayObjects within the same container.
         *
         * @member {number}
         */
        zIndex: number;
        /**
         * Indicates if the object is globally visible.
         *
         * @member {boolean}
         * @readonly
         */
        readonly worldVisible: boolean;
        /**
         * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
         * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
         * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
         * utilities shape clipping. To remove a mask, set this property to `null`.
         *
         * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
         * @example
         * const graphics = new PIXI.Graphics();
         * graphics.beginFill(0xFF3300);
         * graphics.drawRect(50, 250, 100, 100);
         * graphics.endFill();
         *
         * const sprite = new PIXI.Sprite(texture);
         * sprite.mask = graphics;
         * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
         *
         * @member {PIXI.Graphics|PIXI.Sprite|null}
         */
        mask: PIXI.Graphics | PIXI.Sprite | null;
        /**
         * DisplayObject default updateTransform, does not update children of container.
         * Will crash if there's no parent element.
         *
         * @memberof PIXI.DisplayObject#
         * @function displayObjectUpdateTransform
         */
        displayObjectUpdateTransform(): void;
        /**
         * Enable interaction events for the DisplayObject. Touch, pointer and mouse
         * events will not be emitted unless `interactive` is set to `true`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.on('tap', (event) => {
         *    //handle event
         * });
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        interactive: boolean;
        /**
         * Interaction shape. Children will be hit first, then this shape will be checked.
         * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
         * @member {PIXI.IHitArea}
         * @memberof PIXI.DisplayObject#
         */
        hitArea: PIXI.IHitArea;
        /**
         * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
         * Setting this changes the 'cursor' property to `'pointer'`.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.buttonMode = true;
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        buttonMode: boolean;
        /**
         * This defines what cursor mode is used when the mouse cursor
         * is hovered over the displayObject.
         *
         * @example
         * const sprite = new PIXI.Sprite(texture);
         * sprite.interactive = true;
         * sprite.cursor = 'wait';
         * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
         *
         * @member {string}
         * @memberof PIXI.DisplayObject#
         */
        cursor: string;
        /**
         * Set this to true if you want this display object to be cached as a bitmap.
         * This basically takes a snap shot of the display object as it is at that moment. It can
         * provide a performance benefit for complex static displayObjects.
         * To remove simply set this property to `false`
         *
         * IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
         * as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.
         *
         * @member {boolean}
         * @memberof PIXI.DisplayObject#
         */
        cacheAsBitmap: boolean;
        /**
         * The instance name of the object.
         *
         * @memberof PIXI.DisplayObject#
         * @member {string} name
         */
        name: string;
        /**
         * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
         *
         * @method getGlobalPosition
         * @memberof PIXI.DisplayObject#
         * @param {PIXI.Point} [point=new PIXI.Point()] - The point to write the global value to.
         * @param {boolean} [skipUpdate=false] - Setting to true will stop the transforms of the scene graph from
         *  being updated. This means the calculation returned MAY be out of date BUT will give you a
         *  nice performance boost.
         * @return {PIXI.Point} The updated point.
         */
        getGlobalPosition(point?: PIXI.Point, skipUpdate?: boolean): PIXI.Point;
    }
    /**
     * A Ticker class that runs an update loop that other objects listen to.
     *
     * This class is composed around listeners meant for execution on the next requested animation frame.
     * Animation frames are requested only when necessary, e.g. When the ticker is started and the emitter has listeners.
     *
     * @class
     * @memberof PIXI
     */
    class Ticker {
        constructor();
        /**
         * Whether or not this ticker should invoke the method
         * {@link PIXI.Ticker#start} automatically
         * when a listener is added.
         *
         * @member {boolean} PIXI.Ticker#autoStart
         * @default false
         */
        autoStart: boolean;
        /**
         * Scalar time value from last frame to this frame.
         * This value is capped by setting {@link PIXI.Ticker#minFPS}
         * and is scaled with {@link PIXI.Ticker#speed}.
         * **Note:** The cap may be exceeded by scaling.
         *
         * @member {number} PIXI.Ticker#deltaTime
         * @default 1
         */
        deltaTime: number;
        /**
         * Scaler time elapsed in milliseconds from last frame to this frame.
         * This value is capped by setting {@link PIXI.Ticker#minFPS}
         * and is scaled with {@link PIXI.Ticker#speed}.
         * **Note:** The cap may be exceeded by scaling.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         * Defaults to target frame time
         *
         * @member {number} PIXI.Ticker#deltaMS
         * @default 16.66
         */
        deltaMS: number;
        /**
         * Time elapsed in milliseconds from last frame to this frame.
         * Opposed to what the scalar {@link PIXI.Ticker#deltaTime}
         * is based, this value is neither capped nor scaled.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         * Defaults to target frame time
         *
         * @member {number} PIXI.Ticker#elapsedMS
         * @default 16.66
         */
        elapsedMS: number;
        /**
         * The last time {@link PIXI.Ticker#update} was invoked.
         * This value is also reset internally outside of invoking
         * update, but only when a new animation frame is requested.
         * If the platform supports DOMHighResTimeStamp,
         * this value will have a precision of 1 µs.
         *
         * @member {number} PIXI.Ticker#lastTime
         * @default -1
         */
        lastTime: number;
        /**
         * Factor of current {@link PIXI.Ticker#deltaTime}.
         * @example
         * // Scales ticker.deltaTime to what would be
         * // the equivalent of approximately 120 FPS
         * ticker.speed = 2;
         *
         * @member {number} PIXI.Ticker#speed
         * @default 1
         */
        speed: number;
        /**
         * Whether or not this ticker has been started.
         * `true` if {@link PIXI.Ticker#start} has been called.
         * `false` if {@link PIXI.Ticker#stop} has been called.
         * While `false`, this value may change to `true` in the
         * event of {@link PIXI.Ticker#autoStart} being `true`
         * and a listener is added.
         *
         * @member {boolean} PIXI.Ticker#started
         * @default false
         */
        started: boolean;
        /**
         * Register a handler for tick events. Calls continuously unless
         * it is removed or the ticker is stopped.
         *
         * @param {Function} fn - The listener function to be added for updates
         * @param {*} [context] - The listener context
         * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
         * @returns {PIXI.Ticker} This instance of a ticker
         */
        add(fn: (...params: any[]) => any, context?: any, priority?: number): PIXI.Ticker;
        /**
         * Add a handler for the tick event which is only execute once.
         *
         * @param {Function} fn - The listener function to be added for one update
         * @param {*} [context] - The listener context
         * @param {number} [priority=PIXI.UPDATE_PRIORITY.NORMAL] - The priority for emitting
         * @returns {PIXI.Ticker} This instance of a ticker
         */
        addOnce(fn: (...params: any[]) => any, context?: any, priority?: number): PIXI.Ticker;
        /**
         * Removes any handlers matching the function and context parameters.
         * If no handlers are left after removing, then it cancels the animation frame.
         *
         * @param {Function} fn - The listener function to be removed
         * @param {*} [context] - The listener context to be removed
         * @returns {PIXI.Ticker} This instance of a ticker
         */
        remove(fn: (...params: any[]) => any, context?: any): PIXI.Ticker;
        /**
         * Starts the ticker. If the ticker has listeners
         * a new animation frame is requested at this point.
         */
        start(): void;
        /**
         * Stops the ticker. If the ticker has requested
         * an animation frame it is canceled at this point.
         */
        stop(): void;
        /**
         * Destroy the ticker and don't use after this. Calling
         * this method removes all references to internal events.
         */
        destroy(): void;
        /**
         * Triggers an update. An update entails setting the
         * current {@link PIXI.Ticker#elapsedMS},
         * the current {@link PIXI.Ticker#deltaTime},
         * invoking all listeners with current deltaTime,
         * and then finally setting {@link PIXI.Ticker#lastTime}
         * with the value of currentTime that was provided.
         * This method will be called automatically by animation
         * frame callbacks if the ticker instance has been started
         * and listeners are added.
         *
         * @param {number} [currentTime=performance.now()] - the current time of execution
         */
        update(currentTime?: number): void;
        /**
         * The frames per second at which this ticker is running.
         * The default is approximately 60 in most modern browsers.
         * **Note:** This does not factor in the value of
         * {@link PIXI.Ticker#speed}, which is specific
         * to scaling {@link PIXI.Ticker#deltaTime}.
         *
         * @member {number}
         * @readonly
         */
        readonly FPS: number;
        /**
         * Manages the maximum amount of milliseconds allowed to
         * elapse between invoking {@link PIXI.Ticker#update}.
         * This value is used to cap {@link PIXI.Ticker#deltaTime},
         * but does not effect the measured value of {@link PIXI.Ticker#FPS}.
         * When setting this property it is clamped to a value between
         * `0` and `PIXI.settings.TARGET_FPMS * 1000`.
         *
         * @member {number}
         * @default 10
         */
        minFPS: number;
        /**
         * Manages the minimum amount of milliseconds required to
         * elapse between invoking {@link PIXI.Ticker#update}.
         * This will effect the measured value of {@link PIXI.Ticker#FPS}.
         * If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
         * Otherwise it will be at least `minFPS`
         *
         * @member {number}
         * @default 0
         */
        maxFPS: number;
        /**
         * The shared ticker instance used by {@link PIXI.AnimatedSprite} and by
         * {@link PIXI.VideoResource} to update animation frames / video textures.
         *
         * It may also be used by {@link PIXI.Application} if created with the `sharedTicker` option property set to true.
         *
         * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
         * Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.
         *
         * @example
         * let ticker = PIXI.Ticker.shared;
         * // Set this to prevent starting this ticker when listeners are added.
         * // By default this is true only for the PIXI.Ticker.shared instance.
         * ticker.autoStart = false;
         * // FYI, call this to ensure the ticker is stopped. It should be stopped
         * // if you have not attempted to render anything yet.
         * ticker.stop();
         * // Call this when you are ready for a running shared ticker.
         * ticker.start();
         *
         * @example
         * // You may use the shared ticker to render...
         * let renderer = PIXI.autoDetectRenderer();
         * let stage = new PIXI.Container();
         * document.body.appendChild(renderer.view);
         * ticker.add(function (time) {
         *     renderer.render(stage);
         * });
         *
         * @example
         * // Or you can just update it manually.
         * ticker.autoStart = false;
         * ticker.stop();
         * function animate(time) {
         *     ticker.update(time);
         *     renderer.render(stage);
         *     requestAnimationFrame(animate);
         * }
         * animate(performance.now());
         *
         * @member {PIXI.Ticker}
         * @static
         */
        static shared: PIXI.Ticker;
        /**
         * The system ticker instance used by {@link PIXI.interaction.InteractionManager} and by
         * {@link PIXI.BasePrepare} for core timing functionality that shouldn't usually need to be paused,
         * unlike the `shared` ticker which drives visual animations and rendering which may want to be paused.
         *
         * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
         *
         * @member {PIXI.Ticker}
         * @static
         */
        static system: PIXI.Ticker;
    }
    /**
     * Middleware for for Application Ticker.
     *
     * @example
     * import {TickerPlugin} from '@pixi/ticker';
     * import {Application} from '@pixi/app';
     * Application.registerPlugin(TickerPlugin);
     *
     * @class
     * @memberof PIXI
     */
    class TickerPlugin {
    }
    /**
     * Represents the update priorities used by internal PIXI classes when registered with
     * the {@link PIXI.Ticker} object. Higher priority items are updated first and lower
     * priority items, such as render, should go later.
     *
     * @static
     * @constant
     * @name UPDATE_PRIORITY
     * @memberof PIXI
     * @enum {number}
     * @property {number} INTERACTION=50 Highest priority, used for {@link PIXI.interaction.InteractionManager}
     * @property {number} HIGH=25 High priority updating, {@link PIXI.VideoBaseTexture} and {@link PIXI.AnimatedSprite}
     * @property {number} NORMAL=0 Default priority for ticker events, see {@link PIXI.Ticker#add}.
     * @property {number} LOW=-25 Low priority used for {@link PIXI.Application} rendering.
     * @property {number} UTILITY=-50 Lowest priority used for {@link PIXI.prepare.BasePrepare} utility.
     */
    enum UPDATE_PRIORITY {
        INTERACTION,
        HIGH,
        NORMAL,
        LOW,
        UTILITY
    }
    /**
     * Regexp for data URI.
     * Based on: {@link https://github.com/ragingwind/data-uri-regex}
     *
     * @static
     * @constant {RegExp|string} DATA_URI
     * @memberof PIXI
     * @example data:image/png;base64
     */
    var DATA_URI: RegExp | string;
    /**
     * Generalized convenience utilities for PIXI.
     * @example
     * // Extend PIXI's internal Event Emitter.
     * class MyEmitter extends PIXI.utils.EventEmitter {
     *   constructor() {
     *      super();
     *      console.log("Emitter created!");
     *   }
     * }
     *
     * // Get info on current device
     * console.log(PIXI.utils.isMobile);
     *
     * // Convert hex color to string
     * console.log(PIXI.utils.hex2string(0xff00ff)); // returns: "#ff00ff"
     * @namespace PIXI.utils
     */
    namespace utils {
        /**
         * Skips the hello message of renderers that are created after this is run.
         *
         * @function skipHello
         * @memberof PIXI.utils
         */
        function skipHello(): void;
        /**
         * Logs out the version and renderer information for this running instance of PIXI.
         * If you don't want to see this message you can run `PIXI.utils.skipHello()` before
         * creating your renderer. Keep in mind that doing that will forever make you a jerk face.
         *
         * @static
         * @function sayHello
         * @memberof PIXI.utils
         * @param {string} type - The string renderer type to log.
         */
        function sayHello(type: string): void;
        /**
         * Helper for checking for WebGL support.
         *
         * @memberof PIXI.utils
         * @function isWebGLSupported
         * @return {boolean} Is WebGL supported.
         */
        function isWebGLSupported(): boolean;
        /**
         * Converts a hexadecimal color number to an [R, G, B] array of normalized floats (numbers from 0.0 to 1.0).
         *
         * @example
         * PIXI.utils.hex2rgb(0xffffff); // returns [1, 1, 1]
         * @memberof PIXI.utils
         * @function hex2rgb
         * @param {number} hex - The hexadecimal number to convert
         * @param  {number[]} [out=[]] If supplied, this array will be used rather than returning a new one
         * @return {number[]} An array representing the [R, G, B] of the color where all values are floats.
         */
        function hex2rgb(hex: number, out?: number[]): number[];
        /**
         * Converts a hexadecimal color number to a string.
         *
         * @example
         * PIXI.utils.hex2string(0xffffff); // returns "#ffffff"
         * @memberof PIXI.utils
         * @function hex2string
         * @param {number} hex - Number in hex (e.g., `0xffffff`)
         * @return {string} The string color (e.g., `"#ffffff"`).
         */
        function hex2string(hex: number): string;
        /**
         * Converts a hexadecimal string to a hexadecimal color number.
         *
         * @example
         * PIXI.utils.string2hex("#ffffff"); // returns 0xffffff
         * @memberof PIXI.utils
         * @function string2hex
         * @param {string} The string color (e.g., `"#ffffff"`)
         * @return {number} Number in hexadecimal.
         */
        function string2hex(The: string): number;
        /**
         * Converts a color as an [R, G, B] array of normalized floats to a hexadecimal number.
         *
         * @example
         * PIXI.utils.rgb2hex([1, 1, 1]); // returns 0xffffff
         * @memberof PIXI.utils
         * @function rgb2hex
         * @param {number[]} rgb - Array of numbers where all values are normalized floats from 0.0 to 1.0.
         * @return {number} Number in hexadecimal.
         */
        function rgb2hex(rgb: number[]): number;
        /**
         * maps premultiply flag and blendMode to adjusted blendMode
         * @memberof PIXI.utils
         * @const premultiplyBlendMode
         * @type {Array<number[]>}
         */
        var premultiplyBlendMode: number[][];
        /**
         * changes blendMode according to texture format
         *
         * @memberof PIXI.utils
         * @function correctBlendMode
         * @param {number} blendMode supposed blend mode
         * @param {boolean} premultiplied  whether source is premultiplied
         * @returns {number} true blend mode for this texture
         */
        function correctBlendMode(blendMode: number, premultiplied: boolean): number;
        /**
         * combines rgb and alpha to out array
         *
         * @memberof PIXI.utils
         * @function premultiplyRgba
         * @param {Float32Array|number[]} rgb input rgb
         * @param {number} alpha alpha param
         * @param {Float32Array} [out] output
         * @param {boolean} [premultiply=true] do premultiply it
         * @returns {Float32Array} vec4 rgba
         */
        function premultiplyRgba(rgb: Float32Array | number[], alpha: number, out?: Float32Array, premultiply?: boolean): Float32Array;
        /**
         * premultiplies tint
         *
         * @memberof PIXI.utils
         * @function premultiplyTint
         * @param {number} tint integer RGB
         * @param {number} alpha floating point alpha (0.0-1.0)
         * @returns {number} tint multiplied by alpha
         */
        function premultiplyTint(tint: number, alpha: number): number;
        /**
         * converts integer tint and float alpha to vec4 form, premultiplies by default
         *
         * @memberof PIXI.utils
         * @function premultiplyTintToRgba
         * @param {number} tint input tint
         * @param {number} alpha alpha param
         * @param {Float32Array} [out] output
         * @param {boolean} [premultiply=true] do premultiply it
         * @returns {Float32Array} vec4 rgba
         */
        function premultiplyTintToRgba(tint: number, alpha: number, out?: Float32Array, premultiply?: boolean): Float32Array;
        /**
         * Generic Mask Stack data structure
         *
         * @memberof PIXI.utils
         * @function createIndicesForQuads
         * @param {number} size - Number of quads
         * @param {Uint16Array|Uint32Array} [outBuffer] - Buffer for output, length has to be `6 * size`
         * @return {Uint16Array|Uint32Array} - Resulting index buffer
         */
        function createIndicesForQuads(size: number, outBuffer?: Uint16Array | Uint32Array): Uint16Array | Uint32Array;
        /**
         * Rounds to next power of two.
         *
         * @function nextPow2
         * @memberof PIXI.utils
         * @param {number} v input value
         * @return {number}
         */
        function nextPow2(v: number): number;
        /**
         * Checks if a number is a power of two.
         *
         * @function isPow2
         * @memberof PIXI.utils
         * @param {number} v input value
         * @return {boolean} `true` if value is power of two
         */
        function isPow2(v: number): boolean;
        /**
         * Computes ceil of log base 2
         *
         * @function log2
         * @memberof PIXI.utils
         * @param {number} v input value
         * @return {number} logarithm base 2
         */
        function log2(v: number): number;
        /**
         * Remove items from a javascript array without generating garbage
         *
         * @function removeItems
         * @memberof PIXI.utils
         * @param {Array<any>} arr Array to remove elements from
         * @param {number} startIdx starting index
         * @param {number} removeCount how many to remove
         */
        function removeItems(arr: any[], startIdx: number, removeCount: number): void;
        /**
         * Returns sign of number
         *
         * @memberof PIXI.utils
         * @function sign
         * @param {number} n - the number to check the sign of
         * @returns {number} 0 if `n` is 0, -1 if `n` is negative, 1 if `n` is positive
         */
        function sign(n: number): number;
        /**
         * Gets the next unique identifier
         *
         * @memberof PIXI.utils
         * @function uid
         * @return {number} The next unique identifier to use.
         */
        function uid(): number;
        /**
         * A simple JS library that detects mobile devices.
         *
         * @see {@link https://github.com/kaimallea/isMobile}
         *
         * @memberof PIXI.utils
         * @name isMobile
         * @type {Object}
         * @property {boolean} any - `true` if current platform is tablet or phone device
         * @property {boolean} tablet - `true` if current platform large-screen tablet device
         * @property {boolean} phone - `true` if current platform small-screen phone device
         * @property {object} apple
         * @property {boolean} apple.device - `true` if any Apple device
         * @property {boolean} apple.tablet - `true` if any Apple iPad
         * @property {boolean} apple.phone - `true` if any Apple iPhone
         * @property {boolean} apple.ipod - `true` if any iPod
         * @property {object} android
         * @property {boolean} android.device - `true` if any Android device
         * @property {boolean} android.tablet - `true` if any Android tablet
         * @property {boolean} android.phone - `true` if any Android phone
         * @property {object} amazon
         * @property {boolean} amazon.device - `true` if any Silk device
         * @property {boolean} amazon.tablet - `true` if any Silk tablet
         * @property {boolean} amazon.phone - `true` if any Silk phone
         * @property {object} windows
         * @property {boolean} windows.device - `true` if any Windows device
         * @property {boolean} windows.tablet - `true` if any Windows tablet
         * @property {boolean} windows.phone - `true` if any Windows phone
         */
        var isMobile: {
            any: boolean;
            tablet: boolean;
            phone: boolean;
            apple: {
                device: boolean;
                tablet: boolean;
                phone: boolean;
                ipod: boolean;
            };
            android: {
                device: boolean;
                tablet: boolean;
                phone: boolean;
            };
            amazon: {
                device: boolean;
                tablet: boolean;
                phone: boolean;
            };
            windows: {
                device: boolean;
                tablet: boolean;
                phone: boolean;
            };
        };
        /**
         * A high performance event emitter
         *
         * @see {@link https://github.com/primus/eventemitter3}
         *
         * @memberof PIXI.utils
         * @class EventEmitter
         * @type {EventEmitter}
         */
        class EventEmitter {
        }
        /**
         * A polygon triangulation library
         *
         * @see {@link https://github.com/mapbox/earcut}
         *
         * @memberof PIXI.utils
         * @function earcut
         * @param {number[]} vertices - A flat array of vertex coordinates
         * @param {number[]} [holes] - An array of hole indices
         * @param {number} [dimensions=2] The number of coordinates per vertex in the input array
         * @return {number[]} Triangulated polygon
         */
        function earcut(vertices: number[], holes?: number[], dimensions?: number): number[];
        /**
         * Node.js compatible URL utilities.
         *
         * @see https://www.npmjs.com/package/url
         *
         * @memberof PIXI.utils
         * @name url
         * @type {object}
         */
        var url: any;
        /**
         * Helper for warning developers about deprecated features & settings.
         * A stack track for warnings is given; useful for tracking-down where
         * deprecated methods/properties/classes are being used within the code.
         *
         * @memberof PIXI.utils
         * @function deprecation
         * @param {string} version - The version where the feature became deprecated
         * @param {string} message - Message should include what is deprecated, where, and the new solution
         * @param {number} [ignoreDepth=3] - The number of steps to ignore at the top of the error stack
         *        this is mostly to ignore internal deprecation calls.
         */
        function deprecation(version: string, message: string, ignoreDepth?: number): void;
        /**
         * Creates a Canvas element of the given size to be used as a target for rendering to.
         *
         * @class
         * @memberof PIXI.utils
         */
        class CanvasRenderTarget {
            constructor(width: number, height: number, resolution?: number);
            /**
             * The Canvas object that belongs to this CanvasRenderTarget.
             *
             * @member {HTMLCanvasElement} PIXI.utils.CanvasRenderTarget#canvas
             */
            canvas: HTMLCanvasElement;
            /**
             * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
             *
             * @member {CanvasRenderingContext2D} PIXI.utils.CanvasRenderTarget#context
             */
            context: CanvasRenderingContext2D;
            /**
             * Resizes the canvas to the specified width and height.
             *
             * @param {number} width - the new width of the canvas
             * @param {number} height - the new height of the canvas
             */
            resize(width: number, height: number): void;
            /**
             * Destroys this canvas.
             *
             */
            destroy(): void;
            /**
             * The width of the canvas buffer in pixels.
             *
             * @member {number}
             */
            width: number;
            /**
             * The height of the canvas buffer in pixels.
             *
             * @member {number}
             */
            height: number;
        }
        /**
         * @todo Describe property usage
         *
         * @static
         * @name ProgramCache
         * @memberof PIXI.utils
         * @type {Object}
         */
        var ProgramCache: any;
        /**
         * @todo Describe property usage
         *
         * @static
         * @name TextureCache
         * @memberof PIXI.utils
         * @type {Object}
         */
        var TextureCache: any;
        /**
         * @todo Describe property usage
         *
         * @static
         * @name BaseTextureCache
         * @memberof PIXI.utils
         * @type {Object}
         */
        var BaseTextureCache: any;
        /**
         * Destroys all texture in the cache
         *
         * @memberof PIXI.utils
         * @function destroyTextureCache
         */
        function destroyTextureCache(): void;
        /**
         * Removes all textures from cache, but does not destroy them
         *
         * @memberof PIXI.utils
         * @function clearTextureCache
         */
        function clearTextureCache(): void;
        /**
         * Trim transparent borders from a canvas
         *
         * @memberof PIXI.utils
         * @function trimCanvas
         * @param {HTMLCanvasElement} canvas - the canvas to trim
         * @returns {object} Trim data
         */
        function trimCanvas(canvas: HTMLCanvasElement): any;
        /**
         * Typedef for decomposeDataUri return object.
         *
         * @memberof PIXI.utils
         * @typedef {object} DecomposedDataUri
         * @property {string} mediaType Media type, eg. `image`
         * @property {string} subType Sub type, eg. `png`
         * @property {string} encoding Data encoding, eg. `base64`
         * @property {string} data The actual data
         */
        type DecomposedDataUri = {
            mediaType: string;
            subType: string;
            encoding: string;
            data: string;
        };
        /**
         * Split a data URI into components. Returns undefined if
         * parameter `dataUri` is not a valid data URI.
         *
         * @memberof PIXI.utils
         * @function decomposeDataUri
         * @param {string} dataUri - the data URI to check
         * @return {PIXI.utils.DecomposedDataUri|undefined} The decomposed data uri or undefined
         */
        function decomposeDataUri(dataUri: string): PIXI.utils.DecomposedDataUri | undefined;
        /**
         * get the resolution / device pixel ratio of an asset by looking for the prefix
         * used by spritesheets and image urls
         *
         * @memberof PIXI.utils
         * @function getResolutionOfUrl
         * @param {string} url - the image path
         * @param {number} [defaultValue=1] - the defaultValue if no filename prefix is set.
         * @return {number} resolution / device pixel ratio of an asset
         */
        function getResolutionOfUrl(url: string, defaultValue?: number): number;
    }
}

/**
 * @interface SharedArrayBuffer
 */
declare interface SharedArrayBuffer {
}

/**
 * @interface OffscreenCanvas
 */
declare interface OffscreenCanvas {
}

/**
 * A structure to hold interim batch objects.
 *
 */
declare class BatchPart {
    constructor();
    /**
     * Begin batch part
     *
     * @param {PIXI.FillStyle | PIXI.LineStyle} style
     * @param {number} startIndex
     * @param {number} attribStart
     */
    begin(style: PIXI.FillStyle | PIXI.LineStyle, startIndex: number, attribStart: number): void;
    /**
     * End batch part
     *
     * @param {number} endIndex
     * @param {number} endAttrib
     */
    end(endIndex: number, endAttrib: number): void;
}

/**
 * Map of fill commands for each shape type.
 *
 * @member {Object}
 */
declare var FILL_COMMANDS: any;

/**
 * Batch pool, stores unused batches for preventing allocations.
 *
 * @type {Array<BatchPart>}
 */
declare var BATCH_POOL: BatchPart[];

/**
 * Draw call pool, stores unused draw calls for preventing allocations.
 *
 * @type {Array<PIXI.BatchDrawCall>}
 */
declare var DRAW_CALL_POOL: PIXI.BatchDrawCall[];


declare namespace PIXI {
    namespace utils {
// https://github.com/primus/eventemitter3
        export interface EventEmitter {
            /**
             * Return an array listing the events for which the emitter has registered listeners.
             *
             * @returns {(string | symbol)[]}
             */
            eventNames(): Array<(string | symbol)>;

            /**
             * Return the listeners registered for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @returns {Function[]}
             */
            //tslint:disable-next-line:ban-types forbidden-types
            listeners(event: string | symbol): Array<Function>;

            /**
             * Return the number of listeners listening to a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @returns {number}
             */
            listenerCount(event: string | symbol): number;

            /**
             * Calls each of the listeners registered for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {...*} args Arguments that are passed to registered listeners
             * @returns {boolean} `true` if the event had listeners, else `false`.
             */
            emit(event: string | symbol, ...args: any[]): boolean;

            /**
             * Add a listener for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn The listener function.
             * @param {*} [context=this] The context to invoke the listener with.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            on(event: string | symbol, fn: Function, context?: any): this;

            /**
             * Add a one-time listener for a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn The listener function.
             * @param {*} [context=this] The context to invoke the listener with.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            once(event: string | symbol, fn: Function, context?: any): this;

            /**
             * Remove the listeners of a given event.
             *
             * @param {(string | symbol)} event The event name.
             * @param {Function} fn Only remove the listeners that match this function.
             * @param {*} context Only remove the listeners that have this context.
             * @param {boolean} once Only remove one-time listeners.
             * @returns {EventEmitter} `this`.
             */
            //tslint:disable-next-line:ban-types forbidden-types
            removeListener(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

            /**
             * Remove all listeners, or those of the specified event.
             *
             * @param {(string | symbol)} event The event name.
             * @returns {EventEmitter} `this`.
             */
            removeAllListeners(event?: string | symbol): this;

            /**
             * Alias method for `removeListener`
             */
            //tslint:disable-next-line:ban-types forbidden-types
            off(event: string | symbol, fn?: Function, context?: any, once?: boolean): this;

            /**
             * Alias method for `on`
             */
            //tslint:disable-next-line:ban-types forbidden-types
            addListener(event: string | symbol, fn: Function, context?: any): this;
        }
    }

    namespace interaction {
        type InteractionPointerEvents = "pointerdown" | "pointercancel" | "pointerup" | "pointertap" | "pointerupoutside" | "pointermove" | "pointerover" | "pointerout";
        type InteractionTouchEvents = "touchstart" | "touchcancel" | "touchend" | "touchendoutside" | "touchmove" | "tap";
        type InteractionMouseEvents = "rightdown" | "mousedown" | "rightup" | "mouseup" | "rightclick" | "click" | "rightupoutside" | "mouseupoutside" | "mousemove" | "mouseover" | "mouseout";
        type InteractionPixiEvents = "added" | "removed";
        type InteractionEventTypes = InteractionPointerEvents | InteractionTouchEvents | InteractionMouseEvents | InteractionPixiEvents;
    }

    export interface DisplayObject {
        on(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        on(event: string | symbol, fn: Function, context?: any): this;
        once(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        once(event: string | symbol, fn: Function, context?: any): this;
        removeListener(event: interaction.InteractionEventTypes, fn?: (event: interaction.InteractionEvent) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        removeListener(event: string | symbol, fn?: Function, context?: any): this;
        removeAllListeners(event?: interaction.InteractionEventTypes): this;
        removeAllListeners(event?: string | symbol): this;
        off(event: interaction.InteractionEventTypes, fn?: (event: interaction.InteractionEvent) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        off(event: string | symbol, fn?: Function, context?: any): this;
        addListener(event: interaction.InteractionEventTypes, fn: (event: interaction.InteractionEvent) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        addListener(event: string | symbol, fn: Function, context?: any): this;
    }

    export interface Container {
        once(event: "added" | "removed", fn: (displayObject: DisplayObject) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        once(event: string, fn: Function, context?: any): this;
        on(event: "added" | "removed", fn: (displayObject: DisplayObject) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        on(event: string, fn: Function, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        off(event: "added" | "removed" | string, fn?: Function, context?: any): this;
    }
}

declare namespace PIXI {
    export interface Loader extends utils.EventEmitter {
        baseUrl: string;
        progress: number;
        loading: boolean;
        defaultQueryString: string;
        resources: IResourceDictionary;
        concurrency: number;

        add(...params: any[]): this;
        //tslint:disable-next-line:ban-types forbidden-types
        add(name: string, url: string, options?: ILoaderOptions, cb?: Function): this;
        //tslint:disable-next-line:ban-types forbidden-types
        add(obj: string | any | any[], options?: ILoaderOptions, cb?: Function): this;

        //tslint:disable-next-line:ban-types forbidden-types
        pre(fn: Function): this;
        //tslint:disable-next-line:ban-types forbidden-types
        use(fn: Function): this;
        reset(): this;
        //tslint:disable-next-line:ban-types forbidden-types
        load(cb?: (loader: Loader, resources: Partial<Record<string, LoaderResource>>) => void): this;

        destroy(): void;

        // depreciation

        on(event: "complete", fn: (loader: Loader, object: any) => void, context?: any): this;
        on(event: "error", fn: (error: Error, loader: Loader, resource: LoaderResource) => void, context?: any): this;
        on(event: "load" | "progress", fn: (loader: Loader, resource: LoaderResource) => void, context?: any): this;
        on(event: "start", fn: (loader: Loader) => void, context?: any): this;

        once(event: "complete", fn: (loader: Loader, object: any) => void, context?: any): this;
        once(event: "error", fn: (error: Error, loader: Loader, resource: LoaderResource) => void, context?: any): this;
        once(event: "load" | "progress", fn: (loader: Loader, resource: LoaderResource) => void, context?: any): this;
        once(event: "start", fn: (loader: Loader) => void, context?: any): this;
        //tslint:disable-next-line:ban-types forbidden-types
        off(event: "complete" | "error" | "load" | "progress" | "start" | string, fn?: Function, context?: any): this;

    }

    export interface IResourceDictionary {
        [index: string]: LoaderResource;
    }

    export interface ITextureDictionary {
        [index: string]: Texture;
    }

    export interface ILoaderOptions {
        crossOrigin?: boolean | string;
        loadType?: number;
        xhrType?: string;
        metadata?: {
            loadElement?: HTMLImageElement | HTMLAudioElement | HTMLVideoElement;
            skipSource?: boolean;
            mimeType?: string | string[];
        };
    }

    export interface LoaderResource {
        name: string;
        url: string;
        extension: string;
        data: any;
        crossOrigin: boolean | string;
        loadType: number;
        xhrType: string;
        metadata: any;
        error: Error;
        xhr: XMLHttpRequest | null;
        children: LoaderResource[];
        type: number;
        progressChunk: number;
        isDataUrl: boolean;
        isComplete: boolean;
        isLoading: boolean;
        complete(): void;
        abort(message?: string): void;
        //tslint:disable-next-line:ban-types forbidden-types
        load(cb?: Function): void;
        texture: Texture;
        spineAtlas: any;
        spineData: any;
        spritesheet?: Spritesheet;
        textures?: ITextureDictionary;
    }

    namespace LoaderResource {
        function setExtensionLoadType(extname: string, loadType: number): void;
        function setExtensionXhrType(extname: string, xhrType: string): void;

        export enum STATUS_FLAGS {
            NONE = 0,
            DATA_URL = (1 << 0),
            COMPLETE = (1 << 1),
            LOADING = (1 << 2),
        }

        export enum TYPE {
            UNKNOWN = 0,
            JSON = 1,
            XML = 2,
            IMAGE = 3,
            AUDIO = 4,
            VIDEO = 5,
            TEXT = 6,
        }

        export enum LOAD_TYPE {

            /** Uses XMLHttpRequest to load the resource. */
            XHR = 1,
            /** Uses an `Image` object to load the resource. */
            IMAGE = 2,
            /** Uses an `Audio` object to load the resource. */
            AUDIO = 3,
            /** Uses a `Video` object to load the resource. */
            VIDEO = 4,
        }

        export enum XHR_RESPONSE_TYPE {
            /** string */
            DEFAULT = 'text',
            /** ArrayBuffer */
            BUFFER = 'arraybuffer',
            /** Blob */
            BLOB = 'blob',
            /** Document */
            DOCUMENT = 'document',
            /** Object */
            JSON = 'json',
            /** String */
            TEXT = 'text',
        }

        let EMPTY_GIF: string;
    }
}

declare module "pixi.js" {
    export = PIXI;
}