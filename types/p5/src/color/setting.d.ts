// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   The background() function sets the color used for
         *   the background of the p5.js canvas. The default
         *   background is transparent. This function is
         *   typically used within draw() to clear the display
         *   window at the beginning of each frame, but it can
         *   be used inside setup() to set the background on
         *   the first frame of animation or if the background
         *   need only be set once.  The color is either
         *   specified in terms of the RGB, HSB, or HSL color
         *   depending on the current colorMode. (The default
         *   color space is RGB, with each value in the range
         *   from 0 to 255). The alpha range by default is also
         *   0 to 255.
         *
         *
         *   If a single string argument is provided, RGB, RGBA
         *   and Hex CSS color strings and all named color
         *   strings are supported. In this case, an alpha
         *   number value as a second argument is not
         *   supported, the RGBA form should be used.
         *
         *
         *   A p5.Color object can also be provided to set the
         *   background color.
         *
         *
         *   A p5.Image can also be provided to set the
         *   background image.
         *   @param color any value created by the color()
         *   function
         *   @chainable
         */
        background(color: Color): p5;

        /**
         *   The background() function sets the color used for
         *   the background of the p5.js canvas. The default
         *   background is transparent. This function is
         *   typically used within draw() to clear the display
         *   window at the beginning of each frame, but it can
         *   be used inside setup() to set the background on
         *   the first frame of animation or if the background
         *   need only be set once.  The color is either
         *   specified in terms of the RGB, HSB, or HSL color
         *   depending on the current colorMode. (The default
         *   color space is RGB, with each value in the range
         *   from 0 to 255). The alpha range by default is also
         *   0 to 255.
         *
         *
         *   If a single string argument is provided, RGB, RGBA
         *   and Hex CSS color strings and all named color
         *   strings are supported. In this case, an alpha
         *   number value as a second argument is not
         *   supported, the RGBA form should be used.
         *
         *
         *   A p5.Color object can also be provided to set the
         *   background color.
         *
         *
         *   A p5.Image can also be provided to set the
         *   background image.
         *   @param colorstring color string, possible formats
         *   include: integer rgb() or rgba(), percentage rgb()
         *   or rgba(), 3-digit hex, 6-digit hex
         *   @param [a] opacity of the background relative to
         *   current color range (default is 0-255)
         *   @chainable
         */
        background(colorstring: string, a?: number): p5;

        /**
         *   The background() function sets the color used for
         *   the background of the p5.js canvas. The default
         *   background is transparent. This function is
         *   typically used within draw() to clear the display
         *   window at the beginning of each frame, but it can
         *   be used inside setup() to set the background on
         *   the first frame of animation or if the background
         *   need only be set once.  The color is either
         *   specified in terms of the RGB, HSB, or HSL color
         *   depending on the current colorMode. (The default
         *   color space is RGB, with each value in the range
         *   from 0 to 255). The alpha range by default is also
         *   0 to 255.
         *
         *
         *   If a single string argument is provided, RGB, RGBA
         *   and Hex CSS color strings and all named color
         *   strings are supported. In this case, an alpha
         *   number value as a second argument is not
         *   supported, the RGBA form should be used.
         *
         *
         *   A p5.Color object can also be provided to set the
         *   background color.
         *
         *
         *   A p5.Image can also be provided to set the
         *   background image.
         *   @param gray specifies a value between white and
         *   black
         *   @param [a] opacity of the background relative to
         *   current color range (default is 0-255)
         *   @chainable
         */
        background(gray: number, a?: number): p5;

        /**
         *   The background() function sets the color used for
         *   the background of the p5.js canvas. The default
         *   background is transparent. This function is
         *   typically used within draw() to clear the display
         *   window at the beginning of each frame, but it can
         *   be used inside setup() to set the background on
         *   the first frame of animation or if the background
         *   need only be set once.  The color is either
         *   specified in terms of the RGB, HSB, or HSL color
         *   depending on the current colorMode. (The default
         *   color space is RGB, with each value in the range
         *   from 0 to 255). The alpha range by default is also
         *   0 to 255.
         *
         *
         *   If a single string argument is provided, RGB, RGBA
         *   and Hex CSS color strings and all named color
         *   strings are supported. In this case, an alpha
         *   number value as a second argument is not
         *   supported, the RGBA form should be used.
         *
         *
         *   A p5.Color object can also be provided to set the
         *   background color.
         *
         *
         *   A p5.Image can also be provided to set the
         *   background image.
         *   @param v1 red or hue value (depending on the
         *   current color mode)
         *   @param v2 green or saturation value (depending on
         *   the current color mode)
         *   @param v3 blue or brightness value (depending on
         *   the current color mode)
         *   @param [a] opacity of the background relative to
         *   current color range (default is 0-255)
         *   @chainable
         */
        background(v1: number, v2: number, v3: number, a?: number): p5;

        /**
         *   The background() function sets the color used for
         *   the background of the p5.js canvas. The default
         *   background is transparent. This function is
         *   typically used within draw() to clear the display
         *   window at the beginning of each frame, but it can
         *   be used inside setup() to set the background on
         *   the first frame of animation or if the background
         *   need only be set once.  The color is either
         *   specified in terms of the RGB, HSB, or HSL color
         *   depending on the current colorMode. (The default
         *   color space is RGB, with each value in the range
         *   from 0 to 255). The alpha range by default is also
         *   0 to 255.
         *
         *
         *   If a single string argument is provided, RGB, RGBA
         *   and Hex CSS color strings and all named color
         *   strings are supported. In this case, an alpha
         *   number value as a second argument is not
         *   supported, the RGBA form should be used.
         *
         *
         *   A p5.Color object can also be provided to set the
         *   background color.
         *
         *
         *   A p5.Image can also be provided to set the
         *   background image.
         *   @param values an array containing the red, green,
         *   blue and alpha components of the color
         *   @chainable
         */
        background(values: number[]): p5;

        /**
         *   The background() function sets the color used for
         *   the background of the p5.js canvas. The default
         *   background is transparent. This function is
         *   typically used within draw() to clear the display
         *   window at the beginning of each frame, but it can
         *   be used inside setup() to set the background on
         *   the first frame of animation or if the background
         *   need only be set once.  The color is either
         *   specified in terms of the RGB, HSB, or HSL color
         *   depending on the current colorMode. (The default
         *   color space is RGB, with each value in the range
         *   from 0 to 255). The alpha range by default is also
         *   0 to 255.
         *
         *
         *   If a single string argument is provided, RGB, RGBA
         *   and Hex CSS color strings and all named color
         *   strings are supported. In this case, an alpha
         *   number value as a second argument is not
         *   supported, the RGBA form should be used.
         *
         *
         *   A p5.Color object can also be provided to set the
         *   background color.
         *
         *
         *   A p5.Image can also be provided to set the
         *   background image.
         *   @param image image created with loadImage() or
         *   createImage(), to set as background (must be same
         *   size as the sketch window)
         *   @param [a] opacity of the background relative to
         *   current color range (default is 0-255)
         *   @chainable
         */
        background(image: Image, a?: number): p5;

        /**
         *   Clears the pixels within a buffer. This function
         *   only clears the canvas. It will not clear objects
         *   created by createX() methods such as createVideo()
         *   or createDiv(). Unlike the main graphics context,
         *   pixels in additional graphics areas created with
         *   createGraphics() can be entirely or partially
         *   transparent. This function clears everything to
         *   make all of the pixels 100% transparent.
         *   @chainable
         */
        clear(): p5;

        /**
         *   colorMode() changes the way p5.js interprets color
         *   data. By default, the parameters for fill(),
         *   stroke(), background(), and color() are defined by
         *   values between 0 and 255 using the RGB color
         *   model. This is equivalent to setting
         *   colorMode(RGB, 255). Setting colorMode(HSB) lets
         *   you use the HSB system instead. By default, this
         *   is colorMode(HSB, 360, 100, 100, 1). You can also
         *   use HSL.  Note: existing color objects remember
         *   the mode that they were created in, so you can
         *   change modes as you like without affecting their
         *   appearance.
         *   @param mode either RGB, HSB or HSL, corresponding
         *   to Red/Green/Blue and Hue/Saturation/Brightness
         *   (or Lightness)
         *   @param [max] range for all values
         *   @chainable
         */
        colorMode(mode: COLOR_MODE, max?: number): p5;

        /**
         *   colorMode() changes the way p5.js interprets color
         *   data. By default, the parameters for fill(),
         *   stroke(), background(), and color() are defined by
         *   values between 0 and 255 using the RGB color
         *   model. This is equivalent to setting
         *   colorMode(RGB, 255). Setting colorMode(HSB) lets
         *   you use the HSB system instead. By default, this
         *   is colorMode(HSB, 360, 100, 100, 1). You can also
         *   use HSL.  Note: existing color objects remember
         *   the mode that they were created in, so you can
         *   change modes as you like without affecting their
         *   appearance.
         *   @param mode either RGB, HSB or HSL, corresponding
         *   to Red/Green/Blue and Hue/Saturation/Brightness
         *   (or Lightness)
         *   @param max1 range for the red or hue depending on
         *   the current color mode
         *   @param max2 range for the green or saturation
         *   depending on the current color mode
         *   @param max3 range for the blue or
         *   brightness/lightness depending on the current
         *   color mode
         *   @param [maxA] range for the alpha
         *   @chainable
         */
        colorMode(mode: UNKNOWN_P5_CONSTANT, max1: number, max2: number, max3: number, maxA?: number): p5;

        /**
         *   Sets the color used to fill shapes. For example,
         *   if you run fill(204, 102, 0), all shapes drawn
         *   after the fill command will be filled with the
         *   color orange. This color is either specified in
         *   terms of the RGB or HSB color depending on the
         *   current colorMode(). (The default color space is
         *   RGB, with each value in the range from 0 to 255).
         *   The alpha range by default is also 0 to 255.  If a
         *   single string argument is provided, RGB, RGBA and
         *   Hex CSS color strings and all named color strings
         *   are supported. In this case, an alpha number value
         *   as a second argument is not supported, the RGBA
         *   form should be used.
         *
         *
         *   A p5 Color object can also be provided to set the
         *   fill color.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @chainable
         */
        fill(v1: number, v2: number, v3: number, alpha?: number): p5;

        /**
         *   Sets the color used to fill shapes. For example,
         *   if you run fill(204, 102, 0), all shapes drawn
         *   after the fill command will be filled with the
         *   color orange. This color is either specified in
         *   terms of the RGB or HSB color depending on the
         *   current colorMode(). (The default color space is
         *   RGB, with each value in the range from 0 to 255).
         *   The alpha range by default is also 0 to 255.  If a
         *   single string argument is provided, RGB, RGBA and
         *   Hex CSS color strings and all named color strings
         *   are supported. In this case, an alpha number value
         *   as a second argument is not supported, the RGBA
         *   form should be used.
         *
         *
         *   A p5 Color object can also be provided to set the
         *   fill color.
         *   @param value a color string
         *   @chainable
         */
        fill(value: string): p5;

        /**
         *   Sets the color used to fill shapes. For example,
         *   if you run fill(204, 102, 0), all shapes drawn
         *   after the fill command will be filled with the
         *   color orange. This color is either specified in
         *   terms of the RGB or HSB color depending on the
         *   current colorMode(). (The default color space is
         *   RGB, with each value in the range from 0 to 255).
         *   The alpha range by default is also 0 to 255.  If a
         *   single string argument is provided, RGB, RGBA and
         *   Hex CSS color strings and all named color strings
         *   are supported. In this case, an alpha number value
         *   as a second argument is not supported, the RGBA
         *   form should be used.
         *
         *
         *   A p5 Color object can also be provided to set the
         *   fill color.
         *   @param gray a gray value
         *   @chainable
         */
        fill(gray: number, alpha?: number): p5;

        /**
         *   Sets the color used to fill shapes. For example,
         *   if you run fill(204, 102, 0), all shapes drawn
         *   after the fill command will be filled with the
         *   color orange. This color is either specified in
         *   terms of the RGB or HSB color depending on the
         *   current colorMode(). (The default color space is
         *   RGB, with each value in the range from 0 to 255).
         *   The alpha range by default is also 0 to 255.  If a
         *   single string argument is provided, RGB, RGBA and
         *   Hex CSS color strings and all named color strings
         *   are supported. In this case, an alpha number value
         *   as a second argument is not supported, the RGBA
         *   form should be used.
         *
         *
         *   A p5 Color object can also be provided to set the
         *   fill color.
         *   @param values an array containing the
         *   red,green,blue & and alpha components of the color
         *   @chainable
         */
        fill(values: number[]): p5;

        /**
         *   Sets the color used to fill shapes. For example,
         *   if you run fill(204, 102, 0), all shapes drawn
         *   after the fill command will be filled with the
         *   color orange. This color is either specified in
         *   terms of the RGB or HSB color depending on the
         *   current colorMode(). (The default color space is
         *   RGB, with each value in the range from 0 to 255).
         *   The alpha range by default is also 0 to 255.  If a
         *   single string argument is provided, RGB, RGBA and
         *   Hex CSS color strings and all named color strings
         *   are supported. In this case, an alpha number value
         *   as a second argument is not supported, the RGBA
         *   form should be used.
         *
         *
         *   A p5 Color object can also be provided to set the
         *   fill color.
         *   @param color the fill color
         *   @chainable
         */
        fill(color: Color): p5;

        /**
         *   Disables filling geometry. If both noStroke() and
         *   noFill() are called, nothing will be drawn to the
         *   screen.
         *   @chainable
         */
        noFill(): p5;

        /**
         *   Disables drawing the stroke (outline). If both
         *   noStroke() and noFill() are called, nothing will
         *   be drawn to the screen.
         *   @chainable
         */
        noStroke(): p5;

        /**
         *   Sets the color used to draw lines and borders
         *   around shapes. This color is either specified in
         *   terms of the RGB or HSB color depending on the
         *   current colorMode() (the default color space is
         *   RGB, with each value in the range from 0 to 255).
         *   The alpha range by default is also 0 to 255.  If a
         *   single string argument is provided, RGB, RGBA and
         *   Hex CSS color strings and all named color strings
         *   are supported. In this case, an alpha number value
         *   as a second argument is not supported, the RGBA
         *   form should be used.
         *
         *
         *   A p5 Color object can also be provided to set the
         *   stroke color.
         *   @param v1 red or hue value relative to the current
         *   color range
         *   @param v2 green or saturation value relative to
         *   the current color range
         *   @param v3 blue or brightness value relative to the
         *   current color range
         *   @chainable
         */
        stroke(v1: number, v2: number, v3: number, alpha?: number): p5;

        /**
         *   Sets the color used to draw lines and borders
         *   around shapes. This color is either specified in
         *   terms of the RGB or HSB color depending on the
         *   current colorMode() (the default color space is
         *   RGB, with each value in the range from 0 to 255).
         *   The alpha range by default is also 0 to 255.  If a
         *   single string argument is provided, RGB, RGBA and
         *   Hex CSS color strings and all named color strings
         *   are supported. In this case, an alpha number value
         *   as a second argument is not supported, the RGBA
         *   form should be used.
         *
         *
         *   A p5 Color object can also be provided to set the
         *   stroke color.
         *   @param value a color string
         *   @chainable
         */
        stroke(value: string): p5;

        /**
         *   Sets the color used to draw lines and borders
         *   around shapes. This color is either specified in
         *   terms of the RGB or HSB color depending on the
         *   current colorMode() (the default color space is
         *   RGB, with each value in the range from 0 to 255).
         *   The alpha range by default is also 0 to 255.  If a
         *   single string argument is provided, RGB, RGBA and
         *   Hex CSS color strings and all named color strings
         *   are supported. In this case, an alpha number value
         *   as a second argument is not supported, the RGBA
         *   form should be used.
         *
         *
         *   A p5 Color object can also be provided to set the
         *   stroke color.
         *   @param gray a gray value
         *   @chainable
         */
        stroke(gray: number, alpha?: number): p5;

        /**
         *   Sets the color used to draw lines and borders
         *   around shapes. This color is either specified in
         *   terms of the RGB or HSB color depending on the
         *   current colorMode() (the default color space is
         *   RGB, with each value in the range from 0 to 255).
         *   The alpha range by default is also 0 to 255.  If a
         *   single string argument is provided, RGB, RGBA and
         *   Hex CSS color strings and all named color strings
         *   are supported. In this case, an alpha number value
         *   as a second argument is not supported, the RGBA
         *   form should be used.
         *
         *
         *   A p5 Color object can also be provided to set the
         *   stroke color.
         *   @param values an array containing the
         *   red,green,blue & and alpha components of the color
         *   @chainable
         */
        stroke(values: number[]): p5;

        /**
         *   Sets the color used to draw lines and borders
         *   around shapes. This color is either specified in
         *   terms of the RGB or HSB color depending on the
         *   current colorMode() (the default color space is
         *   RGB, with each value in the range from 0 to 255).
         *   The alpha range by default is also 0 to 255.  If a
         *   single string argument is provided, RGB, RGBA and
         *   Hex CSS color strings and all named color strings
         *   are supported. In this case, an alpha number value
         *   as a second argument is not supported, the RGBA
         *   form should be used.
         *
         *
         *   A p5 Color object can also be provided to set the
         *   stroke color.
         *   @param color the stroke color
         *   @chainable
         */
        stroke(color: Color): p5;

        /**
         * All drawing that follows <a href="#/p5/erase">erase()</a> will subtract from
         * the canvas.Erased areas will reveal the web page underneath the canvas.Erasing
         * can be canceled with <a href="#/p5/noErase">noErase()</a>.
         *
         * Drawing done with <a href="#/p5/image">image()</a> and <a href="#/p5/background">
         * background()</a> in between <a href="#/p5/erase">erase()</a> and
         * <a href="#/p5/noErase">noErase()</a> will not erase the canvas but works as usual.
         *
         * @param [strengthFill] A number (0-255) for the strength of erasing for a shape's fill.
         *                                 This will default to 255 when no argument is given, which
         *                                 is full strength.
         * @param [strengthStroke] A number (0-255) for the strength of erasing for a shape's stroke.
         *                                  This will default to 255 when no argument is given, which
         *                                  is full strength.
         */
        erase(strengthFill?: number, strengthStroke?: number): void;

        /**
         * Ends erasing that was started with <a href="#/p5/erase">erase()</a>.
         * The <a href="#/p5/fill">fill()</a>, <a href="#/p5/stroke">stroke()</a>, and
         * <a href="#/p5/blendMode">blendMode()</a> settings will return to what they were
         * prior to calling <a href="#/p5/erase">erase()</a>.
         */
        noErase(): void;
    }
}
