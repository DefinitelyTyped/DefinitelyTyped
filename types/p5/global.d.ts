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
     *   constant CLOSE as the value for the mode parameter
     *   to close the shape (to connect the beginning and
     *   the end).
     *   @param [mode] use CLOSE to close the shape
     *   @chainable
     */
    function endShape(mode?: p5.END_MODE): p5;

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
    function normal(vector: Vector): p5;

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
    const FLOAT: p5.FLOAT;
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
     *   arguments returns the current framerate. The draw
     *   function must run at least once before it will
     *   return a value. This is the same as
     *   getFrameRate().
     *
     *   Calling frameRate() with arguments that are not of
     *   the type Number or are non-positive also returns
     *   current framerate.
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
     *   arguments returns the current framerate. The draw
     *   function must run at least once before it will
     *   return a value. This is the same as
     *   getFrameRate().
     *
     *   Calling frameRate() with arguments that are not of
     *   the type Number or are non-positive also returns
     *   current framerate.
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
    function windowResized(event?: object): void;

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
    function createCanvas(w: number, h: number, renderer?: p5.RENDERER, canvas?: object): p5.Renderer;

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
    function createCanvas(w: number, h: number, canvas?: object): p5.Renderer;

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
    function createGraphics(w: number, h: number, renderer?: p5.RENDERER, canvas?: object): p5.Graphics;

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
    function createGraphics(w: number, h: number, canvas?: object): p5.Graphics;

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
    function keyPressed(event?: object): void;

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
    function keyReleased(event?: object): void;

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
    function keyTyped(event?: object): void;

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
    function mouseMoved(event?: object): void;

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
    function mouseDragged(event?: object): void;

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
    function mousePressed(event?: object): void;

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
    function mouseReleased(event?: object): void;

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
    function mouseClicked(event?: object): void;

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
    function doubleClicked(event?: object): void;

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
    function mouseWheel(event?: object): void;

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
    function touchStarted(event?: object): void;

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
    function touchMoved(event?: object): void;

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
    function touchEnded(event?: object): void;

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
     *   Creates a new p5.Image (the datatype for storing
     *   images). This provides a fresh buffer of pixels to
     *   play with. Set the size of the buffer with the
     *   width and height parameters. .pixels gives access
     *   to an array containing the values for all the
     *   pixels in the display window. These values are
     *   numbers. This array is the size (including an
     *   appropriate factor for the pixelDensity) of the
     *   display window x4, representing the R, G, B, A
     *   values in order for each pixel, moving from left
     *   to right across each row, then down each column.
     *   See .pixels for more info. It may also be simpler
     *   to use set() or get().
     *
     *   Before accessing the pixels of an image, the data
     *   must loaded with the loadPixels() function. After
     *   the array data has been modified, the
     *   updatePixels() function must be run to update the
     *   changes.
     *   @param width width in pixels
     *   @param height height in pixels
     *   @return the p5.Image object
     */
    function createImage(width: number, height: number): p5.Image;

    /**
     *   Save the current canvas as an image. The browser
     *   will either save the file immediately, or prompt
     *   the user with a dialogue window.
     *   @param selectedCanvas a variable representing a
     *   specific html5 canvas (optional)
     *   @param [extension] 'jpg' or 'png'
     */
    function saveCanvas(selectedCanvas: p5.Element | HTMLCanvasElement, filename?: string, extension?: string): void;

    /**
     *   Save the current canvas as an image. The browser
     *   will either save the file immediately, or prompt
     *   the user with a dialogue window.
     *   @param [extension] 'jpg' or 'png'
     */
    function saveCanvas(filename?: string, extension?: string): void;

    /**
     *   Capture a sequence of frames that can be used to
     *   create a movie. Accepts a callback. For example,
     *   you may wish to send the frames to a server where
     *   they can be stored or converted into a movie. If
     *   no callback is provided, the browser will pop up
     *   save dialogues in an attempt to download all of
     *   the images that have just been created. With the
     *   callback provided the image data isn't saved by
     *   default but instead passed as an argument to the
     *   callback function as an array of objects, with the
     *   size of array equal to the total number of frames.
     *   The arguments duration and framerate are
     *   constrained to be less or equal to 15 and 22,
     *   respectively, which means you can only download a
     *   maximum of 15 seconds worth of frames at 22 frames
     *   per second, adding up to 330 frames. This is done
     *   in order to avoid memory problems since a large
     *   enough canvas can fill up the memory in your
     *   computer very easily and crash your program or
     *   even your browser.
     *
     *   To export longer animations, you might look into a
     *   library like ccapture.js.
     *   @param extension 'jpg' or 'png'
     *   @param duration Duration in seconds to save the
     *   frames for. This parameter will be constrained to
     *   be less or equal to 15.
     *   @param framerate Framerate to save the frames in.
     *   This parameter will be constrained to be less or
     *   equal to 22.
     *   @param [callback] A callback function that will be
     *   executed to handle the image data. This function
     *   should accept an array as argument. The array will
     *   contain the specified number of frames of objects.
     *   Each object has three properties: imageData - an
     *   image/octet-stream, filename and extension.
     */
    function saveFrames(
        filename: string,
        extension: string,
        duration: number,
        framerate: number,
        callback?: (p1: any[]) => any
    ): void;

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
    function loadImage(
        path: string,
        successCallback?: (p1: p5.Image) => any,
        failureCallback?: (p1: Event) => any
    ): p5.Image;

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
     *   This may be called in setup, or, like in the
     *   example below, inside an event function, like
     *   keyPressed or mousePressed.
     *   @param filename File name of your gif
     *   @param duration Duration in seconds that you wish
     *   to capture from your sketch
     *   @param options An optional object that can contain
     *   five more arguments: delay, specifying how much
     *   time we should wait before recording; units, a
     *   string that can be either 'seconds' or 'frames'.
     *   By default it's 'seconds’; silent, a boolean that
     *   defines presence of progress notifications. By
     *   default it’s false; notificationDuration, a number
     *   that defines how long in seconds the final
     *   notification will live. 0, the default value,
     *   means that the notification will never be removed;
     *   notificationID, a string that specifies the
     *   notification DOM element id. By default it’s
     *   'progressBar’.
     */
    function saveGif(filename: string, duration: number, options: object): void;

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
    function image(
        img: p5.Image | p5.Element | p5.Framebuffer,
        x: number,
        y: number,
        width?: number,
        height?: number
    ): void;

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
    function tint(v1: number, v2: number, v3: number, alpha?: number): void;

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
    function tint(value: string): void;

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
    function tint(gray: number, alpha?: number): void;

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
    function tint(values: number[]): void;

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
    function tint(color: p5.Color): void;

    /**
     *   Removes the current fill value for displaying
     *   images and reverts to displaying images with their
     *   original hues.
     */
    function noTint(): void;

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
    function imageMode(mode: p5.IMAGE_MODE): void;

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
    function copy(sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;

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
    function filter(filterType: p5.FILTER_TYPE, filterParam?: number): void;

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
     *   @param w width of the section to be returned
     *   @param h height of the section to be returned
     *   @return the rectangle p5.Image
     */
    function get(x: number, y: number, w: number, h: number): p5.Image;

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
    function get(): p5.Image;

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
    function get(x: number, y: number): number[];

    /**
     *   Loads the pixel data for the display window into
     *   the pixels[] array. This function must always be
     *   called before reading from or writing to pixels[].
     *   Note that only changes made with set() or direct
     *   manipulation of pixels[] will occur.
     */
    function loadPixels(): void;

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
    function set(x: number, y: number, c: number | number[] | object): void;

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
    function updatePixels(x?: number, y?: number, w?: number, h?: number): void;

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
     *   Calculates the absolute value (magnitude) of a
     *   number. Maps to Math.abs(). The absolute value of
     *   a number is always positive.
     *   @param n number to compute
     *   @return absolute value of given number
     */
    function abs(n: number): number;

    /**
     *   Calculates the closest int value that is greater
     *   than or equal to the value of the parameter. Maps
     *   to Math.ceil(). For example, ceil(9.03) returns
     *   the value 10.
     *   @param n number to round up
     *   @return rounded up number
     */
    function ceil(n: number): number;

    /**
     *   Constrains a value between a minimum and maximum
     *   value.
     *   @param n number to constrain
     *   @param low minimum limit
     *   @param high maximum limit
     *   @return constrained number
     */
    function constrain(n: number, low: number, high: number): number;

    /**
     *   Calculates the distance between two points, in
     *   either two or three dimensions. If you looking for
     *   distance between two vectors see p5.Vector.dist()
     *   @param x1 x-coordinate of the first point
     *   @param y1 y-coordinate of the first point
     *   @param x2 x-coordinate of the second point
     *   @param y2 y-coordinate of the second point
     *   @return distance between the two points
     */
    function dist(x1: number, y1: number, x2: number, y2: number): number;

    /**
     *   Calculates the distance between two points, in
     *   either two or three dimensions. If you looking for
     *   distance between two vectors see p5.Vector.dist()
     *   @param x1 x-coordinate of the first point
     *   @param y1 y-coordinate of the first point
     *   @param z1 z-coordinate of the first point
     *   @param x2 x-coordinate of the second point
     *   @param y2 y-coordinate of the second point
     *   @param z2 z-coordinate of the second point
     *   @return distance between the two points
     */
    function dist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

    /**
     *   Returns Euler's number e (2.71828...) raised to
     *   the power of the n parameter. Maps to Math.exp().
     *   @param n exponent to raise
     *   @return e^n
     */
    function exp(n: number): number;

    /**
     *   Calculates the closest int value that is less than
     *   or equal to the value of the parameter. Maps to
     *   Math.floor().
     *   @param n number to round down
     *   @return rounded down number
     */
    function floor(n: number): number;

    /**
     *   Calculates a number between two numbers at a
     *   specific increment. The amt parameter is the
     *   amount to interpolate between the two values where
     *   0.0 is equal to the first point, 0.1 is very near
     *   the first point, 0.5 is half-way in between, and
     *   1.0 is equal to the second point. If the value of
     *   amt is more than 1.0 or less than 0.0, the number
     *   will be calculated accordingly in the ratio of the
     *   two given numbers. The lerp() function is
     *   convenient for creating motion along a straight
     *   path and for drawing dotted lines.
     *   @param start first value
     *   @param stop second value
     *   @param amt number
     *   @return lerped value
     */
    function lerp(start: number, stop: number, amt: number): number;

    /**
     *   Calculates the natural logarithm (the base-e
     *   logarithm) of a number. This function expects the
     *   n parameter to be a value greater than 0.0. Maps
     *   to Math.log().
     *   @param n number greater than 0
     *   @return natural logarithm of n
     */
    function log(n: number): number;

    /**
     *   Calculates the magnitude (or length) of a vector.
     *   A vector is a direction in space commonly used in
     *   computer graphics and linear algebra. Because it
     *   has no "start" position, the magnitude of a vector
     *   can be thought of as the distance from the
     *   coordinate 0,0 to its x,y value. Therefore, mag()
     *   is a shortcut for writing dist(0, 0, x, y).
     *   @param a first value
     *   @param b second value
     *   @return magnitude of vector from (0,0) to (a,b)
     */
    function mag(a: number, b: number): number;

    /**
     *   Re-maps a number from one range to another. In the
     *   first example above, the number 25 is converted
     *   from a value in the range of 0 to 100 into a value
     *   that ranges from the left edge of the window (0)
     *   to the right edge (width).
     *   @param value the incoming value to be converted
     *   @param start1 lower bound of the value's current
     *   range
     *   @param stop1 upper bound of the value's current
     *   range
     *   @param start2 lower bound of the value's target
     *   range
     *   @param stop2 upper bound of the value's target
     *   range
     *   @param [withinBounds] constrain the value to the
     *   newly mapped range
     *   @return remapped number
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
     *   Determines the largest value in a sequence of
     *   numbers, and then returns that value. max()
     *   accepts any number of Number parameters, or an
     *   Array of any length.
     *   @param n0 Number to compare
     *   @param n1 Number to compare
     *   @return maximum Number
     */
    function max(n0: number, n1: number): number;

    /**
     *   Determines the largest value in a sequence of
     *   numbers, and then returns that value. max()
     *   accepts any number of Number parameters, or an
     *   Array of any length.
     *   @param nums Numbers to compare
     */
    function max(nums: number[]): number;

    /**
     *   Determines the smallest value in a sequence of
     *   numbers, and then returns that value. min()
     *   accepts any number of Number parameters, or an
     *   Array of any length.
     *   @param n0 Number to compare
     *   @param n1 Number to compare
     *   @return minimum Number
     */
    function min(n0: number, n1: number): number;

    /**
     *   Determines the smallest value in a sequence of
     *   numbers, and then returns that value. min()
     *   accepts any number of Number parameters, or an
     *   Array of any length.
     *   @param nums Numbers to compare
     */
    function min(nums: number[]): number;

    /**
     *   Normalizes a number from another range into a
     *   value between 0 and 1. Identical to map(value,
     *   low, high, 0, 1). Numbers outside of the range are
     *   not clamped to 0 and 1, because out-of-range
     *   values are often intentional and useful. (See the
     *   example above.)
     *   @param value incoming value to be normalized
     *   @param start lower bound of the value's current
     *   range
     *   @param stop upper bound of the value's current
     *   range
     *   @return normalized number
     */
    function norm(value: number, start: number, stop: number): number;

    /**
     *   Facilitates exponential expressions. The pow()
     *   function is an efficient way of multiplying
     *   numbers by themselves (or their reciprocals) in
     *   large quantities. For example, pow(3, 5) is
     *   equivalent to the expression 3 × 3 × 3 × 3 × 3 and
     *   pow(3, -5) is equivalent to 1 / 3 × 3 × 3 × 3 × 3.
     *   Maps to Math.pow().
     *   @param n base of the exponential expression
     *   @param e power by which to raise the base
     *   @return n^e
     */
    function pow(n: number, e: number): number;

    /**
     *   Calculates the integer closest to the n parameter.
     *   For example, round(133.8) returns the value 134.
     *   Maps to Math.round().
     *   @param n number to round
     *   @param [decimals] number of decimal places to
     *   round to, default is 0
     *   @return rounded number
     */
    function round(n: number, decimals?: number): number;

    /**
     *   Squares a number (multiplies a number by itself).
     *   The result is always a positive number, as
     *   multiplying two negative numbers always yields a
     *   positive result. For example, -1 * -1 = 1.
     *   @param n number to square
     *   @return squared number
     */
    function sq(n: number): number;

    /**
     *   Calculates the square root of a number. The square
     *   root of a number is always positive, even though
     *   there may be a valid negative root. The square
     *   root s of number a is such that s*s = a. It is the
     *   opposite of squaring. Maps to Math.sqrt().
     *   @param n non-negative number to square root
     *   @return square root of number
     */
    function sqrt(n: number): number;

    /**
     *   Calculates the fractional part of a number.
     *   @param num Number whose fractional part needs to
     *   be found out
     *   @return fractional part of x, i.e, {x}
     */
    function fract(num: number): number;

    /**
     *   Creates a new p5.Vector (the datatype for storing
     *   vectors). This provides a two or three-dimensional
     *   vector, specifically a Euclidean (also known as
     *   geometric) vector. A vector is an entity that has
     *   both magnitude and direction.
     *   @param [x] x component of the vector
     *   @param [y] y component of the vector
     *   @param [z] z component of the vector
     */
    function createVector(x?: number, y?: number, z?: number): p5.Vector;

    /**
     *   Returns the Perlin noise value at specified
     *   coordinates. Perlin noise is a random sequence
     *   generator producing a more naturally ordered,
     *   harmonic succession of numbers compared to the
     *   standard random() function. It was invented by Ken
     *   Perlin in the 1980s and been used since in
     *   graphical applications to produce procedural
     *   textures, natural motion, shapes, terrains etc.
     *   The main difference to the random() function is
     *   that Perlin noise is defined in an infinite
     *   n-dimensional space where each pair of coordinates
     *   corresponds to a fixed semi-random value (fixed
     *   only for the lifespan of the program; see the
     *   noiseSeed() function). p5.js can compute 1D, 2D
     *   and 3D noise, depending on the number of
     *   coordinates given. The resulting value will always
     *   be between 0.0 and 1.0. The noise value can be
     *   animated by moving through the noise space as
     *   demonstrated in the example above. The 2nd and 3rd
     *   dimensions can also be interpreted as time.
     *
     *   The actual noise is structured similar to an audio
     *   signal, in respect to the function's use of
     *   frequencies. Similar to the concept of harmonics
     *   in physics, Perlin noise is computed over several
     *   octaves which are added together for the final
     *   result.
     *
     *   Another way to adjust the character of the
     *   resulting sequence is the scale of the input
     *   coordinates. As the function works within an
     *   infinite space the value of the coordinates
     *   doesn't matter as such, only the distance between
     *   successive coordinates does (eg. when using
     *   noise() within a loop). As a general rule the
     *   smaller the difference between coordinates, the
     *   smoother the resulting noise sequence will be.
     *   Steps of 0.005-0.03 work best for most
     *   applications, but this will differ depending on
     *   use.
     *   @param x x-coordinate in noise space
     *   @param [y] y-coordinate in noise space
     *   @param [z] z-coordinate in noise space
     *   @return Perlin noise value (between 0 and 1) at
     *   specified coordinates
     */
    function noise(x: number, y?: number, z?: number): number;

    /**
     *   Adjusts the character and level of detail produced
     *   by the Perlin noise function. Similar to harmonics
     *   in physics, noise is computed over several
     *   octaves. Lower octaves contribute more to the
     *   output signal and as such define the overall
     *   intensity of the noise, whereas higher octaves
     *   create finer-grained details in the noise
     *   sequence. By default, noise is computed over 4
     *   octaves with each octave contributing exactly half
     *   as much as its predecessor, starting at 50%
     *   strength for the 1st octave. This falloff amount
     *   can be changed by adding an additional function
     *   parameter. Eg. a falloff factor of 0.75 means each
     *   octave will now have 75% impact (25% less) of the
     *   previous lower octave. Any value between 0.0 and
     *   1.0 is valid, however, note that values greater
     *   than 0.5 might result in greater than 1.0 values
     *   returned by noise(). By changing these parameters,
     *   the signal created by the noise() function can be
     *   adapted to fit very specific needs and
     *   characteristics.
     *   @param lod number of octaves to be used by the
     *   noise
     *   @param falloff falloff factor for each octave
     */
    function noiseDetail(lod: number, falloff: number): void;

    /**
     *   Sets the seed value for noise(). By default,
     *   noise() produces different results each time the
     *   program is run. Set the seed parameter to a
     *   constant to return the same pseudo-random numbers
     *   each time the software is run.
     *   @param seed the seed value
     */
    function noiseSeed(seed: number): void;

    /**
     *   Sets the seed value for random(). By default,
     *   random() produces different results each time the
     *   program is run. Set the seed parameter to a
     *   constant to return the same pseudo-random numbers
     *   each time the software is run.
     *   @param seed the seed value
     */
    function randomSeed(seed: number): void;

    /**
     *   Return a random floating-point number. Takes
     *   either 0, 1 or 2 arguments.
     *
     *   If no argument is given, returns a random number
     *   from 0 up to (but not including) 1.
     *
     *   If one argument is given and it is a number,
     *   returns a random number from 0 up to (but not
     *   including) the number.
     *
     *   If one argument is given and it is an array,
     *   returns a random element from that array.
     *
     *   If two arguments are given, returns a random
     *   number from the first argument up to (but not
     *   including) the second argument.
     *   @param [min] the lower bound (inclusive)
     *   @param [max] the upper bound (exclusive)
     *   @return the random number
     */
    function random(min?: number, max?: number): number;

    /**
     *   Return a random floating-point number. Takes
     *   either 0, 1 or 2 arguments.
     *
     *   If no argument is given, returns a random number
     *   from 0 up to (but not including) 1.
     *
     *   If one argument is given and it is a number,
     *   returns a random number from 0 up to (but not
     *   including) the number.
     *
     *   If one argument is given and it is an array,
     *   returns a random element from that array.
     *
     *   If two arguments are given, returns a random
     *   number from the first argument up to (but not
     *   including) the second argument.
     *   @param choices the array to choose from
     *   @return the random element from the array
     */
    function random(choices: any[]): any;

    /**
     *   Returns a random number fitting a Gaussian, or
     *   normal, distribution. There is theoretically no
     *   minimum or maximum value that randomGaussian()
     *   might return. Rather, there is just a very low
     *   probability that values far from the mean will be
     *   returned; and a higher probability that numbers
     *   near the mean will be returned. Takes either 0, 1
     *   or 2 arguments. If no args, the mean is 0 and the
     *   standard deviation is 1.
     *
     *   If one arg, that arg is the mean and the standard
     *   deviation is 1.
     *
     *   If two args, the first arg is the mean and the
     *   second is the standard deviation.
     *   @param [mean] the mean
     *   @param [sd] the standard deviation
     *   @return the random number
     */
    function randomGaussian(mean?: number, sd?: number): number;

    /**
     *   The inverse of cos(), returns the arc cosine of a
     *   value. This function expects the values in the
     *   range of -1 to 1 and values are returned in the
     *   range 0 to PI (3.1415927) if the angleMode() is
     *   RADIANS or 0 to 180 if the angleMode() is DEGREES.
     *   @param value the value whose arc cosine is to be
     *   returned
     *   @return the arc cosine of the given value
     */
    function acos(value: number): number;

    /**
     *   The inverse of sin(), returns the arc sine of a
     *   value. This function expects the values in the
     *   range of -1 to 1 and values are returned in the
     *   range -PI/2 to PI/2 if the angleMode is RADIANS or
     *   -90 to 90 if the angle mode is DEGREES.
     *   @param value the value whose arc sine is to be
     *   returned
     *   @return the arc sine of the given value
     */
    function asin(value: number): number;

    /**
     *   The inverse of tan(), returns the arc tangent of a
     *   value. This function expects the values in the
     *   range of -Infinity to Infinity (exclusive) and
     *   values are returned in the range -PI/2 to PI/2 if
     *   the angleMode is RADIANS or -90 to 90 if the angle
     *   mode is DEGREES.
     *   @param value the value whose arc tangent is to be
     *   returned
     *   @return the arc tangent of the given value
     */
    function atan(value: number): number;

    /**
     *   Calculates the angle (in radians) from a specified
     *   point to the coordinate origin as measured from
     *   the positive x-axis. Values are returned as a
     *   float in the range from PI to -PI if the
     *   angleMode() is RADIANS or 180 to -180 if the
     *   angleMode() is DEGREES. The atan2() function is
     *   most often used for orienting geometry to the
     *   position of the cursor. Note: The y-coordinate of
     *   the point is the first parameter, and the
     *   x-coordinate is the second parameter, due to the
     *   structure of calculating the tangent.
     *   @param y y-coordinate of the point
     *   @param x x-coordinate of the point
     *   @return the arc tangent of the given point
     */
    function atan2(y: number, x: number): number;

    /**
     *   Calculates the cosine of an angle. This function
     *   takes into account the current angleMode. Values
     *   are returned in the range -1 to 1.
     *   @param angle the angle
     *   @return the cosine of the angle
     */
    function cos(angle: number): number;

    /**
     *   Calculates the sine of an angle. This function
     *   takes into account the current angleMode. Values
     *   are returned in the range -1 to 1.
     *   @param angle the angle
     *   @return the sine of the angle
     */
    function sin(angle: number): number;

    /**
     *   Calculates the tangent of an angle. This function
     *   takes into account the current angleMode. Values
     *   are returned in the range of all real numbers.
     *   @param angle the angle
     *   @return the tangent of the angle
     */
    function tan(angle: number): number;

    /**
     *   Converts a radian measurement to its corresponding
     *   value in degrees. Radians and degrees are two ways
     *   of measuring the same thing. There are 360 degrees
     *   in a circle and 2*PI radians in a circle. For
     *   example, 90° = PI/2 = 1.5707964. This function
     *   does not take into account the current
     *   angleMode().
     *   @param radians the radians value to convert to
     *   degrees
     *   @return the converted angle
     */
    function degrees(radians: number): number;

    /**
     *   Converts a degree measurement to its corresponding
     *   value in radians. Radians and degrees are two ways
     *   of measuring the same thing. There are 360 degrees
     *   in a circle and 2*PI radians in a circle. For
     *   example, 90° = PI/2 = 1.5707964. This function
     *   does not take into account the current angleMode.
     *   @param degrees the degree value to convert to
     *   radians
     *   @return the converted angle
     */
    function radians(degrees: number): number;

    /**
     *   Sets the current mode of p5 to the given mode.
     *   Default mode is RADIANS. Calling angleMode() with
     *   no arguments returns current anglemode.
     *   @param mode either RADIANS or DEGREES
     */
    function angleMode(mode: p5.ANGLE_MODE): void;

    /**
     *   Sets the current mode of p5 to the given mode.
     *   Default mode is RADIANS. Calling angleMode() with
     *   no arguments returns current anglemode.
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
     *   or text string.
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
     *   Loads an opentype font file (.otf, .ttf) from a
     *   file or a URL, and returns a p5.Font object. This
     *   function is asynchronous, meaning it may not
     *   finish before the next line in your sketch is
     *   executed. The path to the font should be relative
     *   to the HTML file that links in your sketch.
     *   Loading fonts from a URL or other remote location
     *   may be blocked due to your browser's built-in
     *   security.
     *   @param path name of the file or url to load
     *   @param [callback] function to be executed after
     *   loadFont() completes
     *   @param [onError] function to be executed if an
     *   error occurs
     *   @return p5.Font object
     */
    function loadFont(path: string, callback?: (...args: any[]) => any, onError?: (...args: any[]) => any): p5.Font;

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
     *   functions. The text displays in relation to the
     *   textAlign() function, which gives the option to
     *   draw to the left, right, and center of the
     *   coordinates.
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
     *   WEBGL: Only opentype/truetype fonts are supported.
     *   You must load a font using the loadFont() method
     *   (see the example above). stroke() currently has no
     *   effect in webgl mode. Learn more about working
     *   with text in webgl mode on the wiki.
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
    function text(str: string | object | any[] | number | boolean, x: number, y: number, x2?: number, y2?: number): p5;

    /**
     *   Sets the current font that will be drawn with the
     *   text() function. If textFont() is called without
     *   any argument, it will return the current font if
     *   one has been set already. If not, it will return
     *   the name of the default font as a string. If
     *   textFont() is called with a font to use, it will
     *   return the p5 object. WEBGL: Only fonts loaded via
     *   loadFont() are supported.
     *   @return the current font / p5 Object
     */
    function textFont(): object;

    /**
     *   Sets the current font that will be drawn with the
     *   text() function. If textFont() is called without
     *   any argument, it will return the current font if
     *   one has been set already. If not, it will return
     *   the name of the default font as a string. If
     *   textFont() is called with a font to use, it will
     *   return the p5 object. WEBGL: Only fonts loaded via
     *   loadFont() are supported.
     *   @param font a font loaded via loadFont(), or a
     *   String representing a web safe font (a font that
     *   is generally available across all systems)
     *   @param [size] the font size to use
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
    function vertexNormal(x: number, y: number, z: number, v: Vector): p5;

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
    ): SoundFile;

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
