
declare namespace bare {
    export interface Format {
        (...text: any[]): string;

        readonly bold: Format;
        readonly italic: Format;
        readonly underline: Format;
        readonly blink: Format;
        readonly inverse: Format;
        readonly strike: Format;

        readonly black: Format;
        readonly red: Format;
        readonly green: Format;
        readonly yellow: Format;
        readonly blue: Format;
        readonly magenta: Format;
        readonly cyan: Format;
        readonly white: Format;

        readonly bgBlack: Format;
        readonly bgRed: Format;
        readonly bgGreen: Format;
        readonly bgYellow: Format;
        readonly bgBlue: Format;
        readonly bgMagenta: Format;
        readonly bgCyan: Format;
        readonly bgWhite: Format;

        readonly blackBright: Format;
        readonly redBright: Format;
        readonly greenBright: Format;
        readonly yellowBright: Format;
        readonly blueBright: Format;
        readonly magentaBright: Format;
        readonly cyanBright: Format;
        readonly whiteBright: Format;

        readonly bgBlackBright: Format;
        readonly bgRedBright: Format;
        readonly bgGreenBright: Format;
        readonly bgYellowBright: Format;
        readonly bgBlueBright: Format;
        readonly bgMagentaBright: Format;
        readonly bgCyanBright: Format;
        readonly bgWhiteBright: Format;

        xterm(color: number): Format;
        bgXterm(color: number): Format;
        readonly xtermSupported: boolean;
    }
}
declare const bare: bare.Format;
export = bare;
