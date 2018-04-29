import * as cssKeywords from 'color-name';


export namespace EscapeCode {
    export interface CodePair {
        open: string;
        close: string;
    }

    interface Modifier {
        reset: CodePair;
        bold: CodePair;
        dim: CodePair;
        /**
         * Not widely supported
         */
        italic: CodePair;
        underline: CodePair;
        inverse: CodePair;
        hidden: CodePair;
        /**
         * Not widely supported
         */
        strikethrough: CodePair;
    }
    interface Color {
        black: CodePair;
        red: CodePair;
        green: CodePair;
        yellow: CodePair;
        blue: CodePair;
        magenta: CodePair;
        cyan: CodePair;
        white: CodePair;
        /**
         * bright black
         */
        gray: CodePair;
        grey: CodePair;

        redBright: CodePair;
        greenBright: CodePair;
        yellowBright: CodePair;
        blueBright: CodePair;
        magentaBright: CodePair;
        cyanBright: CodePair;
        whiteBright: CodePair;
    }
    interface BackgroundColor {
        bgBlack: CodePair;
        bgRed: CodePair;
        bgGreen: CodePair;
        bgYellow: CodePair;
        bgBlue: CodePair;
        bgMagenta: CodePair;
        bgCyan: CodePair;
        bgWhite: CodePair;

        bgBlackBright: CodePair;
        bgRedBright: CodePair;
        bgGreenBright: CodePair;
        bgYellowBright: CodePair;
        bgBlueBright: CodePair;
        bgMagentaBright: CodePair;
        bgCyanBright: CodePair;
        bgWhiteBright: CodePair;
    }

    interface EscapeCodeFromColorFormats {
        ansi: (ansi: string) => string
        rgb: (r: number, g: number, b: number) => string
        hsl: (h: number, s: number, l: number) => string
        hsv: (h: number, s: number, v: number) => string
        hwb: (h: number, w: number, b: number) => string
        cmyk: (c: number, m: number, y: number, k: number) => string
        xyz: (x: number, y: number, z: number) => string
        lab: (l: number, a: number, b: number) => string
        lch: (l: number, c: number, h: number) => string
        hex: (hex: string) => string
        keyword: (keyword: keyof typeof cssKeywords) => string
        ansi256: (ansi256: string) => string
        hcg: (h: number, c: number, g: number) => string
        apple: (a: number, b: number, c: number) => string
        gray: (grayscale: number) => string
    }
    interface StyleType {
        ansi: EscapeCodeFromColorFormats
        ansi256: EscapeCodeFromColorFormats
        ansi16m: EscapeCodeFromColorFormats
    }
}
