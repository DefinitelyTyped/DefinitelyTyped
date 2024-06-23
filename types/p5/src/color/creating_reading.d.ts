// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    interface p5InstanceExtensions {
        /**
         *   Extracts the alpha (transparency) value from a
         *   p5.Color object, array of color components, or CSS
         *   color string.
         *   @param color p5.Color object, array of color
         *   components, or CSS color string.
         *   @return the alpha value.
         */
        alpha(color: Color | number[] | string): number;

        /**
         *   Extracts the blue value from a p5.Color object,
         *   array of color components, or CSS color string.
         *   @param color p5.Color object, array of color
         *   components, or CSS color string.
         *   @return the blue value.
         */
        blue(color: Color | number[] | string): number;

        /**
         *   Extracts the HSB brightness value from a p5.Color
         *   object, array of color components, or CSS color
         *   string.
         *   @param color p5.Color object, array of color
         *   components, or CSS color string.
         *   @return the brightness value.
         */
        brightness(color: Color | number[] | string): number;

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
        color(gray: number, alpha?: number): Color;

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
        color(v1: number, v2: number, v3: number, alpha?: number): Color;

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
        color(value: string): Color;

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
        color(values: number[]): Color;

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
        color(color: Color): Color;

        /**
         *   Extracts the green value from a p5.Color object,
         *   array of color components, or CSS color string.
         *   @param color p5.Color object, array of color
         *   components, or CSS color string.
         *   @return the green value.
         */
        green(color: Color | number[] | string): number;

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
        hue(color: Color | number[] | string): number;

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
        lerpColor(c1: Color, c2: Color, amt: number): Color;

        /**
         *   Extracts the HSL lightness value from a p5.Color
         *   object, array of color components, or CSS color
         *   string.
         *   @param color p5.Color object, array of color
         *   components, or CSS color string.
         *   @return the lightness
         */
        lightness(color: Color | number[] | string): number;

        /**
         *   Extracts the red value from a p5.Color object,
         *   array of color components, or CSS color string.
         *   @param color p5.Color object, array of color
         *   components, or CSS color string.
         *   @return the red value.
         */
        red(color: Color | number[] | string): number;

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
        saturation(color: Color | number[] | string): number;
    }
}
