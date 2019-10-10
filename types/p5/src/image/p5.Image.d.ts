// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Image {
        /**
         *   Loads the pixels data for this image into the
         *   [pixels] attribute.
         */
        loadPixels(): void;

        /**
         *   Updates the backing canvas for this image with the
         *   contents of the [pixels] array.
         *   @param x x-offset of the target update area for
         *   the underlying canvas
         *   @param y y-offset of the target update area for
         *   the underlying canvas
         *   @param w height of the target update area for the
         *   underlying canvas
         *   @param h height of the target update area for the
         *   underlying canvas
         */
        updatePixels(x: number, y: number, w: number, h: number): void;

        /**
         *   Updates the backing canvas for this image with the
         *   contents of the [pixels] array.
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
         *   another image and using it's alpha channel as an
         *   alpha channel for this image.
         *   @param srcImage source image
         */
        mask(srcImage: Image): void;

        /**
         *   Applies an image filter to a p5.Image
         *   @param filterType either THRESHOLD, GRAY, OPAQUE,
         *   INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.
         *   See Filters.js for docs on each available filter
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
         *   file extension Supports png (default) and jpg.
         *   @param filename give your file a name
         *   @param extension 'png' or 'jpg'
         */
        save(filename: string, extension: string): void;

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
         *   denisty displays may have more pixels (by a factor
         *   of pixelDensity^2). For example, if the image is
         *   100x100 pixels, there will be 40,000. With
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
         *
         *
         *
         *   Before accessing this array, the data must loaded
         *   with the loadPixels() function. After the array
         *   data has been modified, the updatePixels()
         *   function must be run to update the changes.
         */
        pixels: number[];
    }
}
