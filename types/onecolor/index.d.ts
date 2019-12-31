// Type definitions for onecolor 3.1
// Project: https://github.com/One-com/one-color
// Definitions by: Azliya <https://github.com/Azliya>
// Definitions: https://github.com/DefinitelyTyped/onecolor

export = onecolor;
declare function onecolor(clr: onecolor.ColorDefType): onecolor.Color;
declare namespace onecolor {
    type ColorDefType = string | [number, number, number, number] | [string, number, number, number, number];
    interface Color {
        // Serialization methods:
        hex(): string; // 6-digit hex string: '#bda65b'
        css(): string; // CSS rgb syntax: 'rgb(10,128,220)'
        cssa(): string; // CSS rgba syntax: 'rgba(10,128,220,0.8)'
        toString(): string; // For debugging: '[one.color.RGB: Red=0.3 Green=0.8 Blue=0 Alpha=1]'
        toJSON(): string; // ["RGB"|"HSV"|"HSL", <number>, <number>, <number>, <number>]

        red(val?: number, trig?: true): Color;
        green(val?: number, trig?: true): Color;
        blue(val?: number, trig?: true): Color;
        hue(val?: number, trig?: true): Color;
        saturation(val?: number, trig?: true): Color;
        value(val?: number, trig?: true): Color;
        lightness(val?: number, trig?: true): Color;
        alpha(val?: number, trig?: true): Color;
        cyan(val?: number, trig?: true): Color;
        magenta(val?: number, trig?: true): Color;
        yellow(val?: number, trig?: true): Color;
        black(val?: number, trig?: true): Color;

        // Comparison with other color objects, returns true or false (epsilon defaults to 1e-9):
        equals(otherColor: Color, epsilon?: number): boolean;
    }
}
