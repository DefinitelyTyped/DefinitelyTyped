// Type definitions for Chroma.js v1.1.1
// Project: https://github.com/gka/chroma.js
// Definitions by: Sebastian Brückner <https://github.com/invliD>, Marcin Pacholec <https://github.com/mpacholec>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
         * Creates a color from a number representation [0; 16777215]
         * 
         * @param color The number to convert to a color.
         * @return the color object.
         */
        (number: number): Color;

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

        (a: number, b: number, c: number, d: number, colorSpace?: string): Color;

        /**
          * Create a color in the specified color space using values.
          *
          * @param values An array of values (e.g. [r, g, b, a?]).
          * @param colorSpace The color space to use (one of "rgb", "hsl", "hsv", "lab", "lch", "gl"). Defaults to "rgb".
          * @return the color object.
          */
        (values: number[], colorSpace?: string): Color;

        /**
         * Create a color from a hex or string representation (as supported in CSS).
         *
         * This is an alias of chroma.css().
         *
         * @param color The string to convert to a color.
         * @return the color object.
         */
        hex(color: string): Color;

        hsl(h: number, s: number, l: number): Color;

        hsv(h: number, s: number, v: number): Color;

        lab(lightness: number, a: number, b: number, alpha?: number): Color;

        lch(l: number, c: number, h: number): Color;

        rgb(r: number, g: number, b: number): Color;

        /** 
         * GL is a variant of RGB(A), with the only difference that the components are normalized to the range of 0..1.
        */
        gl(red: number, green: number, blue: number, alpha?: number): Color;

        /** 
         * light 2000K, bright sunlight 6000K. Based on Neil Bartlett's implementation. 
         * https://github.com/neilbartlett/color-temperature
        */
        temperature(t: number): Color;

        mix(col1: string | Color, col2: string | Color, f?: number, colorSpace?: string): Color;

        interpolate(col1: string | Color, col2: string | Color, f?: number, colorSpace?: string): Color;

        /**
         * Blends two colors using RGB channel-wise blend functions. Valid blend modes are multiply, darken, lighten, screen, overlay, burn, and dogde.
         */
        blend(col1: string, col2: string, blendMode: string): Color;

        /**
         * Returns a random color.
         */
        random(): Color;

        /**
         * Computes the WCAG contrast ratio between two colors. 
         * A minimum contrast of 4.5:1 is recommended to ensure that text is still readable against a background color.
         *
         * @param color1 The first color.
         * @param color2 The second color.
         * @return the contrast ratio.
         */
        contrast(col1: string | Color, col2: string | Color): number;

        bezier(colors: string[]): Scale;

        /**
         * chroma.brewer is an map of ColorBrewer scales that are included in chroma.js for convenience. 
         * chroma.scale uses the colors to construct.
         */
        brewer: {
            OrRd: string[];
            PuBu: string[];
            BuPu: string[];
            Oranges: string[];
            BuGn: string[];
            YlOrBr: string[];
            YlGn: string[];
            Reds: string[];
            RdPu: string[];
            Greens: string[];
            YlGnBu: string[];
            Purples: string[];
            GnBu: string[];
            Greys: string[];
            YlOrRd: string[];
            PuRd: string[];
            Blues: string[];
            PuBuGn: string[];
            Spectral: string[];
            RdYlGn: string[];
            RdBu: string[];
            PiYG: string[];
            PRGn: string[];
            RdYlBu: string[];
            BrBG: string[];
            RdGy: string[];
            PuOr: string[];
            Set2: string[];
            Accent: string[];
            Set1: string[];
            Set3: string[];
            Dark2: string[];
            Paired: string[];
            Pastel2: string[];
            Pastel1: string[];
        };

        /**
         * Helper function that computes class breaks for you, based on actual data. 
         * Supports three different modes: equidistant breaks, quantiles breaks and breaks based on k-means clusting.
         */
        limits(data: number[], mode: string, c: number): number[];

        scale(name: string): Scale;

        scale(colors?: string[]): Scale;

        cubehelix(): Cubehelix;

        cmyk(c: number, m: number, y: number, k: number): Color;
        
        /**
         * Create a color from a hex or string representation (as supported in CSS).
         *
         * This is an alias of chroma.hex().
         *
         * @param color The string to convert to a color.
         * @return the color object.
         */
        css(col: string, mode?: string): string;
    }

    export interface Color {
        alpha(a?: number): Color;

        darken(f?: number): Color;

        brighten(f?: number): Color;

        saturate(s?: number): Color;

        desaturate(s?: number): Color;

        set(modechan: string, v: number | string): Color;

        get(modechan: string): number;

        luminance(): number;

        luminance(l: number, mode?: string): Color;

        hex(): string;

        name(): string;

        /**
         * Create a color from a hex or string representation (as supported in CSS).
         *
         * This is an alias of chroma.hex().
         *
         * @param color The string to convert to a color.
         * @return the color object.
         */
        css(mode?: string): string;

        rgb(): number[];

        rgba(): number[];

        hsl(): number[];

        hsv(): number[];

        hsi(): number[];

        lab(): number[];

        lch(): number[];

        hcl(): number[];

        temperature(): number;

        gl(): number[];
    }

    export interface Scale {
        (c: string[]): Scale;

        (value: number): any;

        domain(d?: number[], n?: number, mode?: string): Scale;

        mode(mode: string): Scale;

        correctLightness(enable?: boolean): Scale;

        bezier(colors: string[]): Scale;

        padding(p: number | number[]): Scale;

        colors(c?: number): string[];

        classes(c: number | number[]): (t: number) => Color;

        range(arg: string[]): Scale;

        scale(): Scale;

        out(mode: string): Scale;
    }

    export interface Cubehelix extends Scale {
        start(s: number): Cubehelix;

        rotations(r: number): Cubehelix;

        gamma(g: number): Cubehelix;

        lightness(l: number[]): Cubehelix;
    }
}

declare var chroma: Chroma.ChromaStatic;

declare module "chroma-js" {
    export = chroma;
}
