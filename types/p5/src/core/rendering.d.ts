// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Creates a canvas element in the document and sets
         *   its dimensions in pixels. This method should be
         *   called only once at the start of setup(). Calling
         *   createCanvas more than once in a sketch will
         *   result in very unpredictable behavior. If you want
         *   more than one drawing canvas you could use
         *   createGraphics() (hidden by default but it can be
         *   shown). Important note: in 2D mode (i.e. when
         *   p5.Renderer is not set) the origin (0,0) is
         *   positioned at the top left of the screen. In 3D
         *   mode (i.e. when p5.Renderer is set to WEBGL), the
         *   origin is positioned at the center of the canvas.
         *   See this issue for more information.
         *
         *   A WebGL canvas will use a WebGL2 context if it is
         *   supported by the browser. Check the webglVersion
         *   property to check what version is being used, or
         *   call setAttributes({ version: 1 }) to create a
         *   WebGL1 context.
         *
         *   The system variables width and height are set by
         *   the parameters passed to this function. If
         *   createCanvas() is not used, the window will be
         *   given a default size of 100×100 pixels.
         *
         *   Optionally, an existing canvas can be passed using
         *   a selector, ie. document.getElementById(''). If
         *   specified, avoid using setAttributes() afterwards,
         *   as this will remove and recreate the existing
         *   canvas.
         *
         *   For more ways to position the canvas, see the
         *   positioning the canvas wiki page.
         *   @param w width of the canvas
         *   @param h height of the canvas
         *   @param [renderer] either P2D or WEBGL
         *   @param [canvas] existing html canvas element
         *   @return pointer to p5.Renderer holding canvas
         */
        createCanvas(w: number, h: number, renderer?: RENDERER, canvas?: object): Renderer;

        /**
         *   Creates a canvas element in the document and sets
         *   its dimensions in pixels. This method should be
         *   called only once at the start of setup(). Calling
         *   createCanvas more than once in a sketch will
         *   result in very unpredictable behavior. If you want
         *   more than one drawing canvas you could use
         *   createGraphics() (hidden by default but it can be
         *   shown). Important note: in 2D mode (i.e. when
         *   p5.Renderer is not set) the origin (0,0) is
         *   positioned at the top left of the screen. In 3D
         *   mode (i.e. when p5.Renderer is set to WEBGL), the
         *   origin is positioned at the center of the canvas.
         *   See this issue for more information.
         *
         *   A WebGL canvas will use a WebGL2 context if it is
         *   supported by the browser. Check the webglVersion
         *   property to check what version is being used, or
         *   call setAttributes({ version: 1 }) to create a
         *   WebGL1 context.
         *
         *   The system variables width and height are set by
         *   the parameters passed to this function. If
         *   createCanvas() is not used, the window will be
         *   given a default size of 100×100 pixels.
         *
         *   Optionally, an existing canvas can be passed using
         *   a selector, ie. document.getElementById(''). If
         *   specified, avoid using setAttributes() afterwards,
         *   as this will remove and recreate the existing
         *   canvas.
         *
         *   For more ways to position the canvas, see the
         *   positioning the canvas wiki page.
         *   @param w width of the canvas
         *   @param h height of the canvas
         *   @param [canvas] existing html canvas element
         *   @return pointer to p5.Renderer holding canvas
         */
        createCanvas(w: number, h: number, canvas?: object): Renderer;

        /**
         *   Resizes the canvas to given width and height. The
         *   canvas will be cleared and draw will be called
         *   immediately, allowing the sketch to re-render
         *   itself in the resized canvas.
         *   @param w width of the canvas
         *   @param h height of the canvas
         *   @param [noRedraw] don't redraw the canvas
         *   immediately
         */
        resizeCanvas(w: number, h: number, noRedraw?: boolean): void;

        /**
         *   Removes the default canvas for a p5 sketch that
         *   doesn't require a canvas
         */
        noCanvas(): void;

        /**
         *   Creates and returns a new p5.Graphics object. Use
         *   this class if you need to draw into an off-screen
         *   graphics buffer. The two parameters define the
         *   width and height in pixels. A WebGL p5.Graphics
         *   will use a WebGL2 context if it is supported by
         *   the browser. Check the pg.webglVersion property of
         *   the renderer to check what version is being used,
         *   or call pg.setAttributes({ version: 1 }) to create
         *   a WebGL1 context.
         *
         *   Optionally, an existing canvas can be passed using
         *   a selector, ie. document.getElementById(''). By
         *   default this canvas will be hidden (offscreen
         *   buffer), to make visible, set element's style to
         *   display:block;
         *   @param w width of the offscreen graphics buffer
         *   @param h height of the offscreen graphics buffer
         *   @param [renderer] either P2D or WEBGL undefined
         *   defaults to p2d
         *   @param [canvas] existing html canvas element
         *   @return offscreen graphics buffer
         */
        createGraphics(w: number, h: number, renderer?: RENDERER, canvas?: object): Graphics;

        /**
         *   Creates and returns a new p5.Graphics object. Use
         *   this class if you need to draw into an off-screen
         *   graphics buffer. The two parameters define the
         *   width and height in pixels. A WebGL p5.Graphics
         *   will use a WebGL2 context if it is supported by
         *   the browser. Check the pg.webglVersion property of
         *   the renderer to check what version is being used,
         *   or call pg.setAttributes({ version: 1 }) to create
         *   a WebGL1 context.
         *
         *   Optionally, an existing canvas can be passed using
         *   a selector, ie. document.getElementById(''). By
         *   default this canvas will be hidden (offscreen
         *   buffer), to make visible, set element's style to
         *   display:block;
         *   @param w width of the offscreen graphics buffer
         *   @param h height of the offscreen graphics buffer
         *   @param [canvas] existing html canvas element
         *   @return offscreen graphics buffer
         */
        createGraphics(w: number, h: number, canvas?: object): Graphics;

        /**
         *   Creates and returns a new p5.Framebuffer, a
         *   high-performance WebGL object that you can draw to
         *   and then use as a texture. Options can include:
         *
         *   - format: The data format of the texture, either
         *   UNSIGNED_BYTE, FLOAT, or HALF_FLOAT. The default
         *   is UNSIGNED_BYTE.
         *   - channels: What color channels to store, either
         *   RGB or RGBA. The default is to match the channels
         *   in the main canvas (with alpha unless disabled
         *   with setAttributes.)
         *   - depth: A boolean, whether or not to include a
         *   depth buffer. Defaults to true.
         *   - depthFormat: The data format for depth
         *   information, either UNSIGNED_INT or FLOAT. The
         *   default is FLOAT if available, or UNSIGNED_INT
         *   otherwise.
         *   - antialias: Boolean or Number, whether or not to
         *   render with antialiased edges, and if so,
         *   optionally the number of samples to use. Defaults
         *   to whether or not the main canvas is antialiased,
         *   using a default of 2 samples if so. Antialiasing
         *   is only supported when WebGL 2 is available.
         *   - width: The width of the texture. Defaults to
         *   matching the main canvas.
         *   - height: The height of the texture. Defaults to
         *   matching the main canvas.
         *   - density: The pixel density of the texture.
         *   Defaults to the pixel density of the main canvas.
         *   - textureFiltering: Either LINEAR (nearby pixels
         *   will be interpolated when reading values from the
         *   color texture) or NEAREST (no interpolation.)
         *   Generally, use LINEAR when using the texture as an
         *   image, and use NEAREST if reading the texture as
         *   data. Defaults to LINEAR.
         *
         *   If width, height, or density are specified, then
         *   the framebuffer will keep that size until manually
         *   changed. Otherwise, it will be autosized, and it
         *   will update to match the main canvas's size and
         *   density when the main canvas changes.
         *   @param [options] An optional object with
         *   configuration
         */
        createFramebuffer(options?: object): void;

        /**
         *   Blends the pixels in the display window according
         *   to the defined mode. There is a choice of the
         *   following modes to blend the source pixels (A)
         *   with the ones of pixels already in the display
         *   window (B): - BLEND - linear interpolation of
         *   colours: C = A*factor + B. This is the default
         *   blending mode.
         *   - ADD - sum of A and B
         *   - DARKEST - only the darkest colour succeeds: C =
         *   min(A*factor, B).
         *   - LIGHTEST - only the lightest colour succeeds: C
         *   = max(A*factor, B).
         *   - DIFFERENCE - subtract colors from underlying
         *   image. (2D)
         *   - EXCLUSION - similar to DIFFERENCE, but less
         *   extreme.
         *   - MULTIPLY - multiply the colors, result will
         *   always be darker.
         *   - SCREEN - opposite multiply, uses inverse values
         *   of the colors.
         *   - REPLACE - the pixels entirely replace the others
         *   and don't utilize alpha (transparency) values.
         *   - REMOVE - removes pixels from B with the alpha
         *   strength of A.
         *   - OVERLAY - mix of MULTIPLY and SCREEN .
         *   Multiplies dark values, and screens light values.
         *   (2D)
         *   - HARD_LIGHT - SCREEN when greater than 50% gray,
         *   MULTIPLY when lower. (2D)
         *   - SOFT_LIGHT - mix of DARKEST and LIGHTEST. Works
         *   like OVERLAY, but not as harsh. (2D)
         *   - DODGE - lightens light tones and increases
         *   contrast, ignores darks. (2D)
         *   - BURN - darker areas are applied, increasing
         *   contrast, ignores lights. (2D)
         *   - SUBTRACT - remainder of A and B (3D)
         *
         *   (2D) indicates that this blend mode only works in
         *   the 2D renderer.
         *
         *   (3D) indicates that this blend mode only works in
         *   the WEBGL renderer.
         *   @param mode blend mode to set for canvas. either
         *   BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
         *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
         *   SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT
         */
        blendMode(mode: BLEND_MODE): void;

        /**
         *   The p5.js API provides a lot of functionality for
         *   creating graphics, but there is some native HTML5
         *   Canvas functionality that is not exposed by p5.
         *   You can still call it directly using the variable
         *   drawingContext, as in the example shown. This is
         *   the equivalent of calling canvas.getContext('2d');
         *   or canvas.getContext('webgl');. See this
         *   reference for the native canvas API for possible
         *   drawing functions you can call.
         */
        drawingContext: any;
    }
}
