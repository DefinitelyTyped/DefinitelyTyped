// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Loads a font and creates a p5.Font object.
         *   loadFont() can load fonts in either .otf or .ttf
         *   format. Loaded fonts can be used to style text on
         *   the canvas and in HTML elements. The first
         *   parameter, path, is the path to a font file. Paths
         *   to local files should be relative. For example,
         *   'assets/inconsolata.otf'. The Inconsolata font
         *   used in the following examples can be downloaded
         *   for free here. Paths to remote files should be
         *   URLs. For example,
         *   'https://example.com/inconsolata.otf'. URLs may be
         *   blocked due to browser security.
         *
         *   The second parameter, successCallback, is
         *   optional. If a function is passed, it will be
         *   called once the font has loaded. The callback
         *   function may use the new p5.Font object if needed.
         *
         *   The third parameter, failureCallback, is also
         *   optional. If a function is passed, it will be
         *   called if the font fails to load. The callback
         *   function may use the error Event object if needed.
         *
         *   Fonts can take time to load. Calling loadFont() in
         *   preload() ensures fonts load before they're used
         *   in setup() or draw().
         *   @param path path of the font to be loaded.
         *   @param [successCallback] function called with the
         *   p5.Font object after it loads.
         *   @param [failureCallback] function called with the
         *   error Event object if the font fails to load.
         *   @return p5.Font object.
         */
        loadFont(
            path: string,
            successCallback?: (...args: any[]) => any,
            failureCallback?: (...args: any[]) => any
        ): Font;

        /**
         *   Draws text to the canvas. The first parameter,
         *   str, is the text to be drawn. The second and third
         *   parameters, x and y, set the coordinates of the
         *   text's bottom-left corner. See textAlign() for
         *   other ways to align text.
         *
         *   The fourth and fifth parameters, maxWidth and
         *   maxHeight, are optional. They set the dimensions
         *   of the invisible rectangle containing the text. By
         *   default, they set its maximum width and height.
         *   See rectMode() for other ways to define the
         *   rectangular text box. Text will wrap to fit within
         *   the text box. Text outside of the box won't be
         *   drawn.
         *
         *   Text can be styled a few ways. Call the fill()
         *   function to set the text's fill color. Call
         *   stroke() and strokeWeight() to set the text's
         *   outline. Call textSize() and textFont() to set the
         *   text's size and font, respectively.
         *
         *   Note: WEBGL mode only supports fonts loaded with
         *   loadFont(). Calling stroke() has no effect in
         *   WEBGL mode.
         *   @param str text to be displayed.
         *   @param x x-coordinate of the text box.
         *   @param y y-coordinate of the text box.
         *   @param [maxWidth] maximum width of the text box.
         *   See rectMode() for other options.
         *   @param [maxHeight] maximum height of the text box.
         *   See rectMode() for other options.
         *   @chainable
         */
        text(
            str: string | object | any[] | number | boolean,
            x: number,
            y: number,
            maxWidth?: number,
            maxHeight?: number
        ): p5;

        /**
         *   Sets the font used by the text() function. The
         *   first parameter, font, sets the font. textFont()
         *   recognizes either a p5.Font object or a string
         *   with the name of a system font. For example,
         *   'Courier New'.
         *
         *   The second parameter, size, is optional. It sets
         *   the font size in pixels. This has the same effect
         *   as calling textSize().
         *
         *   Note: WEBGL mode only supports fonts loaded with
         *   loadFont().
         *   @return current font or p5 Object.
         */
        textFont(): object;

        /**
         *   Sets the font used by the text() function. The
         *   first parameter, font, sets the font. textFont()
         *   recognizes either a p5.Font object or a string
         *   with the name of a system font. For example,
         *   'Courier New'.
         *
         *   The second parameter, size, is optional. It sets
         *   the font size in pixels. This has the same effect
         *   as calling textSize().
         *
         *   Note: WEBGL mode only supports fonts loaded with
         *   loadFont().
         *   @param font font as a p5.Font object or a string.
         *   @param [size] font size in pixels.
         *   @chainable
         */
        textFont(font: object | string, size?: number): p5;
    }
}
