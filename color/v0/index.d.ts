// Type definitions for color v0.12.0
// Project: https://github.com/qix-/color
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Color {

    interface RGBColor {
        r: number
        g: number
        b: number
        a?: number
    }

    interface FullRGBColor {
        red: number
        green: number
        blue: number
        alpha?: number
    }

    interface HSLColor {
        h: number
        s: number
        l: number
        a?: number
    }

    interface FullHSLColor {
        hue: number
        saturation: number
        lightness: number
        alpha?: number
    }

    interface HSVColor {
        h: number
        s: number
        v: number
    }

    interface FullHSVColor {
        hue: number
        saturation: number
        value: number
    }

    interface HBWColor {
        h: number
        b: number
        w: number
    }

    interface FullHBWColor {
        hue: number
        whiteness: number
        blackness: number
    }

    interface CMYKColor {
        c: number
        m: number
        y: number
        k: number
    }

    interface FullCMYKColor {
        cyan: number
        magenta: number
        yellow: number
        black: number
    }

    type ColorParam = string | RGBColor | FullRGBColor | HSLColor | FullHSLColor | HSVColor
        | FullHSVColor | HBWColor | FullHBWColor | CMYKColor | FullCMYKColor

    interface Color {
        (color: ColorParam | Color) : Color
        rgb(values: Array<number>): Color
        rgb(r: number, g: number, b: number, a?: number): Color
        rgb(values: RGBColor): Color
        rgb(values: FullRGBColor): Color
        rgb(): RGBColor
        rgbArray(): Array<number>
        rgbString(): string
        rgbaString(): string
        rgbNumber(): number
        hsl(values: Array<number>): Color
        hsl(): HSLColor
        hslArray(): Array<number>
        hslString(): string
        hslaString(): string
        hsv(values: Array<number>): Color
        hsv(): HSVColor
        hsvArray(): Array<number>
        hsvString(): string
        hbw(values: Array<number>): Color
        hbw(): HBWColor
        hbwArray(): Array<number>
        hbwString(): string
        cmyk(values: Array<number>): Color
        cmyk(): CMYKColor
        cmykArray(): Array<number>
        cmykString(): string
        hexString(): string
        percentString(): string
        keyword(): string | void
        alpha(alpha: number): Color
        alpha(): number
        red(red: number): Color
        red(): number
        green(green: number): Color
        green(): number
        blue(blue: number): Color
        blue(): number
        hue(hue: number): Color
        hue(): number
        saturation(saturation: number): Color
        saturation(): number
        lightness(lightness: number): Color
        lightness(): number
        saturationv(saturationv: number): Color
        saturationv(): number
        value(value: number): Color
        value(): number
        whiteness(whiteness: number): Color
        whiteness(): number
        blackness(blackness: number): Color
        blackness(): number
        cyan(cyan: number): Color
        cyan(): number
        magenta(magenta: number): Color
        magenta(): number
        yellow(yellow: number): Color
        yellow(): number
        black(black: number): Color
        black(): number
        luminosity(): number
        contrast(color: Color): number
        dark(): boolean
        light(): boolean
        negate(): Color
        lighten(value: number): Color
        darken(value: number): Color
        saturate(value: number): Color
        desaturate(value: number): Color
        greyscale(): Color
        whiten(value: number): Color
        blacken(value: number): Color
        clearer(value: number): Color
        opaquer(value: number): Color
        rotate(value: number): Color
        mix(color: Color, value?: number): Color
        level(color: Color): string
        clone(): Color
    }
}

declare const Color: Color.Color;
export = Color;
export as namespace Color;
