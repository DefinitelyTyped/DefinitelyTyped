// Global mode type definitions for p5

// This file was auto-generated. Please do not edit it.

/// <reference path="./lib/addons/p5.dom.d.ts" />
/// <reference path="./lib/addons/p5.sound.d.ts" />
import * as p5 from "./index";
declare global {
  /**
   *   Extracts the alpha value from a color or pixel
   *   array.
   *   @param color p5.Color object, color components, or
   *   CSS color
   *   @return the alpha value
   */
  function alpha(
    color:
      | p5.Color
      | number[]
      | string
  ): number;

  /**
   *   Extracts the blue value from a color or pixel
   *   array.
   *   @param color p5.Color object, color components, or
   *   CSS color
   *   @return the blue value
   */
  function blue(
    color:
      | p5.Color
      | number[]
      | string
  ): number;

  /**
   *   Extracts the HSB brightness value from a color or
   *   pixel array.
   *   @param color p5.Color object, color components, or
   *   CSS color
   *   @return the brightness value
   */
  function brightness(
    color:
      | p5.Color
      | number[]
      | string
  ): number;

  /**
   *   Creates colors for storing in variables of the
   *   color datatype. The parameters are interpreted as
   *   RGB or HSB values depending on the current
   *   colorMode(). The default mode is RGB values from 0
   *   to 255 and, therefore, the function call
   *   color(255, 204, 0) will return a bright yellow
   *   color.  Note that if only one value is provided to
   *   color(), it will be interpreted as a grayscale
   *   value. Add a second value, and it will be used for
   *   alpha transparency. When three values are
   *   specified, they are interpreted as either RGB or
   *   HSB values. Adding a fourth value applies alpha
   *   transparency.
   *
   *
   *   If a single string argument is provided, RGB, RGBA
   *   and Hex CSS color strings and all named color
   *   strings are supported. In this case, an alpha
   *   number value as a second argument is not
   *   supported, the RGBA form should be used.
   *   @param gray number specifying value between white
   *   and black.
   *   @param [alpha] alpha value relative to current
   *   color range (default is 0-255)
   *   @return resulting color
   */
  function color(
    gray: number,
    alpha?: number
  ): p5.Color;

  /**
   *   Creates colors for storing in variables of the
   *   color datatype. The parameters are interpreted as
   *   RGB or HSB values depending on the current
   *   colorMode(). The default mode is RGB values from 0
   *   to 255 and, therefore, the function call
   *   color(255, 204, 0) will return a bright yellow
   *   color.  Note that if only one value is provided to
   *   color(), it will be interpreted as a grayscale
   *   value. Add a second value, and it will be used for
   *   alpha transparency. When three values are
   *   specified, they are interpreted as either RGB or
   *   HSB values. Adding a fourth value applies alpha
   *   transparency.
   *
   *
   *   If a single string argument is provided, RGB, RGBA
   *   and Hex CSS color strings and all named color
   *   strings are supported. In this case, an alpha
   *   number value as a second argument is not
   *   supported, the RGBA form should be used.
   *   @param v1 red or hue value relative to the current
   *   color range
   *   @param v2 green or saturation value relative to
   *   the current color range
   *   @param v3 blue or brightness value relative to the
   *   current color range
   *   @param [alpha] alpha value relative to current
   *   color range (default is 0-255)
   */
  function color(
    v1: number,
    v2: number,
    v3: number,
    alpha?: number
  ): p5.Color;

  /**
   *   Creates colors for storing in variables of the
   *   color datatype. The parameters are interpreted as
   *   RGB or HSB values depending on the current
   *   colorMode(). The default mode is RGB values from 0
   *   to 255 and, therefore, the function call
   *   color(255, 204, 0) will return a bright yellow
   *   color.  Note that if only one value is provided to
   *   color(), it will be interpreted as a grayscale
   *   value. Add a second value, and it will be used for
   *   alpha transparency. When three values are
   *   specified, they are interpreted as either RGB or
   *   HSB values. Adding a fourth value applies alpha
   *   transparency.
   *
   *
   *   If a single string argument is provided, RGB, RGBA
   *   and Hex CSS color strings and all named color
   *   strings are supported. In this case, an alpha
   *   number value as a second argument is not
   *   supported, the RGBA form should be used.
   *   @param value a color string
   */
  function color(
    value: string
  ): p5.Color;

  /**
   *   Creates colors for storing in variables of the
   *   color datatype. The parameters are interpreted as
   *   RGB or HSB values depending on the current
   *   colorMode(). The default mode is RGB values from 0
   *   to 255 and, therefore, the function call
   *   color(255, 204, 0) will return a bright yellow
   *   color.  Note that if only one value is provided to
   *   color(), it will be interpreted as a grayscale
   *   value. Add a second value, and it will be used for
   *   alpha transparency. When three values are
   *   specified, they are interpreted as either RGB or
   *   HSB values. Adding a fourth value applies alpha
   *   transparency.
   *
   *
   *   If a single string argument is provided, RGB, RGBA
   *   and Hex CSS color strings and all named color
   *   strings are supported. In this case, an alpha
   *   number value as a second argument is not
   *   supported, the RGBA form should be used.
   *   @param values an array containing the
   *   red,green,blue & and alpha components of the color
   */
  function color(
    values: number[]
  ): p5.Color;

  /**
   *   Creates colors for storing in variables of the
   *   color datatype. The parameters are interpreted as
   *   RGB or HSB values depending on the current
   *   colorMode(). The default mode is RGB values from 0
   *   to 255 and, therefore, the function call
   *   color(255, 204, 0) will return a bright yellow
   *   color.  Note that if only one value is provided to
   *   color(), it will be interpreted as a grayscale
   *   value. Add a second value, and it will be used for
   *   alpha transparency. When three values are
   *   specified, they are interpreted as either RGB or
   *   HSB values. Adding a fourth value applies alpha
   *   transparency.
   *
   *
   *   If a single string argument is provided, RGB, RGBA
   *   and Hex CSS color strings and all named color
   *   strings are supported. In this case, an alpha
   *   number value as a second argument is not
   *   supported, the RGBA form should be used.
   */
  function color(
    color: p5.Color
  ): p5.Color;

  /**
   *   Extracts the green value from a color or pixel
   *   array.
   *   @param color p5.Color object, color components, or
   *   CSS color
   *   @return the green value
   */
  function green(
    color:
      | p5.Color
      | number[]
      | string
  ): number;

  /**
   *   Extracts the hue value from a color or pixel
   *   array. Hue exists in both HSB and HSL. This
   *   function will return the HSB-normalized hue when
   *   supplied with an HSB color object (or when
   *   supplied with a pixel array while the color mode
   *   is HSB), but will default to the HSL-normalized
   *   hue otherwise. (The values will only be different
   *   if the maximum hue setting for each system is
   *   different.)
   *   @param color p5.Color object, color components, or
   *   CSS color
   *   @return the hue
   */
  function hue(
    color:
      | p5.Color
      | number[]
      | string
  ): number;

  /**
   *   Blends two colors to find a third color somewhere
   *   between them. The amt parameter is the amount to
   *   interpolate between the two values where 0.0 equal
   *   to the first color, 0.1 is very near the first
   *   color, 0.5 is halfway in between, etc. An amount
   *   below 0 will be treated as 0. Likewise, amounts
   *   above 1 will be capped at 1. This is different
   *   from the behavior of lerp(), but necessary because
   *   otherwise numbers outside the range will produce
   *   strange and unexpected colors.  The way that
   *   colours are interpolated depends on the current
   *   color mode.
   *   @param c1 interpolate from this color
   *   @param c2 interpolate to this color
   *   @param amt number between 0 and 1
   *   @return interpolated color
   */
  function lerpColor(
    c1: p5.Color,
    c2: p5.Color,
    amt: number
  ): p5.Color;

  /**
   *   Extracts the HSL lightness value from a color or
   *   pixel array.
   *   @param color p5.Color object, color components, or
   *   CSS color
   *   @return the lightness
   */
  function lightness(
    color:
      | p5.Color
      | number[]
      | string
  ): number;

  /**
   *   Extracts the red value from a color or pixel
   *   array.
   *   @param color p5.Color object, color components, or
   *   CSS color
   *   @return the red value
   */
  function red(
    color:
      | p5.Color
      | number[]
      | string
  ): number;

  /**
   *   Extracts the saturation value from a color or
   *   pixel array. Saturation is scaled differently in
   *   HSB and HSL. This function will return the HSB
   *   saturation when supplied with an HSB color object
   *   (or when supplied with a pixel array while the
   *   color mode is HSB), but will default to the HSL
   *   saturation otherwise.
   *   @param color p5.Color object, color components, or
   *   CSS color
   *   @return the saturation value
   */
  function saturation(
    color:
      | p5.Color
      | number[]
      | string
  ): number;

  /**
   *   The background() function sets the color used for
   *   the background of the p5.js canvas. The default
   *   background is light gray. This function is
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
  function background(
    color: p5.Color
  ): p5;

  /**
   *   The background() function sets the color used for
   *   the background of the p5.js canvas. The default
   *   background is light gray. This function is
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
  function background(
    colorstring: string,
    a?: number
  ): p5;

  /**
   *   The background() function sets the color used for
   *   the background of the p5.js canvas. The default
   *   background is light gray. This function is
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
  function background(
    gray: number,
    a?: number
  ): p5;

  /**
   *   The background() function sets the color used for
   *   the background of the p5.js canvas. The default
   *   background is light gray. This function is
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
  function background(
    v1: number,
    v2: number,
    v3: number,
    a?: number
  ): p5;

  /**
   *   The background() function sets the color used for
   *   the background of the p5.js canvas. The default
   *   background is light gray. This function is
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
   *   @param values an array containing the
   *   red,green,blue & and alpha components of the color
   *   @chainable
   */
  function background(
    values: number[]
  ): p5;

  /**
   *   The background() function sets the color used for
   *   the background of the p5.js canvas. The default
   *   background is light gray. This function is
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
  function background(
    image: p5.Image,
    a?: number
  ): p5;

  /**
   *   Clears the pixels within a buffer. This function
   *   only works on p5.Canvas objects created with the
   *   createCanvas() function; it won't work with the
   *   main display window. Unlike the main graphics
   *   context, pixels in additional graphics areas
   *   created with createGraphics() can be entirely or
   *   partially transparent. This function clears
   *   everything to make all of the pixels 100%
   *   transparent.
   *   @chainable
   */
  function clear(): p5;

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
  function colorMode(
    mode: p5.COLOR_MODE,
    max?: number
  ): p5;

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
   *   brightness/lighntess depending on the current
   *   color mode
   *   @param [maxA] range for the alpha
   *   @chainable
   */
  function colorMode(
    mode: p5.UNKNOWN_P5_CONSTANT,
    max1: number,
    max2: number,
    max3: number,
    maxA?: number
  ): p5;

  /**
   *   Sets the color used to fill shapes. For example,
   *   if you run fill(204, 102, 0), all subsequent
   *   shapes will be filled with orange. This color is
   *   either specified in terms of the RGB or HSB color
   *   depending on the current colorMode(). (The default
   *   color space is RGB, with each value in the range
   *   from 0 to 255). The alpha range by default is also
   *   0 to 255.  If a single string argument is
   *   provided, RGB, RGBA and Hex CSS color strings and
   *   all named color strings are supported. In this
   *   case, an alpha number value as a second argument
   *   is not supported, the RGBA form should be used.
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
  function fill(
    v1: number,
    v2: number,
    v3: number,
    alpha?: number
  ): p5;

  /**
   *   Sets the color used to fill shapes. For example,
   *   if you run fill(204, 102, 0), all subsequent
   *   shapes will be filled with orange. This color is
   *   either specified in terms of the RGB or HSB color
   *   depending on the current colorMode(). (The default
   *   color space is RGB, with each value in the range
   *   from 0 to 255). The alpha range by default is also
   *   0 to 255.  If a single string argument is
   *   provided, RGB, RGBA and Hex CSS color strings and
   *   all named color strings are supported. In this
   *   case, an alpha number value as a second argument
   *   is not supported, the RGBA form should be used.
   *
   *
   *   A p5 Color object can also be provided to set the
   *   fill color.
   *   @param value a color string
   *   @chainable
   */
  function fill(
    value: string
  ): p5;

  /**
   *   Sets the color used to fill shapes. For example,
   *   if you run fill(204, 102, 0), all subsequent
   *   shapes will be filled with orange. This color is
   *   either specified in terms of the RGB or HSB color
   *   depending on the current colorMode(). (The default
   *   color space is RGB, with each value in the range
   *   from 0 to 255). The alpha range by default is also
   *   0 to 255.  If a single string argument is
   *   provided, RGB, RGBA and Hex CSS color strings and
   *   all named color strings are supported. In this
   *   case, an alpha number value as a second argument
   *   is not supported, the RGBA form should be used.
   *
   *
   *   A p5 Color object can also be provided to set the
   *   fill color.
   *   @param gray a gray value
   *   @chainable
   */
  function fill(
    gray: number,
    alpha?: number
  ): p5;

  /**
   *   Sets the color used to fill shapes. For example,
   *   if you run fill(204, 102, 0), all subsequent
   *   shapes will be filled with orange. This color is
   *   either specified in terms of the RGB or HSB color
   *   depending on the current colorMode(). (The default
   *   color space is RGB, with each value in the range
   *   from 0 to 255). The alpha range by default is also
   *   0 to 255.  If a single string argument is
   *   provided, RGB, RGBA and Hex CSS color strings and
   *   all named color strings are supported. In this
   *   case, an alpha number value as a second argument
   *   is not supported, the RGBA form should be used.
   *
   *
   *   A p5 Color object can also be provided to set the
   *   fill color.
   *   @param values an array containing the
   *   red,green,blue & and alpha components of the color
   *   @chainable
   */
  function fill(
    values: number[]
  ): p5;

  /**
   *   Sets the color used to fill shapes. For example,
   *   if you run fill(204, 102, 0), all subsequent
   *   shapes will be filled with orange. This color is
   *   either specified in terms of the RGB or HSB color
   *   depending on the current colorMode(). (The default
   *   color space is RGB, with each value in the range
   *   from 0 to 255). The alpha range by default is also
   *   0 to 255.  If a single string argument is
   *   provided, RGB, RGBA and Hex CSS color strings and
   *   all named color strings are supported. In this
   *   case, an alpha number value as a second argument
   *   is not supported, the RGBA form should be used.
   *
   *
   *   A p5 Color object can also be provided to set the
   *   fill color.
   *   @param color the fill color
   *   @chainable
   */
  function fill(
    color: p5.Color
  ): p5;

  /**
   *   Disables filling geometry. If both noStroke() and
   *   noFill() are called, nothing will be drawn to the
   *   screen.
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
  function stroke(
    v1: number,
    v2: number,
    v3: number,
    alpha?: number
  ): p5;

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
  function stroke(
    value: string
  ): p5;

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
  function stroke(
    gray: number,
    alpha?: number
  ): p5;

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
  function stroke(
    values: number[]
  ): p5;

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
  function stroke(
    color: p5.Color
  ): p5;

  /**
   *   Draw an arc to the screen. If called with only x,
   *   y, w, h, start, and stop, the arc will be drawn
   *   and filled as an open pie segment. If a mode
   *   parameter is provided, the arc will be filled like
   *   an open semi-circle (OPEN) , a closed semi-circle
   *   (CHORD), or as a closed pie segment (PIE). The
   *   origin may be changed with the ellipseMode()
   *   function. Note that drawing a full circle (ex: 0
   *   to TWO_PI) will appear blank because 0 and TWO_PI
   *   are the same position on the unit circle. The best
   *   way to handle this is by using the ellipse()
   *   function instead to create a closed ellipse, and
   *   to use the arc() function only to draw parts of an
   *   ellipse.
   *   @param x x-coordinate of the arc's ellipse
   *   @param y y-coordinate of the arc's ellipse
   *   @param w width of the arc's ellipse by default
   *   @param h height of the arc's ellipse by default
   *   @param start angle to start the arc, specified in
   *   radians
   *   @param stop angle to stop the arc, specified in
   *   radians
   *   @param [mode] optional parameter to determine the
   *   way of drawing the arc. either CHORD, PIE or OPEN
   *   @param [detail] optional parameter for WebGL mode
   *   only. This is to specify the number of vertices
   *   that makes up the perimeter of the arc. Default
   *   value is 25.
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
   *   Draws an ellipse (oval) to the screen. An ellipse
   *   with equal width and height is a circle. By
   *   default, the first two parameters set the
   *   location, and the third and fourth parameters set
   *   the shape's width and height. If no height is
   *   specified, the value of width is used for both the
   *   width and height. If a negative height or width is
   *   specified, the absolute value is taken. The origin
   *   may be changed with the ellipseMode() function.
   *   @param x x-coordinate of the ellipse.
   *   @param y y-coordinate of the ellipse.
   *   @param w width of the ellipse.
   *   @param [h] height of the ellipse.
   *   @chainable
   */
  function ellipse(
    x: number,
    y: number,
    w: number,
    h?: number
  ): p5;

  /**
   *   Draws an ellipse (oval) to the screen. An ellipse
   *   with equal width and height is a circle. By
   *   default, the first two parameters set the
   *   location, and the third and fourth parameters set
   *   the shape's width and height. If no height is
   *   specified, the value of width is used for both the
   *   width and height. If a negative height or width is
   *   specified, the absolute value is taken. The origin
   *   may be changed with the ellipseMode() function.
   *   @param x x-coordinate of the ellipse.
   *   @param y y-coordinate of the ellipse.
   *   @param w width of the ellipse.
   *   @param h height of the ellipse.
   *   @param detail number of radial sectors to draw
   */
  function ellipse(
    x: number,
    y: number,
    w: number,
    h: number,
    detail: number
  ): void;

  /**
   *   Draws a line (a direct path between two points) to
   *   the screen. The version of line() with four
   *   parameters draws the line in 2D. To color a line,
   *   use the stroke() function. A line cannot be
   *   filled, therefore the fill() function will not
   *   affect the color of a line. 2D lines are drawn
   *   with a width of one pixel by default, but this can
   *   be changed with the strokeWeight() function.
   *   @param x1 the x-coordinate of the first point
   *   @param y1 the y-coordinate of the first point
   *   @param x2 the x-coordinate of the second point
   *   @param y2 the y-coordinate of the second point
   *   @chainable
   */
  function line(
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): p5;

  /**
   *   Draws a line (a direct path between two points) to
   *   the screen. The version of line() with four
   *   parameters draws the line in 2D. To color a line,
   *   use the stroke() function. A line cannot be
   *   filled, therefore the fill() function will not
   *   affect the color of a line. 2D lines are drawn
   *   with a width of one pixel by default, but this can
   *   be changed with the strokeWeight() function.
   *   @param x1 the x-coordinate of the first point
   *   @param y1 the y-coordinate of the first point
   *   @param z1 the z-coordinate of the first point
   *   @param x2 the x-coordinate of the second point
   *   @param y2 the y-coordinate of the second point
   *   @param z2 the z-coordinate of the second point
   *   @chainable
   */
  function line(
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number
  ): p5;

  /**
   *   Draws a point, a coordinate in space at the
   *   dimension of one pixel. The first parameter is the
   *   horizontal value for the point, the second value
   *   is the vertical value for the point. The color of
   *   the point is determined by the current stroke.
   *   @param x the x-coordinate
   *   @param y the y-coordinate
   *   @param [z] the z-coordinate (for WEBGL mode)
   *   @chainable
   */
  function point(
    x: number,
    y: number,
    z?: number
  ): p5;

  /**
   *   Draw a quad. A quad is a quadrilateral, a four
   *   sided polygon. It is similar to a rectangle, but
   *   the angles between its edges are not constrained
   *   to ninety degrees. The first pair of parameters
   *   (x1,y1) sets the first vertex and the subsequent
   *   pairs should proceed clockwise or
   *   counter-clockwise around the defined shape.
   *   @param x1 the x-coordinate of the first point
   *   @param y1 the y-coordinate of the first point
   *   @param x2 the x-coordinate of the second point
   *   @param y2 the y-coordinate of the second point
   *   @param x3 the x-coordinate of the third point
   *   @param y3 the y-coordinate of the third point
   *   @param x4 the x-coordinate of the fourth point
   *   @param y4 the y-coordinate of the fourth point
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
    y4: number
  ): p5;

  /**
   *   Draw a quad. A quad is a quadrilateral, a four
   *   sided polygon. It is similar to a rectangle, but
   *   the angles between its edges are not constrained
   *   to ninety degrees. The first pair of parameters
   *   (x1,y1) sets the first vertex and the subsequent
   *   pairs should proceed clockwise or
   *   counter-clockwise around the defined shape.
   *   @param x1 the x-coordinate of the first point
   *   @param y1 the y-coordinate of the first point
   *   @param z1 the z-coordinate of the first point
   *   @param x2 the x-coordinate of the second point
   *   @param y2 the y-coordinate of the second point
   *   @param z2 the z-coordinate of the second point
   *   @param x3 the x-coordinate of the third point
   *   @param y3 the y-coordinate of the third point
   *   @param z3 the z-coordinate of the third point
   *   @param x4 the x-coordinate of the fourth point
   *   @param y4 the y-coordinate of the fourth point
   *   @param z4 the z-coordinate of the fourth point
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
    z4: number
  ): p5;

  /**
   *   Draws a rectangle to the screen. A rectangle is a
   *   four-sided shape with every angle at ninety
   *   degrees. By default, the first two parameters set
   *   the location of the upper-left corner, the third
   *   sets the width, and the fourth sets the height.
   *   The way these parameters are interpreted, however,
   *   may be changed with the rectMode() function.  The
   *   fifth, sixth, seventh and eighth parameters, if
   *   specified, determine corner radius for the
   *   top-left, top-right, lower-right and lower-left
   *   corners, respectively. An omitted corner radius
   *   parameter is set to the value of the previously
   *   specified radius value in the parameter list.
   *   @param x x-coordinate of the rectangle.
   *   @param y y-coordinate of the rectangle.
   *   @param w width of the rectangle.
   *   @param h height of the rectangle.
   *   @param [tl] optional radius of top-left corner.
   *   @param [tr] optional radius of top-right corner.
   *   @param [br] optional radius of bottom-right
   *   corner.
   *   @param [bl] optional radius of bottom-left corner.
   *   @chainable
   */
  function rect(
    x: number,
    y: number,
    w: number,
    h: number,
    tl?: number,
    tr?: number,
    br?: number,
    bl?: number
  ): p5;

  /**
   *   Draws a rectangle to the screen. A rectangle is a
   *   four-sided shape with every angle at ninety
   *   degrees. By default, the first two parameters set
   *   the location of the upper-left corner, the third
   *   sets the width, and the fourth sets the height.
   *   The way these parameters are interpreted, however,
   *   may be changed with the rectMode() function.  The
   *   fifth, sixth, seventh and eighth parameters, if
   *   specified, determine corner radius for the
   *   top-left, top-right, lower-right and lower-left
   *   corners, respectively. An omitted corner radius
   *   parameter is set to the value of the previously
   *   specified radius value in the parameter list.
   *   @param x x-coordinate of the rectangle.
   *   @param y y-coordinate of the rectangle.
   *   @param w width of the rectangle.
   *   @param h height of the rectangle.
   *   @param [detailX] number of segments in the
   *   x-direction
   *   @param [detailY] number of segments in the
   *   y-direction
   *   @chainable
   */
  function rect(
    x: number,
    y: number,
    w: number,
    h: number,
    detailX?: number,
    detailY?: number
  ): p5;

  /**
   *   A triangle is a plane created by connecting three
   *   points. The first two arguments specify the first
   *   point, the middle two arguments specify the second
   *   point, and the last two arguments specify the
   *   third point.
   *   @param x1 x-coordinate of the first point
   *   @param y1 y-coordinate of the first point
   *   @param x2 x-coordinate of the second point
   *   @param y2 y-coordinate of the second point
   *   @param x3 x-coordinate of the third point
   *   @param y3 y-coordinate of the third point
   *   @chainable
   */
  function triangle(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number
  ): p5;

  /**
   *   Modifies the location from which ellipses are
   *   drawn by changing the way in which parameters
   *   given to ellipse() are interpreted.  The default
   *   mode is ellipseMode(CENTER), which interprets the
   *   first two parameters of ellipse() as the shape's
   *   center point, while the third and fourth
   *   parameters are its width and height.
   *
   *
   *   ellipseMode(RADIUS) also uses the first two
   *   parameters of ellipse() as the shape's center
   *   point, but uses the third and fourth parameters to
   *   specify half of the shapes's width and height.
   *
   *
   *   ellipseMode(CORNER) interprets the first two
   *   parameters of ellipse() as the upper-left corner
   *   of the shape, while the third and fourth
   *   parameters are its width and height.
   *
   *
   *   ellipseMode(CORNERS) interprets the first two
   *   parameters of ellipse() as the location of one
   *   corner of the ellipse's bounding box, and the
   *   third and fourth parameters as the location of the
   *   opposite corner.
   *
   *
   *   The parameter must be written in ALL CAPS because
   *   Javascript is a case-sensitive language.
   *   @param mode either CENTER, RADIUS, CORNER, or
   *   CORNERS
   *   @chainable
   */
  function ellipseMode(
    mode: p5.ELLIPSE_MODE
  ): p5;

  /**
   *   Draws all geometry with jagged (aliased) edges.
   *   Note that smooth() is active by default in 2D
   *   mode, so it is necessary to call noSmooth() to
   *   disable smoothing of geometry, images, and fonts.
   *   In 3D mode, noSmooth() is enabled by default, so
   *   it is necessary to call smooth() if you would like
   *   smooth (antialiased) edges on your geometry.
   *   @chainable
   */
  function noSmooth(): p5;

  /**
   *   Modifies the location from which rectangles are
   *   drawn by changing the way in which parameters
   *   given to rect() are interpreted.  The default mode
   *   is rectMode(CORNER), which interprets the first
   *   two parameters of rect() as the upper-left corner
   *   of the shape, while the third and fourth
   *   parameters are its width and height.
   *
   *
   *   rectMode(CORNERS) interprets the first two
   *   parameters of rect() as the location of one
   *   corner, and the third and fourth parameters as the
   *   location of the opposite corner.
   *
   *
   *   rectMode(CENTER) interprets the first two
   *   parameters of rect() as the shape's center point,
   *   while the third and fourth parameters are its
   *   width and height.
   *
   *
   *   rectMode(RADIUS) also uses the first two
   *   parameters of rect() as the shape's center point,
   *   but uses the third and fourth parameters to
   *   specify half of the shapes's width and height.
   *
   *
   *   The parameter must be written in ALL CAPS because
   *   Javascript is a case-sensitive language.
   *   @param mode either CORNER, CORNERS, CENTER, or
   *   RADIUS
   *   @chainable
   */
  function rectMode(
    mode: p5.RECT_MODE
  ): p5;

  /**
   *   Draws all geometry with smooth (anti-aliased)
   *   edges. smooth() will also improve image quality of
   *   resized images. Note that smooth() is active by
   *   default in 2D mode; noSmooth() can be used to
   *   disable smoothing of geometry, images, and fonts.
   *   In 3D mode, noSmooth() is enabled by default, so
   *   it is necessary to call smooth() if you would like
   *   smooth (antialiased) edges on your geometry.
   *   @chainable
   */
  function smooth(): p5;

  /**
   *   Sets the style for rendering line endings. These
   *   ends are either squared, extended, or rounded,
   *   each of which specified with the corresponding
   *   parameters: SQUARE, PROJECT, and ROUND. The
   *   default cap is ROUND.
   *   @param cap either SQUARE, PROJECT, or ROUND
   *   @chainable
   */
  function strokeCap(
    cap: p5.STROKE_CAP
  ): p5;

  /**
   *   Sets the style of the joints which connect line
   *   segments. These joints are either mitered,
   *   beveled, or rounded and specified with the
   *   corresponding parameters MITER, BEVEL, and ROUND.
   *   The default joint is MITER.
   *   @param join either MITER, BEVEL, ROUND
   *   @chainable
   */
  function strokeJoin(
    join: p5.STROKE_JOIN
  ): p5;

  /**
   *   Sets the width of the stroke used for lines,
   *   points, and the border around shapes. All widths
   *   are set in units of pixels.
   *   @param weight the weight (in pixels) of the stroke
   *   @chainable
   */
  function strokeWeight(
    weight: number
  ): p5;

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
   *   them.Bezier curves were developed by French
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
  function bezier(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number
  ): p5;

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
   *   them.Bezier curves were developed by French
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
   *   Sets the resolution at which Beziers display. The
   *   default value is 20.
   *
   *   This function is only useful when using the WEBGL
   *   renderer as the default canvas renderer does not
   *   use this information.
   *   @param detail resolution of the curves
   *   @chainable
   */
  function bezierDetail(
    detail: number
  ): p5;

  /**
   *   Evaluates the Bezier at position t for points a,
   *   b, c, d. The parameters a and d are the first and
   *   last points on the curve, and b and c are the
   *   control points. The final parameter t varies
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
  function bezierPoint(
    a: number,
    b: number,
    c: number,
    d: number,
    t: number
  ): number;

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
  function bezierTangent(
    a: number,
    b: number,
    c: number,
    d: number,
    t: number
  ): number;

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
  function curve(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number
  ): p5;

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
   *
   *   This function is only useful when using the WEBGL
   *   renderer as the default canvas renderer does not
   *   use this information.
   *   @param resolution resolution of the curves
   *   @chainable
   */
  function curveDetail(
    resolution: number
  ): p5;

  /**
   *   Modifies the quality of forms created with curve()
   *   and curveVertex(). The parameter tightness
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
  function curveTightness(
    amount: number
  ): p5;

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
   *   @return bezier value at position t
   */
  function curvePoint(
    a: number,
    b: number,
    c: number,
    d: number,
    t: number
  ): number;

  /**
   *   Evaluates the tangent to the curve at position t
   *   for points a, b, c, d. The parameter t varies
   *   between 0 and 1, a and d are points on the curve,
   *   and b and c are the control points.
   *   @param a coordinate of first point on the curve
   *   @param b coordinate of first control point
   *   @param c coordinate of second control point
   *   @param d coordinate of second point on the curve
   *   @param t value between 0 and 1
   *   @return the tangent at position t
   */
  function curveTangent(
    a: number,
    b: number,
    c: number,
    d: number,
    t: number
  ): number;

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
   *   counter-clockwise.  These functions can only be
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
   *   The parameters available for beginShape() are
   *   POINTS, LINES, TRIANGLES, TRIANGLE_FAN,
   *   TRIANGLE_STRIP, QUADS, and QUAD_STRIP. After
   *   calling the beginShape() function, a series of
   *   vertex() commands must follow. To stop drawing the
   *   shape, call endShape(). Each shape will be
   *   outlined with the current stroke color and filled
   *   with the fill color.
   *
   *
   *   Transformations such as translate(), rotate(), and
   *   scale() do not work within beginShape(). It is
   *   also not possible to use other shapes, such as
   *   ellipse() or rect() within beginShape().
   *   @param [kind] either POINTS, LINES, TRIANGLES,
   *   TRIANGLE_FAN TRIANGLE_STRIP, QUADS, or QUAD_STRIP
   *   @chainable
   */
  function beginShape(
    kind?: p5.BEGIN_KIND
  ): p5;

  /**
   *   Specifies vertex coordinates for Bezier curves.
   *   Each call to bezierVertex() defines the position
   *   of two control points and one anchor point of a
   *   Bezier curve, adding a new segment to a line or
   *   shape. For WebGL mode bezierVertex() can be used
   *   in 2D as well as 3D mode. 2D mode expects 6
   *   parameters, while 3D mode expects 9 parameters
   *   (including z coordinates).  The first time
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
  function bezierVertex(
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4: number,
    y4: number
  ): p5;

  /**
   *   Specifies vertex coordinates for Bezier curves.
   *   Each call to bezierVertex() defines the position
   *   of two control points and one anchor point of a
   *   Bezier curve, adding a new segment to a line or
   *   shape. For WebGL mode bezierVertex() can be used
   *   in 2D as well as 3D mode. 2D mode expects 6
   *   parameters, while 3D mode expects 9 parameters
   *   (including z coordinates).  The first time
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
   *   expects 3 parameters.  The first and last points
   *   in a series of curveVertex() lines will be used to
   *   guide the beginning and end of a the curve. A
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
  function curveVertex(
    x: number,
    y: number
  ): p5;

  /**
   *   Specifies vertex coordinates for curves. This
   *   function may only be used between beginShape() and
   *   endShape() and only when there is no MODE
   *   parameter specified to beginShape(). For WebGL
   *   mode curveVertex() can be used in 2D as well as 3D
   *   mode. 2D mode expects 2 parameters, while 3D mode
   *   expects 3 parameters.  The first and last points
   *   in a series of curveVertex() lines will be used to
   *   guide the beginning and end of a the curve. A
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
  function curveVertex(
    x: number,
    y: number,
    z?: number
  ): p5;

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
   *   counter-clockwise.  These functions can only be
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
   *   beginShape(). When endshape() is called, all of
   *   image data defined since the previous call to
   *   beginShape() is written into the image buffer. The
   *   constant CLOSE as the value for the MODE parameter
   *   to close the shape (to connect the beginning and
   *   the end).
   *   @param [mode] use CLOSE to close the shape
   *   @chainable
   */
  function endShape(
    mode?: p5.END_MODE
  ): p5;

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
   *   (including z coordinates).  This function must be
   *   used between beginShape() and endShape() and only
   *   when there is no MODE or POINTS parameter
   *   specified to beginShape().
   *   @param cx x-coordinate for the control point
   *   @param cy y-coordinate for the control point
   *   @param x3 x-coordinate for the anchor point
   *   @param y3 y-coordinate for the anchor point
   *   @chainable
   */
  function quadraticVertex(
    cx: number,
    cy: number,
    x3: number,
    y3: number
  ): p5;

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
   *   (including z coordinates).  This function must be
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
  function quadraticVertex(
    cx: number,
    cy: number,
    cz: number,
    x3: number,
    y3: number,
    z3: number
  ): p5;

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
  function vertex(
    x: number,
    y: number
  ): p5;

  /**
   *   All shapes are constructed by connecting a series
   *   of vertices. vertex() is used to specify the
   *   vertex coordinates for points, lines, triangles,
   *   quads, and polygons. It is used exclusively within
   *   the beginShape() and endShape() functions.
   *   @param x x-coordinate of the vertex
   *   @param y y-coordinate of the vertex
   *   @param z z-coordinate of the vertex
   *   @param [u] the vertex's texture u-coordinate
   *   @param [v] the vertex's texture v-coordinate
   *   @chainable
   */
  function vertex(
    x: number,
    y: number,
    z: number,
    u?: number,
    v?: number
  ): p5;
  const P2D: p5.P2D;
  const WEBGL: p5.WEBGL;
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
   *   Constant to be used with angleMode() function, to
   *   set the mode which p5.js interprates and
   *   calculates angles (either DEGREES or RADIANS).
   */
  const DEGREES: p5.DEGREES;

  /**
   *   Constant to be used with angleMode() function, to
   *   set the mode which p5.js interprates and
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
  const HSB: p5.HSB;
  const HSL: p5.HSL;
  const AUTO: p5.AUTO;
  const BLEND: p5.BLEND;
  const ADD: p5.ADD;
  const DARKEST: p5.DARKEST;
  const LIGHTEST: p5.LIGHTEST;
  const DIFFERENCE: p5.DIFFERENCE;
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
  const LANDSCAPE: p5.LANDSCAPE;
  const PORTRAIT: p5.PORTRAIT;
  const GRID: p5.GRID;
  const AXES: p5.AXES;

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
  function print(
    contents: any
  ): void;

  /**
   *   Sets the cursor to a predefined symbol or an
   *   image, or makes it visible if already hidden. If
   *   you are trying to set an image as the cursor, the
   *   recommended size is 16x16 or 32x32 pixels. The
   *   values for parameters x and y must be less than
   *   the dimensions of the image.
   *   @param type either ARROW, CROSS, HAND, MOVE, TEXT,
   *   or WAIT, or path for image
   *   @param [x] the horizontal active spot of the
   *   cursor
   *   @param [y] the vertical active spot of the cursor
   */
  function cursor(
    type:
      | string
      | p5.CURSOR_TYPE,
    x?: number,
    y?: number
  ): void;

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
   *   be enough for smooth animations This is the same
   *   as setFrameRate(val).  Calling frameRate() with no
   *   arguments returns the current framerate. The draw
   *   function must run at least once before it will
   *   return a value. This is the same as
   *   getFrameRate().
   *
   *
   *   Calling frameRate() with arguments that are not of
   *   the type numbers or are non positive also returns
   *   current framerate.
   *   @param fps number of frames to be displayed every
   *   second
   *   @chainable
   */
  function frameRate(
    fps: number
  ): p5;

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
   *   be enough for smooth animations This is the same
   *   as setFrameRate(val).  Calling frameRate() with no
   *   arguments returns the current framerate. The draw
   *   function must run at least once before it will
   *   return a value. This is the same as
   *   getFrameRate().
   *
   *
   *   Calling frameRate() with arguments that are not of
   *   the type numbers or are non positive also returns
   *   current framerate.
   *   @return current frameRate
   */
  function frameRate(): number;

  /**
   *   Hides the cursor from view.
   */
  function noCursor(): void;

  /**
   *   The windowResized() function is called once every
   *   time the browser window is resized. This is a good
   *   place to resize the canvas or do any other
   *   adjustments to accommodate the new window size.
   */
  function windowResized(): void;

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
  function fullscreen(
    val?: boolean
  ): boolean;

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
  function pixelDensity(
    val: number
  ): p5;

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
   *   Gets the current URL.
   *   @return url
   */
  function getURL(): string;

  /**
   *   Gets the current URL path as an array.
   *   @return path components
   */
  function getURLPath(): string[];

  /**
   *   Gets the current URL params as an Object.
   *   @return URL params
   */
  function getURLParams(): object;

  /**
   *   The system variable frameCount contains the number
   *   of frames that have been displayed since the
   *   program started. Inside setup() the value is 0,
   *   after the first iteration of draw it is 1, etc.
   */
  let frameCount: number;

  /**
   *   Confirms if the window a p5.js program is in is
   *   "focused," meaning that the sketch will accept
   *   mouse or keyboard input. This variable is "true"
   *   if the window is focused and "false" if not.
   */
  let focused: boolean;

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
   *   Creates a canvas element in the document, and sets
   *   the dimensions of it in pixels. This method should
   *   be called only once at the start of setup. Calling
   *   createCanvas more than once in a sketch will
   *   result in very unpredictable behavior. If you want
   *   more than one drawing canvas you could use
   *   createGraphics (hidden by default but it can be
   *   shown).  The system variables width and height are
   *   set by the parameters passed to this function. If
   *   createCanvas() is not used, the window will be
   *   given a default size of 100x100 pixels.
   *
   *
   *   For more ways to position the canvas, see the
   *   positioning the canvas wiki page.
   *   @param w width of the canvas
   *   @param h height of the canvas
   *   @param [renderer] either P2D or WEBGL
   */
  function createCanvas(
    w: number,
    h: number,
    renderer?: p5.RENDERER
  ): p5.Renderer;

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
  function resizeCanvas(
    w: number,
    h: number,
    noRedraw?: boolean
  ): void;

  /**
   *   Removes the default canvas for a p5 sketch that
   *   doesn't require a canvas
   */
  function noCanvas(): void;

  /**
   *   Creates and returns a new p5.Renderer object. Use
   *   this class if you need to draw into an off-screen
   *   graphics buffer. The two parameters define the
   *   width and height in pixels.
   *   @param w width of the offscreen graphics buffer
   *   @param h height of the offscreen graphics buffer
   *   @param [renderer] either P2D or WEBGL undefined
   *   defaults to p2d
   *   @return offscreen graphics buffer
   */
  function createGraphics(
    w: number,
    h: number,
    renderer?: p5.RENDERER
  ): p5.Graphics;

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
   *   image.
   *   - EXCLUSION - similar to DIFFERENCE, but less
   *   extreme.
   *   - MULTIPLY - multiply the colors, result will
   *   always be darker.
   *   - SCREEN - opposite multiply, uses inverse values
   *   of the colors.
   *   - REPLACE - the pixels entirely replace the others
   *   and don't utilize alpha (transparency) values.
   *   - OVERLAY - mix of MULTIPLY and SCREEN .
   *   Multiplies dark values, and screens light values.
   *   - HARD_LIGHT - SCREEN when greater than 50% gray,
   *   MULTIPLY when lower.
   *   - SOFT_LIGHT - mix of DARKEST and LIGHTEST. Works
   *   like OVERLAY, but not as harsh.
   *   - DODGE - lightens light tones and increases
   *   contrast, ignores darks.
   *   - BURN - darker areas are applied, increasing
   *   contrast, ignores lights.
   *   @param mode blend mode to set for canvas. either
   *   BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY,
   *   EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT,
   *   SOFT_LIGHT, DODGE, BURN, ADD or NORMAL
   */
  function blendMode(
    mode: p5.BLEND_MODE
  ): void;

  /**
   *   Stops p5.js from continuously executing the code
   *   within draw(). If loop() is called, the code in
   *   draw() begins to run continuously again. If using
   *   noLoop() in setup(), it should be the last line
   *   inside the block.  When noLoop() is used, it's not
   *   possible to manipulate or access the screen inside
   *   event handling functions such as mousePressed() or
   *   keyPressed(). Instead, use those functions to call
   *   redraw() or loop(), which will run draw(), which
   *   can update the screen properly. This means that
   *   when noLoop() has been called, no drawing can
   *   happen, and functions like saveFrame() or
   *   loadPixels() may not be used.
   *
   *
   *   Note that if the sketch is resized, redraw() will
   *   be called to update the sketch, even after
   *   noLoop() has been specified. Otherwise, the sketch
   *   would enter an odd state until loop() was called.
   */
  function noLoop(): void;

  /**
   *   By default, p5.js loops through draw()
   *   continuously, executing the code within it.
   *   However, the draw() loop may be stopped by calling
   *   noLoop(). In that case, the draw() loop can be
   *   resumed with loop().
   */
  function loop(): void;

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
   *   demonstration.)  push() stores information related
   *   to the current transformation state and style
   *   settings controlled by the following functions:
   *   fill(), stroke(), tint(), strokeWeight(),
   *   strokeCap(), strokeJoin(), imageMode(),
   *   rectMode(), ellipseMode(), colorMode(),
   *   textAlign(), textFont(), textMode(), textSize(),
   *   textLeading().
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
   *   demonstration.)  push() stores information related
   *   to the current transformation state and style
   *   settings controlled by the following functions:
   *   fill(), stroke(), tint(), strokeWeight(),
   *   strokeCap(), strokeJoin(), imageMode(),
   *   rectMode(), ellipseMode(), colorMode(),
   *   textAlign(), textFont(), textMode(), textSize(),
   *   textLeading().
   */
  function pop(): void;

  /**
   *   Executes the code within draw() one time. This
   *   functions allows the program to update the display
   *   window only when necessary, for example when an
   *   event registered by mousePressed() or keyPressed()
   *   occurs.  In structuring a program, it only makes
   *   sense to call redraw() within events such as
   *   mousePressed(). This is because redraw() does not
   *   run draw() immediately (it only sets a flag that
   *   indicates an update is needed).
   *
   *
   *   The redraw() function does not work properly when
   *   called inside draw(). To enable/disable
   *   animations, use loop() and noLoop().
   *
   *
   *   In addition you can set the number of redraws per
   *   method call. Just add an integer as single
   *   parameter for the number of redraws.
   *   @param [n] Redraw for n-times. The default value
   *   is 1.
   */
  function redraw(
    n?: number
  ): void;

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
   *   @param a numbers which define the 2x3 matrix to be
   *   multiplied
   *   @param b numbers which define the 2x3 matrix to be
   *   multiplied
   *   @param c numbers which define the 2x3 matrix to be
   *   multiplied
   *   @param d numbers which define the 2x3 matrix to be
   *   multiplied
   *   @param e numbers which define the 2x3 matrix to be
   *   multiplied
   *   @param f numbers which define the 2x3 matrix to be
   *   multiplied
   *   @chainable
   */
  function applyMatrix(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ): p5;

  /**
   *   Replaces the current matrix with the identity
   *   matrix.
   *   @chainable
   */
  function resetMatrix(): p5;

  /**
   *   Rotates a shape the amount specified by the angle
   *   parameter. This function accounts for angleMode,
   *   so angles can be entered in either RADIANS or
   *   DEGREES.  Objects are always rotated around their
   *   relative position to the origin and positive
   *   numbers rotate objects in a clockwise direction.
   *   Transformations apply to everything that happens
   *   after and subsequent calls to the function
   *   accumulates the effect. For example, calling
   *   rotate(HALF_PI) and then rotate(HALF_PI) is the
   *   same as rotate(PI). All tranformations are reset
   *   when draw() begins again.
   *
   *
   *   Technically, rotate() multiplies the current
   *   transformation matrix by a rotation matrix. This
   *   function can be further controlled by the push()
   *   and pop().
   *   @param angle the angle of rotation, specified in
   *   radians or degrees, depending on current angleMode
   *   @param [axis] (in 3d) the axis to rotate around
   *   @chainable
   */
  function rotate(
    angle: number,
    axis?:
      | p5.Vector
      | number[]
  ): p5;

  /**
   *   Rotates around X axis.
   *   @param angle the angle of rotation, specified in
   *   radians or degrees, depending on current angleMode
   *   @chainable
   */
  function rotateX(
    angle: number
  ): p5;

  /**
   *   Rotates around Y axis.
   *   @param angle the angle of rotation, specified in
   *   radians or degrees, depending on current angleMode
   *   @chainable
   */
  function rotateY(
    angle: number
  ): p5;

  /**
   *   Rotates around Z axis. Webgl mode only.
   *   @param angle the angle of rotation, specified in
   *   radians or degrees, depending on current angleMode
   *   @chainable
   */
  function rotateZ(
    angle: number
  ): p5;

  /**
   *   Increases or decreases the size of a shape by
   *   expanding and contracting vertices. Objects always
   *   scale from their relative origin to the coordinate
   *   system. Scale values are specified as decimal
   *   percentages. For example, the function call
   *   scale(2.0) increases the dimension of a shape by
   *   200%.  Transformations apply to everything that
   *   happens after and subsequent calls to the function
   *   multiply the effect. For example, calling
   *   scale(2.0) and then scale(1.5) is the same as
   *   scale(3.0). If scale() is called within draw(),
   *   the transformation is reset when the loop begins
   *   again.
   *
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
  function scale(
    s:
      | number
      | p5.Vector
      | number[],
    y?: number,
    z?: number
  ): p5;

  /**
   *   Increases or decreases the size of a shape by
   *   expanding and contracting vertices. Objects always
   *   scale from their relative origin to the coordinate
   *   system. Scale values are specified as decimal
   *   percentages. For example, the function call
   *   scale(2.0) increases the dimension of a shape by
   *   200%.  Transformations apply to everything that
   *   happens after and subsequent calls to the function
   *   multiply the effect. For example, calling
   *   scale(2.0) and then scale(1.5) is the same as
   *   scale(3.0). If scale() is called within draw(),
   *   the transformation is reset when the loop begins
   *   again.
   *
   *
   *   Using this function with the z parameter is only
   *   available in WEBGL mode. This function can be
   *   further controlled with push() and pop().
   *   @param scales per-axis percents to scale the
   *   object
   *   @chainable
   */
  function scale(
    scales:
      | p5.Vector
      | number[]
  ): p5;

  /**
   *   Shears a shape around the x-axis the amount
   *   specified by the angle parameter. Angles should be
   *   specified in the current angleMode. Objects are
   *   always sheared around their relative position to
   *   the origin and positive numbers shear objects in a
   *   clockwise direction.  Transformations apply to
   *   everything that happens after and subsequent calls
   *   to the function accumulates the effect. For
   *   example, calling shearX(PI/2) and then
   *   shearX(PI/2) is the same as shearX(PI). If
   *   shearX() is called within the draw(), the
   *   transformation is reset when the loop begins
   *   again.
   *
   *
   *   Technically, shearX() multiplies the current
   *   transformation matrix by a rotation matrix. This
   *   function can be further controlled by the push()
   *   and pop() functions.
   *   @param angle angle of shear specified in radians
   *   or degrees, depending on current angleMode
   *   @chainable
   */
  function shearX(
    angle: number
  ): p5;

  /**
   *   Shears a shape around the y-axis the amount
   *   specified by the angle parameter. Angles should be
   *   specified in the current angleMode. Objects are
   *   always sheared around their relative position to
   *   the origin and positive numbers shear objects in a
   *   clockwise direction.  Transformations apply to
   *   everything that happens after and subsequent calls
   *   to the function accumulates the effect. For
   *   example, calling shearY(PI/2) and then
   *   shearY(PI/2) is the same as shearY(PI). If
   *   shearY() is called within the draw(), the
   *   transformation is reset when the loop begins
   *   again.
   *
   *
   *   Technically, shearY() multiplies the current
   *   transformation matrix by a rotation matrix. This
   *   function can be further controlled by the push()
   *   and pop() functions.
   *   @param angle angle of shear specified in radians
   *   or degrees, depending on current angleMode
   *   @chainable
   */
  function shearY(
    angle: number
  ): p5;

  /**
   *   Specifies an amount to displace objects within the
   *   display window. The x parameter specifies
   *   left/right translation, the y parameter specifies
   *   up/down translation.  Transformations are
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
   *   @param [z] forward/backward translation (webgl
   *   only)
   *   @chainable
   */
  function translate(
    x: number,
    y: number,
    z?: number
  ): p5;

  /**
   *   Specifies an amount to displace objects within the
   *   display window. The x parameter specifies
   *   left/right translation, the y parameter specifies
   *   up/down translation.  Transformations are
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
  function translate(
    vector: p5.Vector
  ): p5;

  /**
   *   Creates a new instance of p5.StringDict using the
   *   key-value pair or the object you provide.
   */
  function createStringDict(
    key: string,
    value: string
  ): p5.StringDict;

  /**
   *   Creates a new instance of p5.StringDict using the
   *   key-value pair or the object you provide.
   *   @param object object
   */
  function createStringDict(
    object: object
  ): p5.StringDict;

  /**
   *   Creates a new instance of p5.NumberDict using the
   *   key-value pair or object you provide.
   */
  function createNumberDict(
    key: number,
    value: number
  ): p5.NumberDict;

  /**
   *   Creates a new instance of p5.NumberDict using the
   *   key-value pair or object you provide.
   *   @param object object
   */
  function createNumberDict(
    object: object
  ): p5.NumberDict;

  /**
   *   The setMoveThreshold() function is used to set the
   *   movement threshold for the deviceMoved() function.
   *   The default threshold is set to 0.5.
   *   @param value The threshold value
   */
  function setMoveThreshold(
    value: number
  ): void;

  /**
   *   The setShakeThreshold() function is used to set
   *   the movement threshold for the deviceShaken()
   *   function. The default threshold is set to 30.
   *   @param value The threshold value
   */
  function setShakeThreshold(
    value: number
  ): void;

  /**
   *   The deviceMoved() function is called when the
   *   device is moved by more than the threshold value
   *   along X, Y or Z axis. The default threshold is set
   *   to 0.5.
   */
  function deviceMoved(): void;

  /**
   *   The deviceTurned() function is called when the
   *   device rotates by more than 90 degrees
   *   continuously.  The axis that triggers the
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
   *   30.
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
   *   rotation of the device along the x axis. Value is
   *   represented as 0 to +/-180 degrees.  Note: The
   *   order the rotations are called is important, ie.
   *   if used together, it must be called in the order
   *   Z-X-Y or there might be unexpected behaviour.
   */
  let rotationX: number;

  /**
   *   The system variable rotationY always contains the
   *   rotation of the device along the y axis. Value is
   *   represented as 0 to +/-90 degrees.  Note: The
   *   order the rotations are called is important, ie.
   *   if used together, it must be called in the order
   *   Z-X-Y or there might be unexpected behaviour.
   */
  let rotationY: number;

  /**
   *   The system variable rotationZ always contains the
   *   rotation of the device along the z axis. Value is
   *   represented as 0 to 359 degrees.  Unlike rotationX
   *   and rotationY, this variable is available for
   *   devices with a built-in compass only.
   *
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
   *   frame previous to the current frame. Value is
   *   represented as 0 to +/-180 degrees.  pRotationX
   *   can also be used with rotationX to determine the
   *   rotate direction of the device along the X-axis.
   */
  let pRotationX: number;

  /**
   *   The system variable pRotationY always contains the
   *   rotation of the device along the y axis in the
   *   frame previous to the current frame. Value is
   *   represented as 0 to +/-90 degrees.  pRotationY can
   *   also be used with rotationY to determine the
   *   rotate direction of the device along the Y-axis.
   */
  let pRotationY: number;

  /**
   *   The system variable pRotationZ always contains the
   *   rotation of the device along the z axis in the
   *   frame previous to the current frame. Value is
   *   represented as 0 to 359 degrees.  pRotationZ can
   *   also be used with rotationZ to determine the
   *   rotate direction of the device along the Z-axis.
   */
  let pRotationZ: number;
  let turnAxis: string;

  /**
   *   The keyPressed() function is called once every
   *   time a key is pressed. The keyCode for the key
   *   that was pressed is stored in the keyCode
   *   variable.  For non-ASCII keys, use the keyCode
   *   variable. You can check if the keyCode equals
   *   BACKSPACE, DELETE, ENTER, RETURN, TAB, ESCAPE,
   *   SHIFT, CONTROL, OPTION, ALT, UP_ARROW, DOWN_ARROW,
   *   LEFT_ARROW, RIGHT_ARROW.
   *
   *
   *   For ASCII keys that was pressed is stored in the
   *   key variable. However, it does not distinguish
   *   between uppercase and lowercase. For this reason,
   *   it is recommended to use keyTyped() to read the
   *   key variable, in which the case of the variable
   *   will be distinguished.
   *
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
   */
  function keyPressed(): void;

  /**
   *   The keyReleased() function is called once every
   *   time a key is released. See key and keyCode for
   *   more information. Browsers may have different
   *   default behaviors attached to various key events.
   *   To prevent any default behavior for this event,
   *   add "return false" to the end of the method.
   */
  function keyReleased(): void;

  /**
   *   The keyTyped() function is called once every time
   *   a key is pressed, but action keys such as Ctrl,
   *   Shift, and Alt are ignored. The most recent key
   *   pressed will be stored in the key variable.
   *   Because of how operating systems handle key
   *   repeats, holding down a key will cause multiple
   *   calls to keyTyped() (and keyReleased() as well).
   *   The rate of repeat is set by the operating system
   *   and how each computer is configured.
   *
   *
   *   Browsers may have different default behaviors
   *   attached to various key events. To prevent any
   *   default behavior for this event, add "return
   *   false" to the end of the method.
   */
  function keyTyped(): void;

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
  function keyIsDown(
    code: number
  ): boolean;

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
  function mouseMoved(
    event?: object
  ): void;

  /**
   *   The mouseDragged() function is called once every
   *   time the mouse moves and a mouse button is
   *   pressed. If no mouseDragged() function is defined,
   *   the touchMoved() function will be called instead
   *   if it is defined. Browsers may have different
   *   default behaviors attached to various mouse
   *   events. To prevent any default behavior for this
   *   event, add "return false" to the end of the
   *   method.
   *   @param [event] optional MouseEvent callback
   *   argument.
   */
  function mouseDragged(
    event?: object
  ): void;

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
   *   method.
   *   @param [event] optional MouseEvent callback
   *   argument.
   */
  function mousePressed(
    event?: object
  ): void;

  /**
   *   The mouseReleased() function is called every time
   *   a mouse button is released. If no mouseReleased()
   *   function is defined, the touchEnded() function
   *   will be called instead if it is defined. Browsers
   *   may have different default behaviors attached to
   *   various mouse events. To prevent any default
   *   behavior for this event, add "return false" to the
   *   end of the method.
   *   @param [event] optional MouseEvent callback
   *   argument.
   */
  function mouseReleased(
    event?: object
  ): void;

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
   *   false" to the end of the method.
   *   @param [event] optional MouseEvent callback
   *   argument.
   */
  function mouseClicked(
    event?: object
  ): void;

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
  function doubleClicked(
    event?: object
  ): void;

  /**
   *   The function mouseWheel() is executed every time a
   *   vertical mouse wheel event is detected either
   *   triggered by an actual mouse wheel or by a
   *   touchpad. The event.delta property returns the
   *   amount the mouse wheel have scrolled. The values
   *   can be positive or negative depending on the
   *   scroll direction (on OS X with "natural" scrolling
   *   enabled, the signs are inverted).
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
  function mouseWheel(
    event?: object
  ): void;

  /**
   *   The system variable mouseX always contains the
   *   current horizontal position of the mouse, relative
   *   to (0, 0) of the canvas. If touch is used instead
   *   of mouse input, mouseX will hold the x value of
   *   the most recent touch point.
   */
  let mouseX: number;

  /**
   *   The system variable mouseY always contains the
   *   current vertical position of the mouse, relative
   *   to (0, 0) of the canvas. If touch is used instead
   *   of mouse input, mouseY will hold the y value of
   *   the most recent touch point.
   */
  let mouseY: number;

  /**
   *   The system variable pmouseX always contains the
   *   horizontal position of the mouse or finger in the
   *   frame previous to the current frame, relative to
   *   (0, 0) of the canvas. Note: pmouseX will be reset
   *   to the current mouseX value at the start of each
   *   touch event.
   */
  let pmouseX: number;

  /**
   *   The system variable pmouseY always contains the
   *   vertical position of the mouse or finger in the
   *   frame previous to the current frame, relative to
   *   (0, 0) of the canvas. Note: pmouseY will be reset
   *   to the current mouseY value at the start of each
   *   touch event.
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
   *   Processing automatically tracks if the mouse
   *   button is pressed and which button is pressed. The
   *   value of the system variable mouseButton is either
   *   LEFT, RIGHT, or CENTER depending on which button
   *   was pressed last. Warning: different browsers may
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
  function touchStarted(
    event?: object
  ): void;

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
  function touchMoved(
    event?: object
  ): void;

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
  function touchEnded(
    event?: object
  ): void;

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
   *   width and height parameters.  .pixels gives access
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
  function createImage(
    width: number,
    height: number
  ): p5.Image;

  /**
   *   Save the current canvas as an image. The browser
   *   will either save the file immediately, or prompt
   *   the user with a dialogue window.
   *   @param selectedCanvas a variable representing a
   *   specific html5 canvas (optional)
   *   @param [extension] 'jpg' or 'png'
   */
  function saveCanvas(
    selectedCanvas:
      | p5.Element
      | HTMLCanvasElement,
    filename?: string,
    extension?: string
  ): void;

  /**
   *   Save the current canvas as an image. The browser
   *   will either save the file immediately, or prompt
   *   the user with a dialogue window.
   *   @param [extension] 'jpg' or 'png'
   */
  function saveCanvas(
    filename?: string,
    extension?: string
  ): void;

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
   *   Note that saveFrames() will only save the first 15
   *   frames of an animation. To export longer
   *   animations, you might look into a library like
   *   ccapture.js.
   *   @param extension 'jpg' or 'png'
   *   @param duration Duration in seconds to save the
   *   frames for.
   *   @param framerate Framerate to save the frames in.
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
    callback?: (
      p1: any[]
    ) => any
  ): void;

  /**
   *   Loads an image from a path and creates a p5.Image
   *   from it.  The image may not be immediately
   *   available for rendering If you want to ensure that
   *   the image is ready before doing anything with it,
   *   place the loadImage() call in preload(). You may
   *   also supply a callback function to handle the
   *   image when it's ready.
   *
   *
   *   The path to the image should be relative to the
   *   HTML file that links in your sketch. Loading an
   *   image from a URL or other remote location may be
   *   blocked due to your browser's built-in security.
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
    successCallback?: (
      p1: p5.Image
    ) => any,
    failureCallback?: (
      p1: Event
    ) => any
  ): p5.Image;

  /**
   *   Draw an image to the p5.js canvas. This function
   *   can be used with different numbers of parameters.
   *   The simplest use requires only three parameters:
   *   img, x, and y—where (x, y) is the position of the
   *   image. Two more parameters can optionally be added
   *   to specify the width and height of the image.
   *
   *   This function can also be used with all eight
   *   Number parameters. To differentiate between all
   *   these parameters, p5.js uses the language of
   *   "destination rectangle" (which corresponds to
   *   "dx", "dy", etc.) and "source image" (which
   *   corresponds to "sx", "sy", etc.) below. Specifying
   *   the "source image" dimensions can be useful when
   *   you want to display a subsection of the source
   *   image instead of the whole thing. Here's a diagram
   *   to explain further:
   *   @param img the image to display
   *   @param x the x-coordinate of the top-left corner
   *   of the image
   *   @param y the y-coordinate of the top-left corner
   *   of the image
   *   @param [width] the width to draw the image
   *   @param [height] the height to draw the image
   */
  function image(
    img:
      | p5.Image
      | p5.Element,
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
   *   This function can also be used with all eight
   *   Number parameters. To differentiate between all
   *   these parameters, p5.js uses the language of
   *   "destination rectangle" (which corresponds to
   *   "dx", "dy", etc.) and "source image" (which
   *   corresponds to "sx", "sy", etc.) below. Specifying
   *   the "source image" dimensions can be useful when
   *   you want to display a subsection of the source
   *   image instead of the whole thing. Here's a diagram
   *   to explain further:
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
   */
  function image(
    img:
      | p5.Image
      | p5.Element,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number,
    sx: number,
    sy: number,
    sWidth?: number,
    sHeight?: number
  ): void;

  /**
   *   Sets the fill value for displaying images. Images
   *   can be tinted to specified colors or made
   *   transparent by including an alpha value.  To apply
   *   transparency to an image without affecting its
   *   color, use white as the tint color and specify an
   *   alpha value. For instance, tint(255, 128) will
   *   make an image 50% transparent (assuming the
   *   default alpha range of 0-255, which can be changed
   *   with colorMode()).
   *
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
  function tint(
    v1: number,
    v2: number,
    v3: number,
    alpha?: number
  ): void;

  /**
   *   Sets the fill value for displaying images. Images
   *   can be tinted to specified colors or made
   *   transparent by including an alpha value.  To apply
   *   transparency to an image without affecting its
   *   color, use white as the tint color and specify an
   *   alpha value. For instance, tint(255, 128) will
   *   make an image 50% transparent (assuming the
   *   default alpha range of 0-255, which can be changed
   *   with colorMode()).
   *
   *
   *   The value for the gray parameter must be less than
   *   or equal to the current maximum value as specified
   *   by colorMode(). The default maximum value is 255.
   *   @param value a color string
   */
  function tint(
    value: string
  ): void;

  /**
   *   Sets the fill value for displaying images. Images
   *   can be tinted to specified colors or made
   *   transparent by including an alpha value.  To apply
   *   transparency to an image without affecting its
   *   color, use white as the tint color and specify an
   *   alpha value. For instance, tint(255, 128) will
   *   make an image 50% transparent (assuming the
   *   default alpha range of 0-255, which can be changed
   *   with colorMode()).
   *
   *
   *   The value for the gray parameter must be less than
   *   or equal to the current maximum value as specified
   *   by colorMode(). The default maximum value is 255.
   *   @param gray a gray value
   */
  function tint(
    gray: number,
    alpha?: number
  ): void;

  /**
   *   Sets the fill value for displaying images. Images
   *   can be tinted to specified colors or made
   *   transparent by including an alpha value.  To apply
   *   transparency to an image without affecting its
   *   color, use white as the tint color and specify an
   *   alpha value. For instance, tint(255, 128) will
   *   make an image 50% transparent (assuming the
   *   default alpha range of 0-255, which can be changed
   *   with colorMode()).
   *
   *
   *   The value for the gray parameter must be less than
   *   or equal to the current maximum value as specified
   *   by colorMode(). The default maximum value is 255.
   *   @param values an array containing the
   *   red,green,blue & and alpha components of the color
   */
  function tint(
    values: number[]
  ): void;

  /**
   *   Sets the fill value for displaying images. Images
   *   can be tinted to specified colors or made
   *   transparent by including an alpha value.  To apply
   *   transparency to an image without affecting its
   *   color, use white as the tint color and specify an
   *   alpha value. For instance, tint(255, 128) will
   *   make an image 50% transparent (assuming the
   *   default alpha range of 0-255, which can be changed
   *   with colorMode()).
   *
   *
   *   The value for the gray parameter must be less than
   *   or equal to the current maximum value as specified
   *   by colorMode(). The default maximum value is 255.
   *   @param color the tint color
   */
  function tint(
    color: p5.Color
  ): void;

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
   *
   *   imageMode(CENTER) interprets the second and third
   *   parameters of image() as the image's center point.
   *   If two additional parameters are specified, they
   *   are used to set the image's width and height.
   *   @param mode either CORNER, CORNERS, or CENTER
   */
  function imageMode(
    mode: p5.IMAGE_MODE
  ): void;

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
    srcImage:
      | p5.Image
      | p5.Element,
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
  function copy(
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
   *   Applies a filter to the canvas.
   *
   *   The presets options are:
   *
   *
   *
   *   THRESHOLD Converts the image to black and white
   *   pixels depending if they are above or below the
   *   threshold defined by the level parameter. The
   *   parameter must be between 0.0 (black) and 1.0
   *   (white). If no level is specified, 0.5 is used.
   *
   *
   *
   *   GRAY Converts any colors in the image to grayscale
   *   equivalents. No parameter is used.
   *
   *
   *
   *   OPAQUE Sets the alpha channel to entirely opaque.
   *   No parameter is used.
   *
   *
   *
   *   INVERT Sets each pixel to its inverse value. No
   *   parameter is used.
   *
   *
   *
   *   POSTERIZE Limits each channel of the image to the
   *   number of colors specified as the parameter. The
   *   parameter can be set to values between 2 and 255,
   *   but results are most noticeable in the lower
   *   ranges.
   *
   *
   *
   *   BLUR Executes a Gaussian blur with the level
   *   parameter specifying the extent of the blurring.
   *   If no parameter is used, the blur is equivalent to
   *   Gaussian blur of radius 1. Larger values increase
   *   the blur.
   *
   *
   *
   *   ERODE Reduces the light areas. No parameter is
   *   used.
   *
   *
   *
   *   DILATE Increases the light areas. No parameter is
   *   used.
   *   @param filterType either THRESHOLD, GRAY, OPAQUE,
   *   INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR.
   *   See Filters.js for docs on each available filter
   *   @param [filterParam] an optional parameter unique
   *   to each filter, see above
   */
  function filter(
    filterType: p5.FILTER_TYPE,
    filterParam?: number
  ): void;

  /**
   *   Returns an array of [R,G,B,A] values for any pixel
   *   or grabs a section of an image. If no parameters
   *   are specified, the entire image is returned. Use
   *   the x and y parameters to get the value of one
   *   pixel. Get a section of the display window by
   *   specifying additional w and h parameters. When
   *   getting an image, the x and y parameters define
   *   the coordinates for the upper-left corner of the
   *   image, regardless of the current imageMode().  If
   *   the pixel requested is outside of the image
   *   window, [0,0,0,255] is returned. To get the
   *   numbers scaled according to the current color
   *   ranges and taking into account colorMode, use
   *   getColor instead of get.
   *
   *
   *   Getting the color of a single pixel with get(x, y)
   *   is easy, but not as fast as grabbing the data
   *   directly from pixels[]. The equivalent statement
   *   to get(x, y) using pixels[] with pixel density d
   *   is  var x, y, d; // set these to the coordinates
   *   var off = (y  width + x)  d * 4; var components =
   *   [ pixels[off], pixels[off + 1], pixels[off + 2],
   *   pixels[off + 3] ]; print(components);
   *
   *
   *   See the reference for pixels[] for more
   *   information.
   *
   *   If you want to extract an array of colors or a
   *   subimage from an p5.Image object, take a look at
   *   p5.Image.get()
   *   @param [x] x-coordinate of the pixel
   *   @param [y] y-coordinate of the pixel
   *   @param [w] width
   *   @param [h] height
   *   @return values of pixel at x,y in array format [R,
   *   G, B, A] or p5.Image
   */
  function get(
    x?: number,
    y?: number,
    w?: number,
    h?: number
  ):
    | number[]
    | p5.Image;

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
   *
   *
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
   *   every loop.
   *
   *   See the reference for pixels[] for more
   *   information.
   *   @param x x-coordinate of the pixel
   *   @param y y-coordinate of the pixel
   *   @param c insert a grayscale value | a pixel array
   *   | a p5.Color object | a p5.Image to copy
   */
  function set(
    x: number,
    y: number,
    c:
      | number
      | number[]
      | object
  ): void;

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
  function updatePixels(
    x?: number,
    y?: number,
    w?: number,
    h?: number
  ): void;

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
   *   example, if the image is 100x100 pixels, there
   *   will be 40,000. On a retina display, there will be
   *   160,000.  The first four values (indices 0-3) in
   *   the array will be the R, G, B, A values of the
   *   pixel at (0, 0). The second four values (indices
   *   4-7) will contain the R, G, B, A values of the
   *   pixel at (1, 0). More generally, to set values for
   *   a pixel at (x, y):
   *
   *   var d = pixelDensity(); for (var i = 0; i < d;
   *   i++) { for (var j = 0; j < d; j++) { // loop over
   *   idx = 4 * ((y * d + j) * width * d + (x * d + i));
   *   pixels[idx] = r; pixels[idx+1] = g; pixels[idx+2]
   *   = b; pixels[idx+3] = a; } }
   *
   *   While the above method is complex, it is flexible
   *   enough to work with any pixelDensity. Note that
   *   set() will automatically take care of setting all
   *   the appropriate values in pixels[] for a given (x,
   *   y) at any pixelDensity, but the performance may
   *   not be as fast when lots of modifications are made
   *   to the pixel array.
   *
   *
   *   Before accessing this array, the data must loaded
   *   with the loadPixels() function. After the array
   *   data has been modified, the updatePixels()
   *   function must be run to update the changes.
   *
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
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ):
    | object
    | any[];

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
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ):
    | object
    | any[];

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
    callback: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ):
    | object
    | any[];

  /**
   *   Reads the contents of a file and creates a String
   *   array of its individual lines. If the name of the
   *   file is used as the parameter, as in the above
   *   example, the file must be located in the sketch
   *   directory/folder.  Alternatively, the file maybe
   *   be loaded from anywhere on the local computer
   *   using an absolute path (something that starts with
   *   / on Unix and Linux, or a drive letter on
   *   Windows), or the filename parameter can be a URL
   *   for a file found on a network.
   *
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
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ): string[];

  /**
   *   Reads the contents of a file or URL and creates a
   *   p5.Table object with its values. If a file is
   *   specified, it must be located in the sketch's
   *   "data" folder. The filename parameter can also be
   *   a URL to a file found online. By default, the file
   *   is assumed to be comma-separated (in CSV format).
   *   Table only looks for a header row if the 'header'
   *   option is included. Possible options include:
   *
   *   - csv - parse the table as comma-separated values
   *   - tsv - parse the table as tab-separated values
   *   - header - this table has a header (title) row
   *
   *   When passing in multiple options, pass them in as
   *   separate parameters, seperated by commas. For
   *   example:
   *
   *
   *   loadTable('my_csv_file.csv', 'csv', 'header');
   *
   *
   *   All files loaded and saved use UTF-8 encoding.
   *
   *   This method is asynchronous, meaning it may not
   *   finish before the next line in your sketch is
   *   executed. Calling loadTable() inside preload()
   *   guarantees to complete the operation before
   *   setup() and draw() are called.
   *
   *   Outside of preload(), you may supply a callback
   *   function to handle the object:
   *
   *
   *
   *   This method is suitable for fetching files up to
   *   size of 64MB.
   *   @param filename name of the file or URL to load
   *   @param options "header" "csv" "tsv"
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
    options: string,
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ): object;

  /**
   *   Reads the contents of a file or URL and creates a
   *   p5.Table object with its values. If a file is
   *   specified, it must be located in the sketch's
   *   "data" folder. The filename parameter can also be
   *   a URL to a file found online. By default, the file
   *   is assumed to be comma-separated (in CSV format).
   *   Table only looks for a header row if the 'header'
   *   option is included. Possible options include:
   *
   *   - csv - parse the table as comma-separated values
   *   - tsv - parse the table as tab-separated values
   *   - header - this table has a header (title) row
   *
   *   When passing in multiple options, pass them in as
   *   separate parameters, seperated by commas. For
   *   example:
   *
   *
   *   loadTable('my_csv_file.csv', 'csv', 'header');
   *
   *
   *   All files loaded and saved use UTF-8 encoding.
   *
   *   This method is asynchronous, meaning it may not
   *   finish before the next line in your sketch is
   *   executed. Calling loadTable() inside preload()
   *   guarantees to complete the operation before
   *   setup() and draw() are called.
   *
   *   Outside of preload(), you may supply a callback
   *   function to handle the object:
   *
   *
   *
   *   This method is suitable for fetching files up to
   *   size of 64MB.
   *   @param filename name of the file or URL to load
   *   @param [callback] function to be executed after
   *   loadTable() completes. On success, the Table
   *   object is passed in as the first argument.
   *   @param [errorCallback] function to be executed if
   *   there is an error, response is passed in as first
   *   argument
   */
  function loadTable(
    filename: string,
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
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
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
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
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
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
    data?:
      | object
      | boolean,
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ): Promise<
    any
  >;

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
    data:
      | object
      | boolean,
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ): Promise<
    any
  >;

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
    callback: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ): Promise<
    any
  >;

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
    data?:
      | object
      | boolean,
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ): Promise<
    any
  >;

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
    data:
      | object
      | boolean,
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ): Promise<
    any
  >;

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
    callback: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ): Promise<
    any
  >;

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
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ): Promise<
    any
  >;

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
    callback?: (
      ...args: any[]
    ) => any,
    errorCallback?: (
      ...args: any[]
    ) => any
  ): Promise<
    any
  >;
  function createWriter(
    name: string,
    extension?: string
  ): p5.PrintWriter;

  /**
   *   Save an image, text, json, csv, wav, or html.
   *   Prompts download to the client's computer. Note
   *   that it is not recommended to call save() within
   *   draw if it's looping, as the save() function will
   *   open a new save dialog every frame. The default
   *   behavior is to save the canvas as an image. You
   *   can optionally specify a filename. For example:
   *
   *
   *   save(); save('myCanvas.jpg'); // save a specific
   *   canvas with a filename
   *
   *   Alternately, the first parameter can be a pointer
   *   to a canvas p5.Element, an Array of Strings, an
   *   Array of JSON, a JSON object, a p5.Table, a
   *   p5.Image, or a p5.SoundFile (requires p5.sound).
   *   The second parameter is a filename (including
   *   extension). The third parameter is for options
   *   specific to this type of object. This method will
   *   save a file that fits the given parameters. For
   *   example:
   *
   *
   *   // Saves canvas as an image save('myCanvas.jpg');
   *   // Saves pImage as a png image var img =
   *   createImage(10, 10); save(img, 'my.png'); // Saves
   *   canvas as an image var cnv = createCanvas(100,
   *   100); save(cnv, 'myCanvas.jpg'); // Saves
   *   p5.Renderer object as an image var gb =
   *   createGraphics(100, 100); save(gb,
   *   'myGraphics.jpg'); var myTable = new p5.Table();
   *   // Saves table as html file save(myTable,
   *   'myTable.html'); // Comma Separated Values
   *   save(myTable, 'myTable.csv'); // Tab Separated
   *   Values save(myTable, 'myTable.tsv'); var myJSON =
   *   { a: 1, b: true }; // Saves pretty JSON
   *   save(myJSON, 'my.json'); // Optimizes JSON
   *   filesize save(myJSON, 'my.json', true); // Saves
   *   array of strings to a text file with line breaks
   *   after each item var arrayOfStrings = ['a', 'b'];
   *   save(arrayOfStrings, 'my.txt');
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
  function save(
    objectOrFilename?:
      | object
      | string,
    filename?: string,
    options?:
      | boolean
      | string
  ): void;

  /**
   *   Writes the contents of an Array or a JSON object
   *   to a .json file. The file saving process and
   *   location of the saved file will vary between web
   *   browsers.
   *   @param [optimize] If true, removes line breaks and
   *   spaces from the output file to optimize filesize
   *   (but not readability).
   */
  function saveJSON(
    json:
      | any[]
      | object,
    filename: string,
    optimize?: boolean
  ): void;

  /**
   *   Writes an array of Strings to a text file, one
   *   line per String. The file saving process and
   *   location of the saved file will vary between web
   *   browsers.
   *   @param list string array to be written
   *   @param filename filename for output
   *   @param [extension] the filename's extension
   */
  function saveStrings(
    list: string[],
    filename: string,
    extension?: string
  ): void;

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
  function saveTable(
    Table: p5.Table,
    filename: string,
    options?: string
  ): void;

  /**
   *   Calculates the absolute value (magnitude) of a
   *   number. Maps to Math.abs(). The absolute value of
   *   a number is always positive.
   *   @param n number to compute
   *   @return absolute value of given number
   */
  function abs(
    n: number
  ): number;

  /**
   *   Calculates the closest int value that is greater
   *   than or equal to the value of the parameter. Maps
   *   to Math.ceil(). For example, ceil(9.03) returns
   *   the value 10.
   *   @param n number to round up
   *   @return rounded up number
   */
  function ceil(
    n: number
  ): number;

  /**
   *   Constrains a value between a minimum and maximum
   *   value.
   *   @param n number to constrain
   *   @param low minimum limit
   *   @param high maximum limit
   *   @return constrained number
   */
  function constrain(
    n: number,
    low: number,
    high: number
  ): number;

  /**
   *   Calculates the distance between two points.
   *   @param x1 x-coordinate of the first point
   *   @param y1 y-coordinate of the first point
   *   @param x2 x-coordinate of the second point
   *   @param y2 y-coordinate of the second point
   *   @return distance between the two points
   */
  function dist(
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number;

  /**
   *   Calculates the distance between two points.
   *   @param x1 x-coordinate of the first point
   *   @param y1 y-coordinate of the first point
   *   @param z1 z-coordinate of the first point
   *   @param x2 x-coordinate of the second point
   *   @param y2 y-coordinate of the second point
   *   @param z2 z-coordinate of the second point
   *   @return distance between the two points
   */
  function dist(
    x1: number,
    y1: number,
    z1: number,
    x2: number,
    y2: number,
    z2: number
  ): number;

  /**
   *   Returns Euler's number e (2.71828...) raised to
   *   the power of the n parameter. Maps to Math.exp().
   *   @param n exponent to raise
   *   @return e^n
   */
  function exp(
    n: number
  ): number;

  /**
   *   Calculates the closest int value that is less than
   *   or equal to the value of the parameter. Maps to
   *   Math.floor().
   *   @param n number to round down
   *   @return rounded down number
   */
  function floor(
    n: number
  ): number;

  /**
   *   Calculates a number between two numbers at a
   *   specific increment. The amt parameter is the
   *   amount to interpolate between the two values where
   *   0.0 equal to the first point, 0.1 is very near the
   *   first point, 0.5 is half-way in between, etc. The
   *   lerp function is convenient for creating motion
   *   along a straight path and for drawing dotted
   *   lines.
   *   @param start first value
   *   @param stop second value
   *   @param amt number between 0.0 and 1.0
   *   @return lerped value
   */
  function lerp(
    start: number,
    stop: number,
    amt: number
  ): number;

  /**
   *   Calculates the natural logarithm (the base-e
   *   logarithm) of a number. This function expects the
   *   n parameter to be a value greater than 0.0. Maps
   *   to Math.log().
   *   @param n number greater than 0
   *   @return natural logarithm of n
   */
  function log(
    n: number
  ): number;

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
  function mag(
    a: number,
    b: number
  ): number;

  /**
   *   Re-maps a number from one range to another.  In
   *   the first example above, the number 25 is
   *   converted from a value in the range of 0 to 100
   *   into a value that ranges from the left edge of the
   *   window (0) to the right edge (width).
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
  function max(
    n0: number,
    n1: number
  ): number;

  /**
   *   Determines the largest value in a sequence of
   *   numbers, and then returns that value. max()
   *   accepts any number of Number parameters, or an
   *   Array of any length.
   *   @param nums Numbers to compare
   */
  function max(
    nums: number[]
  ): number;

  /**
   *   Determines the smallest value in a sequence of
   *   numbers, and then returns that value. min()
   *   accepts any number of Number parameters, or an
   *   Array of any length.
   *   @param n0 Number to compare
   *   @param n1 Number to compare
   *   @return minimum Number
   */
  function min(
    n0: number,
    n1: number
  ): number;

  /**
   *   Determines the smallest value in a sequence of
   *   numbers, and then returns that value. min()
   *   accepts any number of Number parameters, or an
   *   Array of any length.
   *   @param nums Numbers to compare
   */
  function min(
    nums: number[]
  ): number;

  /**
   *   Normalizes a number from another range into a
   *   value between 0 and 1. Identical to map(value,
   *   low, high, 0, 1). Numbers outside of the range are
   *   not clamped to 0 and 1, because out-of-range
   *   values are often intentional and useful. (See the
   *   second example above.)
   *   @param value incoming value to be normalized
   *   @param start lower bound of the value's current
   *   range
   *   @param stop upper bound of the value's current
   *   range
   *   @return normalized number
   */
  function norm(
    value: number,
    start: number,
    stop: number
  ): number;

  /**
   *   Facilitates exponential expressions. The pow()
   *   function is an efficient way of multiplying
   *   numbers by themselves (or their reciprocals) in
   *   large quantities. For example, pow(3, 5) is
   *   equivalent to the expression 33333 and pow(3, -5)
   *   is equivalent to 1 / 33333. Maps to Math.pow().
   *   @param n base of the exponential expression
   *   @param e power by which to raise the base
   *   @return n^e
   */
  function pow(
    n: number,
    e: number
  ): number;

  /**
   *   Calculates the integer closest to the n parameter.
   *   For example, round(133.8) returns the value 134.
   *   Maps to Math.round().
   *   @param n number to round
   *   @return rounded number
   */
  function round(
    n: number
  ): number;

  /**
   *   Squares a number (multiplies a number by itself).
   *   The result is always a positive number, as
   *   multiplying two negative numbers always yields a
   *   positive result. For example, -1 * -1 = 1.
   *   @param n number to square
   *   @return squared number
   */
  function sq(
    n: number
  ): number;

  /**
   *   Calculates the square root of a number. The square
   *   root of a number is always positive, even though
   *   there may be a valid negative root. The square
   *   root s of number a is such that s*s = a. It is the
   *   opposite of squaring. Maps to Math.sqrt().
   *   @param n non-negative number to square root
   *   @return square root of number
   */
  function sqrt(
    n: number
  ): number;

  /**
   *   Creates a new p5.Vector (the datatype for storing
   *   vectors). This provides a two or three dimensional
   *   vector, specifically a Euclidean (also known as
   *   geometric) vector. A vector is an entity that has
   *   both magnitude and direction.
   *   @param [x] x component of the vector
   *   @param [y] y component of the vector
   *   @param [z] z component of the vector
   */
  function createVector(
    x?: number,
    y?: number,
    z?: number
  ): p5.Vector;

  /**
   *   Returns the Perlin noise value at specified
   *   coordinates. Perlin noise is a random sequence
   *   generator producing a more natural ordered,
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
   *   dimension can also be interpreted as time.
   *
   *   The actual noise is structured similar to an audio
   *   signal, in respect to the function's use of
   *   frequencies. Similar to the concept of harmonics
   *   in physics, perlin noise is computed over several
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
  function noise(
    x: number,
    y?: number,
    z?: number
  ): number;

  /**
   *   Adjusts the character and level of detail produced
   *   by the Perlin noise function. Similar to harmonics
   *   in physics, noise is computed over several
   *   octaves. Lower octaves contribute more to the
   *   output signal and as such define the overall
   *   intensity of the noise, whereas higher octaves
   *   create finer grained details in the noise
   *   sequence.  By default, noise is computed over 4
   *   octaves with each octave contributing exactly half
   *   than its predecessor, starting at 50% strength for
   *   the 1st octave. This falloff amount can be changed
   *   by adding an additional function parameter. Eg. a
   *   falloff factor of 0.75 means each octave will now
   *   have 75% impact (25% less) of the previous lower
   *   octave. Any value between 0.0 and 1.0 is valid,
   *   however note that values greater than 0.5 might
   *   result in greater than 1.0 values returned by
   *   noise().
   *
   *
   *   By changing these parameters, the signal created
   *   by the noise() function can be adapted to fit very
   *   specific needs and characteristics.
   *   @param lod number of octaves to be used by the
   *   noise
   *   @param falloff falloff factor for each octave
   */
  function noiseDetail(
    lod: number,
    falloff: number
  ): void;

  /**
   *   Sets the seed value for noise(). By default,
   *   noise() produces different results each time the
   *   program is run. Set the value parameter to a
   *   constant to return the same pseudo-random numbers
   *   each time the software is run.
   *   @param seed the seed value
   */
  function noiseSeed(
    seed: number
  ): void;

  /**
   *   Sets the seed value for random(). By default,
   *   random() produces different results each time the
   *   program is run. Set the seed parameter to a
   *   constant to return the same pseudo-random numbers
   *   each time the software is run.
   *   @param seed the seed value
   */
  function randomSeed(
    seed: number
  ): void;

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
  function random(
    min?: number,
    max?: number
  ): number;

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
  function random(
    choices: any[]
  ): any;

  /**
   *   Returns a random number fitting a Gaussian, or
   *   normal, distribution. There is theoretically no
   *   minimum or maximum value that randomGaussian()
   *   might return. Rather, there is just a very low
   *   probability that values far from the mean will be
   *   returned; and a higher probability that numbers
   *   near the mean will be returned.  Takes either 0, 1
   *   or 2 arguments.
   *
   *   If no args, returns a mean of 0 and standard
   *   deviation of 1.
   *
   *   If one arg, that arg is the mean (standard
   *   deviation is 1).
   *
   *   If two args, first is mean, second is standard
   *   deviation.
   *   @param mean the mean
   *   @param sd the standard deviation
   *   @return the random number
   */
  function randomGaussian(
    mean: number,
    sd: number
  ): number;

  /**
   *   The inverse of cos(), returns the arc cosine of a
   *   value. This function expects the values in the
   *   range of -1 to 1 and values are returned in the
   *   range 0 to PI (3.1415927).
   *   @param value the value whose arc cosine is to be
   *   returned
   *   @return the arc cosine of the given value
   */
  function acos(
    value: number
  ): number;

  /**
   *   The inverse of sin(), returns the arc sine of a
   *   value. This function expects the values in the
   *   range of -1 to 1 and values are returned in the
   *   range -PI/2 to PI/2.
   *   @param value the value whose arc sine is to be
   *   returned
   *   @return the arc sine of the given value
   */
  function asin(
    value: number
  ): number;

  /**
   *   The inverse of tan(), returns the arc tangent of a
   *   value. This function expects the values in the
   *   range of -Infinity to Infinity (exclusive) and
   *   values are returned in the range -PI/2 to PI/2.
   *   @param value the value whose arc tangent is to be
   *   returned
   *   @return the arc tangent of the given value
   */
  function atan(
    value: number
  ): number;

  /**
   *   Calculates the angle (in radians) from a specified
   *   point to the coordinate origin as measured from
   *   the positive x-axis. Values are returned as a
   *   float in the range from PI to -PI. The atan2()
   *   function is most often used for orienting geometry
   *   to the position of the cursor.  Note: The
   *   y-coordinate of the point is the first parameter,
   *   and the x-coordinate is the second parameter, due
   *   the the structure of calculating the tangent.
   *   @param y y-coordinate of the point
   *   @param x x-coordinate of the point
   *   @return the arc tangent of the given point
   */
  function atan2(
    y: number,
    x: number
  ): number;

  /**
   *   Calculates the cosine of an angle. This function
   *   takes into account the current angleMode. Values
   *   are returned in the range -1 to 1.
   *   @param angle the angle
   *   @return the cosine of the angle
   */
  function cos(
    angle: number
  ): number;

  /**
   *   Calculates the sine of an angle. This function
   *   takes into account the current angleMode. Values
   *   are returned in the range -1 to 1.
   *   @param angle the angle
   *   @return the sine of the angle
   */
  function sin(
    angle: number
  ): number;

  /**
   *   Calculates the tangent of an angle. This function
   *   takes into account the current angleMode. Values
   *   are returned in the range -1 to 1.
   *   @param angle the angle
   *   @return the tangent of the angle
   */
  function tan(
    angle: number
  ): number;

  /**
   *   Converts a radian measurement to its corresponding
   *   value in degrees. Radians and degrees are two ways
   *   of measuring the same thing. There are 360 degrees
   *   in a circle and 2*PI radians in a circle. For
   *   example, 90° = PI/2 = 1.5707964. This function
   *   does not take into account the current angleMode.
   *   @param radians the radians value to convert to
   *   degrees
   *   @return the converted angle
   */
  function degrees(
    radians: number
  ): number;

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
  function radians(
    degrees: number
  ): number;

  /**
   *   Sets the current mode of p5 to given mode. Default
   *   mode is RADIANS.
   *   @param mode either RADIANS or DEGREES
   */
  function angleMode(
    mode: p5.ANGLE_MODE
  ): void;

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
   *   value and the top of edge of the text to the y
   *   value.
   *   @param horizAlign horizontal alignment, either
   *   LEFT, CENTER, or RIGHT
   *   @param [vertAlign] vertical alignment, either TOP,
   *   BOTTOM, CENTER, or BASELINE
   *   @chainable
   */
  function textAlign(
    horizAlign: p5.HORIZ_ALIGN,
    vertAlign?: p5.VERT_ALIGN
  ): p5;

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
   *   value and the top of edge of the text to the y
   *   value.
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
  function textLeading(
    leading: number
  ): p5;

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
  function textSize(
    theSize: number
  ): p5;

  /**
   *   Sets/gets the current font size. This size will be
   *   used in all subsequent calls to the text()
   *   function. Font size is measured in pixels.
   */
  function textSize(): number;

  /**
   *   Sets/gets the style of the text for system fonts
   *   to NORMAL, ITALIC, or BOLD. Note: this may be is
   *   overridden by CSS styling. For non-system fonts
   *   (opentype, truetype, etc.) please load styled
   *   fonts instead.
   *   @param theStyle styling for text, either NORMAL,
   *   ITALIC, or BOLD
   *   @chainable
   */
  function textStyle(
    theStyle: p5.THE_STYLE
  ): p5;

  /**
   *   Sets/gets the style of the text for system fonts
   *   to NORMAL, ITALIC, or BOLD. Note: this may be is
   *   overridden by CSS styling. For non-system fonts
   *   (opentype, truetype, etc.) please load styled
   *   fonts instead.
   */
  function textStyle(): string;

  /**
   *   Calculates and returns the width of any character
   *   or text string.
   *   @param theText the String of characters to measure
   */
  function textWidth(
    theText: string
  ): number;

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
  function loadFont(
    path: string,
    callback?: (
      ...args: any[]
    ) => any,
    onError?: (
      ...args: any[]
    ) => any
  ): p5.Font;

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
  function text(
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
  function textFont(): object;

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
  function textFont(
    font:
      | object
      | string,
    size?: number
  ): p5;

  /**
   *   Adds a value to the end of an array. Extends the
   *   length of the array by one. Maps to Array.push().
   *   @param array Array to append
   *   @param value to be added to the Array
   *   @return the array that was appended to
   */
  function append(
    array: any[],
    value: any
  ): any[];

  /**
   *   Copies an array (or part of an array) to another
   *   array. The src array is copied to the dst array,
   *   beginning at the position specified by srcPosition
   *   and into the position specified by dstPosition.
   *   The number of elements to copy is determined by
   *   length. Note that copying values overwrites
   *   existing values in the destination array. To
   *   append values instead of overwriting them, use
   *   concat().  The simplified version with only two
   *   arguments, arrayCopy(src, dst), copies an entire
   *   array to another of the same size. It is
   *   equivalent to arrayCopy(src, 0, dst, 0,
   *   src.length).
   *
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
  function arrayCopy(
    src: any[],
    srcPosition: number,
    dst: any[],
    dstPosition: number,
    length: number
  ): void;

  /**
   *   Copies an array (or part of an array) to another
   *   array. The src array is copied to the dst array,
   *   beginning at the position specified by srcPosition
   *   and into the position specified by dstPosition.
   *   The number of elements to copy is determined by
   *   length. Note that copying values overwrites
   *   existing values in the destination array. To
   *   append values instead of overwriting them, use
   *   concat().  The simplified version with only two
   *   arguments, arrayCopy(src, dst), copies an entire
   *   array to another of the same size. It is
   *   equivalent to arrayCopy(src, 0, dst, 0,
   *   src.length).
   *
   *
   *   Using this function is far more efficient for
   *   copying array data than iterating through a for()
   *   loop and copying each element individually.
   *   @param src the source Array
   *   @param dst the destination Array
   *   @param [length] number of Array elements to be
   *   copied
   */
  function arrayCopy(
    src: any[],
    dst: any[],
    length?: number
  ): void;

  /**
   *   Concatenates two arrays, maps to Array.concat().
   *   Does not modify the input arrays.
   *   @param a first Array to concatenate
   *   @param b second Array to concatenate
   *   @return concatenated array
   */
  function concat(
    a: any[],
    b: any[]
  ): any[];

  /**
   *   Reverses the order of an array, maps to
   *   Array.reverse()
   *   @param list Array to reverse
   *   @return the reversed list
   */
  function reverse(
    list: any[]
  ): any[];

  /**
   *   Decreases an array by one element and returns the
   *   shortened array, maps to Array.pop().
   *   @param list Array to shorten
   *   @return shortened Array
   */
  function shorten(
    list: any[]
  ): any[];

  /**
   *   Randomizes the order of the elements of an array.
   *   Implements  Fisher-Yates Shuffle Algorithm.
   *   @param array Array to shuffle
   *   @param [bool] modify passed array
   *   @return shuffled Array
   */
  function shuffle(
    array: any[],
    bool?: boolean
  ): any[];

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
  function sort(
    list: any[],
    count?: number
  ): any[];

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
  function splice(
    list: any[],
    value: any,
    position: number
  ): any[];

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
  function subset(
    list: any[],
    start: number,
    count?: number
  ): any[];

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
  function float(
    str: string
  ): number;

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
  function int(
    n:
      | string
      | boolean
      | number,
    radix?: number
  ): number;

  /**
   *   Converts a boolean, string, or float to its
   *   integer representation. When an array of values is
   *   passed in, then an int array of the same length is
   *   returned.
   *   @param ns values to parse
   *   @return integer representation of values
   */
  function int(
    ns: any[]
  ): number[];

  /**
   *   Converts a boolean, string or number to its string
   *   representation. When an array of values is passed
   *   in, then an array of strings of the same length is
   *   returned.
   *   @param n value to parse
   *   @return string representation of value
   */
  function str(
    n:
      | string
      | boolean
      | number
      | any[]
  ): string;

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
  function boolean(
    n:
      | string
      | boolean
      | number
      | any[]
  ): boolean;

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
  function byte(
    n:
      | string
      | boolean
      | number
  ): number;

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
  function byte(
    ns: any[]
  ): number[];

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
  function char(
    n:
      | string
      | number
  ): string;

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
  function char(
    ns: any[]
  ): string[];

  /**
   *   Converts a single-character string to its
   *   corresponding integer representation. When an
   *   array of single-character string values is passed
   *   in, then an array of integers of the same length
   *   is returned.
   *   @param n value to parse
   *   @return integer representation of value
   */
  function unchar(
    n: string
  ): number;

  /**
   *   Converts a single-character string to its
   *   corresponding integer representation. When an
   *   array of single-character string values is passed
   *   in, then an array of integers of the same length
   *   is returned.
   *   @param ns values to parse
   *   @return integer representation of values
   */
  function unchar(
    ns: any[]
  ): number[];

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
  function hex(
    n: number,
    digits?: number
  ): string;

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
  function hex(
    ns: number[],
    digits?: number
  ): string[];

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
  function unhex(
    n: string
  ): number;

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
  function unhex(
    ns: any[]
  ): number[];

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
  function join(
    list: any[],
    separator: string
  ): string;

  /**
   *   This function is used to apply a regular
   *   expression to a piece of text, and return matching
   *   groups (elements found inside parentheses) as a
   *   String array. If there are no matches, a null
   *   value will be returned. If no groups are specified
   *   in the regular expression, but the sequence
   *   matches, an array of length 1 (with the matched
   *   text as the first element of the array) will be
   *   returned.  To use the function, first check to see
   *   if the result is null. If the result is null, then
   *   the sequence did not match at all. If the sequence
   *   did match, an array is returned.
   *
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
  function match(
    str: string,
    regexp: string
  ): string[];

  /**
   *   This function is used to apply a regular
   *   expression to a piece of text, and return a list
   *   of matching groups (elements found inside
   *   parentheses) as a two-dimensional String array. If
   *   there are no matches, a null value will be
   *   returned. If no groups are specified in the
   *   regular expression, but the sequence matches, a
   *   two dimensional array is still returned, but the
   *   second dimension is only of length one.  To use
   *   the function, first check to see if the result is
   *   null. If the result is null, then the sequence did
   *   not match at all. If the sequence did match, a 2D
   *   array is returned.
   *
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
  function matchAll(
    str: string,
    regexp: string
  ): string[];

  /**
   *   Utility function for formatting numbers into
   *   strings. There are two versions: one for
   *   formatting floats, and one for formatting ints.
   *   The values for the digits, left, and right
   *   parameters should always be positive integers.
   *   @param num the Number to format
   *   @param [left] number of digits to the left of the
   *   decimal point
   *   @param [right] number of digits to the right of
   *   the decimal point
   *   @return formatted String
   */
  function nf(
    num:
      | number
      | string,
    left?:
      | number
      | string,
    right?:
      | number
      | string
  ): string;

  /**
   *   Utility function for formatting numbers into
   *   strings. There are two versions: one for
   *   formatting floats, and one for formatting ints.
   *   The values for the digits, left, and right
   *   parameters should always be positive integers.
   *   @param nums the Numbers to format
   *   @param [left] number of digits to the left of the
   *   decimal point
   *   @param [right] number of digits to the right of
   *   the decimal point
   *   @return formatted Strings
   */
  function nf(
    nums: any[],
    left?:
      | number
      | string,
    right?:
      | number
      | string
  ): string[];

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
  function nfc(
    num:
      | number
      | string,
    right?:
      | number
      | string
  ): string;

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
  function nfc(
    nums: any[],
    right?:
      | number
      | string
  ): string[];

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
  function nfp(
    num: number,
    left?: number,
    right?: number
  ): string;

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
  function nfp(
    nums: number[],
    left?: number,
    right?: number
  ): string[];

  /**
   *   Utility function for formatting numbers into
   *   strings. Similar to nf() but puts a " " (space) in
   *   front of positive numbers and a "-" in front of
   *   negative numbers. There are two versions: one for
   *   formatting floats, and one for formatting ints.
   *   The values for the digits, left, and right
   *   parameters should always be positive integers.
   *   @param num the Number to format
   *   @param [left] number of digits to the left of the
   *   decimal point
   *   @param [right] number of digits to the right of
   *   the decimal point
   *   @return formatted String
   */
  function nfs(
    num: number,
    left?: number,
    right?: number
  ): string;

  /**
   *   Utility function for formatting numbers into
   *   strings. Similar to nf() but puts a " " (space) in
   *   front of positive numbers and a "-" in front of
   *   negative numbers. There are two versions: one for
   *   formatting floats, and one for formatting ints.
   *   The values for the digits, left, and right
   *   parameters should always be positive integers.
   *   @param nums the Numbers to format
   *   @param [left] number of digits to the left of the
   *   decimal point
   *   @param [right] number of digits to the right of
   *   the decimal point
   *   @return formatted Strings
   */
  function nfs(
    nums: any[],
    left?: number,
    right?: number
  ): string[];

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
  function split(
    value: string,
    delim: string
  ): string[];

  /**
   *   The splitTokens() function splits a String at one
   *   or many character delimiters or "tokens." The
   *   delim parameter specifies the character or
   *   characters to be used as a boundary.  If no delim
   *   characters are specified, any whitespace character
   *   is used to split. Whitespace characters include
   *   tab (\t), line feed (\n), carriage return (\r),
   *   form feed (\f), and space.
   *   @param value the String to be split
   *   @param [delim] list of individual Strings that
   *   will be used as separators
   *   @return Array of Strings
   */
  function splitTokens(
    value: string,
    delim?: string
  ): string[];

  /**
   *   Removes whitespace characters from the beginning
   *   and end of a String. In addition to standard
   *   whitespace characters such as space, carriage
   *   return, and tab, this function also removes the
   *   Unicode "nbsp" character.
   *   @param str a String to be trimmed
   *   @return a trimmed String
   */
  function trim(
    str: string
  ): string;

  /**
   *   Removes whitespace characters from the beginning
   *   and end of a String. In addition to standard
   *   whitespace characters such as space, carriage
   *   return, and tab, this function also removes the
   *   Unicode "nbsp" character.
   *   @param strs an Array of Strings to be trimmed
   *   @return an Array of trimmed Strings
   */
  function trim(
    strs: any[]
  ): string[];

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
   *   a second) since starting the program. This
   *   information is often used for timing events and
   *   animation sequences.
   *   @return the number of milliseconds since starting
   *   the program
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
  function plane(
    width?: number,
    height?: number,
    detailX?: number,
    detailY?: number
  ): p5;

  /**
   *   Draw a box with given width, height and depth
   *   @param [width] width of the box
   *   @param [Height] height of the box
   *   @param [depth] depth of the box
   *   @param [detailX] Optional number of triangle
   *   subdivisions in x-dimension
   *   @param [detailY] Optional number of triangle
   *   subdivisions in y-dimension
   *   @chainable
   */
  function box(
    width?: number,
    Height?: number,
    depth?: number,
    detailX?: number,
    detailY?: number
  ): p5;

  /**
   *   Draw a sphere with given radius
   *   @param [radius] radius of circle
   *   @param [detailX] number of segments, the more
   *   segments the smoother geometry default is 24
   *   @param [detailY] number of segments, the more
   *   segments the smoother geometry default is 16
   *   @chainable
   */
  function sphere(
    radius?: number,
    detailX?: number,
    detailY?: number
  ): p5;

  /**
   *   Draw a cylinder with given radius and height
   *   @param [radius] radius of the surface
   *   @param [height] height of the cylinder
   *   @param [detailX] number of segments, the more
   *   segments the smoother geometry default is 24
   *   @param [detailY] number of segments in
   *   y-dimension, the more segments the smoother
   *   geometry default is 1
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
   *   Draw a cone with given radius and height
   *   @param [radius] radius of the bottom surface
   *   @param [height] height of the cone
   *   @param [detailX] number of segments, the more
   *   segments the smoother geometry default is 24
   *   @param [detailY] number of segments, the more
   *   segments the smoother geometry default is 1
   *   @param [cap] whether to draw the base of the cone
   *   @chainable
   */
  function cone(
    radius?: number,
    height?: number,
    detailX?: number,
    detailY?: number,
    cap?: boolean
  ): p5;

  /**
   *   Draw an ellipsoid with given radius
   *   @param [radiusx] xradius of circle
   *   @param [radiusy] yradius of circle
   *   @param [radiusz] zradius of circle
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
  function ellipsoid(
    radiusx?: number,
    radiusy?: number,
    radiusz?: number,
    detailX?: number,
    detailY?: number
  ): p5;

  /**
   *   Draw a torus with given radius and tube radius
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
  function torus(
    radius?: number,
    tubeRadius?: number,
    detailX?: number,
    detailY?: number
  ): p5;

  /**
   *   Allows movement around a 3D sketch using a mouse
   *   or trackpad. Left-clicking and dragging will
   *   rotate the camera position about the center of the
   *   sketch, right-clicking and dragging will pan the
   *   camera position without rotation, and using the
   *   mouse wheel (scrolling) will move the camera
   *   closer or further from the center of the sketch.
   *   This function can be called with parameters
   *   dictating sensitivity to mouse movement along the
   *   X and Y axes. Calling this function without
   *   parameters is equivalent to calling
   *   orbitControl(1,1). To reverse direction of
   *   movement in either axis, enter a negative number
   *   for sensitivity.
   *   @param [sensitivityX] sensitivity to mouse
   *   movement along X axis
   *   @param [sensitivityY] sensitivity to mouse
   *   movement along Y axis
   *   @chainable
   */
  function orbitControl(
    sensitivityX?: number,
    sensitivityY?: number
  ): p5;

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
  function debugMode(
    mode: p5.DEBUG_MODE
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
   *   Creates an ambient light with a color
   *   @param v1 red or hue value relative to the current
   *   color range
   *   @param v2 green or saturation value relative to
   *   the current color range
   *   @param v3 blue or brightness value relative to the
   *   current color range
   *   @param [alpha] the alpha value
   *   @chainable
   */
  function ambientLight(
    v1: number,
    v2: number,
    v3: number,
    alpha?: number
  ): p5;

  /**
   *   Creates an ambient light with a color
   *   @param value a color string
   *   @chainable
   */
  function ambientLight(
    value: string
  ): p5;

  /**
   *   Creates an ambient light with a color
   *   @param gray a gray value
   *   @param [alpha] the alpha value
   *   @chainable
   */
  function ambientLight(
    gray: number,
    alpha?: number
  ): p5;

  /**
   *   Creates an ambient light with a color
   *   @param values an array containing the
   *   red,green,blue & and alpha components of the color
   *   @chainable
   */
  function ambientLight(
    values: number[]
  ): p5;

  /**
   *   Creates an ambient light with a color
   *   @param color the ambient light color
   *   @chainable
   */
  function ambientLight(
    color: p5.Color
  ): p5;

  /**
   *   Creates a directional light with a color and a
   *   direction
   *   @param v1 red or hue value (depending on the
   *   current color mode),
   *   @param v2 green or saturation value
   *   @param v3 blue or brightness value
   *   @param position the direction of the light
   *   @chainable
   */
  function directionalLight(
    v1: number,
    v2: number,
    v3: number,
    position: p5.Vector
  ): p5;

  /**
   *   Creates a directional light with a color and a
   *   direction
   *   @param color color Array, CSS color string, or
   *   p5.Color value
   *   @param x x axis direction
   *   @param y y axis direction
   *   @param z z axis direction
   *   @chainable
   */
  function directionalLight(
    color:
      | number[]
      | string
      | p5.Color,
    x: number,
    y: number,
    z: number
  ): p5;

  /**
   *   Creates a directional light with a color and a
   *   direction
   *   @param color color Array, CSS color string, or
   *   p5.Color value
   *   @param position the direction of the light
   *   @chainable
   */
  function directionalLight(
    color:
      | number[]
      | string
      | p5.Color,
    position: p5.Vector
  ): p5;

  /**
   *   Creates a directional light with a color and a
   *   direction
   *   @param v1 red or hue value (depending on the
   *   current color mode),
   *   @param v2 green or saturation value
   *   @param v3 blue or brightness value
   *   @param x x axis direction
   *   @param y y axis direction
   *   @param z z axis direction
   *   @chainable
   */
  function directionalLight(
    v1: number,
    v2: number,
    v3: number,
    x: number,
    y: number,
    z: number
  ): p5;

  /**
   *   Creates a point light with a color and a light
   *   position
   *   @param v1 red or hue value (depending on the
   *   current color mode),
   *   @param v2 green or saturation value
   *   @param v3 blue or brightness value
   *   @param x x axis position
   *   @param y y axis position
   *   @param z z axis position
   *   @chainable
   */
  function pointLight(
    v1: number,
    v2: number,
    v3: number,
    x: number,
    y: number,
    z: number
  ): p5;

  /**
   *   Creates a point light with a color and a light
   *   position
   *   @param v1 red or hue value (depending on the
   *   current color mode),
   *   @param v2 green or saturation value
   *   @param v3 blue or brightness value
   *   @param position the position of the light
   *   @chainable
   */
  function pointLight(
    v1: number,
    v2: number,
    v3: number,
    position: p5.Vector
  ): p5;

  /**
   *   Creates a point light with a color and a light
   *   position
   *   @param color color Array, CSS color string, or
   *   p5.Color value
   *   @param x x axis position
   *   @param y y axis position
   *   @param z z axis position
   *   @chainable
   */
  function pointLight(
    color:
      | number[]
      | string
      | p5.Color,
    x: number,
    y: number,
    z: number
  ): p5;

  /**
   *   Creates a point light with a color and a light
   *   position
   *   @param color color Array, CSS color string, or
   *   p5.Color value
   *   @param position the position of the light
   *   @chainable
   */
  function pointLight(
    color:
      | number[]
      | string
      | p5.Color,
    position: p5.Vector
  ): p5;

  /**
   *   Load a 3d model from an OBJ file.  One of the
   *   limitations of the OBJ format is that it doesn't
   *   have a built-in sense of scale. This means that
   *   models exported from different programs might be
   *   very different sizes. If your model isn't
   *   displaying, try calling loadModel() with the
   *   normalized parameter set to true. This will resize
   *   the model to a scale appropriate for p5. You can
   *   also make additional changes to the final size of
   *   your model with the scale() function.
   *   @param path Path of the model to be loaded
   *   @param normalize If true, scale the model to a
   *   standardized size when loading
   *   @param [successCallback] Function to be called
   *   once the model is loaded. Will be passed the 3D
   *   model object.
   *   @param [failureCallback] called with event error
   *   if the image fails to load.
   *   @return the p5.Geometry object
   */
  function loadModel(
    path: string,
    normalize: boolean,
    successCallback?: (
      p1: p5.Geometry
    ) => any,
    failureCallback?: (
      p1: Event
    ) => any
  ): p5.Geometry;

  /**
   *   Load a 3d model from an OBJ file.  One of the
   *   limitations of the OBJ format is that it doesn't
   *   have a built-in sense of scale. This means that
   *   models exported from different programs might be
   *   very different sizes. If your model isn't
   *   displaying, try calling loadModel() with the
   *   normalized parameter set to true. This will resize
   *   the model to a scale appropriate for p5. You can
   *   also make additional changes to the final size of
   *   your model with the scale() function.
   *   @param path Path of the model to be loaded
   *   @param [successCallback] Function to be called
   *   once the model is loaded. Will be passed the 3D
   *   model object.
   *   @param [failureCallback] called with event error
   *   if the image fails to load.
   *   @return the p5.Geometry object
   */
  function loadModel(
    path: string,
    successCallback?: (
      p1: p5.Geometry
    ) => any,
    failureCallback?: (
      p1: Event
    ) => any
  ): p5.Geometry;

  /**
   *   Render a 3d model to the screen.
   *   @param model Loaded 3d model to be rendered
   */
  function model(
    model: p5.Geometry
  ): void;

  /**
   *   Loads a custom shader from the provided vertex and
   *   fragment shader paths. The shader files are loaded
   *   asynchronously in the background, so this method
   *   should be used in preload(). For now, there are
   *   three main types of shaders. p5 will automatically
   *   supply appropriate vertices, normals, colors, and
   *   lighting attributes if the parameters defined in
   *   the shader match the names.
   *   @param [vertFilename] path to file containing
   *   vertex shader source code
   *   @param [fragFilename] path to file containing
   *   fragment shader source code
   *   @return a shader object created from the provided
   *   vertex and fragment shader files.
   */
  function loadShader(
    vertFilename?: string,
    fragFilename?: string
  ): p5.Shader;
  function createShader(
    vertSrc: string,
    fragSrc: string
  ): p5.Shader;

  /**
   *   The shader() function lets the user provide a
   *   custom shader to fill in shapes in WEBGL mode.
   *   Users can create their own shaders by loading
   *   vertex and fragment shaders with loadShader().
   *   @param [s] the desired p5.Shader to use for
   *   rendering shapes.
   *   @chainable
   */
  function shader(
    s?: p5.Shader
  ): p5;

  /**
   *   Normal material for geometry. You can view all
   *   possible materials in this example.
   *   @chainable
   */
  function normalMaterial(): p5;

  /**
   *   Texture for geometry. You can view other possible
   *   materials in this example.
   *   @param tex 2-dimensional graphics to render as
   *   texture
   *   @chainable
   */
  function texture(
    tex:
      | p5.Image
      | p5.MediaElement
      | p5.Graphics
  ): p5;

  /**
   *   Ambient material for geometry with a given color.
   *   You can view all possible materials in this
   *   example.
   *   @param v1 gray value, red or hue value (depending
   *   on the current color mode),
   *   @param [v2] green or saturation value
   *   @param [v3] blue or brightness value
   *   @param [a] opacity
   *   @chainable
   */
  function ambientMaterial(
    v1: number,
    v2?: number,
    v3?: number,
    a?: number
  ): p5;

  /**
   *   Ambient material for geometry with a given color.
   *   You can view all possible materials in this
   *   example.
   *   @param color color, color Array, or CSS color
   *   string
   *   @chainable
   */
  function ambientMaterial(
    color:
      | number[]
      | string
      | p5.Color
  ): p5;

  /**
   *   Specular material for geometry with a given color.
   *   You can view all possible materials in this
   *   example.
   *   @param v1 gray value, red or hue value (depending
   *   on the current color mode),
   *   @param [v2] green or saturation value
   *   @param [v3] blue or brightness value
   *   @param [a] opacity
   *   @chainable
   */
  function specularMaterial(
    v1: number,
    v2?: number,
    v3?: number,
    a?: number
  ): p5;

  /**
   *   Specular material for geometry with a given color.
   *   You can view all possible materials in this
   *   example.
   *   @param color color Array, or CSS color string
   *   @chainable
   */
  function specularMaterial(
    color:
      | number[]
      | string
      | p5.Color
  ): p5;

  /**
   *   Sets the camera position for a 3D sketch.
   *   Parameters for this function define the position
   *   for the camera, the center of the sketch (where
   *   the camera is pointing), and an up direction (the
   *   orientation of the camera). When called with no
   *   arguments, this function creates a default camera
   *   equivalent to camera(0, 0, (height/2.0) /
   *   tan(PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0);
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
   *   Sets a perspective projection for the camera in a
   *   3D sketch. This projection represents depth
   *   through foreshortening: objects that are close to
   *   the camera appear their actual size while those
   *   that are further away from the camera appear
   *   smaller. The parameters to this function define
   *   the viewing frustum (the truncated pyramid within
   *   which objects are seen by the camera) through
   *   vertical field of view, aspect ratio (usually
   *   width/height), and near and far clipping planes.
   *   When called with no arguments, the defaults
   *   provided are equivalent to perspective(PI/3.0,
   *   width/height, eyeZ/10.0, eyeZ10.0), where eyeZ is
   *   equal to ((height/2.0) / tan(PI60.0/360.0));
   *   @param [fovy] camera frustum vertical field of
   *   view, from bottom to top of view, in angleMode
   *   units
   *   @param [aspect] camera frustum aspect ratio
   *   @param [near] frustum near plane length
   *   @param [far] frustum far plane length
   *   @chainable
   */
  function perspective(
    fovy?: number,
    aspect?: number,
    near?: number,
    far?: number
  ): p5;

  /**
   *   Sets an orthographic projection for the camera in
   *   a 3D sketch and defines a box-shaped viewing
   *   frustum within which objects are seen. In this
   *   projection, all objects with the same dimension
   *   appear the same size, regardless of whether they
   *   are near or far from the camera. The parameters to
   *   this function specify the viewing frustum where
   *   left and right are the minimum and maximum x
   *   values, top and bottom are the minimum and maximum
   *   y values, and near and far are the minimum and
   *   maximum z values. If no parameters are given, the
   *   default is used: ortho(-width/2, width/2,
   *   -height/2, height/2).
   *   @param [left] camera frustum left plane
   *   @param [right] camera frustum right plane
   *   @param [bottom] camera frustum bottom plane
   *   @param [top] camera frustum top plane
   *   @param [near] camera frustum near plane
   *   @param [far] camera frustum far plane
   *   @chainable
   */
  function ortho(
    left?: number,
    right?: number,
    bottom?: number,
    top?: number,
    near?: number,
    far?: number
  ): p5;

  /**
   *   Creates a new p5.Camera object and tells the
   *   renderer to use that camera. Returns the p5.Camera
   *   object.
   *   @return The newly created camera object.
   */
  function createCamera(): p5.Camera;

  /**
   *   Sets rendererGL's current camera to a p5.Camera
   *   object. Allows switching between multiple cameras.
   *   @param cam p5.Camera object
   */
  function setCamera(
    cam: p5.Camera
  ): void;

  /**
   *   Set attributes for the WebGL Drawing context. This
   *   is a way of adjusting ways that the WebGL renderer
   *   works to fine-tune the display and performance.
   *   This should be put in setup(). The available
   *   attributes are:  alpha - indicates if the canvas
   *   contains an alpha buffer default is true
   *
   *
   *   depth - indicates whether the drawing buffer has a
   *   depth buffer of at least 16 bits - default is true
   *
   *
   *   stencil - indicates whether the drawing buffer has
   *   a stencil buffer of at least 8 bits
   *
   *
   *   antialias - indicates whether or not to perform
   *   anti-aliasing default is false
   *
   *
   *   premultipliedAlpha - indicates that the page
   *   compositor will assume the drawing buffer contains
   *   colors with pre-multiplied alpha default is false
   *
   *
   *   preserveDrawingBuffer - if true the buffers will
   *   not be cleared and and will preserve their values
   *   until cleared or overwritten by author (note that
   *   p5 clears automatically on draw loop) default is
   *   true
   *
   *
   *   perPixelLighting - if true, per-pixel lighting
   *   will be used in the lighting shader. default is
   *   false
   *   @param key Name of attribute
   *   @param value New value of named attribute
   */
  function setAttributes(
    key: string,
    value: boolean
  ): void;

  /**
   *   Set attributes for the WebGL Drawing context. This
   *   is a way of adjusting ways that the WebGL renderer
   *   works to fine-tune the display and performance.
   *   This should be put in setup(). The available
   *   attributes are:  alpha - indicates if the canvas
   *   contains an alpha buffer default is true
   *
   *
   *   depth - indicates whether the drawing buffer has a
   *   depth buffer of at least 16 bits - default is true
   *
   *
   *   stencil - indicates whether the drawing buffer has
   *   a stencil buffer of at least 8 bits
   *
   *
   *   antialias - indicates whether or not to perform
   *   anti-aliasing default is false
   *
   *
   *   premultipliedAlpha - indicates that the page
   *   compositor will assume the drawing buffer contains
   *   colors with pre-multiplied alpha default is false
   *
   *
   *   preserveDrawingBuffer - if true the buffers will
   *   not be cleared and and will preserve their values
   *   until cleared or overwritten by author (note that
   *   p5 clears automatically on draw loop) default is
   *   true
   *
   *
   *   perPixelLighting - if true, per-pixel lighting
   *   will be used in the lighting shader. default is
   *   false
   *   @param obj object with key-value pairs
   */
  function setAttributes(
    obj: object
  ): void;

  /**
   *   Searches the page for an element with the given
   *   ID, class, or tag name (using the '#' or '.'
   *   prefixes to specify an ID or class respectively,
   *   and none for a tag) and returns it as a
   *   p5.Element. If a class or tag name is given with
   *   more than 1 element, only the first element will
   *   be returned. The DOM node itself can be accessed
   *   with .elt. Returns null if none found. You can
   *   also specify a container to search within.
   *   @param name id, class, or tag name of element to
   *   search for
   *   @param [container] id, p5.Element, or HTML element
   *   to search within
   *   @return p5.Element containing node found
   */
  function select(
    name: string,
    container?:
      | string
      | p5.Element
      | HTMLElement
  ): p5.Element | null;

  /**
   *   Searches the page for elements with the given
   *   class or tag name (using the '.' prefix to specify
   *   a class and no prefix for a tag) and returns them
   *   as p5.Elements in an array. The DOM node itself
   *   can be accessed with .elt. Returns an empty array
   *   if none found. You can also specify a container to
   *   search within.
   *   @param name class or tag name of elements to
   *   search for
   *   @param [container] id, p5.Element, or HTML element
   *   to search within
   *   @return Array of p5.Elements containing nodes
   *   found
   */
  function selectAll(
    name: string,
    container?: string
  ): p5.Element[];

  /**
   *   Removes all elements created by p5, except any
   *   canvas / graphics elements created by createCanvas
   *   or createGraphics. Event handlers are removed, and
   *   element is removed from the DOM.
   */
  function removeElements(): void;

  /**
   *   Creates a <div></div> element in the DOM with
   *   given inner HTML. Appends to the container node if
   *   one is specified, otherwise appends to body.
   *   @param [html] inner HTML for element created
   *   @return pointer to p5.Element holding created node
   */
  function createDiv(
    html?: string
  ): p5.Element;

  /**
   *   Creates a <p></p> element in the DOM with given
   *   inner HTML. Used for paragraph length text.
   *   Appends to the container node if one is specified,
   *   otherwise appends to body.
   *   @param [html] inner HTML for element created
   *   @return pointer to p5.Element holding created node
   */
  function createP(
    html?: string
  ): p5.Element;

  /**
   *   Creates a <span></span> element in the DOM with
   *   given inner HTML. Appends to the container node if
   *   one is specified, otherwise appends to body.
   *   @param [html] inner HTML for element created
   *   @return pointer to p5.Element holding created node
   */
  function createSpan(
    html?: string
  ): p5.Element;

  /**
   *   Creates an <img> element in the DOM with given src
   *   and alternate text. Appends to the container node
   *   if one is specified, otherwise appends to body.
   *   @param src src path or url for image
   *   @param [alt] alternate text to be used if image
   *   does not load
   *   @param [successCallback] callback to be called
   *   once image data is loaded
   *   @return pointer to p5.Element holding created node
   */
  function createImg(
    src: string,
    alt?: string,
    successCallback?: (
      ...args: any[]
    ) => any
  ): p5.Element;

  /**
   *   Creates an <img> element in the DOM with given src
   *   and alternate text. Appends to the container node
   *   if one is specified, otherwise appends to body.
   *   @param src src path or url for image
   *   @param successCallback callback to be called once
   *   image data is loaded
   */
  function createImg(
    src: string,
    successCallback: (
      ...args: any[]
    ) => any
  ):
    | object
    | p5.Element;

  /**
   *   Creates an <a></a> element in the DOM for
   *   including a hyperlink. Appends to the container
   *   node if one is specified, otherwise appends to
   *   body.
   *   @param href url of page to link to
   *   @param html inner html of link element to display
   *   @param [target] target where new link should open,
   *   could be _blank, _self, _parent, _top.
   *   @return pointer to p5.Element holding created node
   */
  function createA(
    href: string,
    html: string,
    target?: string
  ): p5.Element;

  /**
   *   Creates a slider <input></input> element in the
   *   DOM. Use .size() to set the display length of the
   *   slider. Appends to the container node if one is
   *   specified, otherwise appends to body.
   *   @param min minimum value of the slider
   *   @param max maximum value of the slider
   *   @param [value] default value of the slider
   *   @param [step] step size for each tick of the
   *   slider (if step is set to 0, the slider will move
   *   continuously from the minimum to the maximum
   *   value)
   *   @return pointer to p5.Element holding created node
   */
  function createSlider(
    min: number,
    max: number,
    value?: number,
    step?: number
  ): p5.Element;

  /**
   *   Creates a <button></button> element in the DOM.
   *   Use .size() to set the display size of the button.
   *   Use .mousePressed() to specify behavior on press.
   *   Appends to the container node if one is specified,
   *   otherwise appends to body.
   *   @param label label displayed on the button
   *   @param [value] value of the button
   *   @return pointer to p5.Element holding created node
   */
  function createButton(
    label: string,
    value?: string
  ): p5.Element;

  /**
   *   Creates a checkbox <input></input> element in the
   *   DOM. Calling .checked() on a checkbox returns if
   *   it is checked or not
   *   @param [label] label displayed after checkbox
   *   @param [value] value of the checkbox; checked is
   *   true, unchecked is false
   *   @return pointer to p5.Element holding created node
   */
  function createCheckbox(
    label?: string,
    value?: boolean
  ): p5.Element;

  /**
   *   Creates a dropdown menu <select></select> element
   *   in the DOM. It also helps to assign select-box
   *   methods to p5.Element when selecting existing
   *   select box
   *   @param [multiple] true if dropdown should support
   *   multiple selections
   */
  function createSelect(
    multiple?: boolean
  ): p5.Element;

  /**
   *   Creates a dropdown menu <select></select> element
   *   in the DOM. It also helps to assign select-box
   *   methods to p5.Element when selecting existing
   *   select box
   *   @param existing DOM select element
   */
  function createSelect(
    existing: object
  ): p5.Element;

  /**
   *   Creates a radio button <input></input> element in
   *   the DOM. The .option() method can be used to set
   *   options for the radio after it is created. The
   *   .value() method will return the currently selected
   *   option.
   *   @param [divId] the id and name of the created div
   *   and input field respectively
   *   @return pointer to p5.Element holding created node
   */
  function createRadio(
    divId?: string
  ): p5.Element;

  /**
   *   Creates a colorPicker element in the DOM for color
   *   input. The .value() method will return a hex
   *   string (#rrggbb) of the color. The .color() method
   *   will return a p5.Color object with the current
   *   chosen color.
   *   @param [value] default color of element
   *   @return pointer to p5.Element holding created node
   */
  function createColorPicker(
    value?:
      | string
      | p5.Color
  ): p5.Element;

  /**
   *   Creates an <input></input> element in the DOM for
   *   text input. Use .size() to set the display length
   *   of the box. Appends to the container node if one
   *   is specified, otherwise appends to body.
   *   @param [value] default value of the input box
   *   @param [type] type of text, ie text, password etc.
   *   Defaults to text
   *   @return pointer to p5.Element holding created node
   */
  function createInput(
    value?: string,
    type?: string
  ): p5.Element;

  /**
   *   Creates an <input></input> element in the DOM of
   *   type 'file'. This allows users to select local
   *   files for use in a sketch.
   *   @param [callback] callback function for when a
   *   file loaded
   *   @param [multiple] optional to allow multiple files
   *   selected
   *   @return pointer to p5.Element holding created DOM
   *   element
   */
  function createFileInput(
    callback?: (
      ...args: any[]
    ) => any,
    multiple?: string
  ): p5.Element;

  /**
   *   Creates an HTML5 <video> element in the DOM for
   *   simple playback of audio/video. Shown by default,
   *   can be hidden with .hide() and drawn into canvas
   *   using video(). Appends to the container node if
   *   one is specified, otherwise appends to body. The
   *   first parameter can be either a single string path
   *   to a video file, or an array of string paths to
   *   different formats of the same video. This is
   *   useful for ensuring that your video can play
   *   across different browsers, as each supports
   *   different formats. See this page for further
   *   information about supported formats.
   *   @param src path to a video file, or array of paths
   *   for supporting different browsers
   *   @param [callback] callback function to be called
   *   upon 'canplaythrough' event fire, that is, when
   *   the browser can play the media, and estimates that
   *   enough data has been loaded to play the media up
   *   to its end without having to stop for further
   *   buffering of content
   *   @return pointer to video p5.Element
   */
  function createVideo(
    src:
      | string
      | string[],
    callback?: (
      ...args: any[]
    ) => any
  ): p5.MediaElement;

  /**
   *   Creates a hidden HTML5 <audio> element in the DOM
   *   for simple audio playback. Appends to the
   *   container node if one is specified, otherwise
   *   appends to body. The first parameter can be either
   *   a single string path to a audio file, or an array
   *   of string paths to different formats of the same
   *   audio. This is useful for ensuring that your audio
   *   can play across different browsers, as each
   *   supports different formats. See this page for
   *   further information about supported formats.
   *   @param [src] path to an audio file, or array of
   *   paths for supporting different browsers
   *   @param [callback] callback function to be called
   *   upon 'canplaythrough' event fire, that is, when
   *   the browser can play the media, and estimates that
   *   enough data has been loaded to play the media up
   *   to its end without having to stop for further
   *   buffering of content
   *   @return pointer to audio p5.Element
   */
  function createAudio(
    src?:
      | string
      | string[],
    callback?: (
      ...args: any[]
    ) => any
  ): p5.MediaElement;

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
  function createCapture(
    type:
      | string
      | p5.TYPE
      | object,
    callback?: (
      ...args: any[]
    ) => any
  ): p5.Element;

  /**
   *   Creates element with given tag in the DOM with
   *   given content. Appends to the container node if
   *   one is specified, otherwise appends to body.
   *   @param tag tag for the new element
   *   @param [content] html content to be inserted into
   *   the element
   *   @return pointer to p5.Element holding created node
   */
  function createElement(
    tag: string,
    content?: string
  ): p5.Element;
  const VIDEO: p5.VIDEO;
  const AUDIO: p5.AUDIO;

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
  function freqToMidi(
    frequency: number
  ): number;

  /**
   *   Returns the frequency value of a MIDI note value.
   *   General MIDI treats notes as integers where middle
   *   C is 60, C# is 61, D is 62 etc. Useful for
   *   generating musical frequencies with oscillators.
   *   @param midiNote The number of a MIDI note
   *   @return Frequency value of the given MIDI note
   */
  function midiToFreq(
    midiNote: number
  ): number;

  /**
   *   List the SoundFile formats that you will include.
   *   LoadSound will search your directory for these
   *   extensions, and will pick a format that is
   *   compatable with the client's web browser. Here is
   *   a free online file converter.
   *   @param [formats] i.e. 'mp3', 'wav', 'ogg'
   */
  function soundFormats(
    formats?: string
  ): void;

  /**
   *   Save a p5.SoundFile as a .wav file. The browser
   *   will prompt the user to download the file to their
   *   device. For uploading audio to a server, use
   *   p5.SoundFile.saveBlob.
   *   @param soundFile p5.SoundFile that you wish to
   *   save
   *   @param fileName name of the resulting .wav file.
   */
  function saveSound(
    soundFile: p5.SoundFile,
    fileName: string
  ): void;
}
