// Global mode type definitions for p5

// This file was auto-generated. Please do not edit it.

/// <reference path="./lib/addons/p5.sound.d.ts" />
import * as p5 from './index';
declare global {
    /**
     *   Creates a screen reader accessible description for
     *   the canvas. The first parameter should be a string
     *   with a description of the canvas. The second
     *   parameter is optional. If specified, it determines
     *   how the description is displayed. describe(text,
     *   LABEL) displays the description to all users as a
     *   tombstone or exhibit label/caption in a div
     *   adjacent to the canvas. You can style it as you
     *   wish in your CSS.
     *
     *   describe(text, FALLBACK) makes the description
     *   accessible to screen-reader users only, in  a sub
     *   DOM inside the canvas element. If a second
     *   parameter is not specified, by default, the
     *   description will only be available to
     *   screen-reader users.
     *   @param text description of the canvas
     *   @param [display] either LABEL or FALLBACK
     */
    function describe(text: string, display?: p5.DESCRIBE_DISPLAY): void;

    /**
     *   This function creates a screen-reader accessible
     *   description for elements —shapes or groups of
     *   shapes that create meaning together— in the
     *   canvas. The first paramater should be the name of
     *   the element. The second parameter should be a
     *   string with a description of the element. The
     *   third parameter is optional. If specified, it
     *   determines how the element description is
     *   displayed. describeElement(name, text, LABEL)
     *   displays the element description to all users as a
     *   tombstone or exhibit label/caption in a div
     *   adjacent to the canvas. You can style it as you
     *   wish in your CSS.
     *
     *   describeElement(name, text, FALLBACK) makes the
     *   element description accessible to screen-reader
     *   users only, in  a sub DOM inside the canvas
     *   element. If a second parameter is not specified,
     *   by default, the element description will only be
     *   available to screen-reader users.
     *   @param name name of the element
     *   @param text description of the element
     *   @param [display] either LABEL or FALLBACK
     */
    function describeElement(name: string, text: string, display?: p5.DESCRIBE_DISPLAY): void;

    /**
     *   textOutput() creates a screenreader accessible
     *   output that describes the shapes present on the
     *   canvas. The general description of the canvas
     *   includes canvas size, canvas color, and number of
     *   elements in the canvas (example: 'Your output is
     *   a, 400 by 400 pixels, lavender blue canvas
     *   containing the following 4 shapes:'). This
     *   description is followed by a list of shapes where
     *   the color, position, and area of each shape are
     *   described (example: "orange ellipse at top left
     *   covering 1% of the canvas"). Each element can be
     *   selected to get more details. A table of elements
     *   is also provided. In this table, shape, color,
     *   location, coordinates and area are described
     *   (example: "orange ellipse location=top left
     *   area=2"). textOutput() and textOutput(FALLBACK)
     *   make the output available in  a sub DOM inside the
     *   canvas element which is accessible to screen
     *   readers. textOutput(LABEL) creates an additional
     *   div with the output adjacent to the canvas, this
     *   is useful for non-screen reader users that might
     *   want to display the output outside of the canvas'
     *   sub DOM as they code. However, using LABEL will
     *   create unnecessary redundancy for screen reader
     *   users. We recommend using LABEL only as part of
     *   the development process of a sketch and removing
     *   it before publishing or sharing with screen reader
     *   users.
     *   @param [display] either FALLBACK or LABEL
     */
    function textOutput(display?: p5.TEXT_DISPLAY): void;

    /**
     *   gridOutput() lays out the content of the canvas in
     *   the form of a grid (html table) based on the
     *   spatial location of each shape. A brief
     *   description of the canvas is available before the
     *   table output. This description includes: color of
     *   the background, size of the canvas, number of
     *   objects, and object types (example: "lavender blue
     *   canvas is 200 by 200 and contains 4 objects - 3
     *   ellipses 1 rectangle"). The grid describes the
     *   content spatially, each element is placed on a
     *   cell of the table depending on its position.
     *   Within each cell an element the color and type of
     *   shape of that element are available (example:
     *   "orange ellipse"). These descriptions can be
     *   selected individually to get more details. A list
     *   of elements where shape, color, location, and area
     *   are described (example: "orange ellipse
     *   location=top left area=1%") is also available.
     *   gridOutput() and gridOutput(FALLBACK) make the
     *   output available in  a sub DOM inside the canvas
     *   element which is accessible to screen readers.
     *   gridOutput(LABEL) creates an additional div with
     *   the output adjacent to the canvas, this is useful
     *   for non-screen reader users that might want to
     *   display the output outside of the canvas' sub DOM
     *   as they code. However, using LABEL will create
     *   unnecessary redundancy for screen reader users. We
     *   recommend using LABEL only as part of the
     *   development process of a sketch and removing it
     *   before publishing or sharing with screen reader
     *   users.
     *   @param [display] either FALLBACK or LABEL
     */
    function gridOutput(display?: p5.GRID_DISPLAY): void;

    /**
     *   Extracts the alpha (transparency) value from a
     *   p5.Color object, array of color components, or CSS
     *   color string.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the alpha value.
     */
    function alpha(color: p5.Color | number[] | string): number;

    /**
     *   Extracts the blue value from a p5.Color object,
     *   array of color components, or CSS color string.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the blue value.
     */
    function blue(color: p5.Color | number[] | string): number;

    /**
     *   Extracts the HSB brightness value from a p5.Color
     *   object, array of color components, or CSS color
     *   string.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the brightness value.
     */
    function brightness(color: p5.Color | number[] | string): number;

    /**
     *   Creates a p5.Color object. By default, the
     *   parameters are interpreted as RGB values. Calling
     *   color(255, 204, 0) will return a bright yellow
     *   color. The way these parameters are interpreted
     *   may be changed with the colorMode() function. The
     *   version of color() with one parameter interprets
     *   the value one of two ways. If the parameter is a
     *   number, it's interpreted as a grayscale value. If
     *   the parameter is a string, it's interpreted as a
     *   CSS color string.
     *
     *   The version of color() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of color() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of color() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param gray number specifying value between white
     *   and black.
     *   @param [alpha] alpha value relative to current
     *   color range (default is 0-255).
     *   @return resulting color.
     */
    function color(gray: number, alpha?: number): p5.Color;

    /**
     *   Creates a p5.Color object. By default, the
     *   parameters are interpreted as RGB values. Calling
     *   color(255, 204, 0) will return a bright yellow
     *   color. The way these parameters are interpreted
     *   may be changed with the colorMode() function. The
     *   version of color() with one parameter interprets
     *   the value one of two ways. If the parameter is a
     *   number, it's interpreted as a grayscale value. If
     *   the parameter is a string, it's interpreted as a
     *   CSS color string.
     *
     *   The version of color() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of color() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of color() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param v1 red or hue value relative to the current
     *   color range.
     *   @param v2 green or saturation value relative to
     *   the current color range.
     *   @param v3 blue or brightness value relative to the
     *   current color range.
     *   @param [alpha] alpha value relative to current
     *   color range (default is 0-255).
     */
    function color(v1: number, v2: number, v3: number, alpha?: number): p5.Color;

    /**
     *   Creates a p5.Color object. By default, the
     *   parameters are interpreted as RGB values. Calling
     *   color(255, 204, 0) will return a bright yellow
     *   color. The way these parameters are interpreted
     *   may be changed with the colorMode() function. The
     *   version of color() with one parameter interprets
     *   the value one of two ways. If the parameter is a
     *   number, it's interpreted as a grayscale value. If
     *   the parameter is a string, it's interpreted as a
     *   CSS color string.
     *
     *   The version of color() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of color() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of color() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param value a color string.
     */
    function color(value: string): p5.Color;

    /**
     *   Creates a p5.Color object. By default, the
     *   parameters are interpreted as RGB values. Calling
     *   color(255, 204, 0) will return a bright yellow
     *   color. The way these parameters are interpreted
     *   may be changed with the colorMode() function. The
     *   version of color() with one parameter interprets
     *   the value one of two ways. If the parameter is a
     *   number, it's interpreted as a grayscale value. If
     *   the parameter is a string, it's interpreted as a
     *   CSS color string.
     *
     *   The version of color() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of color() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of color() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param values an array containing the red, green,
     *   blue, and alpha components of the color.
     */
    function color(values: number[]): p5.Color;

    /**
     *   Creates a p5.Color object. By default, the
     *   parameters are interpreted as RGB values. Calling
     *   color(255, 204, 0) will return a bright yellow
     *   color. The way these parameters are interpreted
     *   may be changed with the colorMode() function. The
     *   version of color() with one parameter interprets
     *   the value one of two ways. If the parameter is a
     *   number, it's interpreted as a grayscale value. If
     *   the parameter is a string, it's interpreted as a
     *   CSS color string.
     *
     *   The version of color() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of color() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of color() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     */
    function color(color: p5.Color): p5.Color;

    /**
     *   Extracts the green value from a p5.Color object,
     *   array of color components, or CSS color string.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the green value.
     */
    function green(color: p5.Color | number[] | string): number;

    /**
     *   Extracts the hue value from a p5.Color object,
     *   array of color components, or CSS color string.
     *   Hue exists in both HSB and HSL. It describes a
     *   color's position on the color wheel. By default,
     *   this function returns the HSL-normalized hue. If
     *   the colorMode() is set to HSB, it returns the
     *   HSB-normalized hue.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the hue
     */
    function hue(color: p5.Color | number[] | string): number;

    /**
     *   Blends two colors to find a third color between
     *   them. The amt parameter specifies the amount to
     *   interpolate between the two values. 0 is equal to
     *   the first color, 0.1 is very near the first color,
     *   0.5 is halfway between the two colors, and so on.
     *   Negative numbers are set to 0. Numbers greater
     *   than 1 are set to 1. This differs from the
     *   behavior of lerp. It's necessary because numbers
     *   outside of the interval [0, 1] will produce
     *   strange and unexpected colors. The way that colors
     *   are interpolated depends on the current
     *   colorMode().
     *   @param c1 interpolate from this color.
     *   @param c2 interpolate to this color.
     *   @param amt number between 0 and 1.
     *   @return interpolated color.
     */
    function lerpColor(c1: p5.Color, c2: p5.Color, amt: number): p5.Color;

    /**
     *   Extracts the HSL lightness value from a p5.Color
     *   object, array of color components, or CSS color
     *   string.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the lightness
     */
    function lightness(color: p5.Color | number[] | string): number;

    /**
     *   Extracts the red value from a p5.Color object,
     *   array of color components, or CSS color string.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the red value.
     */
    function red(color: p5.Color | number[] | string): number;

    /**
     *   Extracts the saturation value from a p5.Color
     *   object, array of color components, or CSS color
     *   string. Saturation is scaled differently in HSB
     *   and HSL. By default, this function returns the HSL
     *   saturation. If the colorMode() is set to HSB, it
     *   returns the HSB saturation.
     *   @param color p5.Color object, array of color
     *   components, or CSS color string.
     *   @return the saturation value
     */
    function saturation(color: p5.Color | number[] | string): number;

    /**
     *   Start defining a shape that will mask subsequent
     *   things drawn to the canvas. Only opaque regions of
     *   the mask shape will allow content to be drawn. Any
     *   shapes drawn between this and endClip() will
     *   contribute to the mask shape. The mask will apply
     *   to anything drawn after this call. To draw without
     *   a mask, contain the code to apply the mask and to
     *   draw the masked content between push() and pop().
     *
     *   Alternatively, rather than drawing the mask
     *   between this and endClip(), draw the mask in a
     *   callback function passed to clip().
     *
     *   Options can include:
     *
     *   - invert: A boolean specifying whether or not to
     *   mask the areas not filled by the mask shape.
     *   Defaults to false.
     *   @param [options] An object containing clip
     *   settings.
     */
    function beginClip(options?: object): void;

    /**
     *   Finishes defining a shape that will mask
     *   subsequent things drawn to the canvas. Only opaque
     *   regions of the mask shape will allow content to be
     *   drawn. Any shapes drawn between beginClip() and
     *   this will contribute to the mask shape.
     */
    function endClip(): void;

    /**
     *   Use the shape drawn by a callback function to mask
     *   subsequent things drawn to the canvas. Only opaque
     *   regions of the mask shape will allow content to be
     *   drawn. The mask will apply to anything drawn after
     *   this call. To draw without a mask, contain the
     *   code to apply the mask and to draw the masked
     *   content between push() and pop().
     *
     *   Alternatively, rather than drawing the mask shape
     *   in a function, draw the shape between beginClip()
     *   and endClip().
     *
     *   Options can include:
     *
     *   - invert: A boolean specifying whether or not to
     *   mask the areas not filled by the mask shape.
     *   Defaults to false.
     *   @param callback A function that draws the mask
     *   shape.
     *   @param [options] An object containing clip
     *   settings.
     */
    function clip(callback: (...args: any[]) => any, options?: object): void;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   This function is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a number, it's interpreted as a
     *   grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param color any value created by the color()
     *   function
     *   @chainable
     */
    function background(color: p5.Color): p5;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   This function is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a number, it's interpreted as a
     *   grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param colorstring color string, possible formats
     *   include: integer rgb() or rgba(), percentage rgb()
     *   or rgba(), 3-digit hex, 6-digit hex.
     *   @param [a] opacity of the background relative to
     *   current color range (default is 0-255).
     *   @chainable
     */
    function background(colorstring: string, a?: number): p5;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   This function is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a number, it's interpreted as a
     *   grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param gray specifies a value between white and
     *   black.
     *   @param [a] opacity of the background relative to
     *   current color range (default is 0-255).
     *   @chainable
     */
    function background(gray: number, a?: number): p5;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   This function is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a number, it's interpreted as a
     *   grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param v1 red value if color mode is RGB, or hue
     *   value if color mode is HSB.
     *   @param v2 green value if color mode is RGB, or
     *   saturation value if color mode is HSB.
     *   @param v3 blue value if color mode is RGB, or
     *   brightness value if color mode is HSB.
     *   @param [a] opacity of the background relative to
     *   current color range (default is 0-255).
     *   @chainable
     */
    function background(v1: number, v2: number, v3: number, a?: number): p5;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   This function is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a number, it's interpreted as a
     *   grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param values an array containing the red, green,
     *   blue and alpha components of the color.
     *   @chainable
     */
    function background(values: number[]): p5;

    /**
     *   Sets the color used for the background of the
     *   canvas. By default, the background is transparent.
     *   This function is typically used within draw() to
     *   clear the display window at the beginning of each
     *   frame. It can also be used inside setup() to set
     *   the background on the first frame of animation.
     *   The version of background() with one parameter
     *   interprets the value one of four ways. If the
     *   parameter is a number, it's interpreted as a
     *   grayscale value. If the parameter is a string,
     *   it's interpreted as a CSS color string. RGB, RGBA,
     *   HSL, HSLA, hex, and named color strings are
     *   supported. If the parameter is a p5.Color object,
     *   it will be used as the background color. If the
     *   parameter is a p5.Image object, it will be used as
     *   the background image.
     *
     *   The version of background() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of background() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). By default,
     *   colors are specified in RGB values. Calling
     *   background(255, 204, 0) sets the background a
     *   bright yellow color.
     *   @param image image created with loadImage() or
     *   createImage(), to set as background. (must be same
     *   size as the sketch window).
     *   @param [a] opacity of the background relative to
     *   current color range (default is 0-255).
     *   @chainable
     */
    function background(image: p5.Image, a?: number): p5;

    /**
     *   Clears the pixels on the canvas. This function
     *   makes every pixel 100% transparent. Calling
     *   clear() doesn't clear objects created by createX()
     *   functions such as createGraphics(), createVideo(),
     *   and createImg(). These objects will remain
     *   unchanged after calling clear() and can be
     *   redrawn. In WebGL mode, this function can clear
     *   the screen to a specific color. It interprets four
     *   numeric parameters as normalized RGBA color
     *   values. It also clears the depth buffer. If you
     *   are not using the WebGL renderer, these parameters
     *   will have no effect.
     *   @param r normalized red value.
     *   @param g normalized green value.
     *   @param b normalized blue value.
     *   @param a normalized alpha value.
     *   @chainable
     */
    function clear(r: number, g: number, b: number, a: number): p5;

    /**
     *   Changes the way p5.js interprets color data. By
     *   default, the numeric parameters for fill(),
     *   stroke(), background(), and color() are defined by
     *   values between 0 and 255 using the RGB color
     *   model. This is equivalent to calling
     *   colorMode(RGB, 255). Pure red is color(255, 0, 0)
     *   in this model. Calling colorMode(RGB, 100) sets
     *   colors to be interpreted as RGB color values
     *   between 0 and 100. Pure red is color(100, 0, 0) in
     *   this model.
     *
     *   Calling colorMode(HSB) or colorMode(HSL) changes
     *   to HSB or HSL system instead of RGB.
     *
     *   p5.Color objects remember the mode that they were
     *   created in. Changing modes doesn't affect their
     *   appearance.
     *   @param mode either RGB, HSB or HSL, corresponding
     *   to Red/Green/Blue and Hue/Saturation/Brightness
     *   (or Lightness).
     *   @param [max] range for all values.
     *   @chainable
     */
    function colorMode(mode: p5.COLOR_MODE, max?: number): p5;

    /**
     *   Changes the way p5.js interprets color data. By
     *   default, the numeric parameters for fill(),
     *   stroke(), background(), and color() are defined by
     *   values between 0 and 255 using the RGB color
     *   model. This is equivalent to calling
     *   colorMode(RGB, 255). Pure red is color(255, 0, 0)
     *   in this model. Calling colorMode(RGB, 100) sets
     *   colors to be interpreted as RGB color values
     *   between 0 and 100. Pure red is color(100, 0, 0) in
     *   this model.
     *
     *   Calling colorMode(HSB) or colorMode(HSL) changes
     *   to HSB or HSL system instead of RGB.
     *
     *   p5.Color objects remember the mode that they were
     *   created in. Changing modes doesn't affect their
     *   appearance.
     *   @param mode either RGB, HSB or HSL, corresponding
     *   to Red/Green/Blue and Hue/Saturation/Brightness
     *   (or Lightness).
     *   @param max1 range for the red or hue depending on
     *   the current color mode.
     *   @param max2 range for the green or saturation
     *   depending on the current color mode.
     *   @param max3 range for the blue or
     *   brightness/lightness depending on the current
     *   color mode.
     *   @param [maxA] range for the alpha.
     *   @chainable
     */
    function colorMode(mode: p5.UNKNOWN_P5_CONSTANT, max1: number, max2: number, max3: number, maxA?: number): p5;

    /**
     *   Sets the color used to fill shapes. Calling
     *   fill(255, 165, 0) or fill('orange') means all
     *   shapes drawn after the fill command will be filled
     *   with the color orange. The version of fill() with
     *   one parameter interprets the value one of three
     *   ways. If the parameter is a number, it's
     *   interpreted as a grayscale value. If the parameter
     *   is a string, it's interpreted as a CSS color
     *   string. A p5.Color object can also be provided to
     *   set the fill color.
     *
     *   The version of fill() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). The default
     *   color space is RGB, with each value in the range
     *   from 0 to 255.
     *   @param v1 red value if color mode is RGB or hue
     *   value if color mode is HSB.
     *   @param v2 green value if color mode is RGB or
     *   saturation value if color mode is HSB.
     *   @param v3 blue value if color mode is RGB or
     *   brightness value if color mode is HSB.
     *   @chainable
     */
    function fill(v1: number, v2: number, v3: number, alpha?: number): p5;

    /**
     *   Sets the color used to fill shapes. Calling
     *   fill(255, 165, 0) or fill('orange') means all
     *   shapes drawn after the fill command will be filled
     *   with the color orange. The version of fill() with
     *   one parameter interprets the value one of three
     *   ways. If the parameter is a number, it's
     *   interpreted as a grayscale value. If the parameter
     *   is a string, it's interpreted as a CSS color
     *   string. A p5.Color object can also be provided to
     *   set the fill color.
     *
     *   The version of fill() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). The default
     *   color space is RGB, with each value in the range
     *   from 0 to 255.
     *   @param value a color string.
     *   @chainable
     */
    function fill(value: string): p5;

    /**
     *   Sets the color used to fill shapes. Calling
     *   fill(255, 165, 0) or fill('orange') means all
     *   shapes drawn after the fill command will be filled
     *   with the color orange. The version of fill() with
     *   one parameter interprets the value one of three
     *   ways. If the parameter is a number, it's
     *   interpreted as a grayscale value. If the parameter
     *   is a string, it's interpreted as a CSS color
     *   string. A p5.Color object can also be provided to
     *   set the fill color.
     *
     *   The version of fill() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). The default
     *   color space is RGB, with each value in the range
     *   from 0 to 255.
     *   @param gray a grayscale value.
     *   @chainable
     */
    function fill(gray: number, alpha?: number): p5;

    /**
     *   Sets the color used to fill shapes. Calling
     *   fill(255, 165, 0) or fill('orange') means all
     *   shapes drawn after the fill command will be filled
     *   with the color orange. The version of fill() with
     *   one parameter interprets the value one of three
     *   ways. If the parameter is a number, it's
     *   interpreted as a grayscale value. If the parameter
     *   is a string, it's interpreted as a CSS color
     *   string. A p5.Color object can also be provided to
     *   set the fill color.
     *
     *   The version of fill() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). The default
     *   color space is RGB, with each value in the range
     *   from 0 to 255.
     *   @param values an array containing the red, green,
     *   blue & and alpha components of the color.
     *   @chainable
     */
    function fill(values: number[]): p5;

    /**
     *   Sets the color used to fill shapes. Calling
     *   fill(255, 165, 0) or fill('orange') means all
     *   shapes drawn after the fill command will be filled
     *   with the color orange. The version of fill() with
     *   one parameter interprets the value one of three
     *   ways. If the parameter is a number, it's
     *   interpreted as a grayscale value. If the parameter
     *   is a string, it's interpreted as a CSS color
     *   string. A p5.Color object can also be provided to
     *   set the fill color.
     *
     *   The version of fill() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode(). The default
     *   color space is RGB, with each value in the range
     *   from 0 to 255.
     *   @param color the fill color.
     *   @chainable
     */
    function fill(color: p5.Color): p5;

    /**
     *   Disables setting the interior color of shapes.
     *   This is the same as making the fill completely
     *   transparent. If both noStroke() and noFill() are
     *   called, nothing will be drawn to the screen.
     *   @chainable
     */
    function noFill(): p5;

    /**
     *   Disables drawing the stroke (outline). If both
     *   noStroke() and noFill() are called, nothing will
     *   be drawn to the screen.
     *   @chainable
     */
    function noStroke(): p5;

    /**
     *   Sets the color used to draw lines and borders
     *   around shapes. Calling stroke(255, 165, 0) or
     *   stroke('orange') means all shapes drawn after the
     *   stroke() command will be filled with the color
     *   orange. The way these parameters are interpreted
     *   may be changed with the colorMode() function. The
     *   version of stroke() with one parameter interprets
     *   the value one of three ways. If the parameter is a
     *   number, it's interpreted as a grayscale value. If
     *   the parameter is a string, it's interpreted as a
     *   CSS color string. A p5.Color object can also be
     *   provided to set the stroke color.
     *
     *   The version of stroke() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of stroke() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of stroke() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param v1 red value if color mode is RGB or hue
     *   value if color mode is HSB.
     *   @param v2 green value if color mode is RGB or
     *   saturation value if color mode is HSB.
     *   @param v3 blue value if color mode is RGB or
     *   brightness value if color mode is HSB.
     *   @chainable
     */
    function stroke(v1: number, v2: number, v3: number, alpha?: number): p5;

    /**
     *   Sets the color used to draw lines and borders
     *   around shapes. Calling stroke(255, 165, 0) or
     *   stroke('orange') means all shapes drawn after the
     *   stroke() command will be filled with the color
     *   orange. The way these parameters are interpreted
     *   may be changed with the colorMode() function. The
     *   version of stroke() with one parameter interprets
     *   the value one of three ways. If the parameter is a
     *   number, it's interpreted as a grayscale value. If
     *   the parameter is a string, it's interpreted as a
     *   CSS color string. A p5.Color object can also be
     *   provided to set the stroke color.
     *
     *   The version of stroke() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of stroke() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of stroke() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param value a color string.
     *   @chainable
     */
    function stroke(value: string): p5;

    /**
     *   Sets the color used to draw lines and borders
     *   around shapes. Calling stroke(255, 165, 0) or
     *   stroke('orange') means all shapes drawn after the
     *   stroke() command will be filled with the color
     *   orange. The way these parameters are interpreted
     *   may be changed with the colorMode() function. The
     *   version of stroke() with one parameter interprets
     *   the value one of three ways. If the parameter is a
     *   number, it's interpreted as a grayscale value. If
     *   the parameter is a string, it's interpreted as a
     *   CSS color string. A p5.Color object can also be
     *   provided to set the stroke color.
     *
     *   The version of stroke() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of stroke() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of stroke() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param gray a grayscale value.
     *   @chainable
     */
    function stroke(gray: number, alpha?: number): p5;

    /**
     *   Sets the color used to draw lines and borders
     *   around shapes. Calling stroke(255, 165, 0) or
     *   stroke('orange') means all shapes drawn after the
     *   stroke() command will be filled with the color
     *   orange. The way these parameters are interpreted
     *   may be changed with the colorMode() function. The
     *   version of stroke() with one parameter interprets
     *   the value one of three ways. If the parameter is a
     *   number, it's interpreted as a grayscale value. If
     *   the parameter is a string, it's interpreted as a
     *   CSS color string. A p5.Color object can also be
     *   provided to set the stroke color.
     *
     *   The version of stroke() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of stroke() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of stroke() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param values an array containing the red, green,
     *   blue, and alpha components of the color.
     *   @chainable
     */
    function stroke(values: number[]): p5;

    /**
     *   Sets the color used to draw lines and borders
     *   around shapes. Calling stroke(255, 165, 0) or
     *   stroke('orange') means all shapes drawn after the
     *   stroke() command will be filled with the color
     *   orange. The way these parameters are interpreted
     *   may be changed with the colorMode() function. The
     *   version of stroke() with one parameter interprets
     *   the value one of three ways. If the parameter is a
     *   number, it's interpreted as a grayscale value. If
     *   the parameter is a string, it's interpreted as a
     *   CSS color string. A p5.Color object can also be
     *   provided to set the stroke color.
     *
     *   The version of stroke() with two parameters
     *   interprets the first one as a grayscale value. The
     *   second parameter sets the alpha (transparency)
     *   value.
     *
     *   The version of stroke() with three parameters
     *   interprets them as RGB, HSB, or HSL colors,
     *   depending on the current colorMode().
     *
     *   The version of stroke() with four parameters
     *   interprets them as RGBA, HSBA, or HSLA colors,
     *   depending on the current colorMode(). The last
     *   parameter sets the alpha (transparency) value.
     *   @param color the stroke color.
     *   @chainable
     */
    function stroke(color: p5.Color): p5;

    /**
     *   All drawing that follows erase() will subtract
     *   from the canvas, revealing the web page
     *   underneath. The erased areas will become
     *   transparent, allowing the content behind the
     *   canvas to show through. The fill(), stroke(), and
     *   blendMode() have no effect once erase() is called.
     *   The erase() function has two optional parameters.
     *   The first parameter sets the strength of erasing
     *   by the shape's interior. A value of 0 means that
     *   no erasing will occur. A value of 255 means that
     *   the shape's interior will fully erase the content
     *   underneath. The default value is 255 (full
     *   strength).
     *
     *   The second parameter sets the strength of erasing
     *   by the shape's edge. A value of 0 means that no
     *   erasing will occur. A value of 255 means that the
     *   shape's edge will fully erase the content
     *   underneath. The default value is 255 (full
     *   strength).
     *
     *   To cancel the erasing effect, use the noErase()
     *   function.
     *
     *   erase() has no effect on drawing done with the
     *   image() and background() functions.
     *   @param [strengthFill] a number (0-255) for the
     *   strength of erasing under a shape's interior.
     *   Defaults to 255, which is full strength.
     *   @param [strengthStroke] a number (0-255) for the
     *   strength of erasing under a shape's edge. Defaults
     *   to 255, which is full strength.
     *   @chainable
     */
    function erase(strengthFill?: number, strengthStroke?: number): p5;

    /**
     *   Ends erasing that was started with erase(). The
     *   fill(), stroke(), and blendMode() settings will
     *   return to what they were prior to calling erase().
     *   @chainable
     */
    function noErase(): p5;

    /**
     *   Draws an arc to the canvas. Arcs are drawn along
     *   the outer edge of an ellipse (oval) defined by the
     *   x, y, w, and h parameters. Use the start and stop
     *   parameters to specify the angles (in radians) at
     *   which to draw the arc. Arcs are always drawn
     *   clockwise from start to stop. The origin of the
     *   arc's ellipse may be changed with the
     *   ellipseMode() function. The optional mode
     *   parameter determines the arc's fill style. The
     *   fill modes are a semi-circle (OPEN), a closed
     *   semi-circle (CHORD), or a closed pie segment
     *   (PIE).
     *   @param x x-coordinate of the arc's ellipse.
     *   @param y y-coordinate of the arc's ellipse.
     *   @param w width of the arc's ellipse by default.
     *   @param h height of the arc's ellipse by default.
     *   @param start angle to start the arc, specified in
     *   radians.
     *   @param stop angle to stop the arc, specified in
     *   radians.
     *   @param [mode] optional parameter to determine the
     *   way of drawing the arc. either CHORD, PIE, or
     *   OPEN.
     *   @param [detail] optional parameter for WebGL mode
     *   only. This is to specify the number of vertices
     *   that makes up the perimeter of the arc. Default
     *   value is 25. Won't draw a stroke for a detail of
     *   more than 50.
     *   @chainable
     */
    function arc(
        x: number,
        y: number,
        w: number,
        h: number,
        start: number,
        stop: number,
        mode?: p5.ARC_MODE,
        detail?: number
    ): p5;

    /**
     *   Draws an ellipse (oval) to the canvas. An ellipse
     *   with equal width and height is a circle. By
     *   default, the first two parameters set the location
     *   of the center of the ellipse. The third and fourth
     *   parameters set the shape's width and height,
     *   respectively. The origin may be changed with the
     *   ellipseMode() function. If no height is specified,
     *   the value of width is used for both the width and
     *   height. If a negative height or width is
     *   specified, the absolute value is taken.
     *   @param x x-coordinate of the center of the
     *   ellipse.
     *   @param y y-coordinate of the center of the
     *   ellipse.
     *   @param w width of the ellipse.
     *   @param [h] height of the ellipse.
     *   @chainable
     */
    function ellipse(x: number, y: number, w: number, h?: number): p5;

    /**
     *   Draws an ellipse (oval) to the canvas. An ellipse
     *   with equal width and height is a circle. By
     *   default, the first two parameters set the location
     *   of the center of the ellipse. The third and fourth
     *   parameters set the shape's width and height,
     *   respectively. The origin may be changed with the
     *   ellipseMode() function. If no height is specified,
     *   the value of width is used for both the width and
     *   height. If a negative height or width is
     *   specified, the absolute value is taken.
     *   @param x x-coordinate of the center of the
     *   ellipse.
     *   @param y y-coordinate of the center of the
     *   ellipse.
     *   @param w width of the ellipse.
     *   @param h height of the ellipse.
     *   @param [detail] optional parameter for WebGL mode
     *   only. This is to specify the number of vertices
     *   that makes up the perimeter of the ellipse.
     *   Default value is 25. Won't draw a stroke for a
     *   detail of more than 50.
     */
    function ellipse(x: number, y: number, w: number, h: number, detail?: number): void;

    /**
     *   Draws a circle to the canvas. A circle is a round
     *   shape. Every point on the edge of a circle is the
     *   same distance from its center. By default, the
     *   first two parameters set the location of the
     *   center of the circle. The third parameter sets the
     *   shape's width and height (diameter). The origin
     *   may be changed with the ellipseMode() function.
     *   @param x x-coordinate of the center of the circle.
     *   @param y y-coordinate of the center of the circle.
     *   @param d diameter of the circle.
     *   @chainable
     */
    function circle(x: number, y: number, d: number): p5;

    /**
     *   Draws a line, a straight path between two points.
     *   Its default width is one pixel. The version of
     *   line() with four parameters draws the line in 2D.
     *   To color a line, use the stroke() function. To
     *   change its width, use the strokeWeight() function.
     *   A line can't be filled, so the fill() function
     *   won't affect the color of a line. The version of
     *   line() with six parameters allows the line to be
     *   drawn in 3D space. Doing so requires adding the
     *   WEBGL argument to createCanvas().
     *   @param x1 the x-coordinate of the first point.
     *   @param y1 the y-coordinate of the first point.
     *   @param x2 the x-coordinate of the second point.
     *   @param y2 the y-coordinate of the second point.
     *   @chainable
     */
    function line(x1: number, y1: number, x2: number, y2: number): p5;

    /**
     *   Draws a line, a straight path between two points.
     *   Its default width is one pixel. The version of
     *   line() with four parameters draws the line in 2D.
     *   To color a line, use the stroke() function. To
     *   change its width, use the strokeWeight() function.
     *   A line can't be filled, so the fill() function
     *   won't affect the color of a line. The version of
     *   line() with six parameters allows the line to be
     *   drawn in 3D space. Doing so requires adding the
     *   WEBGL argument to createCanvas().
     *   @param x1 the x-coordinate of the first point.
     *   @param y1 the y-coordinate of the first point.
     *   @param z1 the z-coordinate of the first point.
     *   @param x2 the x-coordinate of the second point.
     *   @param y2 the y-coordinate of the second point.
     *   @param z2 the z-coordinate of the second point.
     *   @chainable
     */
    function line(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): p5;

    /**
     *   Draws a point, a single coordinate in space. Its
     *   default size is one pixel. The first two
     *   parameters are the point's x- and y-coordinates,
     *   respectively. To color a point, use the stroke()
     *   function. To change its size, use the
     *   strokeWeight() function. The version of point()
     *   with three parameters allows the point to be drawn
     *   in 3D space. Doing so requires adding the WEBGL
     *   argument to createCanvas().
     *
     *   The version of point() with one parameter allows
     *   the point's location to be set with a p5.Vector
     *   object.
     *   @param x the x-coordinate.
     *   @param y the y-coordinate.
     *   @param [z] the z-coordinate (for WebGL mode).
     *   @chainable
     */
    function point(x: number, y: number, z?: number): p5;

    /**
     *   Draws a point, a single coordinate in space. Its
     *   default size is one pixel. The first two
     *   parameters are the point's x- and y-coordinates,
     *   respectively. To color a point, use the stroke()
     *   function. To change its size, use the
     *   strokeWeight() function. The version of point()
     *   with three parameters allows the point to be drawn
     *   in 3D space. Doing so requires adding the WEBGL
     *   argument to createCanvas().
     *
     *   The version of point() with one parameter allows
     *   the point's location to be set with a p5.Vector
     *   object.
     *   @param coordinateVector the coordinate vector.
     *   @chainable
     */
    function point(coordinateVector: p5.Vector): p5;

    /**
     *   Draws a quad to the canvas. A quad is a
     *   quadrilateral, a four-sided polygon. Some examples
     *   of quads include rectangles, squares, rhombuses,
     *   and trapezoids. The first pair of parameters
     *   (x1,y1) sets the quad's first point. The following
     *   pairs of parameters set the coordinates for its
     *   next three points. Parameters should proceed
     *   clockwise or counter-clockwise around the shape.
     *   The version of quad() with twelve parameters
     *   allows the quad to be drawn in 3D space. Doing so
     *   requires adding the WEBGL argument to
     *   createCanvas().
     *   @param x1 the x-coordinate of the first point.
     *   @param y1 the y-coordinate of the first point.
     *   @param x2 the x-coordinate of the second point.
     *   @param y2 the y-coordinate of the second point.
     *   @param x3 the x-coordinate of the third point.
     *   @param y3 the y-coordinate of the third point.
     *   @param x4 the x-coordinate of the fourth point.
     *   @param y4 the y-coordinate of the fourth point.
     *   @param [detailX] number of segments in the
     *   x-direction.
     *   @param [detailY] number of segments in the
     *   y-direction.
     *   @chainable
     */
    function quad(
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        x4: number,
        y4: number,
        detailX?: number,
        detailY?: number
    ): p5;

    /**
     *   Draws a quad to the canvas. A quad is a
     *   quadrilateral, a four-sided polygon. Some examples
     *   of quads include rectangles, squares, rhombuses,
     *   and trapezoids. The first pair of parameters
     *   (x1,y1) sets the quad's first point. The following
     *   pairs of parameters set the coordinates for its
     *   next three points. Parameters should proceed
     *   clockwise or counter-clockwise around the shape.
     *   The version of quad() with twelve parameters
     *   allows the quad to be drawn in 3D space. Doing so
     *   requires adding the WEBGL argument to
     *   createCanvas().
     *   @param x1 the x-coordinate of the first point.
     *   @param y1 the y-coordinate of the first point.
     *   @param z1 the z-coordinate of the first point.
     *   @param x2 the x-coordinate of the second point.
     *   @param y2 the y-coordinate of the second point.
     *   @param z2 the z-coordinate of the second point.
     *   @param x3 the x-coordinate of the third point.
     *   @param y3 the y-coordinate of the third point.
     *   @param z3 the z-coordinate of the third point.
     *   @param x4 the x-coordinate of the fourth point.
     *   @param y4 the y-coordinate of the fourth point.
     *   @param z4 the z-coordinate of the fourth point.
     *   @param [detailX] number of segments in the
     *   x-direction.
     *   @param [detailY] number of segments in the
     *   y-direction.
     *   @chainable
     */
    function quad(
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        x3: number,
        y3: number,
        z3: number,
        x4: number,
        y4: number,
        z4: number,
        detailX?: number,
        detailY?: number
    ): p5;

    /**
     *   Draws a rectangle to the canvas. A rectangle is a
     *   four-sided polygon with every angle at ninety
     *   degrees. By default, the first two parameters set
     *   the location of the rectangle's upper-left corner.
     *   The third and fourth set the shape's the width and
     *   height, respectively. The way these parameters are
     *   interpreted may be changed with the rectMode()
     *   function. The version of rect() with five
     *   parameters creates a rounded rectangle. The fifth
     *   parameter is used as the radius value for all four
     *   corners.
     *
     *   The version of rect() with eight parameters also
     *   creates a rounded rectangle. When using eight
     *   parameters, the latter four set the radius of the
     *   arc at each corner separately. The radii start
     *   with the top-left corner and move clockwise around
     *   the rectangle. If any of these parameters are
     *   omitted, they are set to the value of the last
     *   specified corner radius.
     *   @param x x-coordinate of the rectangle.
     *   @param y y-coordinate of the rectangle.
     *   @param w width of the rectangle.
     *   @param [h] height of the rectangle.
     *   @param [tl] optional radius of top-left corner.
     *   @param [tr] optional radius of top-right corner.
     *   @param [br] optional radius of bottom-right
     *   corner.
     *   @param [bl] optional radius of bottom-left corner.
     *   @chainable
     */
    function rect(x: number, y: number, w: number, h?: number, tl?: number, tr?: number, br?: number, bl?: number): p5;

    /**
     *   Draws a rectangle to the canvas. A rectangle is a
     *   four-sided polygon with every angle at ninety
     *   degrees. By default, the first two parameters set
     *   the location of the rectangle's upper-left corner.
     *   The third and fourth set the shape's the width and
     *   height, respectively. The way these parameters are
     *   interpreted may be changed with the rectMode()
     *   function. The version of rect() with five
     *   parameters creates a rounded rectangle. The fifth
     *   parameter is used as the radius value for all four
     *   corners.
     *
     *   The version of rect() with eight parameters also
     *   creates a rounded rectangle. When using eight
     *   parameters, the latter four set the radius of the
     *   arc at each corner separately. The radii start
     *   with the top-left corner and move clockwise around
     *   the rectangle. If any of these parameters are
     *   omitted, they are set to the value of the last
     *   specified corner radius.
     *   @param x x-coordinate of the rectangle.
     *   @param y y-coordinate of the rectangle.
     *   @param w width of the rectangle.
     *   @param h height of the rectangle.
     *   @param [detailX] number of segments in the
     *   x-direction (for WebGL mode).
     *   @param [detailY] number of segments in the
     *   y-direction (for WebGL mode).
     *   @chainable
     */
    function rect(x: number, y: number, w: number, h: number, detailX?: number, detailY?: number): p5;

    /**
     *   Draws a square to the canvas. A square is a
     *   four-sided polygon with every angle at ninety
     *   degrees and equal side lengths. By default, the
     *   first two parameters set the location of the
     *   square's upper-left corner. The third parameter
     *   sets its side size. The way these parameters are
     *   interpreted may be changed with the rectMode()
     *   function. The version of square() with four
     *   parameters creates a rounded square. The fourth
     *   parameter is used as the radius value for all four
     *   corners.
     *
     *   The version of square() with seven parameters also
     *   creates a rounded square. When using seven
     *   parameters, the latter four set the radius of the
     *   arc at each corner separately. The radii start
     *   with the top-left corner and move clockwise around
     *   the square. If any of these parameters are
     *   omitted, they are set to the value of the last
     *   specified corner radius.
     *   @param x x-coordinate of the square.
     *   @param y y-coordinate of the square.
     *   @param s side size of the square.
     *   @param [tl] optional radius of top-left corner.
     *   @param [tr] optional radius of top-right corner.
     *   @param [br] optional radius of bottom-right
     *   corner.
     *   @param [bl] optional radius of bottom-left corner.
     *   @chainable
     */
    function square(x: number, y: number, s: number, tl?: number, tr?: number, br?: number, bl?: number): p5;

    /**
     *   Draws a triangle to the canvas. A triangle is a
     *   three-sided polygon. The first two parameters
     *   specify the triangle's first point (x1,y1). The
     *   middle two parameters specify its second point
     *   (x2,y2). And the last two parameters specify its
     *   third point (x3, y3).
     *   @param x1 x-coordinate of the first point.
     *   @param y1 y-coordinate of the first point.
     *   @param x2 x-coordinate of the second point.
     *   @param y2 y-coordinate of the second point.
     *   @param x3 x-coordinate of the third point.
     *   @param y3 y-coordinate of the third point.
     *   @chainable
     */
    function triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): p5;

    /**
     *   Modifies the location from which ellipses,
     *   circles, and arcs are drawn. By default, the first
     *   two parameters are the x- and y-coordinates of the
     *   shape's center. The next parameters are its width
     *   and height. This is equivalent to calling
     *   ellipseMode(CENTER). ellipseMode(RADIUS) also uses
     *   the first two parameters to set the x- and
     *   y-coordinates of the shape's center. The next
     *   parameters are half of the shapes's width and
     *   height. Calling ellipse(0, 0, 10, 15) draws a
     *   shape with a width of 20 and height of 30.
     *
     *   ellipseMode(CORNER) uses the first two parameters
     *   as the upper-left corner of the shape. The next
     *   parameters are its width and height.
     *
     *   ellipseMode(CORNERS) uses the first two parameters
     *   as the location of one corner of the ellipse's
     *   bounding box. The third and fourth parameters are
     *   the location of the opposite corner.
     *
     *   The argument passed to ellipseMode() must be
     *   written in ALL CAPS because the constants CENTER,
     *   RADIUS, CORNER, and CORNERS are defined this way.
     *   JavaScript is a case-sensitive language.
     *   @param mode either CENTER, RADIUS, CORNER, or
     *   CORNERS
     *   @chainable
     */
    function ellipseMode(mode: p5.ELLIPSE_MODE): p5;

    /**
     *   Draws all geometry with jagged (aliased) edges.
     *   smooth() is active by default in 2D mode. It's
     *   necessary to call noSmooth() to disable smoothing
     *   of geometry, images, and fonts.
     *
     *   In WebGL mode, noSmooth() is active by default.
     *   It's necessary to call smooth() to draw smooth
     *   (antialiased) edges.
     *   @chainable
     */
    function noSmooth(): p5;

    /**
     *   Modifies the location from which rectangles and
     *   squares are drawn. By default, the first two
     *   parameters are the x- and y-coordinates of the
     *   shape's upper-left corner. The next parameters are
     *   its width and height. This is equivalent to
     *   calling rectMode(CORNER). rectMode(CORNERS) also
     *   uses the first two parameters as the location of
     *   one of the corners. The third and fourth
     *   parameters are the location of the opposite
     *   corner.
     *
     *   rectMode(CENTER) uses the first two parameters as
     *   the x- and y-coordinates of the shape's center.
     *   The next parameters are its width and height.
     *
     *   rectMode(RADIUS) also uses the first two
     *   parameters as the x- and y-coordinates of the
     *   shape's center. The next parameters are half of
     *   the shape's width and height.
     *
     *   The argument passed to rectMode() must be written
     *   in ALL CAPS because the constants CENTER, RADIUS,
     *   CORNER, and CORNERS are defined this way.
     *   JavaScript is a case-sensitive language.
     *   @param mode either CORNER, CORNERS, CENTER, or
     *   RADIUS
     *   @chainable
     */
    function rectMode(mode: p5.RECT_MODE): p5;

    /**
     *   Draws all geometry with smooth (anti-aliased)
     *   edges. smooth() will also improve image quality of
     *   resized images. smooth() is active by default in
     *   2D mode. It's necessary to call noSmooth() to
     *   disable smoothing of geometry, images, and fonts.
     *
     *   In WebGL mode, noSmooth() is active by default.
     *   It's necessary to call smooth() to draw smooth
     *   (antialiased) edges.
     *   @chainable
     */
    function smooth(): p5;

    /**
     *   Sets the style for rendering line endings. These
     *   ends are either rounded (ROUND), squared (SQUARE),
     *   or extended (PROJECT). The default cap is ROUND.
     *   The argument passed to strokeCap() must be written
     *   in ALL CAPS because the constants ROUND, SQUARE,
     *   and PROJECT are defined this way. JavaScript is a
     *   case-sensitive language.
     *   @param cap either ROUND, SQUARE, or PROJECT
     *   @chainable
     */
    function strokeCap(cap: p5.STROKE_CAP): p5;

    /**
     *   Sets the style of the joints which connect line
     *   segments. These joints are either mitered (MITER),
     *   beveled (BEVEL), or rounded (ROUND). The default
     *   joint is MITER in 2D mode and ROUND in WebGL mode.
     *   The argument passed to strokeJoin() must be
     *   written in ALL CAPS because the constants MITER,
     *   BEVEL, and ROUND are defined this way. JavaScript
     *   is a case-sensitive language.
     *   @param join either MITER, BEVEL, or ROUND
     *   @chainable
     */
    function strokeJoin(join: p5.STROKE_JOIN): p5;

    /**
     *   Sets the width of the stroke used for lines,
     *   points, and the border around shapes. All widths
     *   are set in units of pixels. Note that
     *   strokeWeight() is affected by any transformation
     *   or scaling that has been applied previously.
     *   @param weight the weight of the stroke (in
     *   pixels).
     *   @chainable
     */
    function strokeWeight(weight: number): p5;

    /**
     *   Draws a cubic Bezier curve on the screen. These
     *   curves are defined by a series of anchor and
     *   control points. The first two parameters specify
     *   the first anchor point and the last two parameters
     *   specify the other anchor point, which become the
     *   first and last points on the curve. The middle
     *   parameters specify the two control points which
     *   define the shape of the curve. Approximately
     *   speaking, control points "pull" the curve towards
     *   them. Bezier curves were developed by French
     *   automotive engineer Pierre Bezier, and are
     *   commonly used in computer graphics to define
     *   gently sloping curves. See also curve().
     *   @param x1 x-coordinate for the first anchor point
     *   @param y1 y-coordinate for the first anchor point
     *   @param x2 x-coordinate for the first control point
     *   @param y2 y-coordinate for the first control point
     *   @param x3 x-coordinate for the second control
     *   point
     *   @param y3 y-coordinate for the second control
     *   point
     *   @param x4 x-coordinate for the second anchor point
     *   @param y4 y-coordinate for the second anchor point
     *   @chainable
     */
    function bezier(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): p5;

    /**
     *   Draws a cubic Bezier curve on the screen. These
     *   curves are defined by a series of anchor and
     *   control points. The first two parameters specify
     *   the first anchor point and the last two parameters
     *   specify the other anchor point, which become the
     *   first and last points on the curve. The middle
     *   parameters specify the two control points which
     *   define the shape of the curve. Approximately
     *   speaking, control points "pull" the curve towards
     *   them. Bezier curves were developed by French
     *   automotive engineer Pierre Bezier, and are
     *   commonly used in computer graphics to define
     *   gently sloping curves. See also curve().
     *   @param x1 x-coordinate for the first anchor point
     *   @param y1 y-coordinate for the first anchor point
     *   @param z1 z-coordinate for the first anchor point
     *   @param x2 x-coordinate for the first control point
     *   @param y2 y-coordinate for the first control point
     *   @param z2 z-coordinate for the first control point
     *   @param x3 x-coordinate for the second control
     *   point
     *   @param y3 y-coordinate for the second control
     *   point
     *   @param z3 z-coordinate for the second control
     *   point
     *   @param x4 x-coordinate for the second anchor point
     *   @param y4 y-coordinate for the second anchor point
     *   @param z4 z-coordinate for the second anchor point
     *   @chainable
     */
    function bezier(
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        x3: number,
        y3: number,
        z3: number,
        x4: number,
        y4: number,
        z4: number
    ): p5;

    /**
     *   Sets the resolution at which Bezier's curve is
     *   displayed. The default value is 20. Note, This
     *   function is only useful when using the WEBGL
     *   renderer as the default canvas renderer does not
     *   use this information.
     *   @param detail resolution of the curves
     *   @chainable
     */
    function bezierDetail(detail: number): p5;

    /**
     *   Given the x or y co-ordinate values of control and
     *   anchor points of a bezier curve, it evaluates the
     *   x or y coordinate of the bezier at position t. The
     *   parameters a and d are the x or y coordinates of
     *   first and last points on the curve while b and c
     *   are of the control points.The final parameter t is
     *   the position of the resultant point which is given
     *   between 0 and 1. This can be done once with the x
     *   coordinates and a second time with the y
     *   coordinates to get the location of a bezier curve
     *   at t.
     *   @param a coordinate of first point on the curve
     *   @param b coordinate of first control point
     *   @param c coordinate of second control point
     *   @param d coordinate of second point on the curve
     *   @param t value between 0 and 1
     *   @return the value of the Bezier at position t
     */
    function bezierPoint(a: number, b: number, c: number, d: number, t: number): number;

    /**
     *   Evaluates the tangent to the Bezier at position t
     *   for points a, b, c, d. The parameters a and d are
     *   the first and last points on the curve, and b and
     *   c are the control points. The final parameter t
     *   varies between 0 and 1.
     *   @param a coordinate of first point on the curve
     *   @param b coordinate of first control point
     *   @param c coordinate of second control point
     *   @param d coordinate of second point on the curve
     *   @param t value between 0 and 1
     *   @return the tangent at position t
     */
    function bezierTangent(a: number, b: number, c: number, d: number, t: number): number;

    /**
     *   Draws a curved line on the screen between two
     *   points, given as the middle four parameters. The
     *   first two parameters are a control point, as if
     *   the curve came from this point even though it's
     *   not drawn. The last two parameters similarly
     *   describe the other control point.  Longer curves
     *   can be created by putting a series of curve()
     *   functions together or using curveVertex(). An
     *   additional function called curveTightness()
     *   provides control for the visual quality of the
     *   curve. The curve() function is an implementation
     *   of Catmull-Rom splines.
     *   @param x1 x-coordinate for the beginning control
     *   point
     *   @param y1 y-coordinate for the beginning control
     *   point
     *   @param x2 x-coordinate for the first point
     *   @param y2 y-coordinate for the first point
     *   @param x3 x-coordinate for the second point
     *   @param y3 y-coordinate for the second point
     *   @param x4 x-coordinate for the ending control
     *   point
     *   @param y4 y-coordinate for the ending control
     *   point
     *   @chainable
     */
    function curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): p5;

    /**
     *   Draws a curved line on the screen between two
     *   points, given as the middle four parameters. The
     *   first two parameters are a control point, as if
     *   the curve came from this point even though it's
     *   not drawn. The last two parameters similarly
     *   describe the other control point.  Longer curves
     *   can be created by putting a series of curve()
     *   functions together or using curveVertex(). An
     *   additional function called curveTightness()
     *   provides control for the visual quality of the
     *   curve. The curve() function is an implementation
     *   of Catmull-Rom splines.
     *   @param x1 x-coordinate for the beginning control
     *   point
     *   @param y1 y-coordinate for the beginning control
     *   point
     *   @param z1 z-coordinate for the beginning control
     *   point
     *   @param x2 x-coordinate for the first point
     *   @param y2 y-coordinate for the first point
     *   @param z2 z-coordinate for the first point
     *   @param x3 x-coordinate for the second point
     *   @param y3 y-coordinate for the second point
     *   @param z3 z-coordinate for the second point
     *   @param x4 x-coordinate for the ending control
     *   point
     *   @param y4 y-coordinate for the ending control
     *   point
     *   @param z4 z-coordinate for the ending control
     *   point
     *   @chainable
     */
    function curve(
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        x3: number,
        y3: number,
        z3: number,
        x4: number,
        y4: number,
        z4: number
    ): p5;

    /**
     *   Sets the resolution at which curves display. The
     *   default value is 20 while the minimum value is 3.
     *   This function is only useful when using the WEBGL
     *   renderer as the default canvas renderer does not
     *   use this information.
     *   @param resolution resolution of the curves
     *   @chainable
     */
    function curveDetail(resolution: number): p5;

    /**
     *   Modifies the quality of forms created with curve()
     *   and curveVertex().The parameter tightness
     *   determines how the curve fits to the vertex
     *   points. The value 0.0 is the default value for
     *   tightness (this value defines the curves to be
     *   Catmull-Rom splines) and the value 1.0 connects
     *   all the points with straight lines. Values within
     *   the range -5.0 and 5.0 will deform the curves but
     *   will leave them recognizable and as values
     *   increase in magnitude, they will continue to
     *   deform.
     *   @param amount amount of deformation from the
     *   original vertices
     *   @chainable
     */
    function curveTightness(amount: number): p5;

    /**
     *   Evaluates the curve at position t for points a, b,
     *   c, d. The parameter t varies between 0 and 1, a
     *   and d are control points of the curve, and b and c
     *   are the start and end points of the curve. This
     *   can be done once with the x coordinates and a
     *   second time with the y coordinates to get the
     *   location of a curve at t.
     *   @param a coordinate of first control point of the
     *   curve
     *   @param b coordinate of first point
     *   @param c coordinate of second point
     *   @param d coordinate of second control point
     *   @param t value between 0 and 1
     *   @return Curve value at position t
     */
    function curvePoint(a: number, b: number, c: number, d: number, t: number): number;

    /**
     *   Evaluates the tangent to the curve at position t
     *   for points a, b, c, d. The parameter t varies
     *   between 0 and 1, a and d are points on the curve,
     *   and b and c are the control points.
     *   @param a coordinate of first control point
     *   @param b coordinate of first point on the curve
     *   @param c coordinate of second point on the curve
     *   @param d coordinate of second conrol point
     *   @param t value between 0 and 1
     *   @return the tangent at position t
     */
    function curveTangent(a: number, b: number, c: number, d: number, t: number): number;

    /**
     *   Use the beginContour() and endContour() functions
     *   to create negative shapes within shapes such as
     *   the center of the letter 'O'. beginContour()
     *   begins recording vertices for the shape and
     *   endContour() stops recording. The vertices that
     *   define a negative shape must "wind" in the
     *   opposite direction from the exterior shape. First
     *   draw vertices for the exterior clockwise order,
     *   then for internal shapes, draw vertices shape in
     *   counter-clockwise. These functions can only be
     *   used within a beginShape()/endShape() pair and
     *   transformations such as translate(), rotate(), and
     *   scale() do not work within a
     *   beginContour()/endContour() pair. It is also not
     *   possible to use other shapes, such as ellipse() or
     *   rect() within.
     *   @chainable
     */
    function beginContour(): p5;

    /**
     *   Using the beginShape() and endShape() functions
     *   allow creating more complex forms. beginShape()
     *   begins recording vertices for a shape and
     *   endShape() stops recording. The value of the kind
     *   parameter tells it which types of shapes to create
     *   from the provided vertices. With no mode
     *   specified, the shape can be any irregular polygon.
     *   The parameters available for beginShape() are:
     *
     *   POINTS Draw a series of points
     *
     *   LINES Draw a series of unconnected line segments
     *   (individual lines)
     *
     *   TRIANGLES Draw a series of separate triangles
     *
     *   TRIANGLE_FAN Draw a series of connected triangles
     *   sharing the first vertex in a fan-like fashion
     *
     *   TRIANGLE_STRIP Draw a series of connected
     *   triangles in strip fashion
     *
     *   QUADS Draw a series of separate quads
     *
     *   QUAD_STRIP Draw quad strip using adjacent edges to
     *   form the next quad
     *
     *   TESS (WEBGL only) Handle irregular polygon for
     *   filling curve by explicit tessellation
     *
     *   After calling the beginShape() function, a series
     *   of vertex() commands must follow. To stop drawing
     *   the shape, call endShape(). Each shape will be
     *   outlined with the current stroke color and filled
     *   with the fill color.
     *
     *   Transformations such as translate(), rotate(), and
     *   scale() do not work within beginShape(). It is
     *   also not possible to use other shapes, such as
     *   ellipse() or rect() within beginShape().
     *   @param [kind] either POINTS, LINES, TRIANGLES,
     *   TRIANGLE_FAN TRIANGLE_STRIP, QUADS, QUAD_STRIP or
     *   TESS
     *   @chainable
     */
    function beginShape(kind?: p5.BEGIN_KIND): p5;

    /**
     *   Specifies vertex coordinates for Bezier curves.
     *   Each call to bezierVertex() defines the position
     *   of two control points and one anchor point of a
     *   Bezier curve, adding a new segment to a line or
     *   shape. For WebGL mode bezierVertex() can be used
     *   in 2D as well as 3D mode. 2D mode expects 6
     *   parameters, while 3D mode expects 9 parameters
     *   (including z coordinates). The first time
     *   bezierVertex() is used within a beginShape() call,
     *   it must be prefaced with a call to vertex() to set
     *   the first anchor point. This function must be used
     *   between beginShape() and endShape() and only when
     *   there is no MODE or POINTS parameter specified to
     *   beginShape().
     *   @param x2 x-coordinate for the first control point
     *   @param y2 y-coordinate for the first control point
     *   @param x3 x-coordinate for the second control
     *   point
     *   @param y3 y-coordinate for the second control
     *   point
     *   @param x4 x-coordinate for the anchor point
     *   @param y4 y-coordinate for the anchor point
     *   @chainable
     */
    function bezierVertex(x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): p5;

    /**
     *   Specifies vertex coordinates for Bezier curves.
     *   Each call to bezierVertex() defines the position
     *   of two control points and one anchor point of a
     *   Bezier curve, adding a new segment to a line or
     *   shape. For WebGL mode bezierVertex() can be used
     *   in 2D as well as 3D mode. 2D mode expects 6
     *   parameters, while 3D mode expects 9 parameters
     *   (including z coordinates). The first time
     *   bezierVertex() is used within a beginShape() call,
     *   it must be prefaced with a call to vertex() to set
     *   the first anchor point. This function must be used
     *   between beginShape() and endShape() and only when
     *   there is no MODE or POINTS parameter specified to
     *   beginShape().
     *   @param x2 x-coordinate for the first control point
     *   @param y2 y-coordinate for the first control point
     *   @param z2 z-coordinate for the first control point
     *   (for WebGL mode)
     *   @param x3 x-coordinate for the second control
     *   point
     *   @param y3 y-coordinate for the second control
     *   point
     *   @param z3 z-coordinate for the second control
     *   point (for WebGL mode)
     *   @param x4 x-coordinate for the anchor point
     *   @param y4 y-coordinate for the anchor point
     *   @param z4 z-coordinate for the anchor point (for
     *   WebGL mode)
     *   @chainable
     */
    function bezierVertex(
        x2: number,
        y2: number,
        z2: number,
        x3: number,
        y3: number,
        z3: number,
        x4: number,
        y4: number,
        z4: number
    ): p5;

    /**
     *   Specifies vertex coordinates for curves. This
     *   function may only be used between beginShape() and
     *   endShape() and only when there is no MODE
     *   parameter specified to beginShape(). For WebGL
     *   mode curveVertex() can be used in 2D as well as 3D
     *   mode. 2D mode expects 2 parameters, while 3D mode
     *   expects 3 parameters. The first and last points in
     *   a series of curveVertex() lines will be used to
     *   guide the beginning and end of the curve. A
     *   minimum of four points is required to draw a tiny
     *   curve between the second and third points. Adding
     *   a fifth point with curveVertex() will draw the
     *   curve between the second, third, and fourth
     *   points. The curveVertex() function is an
     *   implementation of Catmull-Rom splines.
     *   @param x x-coordinate of the vertex
     *   @param y y-coordinate of the vertex
     *   @chainable
     */
    function curveVertex(x: number, y: number): p5;

    /**
     *   Specifies vertex coordinates for curves. This
     *   function may only be used between beginShape() and
     *   endShape() and only when there is no MODE
     *   parameter specified to beginShape(). For WebGL
     *   mode curveVertex() can be used in 2D as well as 3D
     *   mode. 2D mode expects 2 parameters, while 3D mode
     *   expects 3 parameters. The first and last points in
     *   a series of curveVertex() lines will be used to
     *   guide the beginning and end of the curve. A
     *   minimum of four points is required to draw a tiny
     *   curve between the second and third points. Adding
     *   a fifth point with curveVertex() will draw the
     *   curve between the second, third, and fourth
     *   points. The curveVertex() function is an
     *   implementation of Catmull-Rom splines.
     *   @param x x-coordinate of the vertex
     *   @param y y-coordinate of the vertex
     *   @param [z] z-coordinate of the vertex (for WebGL
     *   mode)
     *   @chainable
     */
    function curveVertex(x: number, y: number, z?: number): p5;

    /**
     *   Use the beginContour() and endContour() functions
     *   to create negative shapes within shapes such as
     *   the center of the letter 'O'. beginContour()
     *   begins recording vertices for the shape and
     *   endContour() stops recording. The vertices that
     *   define a negative shape must "wind" in the
     *   opposite direction from the exterior shape. First
     *   draw vertices for the exterior clockwise order,
     *   then for internal shapes, draw vertices shape in
     *   counter-clockwise. These functions can only be
     *   used within a beginShape()/endShape() pair and
     *   transformations such as translate(), rotate(), and
     *   scale() do not work within a
     *   beginContour()/endContour() pair. It is also not
     *   possible to use other shapes, such as ellipse() or
     *   rect() within.
     *   @chainable
     */
    function endContour(): p5;

    /**
     *   The endShape() function is the companion to
     *   beginShape() and may only be called after
     *   beginShape(). When endShape() is called, all of
     *   the image data defined since the previous call to
     *   beginShape() is written into the image buffer. The
     *   constant CLOSE is the value for the mode parameter
     *   to close the shape (to connect the beginning and
     *   the end). When using instancing with endShape()
     *   the instancing will not apply to the strokes. When
     *   the count parameter is used with a value greater
     *   than 1, it enables instancing for shapes built
     *   when in WEBGL mode. Instancing is a feature that
     *   allows the GPU to efficiently draw multiples of
     *   the same shape. It's often used for particle
     *   effects or other times when you need a lot of
     *   repetition. In order to take advantage of
     *   instancing, you will also need to write your own
     *   custom shader using the gl_InstanceID keyword. You
     *   can read more about instancing here or by working
     *   from the example on this page.
     *   @param [mode] use CLOSE to close the shape
     *   @param [count] number of times you want to
     *   draw/instance the shape (for WebGL mode).
     *   @chainable
     */
    function endShape(mode?: p5.END_MODE, count?: number): p5;

    /**
     *   Specifies vertex coordinates for quadratic Bezier
     *   curves. Each call to quadraticVertex() defines the
     *   position of one control points and one anchor
     *   point of a Bezier curve, adding a new segment to a
     *   line or shape. The first time quadraticVertex() is
     *   used within a beginShape() call, it must be
     *   prefaced with a call to vertex() to set the first
     *   anchor point. For WebGL mode quadraticVertex() can
     *   be used in 2D as well as 3D mode. 2D mode expects
     *   4 parameters, while 3D mode expects 6 parameters
     *   (including z coordinates). This function must be
     *   used between beginShape() and endShape() and only
     *   when there is no MODE or POINTS parameter
     *   specified to beginShape().
     *   @param cx x-coordinate for the control point
     *   @param cy y-coordinate for the control point
     *   @param x3 x-coordinate for the anchor point
     *   @param y3 y-coordinate for the anchor point
     *   @chainable
     */
    function quadraticVertex(cx: number, cy: number, x3: number, y3: number): p5;

    /**
     *   Specifies vertex coordinates for quadratic Bezier
     *   curves. Each call to quadraticVertex() defines the
     *   position of one control points and one anchor
     *   point of a Bezier curve, adding a new segment to a
     *   line or shape. The first time quadraticVertex() is
     *   used within a beginShape() call, it must be
     *   prefaced with a call to vertex() to set the first
     *   anchor point. For WebGL mode quadraticVertex() can
     *   be used in 2D as well as 3D mode. 2D mode expects
     *   4 parameters, while 3D mode expects 6 parameters
     *   (including z coordinates). This function must be
     *   used between beginShape() and endShape() and only
     *   when there is no MODE or POINTS parameter
     *   specified to beginShape().
     *   @param cx x-coordinate for the control point
     *   @param cy y-coordinate for the control point
     *   @param cz z-coordinate for the control point (for
     *   WebGL mode)
     *   @param x3 x-coordinate for the anchor point
     *   @param y3 y-coordinate for the anchor point
     *   @param z3 z-coordinate for the anchor point (for
     *   WebGL mode)
     *   @chainable
     */
    function quadraticVertex(cx: number, cy: number, cz: number, x3: number, y3: number, z3: number): p5;

    /**
     *   All shapes are constructed by connecting a series
     *   of vertices. vertex() is used to specify the
     *   vertex coordinates for points, lines, triangles,
     *   quads, and polygons. It is used exclusively within
     *   the beginShape() and endShape() functions.
     *   @param x x-coordinate of the vertex
     *   @param y y-coordinate of the vertex
     *   @chainable
     */
    function vertex(x: number, y: number): p5;

    /**
     *   All shapes are constructed by connecting a series
     *   of vertices. vertex() is used to specify the
     *   vertex coordinates for points, lines, triangles,
     *   quads, and polygons. It is used exclusively within
     *   the beginShape() and endShape() functions.
     *   @param x x-coordinate of the vertex
     *   @param y y-coordinate of the vertex
     *   @param [z] z-coordinate of the vertex. Defaults to
     *   0 if not specified.
     *   @chainable
     */
    function vertex(x: number, y: number, z?: number): p5;

    /**
     *   All shapes are constructed by connecting a series
     *   of vertices. vertex() is used to specify the
     *   vertex coordinates for points, lines, triangles,
     *   quads, and polygons. It is used exclusively within
     *   the beginShape() and endShape() functions.
     *   @param x x-coordinate of the vertex
     *   @param y y-coordinate of the vertex
     *   @param [z] z-coordinate of the vertex. Defaults to
     *   0 if not specified.
     *   @param [u] the vertex's texture u-coordinate
     *   @param [v] the vertex's texture v-coordinate
     *   @chainable
     */
    function vertex(x: number, y: number, z?: number, u?: number, v?: number): p5;

    /**
     *   Sets the 3d vertex normal to use for subsequent
     *   vertices drawn with vertex(). A normal is a vector
     *   that is generally nearly perpendicular to a
     *   shape's surface which controls how much light will
     *   be reflected from that part of the surface.
     *   @param vector A p5.Vector representing the vertex
     *   normal.
     *   @chainable
     */
    function normal(vector: p5.Vector): p5;

    /**
     *   Sets the 3d vertex normal to use for subsequent
     *   vertices drawn with vertex(). A normal is a vector
     *   that is generally nearly perpendicular to a
     *   shape's surface which controls how much light will
     *   be reflected from that part of the surface.
     *   @param x The x component of the vertex normal.
     *   @param y The y component of the vertex normal.
     *   @param z The z component of the vertex normal.
     *   @chainable
     */
    function normal(x: number, y: number, z: number): p5;

    /**
     *   Version of this p5.js.
     */
    const VERSION: p5.VERSION;

    /**
     *   The default, two-dimensional renderer.
     */
    const P2D: p5.P2D;

    /**
     *   One of the two render modes in p5.js, used for
     *   computationally intensive tasks like 3D rendering
     *   and shaders. WEBGL differs from the default P2D
     *   renderer in the following ways:
     *
     *   - Coordinate System - When drawing in WEBGL mode,
     *   the origin point (0,0,0) is located at the center
     *   of the screen, not the top-left corner. See the
     *   learn page about coordinates and transformations.
     *   - 3D Shapes - WEBGL mode can be used to draw
     *   3-dimensional shapes like box(), sphere(), cone(),
     *   and more. See the learn page about custom geometry
     *   to make more complex objects.
     *   - Shape Detail - When drawing in WEBGL mode, you
     *   can specify how smooth curves should be drawn by
     *   using a detail parameter. See the wiki section
     *   about shapes for a more information and an
     *   example.
     *   - Textures - A texture is like a skin that wraps
     *   onto a shape. See the wiki section about textures
     *   for examples of mapping images onto surfaces with
     *   textures.
     *   - Materials and Lighting - WEBGL offers different
     *   types of lights like ambientLight() to place
     *   around a scene. Materials like specularMaterial()
     *   reflect the lighting to convey shape and depth.
     *   See the learn page for styling and appearance to
     *   experiment with different combinations.
     *   - Camera - The viewport of a WEBGL sketch can be
     *   adjusted by changing camera attributes. See the
     *   learn page section about cameras for an
     *   explanation of camera controls.
     *   - Text - WEBGL requires opentype/truetype font
     *   files to be preloaded using loadFont(). See the
     *   wiki section about text for details, along with a
     *   workaround.
     *   - Shaders - Shaders are hardware accelerated
     *   programs that can be used for a variety of effects
     *   and graphics. See the introduction to shaders to
     *   get started with shaders in p5.js.
     *   - Graphics Acceleration - WEBGL mode uses the
     *   graphics card instead of the CPU, so it may help
     *   boost the performance of your sketch (example:
     *   drawing more shapes on the screen at once).
     *
     *   To learn more about WEBGL mode, check out all the
     *   interactive WEBGL tutorials in the "Learn" section
     *   of this website, or read the wiki article "Getting
     *   started with WebGL in p5".
     */
    const WEBGL: p5.WEBGL;

    /**
     *   One of the two possible values of a WebGL canvas
     *   (either WEBGL or WEBGL2), which can be used to
     *   determine what capabilities the rendering
     *   environment has.
     */
    const WEBGL2: p5.WEBGL2;
    const ARROW: p5.ARROW;
    const CROSS: p5.CROSS;
    const HAND: p5.HAND;
    const MOVE: p5.MOVE;
    const TEXT: p5.TEXT;
    const WAIT: p5.WAIT;

    /**
     *   HALF_PI is a mathematical constant with the value
     *   1.57079632679489661923. It is half the ratio of
     *   the circumference of a circle to its diameter. It
     *   is useful in combination with the trigonometric
     *   functions sin() and cos().
     */
    const HALF_PI: number;

    /**
     *   PI is a mathematical constant with the value
     *   3.14159265358979323846. It is the ratio of the
     *   circumference of a circle to its diameter. It is
     *   useful in combination with the trigonometric
     *   functions sin() and cos().
     */
    const PI: number;

    /**
     *   QUARTER_PI is a mathematical constant with the
     *   value 0.7853982. It is one quarter the ratio of
     *   the circumference of a circle to its diameter. It
     *   is useful in combination with the trigonometric
     *   functions sin() and cos().
     */
    const QUARTER_PI: number;

    /**
     *   TAU is an alias for TWO_PI, a mathematical
     *   constant with the value 6.28318530717958647693. It
     *   is twice the ratio of the circumference of a
     *   circle to its diameter. It is useful in
     *   combination with the trigonometric functions sin()
     *   and cos().
     */
    const TAU: number;

    /**
     *   TWO_PI is a mathematical constant with the value
     *   6.28318530717958647693. It is twice the ratio of
     *   the circumference of a circle to its diameter. It
     *   is useful in combination with the trigonometric
     *   functions sin() and cos().
     */
    const TWO_PI: number;

    /**
     *   Constant to be used with the angleMode() function,
     *   to set the mode in which p5.js interprets and
     *   calculates angles (either DEGREES or RADIANS).
     */
    const DEGREES: p5.DEGREES;

    /**
     *   Constant to be used with the angleMode() function,
     *   to set the mode in which p5.js interprets and
     *   calculates angles (either RADIANS or DEGREES).
     */
    const RADIANS: p5.RADIANS;
    const CORNER: p5.CORNER;
    const CORNERS: p5.CORNERS;
    const RADIUS: p5.RADIUS;
    const RIGHT: p5.RIGHT;
    const LEFT: p5.LEFT;
    const CENTER: p5.CENTER;
    const TOP: p5.TOP;
    const BOTTOM: p5.BOTTOM;
    const BASELINE: p5.BASELINE;
    const POINTS: p5.POINTS;
    const LINES: p5.LINES;
    const LINE_STRIP: p5.LINE_STRIP;
    const LINE_LOOP: p5.LINE_LOOP;
    const TRIANGLES: p5.TRIANGLES;
    const TRIANGLE_FAN: p5.TRIANGLE_FAN;
    const TRIANGLE_STRIP: p5.TRIANGLE_STRIP;
    const QUADS: p5.QUADS;
    const QUAD_STRIP: p5.QUAD_STRIP;
    const TESS: p5.TESS;
    const CLOSE: p5.CLOSE;
    const OPEN: p5.OPEN;
    const CHORD: p5.CHORD;
    const PIE: p5.PIE;
    const PROJECT: p5.PROJECT;
    const SQUARE: p5.SQUARE;
    const ROUND: p5.ROUND;
    const BEVEL: p5.BEVEL;
    const MITER: p5.MITER;
    const RGB: p5.RGB;

    /**
     *   HSB (hue, saturation, brightness) is a type of
     *   color model. You can learn more about it at HSB.
     */
    const HSB: p5.HSB;
    const HSL: p5.HSL;

    /**
     *   AUTO allows us to automatically set the width or
     *   height of an element (but not both), based on the
     *   current height and width of the element. Only one
     *   parameter can be passed to the size function as
     *   AUTO, at a time.
     */
    const AUTO: p5.AUTO;
    const ALT: number;
    const BACKSPACE: number;
    const CONTROL: number;
    const DELETE: number;
    const DOWN_ARROW: number;
    const ENTER: number;
    const ESCAPE: number;
    const LEFT_ARROW: number;
    const OPTION: number;
    const RETURN: number;
    const RIGHT_ARROW: number;
    const SHIFT: number;
    const TAB: number;
    const UP_ARROW: number;
    const BLEND: p5.BLEND;
    const REMOVE: p5.REMOVE;
    const ADD: p5.ADD;
    const DARKEST: p5.DARKEST;
    const LIGHTEST: p5.LIGHTEST;
    const DIFFERENCE: p5.DIFFERENCE;
    const SUBTRACT: p5.SUBTRACT;
    const EXCLUSION: p5.EXCLUSION;
    const MULTIPLY: p5.MULTIPLY;
    const SCREEN: p5.SCREEN;
    const REPLACE: p5.REPLACE;
    const OVERLAY: p5.OVERLAY;
    const HARD_LIGHT: p5.HARD_LIGHT;
    const SOFT_LIGHT: p5.SOFT_LIGHT;
    const DODGE: p5.DODGE;
    const BURN: p5.BURN;
    const THRESHOLD: p5.THRESHOLD;
    const GRAY: p5.GRAY;
    const OPAQUE: p5.OPAQUE;
    const INVERT: p5.INVERT;
    const POSTERIZE: p5.POSTERIZE;
    const DILATE: p5.DILATE;
    const ERODE: p5.ERODE;
    const BLUR: p5.BLUR;
    const NORMAL: p5.NORMAL;
    const ITALIC: p5.ITALIC;
    const BOLD: p5.BOLD;
    const BOLDITALIC: p5.BOLDITALIC;
    const CHAR: p5.CHAR;
    const WORD: p5.WORD;
    const LINEAR: p5.LINEAR;
    const QUADRATIC: p5.QUADRATIC;
    const BEZIER: p5.BEZIER;
    const CURVE: p5.CURVE;
    const STROKE: p5.STROKE;
    const FILL: p5.FILL;
    const TEXTURE: p5.TEXTURE;
    const IMMEDIATE: p5.IMMEDIATE;
    const IMAGE: p5.IMAGE;
    const NEAREST: p5.NEAREST;
    const REPEAT: p5.REPEAT;
    const CLAMP: p5.CLAMP;
    const MIRROR: p5.MIRROR;
    const LANDSCAPE: p5.LANDSCAPE;
    const PORTRAIT: p5.PORTRAIT;
    const GRID: p5.GRID;
    const AXES: p5.AXES;
    const LABEL: p5.LABEL;
    const FALLBACK: p5.FALLBACK;
    const CONTAIN: p5.CONTAIN;
    const COVER: p5.COVER;
    const UNSIGNED_BYTE: p5.UNSIGNED_BYTE;
    const UNSIGNED_INT: p5.UNSIGNED_INT;
    const FLOAT: p5.FLOAT;
    const HALF_FLOAT: p5.HALF_FLOAT;
    const RGBA: p5.RGBA;

    /**
     *   The print() function writes to the console area of
     *   your browser. This function is often helpful for
     *   looking at the data a program is producing. This
     *   function creates a new line of text for each call
     *   to the function. Individual elements can be
     *   separated with quotes ("") and joined with the
     *   addition operator (+). Note that calling print()
     *   without any arguments invokes the window.print()
     *   function which opens the browser's print dialog.
     *   To print a blank line to console you can write
     *   print('\n').
     *   @param contents any combination of Number, String,
     *   Object, Boolean, Array to print
     */
    function print(contents: any): void;

    /**
     *   Sets the cursor to a predefined symbol or an
     *   image, or makes it visible if already hidden. If
     *   you are trying to set an image as the cursor, the
     *   recommended size is 16×16 or 32×32 pixels. The
     *   values for parameters x and y must be less than
     *   the dimensions of the image.
     *   @param type Built-In: either ARROW, CROSS, HAND,
     *   MOVE, TEXT and WAIT Native CSS properties: 'grab',
     *   'progress', 'cell' etc. External: path for
     *   cursor's images (Allowed File extensions: .cur,
     *   .gif, .jpg, .jpeg, .png) For more information on
     *   Native CSS cursors and url visit:
     *   https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     *   @param [x] the horizontal active spot of the
     *   cursor (must be less than 32)
     *   @param [y] the vertical active spot of the cursor
     *   (must be less than 32)
     */
    function cursor(type: string | p5.CURSOR_TYPE, x?: number, y?: number): void;

    /**
     *   Specifies the number of frames to be displayed
     *   every second. For example, the function call
     *   frameRate(30) will attempt to refresh 30 times a
     *   second. If the processor is not fast enough to
     *   maintain the specified rate, the frame rate will
     *   not be achieved. Setting the frame rate within
     *   setup() is recommended. The default frame rate is
     *   based on the frame rate of the display (here also
     *   called "refresh rate"), which is set to 60 frames
     *   per second on most computers. A frame rate of 24
     *   frames per second (usual for movies) or above will
     *   be enough for smooth animations. This is the same
     *   as setFrameRate(val). Calling frameRate() with no
     *   arguments or with arguments that are not of type
     *   Number or are non-positive returns an
     *   approximation of the current frame rate. The draw
     *   function must run at least once before it will
     *   return a value.
     *
     *   Even if the code in your draw() function
     *   consistently produces frames in time for them to
     *   be displayed at the desired frame rate, the value
     *   frameRate() returns will vary frame to frame
     *   because it's an inaccurate approximation. To
     *   accurately test the performance of your sketches,
     *   use your browser's performance profiling tools.
     *   @param fps number of frames to be displayed every
     *   second
     *   @chainable
     */
    function frameRate(fps: number): p5;

    /**
     *   Specifies the number of frames to be displayed
     *   every second. For example, the function call
     *   frameRate(30) will attempt to refresh 30 times a
     *   second. If the processor is not fast enough to
     *   maintain the specified rate, the frame rate will
     *   not be achieved. Setting the frame rate within
     *   setup() is recommended. The default frame rate is
     *   based on the frame rate of the display (here also
     *   called "refresh rate"), which is set to 60 frames
     *   per second on most computers. A frame rate of 24
     *   frames per second (usual for movies) or above will
     *   be enough for smooth animations. This is the same
     *   as setFrameRate(val). Calling frameRate() with no
     *   arguments or with arguments that are not of type
     *   Number or are non-positive returns an
     *   approximation of the current frame rate. The draw
     *   function must run at least once before it will
     *   return a value.
     *
     *   Even if the code in your draw() function
     *   consistently produces frames in time for them to
     *   be displayed at the desired frame rate, the value
     *   frameRate() returns will vary frame to frame
     *   because it's an inaccurate approximation. To
     *   accurately test the performance of your sketches,
     *   use your browser's performance profiling tools.
     *   @return current frameRate
     */
    function frameRate(): number;

    /**
     *   Returns _targetFrameRate variable. The default
     *   _targetFrameRate is set to 60. This could be
     *   changed by calling frameRate() and setting it to
     *   the desired value. When getTargetFrameRate() is
     *   called, it should return the value that was set.
     *   @return _targetFrameRate
     */
    function getTargetFrameRate(): number;

    /**
     *   Hides the cursor from view.
     */
    function noCursor(): void;

    /**
     *   The windowResized() function is called once every
     *   time the browser window is resized. This is a good
     *   place to resize the canvas or do any other
     *   adjustments to accommodate the new window size.
     *   @param [event] optional Event callback argument.
     */
    function windowResized(event?: UIEvent): void;

    /**
     *   If argument is given, sets the sketch to
     *   fullscreen or not based on the value of the
     *   argument. If no argument is given, returns the
     *   current fullscreen state. Note that due to browser
     *   restrictions this can only be called on user
     *   input, for example, on mouse press like the
     *   example below.
     *   @param [val] whether the sketch should be in
     *   fullscreen mode or not
     *   @return current fullscreen state
     */
    function fullscreen(val?: boolean): boolean;

    /**
     *   Sets the pixel scaling for high pixel density
     *   displays. By default pixel density is set to match
     *   display density, call pixelDensity(1) to turn this
     *   off. Calling pixelDensity() with no arguments
     *   returns the current pixel density of the sketch.
     *   @param val whether or how much the sketch should
     *   scale
     *   @chainable
     */
    function pixelDensity(val: number): p5;

    /**
     *   Sets the pixel scaling for high pixel density
     *   displays. By default pixel density is set to match
     *   display density, call pixelDensity(1) to turn this
     *   off. Calling pixelDensity() with no arguments
     *   returns the current pixel density of the sketch.
     *   @return current pixel density of the sketch
     */
    function pixelDensity(): number;

    /**
     *   Returns the pixel density of the current display
     *   the sketch is running on.
     *   @return current pixel density of the display
     */
    function displayDensity(): number;

    /**
     *   Gets the current URL. Note: when using the p5
     *   Editor, this will return an empty object because
     *   the sketch is embedded in an iframe. It will work
     *   correctly if you view the sketch using the
     *   editor's present or share URLs.
     *   @return url
     */
    function getURL(): string;

    /**
     *   Gets the current URL path as an array. Note: when
     *   using the p5 Editor, this will return an empty
     *   object because the sketch is embedded in an
     *   iframe. It will work correctly if you view the
     *   sketch using the editor's present or share URLs.
     *   @return path components
     */
    function getURLPath(): string[];

    /**
     *   Gets the current URL params as an Object. Note:
     *   when using the p5 Editor, this will return an
     *   empty object because the sketch is embedded in an
     *   iframe. It will work correctly if you view the
     *   sketch using the editor's present or share URLs.
     *   @return URL params
     */
    function getURLParams(): object;

    /**
     *   The system variable frameCount contains the number
     *   of frames that have been displayed since the
     *   program started. Inside setup() the value is 0,
     *   after the first iteration of draw() it is 1, etc.
     */
    let frameCount: number;

    /**
     *   The system variable deltaTime contains the time
     *   difference between the beginning of the previous
     *   frame and the beginning of the current frame in
     *   milliseconds. This variable is useful for creating
     *   time sensitive animation or physics calculation
     *   that should stay constant regardless of frame
     *   rate.
     */
    let deltaTime: number;

    /**
     *   Confirms if the window a p5.js program is in is
     *   "focused," meaning that the sketch will accept
     *   mouse or keyboard input. This variable is "true"
     *   if the window is focused and "false" if not.
     */
    let focused: boolean;

    /**
     *   If the sketch was created in WebGL mode, then
     *   weglVersion will indicate which version of WebGL
     *   it is using. It will try to create a WebGL2 canvas
     *   unless you have requested WebGL1 via
     *   setAttributes({ version: 1 }), and will fall back
     *   to WebGL1 if WebGL2 is not available. webglVersion
     *   will always be either WEBGL2, WEBGL, or P2D if not
     *   in WebGL mode.
     */
    let webglVersion: string;

    /**
     *   System variable that stores the width of the
     *   screen display according to The default
     *   pixelDensity. This is used to run a full-screen
     *   program on any display size. To return actual
     *   screen size, multiply this by pixelDensity.
     */
    let displayWidth: number;

    /**
     *   System variable that stores the height of the
     *   screen display according to The default
     *   pixelDensity. This is used to run a full-screen
     *   program on any display size. To return actual
     *   screen size, multiply this by pixelDensity.
     */
    let displayHeight: number;

    /**
     *   System variable that stores the width of the inner
     *   window, it maps to window.innerWidth.
     */
    let windowWidth: number;

    /**
     *   System variable that stores the height of the
     *   inner window, it maps to window.innerHeight.
     */
    let windowHeight: number;

    /**
     *   System variable that stores the width of the
     *   drawing canvas. This value is set by the first
     *   parameter of the createCanvas() function. For
     *   example, the function call createCanvas(320, 240)
     *   sets the width variable to the value 320. The
     *   value of width defaults to 100 if createCanvas()
     *   is not used in a program.
     */
    let width: number;

    /**
     *   System variable that stores the height of the
     *   drawing canvas. This value is set by the second
     *   parameter of the createCanvas() function. For
     *   example, the function call createCanvas(320, 240)
     *   sets the height variable to the value 240. The
     *   value of height defaults to 100 if createCanvas()
     *   is not used in a program.
     */
    let height: number;

    /**
     *   Creates a canvas element in the document and sets
     *   its dimensions in pixels. This method should be
     *   called only once at the start of setup(). Calling
     *   createCanvas more than once in a sketch will
     *   result in very unpredictable behavior. If you want
     *   more than one drawing canvas you could use
     *   createGraphics() (hidden by default but it can be
     *   shown). Important note: in 2D mode (i.e. when
     *   p5.Renderer is not set) the origin (0,0) is
     *   positioned at the top left of the screen. In 3D
     *   mode (i.e. when p5.Renderer is set to WEBGL), the
     *   origin is positioned at the center of the canvas.
     *   See this issue for more information.
     *
     *   A WebGL canvas will use a WebGL2 context if it is
     *   supported by the browser. Check the webglVersion
     *   property to check what version is being used, or
     *   call setAttributes({ version: 1 }) to create a
     *   WebGL1 context.
     *
     *   The system variables width and height are set by
     *   the parameters passed to this function. If
     *   createCanvas() is not used, the window will be
     *   given a default size of 100×100 pixels.
     *
     *   Optionally, an existing canvas can be passed using
     *   a selector, ie. document.getElementById(''). If
     *   specified, avoid using setAttributes() afterwards,
     *   as this will remove and recreate the existing
     *   canvas.
     *
     *   For more ways to position the canvas, see the
     *   positioning the canvas wiki page.
     *   @param w width of the canvas
     *   @param h height of the canvas
     *   @param [renderer] either P2D or WEBGL
     *   @param [canvas] existing html canvas element
     *   @return pointer to p5.Renderer holding canvas
     */
    function createCanvas(w: number, h: number, renderer?: p5.RENDERER, canvas?: HTMLCanvasElement): p5.Renderer;

    /**
     *   Creates a canvas element in the document and sets
     *   its dimensions in pixels. This method should be
     *   called only once at the start of setup(). Calling
     *   createCanvas more than once in a sketch will
     *   result in very unpredictable behavior. If you want
     *   more than one drawing canvas you could use
     *   createGraphics() (hidden by default but it can be
     *   shown). Important note: in 2D mode (i.e. when
     *   p5.Renderer is not set) the origin (0,0) is
     *   positioned at the top left of the screen. In 3D
     *   mode (i.e. when p5.Renderer is set to WEBGL), the
     *   origin is positioned at the center of the canvas.
     *   See this issue for more information.
     *
     *   A WebGL canvas will use a WebGL2 context if it is
     *   supported by the browser. Check the webglVersion
     *   property to check what version is being used, or
     *   call setAttributes({ version: 1 }) to create a
     *   WebGL1 context.
     *
     *   The system variables width and height are set by
     *   the parameters passed to this function. If
     *   createCanvas() is not used, the window will be
     *   given a default size of 100×100 pixels.
     *
     *   Optionally, an existing canvas can be passed using
     *   a selector, ie. document.getElementById(''). If
     *   specified, avoid using setAttributes() afterwards,
     *   as this will remove and recreate the existing
     *   canvas.
     *
     *   For more ways to position the canvas, see the
     *   positioning the canvas wiki page.
     *   @param w width of the canvas
     *   @param h height of the canvas
     *   @param [canvas] existing html canvas element
     *   @return pointer to p5.Renderer holding canvas
     */
    function createCanvas(w: number, h: number, canvas?: HTMLCanvasElement): p5.Renderer;

    /**
     *   Resizes the canvas to given width and height. The
     *   canvas will be cleared and draw will be called
     *   immediately, allowing the sketch to re-render
     *   itself in the resized canvas.
     *   @param w width of the canvas
     *   @param h height of the canvas
     *   @param [noRedraw] don't redraw the canvas
     *   immediately
     */
    function resizeCanvas(w: number, h: number, noRedraw?: boolean): void;

    /**
     *   Removes the default canvas for a p5 sketch that
     *   doesn't require a canvas
     */
    function noCanvas(): void;

    /**
     *   Creates and returns a new p5.Graphics object. Use
     *   this class if you need to draw into an off-screen
     *   graphics buffer. The two parameters define the
     *   width and height in pixels. A WebGL p5.Graphics
     *   will use a WebGL2 context if it is supported by
     *   the browser. Check the pg.webglVersion property of
     *   the renderer to check what version is being used,
     *   or call pg.setAttributes({ version: 1 }) to create
     *   a WebGL1 context.
     *
     *   Optionally, an existing canvas can be passed using
     *   a selector, ie. document.getElementById(''). By
     *   default this canvas will be hidden (offscreen
     *   buffer), to make visible, set element's style to
     *   display:block;
     *   @param w width of the offscreen graphics buffer
     *   @param h height of the offscreen graphics buffer
     *   @param [renderer] either P2D or WEBGL undefined
     *   defaults to p2d
     *   @param [canvas] existing html canvas element
     *   @return offscreen graphics buffer
     */
    function createGraphics(w: number, h: number, renderer?: p5.RENDERER, canvas?: HTMLCanvasElement): p5.Graphics;

    /**
     *   Creates and returns a new p5.Graphics object. Use
     *   this class if you need to draw into an off-screen
     *   graphics buffer. The two parameters define the
     *   width and height in pixels. A WebGL p5.Graphics
     *   will use a WebGL2 context if it is supported by
     *   the browser. Check the pg.webglVersion property of
     *   the renderer to check what version is being used,
     *   or call pg.setAttributes({ version: 1 }) to create
     *   a WebGL1 context.
     *
     *   Optionally, an existing canvas can be passed using
     *   a selector, ie. document.getElementById(''). By
     *   default this canvas will be hidden (offscreen
     *   buffer), to make visible, set element's style to
     *   display:block;
     *   @param w width of the offscreen graphics buffer
     *   @param h height of the offscreen graphics buffer
     *   @param [canvas] existing html canvas element
     *   @return offscreen graphics buffer
     */
    function createGraphics(w: number, h: number, canvas?: HTMLCanvasElement): p5.Graphics;

    /**
     *   Creates and returns a new p5.Framebuffer, a
     *   high-performance WebGL object that you can draw to
     *   and then use as a texture. Options can include:
     *
     *   - format: The data format of the texture, either
     *   UNSIGNED_BYTE, FLOAT, or HALF_FLOAT. The default
     *   is UNSIGNED_BYTE.
     *   - channels: What color channels to store, either
     *   RGB or RGBA. The default is to match the channels
     *   in the main canvas (with alpha unless disabled
     *   with setAttributes.)
     *   - depth: A boolean, whether or not to include a
     *   depth buffer. Defaults to true.
     *   - depthFormat: The data format for depth
     *   information, either UNSIGNED_INT or FLOAT. The
     *   default is FLOAT if available, or UNSIGNED_INT
     *   otherwise.
     *   - stencil: A boolean, whether or not to include a
     *   stencil buffer, which can be used for masking.
     *   This may only be used if also using a depth
     *   buffer. Defaults to the value of depth, which is
     *   true if not provided.
     *   - antialias: Boolean or Number, whether or not to
     *   render with antialiased edges, and if so,
     *   optionally the number of samples to use. Defaults
     *   to whether or not the main canvas is antialiased,
     *   using a default of 2 samples if so. Antialiasing
     *   is only supported when WebGL 2 is available.
     *   - width: The width of the texture. Defaults to
     *   matching the main canvas.
     *   - height: The height of the texture. Defaults to
     *   matching the main canvas.
     *   - density: The pixel density of the texture.
     *   Defaults to the pixel density of the main canvas.
     *   - textureFiltering: Either LINEAR (nearby pixels
     *   will be interpolated when reading values from the
     *   color texture) or NEAREST (no interpolation.)
     *   Generally, use LINEAR when using the texture as an
     *   image, and use NEAREST if reading the texture as
     *   data. Defaults to LINEAR.
     *
     *   If width, height, or density are specified, then
     *   the framebuffer will keep that size until manually
     *   changed. Otherwise, it will be autosized, and it
     *   will update to match the main canvas's size and
     *   density when the main canvas changes.
     *   @param [options] An optional object with
     *   configuration
     */
    function createFramebuffer(options?: object): void;

    /**
     *   Blends the pixels in the display window according
     *   to the defined mode. There is a choice of the
     *   following modes to blend the source pixels (A)
     *   with the ones of pixels already in the display
     *   window (B): - BLEND - linear interpolation of
     *   colours: C = A*factor + B. This is the default
     *   blending mode.
     *   - ADD - sum of A and B
     *   - DARKEST - only the darkest colour succeeds: C =
     *   min(A*factor, B).
     *   - LIGHTEST - only the lightest colour succeeds: C
     *   = max(A*factor, B).
     *   - DIFFERENCE - subtract colors from underlying
     *   image. (2D)
     *   - EXCLUSION - similar to DIFFERENCE, but less
     *   extreme.
     *   - MULTIPLY - multiply the colors, result will
     *   always be darker.
     *   - SCREEN - opposite multiply, uses inverse values
     *   of the colors.
     *   - REPLACE - the pixels entirely replace the others
     *   and don't utilize alpha (transparency) values.
     *   - REMOVE - removes pixels from B with the alpha
     *   strength of A.
     *   - OVERLAY - mix of MULTIPLY and SCREEN .
     *   Multiplies dark values, and screens light values.
     *   (2D)
     *   - HARD_LIGHT - SCREEN when greater than 50% gray,
     *   MULTIPLY when lower. (2D)
     *   - SOFT_LIGHT - mix of DARKEST and LIGHTEST. Works
     *   like OVERLAY, but not as harsh. (2D)
     *   - DODGE - lightens light tones and increases
     *   contrast, ignores darks. (2D)
     *   - BURN - darker areas are applied, increasing
     *   contrast, ignores lights. (2D)
     *   - SUBTRACT - remainder of A and B (3D)
     *
     *   (2D) indicates that this blend mode only works in
     *   the 2D renderer.
     *
     *   (3D) indicates that this blend mode only works in
     *   the WEBGL renderer.
     *   @param mode blend mode to set for canvas. either
     *   BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
     *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
     *   SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT
     */
    function blendMode(mode: p5.BLEND_MODE): void;

    /**
     *   The p5.js API provides a lot of functionality for
     *   creating graphics, but there is some native HTML5
     *   Canvas functionality that is not exposed by p5.
     *   You can still call it directly using the variable
     *   drawingContext, as in the example shown. This is
     *   the equivalent of calling canvas.getContext('2d');
     *   or canvas.getContext('webgl');. See this
     *   reference for the native canvas API for possible
     *   drawing functions you can call.
     */
    let drawingContext: any;

    /**
     *   Stops p5.js from continuously executing the code
     *   within draw(). If loop() is called, the code in
     *   draw() begins to run continuously again. If using
     *   noLoop() in setup(), it should be the last line
     *   inside the block. When noLoop() is used, it's not
     *   possible to manipulate or access the screen inside
     *   event handling functions such as mousePressed() or
     *   keyPressed(). Instead, use those functions to call
     *   redraw() or loop(), which will run draw(), which
     *   can update the screen properly. This means that
     *   when noLoop() has been called, no drawing can
     *   happen, and functions like saveFrames() or
     *   loadPixels() may not be used.
     *
     *   Note that if the sketch is resized, redraw() will
     *   be called to update the sketch, even after
     *   noLoop() has been specified. Otherwise, the sketch
     *   would enter an odd state until loop() was called.
     *
     *   Use isLooping() to check the current state of
     *   loop().
     */
    function noLoop(): void;

    /**
     *   By default, p5.js loops through draw()
     *   continuously, executing the code within it.
     *   However, the draw() loop may be stopped by calling
     *   noLoop(). In that case, the draw() loop can be
     *   resumed with loop(). Avoid calling loop() from
     *   inside setup().
     *
     *   Use isLooping() to check the current state of
     *   loop().
     */
    function loop(): void;

    /**
     *   By default, p5.js loops through draw()
     *   continuously, executing the code within it. If the
     *   sketch is stopped with noLoop() or resumed with
     *   loop(), isLooping() returns the current state for
     *   use within custom event handlers.
     */
    function isLooping(): boolean;

    /**
     *   The push() function saves the current drawing
     *   style settings and transformations, while pop()
     *   restores these settings. Note that these functions
     *   are always used together. They allow you to change
     *   the style and transformation settings and later
     *   return to what you had. When a new state is
     *   started with push(), it builds on the current
     *   style and transform information. The push() and
     *   pop() functions can be embedded to provide more
     *   control. (See the second example for a
     *   demonstration.) push() stores information related
     *   to the current transformation state and style
     *   settings controlled by the following functions:
     *   fill(), noFill(), noStroke(), stroke(), tint(),
     *   noTint(), strokeWeight(), strokeCap(),
     *   strokeJoin(), imageMode(), rectMode(),
     *   ellipseMode(), colorMode(), textAlign(),
     *   textFont(), textSize(), textLeading(),
     *   applyMatrix(), resetMatrix(), rotate(), scale(),
     *   shearX(), shearY(), translate(), noiseSeed().
     *
     *   In WEBGL mode additional style settings are
     *   stored. These are controlled by the following
     *   functions: setCamera(), ambientLight(),
     *   directionalLight(), pointLight(), texture(),
     *   specularMaterial(), shininess(), normalMaterial()
     *   and shader().
     */
    function push(): void;

    /**
     *   The push() function saves the current drawing
     *   style settings and transformations, while pop()
     *   restores these settings. Note that these functions
     *   are always used together. They allow you to change
     *   the style and transformation settings and later
     *   return to what you had. When a new state is
     *   started with push(), it builds on the current
     *   style and transform information. The push() and
     *   pop() functions can be embedded to provide more
     *   control. (See the second example for a
     *   demonstration.) push() stores information related
     *   to the current transformation state and style
     *   settings controlled by the following functions:
     *   fill(), noFill(), noStroke(), stroke(), tint(),
     *   noTint(), strokeWeight(), strokeCap(),
     *   strokeJoin(), imageMode(), rectMode(),
     *   ellipseMode(), colorMode(), textAlign(),
     *   textFont(), textSize(), textLeading(),
     *   applyMatrix(), resetMatrix(), rotate(), scale(),
     *   shearX(), shearY(), translate(), noiseSeed().
     *
     *   In WEBGL mode additional style settings are
     *   stored. These are controlled by the following
     *   functions: setCamera(), ambientLight(),
     *   directionalLight(), pointLight(), texture(),
     *   specularMaterial(), shininess(), normalMaterial()
     *   and shader().
     */
    function pop(): void;

    /**
     *   Executes the code within draw() one time. This
     *   function allows the program to update the display
     *   window only when necessary, for example when an
     *   event registered by mousePressed() or keyPressed()
     *   occurs. In structuring a program, it only makes
     *   sense to call redraw() within events such as
     *   mousePressed(). This is because redraw() does not
     *   run draw() immediately (it only sets a flag that
     *   indicates an update is needed).
     *
     *   The redraw() function does not work properly when
     *   called inside draw().To enable/disable animations,
     *   use loop() and noLoop().
     *
     *   In addition you can set the number of redraws per
     *   method call. Just add an integer as single
     *   parameter for the number of redraws.
     *   @param [n] Redraw for n-times. The default value
     *   is 1.
     */
    function redraw(n?: number): void;

    /**
     *   The p5() constructor enables you to activate
     *   "instance mode" instead of normal "global mode".
     *   This is an advanced topic. A short description and
     *   example is included below. Please see  Dan
     *   Shiffman's Coding Train video tutorial or this
     *   tutorial page for more info. By default, all p5.js
     *   functions are in the global namespace (i.e. bound
     *   to the window object), meaning you can call them
     *   simply ellipse(), fill(), etc. However, this might
     *   be inconvenient if you are mixing with other JS
     *   libraries (synchronously or asynchronously) or
     *   writing long programs of your own. p5.js currently
     *   supports a way around this problem called
     *   "instance mode". In instance mode, all p5
     *   functions are bound up in a single variable
     *   instead of polluting your global namespace.
     *
     *   Optionally, you can specify a default container
     *   for the canvas and any other elements to append to
     *   with a second argument. You can give the ID of an
     *   element in your html, or an html node itself.
     *
     *   Note that creating instances like this also allows
     *   you to have more than one p5 sketch on a single
     *   web page, as they will each be wrapped up with
     *   their own set up variables. Of course, you could
     *   also use iframes to have multiple sketches in
     *   global mode.
     *   @param sketch a function containing a p5.js sketch
     *   @param node ID or pointer to HTML DOM node to
     *   contain sketch in
     */
    function p5(sketch: object, node: string | object): void;

    /**
     *   Multiplies the current matrix by the one specified
     *   through the parameters. This is a powerful
     *   operation that can perform the equivalent of
     *   translate, scale, shear and rotate all at once.
     *   You can learn more about transformation matrices
     *   on  Wikipedia. The naming of the arguments here
     *   follows the naming of the  WHATWG specification
     *   and corresponds to a transformation matrix of the
     *   form:
     *   @param arr an array of numbers - should be 6 or 16
     *   length (2×3 or 4×4 matrix values)
     *   @chainable
     */
    function applyMatrix(arr: any[]): p5;

    /**
     *   Multiplies the current matrix by the one specified
     *   through the parameters. This is a powerful
     *   operation that can perform the equivalent of
     *   translate, scale, shear and rotate all at once.
     *   You can learn more about transformation matrices
     *   on  Wikipedia. The naming of the arguments here
     *   follows the naming of the  WHATWG specification
     *   and corresponds to a transformation matrix of the
     *   form:
     *   @param a numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @param b numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @param c numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @param d numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @param e numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @param f numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @chainable
     */
    function applyMatrix(a: number, b: number, c: number, d: number, e: number, f: number): p5;

    /**
     *   Multiplies the current matrix by the one specified
     *   through the parameters. This is a powerful
     *   operation that can perform the equivalent of
     *   translate, scale, shear and rotate all at once.
     *   You can learn more about transformation matrices
     *   on  Wikipedia. The naming of the arguments here
     *   follows the naming of the  WHATWG specification
     *   and corresponds to a transformation matrix of the
     *   form:
     *   @param a numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @param b numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @param c numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @param d numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @param e numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @param f numbers which define the 2×3 or 4×4
     *   matrix to be multiplied
     *   @param g numbers which define the 4×4 matrix to be
     *   multiplied
     *   @param h numbers which define the 4×4 matrix to be
     *   multiplied
     *   @param i numbers which define the 4×4 matrix to be
     *   multiplied
     *   @param j numbers which define the 4×4 matrix to be
     *   multiplied
     *   @param k numbers which define the 4×4 matrix to be
     *   multiplied
     *   @param l numbers which define the 4×4 matrix to be
     *   multiplied
     *   @param m numbers which define the 4×4 matrix to be
     *   multiplied
     *   @param n numbers which define the 4×4 matrix to be
     *   multiplied
     *   @param o numbers which define the 4×4 matrix to be
     *   multiplied
     *   @param p numbers which define the 4×4 matrix to be
     *   multiplied
     *   @chainable
     */
    function applyMatrix(
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number,
        g: number,
        h: number,
        i: number,
        j: number,
        k: number,
        l: number,
        m: number,
        n: number,
        o: number,
        p: number
    ): p5;

    /**
     *   Replaces the current matrix with the identity
     *   matrix.
     *   @chainable
     */
    function resetMatrix(): p5;

    /**
     *   Rotates a shape by the amount specified by the
     *   angle parameter. This function accounts for
     *   angleMode, so angles can be entered in either
     *   RADIANS or DEGREES. Objects are always rotated
     *   around their relative position to the origin and
     *   positive numbers rotate objects in a clockwise
     *   direction. Transformations apply to everything
     *   that happens after and subsequent calls to the
     *   function accumulate the effect. For example,
     *   calling rotate(HALF_PI) and then rotate(HALF_PI)
     *   is the same as rotate(PI). All transformations are
     *   reset when draw() begins again.
     *
     *   Technically, rotate() multiplies the current
     *   transformation matrix by a rotation matrix. This
     *   function can be further controlled by push() and
     *   pop().
     *   @param angle the angle of rotation, specified in
     *   radians or degrees, depending on current angleMode
     *   @param [axis] (in 3d) the axis to rotate around
     *   @chainable
     */
    function rotate(angle: number, axis?: p5.Vector | number[]): p5;

    /**
     *   Rotates a shape around X axis by the amount
     *   specified in angle parameter. The angles can be
     *   entered in either RADIANS or DEGREES. Objects are
     *   always rotated around their relative position to
     *   the origin and positive numbers rotate objects in
     *   a clockwise direction. All transformations are
     *   reset when draw() begins again.
     *   @param angle the angle of rotation, specified in
     *   radians or degrees, depending on current angleMode
     *   @chainable
     */
    function rotateX(angle: number): p5;

    /**
     *   Rotates a shape around Y axis by the amount
     *   specified in angle parameter. The angles can be
     *   entered in either RADIANS or DEGREES. Objects are
     *   always rotated around their relative position to
     *   the origin and positive numbers rotate objects in
     *   a clockwise direction. All transformations are
     *   reset when draw() begins again.
     *   @param angle the angle of rotation, specified in
     *   radians or degrees, depending on current angleMode
     *   @chainable
     */
    function rotateY(angle: number): p5;

    /**
     *   Rotates a shape around Z axis by the amount
     *   specified in angle parameter. The angles can be
     *   entered in either RADIANS or DEGREES. This method
     *   works in WEBGL mode only.
     *
     *   Objects are always rotated around their relative
     *   position to the origin and positive numbers rotate
     *   objects in a clockwise direction. All
     *   transformations are reset when draw() begins
     *   again.
     *   @param angle the angle of rotation, specified in
     *   radians or degrees, depending on current angleMode
     *   @chainable
     */
    function rotateZ(angle: number): p5;

    /**
     *   Increases or decreases the size of a shape by
     *   expanding or contracting vertices. Objects always
     *   scale from their relative origin to the coordinate
     *   system. Scale values are specified as decimal
     *   percentages. For example, the function call
     *   scale(2.0) increases the dimension of a shape by
     *   200%. Transformations apply to everything that
     *   happens after and subsequent calls to the function
     *   multiply the effect. For example, calling
     *   scale(2.0) and then scale(1.5) is the same as
     *   scale(3.0). If scale() is called within draw(),
     *   the transformation is reset when the loop begins
     *   again.
     *
     *   Using this function with the z parameter is only
     *   available in WEBGL mode. This function can be
     *   further controlled with push() and pop().
     *   @param s percent to scale the object, or
     *   percentage to scale the object in the x-axis if
     *   multiple arguments are given
     *   @param [y] percent to scale the object in the
     *   y-axis
     *   @param [z] percent to scale the object in the
     *   z-axis (webgl only)
     *   @chainable
     */
    function scale(s: number | p5.Vector | number[], y?: number, z?: number): p5;

    /**
     *   Increases or decreases the size of a shape by
     *   expanding or contracting vertices. Objects always
     *   scale from their relative origin to the coordinate
     *   system. Scale values are specified as decimal
     *   percentages. For example, the function call
     *   scale(2.0) increases the dimension of a shape by
     *   200%. Transformations apply to everything that
     *   happens after and subsequent calls to the function
     *   multiply the effect. For example, calling
     *   scale(2.0) and then scale(1.5) is the same as
     *   scale(3.0). If scale() is called within draw(),
     *   the transformation is reset when the loop begins
     *   again.
     *
     *   Using this function with the z parameter is only
     *   available in WEBGL mode. This function can be
     *   further controlled with push() and pop().
     *   @param scales per-axis percents to scale the
     *   object
     *   @chainable
     */
    function scale(scales: p5.Vector | number[]): p5;

    /**
     *   Shears a shape around the x-axis by the amount
     *   specified by the angle parameter. Angles should be
     *   specified in the current angleMode. Objects are
     *   always sheared around their relative position to
     *   the origin and positive numbers shear objects in a
     *   clockwise direction. Transformations apply to
     *   everything that happens after and subsequent calls
     *   to the function accumulates the effect. For
     *   example, calling shearX(PI/2) and then
     *   shearX(PI/2) is the same as shearX(PI). If
     *   shearX() is called within the draw(), the
     *   transformation is reset when the loop begins
     *   again.
     *
     *   Technically, shearX() multiplies the current
     *   transformation matrix by a rotation matrix. This
     *   function can be further controlled by the push()
     *   and pop() functions.
     *   @param angle angle of shear specified in radians
     *   or degrees, depending on current angleMode
     *   @chainable
     */
    function shearX(angle: number): p5;

    /**
     *   Shears a shape around the y-axis the amount
     *   specified by the angle parameter. Angles should be
     *   specified in the current angleMode. Objects are
     *   always sheared around their relative position to
     *   the origin and positive numbers shear objects in a
     *   clockwise direction. Transformations apply to
     *   everything that happens after and subsequent calls
     *   to the function accumulates the effect. For
     *   example, calling shearY(PI/2) and then
     *   shearY(PI/2) is the same as shearY(PI). If
     *   shearY() is called within the draw(), the
     *   transformation is reset when the loop begins
     *   again.
     *
     *   Technically, shearY() multiplies the current
     *   transformation matrix by a rotation matrix. This
     *   function can be further controlled by the push()
     *   and pop() functions.
     *   @param angle angle of shear specified in radians
     *   or degrees, depending on current angleMode
     *   @chainable
     */
    function shearY(angle: number): p5;

    /**
     *   Specifies an amount to displace objects within the
     *   display window. The x parameter specifies
     *   left/right translation, the y parameter specifies
     *   up/down translation. Transformations are
     *   cumulative and apply to everything that happens
     *   after and subsequent calls to the function
     *   accumulates the effect. For example, calling
     *   translate(50, 0) and then translate(20, 0) is the
     *   same as translate(70, 0). If translate() is called
     *   within draw(), the transformation is reset when
     *   the loop begins again. This function can be
     *   further controlled by using push() and pop().
     *   @param x left/right translation
     *   @param y up/down translation
     *   @param [z] forward/backward translation (WEBGL
     *   only)
     *   @chainable
     */
    function translate(x: number, y: number, z?: number): p5;

    /**
     *   Specifies an amount to displace objects within the
     *   display window. The x parameter specifies
     *   left/right translation, the y parameter specifies
     *   up/down translation. Transformations are
     *   cumulative and apply to everything that happens
     *   after and subsequent calls to the function
     *   accumulates the effect. For example, calling
     *   translate(50, 0) and then translate(20, 0) is the
     *   same as translate(70, 0). If translate() is called
     *   within draw(), the transformation is reset when
     *   the loop begins again. This function can be
     *   further controlled by using push() and pop().
     *   @param vector the vector to translate by
     *   @chainable
     */
    function translate(vector: p5.Vector): p5;

    /**
     *   Stores a value in local storage under the key
     *   name. Local storage is saved in the browser and
     *   persists between browsing sessions and page
     *   reloads. The key can be the name of the variable
     *   but doesn't have to be. To retrieve stored items
     *   see getItem. Sensitive data such as passwords or
     *   personal information should not be stored in local
     *   storage.
     */
    function storeItem(key: string, value: string | number | object | boolean | p5.Color | p5.Vector): void;

    /**
     *   Returns the value of an item that was stored in
     *   local storage using storeItem()
     *   @param key name that you wish to use to store in
     *   local storage
     *   @return Value of stored item
     */
    function getItem(key: string): number | object | string | boolean | p5.Color | p5.Vector;

    /**
     *   Clears all local storage items set with
     *   storeItem() for the current domain.
     */
    function clearStorage(): void;

    /**
     *   Removes an item that was stored with storeItem()
     */
    function removeItem(key: string): void;

    /**
     *   Creates a new instance of p5.StringDict using the
     *   key-value pair or the object you provide.
     */
    function createStringDict(key: string, value: string): p5.StringDict;

    /**
     *   Creates a new instance of p5.StringDict using the
     *   key-value pair or the object you provide.
     *   @param object object
     */
    function createStringDict(object: object): p5.StringDict;

    /**
     *   Creates a new instance of p5.NumberDict using the
     *   key-value pair or object you provide.
     */
    function createNumberDict(key: number, value: number): p5.NumberDict;

    /**
     *   Creates a new instance of p5.NumberDict using the
     *   key-value pair or object you provide.
     *   @param object object
     */
    function createNumberDict(object: object): p5.NumberDict;

    /**
     *   Searches the page for the first element that
     *   matches the given CSS selector string (can be an
     *   ID, class, tag name or a combination) and returns
     *   it as a p5.Element. The DOM node itself can be
     *   accessed with .elt. Returns null if none found.
     *   You can also specify a container to search within.
     *   @param selectors CSS selector string of element to
     *   search for
     *   @param [container] CSS selector string,
     *   p5.Element, or HTML element to search within
     *   @return p5.Element containing node found
     */
    function select(selectors: string, container?: string | p5.Element | HTMLElement): p5.Element | null;

    /**
     *   Searches the page for elements that match the
     *   given CSS selector string (can be an ID a class,
     *   tag name or a combination) and returns them as
     *   p5.Elements in an array. The DOM node itself can
     *   be accessed with .elt. Returns an empty array if
     *   none found. You can also specify a container to
     *   search within.
     *   @param selectors CSS selector string of elements
     *   to search for
     *   @param [container] CSS selector string, p5.Element
     *   , or HTML element to search within
     *   @return Array of p5.Elements containing nodes
     *   found
     */
    function selectAll(selectors: string, container?: string | p5.Element | HTMLElement): p5.Element[];

    /**
     *   Removes all elements created by p5, except any
     *   canvas / graphics elements created by createCanvas
     *   or createGraphics. Event handlers are removed, and
     *   element is removed from the DOM.
     */
    function removeElements(): void;

    /**
     *   The .changed() function is called when the value
     *   of an element changes. This can be used to attach
     *   an element specific event listener.
     *   @param fxn function to be fired when the value of
     *   an element changes. if false is passed instead,
     *   the previously firing function will no longer
     *   fire.
     *   @chainable
     */
    function changed(fxn: ((...args: any[]) => any) | boolean): p5;

    /**
     *   The .input() function is called when any user
     *   input is detected with an element. The input event
     *   is often used to detect keystrokes in a input
     *   element, or changes on a slider element. This can
     *   be used to attach an element specific event
     *   listener.
     *   @param fxn function to be fired when any user
     *   input is detected within the element. if false is
     *   passed instead, the previously firing function
     *   will no longer fire.
     *   @chainable
     */
    function input(fxn: ((...args: any[]) => any) | boolean): p5;

    /**
     *   Creates a <div></div> element in the DOM with
     *   given inner HTML.
     *   @param [html] inner HTML for element created
     *   @return pointer to p5.Element holding created node
     */
    function createDiv(html?: string): p5.Element;

    /**
     *   Creates a <p></p> element in the DOM with given
     *   inner HTML. Used for paragraph length text.
     *   @param [html] inner HTML for element created
     *   @return pointer to p5.Element holding created node
     */
    function createP(html?: string): p5.Element;

    /**
     *   Creates a <span></span> element in the DOM with
     *   given inner HTML.
     *   @param [html] inner HTML for element created
     *   @return pointer to p5.Element holding created node
     */
    function createSpan(html?: string): p5.Element;

    /**
     *   Creates an <img> element in the DOM with given src
     *   and alternate text.
     *   @param src src path or url for image
     *   @param alt alternate text to be used if image does
     *   not load. You can use also an empty string ("") if
     *   that an image is not intended to be viewed.
     *   @return pointer to p5.Element holding created node
     */
    function createImg(src: string, alt: string): p5.Element;

    /**
     *   Creates an <img> element in the DOM with given src
     *   and alternate text.
     *   @param src src path or url for image
     *   @param alt alternate text to be used if image does
     *   not load. You can use also an empty string ("") if
     *   that an image is not intended to be viewed.
     *   @param crossOrigin crossOrigin property of the img
     *   element; use either 'anonymous' or
     *   'use-credentials' to retrieve the image with
     *   cross-origin access (for later use with canvas. if
     *   an empty string("") is passed, CORS is not used
     *   @param [successCallback] callback to be called
     *   once image data is loaded with the p5.Element as
     *   argument
     *   @return pointer to p5.Element holding created node
     */
    function createImg(
        src: string,
        alt: string,
        crossOrigin: string,
        successCallback?: (...args: any[]) => any
    ): p5.Element;

    /**
     *   Creates an <a></a> element in the DOM for
     *   including a hyperlink.
     *   @param href url of page to link to
     *   @param html inner html of link element to display
     *   @param [target] target where new link should open,
     *   could be _blank, _self, _parent, _top.
     *   @return pointer to p5.Element holding created node
     */
    function createA(href: string, html: string, target?: string): p5.Element;

    /**
     *   Creates a slider <input></input> element in the
     *   DOM. Use .size() to set the display length of the
     *   slider.
     *   @param min minimum value of the slider
     *   @param max maximum value of the slider
     *   @param [value] default value of the slider
     *   @param [step] step size for each tick of the
     *   slider (if step is set to 0, the slider will move
     *   continuously from the minimum to the maximum
     *   value)
     *   @return pointer to p5.Element holding the created
     *   node
     */
    function createSlider(min: number, max: number, value?: number, step?: number): p5.Element;

    /**
     *   Creates a <button></button> element in the DOM.
     *   Use .size() to set the display size of the button.
     *   Use .mousePressed() to specify behavior on press.
     *   @param label label displayed on the button
     *   @param [value] value of the button
     *   @return pointer to p5.Element holding created node
     */
    function createButton(label: string, value?: string): p5.Element;

    /**
     *   Creates a checkbox <input></input> element in the
     *   DOM. Calling .checked() on a checkbox returns a
     *   boolean indicating whether it is checked or not.
     *   @param [label] label displayed after checkbox
     *   @param [value] value of the checkbox; checked is
     *   true, unchecked is false
     *   @return pointer to p5.Element holding created node
     */
    function createCheckbox(label?: string, value?: boolean): p5.Element;

    /**
     *   Creates a dropdown menu <select></select> element
     *   in the DOM. It also assigns select-related methods
     *   to p5.Element when selecting an existing select
     *   box. Options in the menu are unique by name (the
     *   display text). - .option(name, [value]) can be
     *   used to add an option with name (the display text)
     *   and value to the select element. If an option with
     *   name already exists within the select element,
     *   this method will change its value to value.
     *   - .value() will return the currently selected
     *   option.
     *   - .selected() will return the current dropdown
     *   element which is an instance of p5.Element.
     *   - .selected(value) can be used to make given
     *   option selected by default when the page first
     *   loads.
     *   - .disable() marks the whole dropdown element as
     *   disabled.
     *   - .disable(value) marks a given option as
     *   disabled.
     *   - .enable() marks the whole dropdown element as
     *   enabled if whole dropdown element is disabled
     *   intially.
     *   - .enable(value) marks a given option as enable if
     *   the initial option is disabled.
     *   @param [multiple] true if dropdown should support
     *   multiple selections
     *   @return pointer to p5.Element holding created node
     */
    function createSelect(multiple?: boolean): p5.Element;

    /**
     *   Creates a dropdown menu <select></select> element
     *   in the DOM. It also assigns select-related methods
     *   to p5.Element when selecting an existing select
     *   box. Options in the menu are unique by name (the
     *   display text). - .option(name, [value]) can be
     *   used to add an option with name (the display text)
     *   and value to the select element. If an option with
     *   name already exists within the select element,
     *   this method will change its value to value.
     *   - .value() will return the currently selected
     *   option.
     *   - .selected() will return the current dropdown
     *   element which is an instance of p5.Element.
     *   - .selected(value) can be used to make given
     *   option selected by default when the page first
     *   loads.
     *   - .disable() marks the whole dropdown element as
     *   disabled.
     *   - .disable(value) marks a given option as
     *   disabled.
     *   - .enable() marks the whole dropdown element as
     *   enabled if whole dropdown element is disabled
     *   intially.
     *   - .enable(value) marks a given option as enable if
     *   the initial option is disabled.
     *   @param existing DOM select element
     */
    function createSelect(existing: object): p5.Element;

    /**
     *   Creates a radio button element in the DOM. It also
     *   helps existing radio buttons assign methods of
     *   p5.Element. - .option(value, [label]) can be used
     *   to create a new option for the element. If an
     *   option with a value already exists, it will be
     *   returned. It is recommended to use string values
     *   as input for value. Optionally, a label can be
     *   provided as second argument for the option.
     *   - .remove(value) can be used to remove an option
     *   for the element. String values recommended as
     *   input for value.
     *   - .value() method will return the currently
     *   selected value.
     *   - .selected() method will return the currently
     *   selected input element.
     *   - .selected(value) method will select the option
     *   and return it. String values recommended as input
     *   for value.
     *   - .disable(Boolean) method will enable/disable the
     *   whole radio button element.
     *   @param containerElement A container HTML Element,
     *   either a div or span, inside which all existing
     *   radio inputs will be considered as options.
     *   @param [name] A name parameter for each Input
     *   Element.
     *   @return pointer to p5.Element holding created node
     */
    function createRadio(containerElement: object, name?: string): p5.Element;

    /**
     *   Creates a radio button element in the DOM. It also
     *   helps existing radio buttons assign methods of
     *   p5.Element. - .option(value, [label]) can be used
     *   to create a new option for the element. If an
     *   option with a value already exists, it will be
     *   returned. It is recommended to use string values
     *   as input for value. Optionally, a label can be
     *   provided as second argument for the option.
     *   - .remove(value) can be used to remove an option
     *   for the element. String values recommended as
     *   input for value.
     *   - .value() method will return the currently
     *   selected value.
     *   - .selected() method will return the currently
     *   selected input element.
     *   - .selected(value) method will select the option
     *   and return it. String values recommended as input
     *   for value.
     *   - .disable(Boolean) method will enable/disable the
     *   whole radio button element.
     *   @param name A name parameter for each Input
     *   Element.
     *   @return pointer to p5.Element holding created node
     */
    function createRadio(name: string): p5.Element;

    /**
     *   Creates a radio button element in the DOM. It also
     *   helps existing radio buttons assign methods of
     *   p5.Element. - .option(value, [label]) can be used
     *   to create a new option for the element. If an
     *   option with a value already exists, it will be
     *   returned. It is recommended to use string values
     *   as input for value. Optionally, a label can be
     *   provided as second argument for the option.
     *   - .remove(value) can be used to remove an option
     *   for the element. String values recommended as
     *   input for value.
     *   - .value() method will return the currently
     *   selected value.
     *   - .selected() method will return the currently
     *   selected input element.
     *   - .selected(value) method will select the option
     *   and return it. String values recommended as input
     *   for value.
     *   - .disable(Boolean) method will enable/disable the
     *   whole radio button element.
     *   @return pointer to p5.Element holding created node
     */
    function createRadio(): p5.Element;

    /**
     *   Creates a colorPicker element in the DOM for color
     *   input. The .value() method will return a hex
     *   string (#rrggbb) of the color. The .color() method
     *   will return a p5.Color object with the current
     *   chosen color.
     *   @param [value] default color of element
     *   @return pointer to p5.Element holding created node
     */
    function createColorPicker(value?: string | p5.Color): p5.Element;

    /**
     *   Creates an <input></input> element in the DOM for
     *   text input. Use .size() to set the display length
     *   of the box.
     *   @param value default value of the input box
     *   @param [type] type of text, ie text, password etc.
     *   Defaults to text. Needs a value to be specified
     *   first.
     *   @return pointer to p5.Element holding created node
     */
    function createInput(value: string, type?: string): p5.Element;

    /**
     *   Creates an <input></input> element in the DOM for
     *   text input. Use .size() to set the display length
     *   of the box.
     *   @param [value] default value of the input box
     */
    function createInput(value?: string): p5.Element;

    /**
     *   Creates an <input></input> element in the DOM of
     *   type 'file'. This allows users to select local
     *   files for use in a sketch.
     *   @param callback callback function for when a file
     *   is loaded
     *   @param [multiple] optional, to allow multiple
     *   files to be selected
     *   @return pointer to p5.Element holding created DOM
     *   element
     */
    function createFileInput(callback: (...args: any[]) => any, multiple?: boolean): p5.Element;

    /**
     *   Creates an HTML5 <video> element in the DOM for
     *   simple playback of audio/video. Shown by default,
     *   can be hidden with .hide() and drawn into canvas
     *   using image(). The first parameter can be either a
     *   single string path to a video file, or an array of
     *   string paths to different formats of the same
     *   video. This is useful for ensuring that your video
     *   can play across different browsers, as each
     *   supports different formats. See this page for
     *   further information about supported formats.
     *   @param src path to a video file, or array of paths
     *   for supporting different browsers
     *   @param [callback] callback function to be called
     *   upon 'canplaythrough' event fire, that is, when
     *   the browser can play the media, and estimates that
     *   enough data has been loaded to play the media up
     *   to its end without having to stop for further
     *   buffering of content
     *   @return pointer to video p5.MediaElement
     */
    function createVideo(src: string | string[], callback?: (...args: any[]) => any): p5.MediaElement;

    /**
     *   Creates a hidden HTML5 <audio> element in the DOM
     *   for simple audio playback. The first parameter can
     *   be either a single string path to a audio file, or
     *   an array of string paths to different formats of
     *   the same audio. This is useful for ensuring that
     *   your audio can play across different browsers, as
     *   each supports different formats. See this page for
     *   further information about supported formats.
     *   @param [src] path to an audio file, or array of
     *   paths for supporting different browsers
     *   @param [callback] callback function to be called
     *   upon 'canplaythrough' event fire, that is, when
     *   the browser can play the media, and estimates that
     *   enough data has been loaded to play the media up
     *   to its end without having to stop for further
     *   buffering of content
     *   @return pointer to audio p5.MediaElement
     */
    function createAudio(src?: string | string[], callback?: (...args: any[]) => any): p5.MediaElement;

    /**
     *   Creates a new HTML5 <video> element that contains
     *   the audio/video feed from a webcam. The element is
     *   separate from the canvas and is displayed by
     *   default. The element can be hidden using .hide().
     *   The feed can be drawn onto the canvas using
     *   image(). The loadedmetadata property can be used
     *   to detect when the element has fully loaded (see
     *   second example). More specific properties of the
     *   feed can be passing in a Constraints object. See
     *   the  W3C spec for possible properties. Note that
     *   not all of these are supported by all browsers.
     *
     *   Security note: A new browser security
     *   specification requires that getUserMedia, which is
     *   behind createCapture(), only works when you're
     *   running the code locally, or on HTTPS. Learn more
     *   here and here.
     *   @param type type of capture, either VIDEO or AUDIO
     *   if none specified, default both, or a Constraints
     *   object
     *   @param [callback] function to be called once
     *   stream has loaded
     *   @return capture video p5.Element
     */
    function createCapture(type: string | p5.TYPE | object, callback?: (...args: any[]) => any): p5.Element;

    /**
     *   Creates element with given tag in the DOM with
     *   given content.
     *   @param tag tag for the new element
     *   @param [content] html content to be inserted into
     *   the element
     *   @return pointer to p5.Element holding created node
     */
    function createElement(tag: string, content?: string): p5.Element;

    /**
     *   The setMoveThreshold() function is used to set the
     *   movement threshold for the deviceMoved() function.
     *   The default threshold is set to 0.5.
     *   @param value The threshold value
     */
    function setMoveThreshold(value: number): void;

    /**
     *   The setShakeThreshold() function is used to set
     *   the movement threshold for the deviceShaken()
     *   function. The default threshold is set to 30.
     *   @param value The threshold value
     */
    function setShakeThreshold(value: number): void;

    /**
     *   The deviceMoved() function is called when the
     *   device is moved by more than the threshold value
     *   along X, Y or Z axis. The default threshold is set
     *   to 0.5. The threshold value can be changed using
     *   setMoveThreshold().
     */
    function deviceMoved(): void;

    /**
     *   The deviceTurned() function is called when the
     *   device rotates by more than 90 degrees
     *   continuously. The axis that triggers the
     *   deviceTurned() method is stored in the turnAxis
     *   variable. The deviceTurned() method can be locked
     *   to trigger on any axis: X, Y or Z by comparing the
     *   turnAxis variable to 'X', 'Y' or 'Z'.
     */
    function deviceTurned(): void;

    /**
     *   The deviceShaken() function is called when the
     *   device total acceleration changes of accelerationX
     *   and accelerationY values is more than the
     *   threshold value. The default threshold is set to
     *   30. The threshold value can be changed using
     *   setShakeThreshold().
     */
    function deviceShaken(): void;

    /**
     *   The system variable deviceOrientation always
     *   contains the orientation of the device. The value
     *   of this variable will either be set 'landscape' or
     *   'portrait'. If no data is available it will be set
     *   to 'undefined'. either LANDSCAPE or PORTRAIT.
     */
    let deviceOrientation: p5.UNKNOWN_P5_CONSTANT;

    /**
     *   The system variable accelerationX always contains
     *   the acceleration of the device along the x axis.
     *   Value is represented as meters per second squared.
     */
    let accelerationX: number;

    /**
     *   The system variable accelerationY always contains
     *   the acceleration of the device along the y axis.
     *   Value is represented as meters per second squared.
     */
    let accelerationY: number;

    /**
     *   The system variable accelerationZ always contains
     *   the acceleration of the device along the z axis.
     *   Value is represented as meters per second squared.
     */
    let accelerationZ: number;

    /**
     *   The system variable pAccelerationX always contains
     *   the acceleration of the device along the x axis in
     *   the frame previous to the current frame. Value is
     *   represented as meters per second squared.
     */
    let pAccelerationX: number;

    /**
     *   The system variable pAccelerationY always contains
     *   the acceleration of the device along the y axis in
     *   the frame previous to the current frame. Value is
     *   represented as meters per second squared.
     */
    let pAccelerationY: number;

    /**
     *   The system variable pAccelerationZ always contains
     *   the acceleration of the device along the z axis in
     *   the frame previous to the current frame. Value is
     *   represented as meters per second squared.
     */
    let pAccelerationZ: number;

    /**
     *   The system variable rotationX always contains the
     *   rotation of the device along the x axis. If the
     *   sketch  angleMode() is set to DEGREES, the value
     *   will be -180 to 180. If it is set to RADIANS, the
     *   value will be -PI to PI. Note: The order the
     *   rotations are called is important, ie. if used
     *   together, it must be called in the order Z-X-Y or
     *   there might be unexpected behaviour.
     */
    let rotationX: number;

    /**
     *   The system variable rotationY always contains the
     *   rotation of the device along the y axis. If the
     *   sketch  angleMode() is set to DEGREES, the value
     *   will be -90 to 90. If it is set to RADIANS, the
     *   value will be -PI/2 to PI/2. Note: The order the
     *   rotations are called is important, ie. if used
     *   together, it must be called in the order Z-X-Y or
     *   there might be unexpected behaviour.
     */
    let rotationY: number;

    /**
     *   The system variable rotationZ always contains the
     *   rotation of the device along the z axis. If the
     *   sketch  angleMode() is set to DEGREES, the value
     *   will be 0 to 360. If it is set to RADIANS, the
     *   value will be 0 to 2*PI. Unlike rotationX and
     *   rotationY, this variable is available for devices
     *   with a built-in compass only.
     *
     *   Note: The order the rotations are called is
     *   important, ie. if used together, it must be called
     *   in the order Z-X-Y or there might be unexpected
     *   behaviour.
     */
    let rotationZ: number;

    /**
     *   The system variable pRotationX always contains the
     *   rotation of the device along the x axis in the
     *   frame previous to the current frame. If the sketch
     *   angleMode() is set to DEGREES, the value will be
     *   -180 to 180. If it is set to RADIANS, the value
     *   will be -PI to PI. pRotationX can also be used
     *   with rotationX to determine the rotate direction
     *   of the device along the X-axis.
     */
    let pRotationX: number;

    /**
     *   The system variable pRotationY always contains the
     *   rotation of the device along the y axis in the
     *   frame previous to the current frame. If the sketch
     *   angleMode() is set to DEGREES, the value will be
     *   -90 to 90. If it is set to RADIANS, the value will
     *   be -PI/2 to PI/2. pRotationY can also be used with
     *   rotationY to determine the rotate direction of the
     *   device along the Y-axis.
     */
    let pRotationY: number;

    /**
     *   The system variable pRotationZ always contains the
     *   rotation of the device along the z axis in the
     *   frame previous to the current frame. If the sketch
     *   angleMode() is set to DEGREES, the value will be 0
     *   to 360. If it is set to RADIANS, the value will be
     *   0 to 2*PI. pRotationZ can also be used with
     *   rotationZ to determine the rotate direction of the
     *   device along the Z-axis.
     */
    let pRotationZ: number;

    /**
     *   When a device is rotated, the axis that triggers
     *   the deviceTurned() method is stored in the
     *   turnAxis variable. The turnAxis variable is only
     *   defined within the scope of deviceTurned().
     */
    let turnAxis: string;

    /**
     *   The keyPressed() function is called once every
     *   time a key is pressed. The keyCode for the key
     *   that was pressed is stored in the keyCode
     *   variable. For non-ASCII keys, use the keyCode
     *   variable. You can check if the keyCode equals
     *   BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE,
     *   SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW,
     *   LEFT_ARROW, RIGHT_ARROW.
     *
     *   For ASCII keys, the key that was pressed is stored
     *   in the key variable. However, it does not
     *   distinguish between uppercase and lowercase. For
     *   this reason, it is recommended to use keyTyped()
     *   to read the key variable, in which the case of the
     *   variable will be distinguished.
     *
     *   Because of how operating systems handle key
     *   repeats, holding down a key may cause multiple
     *   calls to keyTyped() (and keyReleased() as well).
     *   The rate of repeat is set by the operating system
     *   and how each computer is configured.
     *
     *
     *   Browsers may have different default behaviors
     *   attached to various key events. To prevent any
     *   default behavior for this event, add "return
     *   false" to the end of the method.
     *   @param [event] optional KeyboardEvent callback
     *   argument.
     */
    function keyPressed(event?: KeyboardEvent): void;

    /**
     *   The keyReleased() function is called once every
     *   time a key is released. See key and keyCode for
     *   more information. Browsers may have different
     *   default behaviors attached to various key events.
     *   To prevent any default behavior for this event,
     *   add "return false" to the end of the function.
     *   @param [event] optional KeyboardEvent callback
     *   argument.
     */
    function keyReleased(event?: KeyboardEvent): void;

    /**
     *   The keyTyped() function is called once every time
     *   a key is pressed, but action keys such as
     *   Backspace, Delete, Ctrl, Shift, and Alt are
     *   ignored. If you are trying to detect a keyCode for
     *   one of these keys, use the keyPressed() function
     *   instead. The most recent key typed will be stored
     *   in the key variable. Because of how operating
     *   systems handle key repeats, holding down a key
     *   will cause multiple calls to keyTyped() (and
     *   keyReleased() as well). The rate of repeat is set
     *   by the operating system and how each computer is
     *   configured.
     *
     *
     *   Browsers may have different default behaviors
     *   attached to various key events. To prevent any
     *   default behavior for this event, add "return
     *   false" to the end of the function.
     *   @param [event] optional KeyboardEvent callback
     *   argument.
     */
    function keyTyped(event?: KeyboardEvent): void;

    /**
     *   The keyIsDown() function checks if the key is
     *   currently down, i.e. pressed. It can be used if
     *   you have an object that moves, and you want
     *   several keys to be able to affect its behaviour
     *   simultaneously, such as moving a sprite
     *   diagonally. You can put in any number representing
     *   the keyCode of the key, or use any of the variable
     *   keyCode names listed here.
     *   @param code The key to check for.
     *   @return whether key is down or not
     */
    function keyIsDown(code: number): boolean;

    /**
     *   The boolean system variable keyIsPressed is true
     *   if any key is pressed and false if no keys are
     *   pressed.
     */
    let keyIsPressed: boolean;

    /**
     *   The system variable key always contains the value
     *   of the most recent key on the keyboard that was
     *   typed. To get the proper capitalization, it is
     *   best to use it within keyTyped(). For non-ASCII
     *   keys, use the keyCode variable.
     */
    let key: string;

    /**
     *   The variable keyCode is used to detect special
     *   keys such as BACKSPACE, DELETE, ENTER, RETURN,
     *   TAB, ESCAPE, SHIFT, CONTROL, OPTION, ALT,
     *   UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW. You
     *   can also check for custom keys by looking up the
     *   keyCode of any key on a site like this:
     *   keycode.info.
     */
    let keyCode: number;

    /**
     *   The mouseMoved() function is called every time the
     *   mouse moves and a mouse button is not pressed.
     *   Browsers may have different default behaviors
     *   attached to various mouse events. To prevent any
     *   default behavior for this event, add "return
     *   false" to the end of the method.
     *   @param [event] optional MouseEvent callback
     *   argument.
     */
    function mouseMoved(event?: MouseEvent): void;

    /**
     *   The mouseDragged() function is called once every
     *   time the mouse moves and a mouse button is
     *   pressed. If no mouseDragged() function is defined,
     *   the touchMoved() function will be called instead
     *   if it is defined. Browsers may have different
     *   default behaviors attached to various mouse
     *   events. To prevent any default behavior for this
     *   event, add "return false" to the end of the
     *   function.
     *   @param [event] optional MouseEvent callback
     *   argument.
     */
    function mouseDragged(event?: MouseEvent): void;

    /**
     *   The mousePressed() function is called once after
     *   every time a mouse button is pressed. The
     *   mouseButton variable (see the related reference
     *   entry) can be used to determine which button has
     *   been pressed. If no mousePressed() function is
     *   defined, the touchStarted() function will be
     *   called instead if it is defined. Browsers may have
     *   different default behaviors attached to various
     *   mouse events. To prevent any default behavior for
     *   this event, add "return false" to the end of the
     *   function.
     *   @param [event] optional MouseEvent callback
     *   argument.
     */
    function mousePressed(event?: MouseEvent): void;

    /**
     *   The mouseReleased() function is called every time
     *   a mouse button is released. If no mouseReleased()
     *   function is defined, the touchEnded() function
     *   will be called instead if it is defined. Browsers
     *   may have different default behaviors attached to
     *   various mouse events. To prevent any default
     *   behavior for this event, add "return false" to the
     *   end of the function.
     *   @param [event] optional MouseEvent callback
     *   argument.
     */
    function mouseReleased(event?: MouseEvent): void;

    /**
     *   The mouseClicked() function is called once after a
     *   mouse button has been pressed and then released.
     *   Browsers handle clicks differently, so this
     *   function is only guaranteed to be run when the
     *   left mouse button is clicked. To handle other
     *   mouse buttons being pressed or released, see
     *   mousePressed() or mouseReleased().
     *
     *
     *   Browsers may have different default behaviors
     *   attached to various mouse events. To prevent any
     *   default behavior for this event, add "return
     *   false" to the end of the function.
     *   @param [event] optional MouseEvent callback
     *   argument.
     */
    function mouseClicked(event?: MouseEvent): void;

    /**
     *   The doubleClicked() function is executed every
     *   time a event listener has detected a dblclick
     *   event which is a part of the DOM L3 specification.
     *   The doubleClicked event is fired when a pointing
     *   device button (usually a mouse's primary button)
     *   is clicked twice on a single element. For more
     *   info on the dblclick event refer to mozilla's
     *   documentation here:
     *   https://developer.mozilla.org/en-US/docs/Web/Events/dblclick
     *   @param [event] optional MouseEvent callback
     *   argument.
     */
    function doubleClicked(event?: MouseEvent): void;

    /**
     *   The function mouseWheel() is executed every time a
     *   vertical mouse wheel event is detected either
     *   triggered by an actual mouse wheel or by a
     *   touchpad. The event.delta property returns the
     *   amount the mouse wheel have scrolled. The values
     *   can be positive or negative depending on the
     *   scroll direction (on macOS with "natural"
     *   scrolling enabled, the signs are inverted).
     *
     *
     *   Browsers may have different default behaviors
     *   attached to various mouse events. To prevent any
     *   default behavior for this event, add "return
     *   false" to the end of the method.
     *
     *
     *   Due to the current support of the "wheel" event on
     *   Safari, the function may only work as expected if
     *   "return false" is included while using Safari.
     *   @param [event] optional WheelEvent callback
     *   argument.
     */
    function mouseWheel(event?: WheelEvent): void;

    /**
     *   The function requestPointerLock() locks the
     *   pointer to its current position and makes it
     *   invisible. Use movedX and movedY to get the
     *   difference the mouse was moved since the last call
     *   of draw. Note that not all browsers support this
     *   feature. This enables you to create experiences
     *   that aren't limited by the mouse moving out of the
     *   screen even if it is repeatedly moved into one
     *   direction. For example, a first person perspective
     *   experience.
     */
    function requestPointerLock(): void;

    /**
     *   The function exitPointerLock() exits a previously
     *   triggered pointer Lock for example to make ui
     *   elements usable etc
     */
    function exitPointerLock(): void;

    /**
     *   The variable movedX contains the horizontal
     *   movement of the mouse since the last frame
     */
    let movedX: number;

    /**
     *   The variable movedY contains the vertical movement
     *   of the mouse since the last frame
     */
    let movedY: number;

    /**
     *   The system variable mouseX always contains the
     *   current horizontal position of the mouse, relative
     *   to (0, 0) of the canvas. The value at the top-left
     *   corner is (0, 0) for 2-D and (-width/2, -height/2)
     *   for WebGL. If touch is used instead of mouse
     *   input, mouseX will hold the x value of the most
     *   recent touch point.
     */
    let mouseX: number;

    /**
     *   The system variable mouseY always contains the
     *   current vertical position of the mouse, relative
     *   to (0, 0) of the canvas. The value at the top-left
     *   corner is (0, 0) for 2-D and (-width/2, -height/2)
     *   for WebGL. If touch is used instead of mouse
     *   input, mouseY will hold the y value of the most
     *   recent touch point.
     */
    let mouseY: number;

    /**
     *   The system variable pmouseX always contains the
     *   horizontal position of the mouse or finger in the
     *   frame previous to the current frame, relative to
     *   (0, 0) of the canvas. The value at the top-left
     *   corner is (0, 0) for 2-D and (-width/2, -height/2)
     *   for WebGL. Note: pmouseX will be reset to the
     *   current mouseX value at the start of each touch
     *   event.
     */
    let pmouseX: number;

    /**
     *   The system variable pmouseY always contains the
     *   vertical position of the mouse or finger in the
     *   frame previous to the current frame, relative to
     *   (0, 0) of the canvas. The value at the top-left
     *   corner is (0, 0) for 2-D and (-width/2, -height/2)
     *   for WebGL. Note: pmouseY will be reset to the
     *   current mouseY value at the start of each touch
     *   event.
     */
    let pmouseY: number;

    /**
     *   The system variable winMouseX always contains the
     *   current horizontal position of the mouse, relative
     *   to (0, 0) of the window.
     */
    let winMouseX: number;

    /**
     *   The system variable winMouseY always contains the
     *   current vertical position of the mouse, relative
     *   to (0, 0) of the window.
     */
    let winMouseY: number;

    /**
     *   The system variable pwinMouseX always contains the
     *   horizontal position of the mouse in the frame
     *   previous to the current frame, relative to (0, 0)
     *   of the window. Note: pwinMouseX will be reset to
     *   the current winMouseX value at the start of each
     *   touch event.
     */
    let pwinMouseX: number;

    /**
     *   The system variable pwinMouseY always contains the
     *   vertical position of the mouse in the frame
     *   previous to the current frame, relative to (0, 0)
     *   of the window. Note: pwinMouseY will be reset to
     *   the current winMouseY value at the start of each
     *   touch event.
     */
    let pwinMouseY: number;

    /**
     *   p5 automatically tracks if the mouse button is
     *   pressed and which button is pressed. The value of
     *   the system variable mouseButton is either LEFT,
     *   RIGHT, or CENTER depending on which button was
     *   pressed last. Warning: different browsers may
     *   track mouseButton differently.
     */
    let mouseButton: p5.UNKNOWN_P5_CONSTANT;

    /**
     *   The boolean system variable mouseIsPressed is true
     *   if the mouse is pressed and false if not.
     */
    let mouseIsPressed: boolean;

    /**
     *   The touchStarted() function is called once after
     *   every time a touch is registered. If no
     *   touchStarted() function is defined, the
     *   mousePressed() function will be called instead if
     *   it is defined. Browsers may have different default
     *   behaviors attached to various touch events. To
     *   prevent any default behavior for this event, add
     *   "return false" to the end of the method.
     *   @param [event] optional TouchEvent callback
     *   argument.
     */
    function touchStarted(event?: TouchEvent): void;

    /**
     *   The touchMoved() function is called every time a
     *   touch move is registered. If no touchMoved()
     *   function is defined, the mouseDragged() function
     *   will be called instead if it is defined. Browsers
     *   may have different default behaviors attached to
     *   various touch events. To prevent any default
     *   behavior for this event, add "return false" to the
     *   end of the method.
     *   @param [event] optional TouchEvent callback
     *   argument.
     */
    function touchMoved(event?: TouchEvent): void;

    /**
     *   The touchEnded() function is called every time a
     *   touch ends. If no touchEnded() function is
     *   defined, the mouseReleased() function will be
     *   called instead if it is defined. Browsers may have
     *   different default behaviors attached to various
     *   touch events. To prevent any default behavior for
     *   this event, add "return false" to the end of the
     *   method.
     *   @param [event] optional TouchEvent callback
     *   argument.
     */
    function touchEnded(event?: TouchEvent): void;

    /**
     *   The system variable touches[] contains an array of
     *   the positions of all current touch points,
     *   relative to (0, 0) of the canvas, and IDs
     *   identifying a unique touch as it moves. Each
     *   element in the array is an object with x, y, and
     *   id properties. The touches[] array is not
     *   supported on Safari and IE on touch-based desktops
     *   (laptops).
     */
    let touches: object[];

    /**
     *   Creates a new p5.Image object. The new image is
     *   transparent by default. createImage() uses the
     *   width and height paremeters to set the new
     *   p5.Image object's dimensions in pixels. The new
     *   p5.Image can be modified by updating its pixels
     *   array or by calling its get() and set() methods.
     *   The loadPixels() method must be called before
     *   reading or modifying pixel values. The
     *   updatePixels() method must be called for updates
     *   to take effect.
     *   @param width width in pixels.
     *   @param height height in pixels.
     *   @return new p5.Image object.
     */
    function createImage(width: number, height: number): p5.Image;

    /**
     *   Saves the current canvas as an image. The browser
     *   will either save the file immediately or prompt
     *   the user with a dialogue window.
     *   @param selectedCanvas reference to a specific
     *   HTML5 canvas element.
     *   @param [filename] file name. Defaults to
     *   'untitled'.
     *   @param [extension] file extension, either 'jpg' or
     *   'png'. Defaults to 'png'.
     */
    function saveCanvas(selectedCanvas: p5.Element | HTMLCanvasElement, filename?: string, extension?: string): void;

    /**
     *   Saves the current canvas as an image. The browser
     *   will either save the file immediately or prompt
     *   the user with a dialogue window.
     *   @param [filename] file name. Defaults to
     *   'untitled'.
     *   @param [extension] file extension, either 'jpg' or
     *   'png'. Defaults to 'png'.
     */
    function saveCanvas(filename?: string, extension?: string): void;

    /**
     *   Captures a sequence of frames from the canvas that
     *   can be used to create a movie. Frames are
     *   downloaded as individual image files by default.
     *   The first parameter, filename, sets the prefix for
     *   the file names. For example, setting the prefix to
     *   'frame' would generate the image files frame0.png,
     *   frame1.png, and so on. The second parameter,
     *   extension, sets the file type to either 'png' or
     *   'jpg'.
     *
     *   The third parameter, duration, sets the duration
     *   to record in seconds. The maximum duration is 15
     *   seconds. The fourth parameter, framerate, sets the
     *   number of frames to record per second. The maximum
     *   frame rate value is 22. Limits are placed on
     *   duration and framerate to avoid using too much
     *   memory. Recording large canvases can easily crash
     *   sketches or even web browsers.
     *
     *   The fifth parameter, callback, is optional. If a
     *   function is passed, image files won't be saved by
     *   default. The callback function can be used to
     *   process an array containing the data for each
     *   captured frame. The array of image data contains a
     *   sequence of objects with three properties for each
     *   frame: imageData, filename, and extension.
     *   @param filename prefix of file name.
     *   @param extension file extension, either 'jpg' or
     *   'png'.
     *   @param duration duration in seconds to record.
     *   This parameter will be constrained to be less or
     *   equal to 15.
     *   @param framerate number of frames to save per
     *   second. This parameter will be constrained to be
     *   less or equal to 22.
     *   @param [callback] callback function that will be
     *   executed to handle the image data. This function
     *   should accept an array as argument. The array will
     *   contain the specified number of frames of objects.
     *   Each object has three properties: imageData,
     *   filename, and extension.
     */
    function saveFrames(
        filename: string,
        extension: string,
        duration: number,
        framerate: number,
        callback?: (p1: any[]) => any
    ): void;

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
    function loadImage(
        path: string,
        successCallback?: (p1: p5.Image) => any,
        failureCallback?: (p1: Event) => any
    ): p5.Image;

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
    function saveGif(filename: string, duration: number, options?: object): void;

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
    function image(
        img: p5.Image | p5.Element | p5.Framebuffer,
        x: number,
        y: number,
        width?: number,
        height?: number
    ): void;

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
    function image(
        img: p5.Image | p5.Element | p5.Framebuffer,
        dx: number,
        dy: number,
        dWidth: number,
        dHeight: number,
        sx: number,
        sy: number,
        sWidth?: number,
        sHeight?: number,
        fit?: p5.IMAGE_FIT,
        xAlign?: p5.X_ALIGN,
        yAlign?: p5.Y_ALIGN
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
    function tint(v1: number, v2: number, v3: number, alpha?: number): void;

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
    function tint(value: string): void;

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
    function tint(gray: number, alpha?: number): void;

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
    function tint(values: number[]): void;

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
    function tint(color: p5.Color): void;

    /**
     *   Removes the current tint set by tint() and
     *   restores images to their original colors.
     */
    function noTint(): void;

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
    function imageMode(mode: p5.IMAGE_MODE): void;

    /**
     *   Copies a region of pixels from one image to
     *   another. The blendMode parameter blends the
     *   images' colors to create different effects.
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
     *   @param blendMode the blend mode. either BLEND,
     *   DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
     *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
     *   SOFT_LIGHT, DODGE, BURN, ADD or NORMAL.
     */
    function blend(
        srcImage: p5.Image,
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        dx: number,
        dy: number,
        dw: number,
        dh: number,
        blendMode: p5.BLEND_MODE
    ): void;

    /**
     *   Copies a region of pixels from one image to
     *   another. The blendMode parameter blends the
     *   images' colors to create different effects.
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
     */
    function blend(
        sx: number,
        sy: number,
        sw: number,
        sh: number,
        dx: number,
        dy: number,
        dw: number,
        dh: number,
        blendMode: p5.UNKNOWN_P5_CONSTANT
    ): void;

    /**
     *   Copies pixels from a source image to a region of
     *   the canvas. The source image can be the canvas
     *   itself or a p5.Image object. copy() will scale
     *   pixels from the source region if it isn't the same
     *   size as the destination region.
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
    function copy(
        srcImage: p5.Image | p5.Element,
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
     *   Copies pixels from a source image to a region of
     *   the canvas. The source image can be the canvas
     *   itself or a p5.Image object. copy() will scale
     *   pixels from the source region if it isn't the same
     *   size as the destination region.
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
    function copy(sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;

    /**
     *   Applies an image filter to the canvas. The preset
     *   options are: INVERT Inverts the colors in the
     *   image. No parameter is used.
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
     *   OPAQUE Sets the alpha channel to entirely opaque.
     *   No parameter is used.
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
     *
     *   filter() uses WebGL in the background by default
     *   because it's faster. This can be disabled in P2D
     *   mode by adding a false argument, as in
     *   filter(BLUR, false). This may be useful to keep
     *   computation off the GPU or to work around a lack
     *   of WebGL support.
     *
     *   In WEBGL mode, filter() can also use custom
     *   shaders. See createFilterShader() for more
     *   information.
     *   @param filterType either THRESHOLD, GRAY, OPAQUE,
     *   INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.
     *   @param [filterParam] parameter unique to each
     *   filter.
     *   @param [useWebGL] flag to control whether to use
     *   fast WebGL filters (GPU) or original image filters
     *   (CPU); defaults to true.
     */
    function filter(filterType: p5.FILTER_TYPE, filterParam?: number, useWebGL?: boolean): void;

    /**
     *   Applies an image filter to the canvas. The preset
     *   options are: INVERT Inverts the colors in the
     *   image. No parameter is used.
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
     *   OPAQUE Sets the alpha channel to entirely opaque.
     *   No parameter is used.
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
     *
     *   filter() uses WebGL in the background by default
     *   because it's faster. This can be disabled in P2D
     *   mode by adding a false argument, as in
     *   filter(BLUR, false). This may be useful to keep
     *   computation off the GPU or to work around a lack
     *   of WebGL support.
     *
     *   In WEBGL mode, filter() can also use custom
     *   shaders. See createFilterShader() for more
     *   information.
     *   @param filterType either THRESHOLD, GRAY, OPAQUE,
     *   INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.
     *   @param [useWebGL] flag to control whether to use
     *   fast WebGL filters (GPU) or original image filters
     *   (CPU); defaults to true.
     */
    function filter(filterType: p5.UNKNOWN_P5_CONSTANT, useWebGL?: boolean): void;

    /**
     *   Applies an image filter to the canvas. The preset
     *   options are: INVERT Inverts the colors in the
     *   image. No parameter is used.
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
     *   OPAQUE Sets the alpha channel to entirely opaque.
     *   No parameter is used.
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
     *
     *   filter() uses WebGL in the background by default
     *   because it's faster. This can be disabled in P2D
     *   mode by adding a false argument, as in
     *   filter(BLUR, false). This may be useful to keep
     *   computation off the GPU or to work around a lack
     *   of WebGL support.
     *
     *   In WEBGL mode, filter() can also use custom
     *   shaders. See createFilterShader() for more
     *   information.
     *   @param shaderFilter shader that's been loaded,
     *   with the frag shader using a tex0 uniform.
     */
    function filter(shaderFilter: p5.Shader): void;

    /**
     *   Gets a pixel or a region of pixels from the
     *   canvas. get() is easy to use but it's not as fast
     *   as pixels. Use pixels to read many pixel values.
     *
     *   The version of get() with no parameters returns
     *   the entire canvas.
     *
     *   The version of get() with two parameters
     *   interprets them as coordinates. It returns an
     *   array with the [R, G, B, A] values of the pixel at
     *   the given point.
     *
     *   The version of get() with four parameters
     *   interprets them as coordinates and dimensions. It
     *   returns a subsection of the canvas as a p5.Image
     *   object. The first two parameters are the
     *   coordinates for the upper-left corner of the
     *   subsection. The last two parameters are the width
     *   and height of the subsection.
     *
     *   Use p5.Image.get() to work directly with p5.Image
     *   objects.
     *   @param x x-coordinate of the pixel.
     *   @param y y-coordinate of the pixel.
     *   @param w width of the subsection to be returned.
     *   @param h height of the subsection to be returned.
     *   @return subsection as a p5.Image object.
     */
    function get(x: number, y: number, w: number, h: number): p5.Image;

    /**
     *   Gets a pixel or a region of pixels from the
     *   canvas. get() is easy to use but it's not as fast
     *   as pixels. Use pixels to read many pixel values.
     *
     *   The version of get() with no parameters returns
     *   the entire canvas.
     *
     *   The version of get() with two parameters
     *   interprets them as coordinates. It returns an
     *   array with the [R, G, B, A] values of the pixel at
     *   the given point.
     *
     *   The version of get() with four parameters
     *   interprets them as coordinates and dimensions. It
     *   returns a subsection of the canvas as a p5.Image
     *   object. The first two parameters are the
     *   coordinates for the upper-left corner of the
     *   subsection. The last two parameters are the width
     *   and height of the subsection.
     *
     *   Use p5.Image.get() to work directly with p5.Image
     *   objects.
     *   @return whole canvas as a p5.Image.
     */
    function get(): p5.Image;

    /**
     *   Gets a pixel or a region of pixels from the
     *   canvas. get() is easy to use but it's not as fast
     *   as pixels. Use pixels to read many pixel values.
     *
     *   The version of get() with no parameters returns
     *   the entire canvas.
     *
     *   The version of get() with two parameters
     *   interprets them as coordinates. It returns an
     *   array with the [R, G, B, A] values of the pixel at
     *   the given point.
     *
     *   The version of get() with four parameters
     *   interprets them as coordinates and dimensions. It
     *   returns a subsection of the canvas as a p5.Image
     *   object. The first two parameters are the
     *   coordinates for the upper-left corner of the
     *   subsection. The last two parameters are the width
     *   and height of the subsection.
     *
     *   Use p5.Image.get() to work directly with p5.Image
     *   objects.
     *   @param x x-coordinate of the pixel.
     *   @param y y-coordinate of the pixel.
     *   @return color of the pixel at (x, y) in array
     *   format `[R, G, B, A]`.
     */
    function get(x: number, y: number): number[];

    /**
     *   Loads the current value of each pixel on the
     *   canvas into the pixels array. This function must
     *   be called before reading from or writing to
     *   pixels.
     */
    function loadPixels(): void;

    /**
     *   Sets the color of a pixel or draws an image to the
     *   canvas. set() is easy to use but it's not as fast
     *   as pixels. Use pixels to set many pixel values.
     *
     *   set() interprets the first two parameters as x-
     *   and y-coordinates. It interprets the last
     *   parameter as a grayscale value, a [R, G, B, A]
     *   pixel array, a p5.Color object, or a p5.Image
     *   object. If an image is passed, the first two
     *   parameters set the coordinates for the image's
     *   upper-left corner, regardless of the current
     *   imageMode().
     *
     *   updatePixels() must be called after using set()
     *   for changes to appear.
     *   @param x x-coordinate of the pixel.
     *   @param y y-coordinate of the pixel.
     *   @param c grayscale value | pixel array | p5.Color
     *   object | p5.Image to copy.
     */
    function set(x: number, y: number, c: number | number[] | object): void;

    /**
     *   Updates the canvas with the RGBA values in the
     *   pixels array. updatePixels() only needs to be
     *   called after changing values in the pixels array.
     *   Such changes can be made directly after calling
     *   loadPixels() or by calling set().
     *   @param [x] x-coordinate of the upper-left corner
     *   of region to update.
     *   @param [y] y-coordinate of the upper-left corner
     *   of region to update.
     *   @param [w] width of region to update.
     *   @param [h] height of region to update.
     */
    function updatePixels(x?: number, y?: number, w?: number, h?: number): void;

    /**
     *   An array containing the color of each pixel on the
     *   canvas. Colors are stored as numbers representing
     *   red, green, blue, and alpha (RGBA) values. pixels
     *   is a one-dimensional array for performance
     *   reasons. Each pixel occupies four elements in the
     *   pixels array, one for each RGBA value. For
     *   example, the pixel at coordinates (0, 0) stores
     *   its RGBA values at pixels[0], pixels[1],
     *   pixels[2], and pixels[3], respectively. The next
     *   pixel at coordinates (1, 0) stores its RGBA values
     *   at pixels[4], pixels[5], pixels[6], and pixels[7].
     *   And so on. The pixels array for a 100×100 canvas
     *   has 100 × 100 × 4 = 40,000 elements.
     *
     *   Some displays use several smaller pixels to set
     *   the color at a single point. The pixelDensity()
     *   function returns the pixel density of the canvas.
     *   High density displays often have a pixelDensity()
     *   of 2. On such a display, the pixels array for a
     *   100×100 canvas has 200 × 200 × 4 = 160,000
     *   elements.
     *
     *   Accessing the RGBA values for a point on the
     *   canvas requires a little math as shown below. The
     *   loadPixels() function must be called before
     *   accessing the pixels array. The updatePixels()
     *   function must be called after any changes are
     *   made.
     */
    let pixels: number[];

    /**
     *   Loads a JSON file from a file or a URL, and
     *   returns an Object. Note that even if the JSON file
     *   contains an Array, an Object will be returned with
     *   index numbers as keys. This method is
     *   asynchronous, meaning it may not finish before the
     *   next line in your sketch is executed. JSONP is
     *   supported via a polyfill and you can pass in as
     *   the second argument an object with definitions of
     *   the json callback following the syntax specified
     *   here.
     *
     *   This method is suitable for fetching files up to
     *   size of 64MB.
     *   @param path name of the file or url to load
     *   @param [jsonpOptions] options object for jsonp
     *   related settings
     *   @param [datatype] "json" or "jsonp"
     *   @param [callback] function to be executed after
     *   loadJSON() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     *   @return JSON data
     */
    function loadJSON(
        path: string,
        jsonpOptions?: object,
        datatype?: string,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): object | any[];

    /**
     *   Loads a JSON file from a file or a URL, and
     *   returns an Object. Note that even if the JSON file
     *   contains an Array, an Object will be returned with
     *   index numbers as keys. This method is
     *   asynchronous, meaning it may not finish before the
     *   next line in your sketch is executed. JSONP is
     *   supported via a polyfill and you can pass in as
     *   the second argument an object with definitions of
     *   the json callback following the syntax specified
     *   here.
     *
     *   This method is suitable for fetching files up to
     *   size of 64MB.
     *   @param path name of the file or url to load
     *   @param datatype "json" or "jsonp"
     *   @param [callback] function to be executed after
     *   loadJSON() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function loadJSON(
        path: string,
        datatype: string,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): object | any[];

    /**
     *   Loads a JSON file from a file or a URL, and
     *   returns an Object. Note that even if the JSON file
     *   contains an Array, an Object will be returned with
     *   index numbers as keys. This method is
     *   asynchronous, meaning it may not finish before the
     *   next line in your sketch is executed. JSONP is
     *   supported via a polyfill and you can pass in as
     *   the second argument an object with definitions of
     *   the json callback following the syntax specified
     *   here.
     *
     *   This method is suitable for fetching files up to
     *   size of 64MB.
     *   @param path name of the file or url to load
     *   @param callback function to be executed after
     *   loadJSON() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function loadJSON(
        path: string,
        callback: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): object | any[];

    /**
     *   Reads the contents of a file and creates a String
     *   array of its individual lines. If the name of the
     *   file is used as the parameter, as in the above
     *   example, the file must be located in the sketch
     *   directory/folder. Alternatively, the file may be
     *   loaded from anywhere on the local computer using
     *   an absolute path (something that starts with / on
     *   Unix and Linux, or a drive letter on Windows), or
     *   the filename parameter can be a URL for a file
     *   found on a network.
     *
     *   This method is asynchronous, meaning it may not
     *   finish before the next line in your sketch is
     *   executed.
     *
     *   This method is suitable for fetching files up to
     *   size of 64MB.
     *   @param filename name of the file or url to load
     *   @param [callback] function to be executed after
     *   loadStrings() completes, Array is passed in as
     *   first argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     *   @return Array of Strings
     */
    function loadStrings(
        filename: string,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): string[];

    /**
     *   Reads the contents of a file or URL and creates a
     *   p5.Table object with its values. If a file is
     *   specified, it must be located in the sketch's
     *   "data" folder. The filename parameter can also be
     *   a URL to a file found online. By default, the file
     *   is assumed to be comma-separated (in CSV format).
     *   Table only looks for a header row if the 'header'
     *   option is included. This method is asynchronous,
     *   meaning it may not finish before the next line in
     *   your sketch is executed. Calling loadTable()
     *   inside preload() guarantees to complete the
     *   operation before setup() and draw() are called.
     *   Outside of preload(), you may supply a callback
     *   function to handle the object:
     *
     *   All files loaded and saved use UTF-8 encoding.
     *   This method is suitable for fetching files up to
     *   size of 64MB.
     *   @param filename name of the file or URL to load
     *   @param [extension] parse the table by
     *   comma-separated values "csv", semicolon-separated
     *   values "ssv", or tab-separated values "tsv"
     *   @param [header] "header" to indicate table has
     *   header row
     *   @param [callback] function to be executed after
     *   loadTable() completes. On success, the Table
     *   object is passed in as the first argument.
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     *   @return Table object containing data
     */
    function loadTable(
        filename: string,
        extension?: string,
        header?: string,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): object;

    /**
     *   Reads the contents of a file and creates an XML
     *   object with its values. If the name of the file is
     *   used as the parameter, as in the above example,
     *   the file must be located in the sketch
     *   directory/folder. Alternatively, the file maybe be
     *   loaded from anywhere on the local computer using
     *   an absolute path (something that starts with / on
     *   Unix and Linux, or a drive letter on Windows), or
     *   the filename parameter can be a URL for a file
     *   found on a network.
     *
     *   This method is asynchronous, meaning it may not
     *   finish before the next line in your sketch is
     *   executed. Calling loadXML() inside preload()
     *   guarantees to complete the operation before
     *   setup() and draw() are called.
     *
     *   Outside of preload(), you may supply a callback
     *   function to handle the object.
     *
     *   This method is suitable for fetching files up to
     *   size of 64MB.
     *   @param filename name of the file or URL to load
     *   @param [callback] function to be executed after
     *   loadXML() completes, XML object is passed in as
     *   first argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     *   @return XML object containing data
     */
    function loadXML(
        filename: string,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): object;

    /**
     *   This method is suitable for fetching files up to
     *   size of 64MB.
     *   @param file name of the file or URL to load
     *   @param [callback] function to be executed after
     *   loadBytes() completes
     *   @param [errorCallback] function to be executed if
     *   there is an error
     *   @return an object whose 'bytes' property will be
     *   the loaded buffer
     */
    function loadBytes(
        file: string,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): object;

    /**
     *   Method for executing an HTTP GET request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'GET'). The 'binary'
     *   datatype will return a Blob object, and the
     *   'arrayBuffer' datatype will return an ArrayBuffer
     *   which can be used to initialize typed arrays (such
     *   as Uint8Array).
     *   @param path name of the file or url to load
     *   @param [datatype] "json", "jsonp", "binary",
     *   "arrayBuffer", "xml", or "text"
     *   @param [data] param data passed sent with request
     *   @param [callback] function to be executed after
     *   httpGet() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     *   @return A promise that resolves with the data when
     *   the operation completes successfully or rejects
     *   with the error after one occurs.
     */
    function httpGet(
        path: string,
        datatype?: string,
        data?: object | boolean,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP GET request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'GET'). The 'binary'
     *   datatype will return a Blob object, and the
     *   'arrayBuffer' datatype will return an ArrayBuffer
     *   which can be used to initialize typed arrays (such
     *   as Uint8Array).
     *   @param path name of the file or url to load
     *   @param data param data passed sent with request
     *   @param [callback] function to be executed after
     *   httpGet() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function httpGet(
        path: string,
        data: object | boolean,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP GET request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'GET'). The 'binary'
     *   datatype will return a Blob object, and the
     *   'arrayBuffer' datatype will return an ArrayBuffer
     *   which can be used to initialize typed arrays (such
     *   as Uint8Array).
     *   @param path name of the file or url to load
     *   @param callback function to be executed after
     *   httpGet() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function httpGet(
        path: string,
        callback: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP POST request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'POST').
     *   @param path name of the file or url to load
     *   @param [datatype] "json", "jsonp", "xml", or
     *   "text". If omitted, httpPost() will guess.
     *   @param [data] param data passed sent with request
     *   @param [callback] function to be executed after
     *   httpPost() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     *   @return A promise that resolves with the data when
     *   the operation completes successfully or rejects
     *   with the error after one occurs.
     */
    function httpPost(
        path: string,
        datatype?: string,
        data?: object | boolean,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP POST request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'POST').
     *   @param path name of the file or url to load
     *   @param data param data passed sent with request
     *   @param [callback] function to be executed after
     *   httpPost() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function httpPost(
        path: string,
        data: object | boolean,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP POST request. If data
     *   type is not specified, p5 will try to guess based
     *   on the URL, defaulting to text. This is equivalent
     *   to calling httpDo(path, 'POST').
     *   @param path name of the file or url to load
     *   @param callback function to be executed after
     *   httpPost() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function httpPost(
        path: string,
        callback: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP request. If data type
     *   is not specified, p5 will try to guess based on
     *   the URL, defaulting to text. For more advanced
     *   use, you may also pass in the path as the first
     *   argument and a object as the second argument, the
     *   signature follows the one specified in the Fetch
     *   API specification. This method is suitable for
     *   fetching files up to size of 64MB when "GET" is
     *   used.
     *   @param path name of the file or url to load
     *   @param [method] either "GET", "POST", or "PUT",
     *   defaults to "GET"
     *   @param [datatype] "json", "jsonp", "xml", or
     *   "text"
     *   @param [data] param data passed sent with request
     *   @param [callback] function to be executed after
     *   httpGet() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     *   @return A promise that resolves with the data when
     *   the operation completes successfully or rejects
     *   with the error after one occurs.
     */
    function httpDo(
        path: string,
        method?: string,
        datatype?: string,
        data?: object,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;

    /**
     *   Method for executing an HTTP request. If data type
     *   is not specified, p5 will try to guess based on
     *   the URL, defaulting to text. For more advanced
     *   use, you may also pass in the path as the first
     *   argument and a object as the second argument, the
     *   signature follows the one specified in the Fetch
     *   API specification. This method is suitable for
     *   fetching files up to size of 64MB when "GET" is
     *   used.
     *   @param path name of the file or url to load
     *   @param options Request object options as
     *   documented in the "fetch" API reference
     *   @param [callback] function to be executed after
     *   httpGet() completes, data is passed in as first
     *   argument
     *   @param [errorCallback] function to be executed if
     *   there is an error, response is passed in as first
     *   argument
     */
    function httpDo(
        path: string,
        options: object,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): Promise<any>;
    function createWriter(name: string, extension?: string): p5.PrintWriter;

    /**
     *   Saves a given element(image, text, json, csv, wav,
     *   or html) to the client's computer. The first
     *   parameter can be a pointer to element we want to
     *   save. The element can be one of p5.Element,an
     *   Array of Strings, an Array of JSON, a JSON object,
     *   a p5.Table , a p5.Image, or a p5.SoundFile
     *   (requires p5.sound). The second parameter is a
     *   filename (including extension).The third parameter
     *   is for options specific to this type of object.
     *   This method will save a file that fits the given
     *   parameters. If it is called without specifying an
     *   element, by default it will save the whole canvas
     *   as an image file. You can optionally specify a
     *   filename as the first parameter in such a case.
     *   Note that it is not recommended to call this
     *   method within draw, as it will open a new save
     *   dialog on every render.
     *   @param [objectOrFilename] If filename is provided,
     *   will save canvas as an image with either png or
     *   jpg extension depending on the filename. If object
     *   is provided, will save depending on the object and
     *   filename (see examples above).
     *   @param [filename] If an object is provided as the
     *   first parameter, then the second parameter
     *   indicates the filename, and should include an
     *   appropriate file extension (see examples above).
     *   @param [options] Additional options depend on
     *   filetype. For example, when saving JSON, true
     *   indicates that the output will be optimized for
     *   filesize, rather than readability.
     */
    function save(objectOrFilename?: object | string, filename?: string, options?: boolean | string): void;

    /**
     *   Writes the contents of an Array or a JSON object
     *   to a .json file. The file saving process and
     *   location of the saved file will vary between web
     *   browsers.
     *   @param [optimize] If true, removes line breaks and
     *   spaces from the output file to optimize filesize
     *   (but not readability).
     */
    function saveJSON(json: any[] | object, filename: string, optimize?: boolean): void;

    /**
     *   Writes an array of Strings to a text file, one
     *   line per String. The file saving process and
     *   location of the saved file will vary between web
     *   browsers.
     *   @param list string array to be written
     *   @param filename filename for output
     *   @param [extension] the filename's extension
     *   @param [isCRLF] if true, change line-break to CRLF
     */
    function saveStrings(list: string[], filename: string, extension?: string, isCRLF?: boolean): void;

    /**
     *   Writes the contents of a Table object to a file.
     *   Defaults to a text file with
     *   comma-separated-values ('csv') but can also use
     *   tab separation ('tsv'), or generate an HTML table
     *   ('html'). The file saving process and location of
     *   the saved file will vary between web browsers.
     *   @param Table the Table object to save to a file
     *   @param filename the filename to which the Table
     *   should be saved
     *   @param [options] can be one of "tsv", "csv", or
     *   "html"
     */
    function saveTable(Table: p5.Table, filename: string, options?: string): void;

    /**
     *   Calculates the absolute value of a number. A
     *   number's absolute value is its distance from zero
     *   on the number line. -5 and 5 are both five units
     *   away from zero, so calling abs(-5) and abs(5) both
     *   return 5. The absolute value of a number is always
     *   positive.
     *   @param n number to compute.
     *   @return absolute value of given number.
     */
    function abs(n: number): number;

    /**
     *   Calculates the closest integer value that is
     *   greater than or equal to the parameter's value.
     *   For example, calling ceil(9.03) returns the value
     *   10.
     *   @param n number to round up.
     *   @return rounded up number.
     */
    function ceil(n: number): number;

    /**
     *   Constrains a number between a minimum and maximum
     *   value.
     *   @param n number to constrain.
     *   @param low minimum limit.
     *   @param high maximum limit.
     *   @return constrained number.
     */
    function constrain(n: number, low: number, high: number): number;

    /**
     *   Calculates the distance between two points. The
     *   version of dist() with four parameters calculates
     *   distance in two dimensions.
     *
     *   The version of dist() with six parameters
     *   calculates distance in three dimensions.
     *
     *   Use p5.Vector.dist() to calculate the distance
     *   between two p5.Vector objects.
     *   @param x1 x-coordinate of the first point.
     *   @param y1 y-coordinate of the first point.
     *   @param x2 x-coordinate of the second point.
     *   @param y2 y-coordinate of the second point.
     *   @return distance between the two points.
     */
    function dist(x1: number, y1: number, x2: number, y2: number): number;

    /**
     *   Calculates the distance between two points. The
     *   version of dist() with four parameters calculates
     *   distance in two dimensions.
     *
     *   The version of dist() with six parameters
     *   calculates distance in three dimensions.
     *
     *   Use p5.Vector.dist() to calculate the distance
     *   between two p5.Vector objects.
     *   @param x1 x-coordinate of the first point.
     *   @param y1 y-coordinate of the first point.
     *   @param z1 z-coordinate of the first point.
     *   @param x2 x-coordinate of the second point.
     *   @param y2 y-coordinate of the second point.
     *   @param z2 z-coordinate of the second point.
     *   @return distance between the two points.
     */
    function dist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

    /**
     *   Returns Euler's number e (2.71828...) raised to
     *   the power of the n parameter.
     *   @param n exponent to raise.
     *   @return e^n
     */
    function exp(n: number): number;

    /**
     *   Calculates the closest integer value that is less
     *   than or equal to the value of the n parameter.
     *   @param n number to round down.
     *   @return rounded down number.
     */
    function floor(n: number): number;

    /**
     *   Calculates a number between two numbers at a
     *   specific increment. The amt parameter is the
     *   amount to interpolate between the two numbers. 0.0
     *   is equal to the first number, 0.1 is very near the
     *   first number, 0.5 is half-way in between, and 1.0
     *   is equal to the second number. The lerp() function
     *   is convenient for creating motion along a straight
     *   path and for drawing dotted lines. If the value of
     *   amt is less than 0 or more than 1, lerp() will
     *   return a number outside of the original interval.
     *   For example, calling lerp(0, 10, 1.5) will return
     *   15.
     *   @param start first value.
     *   @param stop second value.
     *   @param amt number.
     *   @return lerped value.
     */
    function lerp(start: number, stop: number, amt: number): number;

    /**
     *   Calculates the natural logarithm (the base-e
     *   logarithm) of a number. This function expects the
     *   n parameter to be a value greater than 0.0.
     *   @param n number greater than 0.
     *   @return natural logarithm of n.
     */
    function log(n: number): number;

    /**
     *   Calculates the magnitude, or length, of a vector.
     *   A vector is like an arrow pointing in space.
     *   Vectors are commonly used for programming motion.
     *   Vectors don't have a "start" position because the
     *   same arrow can be drawn anywhere. A vector's
     *   magnitude can be thought of as the distance from
     *   the origin (0, 0) to its tip at (x, y). mag(x, y)
     *   is a shortcut for calling dist(0, 0, x, y).
     *   @param x first component.
     *   @param y second component.
     *   @return magnitude of vector from (0,0) to (x,y).
     */
    function mag(x: number, y: number): number;

    /**
     *   Re-maps a number from one range to another. For
     *   example, calling map(2, 0, 10, 0, 100) returns 20.
     *   The first three arguments set the original value
     *   to 2 and the original range from 0 to 10. The last
     *   two arguments set the target range from 0 to 100.
     *   20's position in the target range [0, 100] is
     *   proportional to 2's position in the original range
     *   [0, 10].
     *   @param value the incoming value to be converted.
     *   @param start1 lower bound of the value's current
     *   range.
     *   @param stop1 upper bound of the value's current
     *   range.
     *   @param start2 lower bound of the value's target
     *   range.
     *   @param stop2 upper bound of the value's target
     *   range.
     *   @param [withinBounds] constrain the value to the
     *   newly mapped range.
     *   @return remapped number.
     */
    function map(
        value: number,
        start1: number,
        stop1: number,
        start2: number,
        stop2: number,
        withinBounds?: boolean
    ): number;

    /**
     *   Returns the largest value in a sequence of
     *   numbers. The version of max() with one parameter
     *   interprets it as an array of numbers and returns
     *   the largest number.
     *
     *   The version of max() with two or more parameters
     *   interprets them as individual numbers and returns
     *   the largest number.
     *   @param n0 first number to compare.
     *   @param n1 second number to compare.
     *   @return maximum number.
     */
    function max(n0: number, n1: number): number;

    /**
     *   Returns the largest value in a sequence of
     *   numbers. The version of max() with one parameter
     *   interprets it as an array of numbers and returns
     *   the largest number.
     *
     *   The version of max() with two or more parameters
     *   interprets them as individual numbers and returns
     *   the largest number.
     *   @param nums numbers to compare.
     */
    function max(nums: number[]): number;

    /**
     *   Returns the smallest value in a sequence of
     *   numbers. The version of min() with one parameter
     *   interprets it as an array of numbers and returns
     *   the smallest number.
     *
     *   The version of min() with two or more parameters
     *   interprets them as individual numbers and returns
     *   the smallest number.
     *   @param n0 first number to compare.
     *   @param n1 second number to compare.
     *   @return minimum number.
     */
    function min(n0: number, n1: number): number;

    /**
     *   Returns the smallest value in a sequence of
     *   numbers. The version of min() with one parameter
     *   interprets it as an array of numbers and returns
     *   the smallest number.
     *
     *   The version of min() with two or more parameters
     *   interprets them as individual numbers and returns
     *   the smallest number.
     *   @param nums numbers to compare.
     */
    function min(nums: number[]): number;

    /**
     *   Maps a number from one range to a value between 0
     *   and 1. For example, norm(2, 0, 10) returns 0.2.
     *   2's position in the original range [0, 10] is
     *   proportional to 0.2's position in the range [0,
     *   1]. This is equivalent to calling map(2, 0, 10, 0,
     *   1).
     *
     *   Numbers outside of the original range are not
     *   constrained between 0 and 1. Out-of-range values
     *   are often intentional and useful.
     *   @param value incoming value to be normalized.
     *   @param start lower bound of the value's current
     *   range.
     *   @param stop upper bound of the value's current
     *   range.
     *   @return normalized number.
     */
    function norm(value: number, start: number, stop: number): number;

    /**
     *   Calculates exponential expressions such as 2^3.
     *   For example, pow(2, 3) is equivalent to the
     *   expression 2 × 2 × 2. pow(2, -3) is equivalent to
     *   1 ÷ (2 × 2 × 2).
     *   @param n base of the exponential expression.
     *   @param e power by which to raise the base.
     *   @return n^e.
     */
    function pow(n: number, e: number): number;

    /**
     *   Calculates the integer closest to the n parameter.
     *   For example, round(133.8) returns the value 134.
     *   @param n number to round.
     *   @param [decimals] number of decimal places to
     *   round to, default is 0.
     *   @return rounded number.
     */
    function round(n: number, decimals?: number): number;

    /**
     *   Squares a number, which means multiplying the
     *   number by itself. The value returned is always a
     *   positive number. For example, sq(3) evaluates 3 ×
     *   3 which is 9. sq(-3) evaluates -3 × -3 which is
     *   also 9. Multiplying two negative numbers produces
     *   a positive number.
     *   @param n number to square.
     *   @return squared number.
     */
    function sq(n: number): number;

    /**
     *   Calculates the square root of a number. A number's
     *   square root can be multiplied by itself to produce
     *   the original number. For example, sqrt(9) returns
     *   3 because 3 × 3 = 9. sqrt() always returns a
     *   positive value. sqrt() doesn't work with negative
     *   arguments such as sqrt(-9).
     *   @param n non-negative number to square root.
     *   @return square root of number.
     */
    function sqrt(n: number): number;

    /**
     *   Calculates the fractional part of a number. For
     *   example, fract(12.34) returns 0.34.
     *   @param n number whose fractional part will be
     *   found.
     *   @return fractional part of n.
     */
    function fract(n: number): number;

    /**
     *   Creates a new p5.Vector object. A vector is like
     *   an arrow pointing in space. Vectors have both
     *   magnitude (length) and direction. Calling
     *   createVector() without arguments sets the new
     *   vector's components to 0. p5.Vector objects are
     *   often used to program motion because they simplify
     *   the math. For example, a moving ball has a
     *   position and a velocity. Position describes where
     *   the ball is in space. The ball's position vector
     *   extends from the origin to the ball's center.
     *   Velocity describes the ball's speed and the
     *   direction it's moving. If the ball is moving
     *   straight up, its velocity vector points straight
     *   up. Adding the ball's velocity vector to its
     *   position vector moves it, as in pos.add(vel).
     *   Vector math relies on methods inside the
     *   p5.Vector` class.
     *   @param [x] x component of the vector.
     *   @param [y] y component of the vector.
     *   @param [z] z component of the vector.
     *   @return new p5.Vector object.
     */
    function createVector(x?: number, y?: number, z?: number): p5.Vector;

    /**
     *   Returns random numbers that can be tuned to feel
     *   more organic. The values returned will always be
     *   between 0 and 1. Values returned by random() and
     *   randomGaussian() can change by large amounts
     *   between function calls. By contrast, values
     *   returned by noise() can be made "smooth". Calls to
     *   noise() with similar inputs will produce similar
     *   outputs. noise() is used to create textures,
     *   motion, shapes, terrains, and so on. Ken Perlin
     *   invented noise() while animating the original Tron
     *   film in the 1980s.
     *
     *   noise() returns the same value for a given input
     *   while a sketch is running. It produces different
     *   results each time a sketch runs. The noiseSeed()
     *   function can be used to generate the same sequence
     *   of Perlin noise values each time a sketch runs.
     *
     *   The character of the noise can be adjusted in two
     *   ways. The first way is to scale the inputs.
     *   noise() interprets inputs as coordinates. The
     *   sequence of noise values will be smoother when the
     *   input coordinates are closer. The second way is to
     *   use the noiseDetail() function.
     *
     *   The version of noise() with one parameter computes
     *   noise values in one dimension. This dimension can
     *   be thought of as space, as in noise(x), or time,
     *   as in noise(t).
     *
     *   The version of noise() with two parameters
     *   computes noise values in two dimensions. These
     *   dimensions can be thought of as space, as in
     *   noise(x, y), or space and time, as in noise(x, t).
     *
     *   The version of noise() with three parameters
     *   computes noise values in three dimensions. These
     *   dimensions can be thought of as space, as in
     *   noise(x, y, z), or space and time, as in noise(x,
     *   y, t).
     *   @param x x-coordinate in noise space.
     *   @param [y] y-coordinate in noise space.
     *   @param [z] z-coordinate in noise space.
     *   @return Perlin noise value at specified
     *   coordinates.
     */
    function noise(x: number, y?: number, z?: number): number;

    /**
     *   Adjusts the character of the noise produced by the
     *   noise() function. Perlin noise values are created
     *   by adding layers of noise together. The noise
     *   layers, called octaves, are similar to harmonics
     *   in music. Lower octaves contribute more to the
     *   output signal. They define the overall intensity
     *   of the noise. Higher octaves create finer-grained
     *   details.
     *
     *   By default, noise values are created by combining
     *   four octaves. Each higher octave contributes half
     *   as much (50% less) compared to its predecessor.
     *   noiseDetail() changes the number of octaves and
     *   the falloff amount. For example, calling
     *   noiseDetail(6, 0.25) ensures that noise() will use
     *   six octaves. Each higher octave will contribute
     *   25% as much (75% less) compared to its
     *   predecessor. Falloff values between 0 and 1 are
     *   valid. However, falloff values greater than 0.5
     *   might result in noise values greater than 1.
     *   @param lod number of octaves to be used by the
     *   noise.
     *   @param falloff falloff factor for each octave.
     */
    function noiseDetail(lod: number, falloff: number): void;

    /**
     *   Sets the seed value for noise(). By default,
     *   noise() produces different results each time a
     *   sketch is run. Calling noiseSeed() with a constant
     *   argument, such as noiseSeed(99), makes noise()
     *   produce the same results each time a sketch is
     *   run.
     *   @param seed seed value.
     */
    function noiseSeed(seed: number): void;

    /**
     *   Sets the seed value for random() and
     *   randomGaussian(). By default, random() and
     *   randomGaussian() produce different results each
     *   time a sketch is run. Calling randomSeed() with a
     *   constant argument, such as randomSeed(99), makes
     *   these functions produce the same results each time
     *   a sketch is run.
     *   @param seed seed value.
     */
    function randomSeed(seed: number): void;

    /**
     *   Returns a random number or a random element from
     *   an array. random() follows uniform distribution,
     *   which means that all outcomes are equally likely.
     *   When random() is used to generate numbers, all
     *   numbers in the output range are equally likely to
     *   be returned. When random() is used to select
     *   elements from an array, all elements are equally
     *   likely to be chosen.
     *
     *   By default, random() produces different results
     *   each time a sketch runs. The randomSeed() function
     *   can be used to generate the same sequence of
     *   numbers or choices each time a sketch runs.
     *
     *   The version of random() with no parameters returns
     *   a random number from 0 up to but not including 1.
     *
     *   The version of random() with one parameter works
     *   one of two ways. If the argument passed is a
     *   number, random() returns a random number from 0 up
     *   to but not including the number. For example,
     *   calling random(5) returns values between 0 and 5.
     *   If the argument passed is an array, random()
     *   returns a random element from that array. For
     *   example, calling random(['🦁', '🐯', '🐻'])
     *   returns either a lion, tiger, or bear emoji.
     *
     *   The version of random() with two parameters
     *   returns a random number from a given range. The
     *   arguments passed set the range's lower and upper
     *   bounds. For example, calling random(-5, 10.2)
     *   returns values from -5 up to but not including
     *   10.2.
     *   @param [min] lower bound (inclusive).
     *   @param [max] upper bound (exclusive).
     *   @return random number.
     */
    function random(min?: number, max?: number): number;

    /**
     *   Returns a random number or a random element from
     *   an array. random() follows uniform distribution,
     *   which means that all outcomes are equally likely.
     *   When random() is used to generate numbers, all
     *   numbers in the output range are equally likely to
     *   be returned. When random() is used to select
     *   elements from an array, all elements are equally
     *   likely to be chosen.
     *
     *   By default, random() produces different results
     *   each time a sketch runs. The randomSeed() function
     *   can be used to generate the same sequence of
     *   numbers or choices each time a sketch runs.
     *
     *   The version of random() with no parameters returns
     *   a random number from 0 up to but not including 1.
     *
     *   The version of random() with one parameter works
     *   one of two ways. If the argument passed is a
     *   number, random() returns a random number from 0 up
     *   to but not including the number. For example,
     *   calling random(5) returns values between 0 and 5.
     *   If the argument passed is an array, random()
     *   returns a random element from that array. For
     *   example, calling random(['🦁', '🐯', '🐻'])
     *   returns either a lion, tiger, or bear emoji.
     *
     *   The version of random() with two parameters
     *   returns a random number from a given range. The
     *   arguments passed set the range's lower and upper
     *   bounds. For example, calling random(-5, 10.2)
     *   returns values from -5 up to but not including
     *   10.2.
     *   @param choices array to choose from.
     *   @return random element from the array.
     */
    function random(choices: any[]): any;

    /**
     *   Returns a random number fitting a Gaussian, or
     *   normal, distribution. Normal distributions look
     *   like bell curves when plotted. Values from a
     *   normal distribution cluster around a central value
     *   called the mean. The cluster's standard deviation
     *   describes its spread. By default, randomGaussian()
     *   produces different results each time a sketch
     *   runs. The randomSeed() function can be used to
     *   generate the same sequence of numbers each time a
     *   sketch runs.
     *
     *   There's no minimum or maximum value that
     *   randomGaussian() might return. Values far from the
     *   mean are very unlikely and values near the mean
     *   are very likely.
     *
     *   The version of randomGaussian() with no parameters
     *   returns values with a mean of 0 and standard
     *   deviation of 1.
     *
     *   The version of randomGaussian() with one parameter
     *   interprets the argument passed as the mean. The
     *   standard deviation is 1.
     *
     *   The version of randomGaussian() with two
     *   parameters interprets the first argument passed as
     *   the mean and the second as the standard deviation.
     *   @param [mean] mean.
     *   @param [sd] standard deviation.
     *   @return random number.
     */
    function randomGaussian(mean?: number, sd?: number): number;

    /**
     *   The inverse of cos(), returns the arc cosine of a
     *   value. This function expects arguments in the
     *   range -1 to 1. By default, acos() returns values
     *   in the range 0 to π (about 3.14). If the
     *   angleMode() is DEGREES, then values are returned
     *   in the range 0 to 180.
     *   @param value value whose arc cosine is to be
     *   returned.
     *   @return arc cosine of the given value.
     */
    function acos(value: number): number;

    /**
     *   The inverse of sin(), returns the arc sine of a
     *   value. This function expects input values in the
     *   range of -1 to 1. By default, asin() returns
     *   values in the range -π ÷ 2 (about -1.57) to π ÷ 2
     *   (about 1.57). If the angleMode() is DEGREES then
     *   values are returned in the range -90 to 90.
     *   @param value value whose arc sine is to be
     *   returned.
     *   @return arc sine of the given value.
     */
    function asin(value: number): number;

    /**
     *   The inverse of tan(), returns the arc tangent of a
     *   value. This function expects input values in the
     *   range of -Infinity to Infinity. By default, atan()
     *   returns values in the range -π ÷ 2 (about -1.57)
     *   to π ÷ 2 (about 1.57). If the angleMode() is
     *   DEGREES then values are returned in the range -90
     *   to 90.
     *   @param value value whose arc tangent is to be
     *   returned.
     *   @return arc tangent of the given value.
     */
    function atan(value: number): number;

    /**
     *   Calculates the angle formed by a specified point,
     *   the origin, and the positive x-axis. By default,
     *   atan2() returns values in the range -π (about
     *   -3.14) to π (3.14). If the angleMode() is DEGREES,
     *   then values are returned in the range -180 to 180.
     *   The atan2() function is most often used for
     *   orienting geometry to the mouse's position. Note:
     *   The y-coordinate of the point is the first
     *   parameter and the x-coordinate is the second
     *   parameter.
     *   @param y y-coordinate of the point.
     *   @param x x-coordinate of the point.
     *   @return arc tangent of the given point.
     */
    function atan2(y: number, x: number): number;

    /**
     *   Calculates the cosine of an angle. cos() is useful
     *   for many geometric tasks in creative coding. The
     *   values returned oscillate between -1 and 1 as the
     *   input angle increases. cos() takes into account
     *   the current angleMode.
     *   @param angle the angle.
     *   @return cosine of the angle.
     */
    function cos(angle: number): number;

    /**
     *   Calculates the sine of an angle. sin() is useful
     *   for many geometric tasks in creative coding. The
     *   values returned oscillate between -1 and 1 as the
     *   input angle increases. sin() takes into account
     *   the current angleMode.
     *   @param angle the angle.
     *   @return sine of the angle.
     */
    function sin(angle: number): number;

    /**
     *   Calculates the tangent of an angle. tan() is
     *   useful for many geometric tasks in creative
     *   coding. The values returned range from -Infinity
     *   to Infinity and repeat periodically as the input
     *   angle increases. tan() takes into account the
     *   current angleMode.
     *   @param angle the angle.
     *   @return tangent of the angle.
     */
    function tan(angle: number): number;

    /**
     *   Converts an angle measurement in radians to its
     *   corresponding value in degrees. Degrees and
     *   radians are two ways of measuring the same thing.
     *   There are 360 degrees in a circle and 2 × π (about
     *   6.28) radians in a circle. For example, 90° = π ÷
     *   2 (about 1.57) radians. This function doesn't take
     *   into account the current angleMode().
     *   @param radians radians value to convert to
     *   degrees.
     *   @return converted angle.
     */
    function degrees(radians: number): number;

    /**
     *   Converts an angle measurement in degrees to its
     *   corresponding value in radians. Degrees and
     *   radians are two ways of measuring the same thing.
     *   There are 360 degrees in a circle and 2 × π (about
     *   6.28) radians in a circle. For example, 90° = π ÷
     *   2 (about 1.57) radians. This function doesn't take
     *   into account the current angleMode().
     *   @param degrees degree value to convert to radians.
     *   @return converted angle.
     */
    function radians(degrees: number): number;

    /**
     *   Changes the way trigonometric functions interpret
     *   angle values. By default, the mode is RADIANS.
     *   Calling angleMode() with no arguments returns
     *   current angle mode.
     *   @param mode either RADIANS or DEGREES.
     */
    function angleMode(mode: p5.ANGLE_MODE): void;

    /**
     *   Changes the way trigonometric functions interpret
     *   angle values. By default, the mode is RADIANS.
     *   Calling angleMode() with no arguments returns
     *   current angle mode.
     *   @return mode either RADIANS or DEGREES
     */
    function angleMode(): p5.UNKNOWN_P5_CONSTANT;

    /**
     *   Sets the current alignment for drawing text.
     *   Accepts two arguments: horizAlign (LEFT, CENTER,
     *   or RIGHT) and vertAlign (TOP, BOTTOM, CENTER, or
     *   BASELINE). The horizAlign parameter is in
     *   reference to the x value of the text() function,
     *   while the vertAlign parameter is in reference to
     *   the y value.
     *
     *   So if you write textAlign(LEFT), you are aligning
     *   the left edge of your text to the x value you give
     *   in text(). If you write textAlign(RIGHT, TOP), you
     *   are aligning the right edge of your text to the x
     *   value and the top edge of the text to the y value.
     *   @param horizAlign horizontal alignment, either
     *   LEFT, CENTER, or RIGHT
     *   @param [vertAlign] vertical alignment, either TOP,
     *   BOTTOM, CENTER, or BASELINE
     *   @chainable
     */
    function textAlign(horizAlign: p5.HORIZ_ALIGN, vertAlign?: p5.VERT_ALIGN): p5;

    /**
     *   Sets the current alignment for drawing text.
     *   Accepts two arguments: horizAlign (LEFT, CENTER,
     *   or RIGHT) and vertAlign (TOP, BOTTOM, CENTER, or
     *   BASELINE). The horizAlign parameter is in
     *   reference to the x value of the text() function,
     *   while the vertAlign parameter is in reference to
     *   the y value.
     *
     *   So if you write textAlign(LEFT), you are aligning
     *   the left edge of your text to the x value you give
     *   in text(). If you write textAlign(RIGHT, TOP), you
     *   are aligning the right edge of your text to the x
     *   value and the top edge of the text to the y value.
     */
    function textAlign(): object;

    /**
     *   Sets/gets the spacing, in pixels, between lines of
     *   text. This setting will be used in all subsequent
     *   calls to the text() function.
     *   @param leading the size in pixels for spacing
     *   between lines
     *   @chainable
     */
    function textLeading(leading: number): p5;

    /**
     *   Sets/gets the spacing, in pixels, between lines of
     *   text. This setting will be used in all subsequent
     *   calls to the text() function.
     */
    function textLeading(): number;

    /**
     *   Sets/gets the current font size. This size will be
     *   used in all subsequent calls to the text()
     *   function. Font size is measured in pixels.
     *   @param theSize the size of the letters in units of
     *   pixels
     *   @chainable
     */
    function textSize(theSize: number): p5;

    /**
     *   Sets/gets the current font size. This size will be
     *   used in all subsequent calls to the text()
     *   function. Font size is measured in pixels.
     */
    function textSize(): number;

    /**
     *   Sets/gets the style of the text for system fonts
     *   to NORMAL, ITALIC, BOLD or BOLDITALIC. Note: this
     *   may be is overridden by CSS styling. For
     *   non-system fonts (opentype, truetype, etc.) please
     *   load styled fonts instead.
     *   @param theStyle styling for text, either NORMAL,
     *   ITALIC, BOLD or BOLDITALIC
     *   @chainable
     */
    function textStyle(theStyle: p5.THE_STYLE): p5;

    /**
     *   Sets/gets the style of the text for system fonts
     *   to NORMAL, ITALIC, BOLD or BOLDITALIC. Note: this
     *   may be is overridden by CSS styling. For
     *   non-system fonts (opentype, truetype, etc.) please
     *   load styled fonts instead.
     */
    function textStyle(): string;

    /**
     *   Calculates and returns the width of any character
     *   or the maximum width of any paragrph.
     *   @param theText the String of characters to measure
     *   @return the calculated width
     */
    function textWidth(theText: string): number;

    /**
     *   Returns the ascent of the current font at its
     *   current size. The ascent represents the distance,
     *   in pixels, of the tallest character above the
     *   baseline.
     */
    function textAscent(): number;

    /**
     *   Returns the descent of the current font at its
     *   current size. The descent represents the distance,
     *   in pixels, of the character with the longest
     *   descender below the baseline.
     */
    function textDescent(): number;

    /**
     *   Specifies how lines of text are wrapped within a
     *   text box. This requires a max-width set on the
     *   text area, specified in text() as parameter x2.
     *   WORD wrap style only breaks lines at spaces. A
     *   single string without spaces that exceeds the
     *   boundaries of the canvas or text area is not
     *   truncated, and will overflow the desired area,
     *   disappearing at the canvas edge.
     *
     *   CHAR wrap style breaks lines wherever needed to
     *   stay within the text box.
     *
     *   WORD is the default wrap style, and both styles
     *   will still break lines at any line breaks (\n)
     *   specified in the original text. The text area
     *   max-height parameter (y2) also still applies to
     *   wrapped text in both styles, lines of text that do
     *   not fit within the text area will not be drawn to
     *   the screen.
     *   @param wrapStyle text wrapping style, either WORD
     *   or CHAR
     *   @return wrapStyle
     */
    function textWrap(wrapStyle: p5.WRAP_STYLE): string;

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
    function loadFont(
        path: string,
        successCallback?: (...args: any[]) => any,
        failureCallback?: (...args: any[]) => any
    ): p5.Font;

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
    function text(
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
    function textFont(): object;

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
    function textFont(font: object | string, size?: number): p5;

    /**
     *   Adds a value to the end of an array. Extends the
     *   length of the array by one. Maps to Array.push().
     *   @param array Array to append
     *   @param value to be added to the Array
     *   @return the array that was appended to
     */
    function append(array: any[], value: any): any[];

    /**
     *   Copies an array (or part of an array) to another
     *   array. The src array is copied to the dst array,
     *   beginning at the position specified by srcPosition
     *   and into the position specified by dstPosition.
     *   The number of elements to copy is determined by
     *   length. Note that copying values overwrites
     *   existing values in the destination array. To
     *   append values instead of overwriting them, use
     *   concat(). The simplified version with only two
     *   arguments, arrayCopy(src, dst), copies an entire
     *   array to another of the same size. It is
     *   equivalent to arrayCopy(src, 0, dst, 0,
     *   src.length).
     *
     *   Using this function is far more efficient for
     *   copying array data than iterating through a for()
     *   loop and copying each element individually.
     *   @param src the source Array
     *   @param srcPosition starting position in the source
     *   Array
     *   @param dst the destination Array
     *   @param dstPosition starting position in the
     *   destination Array
     *   @param length number of Array elements to be
     *   copied
     */
    function arrayCopy(src: any[], srcPosition: number, dst: any[], dstPosition: number, length: number): void;

    /**
     *   Copies an array (or part of an array) to another
     *   array. The src array is copied to the dst array,
     *   beginning at the position specified by srcPosition
     *   and into the position specified by dstPosition.
     *   The number of elements to copy is determined by
     *   length. Note that copying values overwrites
     *   existing values in the destination array. To
     *   append values instead of overwriting them, use
     *   concat(). The simplified version with only two
     *   arguments, arrayCopy(src, dst), copies an entire
     *   array to another of the same size. It is
     *   equivalent to arrayCopy(src, 0, dst, 0,
     *   src.length).
     *
     *   Using this function is far more efficient for
     *   copying array data than iterating through a for()
     *   loop and copying each element individually.
     *   @param src the source Array
     *   @param dst the destination Array
     *   @param [length] number of Array elements to be
     *   copied
     */
    function arrayCopy(src: any[], dst: any[], length?: number): void;

    /**
     *   Concatenates two arrays, maps to Array.concat().
     *   Does not modify the input arrays.
     *   @param a first Array to concatenate
     *   @param b second Array to concatenate
     *   @return concatenated array
     */
    function concat(a: any[], b: any[]): any[];

    /**
     *   Reverses the order of an array, maps to
     *   Array.reverse()
     *   @param list Array to reverse
     *   @return the reversed list
     */
    function reverse(list: any[]): any[];

    /**
     *   Decreases an array by one element and returns the
     *   shortened array, maps to Array.pop().
     *   @param list Array to shorten
     *   @return shortened Array
     */
    function shorten(list: any[]): any[];

    /**
     *   Randomizes the order of the elements of an array.
     *   Implements  Fisher-Yates Shuffle Algorithm.
     *   @param array Array to shuffle
     *   @param [bool] modify passed array
     *   @return shuffled Array
     */
    function shuffle(array: any[], bool?: boolean): any[];

    /**
     *   Sorts an array of numbers from smallest to
     *   largest, or puts an array of words in alphabetical
     *   order. The original array is not modified; a
     *   re-ordered array is returned. The count parameter
     *   states the number of elements to sort. For
     *   example, if there are 12 elements in an array and
     *   count is set to 5, only the first 5 elements in
     *   the array will be sorted.
     *   @param list Array to sort
     *   @param [count] number of elements to sort,
     *   starting from 0
     *   @return the sorted list
     */
    function sort(list: any[], count?: number): any[];

    /**
     *   Inserts a value or an array of values into an
     *   existing array. The first parameter specifies the
     *   initial array to be modified, and the second
     *   parameter defines the data to be inserted. The
     *   third parameter is an index value which specifies
     *   the array position from which to insert data.
     *   (Remember that array index numbering starts at
     *   zero, so the first position is 0, the second
     *   position is 1, and so on.)
     *   @param list Array to splice into
     *   @param value value to be spliced in
     *   @param position in the array from which to insert
     *   data
     *   @return the list
     */
    function splice(list: any[], value: any, position: number): any[];

    /**
     *   Extracts an array of elements from an existing
     *   array. The list parameter defines the array from
     *   which the elements will be copied, and the start
     *   and count parameters specify which elements to
     *   extract. If no count is given, elements will be
     *   extracted from the start to the end of the array.
     *   When specifying the start, remember that the first
     *   array element is 0. This function does not change
     *   the source array.
     *   @param list Array to extract from
     *   @param start position to begin
     *   @param [count] number of values to extract
     *   @return Array of extracted elements
     */
    function subset(list: any[], start: number, count?: number): any[];

    /**
     *   Converts a string to its floating point
     *   representation. The contents of a string must
     *   resemble a number, or NaN (not a number) will be
     *   returned. For example, float("1234.56") evaluates
     *   to 1234.56, but float("giraffe") will return NaN.
     *   When an array of values is passed in, then an
     *   array of floats of the same length is returned.
     *   @param str float string to parse
     *   @return floating point representation of string
     */
    function float(str: string): number;

    /**
     *   Converts a boolean, string, or float to its
     *   integer representation. When an array of values is
     *   passed in, then an int array of the same length is
     *   returned.
     *   @param n value to parse
     *   @param [radix] the radix to convert to (default:
     *   10)
     *   @return integer representation of value
     */
    function int(n: string | boolean | number, radix?: number): number;

    /**
     *   Converts a boolean, string, or float to its
     *   integer representation. When an array of values is
     *   passed in, then an int array of the same length is
     *   returned.
     *   @param ns values to parse
     *   @param [radix] the radix to convert to (default:
     *   10)
     *   @return integer representation of values
     */
    function int(ns: any[], radix?: number): number[];

    /**
     *   Converts a boolean, string or number to its string
     *   representation. When an array of values is passed
     *   in, then an array of strings of the same length is
     *   returned.
     *   @param n value to parse
     *   @return string representation of value
     */
    function str(n: string | boolean | number | any[]): string;

    /**
     *   Converts a number or string to its boolean
     *   representation. For a number, any non-zero value
     *   (positive or negative) evaluates to true, while
     *   zero evaluates to false. For a string, the value
     *   "true" evaluates to true, while any other value
     *   evaluates to false. When an array of number or
     *   string values is passed in, then a array of
     *   booleans of the same length is returned.
     *   @param n value to parse
     *   @return boolean representation of value
     */
    function boolean(n: string | boolean | number | any[]): boolean;

    /**
     *   Converts a number, string representation of a
     *   number, or boolean to its byte representation. A
     *   byte can be only a whole number between -128 and
     *   127, so when a value outside of this range is
     *   converted, it wraps around to the corresponding
     *   byte representation. When an array of number,
     *   string or boolean values is passed in, then an
     *   array of bytes the same length is returned.
     *   @param n value to parse
     *   @return byte representation of value
     */
    function byte(n: string | boolean | number): number;

    /**
     *   Converts a number, string representation of a
     *   number, or boolean to its byte representation. A
     *   byte can be only a whole number between -128 and
     *   127, so when a value outside of this range is
     *   converted, it wraps around to the corresponding
     *   byte representation. When an array of number,
     *   string or boolean values is passed in, then an
     *   array of bytes the same length is returned.
     *   @param ns values to parse
     *   @return array of byte representation of values
     */
    function byte(ns: any[]): number[];

    /**
     *   Converts a number or string to its corresponding
     *   single-character string representation. If a
     *   string parameter is provided, it is first parsed
     *   as an integer and then translated into a
     *   single-character string. When an array of number
     *   or string values is passed in, then an array of
     *   single-character strings of the same length is
     *   returned.
     *   @param n value to parse
     *   @return string representation of value
     */
    function char(n: string | number): string;

    /**
     *   Converts a number or string to its corresponding
     *   single-character string representation. If a
     *   string parameter is provided, it is first parsed
     *   as an integer and then translated into a
     *   single-character string. When an array of number
     *   or string values is passed in, then an array of
     *   single-character strings of the same length is
     *   returned.
     *   @param ns values to parse
     *   @return array of string representation of values
     */
    function char(ns: any[]): string[];

    /**
     *   Converts a single-character string to its
     *   corresponding integer representation. When an
     *   array of single-character string values is passed
     *   in, then an array of integers of the same length
     *   is returned.
     *   @param n value to parse
     *   @return integer representation of value
     */
    function unchar(n: string): number;

    /**
     *   Converts a single-character string to its
     *   corresponding integer representation. When an
     *   array of single-character string values is passed
     *   in, then an array of integers of the same length
     *   is returned.
     *   @param ns values to parse
     *   @return integer representation of values
     */
    function unchar(ns: any[]): number[];

    /**
     *   Converts a number to a string in its equivalent
     *   hexadecimal notation. If a second parameter is
     *   passed, it is used to set the number of characters
     *   to generate in the hexadecimal notation. When an
     *   array is passed in, an array of strings in
     *   hexadecimal notation of the same length is
     *   returned.
     *   @param n value to parse
     *   @return hexadecimal string representation of value
     */
    function hex(n: number, digits?: number): string;

    /**
     *   Converts a number to a string in its equivalent
     *   hexadecimal notation. If a second parameter is
     *   passed, it is used to set the number of characters
     *   to generate in the hexadecimal notation. When an
     *   array is passed in, an array of strings in
     *   hexadecimal notation of the same length is
     *   returned.
     *   @param ns array of values to parse
     *   @return hexadecimal string representation of
     *   values
     */
    function hex(ns: number[], digits?: number): string[];

    /**
     *   Converts a string representation of a hexadecimal
     *   number to its equivalent integer value. When an
     *   array of strings in hexadecimal notation is passed
     *   in, an array of integers of the same length is
     *   returned.
     *   @param n value to parse
     *   @return integer representation of hexadecimal
     *   value
     */
    function unhex(n: string): number;

    /**
     *   Converts a string representation of a hexadecimal
     *   number to its equivalent integer value. When an
     *   array of strings in hexadecimal notation is passed
     *   in, an array of integers of the same length is
     *   returned.
     *   @param ns values to parse
     *   @return integer representations of hexadecimal
     *   value
     */
    function unhex(ns: any[]): number[];

    /**
     *   Combines an array of Strings into one String, each
     *   separated by the character(s) used for the
     *   separator parameter. To join arrays of ints or
     *   floats, it's necessary to first convert them to
     *   Strings using nf() or nfs().
     *   @param list array of Strings to be joined
     *   @param separator String to be placed between each
     *   item
     *   @return joined String
     */
    function join(list: any[], separator: string): string;

    /**
     *   This function is used to apply a regular
     *   expression to a piece of text, and return matching
     *   groups (elements found inside parentheses) as a
     *   String array. If there are no matches, a null
     *   value will be returned. If no groups are specified
     *   in the regular expression, but the sequence
     *   matches, an array of length 1 (with the matched
     *   text as the first element of the array) will be
     *   returned. To use the function, first check to see
     *   if the result is null. If the result is null, then
     *   the sequence did not match at all. If the sequence
     *   did match, an array is returned.
     *
     *   If there are groups (specified by sets of
     *   parentheses) in the regular expression, then the
     *   contents of each will be returned in the array.
     *   Element [0] of a regular expression match returns
     *   the entire matching string, and the match groups
     *   start at element [1] (the first group is [1], the
     *   second [2], and so on).
     *   @param str the String to be searched
     *   @param regexp the regexp to be used for matching
     *   @return Array of Strings found
     */
    function match(str: string, regexp: string): string[];

    /**
     *   This function is used to apply a regular
     *   expression to a piece of text, and return a list
     *   of matching groups (elements found inside
     *   parentheses) as a two-dimensional String array. If
     *   there are no matches, a null value will be
     *   returned. If no groups are specified in the
     *   regular expression, but the sequence matches, a
     *   two dimensional array is still returned, but the
     *   second dimension is only of length one. To use the
     *   function, first check to see if the result is
     *   null. If the result is null, then the sequence did
     *   not match at all. If the sequence did match, a 2D
     *   array is returned.
     *
     *   If there are groups (specified by sets of
     *   parentheses) in the regular expression, then the
     *   contents of each will be returned in the array.
     *   Assuming a loop with counter variable i, element
     *   [i][0] of a regular expression match returns the
     *   entire matching string, and the match groups start
     *   at element [i][1] (the first group is [i][1], the
     *   second [i][2], and so on).
     *   @param str the String to be searched
     *   @param regexp the regexp to be used for matching
     *   @return 2d Array of Strings found
     */
    function matchAll(str: string, regexp: string): string[];

    /**
     *   Utility function for formatting numbers into
     *   strings. There are two versions: one for
     *   formatting floats, and one for formatting ints.
     *   The values for the digits, left, and right
     *   parameters should always be positive integers.
     *
     *   (NOTE): Be cautious when using left and right
     *   parameters as it prepends numbers of 0's if the
     *   parameter if greater than the current length of
     *   the number.
     *
     *   For example if number is 123.2 and left parameter
     *   passed is 4 which is greater than length of 123
     *   (integer part) i.e 3 than result will be 0123.2.
     *   Same case for right parameter i.e. if right is 3
     *   than the result will be 123.200.
     *   @param num the Number to format
     *   @param [left] number of digits to the left of the
     *   decimal point
     *   @param [right] number of digits to the right of
     *   the decimal point
     *   @return formatted String
     */
    function nf(num: number | string, left?: number | string, right?: number | string): string;

    /**
     *   Utility function for formatting numbers into
     *   strings. There are two versions: one for
     *   formatting floats, and one for formatting ints.
     *   The values for the digits, left, and right
     *   parameters should always be positive integers.
     *
     *   (NOTE): Be cautious when using left and right
     *   parameters as it prepends numbers of 0's if the
     *   parameter if greater than the current length of
     *   the number.
     *
     *   For example if number is 123.2 and left parameter
     *   passed is 4 which is greater than length of 123
     *   (integer part) i.e 3 than result will be 0123.2.
     *   Same case for right parameter i.e. if right is 3
     *   than the result will be 123.200.
     *   @param nums the Numbers to format
     *   @param [left] number of digits to the left of the
     *   decimal point
     *   @param [right] number of digits to the right of
     *   the decimal point
     *   @return formatted Strings
     */
    function nf(nums: any[], left?: number | string, right?: number | string): string[];

    /**
     *   Utility function for formatting numbers into
     *   strings and placing appropriate commas to mark
     *   units of 1000. There are two versions: one for
     *   formatting ints, and one for formatting an array
     *   of ints. The value for the right parameter should
     *   always be a positive integer.
     *   @param num the Number to format
     *   @param [right] number of digits to the right of
     *   the decimal point
     *   @return formatted String
     */
    function nfc(num: number | string, right?: number | string): string;

    /**
     *   Utility function for formatting numbers into
     *   strings and placing appropriate commas to mark
     *   units of 1000. There are two versions: one for
     *   formatting ints, and one for formatting an array
     *   of ints. The value for the right parameter should
     *   always be a positive integer.
     *   @param nums the Numbers to format
     *   @param [right] number of digits to the right of
     *   the decimal point
     *   @return formatted Strings
     */
    function nfc(nums: any[], right?: number | string): string[];

    /**
     *   Utility function for formatting numbers into
     *   strings. Similar to nf() but puts a "+" in front
     *   of positive numbers and a "-" in front of negative
     *   numbers. There are two versions: one for
     *   formatting floats, and one for formatting ints.
     *   The values for left, and right parameters should
     *   always be positive integers.
     *   @param num the Number to format
     *   @param [left] number of digits to the left of the
     *   decimal point
     *   @param [right] number of digits to the right of
     *   the decimal point
     *   @return formatted String
     */
    function nfp(num: number, left?: number, right?: number): string;

    /**
     *   Utility function for formatting numbers into
     *   strings. Similar to nf() but puts a "+" in front
     *   of positive numbers and a "-" in front of negative
     *   numbers. There are two versions: one for
     *   formatting floats, and one for formatting ints.
     *   The values for left, and right parameters should
     *   always be positive integers.
     *   @param nums the Numbers to format
     *   @param [left] number of digits to the left of the
     *   decimal point
     *   @param [right] number of digits to the right of
     *   the decimal point
     *   @return formatted Strings
     */
    function nfp(nums: number[], left?: number, right?: number): string[];

    /**
     *   Utility function for formatting numbers into
     *   strings. Similar to nf() but puts an additional
     *   "_" (space) in front of positive numbers just in
     *   case to align it with negative numbers which
     *   includes "-" (minus) sign. The main usecase of
     *   nfs() can be seen when one wants to align the
     *   digits (place values) of a non-negative number
     *   with some negative number (See the example to get
     *   a clear picture). There are two versions: one for
     *   formatting float, and one for formatting int.
     *
     *   The values for the digits, left, and right
     *   parameters should always be positive integers.
     *
     *   (IMP): The result on the canvas basically the
     *   expected alignment can vary based on the typeface
     *   you are using.
     *
     *   (NOTE): Be cautious when using left and right
     *   parameters as it prepends numbers of 0's if the
     *   parameter if greater than the current length of
     *   the number.
     *
     *   For example if number is 123.2 and left parameter
     *   passed is 4 which is greater than length of 123
     *   (integer part) i.e 3 than result will be 0123.2.
     *   Same case for right parameter i.e. if right is 3
     *   than the result will be 123.200.
     *   @param num the Number to format
     *   @param [left] number of digits to the left of the
     *   decimal point
     *   @param [right] number of digits to the right of
     *   the decimal point
     *   @return formatted String
     */
    function nfs(num: number, left?: number, right?: number): string;

    /**
     *   Utility function for formatting numbers into
     *   strings. Similar to nf() but puts an additional
     *   "_" (space) in front of positive numbers just in
     *   case to align it with negative numbers which
     *   includes "-" (minus) sign. The main usecase of
     *   nfs() can be seen when one wants to align the
     *   digits (place values) of a non-negative number
     *   with some negative number (See the example to get
     *   a clear picture). There are two versions: one for
     *   formatting float, and one for formatting int.
     *
     *   The values for the digits, left, and right
     *   parameters should always be positive integers.
     *
     *   (IMP): The result on the canvas basically the
     *   expected alignment can vary based on the typeface
     *   you are using.
     *
     *   (NOTE): Be cautious when using left and right
     *   parameters as it prepends numbers of 0's if the
     *   parameter if greater than the current length of
     *   the number.
     *
     *   For example if number is 123.2 and left parameter
     *   passed is 4 which is greater than length of 123
     *   (integer part) i.e 3 than result will be 0123.2.
     *   Same case for right parameter i.e. if right is 3
     *   than the result will be 123.200.
     *   @param nums the Numbers to format
     *   @param [left] number of digits to the left of the
     *   decimal point
     *   @param [right] number of digits to the right of
     *   the decimal point
     *   @return formatted Strings
     */
    function nfs(nums: any[], left?: number, right?: number): string[];

    /**
     *   The split() function maps to String.split(), it
     *   breaks a String into pieces using a character or
     *   string as the delimiter. The delim parameter
     *   specifies the character or characters that mark
     *   the boundaries between each piece. A String[]
     *   array is returned that contains each of the
     *   pieces. The splitTokens() function works in a
     *   similar fashion, except that it splits using a
     *   range of characters instead of a specific
     *   character or sequence.
     *   @param value the String to be split
     *   @param delim the String used to separate the data
     *   @return Array of Strings
     */
    function split(value: string, delim: string): string[];

    /**
     *   The splitTokens() function splits a String at one
     *   or many character delimiters or "tokens." The
     *   delim parameter specifies the character or
     *   characters to be used as a boundary. If no delim
     *   characters are specified, any whitespace character
     *   is used to split. Whitespace characters include
     *   tab (\t), line feed (\n), carriage return (\r),
     *   form feed (\f), and space.
     *   @param value the String to be split
     *   @param [delim] list of individual Strings that
     *   will be used as separators
     *   @return Array of Strings
     */
    function splitTokens(value: string, delim?: string): string[];

    /**
     *   Removes whitespace characters from the beginning
     *   and end of a String. In addition to standard
     *   whitespace characters such as space, carriage
     *   return, and tab, this function also removes the
     *   Unicode "nbsp" character.
     *   @param str a String to be trimmed
     *   @return a trimmed String
     */
    function trim(str: string): string;

    /**
     *   Removes whitespace characters from the beginning
     *   and end of a String. In addition to standard
     *   whitespace characters such as space, carriage
     *   return, and tab, this function also removes the
     *   Unicode "nbsp" character.
     *   @param strs an Array of Strings to be trimmed
     *   @return an Array of trimmed Strings
     */
    function trim(strs: any[]): string[];

    /**
     *   p5.js communicates with the clock on your
     *   computer. The day() function returns the current
     *   day as a value from 1 - 31.
     *   @return the current day
     */
    function day(): number;

    /**
     *   p5.js communicates with the clock on your
     *   computer. The hour() function returns the current
     *   hour as a value from 0 - 23.
     *   @return the current hour
     */
    function hour(): number;

    /**
     *   p5.js communicates with the clock on your
     *   computer. The minute() function returns the
     *   current minute as a value from 0 - 59.
     *   @return the current minute
     */
    function minute(): number;

    /**
     *   Returns the number of milliseconds (thousandths of
     *   a second) since starting the sketch (when setup()
     *   is called). This information is often used for
     *   timing events and animation sequences.
     *   @return the number of milliseconds since starting
     *   the sketch
     */
    function millis(): number;

    /**
     *   p5.js communicates with the clock on your
     *   computer. The month() function returns the current
     *   month as a value from 1 - 12.
     *   @return the current month
     */
    function month(): number;

    /**
     *   p5.js communicates with the clock on your
     *   computer. The second() function returns the
     *   current second as a value from 0 - 59.
     *   @return the current second
     */
    function second(): number;

    /**
     *   p5.js communicates with the clock on your
     *   computer. The year() function returns the current
     *   year as an integer (2014, 2015, 2016, etc).
     *   @return the current year
     */
    function year(): number;

    /**
     *   Starts creating a new p5.Geometry. Subsequent
     *   shapes drawn will be added to the geometry and
     *   then returned when endGeometry() is called. One
     *   can also use buildGeometry() to pass a function
     *   that draws shapes. If you need to draw complex
     *   shapes every frame which don't change over time,
     *   combining them upfront with beginGeometry() and
     *   endGeometry() and then drawing that will run
     *   faster than repeatedly drawing the individual
     *   pieces.
     */
    function beginGeometry(): void;

    /**
     *   Finishes creating a new p5.Geometry that was
     *   started using beginGeometry(). One can also use
     *   buildGeometry() to pass a function that draws
     *   shapes.
     *   @return The model that was built.
     */
    function endGeometry(): p5.Geometry;

    /**
     *   Creates a new p5.Geometry that contains all the
     *   shapes drawn in a provided callback function. The
     *   returned combined shape can then be drawn all at
     *   once using model(). If you need to draw complex
     *   shapes every frame which don't change over time,
     *   combining them with buildGeometry() once and then
     *   drawing that will run faster than repeatedly
     *   drawing the individual pieces.
     *
     *   One can also draw shapes directly between
     *   beginGeometry() and endGeometry() instead of using
     *   a callback function.
     *   @param callback A function that draws shapes.
     *   @return The model that was built from the callback
     *   function.
     */
    function buildGeometry(callback: (...args: any[]) => any): p5.Geometry;

    /**
     *   Clears the resources of a model to free up browser
     *   memory. A model whose resources have been cleared
     *   can still be drawn, but the first time it is drawn
     *   again, it might take longer. This method works on
     *   models generated with buildGeometry() as well as
     *   those loaded from loadModel().
     *   @param The geometry whose resources should be
     *   freed
     */
    function freeGeometry(The: p5.Geometry): void;

    /**
     *   Draw a plane with given a width and height
     *   @param [width] width of the plane
     *   @param [height] height of the plane
     *   @param [detailX] Optional number of triangle
     *   subdivisions in x-dimension
     *   @param [detailY] Optional number of triangle
     *   subdivisions in y-dimension
     *   @chainable
     */
    function plane(width?: number, height?: number, detailX?: number, detailY?: number): p5;

    /**
     *   Draw a box with given width, height and depth
     *   @param [width] width of the box
     *   @param [height] height of the box
     *   @param [depth] depth of the box
     *   @param [detailX] Optional number of triangle
     *   subdivisions in x-dimension
     *   @param [detailY] Optional number of triangle
     *   subdivisions in y-dimension
     *   @chainable
     */
    function box(width?: number, height?: number, depth?: number, detailX?: number, detailY?: number): p5;

    /**
     *   Draw a sphere with given radius. DetailX and
     *   detailY determines the number of subdivisions in
     *   the x-dimension and the y-dimension of a sphere.
     *   More subdivisions make the sphere seem smoother.
     *   The recommended maximum values are both 24. Using
     *   a value greater than 24 may cause a warning or
     *   slow down the browser.
     *   @param [radius] radius of circle
     *   @param [detailX] optional number of subdivisions
     *   in x-dimension
     *   @param [detailY] optional number of subdivisions
     *   in y-dimension
     *   @chainable
     */
    function sphere(radius?: number, detailX?: number, detailY?: number): p5;

    /**
     *   Draw a cylinder with given radius and height
     *   DetailX and detailY determines the number of
     *   subdivisions in the x-dimension and the
     *   y-dimension of a cylinder. More subdivisions make
     *   the cylinder seem smoother. The recommended
     *   maximum value for detailX is 24. Using a value
     *   greater than 24 may cause a warning or slow down
     *   the browser.
     *   @param [radius] radius of the surface
     *   @param [height] height of the cylinder
     *   @param [detailX] number of subdivisions in
     *   x-dimension; default is 24
     *   @param [detailY] number of subdivisions in
     *   y-dimension; default is 1
     *   @param [bottomCap] whether to draw the bottom of
     *   the cylinder
     *   @param [topCap] whether to draw the top of the
     *   cylinder
     *   @chainable
     */
    function cylinder(
        radius?: number,
        height?: number,
        detailX?: number,
        detailY?: number,
        bottomCap?: boolean,
        topCap?: boolean
    ): p5;

    /**
     *   Draw a cone with given radius and height DetailX
     *   and detailY determine the number of subdivisions
     *   in the x-dimension and the y-dimension of a cone.
     *   More subdivisions make the cone seem smoother. The
     *   recommended maximum value for detailX is 24. Using
     *   a value greater than 24 may cause a warning or
     *   slow down the browser.
     *   @param [radius] radius of the bottom surface
     *   @param [height] height of the cone
     *   @param [detailX] number of segments, the more
     *   segments the smoother geometry default is 24
     *   @param [detailY] number of segments, the more
     *   segments the smoother geometry default is 1
     *   @param [cap] whether to draw the base of the cone
     *   @chainable
     */
    function cone(radius?: number, height?: number, detailX?: number, detailY?: number, cap?: boolean): p5;

    /**
     *   Draw an ellipsoid with given radius DetailX and
     *   detailY determine the number of subdivisions in
     *   the x-dimension and the y-dimension of a cone.
     *   More subdivisions make the ellipsoid appear to be
     *   smoother. Avoid detail number above 150, it may
     *   crash the browser.
     *   @param [radiusx] x-radius of ellipsoid
     *   @param [radiusy] y-radius of ellipsoid
     *   @param [radiusz] z-radius of ellipsoid
     *   @param [detailX] number of segments, the more
     *   segments the smoother geometry default is 24.
     *   Avoid detail number above 150, it may crash the
     *   browser.
     *   @param [detailY] number of segments, the more
     *   segments the smoother geometry default is 16.
     *   Avoid detail number above 150, it may crash the
     *   browser.
     *   @chainable
     */
    function ellipsoid(radiusx?: number, radiusy?: number, radiusz?: number, detailX?: number, detailY?: number): p5;

    /**
     *   Draw a torus with given radius and tube radius
     *   DetailX and detailY determine the number of
     *   subdivisions in the x-dimension and the
     *   y-dimension of a torus. More subdivisions make the
     *   torus appear to be smoother. The default and
     *   maximum values for detailX and detailY are 24 and
     *   16, respectively. Setting them to relatively small
     *   values like 4 and 6 allows you to create new
     *   shapes other than a torus.
     *   @param [radius] radius of the whole ring
     *   @param [tubeRadius] radius of the tube
     *   @param [detailX] number of segments in
     *   x-dimension, the more segments the smoother
     *   geometry default is 24
     *   @param [detailY] number of segments in
     *   y-dimension, the more segments the smoother
     *   geometry default is 16
     *   @chainable
     */
    function torus(radius?: number, tubeRadius?: number, detailX?: number, detailY?: number): p5;

    /**
     *   Allows movement around a 3D sketch using a mouse
     *   or trackpad or touch. Left-clicking and dragging
     *   or swipe motion will rotate the camera position
     *   about the center of the sketch, right-clicking and
     *   dragging or multi-swipe will pan the camera
     *   position without rotation, and using the mouse
     *   wheel (scrolling) or pinch in/out will move the
     *   camera further or closer from the center of the
     *   sketch. This function can be called with
     *   parameters dictating sensitivity to mouse/touch
     *   movement along the X and Y axes. Calling this
     *   function without parameters is equivalent to
     *   calling orbitControl(1,1). To reverse direction of
     *   movement in either axis, enter a negative number
     *   for sensitivity.
     *   @param [sensitivityX] sensitivity to mouse
     *   movement along X axis
     *   @param [sensitivityY] sensitivity to mouse
     *   movement along Y axis
     *   @param [sensitivityZ] sensitivity to scroll
     *   movement along Z axis
     *   @param [options] An optional object that can
     *   contain additional settings, disableTouchActions -
     *   Boolean, default value is true. Setting this to
     *   true makes mobile interactions smoother by
     *   preventing accidental interactions with the page
     *   while orbiting. But if you're already doing it via
     *   css or want the default touch actions, consider
     *   setting it to false. freeRotation - Boolean,
     *   default value is false. By default, horizontal
     *   movement of the mouse or touch pointer rotates the
     *   camera around the y-axis, and vertical movement
     *   rotates the camera around the x-axis. But if
     *   setting this option to true, the camera always
     *   rotates in the direction the pointer is moving.
     *   For zoom and move, the behavior is the same
     *   regardless of true/false.
     *   @chainable
     */
    function orbitControl(sensitivityX?: number, sensitivityY?: number, sensitivityZ?: number, options?: object): p5;

    /**
     *   debugMode() helps visualize 3D space by adding a
     *   grid to indicate where the ‘ground’ is in a sketch
     *   and an axes icon which indicates the +X, +Y, and
     *   +Z directions. This function can be called without
     *   parameters to create a default grid and axes icon,
     *   or it can be called according to the examples
     *   above to customize the size and position of the
     *   grid and/or axes icon. The grid is drawn using the
     *   most recently set stroke color and weight. To
     *   specify these parameters, add a call to stroke()
     *   and strokeWeight() just before the end of the
     *   draw() loop. By default, the grid will run through
     *   the origin (0,0,0) of the sketch along the XZ
     *   plane and the axes icon will be offset from the
     *   origin. Both the grid and axes icon will be sized
     *   according to the current canvas size. Note that
     *   because the grid runs parallel to the default
     *   camera view, it is often helpful to use debugMode
     *   along with orbitControl to allow full view of the
     *   grid.
     */
    function debugMode(): void;

    /**
     *   debugMode() helps visualize 3D space by adding a
     *   grid to indicate where the ‘ground’ is in a sketch
     *   and an axes icon which indicates the +X, +Y, and
     *   +Z directions. This function can be called without
     *   parameters to create a default grid and axes icon,
     *   or it can be called according to the examples
     *   above to customize the size and position of the
     *   grid and/or axes icon. The grid is drawn using the
     *   most recently set stroke color and weight. To
     *   specify these parameters, add a call to stroke()
     *   and strokeWeight() just before the end of the
     *   draw() loop. By default, the grid will run through
     *   the origin (0,0,0) of the sketch along the XZ
     *   plane and the axes icon will be offset from the
     *   origin. Both the grid and axes icon will be sized
     *   according to the current canvas size. Note that
     *   because the grid runs parallel to the default
     *   camera view, it is often helpful to use debugMode
     *   along with orbitControl to allow full view of the
     *   grid.
     *   @param mode either GRID or AXES
     */
    function debugMode(mode: p5.DEBUG_MODE): void;

    /**
     *   debugMode() helps visualize 3D space by adding a
     *   grid to indicate where the ‘ground’ is in a sketch
     *   and an axes icon which indicates the +X, +Y, and
     *   +Z directions. This function can be called without
     *   parameters to create a default grid and axes icon,
     *   or it can be called according to the examples
     *   above to customize the size and position of the
     *   grid and/or axes icon. The grid is drawn using the
     *   most recently set stroke color and weight. To
     *   specify these parameters, add a call to stroke()
     *   and strokeWeight() just before the end of the
     *   draw() loop. By default, the grid will run through
     *   the origin (0,0,0) of the sketch along the XZ
     *   plane and the axes icon will be offset from the
     *   origin. Both the grid and axes icon will be sized
     *   according to the current canvas size. Note that
     *   because the grid runs parallel to the default
     *   camera view, it is often helpful to use debugMode
     *   along with orbitControl to allow full view of the
     *   grid.
     *   @param mode either GRID or AXES
     *   @param [gridSize] size of one side of the grid
     *   @param [gridDivisions] number of divisions in the
     *   grid
     *   @param [xOff] X axis offset from origin (0,0,0)
     *   @param [yOff] Y axis offset from origin (0,0,0)
     *   @param [zOff] Z axis offset from origin (0,0,0)
     */
    function debugMode(
        mode: p5.UNKNOWN_P5_CONSTANT,
        gridSize?: number,
        gridDivisions?: number,
        xOff?: number,
        yOff?: number,
        zOff?: number
    ): void;

    /**
     *   debugMode() helps visualize 3D space by adding a
     *   grid to indicate where the ‘ground’ is in a sketch
     *   and an axes icon which indicates the +X, +Y, and
     *   +Z directions. This function can be called without
     *   parameters to create a default grid and axes icon,
     *   or it can be called according to the examples
     *   above to customize the size and position of the
     *   grid and/or axes icon. The grid is drawn using the
     *   most recently set stroke color and weight. To
     *   specify these parameters, add a call to stroke()
     *   and strokeWeight() just before the end of the
     *   draw() loop. By default, the grid will run through
     *   the origin (0,0,0) of the sketch along the XZ
     *   plane and the axes icon will be offset from the
     *   origin. Both the grid and axes icon will be sized
     *   according to the current canvas size. Note that
     *   because the grid runs parallel to the default
     *   camera view, it is often helpful to use debugMode
     *   along with orbitControl to allow full view of the
     *   grid.
     *   @param mode either GRID or AXES
     *   @param [axesSize] size of axes icon
     *   @param [xOff] X axis offset from origin (0,0,0)
     *   @param [yOff] Y axis offset from origin (0,0,0)
     *   @param [zOff] Z axis offset from origin (0,0,0)
     */
    function debugMode(
        mode: p5.UNKNOWN_P5_CONSTANT,
        axesSize?: number,
        xOff?: number,
        yOff?: number,
        zOff?: number
    ): void;

    /**
     *   debugMode() helps visualize 3D space by adding a
     *   grid to indicate where the ‘ground’ is in a sketch
     *   and an axes icon which indicates the +X, +Y, and
     *   +Z directions. This function can be called without
     *   parameters to create a default grid and axes icon,
     *   or it can be called according to the examples
     *   above to customize the size and position of the
     *   grid and/or axes icon. The grid is drawn using the
     *   most recently set stroke color and weight. To
     *   specify these parameters, add a call to stroke()
     *   and strokeWeight() just before the end of the
     *   draw() loop. By default, the grid will run through
     *   the origin (0,0,0) of the sketch along the XZ
     *   plane and the axes icon will be offset from the
     *   origin. Both the grid and axes icon will be sized
     *   according to the current canvas size. Note that
     *   because the grid runs parallel to the default
     *   camera view, it is often helpful to use debugMode
     *   along with orbitControl to allow full view of the
     *   grid.
     *   @param [gridSize] size of one side of the grid
     *   @param [gridDivisions] number of divisions in the
     *   grid
     *   @param [axesSize] size of axes icon
     */
    function debugMode(
        gridSize?: number,
        gridDivisions?: number,
        gridXOff?: number,
        gridYOff?: number,
        gridZOff?: number,
        axesSize?: number,
        axesXOff?: number,
        axesYOff?: number,
        axesZOff?: number
    ): void;

    /**
     *   Turns off debugMode() in a 3D sketch.
     */
    function noDebugMode(): void;

    /**
     *   Creates an ambient light with the given color.
     *   Ambient light does not come from a specific
     *   direction. Objects are evenly lit from all sides.
     *   Ambient lights are almost always used in
     *   combination with other types of lights.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param [alpha] alpha value relative to current
     *   color range (default is 0-255)
     *   @chainable
     */
    function ambientLight(v1: number, v2: number, v3: number, alpha?: number): p5;

    /**
     *   Creates an ambient light with the given color.
     *   Ambient light does not come from a specific
     *   direction. Objects are evenly lit from all sides.
     *   Ambient lights are almost always used in
     *   combination with other types of lights.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param gray number specifying value between white
     *   and black
     *   @param [alpha] alpha value relative to current
     *   color range (default is 0-255)
     *   @chainable
     */
    function ambientLight(gray: number, alpha?: number): p5;

    /**
     *   Creates an ambient light with the given color.
     *   Ambient light does not come from a specific
     *   direction. Objects are evenly lit from all sides.
     *   Ambient lights are almost always used in
     *   combination with other types of lights.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param value a color string
     *   @chainable
     */
    function ambientLight(value: string): p5;

    /**
     *   Creates an ambient light with the given color.
     *   Ambient light does not come from a specific
     *   direction. Objects are evenly lit from all sides.
     *   Ambient lights are almost always used in
     *   combination with other types of lights.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param values an array containing the
     *   red,green,blue & and alpha components of the color
     *   @chainable
     */
    function ambientLight(values: number[]): p5;

    /**
     *   Creates an ambient light with the given color.
     *   Ambient light does not come from a specific
     *   direction. Objects are evenly lit from all sides.
     *   Ambient lights are almost always used in
     *   combination with other types of lights.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param color color as a p5.Color
     *   @chainable
     */
    function ambientLight(color: p5.Color): p5;

    /**
     *   Sets the color of the specular highlight of a
     *   non-ambient light (i.e. all lights except
     *   ambientLight()). specularColor() affects only the
     *   lights which are created after it in the code.
     *
     *   This function is used in combination with
     *   specularMaterial(). If a geometry does not use
     *   specularMaterial(), this function will have no
     *   effect.
     *
     *   The default color is white (255, 255, 255), which
     *   is used if specularColor() is not explicitly
     *   called.
     *
     *   Note: specularColor is equivalent to the
     *   Processing function lightSpecular.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @chainable
     */
    function specularColor(v1: number, v2: number, v3: number): p5;

    /**
     *   Sets the color of the specular highlight of a
     *   non-ambient light (i.e. all lights except
     *   ambientLight()). specularColor() affects only the
     *   lights which are created after it in the code.
     *
     *   This function is used in combination with
     *   specularMaterial(). If a geometry does not use
     *   specularMaterial(), this function will have no
     *   effect.
     *
     *   The default color is white (255, 255, 255), which
     *   is used if specularColor() is not explicitly
     *   called.
     *
     *   Note: specularColor is equivalent to the
     *   Processing function lightSpecular.
     *   @param gray number specifying value between white
     *   and black
     *   @chainable
     */
    function specularColor(gray: number): p5;

    /**
     *   Sets the color of the specular highlight of a
     *   non-ambient light (i.e. all lights except
     *   ambientLight()). specularColor() affects only the
     *   lights which are created after it in the code.
     *
     *   This function is used in combination with
     *   specularMaterial(). If a geometry does not use
     *   specularMaterial(), this function will have no
     *   effect.
     *
     *   The default color is white (255, 255, 255), which
     *   is used if specularColor() is not explicitly
     *   called.
     *
     *   Note: specularColor is equivalent to the
     *   Processing function lightSpecular.
     *   @param value color as a CSS string
     *   @chainable
     */
    function specularColor(value: string): p5;

    /**
     *   Sets the color of the specular highlight of a
     *   non-ambient light (i.e. all lights except
     *   ambientLight()). specularColor() affects only the
     *   lights which are created after it in the code.
     *
     *   This function is used in combination with
     *   specularMaterial(). If a geometry does not use
     *   specularMaterial(), this function will have no
     *   effect.
     *
     *   The default color is white (255, 255, 255), which
     *   is used if specularColor() is not explicitly
     *   called.
     *
     *   Note: specularColor is equivalent to the
     *   Processing function lightSpecular.
     *   @param values color as an array containing the
     *   red, green, and blue components
     *   @chainable
     */
    function specularColor(values: number[]): p5;

    /**
     *   Sets the color of the specular highlight of a
     *   non-ambient light (i.e. all lights except
     *   ambientLight()). specularColor() affects only the
     *   lights which are created after it in the code.
     *
     *   This function is used in combination with
     *   specularMaterial(). If a geometry does not use
     *   specularMaterial(), this function will have no
     *   effect.
     *
     *   The default color is white (255, 255, 255), which
     *   is used if specularColor() is not explicitly
     *   called.
     *
     *   Note: specularColor is equivalent to the
     *   Processing function lightSpecular.
     *   @param color color as a p5.Color
     *   @chainable
     */
    function specularColor(color: p5.Color): p5;

    /**
     *   Creates a directional light with the given color
     *   and direction. Directional light comes from one
     *   direction. The direction is specified as numbers
     *   inclusively between -1 and 1. For example, setting
     *   the direction as (0, -1, 0) will cause the
     *   geometry to be lit from below (since the light
     *   will be facing directly upwards). Similarly,
     *   setting the direction as (1, 0, 0) will cause the
     *   geometry to be lit from the left (since the light
     *   will be facing directly rightwards).
     *
     *   Directional lights do not have a specific point of
     *   origin, and therefore cannot be positioned closer
     *   or farther away from a geometry.
     *
     *   A maximum of 5 directional lights can be active at
     *   once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param x x component of direction (inclusive range
     *   of -1 to 1)
     *   @param y y component of direction (inclusive range
     *   of -1 to 1)
     *   @param z z component of direction (inclusive range
     *   of -1 to 1)
     *   @chainable
     */
    function directionalLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): p5;

    /**
     *   Creates a directional light with the given color
     *   and direction. Directional light comes from one
     *   direction. The direction is specified as numbers
     *   inclusively between -1 and 1. For example, setting
     *   the direction as (0, -1, 0) will cause the
     *   geometry to be lit from below (since the light
     *   will be facing directly upwards). Similarly,
     *   setting the direction as (1, 0, 0) will cause the
     *   geometry to be lit from the left (since the light
     *   will be facing directly rightwards).
     *
     *   Directional lights do not have a specific point of
     *   origin, and therefore cannot be positioned closer
     *   or farther away from a geometry.
     *
     *   A maximum of 5 directional lights can be active at
     *   once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param direction direction of light as a p5.Vector
     *   @chainable
     */
    function directionalLight(v1: number, v2: number, v3: number, direction: p5.Vector): p5;

    /**
     *   Creates a directional light with the given color
     *   and direction. Directional light comes from one
     *   direction. The direction is specified as numbers
     *   inclusively between -1 and 1. For example, setting
     *   the direction as (0, -1, 0) will cause the
     *   geometry to be lit from below (since the light
     *   will be facing directly upwards). Similarly,
     *   setting the direction as (1, 0, 0) will cause the
     *   geometry to be lit from the left (since the light
     *   will be facing directly rightwards).
     *
     *   Directional lights do not have a specific point of
     *   origin, and therefore cannot be positioned closer
     *   or farther away from a geometry.
     *
     *   A maximum of 5 directional lights can be active at
     *   once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param color color as a p5.Color, as an array, or
     *   as a CSS string
     *   @param x x component of direction (inclusive range
     *   of -1 to 1)
     *   @param y y component of direction (inclusive range
     *   of -1 to 1)
     *   @param z z component of direction (inclusive range
     *   of -1 to 1)
     *   @chainable
     */
    function directionalLight(color: p5.Color | number[] | string, x: number, y: number, z: number): p5;

    /**
     *   Creates a directional light with the given color
     *   and direction. Directional light comes from one
     *   direction. The direction is specified as numbers
     *   inclusively between -1 and 1. For example, setting
     *   the direction as (0, -1, 0) will cause the
     *   geometry to be lit from below (since the light
     *   will be facing directly upwards). Similarly,
     *   setting the direction as (1, 0, 0) will cause the
     *   geometry to be lit from the left (since the light
     *   will be facing directly rightwards).
     *
     *   Directional lights do not have a specific point of
     *   origin, and therefore cannot be positioned closer
     *   or farther away from a geometry.
     *
     *   A maximum of 5 directional lights can be active at
     *   once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param color color as a p5.Color, as an array, or
     *   as a CSS string
     *   @param direction direction of light as a p5.Vector
     *   @chainable
     */
    function directionalLight(color: p5.Color | number[] | string, direction: p5.Vector): p5;

    /**
     *   Creates a point light with the given color and
     *   position. A point light emits light from a single
     *   point in all directions. Because the light is
     *   emitted from a specific point (position), it has a
     *   different effect when it is positioned farther vs.
     *   nearer an object.
     *
     *   A maximum of 5 point lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param x x component of position
     *   @param y y component of position
     *   @param z z component of position
     *   @chainable
     */
    function pointLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): p5;

    /**
     *   Creates a point light with the given color and
     *   position. A point light emits light from a single
     *   point in all directions. Because the light is
     *   emitted from a specific point (position), it has a
     *   different effect when it is positioned farther vs.
     *   nearer an object.
     *
     *   A maximum of 5 point lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param position of light as a p5.Vector
     *   @chainable
     */
    function pointLight(v1: number, v2: number, v3: number, position: p5.Vector): p5;

    /**
     *   Creates a point light with the given color and
     *   position. A point light emits light from a single
     *   point in all directions. Because the light is
     *   emitted from a specific point (position), it has a
     *   different effect when it is positioned farther vs.
     *   nearer an object.
     *
     *   A maximum of 5 point lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param color color as a p5.Color, as an array, or
     *   as a CSS string
     *   @param x x component of position
     *   @param y y component of position
     *   @param z z component of position
     *   @chainable
     */
    function pointLight(color: p5.Color | number[] | string, x: number, y: number, z: number): p5;

    /**
     *   Creates a point light with the given color and
     *   position. A point light emits light from a single
     *   point in all directions. Because the light is
     *   emitted from a specific point (position), it has a
     *   different effect when it is positioned farther vs.
     *   nearer an object.
     *
     *   A maximum of 5 point lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param color color as a p5.Color, as an array, or
     *   as a CSS string
     *   @param position of light as a p5.Vector
     *   @chainable
     */
    function pointLight(color: p5.Color | number[] | string, position: p5.Vector): p5;

    /**
     *   Places an ambient and directional light in the
     *   scene. The lights are set to ambientLight(128,
     *   128, 128) and directionalLight(128, 128, 128, 0,
     *   0, -1). Note: lights need to be called (whether
     *   directly or indirectly) within draw() to remain
     *   persistent in a looping program. Placing them in
     *   setup() will cause them to only have an effect the
     *   first time through the loop.
     *   @chainable
     */
    function lights(): p5;

    /**
     *   Sets the falloff rate for pointLight() and
     *   spotLight(). lightFalloff() affects only the
     *   lights which are created after it in the code.
     *
     *   The constant, linear, an quadratic parameters are
     *   used to calculate falloff as follows:
     *
     *   d = distance from light position to vertex
     *   position
     *
     *   falloff = 1 / (CONSTANT + d * LINEAR + (d * d) *
     *   QUADRATIC)
     *   @param constant CONSTANT value for determining
     *   falloff
     *   @param linear LINEAR value for determining falloff
     *   @param quadratic QUADRATIC value for determining
     *   falloff
     *   @chainable
     */
    function lightFalloff(constant: number, linear: number, quadratic: number): p5;

    /**
     *   Creates a spot light with the given color,
     *   position, light direction, angle, and
     *   concentration. Like a pointLight(), a spotLight()
     *   emits light from a specific point (position). It
     *   has a different effect when it is positioned
     *   farther vs. nearer an object.
     *
     *   However, unlike a pointLight(), the light is
     *   emitted in one direction along a conical shape.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters.
     *
     *   The angle parameter is used to determine the
     *   radius of the cone. And the concentration
     *   parameter is used to focus the light towards the
     *   center of the cone. Both parameters are optional,
     *   however if you want to specify concentration, you
     *   must also specify angle. The minimum concentration
     *   value is 1.
     *
     *   A maximum of 5 spot lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param x x component of position
     *   @param y y component of position
     *   @param z z component of position
     *   @param rx x component of light direction
     *   (inclusive range of -1 to 1)
     *   @param ry y component of light direction
     *   (inclusive range of -1 to 1)
     *   @param rz z component of light direction
     *   (inclusive range of -1 to 1)
     *   @param [angle] angle of cone. Defaults to PI/3
     *   @param [concentration] concentration of cone.
     *   Defaults to 100
     *   @chainable
     */
    function spotLight(
        v1: number,
        v2: number,
        v3: number,
        x: number,
        y: number,
        z: number,
        rx: number,
        ry: number,
        rz: number,
        angle?: number,
        concentration?: number
    ): p5;

    /**
     *   Creates a spot light with the given color,
     *   position, light direction, angle, and
     *   concentration. Like a pointLight(), a spotLight()
     *   emits light from a specific point (position). It
     *   has a different effect when it is positioned
     *   farther vs. nearer an object.
     *
     *   However, unlike a pointLight(), the light is
     *   emitted in one direction along a conical shape.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters.
     *
     *   The angle parameter is used to determine the
     *   radius of the cone. And the concentration
     *   parameter is used to focus the light towards the
     *   center of the cone. Both parameters are optional,
     *   however if you want to specify concentration, you
     *   must also specify angle. The minimum concentration
     *   value is 1.
     *
     *   A maximum of 5 spot lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param color color as a p5.Color, as an array, or
     *   as a CSS string
     *   @param position position of light as a p5.Vector
     *   @param direction direction of light as a p5.Vector
     *   @param [angle] angle of cone. Defaults to PI/3
     *   @param [concentration] concentration of cone.
     *   Defaults to 100
     */
    function spotLight(
        color: p5.Color | number[] | string,
        position: p5.Vector,
        direction: p5.Vector,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a spot light with the given color,
     *   position, light direction, angle, and
     *   concentration. Like a pointLight(), a spotLight()
     *   emits light from a specific point (position). It
     *   has a different effect when it is positioned
     *   farther vs. nearer an object.
     *
     *   However, unlike a pointLight(), the light is
     *   emitted in one direction along a conical shape.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters.
     *
     *   The angle parameter is used to determine the
     *   radius of the cone. And the concentration
     *   parameter is used to focus the light towards the
     *   center of the cone. Both parameters are optional,
     *   however if you want to specify concentration, you
     *   must also specify angle. The minimum concentration
     *   value is 1.
     *
     *   A maximum of 5 spot lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param position position of light as a p5.Vector
     *   @param direction direction of light as a p5.Vector
     *   @param [angle] angle of cone. Defaults to PI/3
     *   @param [concentration] concentration of cone.
     *   Defaults to 100
     */
    function spotLight(
        v1: number,
        v2: number,
        v3: number,
        position: p5.Vector,
        direction: p5.Vector,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a spot light with the given color,
     *   position, light direction, angle, and
     *   concentration. Like a pointLight(), a spotLight()
     *   emits light from a specific point (position). It
     *   has a different effect when it is positioned
     *   farther vs. nearer an object.
     *
     *   However, unlike a pointLight(), the light is
     *   emitted in one direction along a conical shape.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters.
     *
     *   The angle parameter is used to determine the
     *   radius of the cone. And the concentration
     *   parameter is used to focus the light towards the
     *   center of the cone. Both parameters are optional,
     *   however if you want to specify concentration, you
     *   must also specify angle. The minimum concentration
     *   value is 1.
     *
     *   A maximum of 5 spot lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param color color as a p5.Color, as an array, or
     *   as a CSS string
     *   @param x x component of position
     *   @param y y component of position
     *   @param z z component of position
     *   @param direction direction of light as a p5.Vector
     *   @param [angle] angle of cone. Defaults to PI/3
     *   @param [concentration] concentration of cone.
     *   Defaults to 100
     */
    function spotLight(
        color: p5.Color | number[] | string,
        x: number,
        y: number,
        z: number,
        direction: p5.Vector,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a spot light with the given color,
     *   position, light direction, angle, and
     *   concentration. Like a pointLight(), a spotLight()
     *   emits light from a specific point (position). It
     *   has a different effect when it is positioned
     *   farther vs. nearer an object.
     *
     *   However, unlike a pointLight(), the light is
     *   emitted in one direction along a conical shape.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters.
     *
     *   The angle parameter is used to determine the
     *   radius of the cone. And the concentration
     *   parameter is used to focus the light towards the
     *   center of the cone. Both parameters are optional,
     *   however if you want to specify concentration, you
     *   must also specify angle. The minimum concentration
     *   value is 1.
     *
     *   A maximum of 5 spot lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param color color as a p5.Color, as an array, or
     *   as a CSS string
     *   @param position position of light as a p5.Vector
     *   @param rx x component of light direction
     *   (inclusive range of -1 to 1)
     *   @param ry y component of light direction
     *   (inclusive range of -1 to 1)
     *   @param rz z component of light direction
     *   (inclusive range of -1 to 1)
     *   @param [angle] angle of cone. Defaults to PI/3
     *   @param [concentration] concentration of cone.
     *   Defaults to 100
     */
    function spotLight(
        color: p5.Color | number[] | string,
        position: p5.Vector,
        rx: number,
        ry: number,
        rz: number,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a spot light with the given color,
     *   position, light direction, angle, and
     *   concentration. Like a pointLight(), a spotLight()
     *   emits light from a specific point (position). It
     *   has a different effect when it is positioned
     *   farther vs. nearer an object.
     *
     *   However, unlike a pointLight(), the light is
     *   emitted in one direction along a conical shape.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters.
     *
     *   The angle parameter is used to determine the
     *   radius of the cone. And the concentration
     *   parameter is used to focus the light towards the
     *   center of the cone. Both parameters are optional,
     *   however if you want to specify concentration, you
     *   must also specify angle. The minimum concentration
     *   value is 1.
     *
     *   A maximum of 5 spot lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param x x component of position
     *   @param y y component of position
     *   @param z z component of position
     *   @param direction direction of light as a p5.Vector
     *   @param [angle] angle of cone. Defaults to PI/3
     *   @param [concentration] concentration of cone.
     *   Defaults to 100
     */
    function spotLight(
        v1: number,
        v2: number,
        v3: number,
        x: number,
        y: number,
        z: number,
        direction: p5.Vector,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a spot light with the given color,
     *   position, light direction, angle, and
     *   concentration. Like a pointLight(), a spotLight()
     *   emits light from a specific point (position). It
     *   has a different effect when it is positioned
     *   farther vs. nearer an object.
     *
     *   However, unlike a pointLight(), the light is
     *   emitted in one direction along a conical shape.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters.
     *
     *   The angle parameter is used to determine the
     *   radius of the cone. And the concentration
     *   parameter is used to focus the light towards the
     *   center of the cone. Both parameters are optional,
     *   however if you want to specify concentration, you
     *   must also specify angle. The minimum concentration
     *   value is 1.
     *
     *   A maximum of 5 spot lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param position position of light as a p5.Vector
     *   @param rx x component of light direction
     *   (inclusive range of -1 to 1)
     *   @param ry y component of light direction
     *   (inclusive range of -1 to 1)
     *   @param rz z component of light direction
     *   (inclusive range of -1 to 1)
     *   @param [angle] angle of cone. Defaults to PI/3
     *   @param [concentration] concentration of cone.
     *   Defaults to 100
     */
    function spotLight(
        v1: number,
        v2: number,
        v3: number,
        position: p5.Vector,
        rx: number,
        ry: number,
        rz: number,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Creates a spot light with the given color,
     *   position, light direction, angle, and
     *   concentration. Like a pointLight(), a spotLight()
     *   emits light from a specific point (position). It
     *   has a different effect when it is positioned
     *   farther vs. nearer an object.
     *
     *   However, unlike a pointLight(), the light is
     *   emitted in one direction along a conical shape.
     *   The shape of the cone can be controlled using the
     *   angle and concentration parameters.
     *
     *   The angle parameter is used to determine the
     *   radius of the cone. And the concentration
     *   parameter is used to focus the light towards the
     *   center of the cone. Both parameters are optional,
     *   however if you want to specify concentration, you
     *   must also specify angle. The minimum concentration
     *   value is 1.
     *
     *   A maximum of 5 spot lights can be active at once.
     *
     *   Note: lights need to be called (whether directly
     *   or indirectly) within draw() to remain persistent
     *   in a looping program. Placing them in setup() will
     *   cause them to only have an effect the first time
     *   through the loop.
     *   @param color color as a p5.Color, as an array, or
     *   as a CSS string
     *   @param x x component of position
     *   @param y y component of position
     *   @param z z component of position
     *   @param rx x component of light direction
     *   (inclusive range of -1 to 1)
     *   @param ry y component of light direction
     *   (inclusive range of -1 to 1)
     *   @param rz z component of light direction
     *   (inclusive range of -1 to 1)
     *   @param [angle] angle of cone. Defaults to PI/3
     *   @param [concentration] concentration of cone.
     *   Defaults to 100
     */
    function spotLight(
        color: p5.Color | number[] | string,
        x: number,
        y: number,
        z: number,
        rx: number,
        ry: number,
        rz: number,
        angle?: number,
        concentration?: number
    ): void;

    /**
     *   Removes all lights present in a sketch. All
     *   subsequent geometry is rendered without lighting
     *   (until a new light is created with a call to one
     *   of the lighting functions (lights(),
     *   ambientLight(), directionalLight(), pointLight(),
     *   spotLight()).
     *   @chainable
     */
    function noLights(): p5;

    /**
     *   Load a 3d model from an OBJ or STL file.
     *   loadModel() should be placed inside of preload().
     *   This allows the model to load fully before the
     *   rest of your code is run.
     *
     *   One of the limitations of the OBJ and STL format
     *   is that it doesn't have a built-in sense of scale.
     *   This means that models exported from different
     *   programs might be very different sizes. If your
     *   model isn't displaying, try calling loadModel()
     *   with the normalized parameter set to true. This
     *   will resize the model to a scale appropriate for
     *   p5. You can also make additional changes to the
     *   final size of your model with the scale()
     *   function.
     *
     *   Also, the support for colored STL files is not
     *   present. STL files with color will be rendered
     *   without color properties.
     *   @param path Path of the model to be loaded
     *   @param normalize If true, scale the model to a
     *   standardized size when loading
     *   @param [successCallback] Function to be called
     *   once the model is loaded. Will be passed the 3D
     *   model object.
     *   @param [failureCallback] called with event error
     *   if the model fails to load.
     *   @param [fileType] The file extension of the model
     *   (.stl, .obj).
     *   @return the p5.Geometry object
     */
    function loadModel(
        path: string,
        normalize: boolean,
        successCallback?: (p1: p5.Geometry) => any,
        failureCallback?: (p1: Event) => any,
        fileType?: string
    ): p5.Geometry;

    /**
     *   Load a 3d model from an OBJ or STL file.
     *   loadModel() should be placed inside of preload().
     *   This allows the model to load fully before the
     *   rest of your code is run.
     *
     *   One of the limitations of the OBJ and STL format
     *   is that it doesn't have a built-in sense of scale.
     *   This means that models exported from different
     *   programs might be very different sizes. If your
     *   model isn't displaying, try calling loadModel()
     *   with the normalized parameter set to true. This
     *   will resize the model to a scale appropriate for
     *   p5. You can also make additional changes to the
     *   final size of your model with the scale()
     *   function.
     *
     *   Also, the support for colored STL files is not
     *   present. STL files with color will be rendered
     *   without color properties.
     *   @param path Path of the model to be loaded
     *   @param [successCallback] Function to be called
     *   once the model is loaded. Will be passed the 3D
     *   model object.
     *   @param [failureCallback] called with event error
     *   if the model fails to load.
     *   @param [fileType] The file extension of the model
     *   (.stl, .obj).
     *   @return the p5.Geometry object
     */
    function loadModel(
        path: string,
        successCallback?: (p1: p5.Geometry) => any,
        failureCallback?: (p1: Event) => any,
        fileType?: string
    ): p5.Geometry;

    /**
     *   Render a 3d model to the screen.
     *   @param model Loaded 3d model to be rendered
     */
    function model(model: p5.Geometry): void;

    /**
     *   Creates a new p5.Shader object from the provided
     *   vertex and fragment shader files. The shader files
     *   are loaded asynchronously in the background, so
     *   this method should be used in preload().
     *
     *   Note, shaders can only be used in WEBGL mode.
     *   @param vertFilename path to file containing vertex
     *   shader source code
     *   @param fragFilename path to file containing
     *   fragment shader source code
     *   @param [callback] callback to be executed after
     *   loadShader completes. On success, the p5.Shader
     *   object is passed as the first argument.
     *   @param [errorCallback] callback to be executed
     *   when an error occurs inside loadShader. On error,
     *   the error is passed as the first argument.
     *   @return a shader object created from the provided
     *   vertex and fragment shader files.
     */
    function loadShader(
        vertFilename: string,
        fragFilename: string,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): p5.Shader;

    /**
     *   Creates a new p5.Shader object from the provided
     *   vertex and fragment shader code. Note, shaders can
     *   only be used in WEBGL mode.
     *   @param vertSrc source code for the vertex shader
     *   @param fragSrc source code for the fragment shader
     *   @return a shader object created from the provided
     *   vertex and fragment shaders.
     */
    function createShader(vertSrc: string, fragSrc: string): p5.Shader;

    /**
     *   Creates a new p5.Shader using only a fragment
     *   shader, as a convenience method for creating image
     *   effects. It's like createShader() but with a
     *   default vertex shader included.
     *   createFilterShader() is intended to be used along
     *   with filter() for filtering the contents of a
     *   canvas in WebGL mode. A filter shader will not be
     *   applied to any geometries.
     *
     *   The fragment shader receives some uniforms:
     *
     *   - sampler2D tex0, which contains the canvas
     *   contents as a texture
     *   - vec2 canvasSize, which is the width and height
     *   of the canvas
     *   - vec2 texelSize, which is the size of a pixel
     *   (1.0/width, 1.0/height)
     *
     *   For more info about filters and shaders, see Adam
     *   Ferriss' repo of shader examples or the
     *   introduction to shaders page.
     *   @param fragSrc source code for the fragment shader
     *   @return a shader object created from the provided
     *   fragment shader.
     */
    function createFilterShader(fragSrc: string): p5.Shader;

    /**
     *   Sets the p5.Shader object to be used to render
     *   subsequent shapes. Custom shaders can be created
     *   using the createShader() and loadShader()
     *   functions.
     *
     *   Use resetShader() to restore the default shaders.
     *
     *   Note, shaders can only be used in WEBGL mode.
     *   @param s the p5.Shader object to use for rendering
     *   shapes.
     *   @chainable
     */
    function shader(s: p5.Shader): p5;

    /**
     *   Restores the default shaders. Code that runs after
     *   resetShader() will not be affected by the shader
     *   previously set by shader()
     *   @chainable
     */
    function resetShader(): p5;

    /**
     *   Sets the texture that will be used to render
     *   subsequent shapes. A texture is like a "skin" that
     *   wraps around a 3D geometry. Currently supported
     *   textures are images, video, and offscreen renders.
     *
     *   To texture a geometry created with beginShape(),
     *   you will need to specify uv coordinates in
     *   vertex().
     *
     *   Note, texture() can only be used in WEBGL mode.
     *
     *   You can view more materials in this example.
     *   @param tex image to use as texture
     *   @chainable
     */
    function texture(tex: p5.Image | p5.MediaElement | p5.Graphics | p5.Framebuffer): p5;

    /**
     *   Sets the coordinate space for texture mapping. The
     *   default mode is IMAGE which refers to the actual
     *   coordinates of the image. NORMAL refers to a
     *   normalized space of values ranging from 0 to 1.
     *   With IMAGE, if an image is 100×200 pixels, mapping
     *   the image onto the entire size of a quad would
     *   require the points (0,0) (100, 0) (100,200)
     *   (0,200). The same mapping in NORMAL is (0,0) (1,0)
     *   (1,1) (0,1).
     *   @param mode either IMAGE or NORMAL
     */
    function textureMode(mode: p5.TEXTURE_MODE): void;

    /**
     *   Sets the global texture wrapping mode. This
     *   controls how textures behave when their uv's go
     *   outside of the 0 to 1 range. There are three
     *   options: CLAMP, REPEAT, and MIRROR. CLAMP causes
     *   the pixels at the edge of the texture to extend to
     *   the bounds. REPEAT causes the texture to tile
     *   repeatedly until reaching the bounds. MIRROR works
     *   similarly to REPEAT but it flips the texture with
     *   every new tile.
     *
     *   REPEAT & MIRROR are only available if the texture
     *   is a power of two size (128, 256, 512, 1024,
     *   etc.).
     *
     *   This method will affect all textures in your
     *   sketch until a subsequent textureWrap() call is
     *   made.
     *
     *   If only one argument is provided, it will be
     *   applied to both the horizontal and vertical axes.
     *   @param wrapX either CLAMP, REPEAT, or MIRROR
     *   @param [wrapY] either CLAMP, REPEAT, or MIRROR
     */
    function textureWrap(wrapX: p5.WRAP_X, wrapY?: p5.WRAP_Y): void;

    /**
     *   Sets the current material as a normal material. A
     *   normal material is not affected by light. It is
     *   often used as a placeholder material when
     *   debugging.
     *
     *   Surfaces facing the X-axis become red, those
     *   facing the Y-axis become green, and those facing
     *   the Z-axis become blue.
     *
     *   You can view more materials in this example.
     *   @chainable
     */
    function normalMaterial(): p5;

    /**
     *   Sets the ambient color of the material. The
     *   ambientMaterial() color represents the components
     *   of the ambientLight() color that the object
     *   reflects.
     *
     *   Consider an ambientMaterial() with the color
     *   yellow (255, 255, 0). If the ambientLight() emits
     *   the color white (255, 255, 255), then the object
     *   will appear yellow as it will reflect the red and
     *   green components of the light. If the
     *   ambientLight() emits the color red (255, 0, 0),
     *   then the object will appear red as it will reflect
     *   the red component of the light. If the
     *   ambientLight() emits the color blue (0, 0, 255),
     *   then the object will appear black, as there is no
     *   component of the light that it can reflect.
     *
     *   You can view more materials in this example.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @chainable
     */
    function ambientMaterial(v1: number, v2: number, v3: number): p5;

    /**
     *   Sets the ambient color of the material. The
     *   ambientMaterial() color represents the components
     *   of the ambientLight() color that the object
     *   reflects.
     *
     *   Consider an ambientMaterial() with the color
     *   yellow (255, 255, 0). If the ambientLight() emits
     *   the color white (255, 255, 255), then the object
     *   will appear yellow as it will reflect the red and
     *   green components of the light. If the
     *   ambientLight() emits the color red (255, 0, 0),
     *   then the object will appear red as it will reflect
     *   the red component of the light. If the
     *   ambientLight() emits the color blue (0, 0, 255),
     *   then the object will appear black, as there is no
     *   component of the light that it can reflect.
     *
     *   You can view more materials in this example.
     *   @param gray number specifying value between white
     *   and black
     *   @chainable
     */
    function ambientMaterial(gray: number): p5;

    /**
     *   Sets the ambient color of the material. The
     *   ambientMaterial() color represents the components
     *   of the ambientLight() color that the object
     *   reflects.
     *
     *   Consider an ambientMaterial() with the color
     *   yellow (255, 255, 0). If the ambientLight() emits
     *   the color white (255, 255, 255), then the object
     *   will appear yellow as it will reflect the red and
     *   green components of the light. If the
     *   ambientLight() emits the color red (255, 0, 0),
     *   then the object will appear red as it will reflect
     *   the red component of the light. If the
     *   ambientLight() emits the color blue (0, 0, 255),
     *   then the object will appear black, as there is no
     *   component of the light that it can reflect.
     *
     *   You can view more materials in this example.
     *   @param color color as a p5.Color, as an array, or
     *   as a CSS string
     *   @chainable
     */
    function ambientMaterial(color: p5.Color | number[] | string): p5;

    /**
     *   Sets the emissive color of the material. An
     *   emissive material will display the emissive color
     *   at full strength regardless of lighting. This can
     *   give the appearance that the object is glowing.
     *
     *   Note, "emissive" is a misnomer in the sense that
     *   the material does not actually emit light that
     *   will affect surrounding objects.
     *
     *   You can view more materials in this example.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param [alpha] alpha value relative to current
     *   color range (default is 0-255)
     *   @chainable
     */
    function emissiveMaterial(v1: number, v2: number, v3: number, alpha?: number): p5;

    /**
     *   Sets the emissive color of the material. An
     *   emissive material will display the emissive color
     *   at full strength regardless of lighting. This can
     *   give the appearance that the object is glowing.
     *
     *   Note, "emissive" is a misnomer in the sense that
     *   the material does not actually emit light that
     *   will affect surrounding objects.
     *
     *   You can view more materials in this example.
     *   @param gray number specifying value between white
     *   and black
     *   @chainable
     */
    function emissiveMaterial(gray: number): p5;

    /**
     *   Sets the emissive color of the material. An
     *   emissive material will display the emissive color
     *   at full strength regardless of lighting. This can
     *   give the appearance that the object is glowing.
     *
     *   Note, "emissive" is a misnomer in the sense that
     *   the material does not actually emit light that
     *   will affect surrounding objects.
     *
     *   You can view more materials in this example.
     *   @param color color as a p5.Color, as an array, or
     *   as a CSS string
     *   @chainable
     */
    function emissiveMaterial(color: p5.Color | number[] | string): p5;

    /**
     *   Sets the specular color of the material. A
     *   specular material is reflective (shiny). The
     *   shininess can be controlled by the shininess()
     *   function.
     *
     *   Like ambientMaterial(), the specularMaterial()
     *   color is the color the object will reflect under
     *   ambientLight(). However unlike ambientMaterial(),
     *   for all other types of lights (directionalLight(),
     *   pointLight(), spotLight()), a specular material
     *   will reflect the color of the light source. This
     *   is what gives it its "shiny" appearance.
     *
     *   You can view more materials in this example.
     *   @param gray number specifying value between white
     *   and black.
     *   @param [alpha] alpha value relative to current
     *   color range (default is 0-255)
     *   @chainable
     */
    function specularMaterial(gray: number, alpha?: number): p5;

    /**
     *   Sets the specular color of the material. A
     *   specular material is reflective (shiny). The
     *   shininess can be controlled by the shininess()
     *   function.
     *
     *   Like ambientMaterial(), the specularMaterial()
     *   color is the color the object will reflect under
     *   ambientLight(). However unlike ambientMaterial(),
     *   for all other types of lights (directionalLight(),
     *   pointLight(), spotLight()), a specular material
     *   will reflect the color of the light source. This
     *   is what gives it its "shiny" appearance.
     *
     *   You can view more materials in this example.
     *   @param v1 red or hue value relative to the current
     *   color range
     *   @param v2 green or saturation value relative to
     *   the current color range
     *   @param v3 blue or brightness value relative to the
     *   current color range
     *   @param [alpha] alpha value relative to current
     *   color range (default is 0-255)
     *   @chainable
     */
    function specularMaterial(v1: number, v2: number, v3: number, alpha?: number): p5;

    /**
     *   Sets the specular color of the material. A
     *   specular material is reflective (shiny). The
     *   shininess can be controlled by the shininess()
     *   function.
     *
     *   Like ambientMaterial(), the specularMaterial()
     *   color is the color the object will reflect under
     *   ambientLight(). However unlike ambientMaterial(),
     *   for all other types of lights (directionalLight(),
     *   pointLight(), spotLight()), a specular material
     *   will reflect the color of the light source. This
     *   is what gives it its "shiny" appearance.
     *
     *   You can view more materials in this example.
     *   @param color color as a p5.Color, as an array, or
     *   as a CSS string
     *   @chainable
     */
    function specularMaterial(color: p5.Color | number[] | string): p5;

    /**
     *   Sets the amount of gloss ("shininess") of a
     *   specularMaterial(). The default and minimum value
     *   is 1.
     *   @param shine degree of shininess
     *   @chainable
     */
    function shininess(shine: number): p5;

    /**
     *   Sets the position of the current camera in a 3D
     *   sketch. Parameters for this function define the
     *   camera's position, the center of the sketch (where
     *   the camera is pointing), and an up direction (the
     *   orientation of the camera). This function
     *   simulates the movements of the camera, allowing
     *   objects to be viewed from various angles.
     *   Remember, it does not move the objects themselves
     *   but the camera instead. For example when the
     *   centerX value is positive, and the camera is
     *   rotating to the right side of the sketch, the
     *   object will seem like it's moving to the left.
     *
     *   See this example to view the position of your
     *   camera.
     *
     *   If no parameters are given, the following default
     *   is used: camera(0, 0, (height/2) / tan(PI/6), 0,
     *   0, 0, 0, 1, 0)
     *   @param [x] camera position value on x axis
     *   @param [y] camera position value on y axis
     *   @param [z] camera position value on z axis
     *   @param [centerX] x coordinate representing center
     *   of the sketch
     *   @param [centerY] y coordinate representing center
     *   of the sketch
     *   @param [centerZ] z coordinate representing center
     *   of the sketch
     *   @param [upX] x component of direction 'up' from
     *   camera
     *   @param [upY] y component of direction 'up' from
     *   camera
     *   @param [upZ] z component of direction 'up' from
     *   camera
     *   @chainable
     */
    function camera(
        x?: number,
        y?: number,
        z?: number,
        centerX?: number,
        centerY?: number,
        centerZ?: number,
        upX?: number,
        upY?: number,
        upZ?: number
    ): p5;

    /**
     *   Sets a perspective projection for the current
     *   camera in a 3D sketch. This projection represents
     *   depth through foreshortening: objects that are
     *   close to the camera appear their actual size while
     *   those that are further away from the camera appear
     *   smaller. The parameters to this function define
     *   the viewing frustum (the truncated pyramid within
     *   which objects are seen by the camera) through
     *   vertical field of view, aspect ratio (usually
     *   width/height), and near and far clipping planes.
     *
     *   If no parameters are given, the following default
     *   is used: perspective(PI/3, width/height, eyeZ/10,
     *   eyeZ*10), where eyeZ is equal to ((height/2) /
     *   tan(PI/6)).
     *   @param [fovy] camera frustum vertical field of
     *   view, from bottom to top of view, in angleMode
     *   units
     *   @param [aspect] camera frustum aspect ratio
     *   @param [near] frustum near plane length
     *   @param [far] frustum far plane length
     *   @chainable
     */
    function perspective(fovy?: number, aspect?: number, near?: number, far?: number): p5;

    /**
     *   Sets an orthographic projection for the current
     *   camera in a 3D sketch and defines a box-shaped
     *   viewing frustum within which objects are seen. In
     *   this projection, all objects with the same
     *   dimension appear the same size, regardless of
     *   whether they are near or far from the camera. The
     *   parameters to this function specify the viewing
     *   frustum where left and right are the minimum and
     *   maximum x values, top and bottom are the minimum
     *   and maximum y values, and near and far are the
     *   minimum and maximum z values.
     *
     *   If no parameters are given, the following default
     *   is used: ortho(-width/2, width/2, -height/2,
     *   height/2).
     *   @param [left] camera frustum left plane
     *   @param [right] camera frustum right plane
     *   @param [bottom] camera frustum bottom plane
     *   @param [top] camera frustum top plane
     *   @param [near] camera frustum near plane
     *   @param [far] camera frustum far plane
     *   @chainable
     */
    function ortho(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): p5;

    /**
     *   Sets the frustum of the current camera as defined
     *   by the parameters. A frustum is a geometric form:
     *   a pyramid with its top cut off. With the viewer's
     *   eye at the imaginary top of the pyramid, the six
     *   planes of the frustum act as clipping planes when
     *   rendering a 3D view. Thus, any form inside the
     *   clipping planes is visible; anything outside those
     *   planes is not visible.
     *
     *   Setting the frustum changes the perspective of the
     *   scene being rendered. This can be achieved more
     *   simply in many cases by using perspective().
     *
     *   If no parameters are given, the following default
     *   is used: frustum(-width/20, width/20, height/20,
     *   -height/20, eyeZ/10, eyeZ*10), where eyeZ is equal
     *   to ((height/2) / tan(PI/6)).
     *   @param [left] camera frustum left plane
     *   @param [right] camera frustum right plane
     *   @param [bottom] camera frustum bottom plane
     *   @param [top] camera frustum top plane
     *   @param [near] camera frustum near plane
     *   @param [far] camera frustum far plane
     *   @chainable
     */
    function frustum(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): p5;

    /**
     *   Creates a new p5.Camera object and sets it as the
     *   current (active) camera. The new camera is
     *   initialized with a default position (see camera())
     *   and a default perspective projection (see
     *   perspective()). Its properties can be controlled
     *   with the p5.Camera methods.
     *
     *   Note: Every 3D sketch starts with a default camera
     *   initialized. This camera can be controlled with
     *   the global methods camera(), perspective(),
     *   ortho(), and frustum() if it is the only camera in
     *   the scene.
     *   @return The newly created camera object.
     */
    function createCamera(): p5.Camera;

    /**
     *   Sets the current (active) camera of a 3D sketch.
     *   Allows for switching between multiple cameras.
     *   @param cam p5.Camera object
     */
    function setCamera(cam: p5.Camera): void;

    /**
     *   Sets the normal to use for subsequent vertices.
     *   @chainable
     */
    function vertexNormal(x: number, y: number, z: number, v: p5.Vector): p5;

    /**
     *   Set attributes for the WebGL Drawing context. This
     *   is a way of adjusting how the WebGL renderer works
     *   to fine-tune the display and performance. Note
     *   that this will reinitialize the drawing context if
     *   called after the WebGL canvas is made.
     *
     *   If an object is passed as the parameter, all
     *   attributes not declared in the object will be set
     *   to defaults.
     *
     *   The available attributes are:
     *
     *   alpha - indicates if the canvas contains an alpha
     *   buffer default is true
     *
     *   depth - indicates whether the drawing buffer has a
     *   depth buffer of at least 16 bits - default is true
     *
     *   stencil - indicates whether the drawing buffer has
     *   a stencil buffer of at least 8 bits
     *
     *   antialias - indicates whether or not to perform
     *   anti-aliasing default is false (true in Safari)
     *
     *   premultipliedAlpha - indicates that the page
     *   compositor will assume the drawing buffer contains
     *   colors with pre-multiplied alpha default is true
     *
     *   preserveDrawingBuffer - if true the buffers will
     *   not be cleared and and will preserve their values
     *   until cleared or overwritten by author (note that
     *   p5 clears automatically on draw loop) default is
     *   true
     *
     *   perPixelLighting - if true, per-pixel lighting
     *   will be used in the lighting shader otherwise
     *   per-vertex lighting is used. default is true.
     *
     *   version - either 1 or 2, to specify which WebGL
     *   version to ask for. By default, WebGL 2 will be
     *   requested. If WebGL2 is not available, it will
     *   fall back to WebGL 1. You can check what version
     *   is used with by looking at the global webglVersion
     *   property.
     *   @param key Name of attribute
     *   @param value New value of named attribute
     */
    function setAttributes(key: string, value: boolean): void;

    /**
     *   Set attributes for the WebGL Drawing context. This
     *   is a way of adjusting how the WebGL renderer works
     *   to fine-tune the display and performance. Note
     *   that this will reinitialize the drawing context if
     *   called after the WebGL canvas is made.
     *
     *   If an object is passed as the parameter, all
     *   attributes not declared in the object will be set
     *   to defaults.
     *
     *   The available attributes are:
     *
     *   alpha - indicates if the canvas contains an alpha
     *   buffer default is true
     *
     *   depth - indicates whether the drawing buffer has a
     *   depth buffer of at least 16 bits - default is true
     *
     *   stencil - indicates whether the drawing buffer has
     *   a stencil buffer of at least 8 bits
     *
     *   antialias - indicates whether or not to perform
     *   anti-aliasing default is false (true in Safari)
     *
     *   premultipliedAlpha - indicates that the page
     *   compositor will assume the drawing buffer contains
     *   colors with pre-multiplied alpha default is true
     *
     *   preserveDrawingBuffer - if true the buffers will
     *   not be cleared and and will preserve their values
     *   until cleared or overwritten by author (note that
     *   p5 clears automatically on draw loop) default is
     *   true
     *
     *   perPixelLighting - if true, per-pixel lighting
     *   will be used in the lighting shader otherwise
     *   per-vertex lighting is used. default is true.
     *
     *   version - either 1 or 2, to specify which WebGL
     *   version to ask for. By default, WebGL 2 will be
     *   requested. If WebGL2 is not available, it will
     *   fall back to WebGL 1. You can check what version
     *   is used with by looking at the global webglVersion
     *   property.
     *   @param obj object with key-value pairs
     */
    function setAttributes(obj: object): void;

    /**
     *   Returns the Audio Context for this sketch. Useful
     *   for users who would like to dig deeper into the
     *   Web Audio API . Some browsers require users to
     *   startAudioContext with a user gesture, such as
     *   touchStarted in the example below.
     *   @return AudioContext for this sketch
     */
    function getAudioContext(): object;

    /**
     *   It is not only a good practice to give users
     *   control over starting audio. This policy is
     *   enforced by many web browsers, including iOS and
     *   Google Chrome, which create the Web Audio API's
     *   Audio Context in a suspended state. In these
     *   browser-specific policies, sound will not play
     *   until a user interaction event (i.e.
     *   mousePressed()) explicitly resumes the
     *   AudioContext, or starts an audio node. This can be
     *   accomplished by calling start() on a
     *   p5.Oscillator,  play() on a p5.SoundFile, or
     *   simply userStartAudio().
     *
     *   userStartAudio() starts the AudioContext on a user
     *   gesture. The default behavior will enable audio on
     *   any mouseUp or touchEnd event. It can also be
     *   placed in a specific interaction function, such as
     *   mousePressed() as in the example below. This
     *   method utilizes StartAudioContext , a library by
     *   Yotam Mann (MIT Licence, 2016).
     *   @param [elements] This argument can be an Element,
     *   Selector String, NodeList, p5.Element, jQuery
     *   Element, or an Array of any of those.
     *   @param [callback] Callback to invoke when the
     *   AudioContext has started
     *   @return Returns a Promise that resolves when the
     *   AudioContext state is 'running'
     */
    function userStartAudio(elements?: Element | any[], callback?: (...args: any[]) => any): Promise<any>;

    /**
     *   Returns a number representing the output volume
     *   for sound in this sketch.
     *   @return Output volume for sound in this sketch.
     *   Should be between 0.0 (silence) and 1.0.
     */
    function getOutputVolume(): number;

    /**
     *   Scale the output of all sound in this sketch
     *   Scaled between 0.0 (silence) and 1.0 (full
     *   volume). 1.0 is the maximum amplitude of a digital
     *   sound, so multiplying by greater than 1.0 may
     *   cause digital distortion. To fade, provide a
     *   rampTime parameter. For more complex fades, see
     *   the Envelope class. Alternately, you can pass in a
     *   signal source such as an oscillator to modulate
     *   the amplitude with an audio signal.
     *
     *   How This Works: When you load the p5.sound module,
     *   it creates a single instance of p5sound. All sound
     *   objects in this module output to p5sound before
     *   reaching your computer's output. So if you change
     *   the amplitude of p5sound, it impacts all of the
     *   sound in this module.
     *
     *   If no value is provided, returns a Web Audio API
     *   Gain Node
     *   @param volume Volume (amplitude) between 0.0 and
     *   1.0 or modulating signal/oscillator
     *   @param [rampTime] Fade for t seconds
     *   @param [timeFromNow] Schedule this event to happen
     *   at t seconds in the future
     */
    function outputVolume(volume: number | object, rampTime?: number, timeFromNow?: number): void;

    /**
     *   Returns a number representing the sample rate, in
     *   samples per second, of all sound objects in this
     *   audio context. It is determined by the sampling
     *   rate of your operating system's sound card, and it
     *   is not currently possile to change. It is often
     *   44100, or twice the range of human hearing.
     *   @return samplerate samples per second
     */
    function sampleRate(): number;

    /**
     *   Returns the closest MIDI note value for a given
     *   frequency.
     *   @param frequency A freqeuncy, for example, the "A"
     *   above Middle C is 440Hz
     *   @return MIDI note value
     */
    function freqToMidi(frequency: number): number;

    /**
     *   Returns the frequency value of a MIDI note value.
     *   General MIDI treats notes as integers where middle
     *   C is 60, C# is 61, D is 62 etc. Useful for
     *   generating musical frequencies with oscillators.
     *   @param midiNote The number of a MIDI note
     *   @return Frequency value of the given MIDI note
     */
    function midiToFreq(midiNote: number): number;

    /**
     *   List the SoundFile formats that you will include.
     *   LoadSound will search your directory for these
     *   extensions, and will pick a format that is
     *   compatable with the client's web browser. Here is
     *   a free online file converter.
     *   @param [formats] i.e. 'mp3', 'wav', 'ogg'
     */
    function soundFormats(formats?: string): void;

    /**
     *   Save a p5.SoundFile as a .wav file. The browser
     *   will prompt the user to download the file to their
     *   device. For uploading audio to a server, use
     *   p5.SoundFile.saveBlob.
     *   @param soundFile p5.SoundFile that you wish to
     *   save
     *   @param fileName name of the resulting .wav file.
     */
    function saveSound(soundFile: p5.SoundFile, fileName: string): void;

    /**
     *   loadSound() returns a new p5.SoundFile from a
     *   specified path. If called during preload(), the
     *   p5.SoundFile will be ready to play in time for
     *   setup() and draw(). If called outside of preload,
     *   the p5.SoundFile will not be ready immediately, so
     *   loadSound accepts a callback as the second
     *   parameter. Using a  local server is recommended
     *   when loading external files.
     *   @param path Path to the sound file, or an array
     *   with paths to soundfiles in multiple formats i.e.
     *   ['sound.ogg', 'sound.mp3']. Alternately, accepts
     *   an object: either from the HTML5 File API, or a
     *   p5.File.
     *   @param [successCallback] Name of a function to
     *   call once file loads
     *   @param [errorCallback] Name of a function to call
     *   if there is an error loading the file.
     *   @param [whileLoading] Name of a function to call
     *   while file is loading. This function will receive
     *   the percentage loaded so far, from 0.0 to 1.0.
     *   @return Returns a p5.SoundFile
     */
    function loadSound(
        path: string | any[],
        successCallback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any,
        whileLoading?: (...args: any[]) => any
    ): p5.SoundFile;

    /**
     *   Create a p5.Convolver. Accepts a path to a
     *   soundfile that will be used to generate an impulse
     *   response.
     *   @param path path to a sound file
     *   @param [callback] function to call if loading is
     *   successful. The object will be passed in as the
     *   argument to the callback function.
     *   @param [errorCallback] function to call if loading
     *   is not successful. A custom error will be passed
     *   in as the argument to the callback function.
     */
    function createConvolver(
        path: string,
        callback?: (...args: any[]) => any,
        errorCallback?: (...args: any[]) => any
    ): p5.Convolver;

    /**
     *   Set the global tempo, in beats per minute, for all
     *   p5.Parts. This method will impact all active
     *   p5.Parts.
     *   @param BPM Beats Per Minute
     *   @param rampTime Seconds from now
     */
    function setBPM(BPM: number, rampTime: number): void;

    /**
     *   p5.soundOut is the p5.sound final output bus. It
     *   sends output to the destination of this window's
     *   web audio context. It contains Web Audio API nodes
     *   including a dyanmicsCompressor (.limiter), and
     *   Gain Nodes for .input and .output.
     */
    let soundOut: object;
}
