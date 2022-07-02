// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
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
         *   Copies a region of the canvas to another region of
         *   the canvas and copies a region of pixels from an
         *   image used as the srcImg parameter into the canvas
         *   srcImage is specified this is used as the source.
         *   If the source and destination regions aren't the
         *   same size, it will automatically resize source
         *   pixels to fit the specified target region.
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
         *   Copies a region of the canvas to another region of
         *   the canvas and copies a region of pixels from an
         *   image used as the srcImg parameter into the canvas
         *   srcImage is specified this is used as the source.
         *   If the source and destination regions aren't the
         *   same size, it will automatically resize source
         *   pixels to fit the specified target region.
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
         *   Applies a filter to the canvas. The presets
         *   options are: THRESHOLD Converts the image to black
         *   and white pixels depending if they are above or
         *   below the threshold defined by the level
         *   parameter. The parameter must be between 0.0
         *   (black) and 1.0 (white). If no level is specified,
         *   0.5 is used.
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
         *   INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.
         *   See Filters.js for docs on each available filter
         *   @param [filterParam] an optional parameter unique
         *   to each filter, see above
         */
        filter(filterType: FILTER_TYPE, filterParam?: number): void;

        /**
         *   Get a region of pixels, or a single pixel, from
         *   the canvas. Returns an array of [R,G,B,A] values
         *   for any pixel or grabs a section of an image. If
         *   no parameters are specified, the entire image is
         *   returned. Use the x and y parameters to get the
         *   value of one pixel. Get a section of the display
         *   window by specifying additional w and h
         *   parameters. When getting an image, the x and y
         *   parameters define the coordinates for the
         *   upper-left corner of the image, regardless of the
         *   current imageMode().
         *
         *   Getting the color of a single pixel with get(x, y)
         *   is easy, but not as fast as grabbing the data
         *   directly from pixels[]. The equivalent statement
         *   to get(x, y) using pixels[] with pixel density d
         *   is
         *
         *   let x, y, d; // set these to the coordinates let
         *   off = (y * width + x) * d * 4; let components = [
         *   pixels[off], pixels[off + 1], pixels[off + 2],
         *   pixels[off + 3] ]; print(components);
         *
         *   See the reference for pixels[] for more
         *   information.
         *
         *   If you want to extract an array of colors or a
         *   subimage from an p5.Image object, take a look at
         *   p5.Image.get()
         *   @param x x-coordinate of the pixel
         *   @param y y-coordinate of the pixel
         *   @param w width
         *   @param h height
         *   @return the rectangle p5.Image
         */
        get(x: number, y: number, w: number, h: number): Image;

        /**
         *   Get a region of pixels, or a single pixel, from
         *   the canvas. Returns an array of [R,G,B,A] values
         *   for any pixel or grabs a section of an image. If
         *   no parameters are specified, the entire image is
         *   returned. Use the x and y parameters to get the
         *   value of one pixel. Get a section of the display
         *   window by specifying additional w and h
         *   parameters. When getting an image, the x and y
         *   parameters define the coordinates for the
         *   upper-left corner of the image, regardless of the
         *   current imageMode().
         *
         *   Getting the color of a single pixel with get(x, y)
         *   is easy, but not as fast as grabbing the data
         *   directly from pixels[]. The equivalent statement
         *   to get(x, y) using pixels[] with pixel density d
         *   is
         *
         *   let x, y, d; // set these to the coordinates let
         *   off = (y * width + x) * d * 4; let components = [
         *   pixels[off], pixels[off + 1], pixels[off + 2],
         *   pixels[off + 3] ]; print(components);
         *
         *   See the reference for pixels[] for more
         *   information.
         *
         *   If you want to extract an array of colors or a
         *   subimage from an p5.Image object, take a look at
         *   p5.Image.get()
         *   @return the whole p5.Image
         */
        get(): Image;

        /**
         *   Get a region of pixels, or a single pixel, from
         *   the canvas. Returns an array of [R,G,B,A] values
         *   for any pixel or grabs a section of an image. If
         *   no parameters are specified, the entire image is
         *   returned. Use the x and y parameters to get the
         *   value of one pixel. Get a section of the display
         *   window by specifying additional w and h
         *   parameters. When getting an image, the x and y
         *   parameters define the coordinates for the
         *   upper-left corner of the image, regardless of the
         *   current imageMode().
         *
         *   Getting the color of a single pixel with get(x, y)
         *   is easy, but not as fast as grabbing the data
         *   directly from pixels[]. The equivalent statement
         *   to get(x, y) using pixels[] with pixel density d
         *   is
         *
         *   let x, y, d; // set these to the coordinates let
         *   off = (y * width + x) * d * 4; let components = [
         *   pixels[off], pixels[off + 1], pixels[off + 2],
         *   pixels[off + 3] ]; print(components);
         *
         *   See the reference for pixels[] for more
         *   information.
         *
         *   If you want to extract an array of colors or a
         *   subimage from an p5.Image object, take a look at
         *   p5.Image.get()
         *   @param x x-coordinate of the pixel
         *   @param y y-coordinate of the pixel
         *   @return color of pixel at x,y in array format [R,
         *   G, B, A]
         */
        get(x: number, y: number): number[];

        /**
         *   Loads the pixel data for the display window into
         *   the pixels[] array. This function must always be
         *   called before reading from or writing to pixels[].
         *   Note that only changes made with set() or direct
         *   manipulation of pixels[] will occur.
         */
        loadPixels(): void;

        /**
         *   Changes the color of any pixel, or writes an image
         *   directly to the display window. The x and y
         *   parameters specify the pixel to change and the c
         *   parameter specifies the color value. This can be a
         *   p5.Color object, or [R, G, B, A] pixel array. It
         *   can also be a single grayscale value. When setting
         *   an image, the x and y parameters define the
         *   coordinates for the upper-left corner of the
         *   image, regardless of the current imageMode().
         *   After using set(), you must call updatePixels()
         *   for your changes to appear. This should be called
         *   once all pixels have been set, and must be called
         *   before calling .get() or drawing the image.
         *
         *   Setting the color of a single pixel with set(x, y)
         *   is easy, but not as fast as putting the data
         *   directly into pixels[]. Setting the pixels[]
         *   values directly may be complicated when working
         *   with a retina display, but will perform better
         *   when lots of pixels need to be set directly on
         *   every loop. See the reference for pixels[] for
         *   more information.
         *   @param x x-coordinate of the pixel
         *   @param y y-coordinate of the pixel
         *   @param c insert a grayscale value | a pixel array
         *   | a p5.Color object | a p5.Image to copy
         */
        set(x: number, y: number, c: number | number[] | object): void;

        /**
         *   Updates the display window with the data in the
         *   pixels[] array. Use in conjunction with
         *   loadPixels(). If you're only reading pixels from
         *   the array, there's no need to call updatePixels()
         *   — updating is only necessary to apply changes.
         *   updatePixels() should be called anytime the pixels
         *   array is manipulated or set() is called, and only
         *   changes made with set() or direct changes to
         *   pixels[] will occur.
         *   @param [x] x-coordinate of the upper-left corner
         *   of region to update
         *   @param [y] y-coordinate of the upper-left corner
         *   of region to update
         *   @param [w] width of region to update
         *   @param [h] height of region to update
         */
        updatePixels(x?: number, y?: number, w?: number, h?: number): void;

        /**
         *   Uint8ClampedArray containing the values for all
         *   the pixels in the display window. These values are
         *   numbers. This array is the size (include an
         *   appropriate factor for pixelDensity) of the
         *   display window x4, representing the R, G, B, A
         *   values in order for each pixel, moving from left
         *   to right across each row, then down each column.
         *   Retina and other high density displays will have
         *   more pixels[] (by a factor of pixelDensity^2). For
         *   example, if the image is 100×100 pixels, there
         *   will be 40,000. On a retina display, there will be
         *   160,000. The first four values (indices 0-3) in
         *   the array will be the R, G, B, A values of the
         *   pixel at (0, 0). The second four values (indices
         *   4-7) will contain the R, G, B, A values of the
         *   pixel at (1, 0). More generally, to set values for
         *   a pixel at (x, y):
         *
         *   let d = pixelDensity(); for (let i = 0; i < d;
         *   i++) { for (let j = 0; j < d; j++) { // loop over
         *   index = 4 * ((y * d + j) * width * d + (x * d +
         *   i)); pixels[index] = r; pixels[index+1] = g;
         *   pixels[index+2] = b; pixels[index+3] = a; } }
         *
         *   While the above method is complex, it is flexible
         *   enough to work with any pixelDensity. Note that
         *   set() will automatically take care of setting all
         *   the appropriate values in pixels[] for a given (x,
         *   y) at any pixelDensity, but the performance may
         *   not be as fast when lots of modifications are made
         *   to the pixel array.
         *
         *   Before accessing this array, the data must loaded
         *   with the loadPixels() function. After the array
         *   data has been modified, the updatePixels()
         *   function must be run to update the changes.
         *
         *   Note that this is not a standard javascript array.
         *   This means that standard javascript functions such
         *   as slice() or arrayCopy() do not work.
         */
        pixels: number[];
    }
}
