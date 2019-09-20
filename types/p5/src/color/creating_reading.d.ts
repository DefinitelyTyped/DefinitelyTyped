// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Extracts the alpha value from a color or pixel
         *   array.
         *   @param color p5.Color object, color components, or
         *   CSS color
         *   @return the alpha value
         */
        alpha(color: Color | number[] | string): number;

        /**
         *   Extracts the blue value from a color or pixel
         *   array.
         *   @param color p5.Color object, color components, or
         *   CSS color
         *   @return the blue value
         */
        blue(color: Color | number[] | string): number;

        /**
         *   Extracts the HSB brightness value from a color or
         *   pixel array.
         *   @param color p5.Color object, color components, or
         *   CSS color
         *   @return the brightness value
         */
        brightness(color: Color | number[] | string): number;

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
        color(gray: number, alpha?: number): Color;

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
        color(v1: number, v2: number, v3: number, alpha?: number): Color;

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
        color(value: string): Color;

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
        color(values: number[]): Color;

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
        color(color: Color): Color;

        /**
         *   Extracts the green value from a color or pixel
         *   array.
         *   @param color p5.Color object, color components, or
         *   CSS color
         *   @return the green value
         */
        green(color: Color | number[] | string): number;

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
        hue(color: Color | number[] | string): number;

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
        lerpColor(c1: Color, c2: Color, amt: number): Color;

        /**
         *   Extracts the HSL lightness value from a color or
         *   pixel array.
         *   @param color p5.Color object, color components, or
         *   CSS color
         *   @return the lightness
         */
        lightness(color: Color | number[] | string): number;

        /**
         *   Extracts the red value from a color or pixel
         *   array.
         *   @param color p5.Color object, color components, or
         *   CSS color
         *   @return the red value
         */
        red(color: Color | number[] | string): number;

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
        saturation(color: Color | number[] | string): number;
    }
}
