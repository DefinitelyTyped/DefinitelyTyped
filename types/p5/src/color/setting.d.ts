// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
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
        background(color: Color): p5;

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
        background(colorstring: string, a?: number): p5;

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
        background(gray: number, a?: number): p5;

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
        background(v1: number, v2: number, v3: number, a?: number): p5;

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
        background(values: number[]): p5;

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
        background(image: Image, a?: number): p5;

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
        clear(r: number, g: number, b: number, a: number): p5;

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
         *   @chainable
         */
        clear(): p5;

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
        colorMode(mode: COLOR_MODE, max?: number): p5;

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
        colorMode(mode: UNKNOWN_P5_CONSTANT, max1: number, max2: number, max3: number, maxA?: number): p5;

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
        fill(v1: number, v2: number, v3: number, alpha?: number): p5;

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
        fill(value: string): p5;

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
        fill(gray: number, alpha?: number): p5;

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
        fill(values: number[]): p5;

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
        fill(color: Color): p5;

        /**
         *   Disables setting the interior color of shapes.
         *   This is the same as making the fill completely
         *   transparent. If both noStroke() and noFill() are
         *   called, nothing will be drawn to the screen.
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
        stroke(v1: number, v2: number, v3: number, alpha?: number): p5;

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
        stroke(value: string): p5;

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
        stroke(gray: number, alpha?: number): p5;

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
        stroke(values: number[]): p5;

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
        stroke(color: Color): p5;

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
        erase(strengthFill?: number, strengthStroke?: number): p5;

        /**
         *   Ends erasing that was started with erase(). The
         *   fill(), stroke(), and blendMode() settings will
         *   return to what they were prior to calling erase().
         *   @chainable
         */
        noErase(): p5;
    }
}
