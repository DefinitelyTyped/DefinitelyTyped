// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Framebuffer {
        /**
         *   An object that one can draw to and then read as a
         *   texture. While similar to a p5.Graphics, using a
         *   p5.Framebuffer as a texture will generally run
         *   much faster, as it lives within the same WebGL
         *   context as the canvas it is created on. It only
         *   works in WebGL mode.
         *
         *   @param target A p5 global instance or p5.Graphics
         *   @param [settings] A settings object
         */
        constructor(target: Graphics, settings?: object);

        /**
         *   Resizes the framebuffer to the given width and
         *   height.
         */
        resize(width: number, height: number): void;

        /**
         *   Gets or sets the pixel scaling for high pixel
         *   density displays. By default, the density will
         *   match that of the canvas the framebuffer was
         *   created on, which will match the display density.
         *   Call this method with no arguments to get the
         *   current density, or pass in a number to set the
         *   density.
         *   @param [density] A scaling factor for the number
         *   of pixels per side of the framebuffer
         */
        pixelDensity(density?: number): void;

        /**
         *   Gets or sets whether or not this framebuffer will
         *   automatically resize along with the canvas it's
         *   attached to in order to match its size. Call this
         *   method with no arguments to see if it is currently
         *   auto-sized, or pass in a boolean to set this
         *   property.
         *   @param [autoSized] Whether or not the framebuffer
         *   should resize along with the canvas it's attached
         *   to
         */
        autoSized(autoSized?: boolean): void;

        /**
         *   Creates and returns a new p5.FramebufferCamera to
         *   be used while drawing to this framebuffer. The
         *   camera will be set as the currently active camera.
         *   @return A new camera
         */
        createCamera(): Camera;

        /**
         *   Removes the framebuffer and frees its resources.
         */
        remove(): void;

        /**
         *   Begin drawing to this framebuffer. Subsequent
         *   drawing functions to the canvas the framebuffer is
         *   attached to will not be immediately visible, and
         *   will instead be drawn to the framebuffer's
         *   texture. Call end() when finished to make draw
         *   functions go right to the canvas again and to be
         *   able to read the contents of the framebuffer's
         *   texture.
         */
        begin(): void;

        /**
         *   After having previously called begin(), this
         *   method stops drawing functions from going to the
         *   framebuffer's texture, allowing them to go right
         *   to the canvas again. After this, one can read from
         *   the framebuffer's texture.
         */
        end(): void;

        /**
         *   Run a function while drawing to the framebuffer
         *   rather than to its canvas. This is equivalent to
         *   calling framebuffer.begin(), running the function,
         *   and then calling framebuffer.end(), but ensures
         *   that one never accidentally forgets begin or end.
         *   @param callback A function to run that draws to
         *   the canvas. The function will immediately be run,
         *   but it will draw to the framebuffer instead of the
         *   canvas.
         */
        draw(callback: (...args: any[]) => any): void;

        /**
         *   Get a region of pixels from the canvas in the form
         *   of a p5.Image, or a single pixel as an array of
         *   numbers. Returns an array of [R,G,B,A] values for
         *   any pixel or grabs a section of an image. If the
         *   Framebuffer has been set up to not store alpha
         *   values, then only [R,G,B] will be returned. If no
         *   parameters are specified, the entire image is
         *   returned. Use the x and y parameters to get the
         *   value of one pixel. Get a section of the display
         *   window by specifying additional w and h
         *   parameters. When getting an image, the x and y
         *   parameters define the coordinates for the
         *   upper-left corner of the image, regardless of the
         *   current imageMode().
         *   @param x x-coordinate of the pixel
         *   @param y y-coordinate of the pixel
         *   @param w width of the section to be returned
         *   @param h height of the section to be returned
         *   @return the rectangle p5.Image
         */
        get(x: number, y: number, w: number, h: number): Image;

        /**
         *   Get a region of pixels from the canvas in the form
         *   of a p5.Image, or a single pixel as an array of
         *   numbers. Returns an array of [R,G,B,A] values for
         *   any pixel or grabs a section of an image. If the
         *   Framebuffer has been set up to not store alpha
         *   values, then only [R,G,B] will be returned. If no
         *   parameters are specified, the entire image is
         *   returned. Use the x and y parameters to get the
         *   value of one pixel. Get a section of the display
         *   window by specifying additional w and h
         *   parameters. When getting an image, the x and y
         *   parameters define the coordinates for the
         *   upper-left corner of the image, regardless of the
         *   current imageMode().
         *   @return the whole p5.Image
         */
        get(): Image;

        /**
         *   Get a region of pixels from the canvas in the form
         *   of a p5.Image, or a single pixel as an array of
         *   numbers. Returns an array of [R,G,B,A] values for
         *   any pixel or grabs a section of an image. If the
         *   Framebuffer has been set up to not store alpha
         *   values, then only [R,G,B] will be returned. If no
         *   parameters are specified, the entire image is
         *   returned. Use the x and y parameters to get the
         *   value of one pixel. Get a section of the display
         *   window by specifying additional w and h
         *   parameters. When getting an image, the x and y
         *   parameters define the coordinates for the
         *   upper-left corner of the image, regardless of the
         *   current imageMode().
         *   @param x x-coordinate of the pixel
         *   @param y y-coordinate of the pixel
         *   @return color of pixel at x,y in array format [R,
         *   G, B, A]
         */
        get(x: number, y: number): number[];

        /**
         *   A Uint8ClampedArray containing the values for all
         *   the pixels in the Framebuffer. Like the main
         *   canvas pixels property, call loadPixels() before
         *   reading it, and call updatePixels() afterwards to
         *   update its data.
         *
         *   Note that updating pixels via this property will
         *   be slower than drawing to the framebuffer
         *   directly. Consider using a shader instead of
         *   looping over pixels.
         */
        pixels: number[];

        /**
         *   A texture with the color information of the
         *   framebuffer. Pass this (or the framebuffer itself)
         *   to texture() to draw it to the canvas, or pass it
         *   to a shader with setUniform() to read its data.
         *   Since Framebuffers are controlled by WebGL, their
         *   y coordinates are stored flipped compared to
         *   images and videos. When texturing with a
         *   framebuffer texture, you may want to flip
         *   vertically, e.g. with plane(framebuffer.width,
         *   -framebuffer.height).
         */
        color: any;

        /**
         *   A texture with the depth information of the
         *   framebuffer. If the framebuffer was created with {
         *   depth: false } in its settings, then this property
         *   will be undefined. Pass this to texture() to draw
         *   it to the canvas, or pass it to a shader with
         *   setUniform() to read its data. Since Framebuffers
         *   are controlled by WebGL, their y coordinates are
         *   stored flipped compared to images and videos. When
         *   texturing with a framebuffer texture, you may want
         *   to flip vertically, e.g. with
         *   plane(framebuffer.width, -framebuffer.height).
         */
        depth: any;
    }
}
