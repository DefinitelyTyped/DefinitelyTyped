// Type definitions for cli-color 0.3.2
// Project: https://github.com/medikoo/cli-color
// Definitions by: Joel Spadin <https://github.com/ChaosinaCan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare namespace m {
    export interface Format {
        (...text: any[]): string;

        bold: Format;
        italic: Format;
        underline: Format;
        blink: Format;
        inverse: Format;
        strike: Format;

        black: Format;
        red: Format;
        green: Format;
        yellow: Format;
        blue: Format;
        magenta: Format;
        cyan: Format;
        white: Format;

        bgBlack: Format;
        bgRed: Format;
        bgGreen: Format;
        bgYellow: Format;
        bgBlue: Format;
        bgMagenta: Format;
        bgCyan: Format;
        bgWhite: Format;

        blackBright: Format;
        redBright: Format;
        greenBright: Format;
        yellowBright: Format;
        blueBright: Format;
        magentaBright: Format;
        cyanBright: Format;
        whiteBright: Format;

        bgBlackBright: Format;
        bgRedBright: Format;
        bgGreenBright: Format;
        bgYellowBright: Format;
        bgBlueBright: Format;
        bgMagentaBright: Format;
        bgCyanBright: Format;
        bgWhiteBright: Format;

        xterm(color: number): Format;
        bgXterm(color: number): Format;

        move(x: number, y: number): string;
        moveTo(x: number, y: number): string;
        bol(n?: number, erase?: boolean): string;
        up(n: number): string;
        down(n: number): string;
        left(n: number): string;
        right(n: number): string;

        beep: string;
        reset: string;

        width: number;
        height: number;
        xtermSupported: boolean;
    }
}

declare var m: m.Format;
export = m;
