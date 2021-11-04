// This file was auto-generated. Please do not edit it.

import * as p5 from '../../index';

declare module '../../index' {
    class Color {
        /**
         *   This function returns the color formatted as a
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
        setRed(red: number): void;
        setGreen(green: number): void;
        setBlue(blue: number): void;
        setAlpha(alpha: number): void;
    }
}
