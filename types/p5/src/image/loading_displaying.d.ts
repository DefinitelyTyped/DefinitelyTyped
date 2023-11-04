// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Loads an image to create a p5.Image object.
         *   loadImage() interprets the first parameter one of
         *   three ways. If the path to an image file is
         *   provided, loadImage() will load it. Paths to local
         *   files should be relative, such as
         *   'assets/thundercat.jpg'. URLs such as
         *   'https://example.com/thundercat.jpg' may be
         *   blocked due to browser security. Raw image data
         *   can also be passed as a base64 encoded image in
         *   the form
         *   'data:image/png;base64,arandomsequenceofcharacters'.
         *
         *   The second parameter is optional. If a function is
         *   passed, it will be called once the image has
         *   loaded. The callback function can optionally use
         *   the new p5.Image object.
         *
         *   The third parameter is also optional. If a
         *   function is passed, it will be called if the image
         *   fails to load. The callback function can
         *   optionally use the event error.
         *
         *   Images can take time to load. Calling loadImage()
         *   in preload() ensures images load before they're
         *   used in setup() or draw().
         *   @param path path of the image to be loaded or
         *   base64 encoded image.
         *   @param [successCallback] function called with
         *   p5.Image once it loads.
         *   @param [failureCallback] function called with
         *   event error if the image fails to load.
         *   @return the p5.Image object.
         */
        loadImage(path: string, successCallback?: (p1: Image) => any, failureCallback?: (p1: Event) => any): Image;

        /**
         *   Generates a gif from a sketch and saves it to a
         *   file. saveGif() may be called in setup() or at any
         *   point while a sketch is running. The first
         *   parameter, fileName, sets the gif's file name. The
         *   second parameter, duration, sets the gif's
         *   duration in seconds.
         *
         *   The third parameter, options, is optional. If an
         *   object is passed, saveGif() will use its
         *   properties to customize the gif. saveGif()
         *   recognizes the properties delay, units, silent,
         *   notificationDuration, and notificationID.
         *   @param filename file name of gif.
         *   @param duration duration in seconds to capture
         *   from the sketch.
         *   @param [options] an object that can contain five
         *   more properties: delay, a Number specifying how
         *   much time to wait before recording; units, a
         *   String that can be either 'seconds' or 'frames'.
         *   By default it's 'seconds’; silent, a Boolean that
         *   defines presence of progress notifications. By
         *   default it’s false; notificationDuration, a Number
         *   that defines how long in seconds the final
         *   notification will live. By default it's 0, meaning
         *   the notification will never be removed;
         *   notificationID, a String that specifies the id of
         *   the notification's DOM element. By default it’s
         *   'progressBar’.
         */
        saveGif(filename: string, duration: number, options?: object): void;

        /**
         *   Draws a source image to the canvas. The first
         *   parameter, img, is the source image to be drawn.
         *   The second and third parameters, dx and dy, set
         *   the coordinates of the destination image's top
         *   left corner. See imageMode() for other ways to
         *   position images.
         *
         *   Here's a diagram that explains how optional
         *   parameters work in image():
         *
         *
         *
         *   The fourth and fifth parameters, dw and dh, are
         *   optional. They set the the width and height to
         *   draw the destination image. By default, image()
         *   draws the full source image at its original size.
         *
         *   The sixth and seventh parameters, sx and sy, are
         *   also optional. These coordinates define the top
         *   left corner of a subsection to draw from the
         *   source image.
         *
         *   The eighth and ninth parameters, sw and sh, are
         *   also optional. They define the width and height of
         *   a subsection to draw from the source image. By
         *   default, image() draws the full subsection that
         *   begins at (sx, sy) and extends to the edges of the
         *   source image.
         *
         *   The ninth parameter, fit, is also optional. It
         *   enables a subsection of the source image to be
         *   drawn without affecting its aspect ratio. If
         *   CONTAIN is passed, the full subsection will appear
         *   within the destination rectangle. If COVER is
         *   passed, the subsection will completely cover the
         *   destination rectangle. This may have the effect of
         *   zooming into the subsection.
         *
         *   The tenth and eleventh paremeters, xAlign and
         *   yAlign, are also optional. They determine how to
         *   align the fitted subsection. xAlign can be set to
         *   either LEFT, RIGHT, or CENTER. yAlign can be set
         *   to either TOP, BOTTOM, or CENTER. By default, both
         *   xAlign and yAlign are set to CENTER.
         *   @param img image to display.
         *   @param x x-coordinate of the top-left corner of
         *   the image.
         *   @param y y-coordinate of the top-left corner of
         *   the image.
         *   @param [width] width to draw the image.
         *   @param [height] height to draw the image.
         */
        image(img: Image | Element | Framebuffer, x: number, y: number, width?: number, height?: number): void;

        /**
         *   Draws a source image to the canvas. The first
         *   parameter, img, is the source image to be drawn.
         *   The second and third parameters, dx and dy, set
         *   the coordinates of the destination image's top
         *   left corner. See imageMode() for other ways to
         *   position images.
         *
         *   Here's a diagram that explains how optional
         *   parameters work in image():
         *
         *
         *
         *   The fourth and fifth parameters, dw and dh, are
         *   optional. They set the the width and height to
         *   draw the destination image. By default, image()
         *   draws the full source image at its original size.
         *
         *   The sixth and seventh parameters, sx and sy, are
         *   also optional. These coordinates define the top
         *   left corner of a subsection to draw from the
         *   source image.
         *
         *   The eighth and ninth parameters, sw and sh, are
         *   also optional. They define the width and height of
         *   a subsection to draw from the source image. By
         *   default, image() draws the full subsection that
         *   begins at (sx, sy) and extends to the edges of the
         *   source image.
         *
         *   The ninth parameter, fit, is also optional. It
         *   enables a subsection of the source image to be
         *   drawn without affecting its aspect ratio. If
         *   CONTAIN is passed, the full subsection will appear
         *   within the destination rectangle. If COVER is
         *   passed, the subsection will completely cover the
         *   destination rectangle. This may have the effect of
         *   zooming into the subsection.
         *
         *   The tenth and eleventh paremeters, xAlign and
         *   yAlign, are also optional. They determine how to
         *   align the fitted subsection. xAlign can be set to
         *   either LEFT, RIGHT, or CENTER. yAlign can be set
         *   to either TOP, BOTTOM, or CENTER. By default, both
         *   xAlign and yAlign are set to CENTER.
         *   @param img image to display.
         *   @param dx the x-coordinate of the destination
         *   rectangle in which to draw the source image
         *   @param dy the y-coordinate of the destination
         *   rectangle in which to draw the source image
         *   @param dWidth the width of the destination
         *   rectangle
         *   @param dHeight the height of the destination
         *   rectangle
         *   @param sx the x-coordinate of the subsection of
         *   the source image to draw into the destination
         *   rectangle
         *   @param sy the y-coordinate of the subsection of
         *   the source image to draw into the destination
         *   rectangle
         *   @param [sWidth] the width of the subsection of the
         *   source image to draw into the destination
         *   rectangle
         *   @param [sHeight] the height of the subsection of
         *   the source image to draw into the destination
         *   rectangle
         *   @param [fit] either CONTAIN or COVER
         *   @param [xAlign] either LEFT, RIGHT or CENTER
         *   default is CENTER
         *   @param [yAlign] either TOP, BOTTOM or CENTER
         *   default is CENTER
         */
        image(
            img: Image | Element | Framebuffer,
            dx: number,
            dy: number,
            dWidth: number,
            dHeight: number,
            sx: number,
            sy: number,
            sWidth?: number,
            sHeight?: number,
            fit?: IMAGE_FIT,
            xAlign?: X_ALIGN,
            yAlign?: Y_ALIGN
        ): void;

        /**
         *   Tints images using a specified color. The version
         *   of tint() with one parameter interprets it one of
         *   four ways. If the parameter is a number, it's
         *   interpreted as a grayscale value. If the parameter
         *   is a string, it's interpreted as a CSS color
         *   string. An array of [R, G, B, A] values or a
         *   p5.Color object can also be used to set the tint
         *   color.
         *
         *   The version of tint() with two parameters uses the
         *   first one as a grayscale value and the second as
         *   an alpha value. For example, calling tint(255,
         *   128) will make an image 50% transparent.
         *
         *   The version of tint() with three parameters
         *   interprets them as RGB or HSB values, depending on
         *   the current colorMode(). The optional fourth
         *   parameter sets the alpha value. For example,
         *   tint(255, 0, 0, 100) will give images a red tint
         *   and make them transparent.
         *   @param v1 red or hue value.
         *   @param v2 green or saturation value.
         *   @param v3 blue or brightness.
         */
        tint(v1: number, v2: number, v3: number, alpha?: number): void;

        /**
         *   Tints images using a specified color. The version
         *   of tint() with one parameter interprets it one of
         *   four ways. If the parameter is a number, it's
         *   interpreted as a grayscale value. If the parameter
         *   is a string, it's interpreted as a CSS color
         *   string. An array of [R, G, B, A] values or a
         *   p5.Color object can also be used to set the tint
         *   color.
         *
         *   The version of tint() with two parameters uses the
         *   first one as a grayscale value and the second as
         *   an alpha value. For example, calling tint(255,
         *   128) will make an image 50% transparent.
         *
         *   The version of tint() with three parameters
         *   interprets them as RGB or HSB values, depending on
         *   the current colorMode(). The optional fourth
         *   parameter sets the alpha value. For example,
         *   tint(255, 0, 0, 100) will give images a red tint
         *   and make them transparent.
         *   @param value CSS color string.
         */
        tint(value: string): void;

        /**
         *   Tints images using a specified color. The version
         *   of tint() with one parameter interprets it one of
         *   four ways. If the parameter is a number, it's
         *   interpreted as a grayscale value. If the parameter
         *   is a string, it's interpreted as a CSS color
         *   string. An array of [R, G, B, A] values or a
         *   p5.Color object can also be used to set the tint
         *   color.
         *
         *   The version of tint() with two parameters uses the
         *   first one as a grayscale value and the second as
         *   an alpha value. For example, calling tint(255,
         *   128) will make an image 50% transparent.
         *
         *   The version of tint() with three parameters
         *   interprets them as RGB or HSB values, depending on
         *   the current colorMode(). The optional fourth
         *   parameter sets the alpha value. For example,
         *   tint(255, 0, 0, 100) will give images a red tint
         *   and make them transparent.
         *   @param gray grayscale value.
         */
        tint(gray: number, alpha?: number): void;

        /**
         *   Tints images using a specified color. The version
         *   of tint() with one parameter interprets it one of
         *   four ways. If the parameter is a number, it's
         *   interpreted as a grayscale value. If the parameter
         *   is a string, it's interpreted as a CSS color
         *   string. An array of [R, G, B, A] values or a
         *   p5.Color object can also be used to set the tint
         *   color.
         *
         *   The version of tint() with two parameters uses the
         *   first one as a grayscale value and the second as
         *   an alpha value. For example, calling tint(255,
         *   128) will make an image 50% transparent.
         *
         *   The version of tint() with three parameters
         *   interprets them as RGB or HSB values, depending on
         *   the current colorMode(). The optional fourth
         *   parameter sets the alpha value. For example,
         *   tint(255, 0, 0, 100) will give images a red tint
         *   and make them transparent.
         *   @param values array containing the red, green,
         *   blue & alpha components of the color.
         */
        tint(values: number[]): void;

        /**
         *   Tints images using a specified color. The version
         *   of tint() with one parameter interprets it one of
         *   four ways. If the parameter is a number, it's
         *   interpreted as a grayscale value. If the parameter
         *   is a string, it's interpreted as a CSS color
         *   string. An array of [R, G, B, A] values or a
         *   p5.Color object can also be used to set the tint
         *   color.
         *
         *   The version of tint() with two parameters uses the
         *   first one as a grayscale value and the second as
         *   an alpha value. For example, calling tint(255,
         *   128) will make an image 50% transparent.
         *
         *   The version of tint() with three parameters
         *   interprets them as RGB or HSB values, depending on
         *   the current colorMode(). The optional fourth
         *   parameter sets the alpha value. For example,
         *   tint(255, 0, 0, 100) will give images a red tint
         *   and make them transparent.
         *   @param color the tint color
         */
        tint(color: Color): void;

        /**
         *   Removes the current tint set by tint() and
         *   restores images to their original colors.
         */
        noTint(): void;

        /**
         *   Changes the location from which images are drawn
         *   when image() is called. By default, the first two
         *   parameters of image() are the x- and y-coordinates
         *   of the image's upper-left corner. The next
         *   parameters are its width and height. This is the
         *   same as calling imageMode(CORNER).
         *
         *   imageMode(CORNERS) also uses the first two
         *   parameters of image() as the x- and y-coordinates
         *   of the image's top-left corner. The third and
         *   fourth parameters are the coordinates of its
         *   bottom-right corner.
         *
         *   imageMode(CENTER) uses the first two parameters of
         *   image() as the x- and y-coordinates of the image's
         *   center. The next parameters are its width and
         *   height.
         *   @param mode either CORNER, CORNERS, or CENTER.
         */
        imageMode(mode: IMAGE_MODE): void;
    }
}
