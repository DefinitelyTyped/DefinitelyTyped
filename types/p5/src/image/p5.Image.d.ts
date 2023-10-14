// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Image {
        /**
         *   Creates a new p5.Image. A p5.Image is a canvas
         *   backed representation of an image. p5 can display
         *   .gif, .jpg and .png images. Images may be
         *   displayed in 2D and 3D space. Before an image is
         *   used, it must be loaded with the loadImage()
         *   function. The p5.Image class contains fields for
         *   the width and height of the image, as well as an
         *   array called pixels[] that contains the values for
         *   every pixel in the image.
         *
         *   The methods described below allow easy access to
         *   the image's pixels and alpha channel and simplify
         *   the process of compositing.
         *
         *   Before using the pixels[] array, be sure to use
         *   the loadPixels() method on the image to make sure
         *   that the pixel data is properly loaded.
         *
         */
        constructor(width: number, height: number);

        /**
         *   Loads the pixels data for this image into the
         *   [pixels] attribute.
         */
        loadPixels(): void;

        /**
         *   Updates the backing canvas for this image with the
         *   contents of the [pixels] array. If this image is
         *   an animated GIF then the pixels will be updated in
         *   the frame that is currently displayed.
         *   @param x x-offset of the target update area for
         *   the underlying canvas
         *   @param y y-offset of the target update area for
         *   the underlying canvas
         *   @param w width of the target update area for the
         *   underlying canvas
         *   @param h height of the target update area for the
         *   underlying canvas
         */
        updatePixels(x: number, y: number, w: number, h: number): void;

        /**
         *   Updates the backing canvas for this image with the
         *   contents of the [pixels] array. If this image is
         *   an animated GIF then the pixels will be updated in
         *   the frame that is currently displayed.
         */
        updatePixels(): void;

        /**
         *   Get a region of pixels from an image. If no params
         *   are passed, the whole image is returned. If x and
         *   y are the only params passed a single pixel is
         *   extracted. If all params are passed a rectangle
         *   region is extracted and a p5.Image is returned.
         *   @param x x-coordinate of the pixel
         *   @param y y-coordinate of the pixel
         *   @param w width
         *   @param h height
         *   @return the rectangle p5.Image
         */
        get(x: number, y: number, w: number, h: number): Image;

        /**
         *   Get a region of pixels from an image. If no params
         *   are passed, the whole image is returned. If x and
         *   y are the only params passed a single pixel is
         *   extracted. If all params are passed a rectangle
         *   region is extracted and a p5.Image is returned.
         *   @return the whole p5.Image
         */
        get(): Image;

        /**
         *   Get a region of pixels from an image. If no params
         *   are passed, the whole image is returned. If x and
         *   y are the only params passed a single pixel is
         *   extracted. If all params are passed a rectangle
         *   region is extracted and a p5.Image is returned.
         *   @param x x-coordinate of the pixel
         *   @param y y-coordinate of the pixel
         *   @return color of pixel at x,y in array format [R,
         *   G, B, A]
         */
        get(x: number, y: number): number[];

        /**
         *   Set the color of a single pixel or write an image
         *   into this p5.Image. Note that for a large number
         *   of pixels this will be slower than directly
         *   manipulating the pixels array and then calling
         *   updatePixels().
         *   @param x x-coordinate of the pixel
         *   @param y y-coordinate of the pixel
         *   @param a grayscale value | pixel array | a
         *   p5.Color | image to copy
         */
        set(x: number, y: number, a: number | number[] | object): void;

        /**
         *   Resize the image to a new width and height. To
         *   make the image scale proportionally, use 0 as the
         *   value for the wide or high parameter. For
         *   instance, to make the width of an image 150
         *   pixels, and change the height using the same
         *   proportion, use resize(150, 0).
         *   @param width the resized image width
         *   @param height the resized image height
         */
        resize(width: number, height: number): void;

        /**
         *   Copies a region of pixels from one image to
         *   another. If no srcImage is specified this is used
         *   as the source. If the source and destination
         *   regions aren't the same size, it will
         *   automatically resize source pixels to fit the
         *   specified target region.
         *   @param srcImage source image
         *   @param sx X coordinate of the source's upper left
         *   corner
         *   @param sy Y coordinate of the source's upper left
         *   corner
         *   @param sw source image width
         *   @param sh source image height
         *   @param dx X coordinate of the destination's upper
         *   left corner
         *   @param dy Y coordinate of the destination's upper
         *   left corner
         *   @param dw destination image width
         *   @param dh destination image height
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
         *   Copies a region of pixels from one image to
         *   another. If no srcImage is specified this is used
         *   as the source. If the source and destination
         *   regions aren't the same size, it will
         *   automatically resize source pixels to fit the
         *   specified target region.
         *   @param sx X coordinate of the source's upper left
         *   corner
         *   @param sy Y coordinate of the source's upper left
         *   corner
         *   @param sw source image width
         *   @param sh source image height
         *   @param dx X coordinate of the destination's upper
         *   left corner
         *   @param dy Y coordinate of the destination's upper
         *   left corner
         *   @param dw destination image width
         *   @param dh destination image height
         */
        copy(sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;

        /**
         *   Masks part of an image from displaying by loading
         *   another image and using its alpha channel as an
         *   alpha channel for this image. Masks are
         *   cumulative, once applied to an image object, they
         *   cannot be removed.
         *   @param srcImage source image
         */
        mask(srcImage: Image): void;

        /**
         *   Applies an image filter to a p5.Image THRESHOLD
         *   Converts the image to black and white pixels
         *   depending if they are above or below the threshold
         *   defined by the level parameter. The parameter must
         *   be between 0.0 (black) and 1.0 (white). If no
         *   level is specified, 0.5 is used.
         *
         *   GRAY Converts any colors in the image to grayscale
         *   equivalents. No parameter is used.
         *
         *   OPAQUE Sets the alpha channel to entirely opaque.
         *   No parameter is used.
         *
         *   INVERT Sets each pixel to its inverse value. No
         *   parameter is used.
         *
         *   POSTERIZE Limits each channel of the image to the
         *   number of colors specified as the parameter. The
         *   parameter can be set to values between 2 and 255,
         *   but results are most noticeable in the lower
         *   ranges.
         *
         *   BLUR Executes a Gaussian blur with the level
         *   parameter specifying the extent of the blurring.
         *   If no parameter is used, the blur is equivalent to
         *   Gaussian blur of radius 1. Larger values increase
         *   the blur.
         *
         *   ERODE Reduces the light areas. No parameter is
         *   used.
         *
         *   DILATE Increases the light areas. No parameter is
         *   used.
         *
         *   filter() does not work in WEBGL mode. A similar
         *   effect can be achieved in WEBGL mode using custom
         *   shaders. Adam Ferriss has written a selection of
         *   shader examples that contains many of the effects
         *   present in the filter examples.
         *   @param filterType either THRESHOLD, GRAY, OPAQUE,
         *   INVERT, POSTERIZE, ERODE, DILATE or BLUR. See
         *   Filters.js for docs on each available filter
         *   @param [filterParam] an optional parameter unique
         *   to each filter, see above
         */
        filter(filterType: FILTER_TYPE, filterParam?: number): void;

        /**
         *   Copies a region of pixels from one image to
         *   another, using a specified blend mode to do the
         *   operation.
         *   @param srcImage source image
         *   @param sx X coordinate of the source's upper left
         *   corner
         *   @param sy Y coordinate of the source's upper left
         *   corner
         *   @param sw source image width
         *   @param sh source image height
         *   @param dx X coordinate of the destination's upper
         *   left corner
         *   @param dy Y coordinate of the destination's upper
         *   left corner
         *   @param dw destination image width
         *   @param dh destination image height
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
         *   Copies a region of pixels from one image to
         *   another, using a specified blend mode to do the
         *   operation.
         *   @param sx X coordinate of the source's upper left
         *   corner
         *   @param sy Y coordinate of the source's upper left
         *   corner
         *   @param sw source image width
         *   @param sh source image height
         *   @param dx X coordinate of the destination's upper
         *   left corner
         *   @param dy Y coordinate of the destination's upper
         *   left corner
         *   @param dw destination image width
         *   @param dh destination image height
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
         *   Saves the image to a file and force the browser to
         *   download it. Accepts two strings for filename and
         *   file extension Supports png (default), jpg, and
         *   gif  Note that the file will only be downloaded as
         *   an animated GIF if the p5.Image was loaded from a
         *   GIF file.
         *   @param filename give your file a name
         *   @param extension 'png' or 'jpg'
         */
        save(filename: string, extension: string): void;

        /**
         *   Starts an animated GIF over at the beginning
         *   state.
         */
        reset(): void;

        /**
         *   Gets the index for the frame that is currently
         *   visible in an animated GIF.
         *   @return The index for the currently displaying
         *   frame in animated GIF
         */
        getCurrentFrame(): number;

        /**
         *   Sets the index of the frame that is currently
         *   visible in an animated GIF
         *   @param index the index for the frame that should
         *   be displayed
         */
        setFrame(index: number): void;

        /**
         *   Returns the number of frames in an animated GIF
         */
        numFrames(): number;

        /**
         *   Plays an animated GIF that was paused with pause()
         */
        play(): void;

        /**
         *   Pauses an animated GIF.
         */
        pause(): void;

        /**
         *   Changes the delay between frames in an animated
         *   GIF. There is an optional second parameter that
         *   indicates an index for a specific frame that
         *   should have its delay modified. If no index is
         *   given, all frames will have the new delay.
         *   @param d the amount in milliseconds to delay
         *   between switching frames
         *   @param [index] the index of the frame that should
         *   have the new delay value {optional}
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
         *   Array containing the values for all the pixels in
         *   the display window. These values are numbers. This
         *   array is the size (include an appropriate factor
         *   for pixelDensity) of the display window x4,
         *   representing the R, G, B, A values in order for
         *   each pixel, moving from left to right across each
         *   row, then down each column. Retina and other high
         *   density displays may have more pixels (by a factor
         *   of pixelDensity^2). For example, if the image is
         *   100×100 pixels, there will be 40,000. With
         *   pixelDensity = 2, there will be 160,000. The first
         *   four values (indices 0-3) in the array will be the
         *   R, G, B, A values of the pixel at (0, 0). The
         *   second four values (indices 4-7) will contain the
         *   R, G, B, A values of the pixel at (1, 0). More
         *   generally, to set values for a pixel at (x, y):
         *   let d = pixelDensity(); for (let i = 0; i < d;
         *   i++) { for (let j = 0; j < d; j++) { // loop over
         *   index = 4 * ((y * d + j) * width * d + (x * d +
         *   i)); pixels[index] = r; pixels[index+1] = g;
         *   pixels[index+2] = b; pixels[index+3] = a; } }
         *
         *   Before accessing this array, the data must loaded
         *   with the loadPixels() function. After the array
         *   data has been modified, the updatePixels()
         *   function must be run to update the changes.
         */
        pixels: number[];
    }
}
