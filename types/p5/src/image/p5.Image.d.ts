// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Image {
        /**
         *   A class to describe an image. Images are
         *   rectangular grids of pixels that can be displayed
         *   and modified. Existing images can be loaded by
         *   calling loadImage(). Blank images can be created
         *   by calling createImage(). p5.Image objects have
         *   methods for common tasks such as applying filters
         *   and modifying pixel values.
         *
         */
        constructor(width: number, height: number);

        /**
         *   Gets or sets the pixel density for high pixel
         *   density displays. By default, the density will be
         *   set to 1. Call this method with no arguments to
         *   get the default density, or pass in a number to
         *   set the density. If a non-positive number is
         *   provided, it defaults to 1.
         *   @param [density] A scaling factor for the number
         *   of pixels per side
         *   @return The current density if called without
         *   arguments, or the instance for chaining if setting
         *   density.
         */
        pixelDensity(density?: number): number;

        /**
         *   Loads the current value of each pixel in the
         *   p5.Image object into the img.pixels array. This
         *   method must be called before reading or modifying
         *   pixel values.
         */
        loadPixels(): void;

        /**
         *   Updates the canvas with the RGBA values in the
         *   img.pixels array. img.updatePixels() only needs to
         *   be called after changing values in the img.pixels
         *   array. Such changes can be made directly after
         *   calling img.loadPixels() or by calling img.set().
         *
         *   The optional parameters x, y, width, and height
         *   define a subsection of the p5.Image object to
         *   update. Doing so can improve performance in some
         *   cases.
         *
         *   If the p5.Image object was loaded from a GIF, then
         *   calling img.updatePixels() will update the pixels
         *   in current frame.
         *   @param x x-coordinate of the upper-left corner of
         *   the subsection to update.
         *   @param y y-coordinate of the upper-left corner of
         *   the subsection to update.
         *   @param w width of the subsection to update.
         *   @param h height of the subsection to update.
         */
        updatePixels(x: number, y: number, w: number, h: number): void;

        /**
         *   Updates the canvas with the RGBA values in the
         *   img.pixels array. img.updatePixels() only needs to
         *   be called after changing values in the img.pixels
         *   array. Such changes can be made directly after
         *   calling img.loadPixels() or by calling img.set().
         *
         *   The optional parameters x, y, width, and height
         *   define a subsection of the p5.Image object to
         *   update. Doing so can improve performance in some
         *   cases.
         *
         *   If the p5.Image object was loaded from a GIF, then
         *   calling img.updatePixels() will update the pixels
         *   in current frame.
         */
        updatePixels(): void;

        /**
         *   Gets a pixel or a region of pixels from a p5.Image
         *   object. img.get() is easy to use but it's not as
         *   fast as img.pixels. Use img.pixels to read many
         *   pixel values.
         *
         *   The version of img.get() with no parameters
         *   returns the entire image.
         *
         *   The version of img.get() with two parameters
         *   interprets them as coordinates. It returns an
         *   array with the [R, G, B, A] values of the pixel at
         *   the given point.
         *
         *   The version of img.get() with four parameters
         *   interprets them as coordinates and dimensions. It
         *   returns a subsection of the canvas as a p5.Image
         *   object. The first two parameters are the
         *   coordinates for the upper-left corner of the
         *   subsection. The last two parameters are the width
         *   and height of the subsection.
         *
         *   Use img.get() to work directly with p5.Image
         *   objects.
         *   @param x x-coordinate of the pixel.
         *   @param y y-coordinate of the pixel.
         *   @param w width of the subsection to be returned.
         *   @param h height of the subsection to be returned.
         *   @return subsection as a p5.Image object.
         */
        get(x: number, y: number, w: number, h: number): Image;

        /**
         *   Gets a pixel or a region of pixels from a p5.Image
         *   object. img.get() is easy to use but it's not as
         *   fast as img.pixels. Use img.pixels to read many
         *   pixel values.
         *
         *   The version of img.get() with no parameters
         *   returns the entire image.
         *
         *   The version of img.get() with two parameters
         *   interprets them as coordinates. It returns an
         *   array with the [R, G, B, A] values of the pixel at
         *   the given point.
         *
         *   The version of img.get() with four parameters
         *   interprets them as coordinates and dimensions. It
         *   returns a subsection of the canvas as a p5.Image
         *   object. The first two parameters are the
         *   coordinates for the upper-left corner of the
         *   subsection. The last two parameters are the width
         *   and height of the subsection.
         *
         *   Use img.get() to work directly with p5.Image
         *   objects.
         *   @return whole p5.Image
         */
        get(): Image;

        /**
         *   Gets a pixel or a region of pixels from a p5.Image
         *   object. img.get() is easy to use but it's not as
         *   fast as img.pixels. Use img.pixels to read many
         *   pixel values.
         *
         *   The version of img.get() with no parameters
         *   returns the entire image.
         *
         *   The version of img.get() with two parameters
         *   interprets them as coordinates. It returns an
         *   array with the [R, G, B, A] values of the pixel at
         *   the given point.
         *
         *   The version of img.get() with four parameters
         *   interprets them as coordinates and dimensions. It
         *   returns a subsection of the canvas as a p5.Image
         *   object. The first two parameters are the
         *   coordinates for the upper-left corner of the
         *   subsection. The last two parameters are the width
         *   and height of the subsection.
         *
         *   Use img.get() to work directly with p5.Image
         *   objects.
         *   @param x x-coordinate of the pixel.
         *   @param y y-coordinate of the pixel.
         *   @return color of the pixel at (x, y) in array
         *   format `[R, G, B, A]`.
         */
        get(x: number, y: number): number[];

        /**
         *   Sets the color of one or more pixels within a
         *   p5.Image object. img.set() is easy to use but it's
         *   not as fast as img.pixels. Use img.pixels to set
         *   many pixel values.
         *
         *   img.set() interprets the first two parameters as
         *   x- and y-coordinates. It interprets the last
         *   parameter as a grayscale value, a [R, G, B, A]
         *   pixel array, a p5.Color object, or another
         *   p5.Image object.
         *
         *   img.updatePixels() must be called after using
         *   img.set() for changes to appear.
         *   @param x x-coordinate of the pixel.
         *   @param y y-coordinate of the pixel.
         *   @param a grayscale value | pixel array | p5.Color
         *   object | p5.Image to copy.
         */
        set(x: number, y: number, a: number | number[] | object): void;

        /**
         *   Resizes the p5.Image object to a given width and
         *   height. The image's original aspect ratio can be
         *   kept by passing 0 for either width or height. For
         *   example, calling img.resize(50, 0) on an image
         *   that was 500 × 300 pixels will resize it to 50 ×
         *   30 pixels.
         *   @param width resized image width.
         *   @param height resized image height.
         */
        resize(width: number, height: number): void;

        /**
         *   Copies pixels from a source p5.Image to this one.
         *   Calling img.copy() will scale pixels from the
         *   source region if it isn't the same size as the
         *   destination region.
         *   @param srcImage source image.
         *   @param sx x-coordinate of the source's upper-left
         *   corner.
         *   @param sy y-coordinate of the source's upper-left
         *   corner.
         *   @param sw source image width.
         *   @param sh source image height.
         *   @param dx x-coordinate of the destination's
         *   upper-left corner.
         *   @param dy y-coordinate of the destination's
         *   upper-left corner.
         *   @param dw destination image width.
         *   @param dh destination image height.
         */
        copy(
            srcImage: Image | Element,
            sx: number,
            sy: number,
            sw: number,
            sh: number,
            dx: number,
            dy: number,
            dw: number,
            dh: number
        ): void;

        /**
         *   Copies pixels from a source p5.Image to this one.
         *   Calling img.copy() will scale pixels from the
         *   source region if it isn't the same size as the
         *   destination region.
         *   @param sx x-coordinate of the source's upper-left
         *   corner.
         *   @param sy y-coordinate of the source's upper-left
         *   corner.
         *   @param sw source image width.
         *   @param sh source image height.
         *   @param dx x-coordinate of the destination's
         *   upper-left corner.
         *   @param dy y-coordinate of the destination's
         *   upper-left corner.
         *   @param dw destination image width.
         *   @param dh destination image height.
         */
        copy(sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;

        /**
         *   Masks part of an image from displaying by loading
         *   another image and using its alpha channel as an
         *   alpha channel for this image. Masks are
         *   cumulative, once applied to an image object, they
         *   cannot be removed.
         *   @param srcImage source image.
         */
        mask(srcImage: Image): void;

        /**
         *   Applies an image filter to the p5.Image object.
         *   The preset options are: INVERT Inverts the colors
         *   in the image. No parameter is used.
         *
         *   GRAY Converts the image to grayscale. No parameter
         *   is used.
         *
         *   THRESHOLD Converts the image to black and white.
         *   Pixels with a grayscale value above a given
         *   threshold are converted to white. The rest are
         *   converted to black. The threshold must be between
         *   0.0 (black) and 1.0 (white). If no value is
         *   specified, 0.5 is used.
         *
         *   OPAQUE Sets the alpha channel to be entirely
         *   opaque. No parameter is used.
         *
         *   POSTERIZE Limits the number of colors in the
         *   image. Each color channel is limited to the number
         *   of colors specified. Values between 2 and 255 are
         *   valid, but results are most noticeable with lower
         *   values. The default value is 4.
         *
         *   BLUR Blurs the image. The level of blurring is
         *   specified by a blur radius. Larger values increase
         *   the blur. The default value is 4. A gaussian blur
         *   is used in P2D mode. A box blur is used in WEBGL
         *   mode.
         *
         *   ERODE Reduces the light areas. No parameter is
         *   used.
         *
         *   DILATE Increases the light areas. No parameter is
         *   used.
         *   @param filterType either THRESHOLD, GRAY, OPAQUE,
         *   INVERT, POSTERIZE, ERODE, DILATE or BLUR.
         *   @param [filterParam] parameter unique to each
         *   filter.
         */
        filter(filterType: FILTER_TYPE, filterParam?: number): void;

        /**
         *   Copies a region of pixels from another p5.Image
         *   object into this one. The blendMode parameter
         *   blends the images' colors to create different
         *   effects.
         *   @param srcImage source image
         *   @param sx x-coordinate of the source's upper-left
         *   corner.
         *   @param sy y-coordinate of the source's upper-left
         *   corner.
         *   @param sw source image width.
         *   @param sh source image height.
         *   @param dx x-coordinate of the destination's
         *   upper-left corner.
         *   @param dy y-coordinate of the destination's
         *   upper-left corner.
         *   @param dw destination image width.
         *   @param dh destination image height.
         *   @param blendMode the blend mode. either BLEND,
         *   DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
         *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
         *   SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.
         *
         *   Available blend modes are: normal | multiply |
         *   screen | overlay | darken | lighten | color-dodge
         *   | color-burn | hard-light | soft-light |
         *   difference | exclusion | hue | saturation | color
         *   | luminosity
         *
         *   http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
         */
        blend(
            srcImage: Image,
            sx: number,
            sy: number,
            sw: number,
            sh: number,
            dx: number,
            dy: number,
            dw: number,
            dh: number,
            blendMode: BLEND_MODE
        ): void;

        /**
         *   Copies a region of pixels from another p5.Image
         *   object into this one. The blendMode parameter
         *   blends the images' colors to create different
         *   effects.
         *   @param sx x-coordinate of the source's upper-left
         *   corner.
         *   @param sy y-coordinate of the source's upper-left
         *   corner.
         *   @param sw source image width.
         *   @param sh source image height.
         *   @param dx x-coordinate of the destination's
         *   upper-left corner.
         *   @param dy y-coordinate of the destination's
         *   upper-left corner.
         *   @param dw destination image width.
         *   @param dh destination image height.
         *   @param blendMode the blend mode. either BLEND,
         *   DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
         *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
         *   SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.
         *
         *   Available blend modes are: normal | multiply |
         *   screen | overlay | darken | lighten | color-dodge
         *   | color-burn | hard-light | soft-light |
         *   difference | exclusion | hue | saturation | color
         *   | luminosity
         *
         *   http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
         */
        blend(
            sx: number,
            sy: number,
            sw: number,
            sh: number,
            dx: number,
            dy: number,
            dw: number,
            dh: number,
            blendMode: UNKNOWN_P5_CONSTANT
        ): void;

        /**
         *   Saves the p5.Image object to a file. The browser
         *   will either save the file immediately or prompt
         *   the user with a dialogue window. By default,
         *   calling img.save() will save the image as
         *   untitled.png.
         *
         *   Calling img.save() with one argument, as in
         *   img.save('photo.png'), will set the image's
         *   filename and type together.
         *
         *   Calling img.save() with two arguments, as in
         *   image.save('photo', 'png'), will set the image's
         *   filename and type separately.
         *
         *   The image will only be downloaded as an animated
         *   GIF if the p5.Image object was loaded from a GIF
         *   file. See saveGif() to create new GIFs.
         *   @param filename filename. Defaults to 'untitled'.
         *   @param [extension] file extension, either 'png' or
         *   'jpg'. Defaults to 'png'.
         */
        save(filename: string, extension?: string): void;

        /**
         *   Restarts an animated GIF at its first frame.
         */
        reset(): void;

        /**
         *   Gets the index of the current frame in an animated
         *   GIF.
         *   @return index of the GIF's current frame.
         */
        getCurrentFrame(): number;

        /**
         *   Sets the current frame in an animated GIF.
         *   @param index index of the frame to display.
         */
        setFrame(index: number): void;

        /**
         *   Returns the number of frames in an animated GIF.
         *   @return number of frames in the GIF.
         */
        numFrames(): number;

        /**
         *   Plays an animated GIF that was paused with
         *   img.pause().
         */
        play(): void;

        /**
         *   Pauses an animated GIF. The GIF can be resumed by
         *   calling img.play().
         */
        pause(): void;

        /**
         *   Changes the delay between frames in an animated
         *   GIF. The second parameter, index, is optional. If
         *   provided, only the frame at index will have its
         *   delay modified. All other frames will keep their
         *   default delay.
         *   @param d delay in milliseconds between switching
         *   frames.
         *   @param [index] index of the frame that will have
         *   its delay modified.
         */
        delay(d: number, index?: number): void;

        /**
         *   Image width.
         */
        width: number;

        /**
         *   Image height.
         */
        height: number;

        /**
         *   An array containing the color of each pixel in the
         *   p5.Image object. Colors are stored as numbers
         *   representing red, green, blue, and alpha (RGBA)
         *   values. img.pixels is a one-dimensional array for
         *   performance reasons. Each pixel occupies four
         *   elements in the pixels array, one for each RGBA
         *   value. For example, the pixel at coordinates (0,
         *   0) stores its RGBA values at img.pixels[0],
         *   img.pixels[1], img.pixels[2], and img.pixels[3],
         *   respectively. The next pixel at coordinates (1, 0)
         *   stores its RGBA values at img.pixels[4],
         *   img.pixels[5], img.pixels[6], and img.pixels[7].
         *   And so on. The img.pixels array for a 100×100
         *   p5.Image object has 100 × 100 × 4 = 40,000
         *   elements.
         *
         *   Accessing the RGBA values for a pixel in the
         *   p5.Image object requires a little math as shown
         *   below. The img.loadPixels() method must be called
         *   before accessing the img.pixels array. The
         *   img.updatePixels() method must be called after any
         *   changes are made.
         */
        pixels: number[];
    }
}
