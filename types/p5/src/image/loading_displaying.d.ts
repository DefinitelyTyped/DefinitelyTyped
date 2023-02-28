// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Loads an image from a path and creates a p5.Image
         *   from it. The image may not be immediately
         *   available for rendering. If you want to ensure
         *   that the image is ready before doing anything with
         *   it, place the loadImage() call in preload(). You
         *   may also supply a callback function to handle the
         *   image when it's ready.
         *
         *   The path to the image should be relative to the
         *   HTML file that links in your sketch. Loading an
         *   image from a URL or other remote location may be
         *   blocked due to your browser's built-in security.
         *
         *   You can also pass in a string of a base64 encoded
         *   image as an alternative to the file path. Remember
         *   to add "data:image/png;base64," in front of the
         *   string.
         *   @param path Path of the image to be loaded
         *   @param [successCallback] Function to be called
         *   once the image is loaded. Will be passed the
         *   p5.Image.
         *   @param [failureCallback] called with event error
         *   if the image fails to load.
         *   @return the p5.Image object
         */
        loadImage(path: string, successCallback?: (p1: Image) => any, failureCallback?: (p1: Event) => any): Image;

        /**
         *   Generates a gif of your current animation and
         *   downloads it to your computer! The duration
         *   argument specifies how many seconds you want to
         *   record from your animation. This value is then
         *   converted to the necessary number of frames to
         *   generate it, depending on the value of units. More
         *   on that on the next paragraph.
         *
         *   An optional object that can contain two more
         *   arguments: delay (number) and units (string).
         *
         *   delay, specifying how much time we should wait
         *   before recording
         *
         *   units, a string that can be either 'seconds' or
         *   'frames'. By default it's 'seconds'.
         *
         *   units specifies how the duration and delay
         *   arguments will behave. If 'seconds', these
         *   arguments will correspond to seconds, meaning that
         *   3 seconds worth of animation will be created. If
         *   'frames', the arguments now correspond to the
         *   number of frames you want your animation to be, if
         *   you are very sure of this number.
         *
         *   It is not recommended to write this function
         *   inside setup, since it won't work properly. The
         *   recommended use can be seen in the example, where
         *   we use it inside an event function, like
         *   keyPressed or mousePressed.
         *   @param filename File name of your gif
         *   @param duration Duration in seconds that you wish
         *   to capture from your sketch
         *   @param options An optional object that can contain
         *   two more arguments: delay, specifying how much
         *   time we should wait before recording, and units, a
         *   string that can be either 'seconds' or 'frames'.
         *   By default it's 'seconds'.
         */
        saveGif(filename: string, duration: number, options: object): void;

        /**
         *   Draw an image to the p5.js canvas. This function
         *   can be used with different numbers of parameters.
         *   The simplest use requires only three parameters:
         *   img, x, and y—where (x, y) is the position of the
         *   image. Two more parameters can optionally be added
         *   to specify the width and height of the image.
         *
         *   This function can also be used with eight Number
         *   parameters. To differentiate between all these
         *   parameters, p5.js uses the language of
         *   "destination rectangle" (which corresponds to
         *   "dx", "dy", etc.) and "source image" (which
         *   corresponds to "sx", "sy", etc.) below. Specifying
         *   the "source image" dimensions can be useful when
         *   you want to display a subsection of the source
         *   image instead of the whole thing. Here's a diagram
         *   to explain further:
         *
         *   This function can also be used to draw images
         *   without distorting the orginal aspect ratio, by
         *   adding 9th parameter, fit, which can either be
         *   COVER or CONTAIN. CONTAIN, as the name suggests,
         *   contains the whole image within the specified
         *   destination box without distorting the image
         *   ratio. COVER covers the entire destination box.
         *   @param img the image to display
         *   @param x the x-coordinate of the top-left corner
         *   of the image
         *   @param y the y-coordinate of the top-left corner
         *   of the image
         *   @param [width] the width to draw the image
         *   @param [height] the height to draw the image
         */
        image(img: Image | Element, x: number, y: number, width?: number, height?: number): void;

        /**
         *   Draw an image to the p5.js canvas. This function
         *   can be used with different numbers of parameters.
         *   The simplest use requires only three parameters:
         *   img, x, and y—where (x, y) is the position of the
         *   image. Two more parameters can optionally be added
         *   to specify the width and height of the image.
         *
         *   This function can also be used with eight Number
         *   parameters. To differentiate between all these
         *   parameters, p5.js uses the language of
         *   "destination rectangle" (which corresponds to
         *   "dx", "dy", etc.) and "source image" (which
         *   corresponds to "sx", "sy", etc.) below. Specifying
         *   the "source image" dimensions can be useful when
         *   you want to display a subsection of the source
         *   image instead of the whole thing. Here's a diagram
         *   to explain further:
         *
         *   This function can also be used to draw images
         *   without distorting the orginal aspect ratio, by
         *   adding 9th parameter, fit, which can either be
         *   COVER or CONTAIN. CONTAIN, as the name suggests,
         *   contains the whole image within the specified
         *   destination box without distorting the image
         *   ratio. COVER covers the entire destination box.
         *   @param img the image to display
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
            img: Image | Element,
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
         *   Sets the fill value for displaying images. Images
         *   can be tinted to specified colors or made
         *   transparent by including an alpha value. To apply
         *   transparency to an image without affecting its
         *   color, use white as the tint color and specify an
         *   alpha value. For instance, tint(255, 128) will
         *   make an image 50% transparent (assuming the
         *   default alpha range of 0-255, which can be changed
         *   with colorMode()).
         *
         *   The value for the gray parameter must be less than
         *   or equal to the current maximum value as specified
         *   by colorMode(). The default maximum value is 255.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         */
        tint(v1: number, v2: number, v3: number, alpha?: number): void;

        /**
         *   Sets the fill value for displaying images. Images
         *   can be tinted to specified colors or made
         *   transparent by including an alpha value. To apply
         *   transparency to an image without affecting its
         *   color, use white as the tint color and specify an
         *   alpha value. For instance, tint(255, 128) will
         *   make an image 50% transparent (assuming the
         *   default alpha range of 0-255, which can be changed
         *   with colorMode()).
         *
         *   The value for the gray parameter must be less than
         *   or equal to the current maximum value as specified
         *   by colorMode(). The default maximum value is 255.
         *   @param value a color string
         */
        tint(value: string): void;

        /**
         *   Sets the fill value for displaying images. Images
         *   can be tinted to specified colors or made
         *   transparent by including an alpha value. To apply
         *   transparency to an image without affecting its
         *   color, use white as the tint color and specify an
         *   alpha value. For instance, tint(255, 128) will
         *   make an image 50% transparent (assuming the
         *   default alpha range of 0-255, which can be changed
         *   with colorMode()).
         *
         *   The value for the gray parameter must be less than
         *   or equal to the current maximum value as specified
         *   by colorMode(). The default maximum value is 255.
         *   @param gray a gray value
         */
        tint(gray: number, alpha?: number): void;

        /**
         *   Sets the fill value for displaying images. Images
         *   can be tinted to specified colors or made
         *   transparent by including an alpha value. To apply
         *   transparency to an image without affecting its
         *   color, use white as the tint color and specify an
         *   alpha value. For instance, tint(255, 128) will
         *   make an image 50% transparent (assuming the
         *   default alpha range of 0-255, which can be changed
         *   with colorMode()).
         *
         *   The value for the gray parameter must be less than
         *   or equal to the current maximum value as specified
         *   by colorMode(). The default maximum value is 255.
         *   @param values an array containing the
         *   red,green,blue & and alpha components of the color
         */
        tint(values: number[]): void;

        /**
         *   Sets the fill value for displaying images. Images
         *   can be tinted to specified colors or made
         *   transparent by including an alpha value. To apply
         *   transparency to an image without affecting its
         *   color, use white as the tint color and specify an
         *   alpha value. For instance, tint(255, 128) will
         *   make an image 50% transparent (assuming the
         *   default alpha range of 0-255, which can be changed
         *   with colorMode()).
         *
         *   The value for the gray parameter must be less than
         *   or equal to the current maximum value as specified
         *   by colorMode(). The default maximum value is 255.
         *   @param color the tint color
         */
        tint(color: Color): void;

        /**
         *   Removes the current fill value for displaying
         *   images and reverts to displaying images with their
         *   original hues.
         */
        noTint(): void;

        /**
         *   Set image mode. Modifies the location from which
         *   images are drawn by changing the way in which
         *   parameters given to image() are interpreted. The
         *   default mode is imageMode(CORNER), which
         *   interprets the second and third parameters of
         *   image() as the upper-left corner of the image. If
         *   two additional parameters are specified, they are
         *   used to set the image's width and height.
         *   imageMode(CORNERS) interprets the second and third
         *   parameters of image() as the location of one
         *   corner, and the fourth and fifth parameters as the
         *   opposite corner.
         *
         *   imageMode(CENTER) interprets the second and third
         *   parameters of image() as the image's center point.
         *   If two additional parameters are specified, they
         *   are used to set the image's width and height.
         *   @param mode either CORNER, CORNERS, or CENTER
         */
        imageMode(mode: IMAGE_MODE): void;
    }
}
