// This file was auto-generated. Please do not edit it.

import * as p5 from "../../index";

declare module "../../index" {
  interface p5InstanceExtensions {
    /**
     *   Loads an opentype font file (.otf, .ttf) from a
     *   file or a URL, and returns a PFont Object. This
     *   method is asynchronous, meaning it may not finish
     *   before the next line in your sketch is executed.
     *   The path to the font should be relative to the
     *   HTML file that links in your sketch. Loading an
     *   from a URL or other remote location may be blocked
     *   due to your browser's built-in security.
     *   @param path name of the file or url to load
     *   @param [callback] function to be executed after
     *   loadFont() completes
     *   @param [onError] function to be executed if an
     *   error occurs
     *   @return p5.Font object
     */
    loadFont(
      path: string,
      callback?: (
        ...args: any[]
      ) => any,
      onError?: (
        ...args: any[]
      ) => any
    ): Font;

    /**
     *   Draws text to the screen. Displays the information
     *   specified in the first parameter on the screen in
     *   the position specified by the additional
     *   parameters. A default font will be used unless a
     *   font is set with the textFont() function and a
     *   default size will be used unless a font is set
     *   with textSize(). Change the color of the text with
     *   the fill() function. Change the outline of the
     *   text with the stroke() and strokeWeight()
     *   functions.  The text displays in relation to the
     *   textAlign() function, which gives the option to
     *   draw to the left, right, and center of the
     *   coordinates.
     *
     *
     *   The x2 and y2 parameters define a rectangular area
     *   to display within and may only be used with string
     *   data. When these parameters are specified, they
     *   are interpreted based on the current rectMode()
     *   setting. Text that does not fit completely within
     *   the rectangle specified will not be drawn to the
     *   screen. If x2 and y2 are not specified, the
     *   baseline alignment is the default, which means
     *   that the text will be drawn upwards from x and y.
     *
     *
     *   WEBGL: Only opentype/truetype fonts are supported.
     *   You must load a font using the loadFont() method
     *   (see the example above). stroke() currently has no
     *   effect in webgl mode.
     *   @param str the alphanumeric symbols to be
     *   displayed
     *   @param x x-coordinate of text
     *   @param y y-coordinate of text
     *   @param [x2] by default, the width of the text box,
     *   see rectMode() for more info
     *   @param [y2] by default, the height of the text
     *   box, see rectMode() for more info
     *   @chainable
     */
    text(
      str:
        | string
        | object
        | any[]
        | number
        | boolean,
      x: number,
      y: number,
      x2?: number,
      y2?: number
    ): p5;

    /**
     *   Sets the current font that will be drawn with the
     *   text() function.  WEBGL: Only fonts loaded via
     *   loadFont() are supported.
     *   @return the current font
     */
    textFont(): object;

    /**
     *   Sets the current font that will be drawn with the
     *   text() function.  WEBGL: Only fonts loaded via
     *   loadFont() are supported.
     *   @param font a font loaded via loadFont(), or a
     *   String representing a web safe font (a font that
     *   is generally available across all systems)
     *   @param [size] the font size to use
     *   @chainable
     */
    textFont(
      font:
        | object
        | string,
      size?: number
    ): p5;
  }
}
