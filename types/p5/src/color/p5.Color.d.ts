// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Color {
        /**
         *   Each color stores the color mode and level maxes
         *   that were applied at the time of its construction.
         *   These are used to interpret the input arguments
         *   (at construction and later for that instance of
         *   color) and to format the output e.g. when
         *   saturation() is requested. Internally, we store an
         *   array representing the ideal RGBA values in
         *   floating point form, normalized from 0 to 1. From
         *   this we calculate the closest screen color (RGBA
         *   levels from 0 to 255) and expose this to the
         *   renderer.
         *
         *   We also cache normalized, floating-point
         *   components of the color in various representations
         *   as they are calculated. This is done to prevent
         *   repeating a conversion that has already been
         *   performed.
         *
         */
        constructor();

        /**
         *   This method returns the color formatted as a
         *   string. This can be useful for debugging, or for
         *   using p5.js with other libraries.
         *   @param [format] How the color string will be
         *   formatted. Leaving this empty formats the string
         *   as rgba(r, g, b, a). '#rgb' '#rgba' '#rrggbb' and
         *   '#rrggbbaa' format as hexadecimal color codes.
         *   'rgb' 'hsb' and 'hsl' return the color formatted
         *   in the specified color mode. 'rgba' 'hsba' and
         *   'hsla' are the same as above but with alpha
         *   channels. 'rgb%' 'hsb%' 'hsl%' 'rgba%' 'hsba%' and
         *   'hsla%' format as percentages.
         *   @return the formatted string
         */
        toString(format?: string): string;

        /**
         *   The setRed method sets the red component of a
         *   color. The range depends on your color mode, in
         *   the default RGB mode it's between 0 and 255.
         *   @param red the new red value
         */
        setRed(red: number): void;

        /**
         *   The setGreen method sets the green component of a
         *   color. The range depends on your color mode, in
         *   the default RGB mode it's between 0 and 255.
         *   @param green the new green value
         */
        setGreen(green: number): void;

        /**
         *   The setBlue method sets the blue component of a
         *   color. The range depends on your color mode, in
         *   the default RGB mode it's between 0 and 255.
         *   @param blue the new blue value
         */
        setBlue(blue: number): void;

        /**
         *   The setAlpha method sets the transparency (alpha)
         *   value of a color. The range depends on your color
         *   mode, in the default RGB mode it's between 0 and
         *   255.
         *   @param alpha the new alpha value
         */
        setAlpha(alpha: number): void;
    }
}
