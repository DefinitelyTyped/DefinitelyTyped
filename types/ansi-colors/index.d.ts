// Type definitions for ansi-colors 3.2
// Project: https://github.com/doowb/ansi-colors
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

export = colors;

declare const colors: colors.Colors;

declare namespace colors {
    type ColorFn = ((text: string) => string) & Colors;

    interface Colors {
        enabled: boolean;
        visible: boolean;

        reset: ColorFn;
        bold: ColorFn;
        dim: ColorFn;
        italic: ColorFn;
        underline: ColorFn;
        inverse: ColorFn;
        hidden: ColorFn;
        strikethrough: ColorFn;

        black: ColorFn;
        red: ColorFn;
        green: ColorFn;
        yellow: ColorFn;
        blue: ColorFn;
        magenta: ColorFn;
        cyan: ColorFn;
        white: ColorFn;
        gray: ColorFn;
        grey: ColorFn;

        bgBlack: ColorFn;
        bgRed: ColorFn;
        bgGreen: ColorFn;
        bgYellow: ColorFn;
        bgBlue: ColorFn;
        bgMagenta: ColorFn;
        bgCyan: ColorFn;
        bgWhite: ColorFn;

        blackBright: ColorFn;
        redBright: ColorFn;
        greenBright: ColorFn;
        yellowBright: ColorFn;
        blueBright: ColorFn;
        magentaBright: ColorFn;
        cyanBright: ColorFn;
        whiteBright: ColorFn;

        bgBlackBright: ColorFn;
        bgRedBright: ColorFn;
        bgGreenBright: ColorFn;
        bgYellowBright: ColorFn;
        bgBlueBright: ColorFn;
        bgMagentaBright: ColorFn;
        bgCyanBright: ColorFn;
        bgWhiteBright: ColorFn;

        hasColor(text: string): boolean;
        hasAnsi(text: string): boolean;
        unstyle(text: string): string;
        stripColor(text: string): string;
        none(text: string): string;
        clear(text: string): string;
        noop(text: string): string;

        symbols: Symbols & {
            windows: WindowsSymbols;
            other: OtherPlatformsSymbols;
        };

        define(
            name: string,
            codes: [number, number],
            type: 'modifier' | 'color' | 'bg' | 'bright' | 'bgBright'
        ): void;
    }

    interface WindowsSymbols {
        bullet: string;
        check: string;
        cross: string;
        ellipsis: string;
        heart: string;
        info: string;
        line: string;
        middot: string;
        minus: string;
        plus: string;
        question: string;
        questionSmall: string;
        pointer: string;
        pointerSmall: string;
        warning: string;
    }

    interface ExtendedSymbols {
        ballotCross: string;
        questionFull: string;
    }

    type Symbols = WindowsSymbols & Partial<ExtendedSymbols>;
    type OtherPlatformsSymbols = WindowsSymbols & ExtendedSymbols;
}
