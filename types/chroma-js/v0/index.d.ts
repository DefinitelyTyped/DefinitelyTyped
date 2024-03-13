/**
 * Chroma.js is a tiny library for all kinds of color conversions and color scales.
 */
declare namespace Chroma {
    export interface ChromaStatic {
        /**
         * Creates a color from a string representation (as supported in CSS).
         *
         * @param color The string to convert to a color.
         * @return the color object.
         */
        (color: string): Color;

        /**
         * Create a color in the specified color space using a, b and c as values.
         *
         * @param a
         * @param b
         * @param c
         * @param colorSpace The color space to use (one of "rgb", "hsl", "hsv", "lab", "lch", "gl"). Defaults to "rgb".
         * @return the color object.
         */
        (a: number, b: number, c: number, colorSpace?: string): Color;

        /**
         * Create a color in the specified color space using values.
         *
         * @param values An array of values (e.g. [r, g, b, a?]).
         * @param colorSpace The color space to use (one of "rgb", "hsl", "hsv", "lab", "lch", "gl"). Defaults to "rgb".
         * @return the color object.
         */
        (values: number[], colorSpace?: string): Color;

        /**
         * Create a color in the specified color space using a, b and c as values.
         *
         * @param a
         * @param b
         * @param c
         * @param colorSpace The color space to use (one of "rgb", "hsl", "hsv", "lab", "lch", "gl"). Defaults to "rgb".
         * @return the color object.
         */
        color(a: number, b: number, c: number, colorSpace?: string): Color;

        /**
         * Calculate the contrast ratio of two colors.
         *
         * @param color1 The first color.
         * @param color2 The second color.
         * @return the contrast ratio.
         */
        contrast(color1: Color, color2: Color): number;
        /**
         * Calculate the contrast ratio of two colors.
         *
         * @param color1 The first color.
         * @param color2 The second color.
         * @return the contrast ratio.
         */
        contrast(color1: Color, color2: string): number;
        /**
         * Calculate the contrast ratio of two colors.
         *
         * @param color1 The first color.
         * @param color2 The second color.
         * @return the contrast ratio.
         */
        contrast(color1: string, color2: Color): number;
        /**
         * Calculate the contrast ratio of two colors.
         *
         * @param color1 The first color.
         * @param color2 The second color.
         * @return the contrast ratio.
         */
        contrast(color1: string, color2: string): number;

        /**
         * Create a color from a hex or string representation (as supported in CSS).
         *
         * This is an alias of chroma.hex().
         *
         * @param color The string to convert to a color.
         * @return the color object.
         */
        css(color: string): Color;

        /**
         * Create a color from a hex or string representation (as supported in CSS).
         *
         * This is an alias of chroma.css().
         *
         * @param color The string to convert to a color.
         * @return the color object.
         */
        hex(color: string): Color;

        rgb(red: number, green: number, blue: number, alpha?: number): Color;
        hsl(hue: number, saturation: number, lightness: number, alpha?: number): Color;
        hsv(hue: number, saturation: number, value: number, alpha?: number): Color;
        lab(lightness: number, a: number, b: number, alpha?: number): Color;
        lch(lightness: number, chroma: number, hue: number, alpha?: number): Color;
        gl(red: number, green: number, blue: number, alpha?: number): Color;

        interpolate: InterpolateFunction;
        mix: InterpolateFunction;

        luminance(color: Color): number;
        luminance(color: string): number;

        /**
         * Creates a color scale using a pre-defined color scale.
         *
         * @param name The name of the color scale.
         * @return the resulting color scale.
         */
        scale(name: string): Scale;

        /**
         * Creates a color scale function from the given set of colors.
         *
         * @param colors An Array of at least two color names or hex values.
         * @return the resulting color scale.
         */
        scale(colors?: string[]): Scale;

        scales: PredefinedScales;
    }

    interface InterpolateFunction {
        (color1: Color, color2: Color, f: number, mode?: string): Color;
        (color1: Color, color2: string, f: number, mode?: string): Color;
        (color1: string, color2: Color, f: number, mode?: string): Color;
        (color1: string, color2: string, f: number, mode?: string): Color;

        bezier(colors: any[]): (t: number) => Color;
    }

    interface PredefinedScales {
        [key: string]: Scale;

        cool: Scale;
        hot: Scale;
    }

    export interface Color {
        /**
         * Creates a color from a string representation (as supported in CSS).
         *
         * @param color The string to convert to a color.
         */
        new(color: string): Color;

        /**
         * Create a color in the specified color space using a, b and c as values.
         *
         * @param a
         * @param b
         * @param c
         * @param colorSpace The color space to use (one of "rgb", "hsl", "hsv", "lab", "lch", "gl"). Defaults to "rgb".
         */
        new(a: number, b: number, c: number, colorSpace?: string): Color;

        /**
         * Create a color in the specified color space using a, b and c as color values and alpha as the alpha value.
         *
         * @param a
         * @param b
         * @param c
         * @param alpha The alpha value of the color.
         * @param colorSpace The color space to use (one of "rgb", "hsl", "hsv", "lab", "lch", "gl"). Defaults to "rgb".
         */
        new(a: number, b: number, c: number, alpha: number, colorSpace?: string): Color;

        /**
         * Create a color in the specified color space using values.
         *
         * @param values An array of values (e.g. [r, g, b, a?]).
         * @param colorSpace The color space to use (one of "rgb", "hsl", "hsv", "lab", "lch", "gl"). Defaults to "rgb".
         */
        new(values: number[], colorSpace: string): Color;

        /**
         * Convert this color to CSS hex representation.
         *
         * @return this color's hex representation.
         */
        hex(): string;

        /**
         * @return the relative luminance of the color, which is a value between 0 (black) and 1 (white).
         */
        luminance(): number;

        /**
         * @return the X11 name of this color or its hex value if it does not have a name.
         */
        name(): string;

        /**
         * @return the alpha value of the color.
         */
        alpha(): number;

        /**
         * Set the alpha value.
         *
         * @param alpha The alpha value.
         * @return this
         */
        alpha(alpha: number): Color;

        css(mode?: string): string;

        interpolate(color: Color, f: number, mode?: string): Color;
        interpolate(color: string, f: number, mode?: string): Color;

        premultiply(): Color;

        rgb(): number[];
        rgba(): number[];
        hsl(): number[];
        hsv(): number[];
        lab(): number[];
        lch(): number[];
        hsi(): number[];
        gl(): number[];

        darken(amount?: number): Color;
        darker(amount: number): Color;
        brighten(amount?: number): Color;
        brighter(amount: number): Color;
        saturate(amount?: number): Color;
        desaturate(amount?: number): Color;

        toString(): string;
    }

    export interface Scale {
        /**
         * Interpolate a color using the currently set range and domain.
         *
         * @param value The value to use for interpolation.
         * @return the interpolated hex color OR a Color object (depending on the mode set on this Scale).
         */
        (value: number): any;

        /**
         * Retreive all possible colors generated by this scale if it has distinct classes.
         *
         * @param mode The output mode to use. Must be one of Color's getters. Defaults to "hex".
         * @return an array of colors in the type specified by mode.
         */
        colors(mode?: string): any[];

        correctLightness(): boolean;

        /**
         * Enable or disable automatic lightness correction of this scale.
         *
         * @param Whether to enable or disable automatic lightness correction.
         * @return this
         */
        correctLightness(enable: boolean): Scale;

        /**
         * Get the current domain.
         *
         * @return The current domain.
         */
        domain(): number[];

        /**
         * Set the domain.
         *
         * @param domain An Array of at least two numbers (min and max).
         * @param classes The number of fixed classes to create between min and max.
         * @param mode The scale to use. Examples: log, quantiles, k-means.
         * @return this
         */
        domain(domain: number[], classes?: number, mode?: string): Scale;

        /**
         * Specify in which color space the colors should be interpolated. Defaults to "rgb".
         * You can use any of the following spaces: rgb, hsv, hsl, lab, lch
         *
         * @param colorSpace The color space to use for interpolation.
         * @return this
         */
        mode(colorSpace: string): Scale;

        /**
         * Set the output mode of this Scale.
         *
         * @param mode The output mode to use. Must be one of Color's getters.
         * @return this
         */
        out(mode: string): Scale;

        /**
         * Set the color range after initialization.
         *
         * @param colors An Array of at least two color names or hex values.
         * @return this
         */
        range(colors: string[]): Scale;
    }
}

declare var chroma: Chroma.ChromaStatic;
