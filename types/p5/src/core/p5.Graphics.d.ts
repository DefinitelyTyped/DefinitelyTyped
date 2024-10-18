// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    // Work-around for p5.Graphics inheriting from both p5 and p5.Element
    class __Graphics__ extends Element {
        /**
         *   Thin wrapper around a renderer, to be used for
         *   creating a graphics buffer object. Use this class
         *   if you need to draw into an off-screen graphics
         *   buffer. The two parameters define the width and
         *   height in pixels. The fields and methods for this
         *   class are extensive, but mirror the normal drawing
         *   API for p5.
         *
         *   @param w width
         *   @param h height
         *   @param renderer the renderer to use, either P2D or
         *   WEBGL
         *   @param [pInst] pointer to p5 instance
         *   @param [canvas] existing html canvas element
         */
        constructor(w: number, h: number, renderer: GRAPHICS_RENDERER, pInst?: p5, canvas?: object);

        /**
         *   Resets certain values such as those modified by
         *   functions in the Transform category and in the
         *   Lights category that are not automatically reset
         *   with graphics buffer objects. Calling this in
         *   draw() will copy the behavior of the standard
         *   canvas.
         */
        reset(): void;

        /**
         *   Removes a Graphics object from the page and frees
         *   any resources associated with it.
         */
        remove(): void;

        /**
         *   Creates and returns a new p5.Framebuffer inside a
         *   p5.Graphics WebGL context. This takes the same
         *   parameters as the global createFramebuffer
         *   function.
         */
        createFramebuffer(): void;
    }
    // Work-around for p5.Graphics inheriting from both p5 and p5.Element
    type Graphics = __Graphics__ & p5;
}
