// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Creates a canvas element in the document, and sets
         *   the dimensions of it in pixels. This method should
         *   be called only once at the start of setup. Calling
         *   createCanvas more than once in a sketch will
         *   result in very unpredictable behavior. If you want
         *   more than one drawing canvas you could use
         *   createGraphics (hidden by default but it can be
         *   shown).  The system variables width and height are
         *   set by the parameters passed to this function. If
         *   createCanvas() is not used, the window will be
         *   given a default size of 100x100 pixels.
         *
         *
         *   For more ways to position the canvas, see the
         *   positioning the canvas wiki page.
         *   @param w width of the canvas
         *   @param h height of the canvas
         *   @param [renderer] either P2D or WEBGL
         */
        createCanvas(w: number, h: number, renderer?: RENDERER): Renderer;

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
         *   Creates and returns a new p5.Renderer object. Use
         *   this class if you need to draw into an off-screen
         *   graphics buffer. The two parameters define the
         *   width and height in pixels.
         *   @param w width of the offscreen graphics buffer
         *   @param h height of the offscreen graphics buffer
         *   @param [renderer] either P2D or WEBGL undefined
         *   defaults to p2d
         *   @return offscreen graphics buffer
         */
        createGraphics(w: number, h: number, renderer?: RENDERER): Graphics;

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
         *   image.
         *   - EXCLUSION - similar to DIFFERENCE, but less
         *   extreme.
         *   - MULTIPLY - multiply the colors, result will
         *   always be darker.
         *   - SCREEN - opposite multiply, uses inverse values
         *   of the colors.
         *   - REPLACE - the pixels entirely replace the others
         *   and don't utilize alpha (transparency) values.
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
         *
         *   (2D) indicates that this blend mode only works in
         *   the 2D renderer.
         *
         *   (3D) indicates that this blend mode only works in
         *   the WEBGL renderer.
         *   @param mode blend mode to set for canvas. either
         *   BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
         *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
         *   SOFT_LIGHT, DODGE, BURN, ADD, or SUBTRACT
         */
        blendMode(mode: BLEND_MODE): void;

        /**
         * The p5.js API provides a lot of functionality for creating graphics, but there is
         * some native HTML5 Canvas functionality that is not exposed by p5. You can still call
         * it directly using the variable `drawingContext`, as in the example shown. This is
         * the equivalent of calling `canvas.getContext('2d');` or `canvas.getContext('webgl');`.
         * See this
         * <a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D">
         * reference for the native canvas API</a> for possible drawing functions you can call.
         *
         */
        drawingContext: CanvasRenderingContext2D|WebGLRenderingContext;
    }
}
