// Type definitions for gulp-util
// Project: http://gulpjs.com/
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Chalk {
	interface IOpenClose {
        open: string;
        close: string;
    }

    interface IStyles {
        reset: IOpenClose;
        bold: IOpenClose;
        italic: IOpenClose;
        underline: IOpenClose;
        inverse: IOpenClose;
        strikethrough: IOpenClose;
        black: IOpenClose;
        red: IOpenClose;
        green: IOpenClose;
        yellow: IOpenClose;
        blue: IOpenClose;
        magenta: IOpenClose;
        cyan: IOpenClose;
        white: IOpenClose;
        gray: IOpenClose;
        bgBlack: IOpenClose;
        bgRed: IOpenClose;
        bgGreen: IOpenClose;
        bgYellow: IOpenClose;
        bgBlue: IOpenClose;
        bgMagenta: IOpenClose;
        bgCyan: IOpenClose;
        bgWhite: IOpenClose;
    }

    interface IChalk {
        (...msgs: string[]): string;
        (...msgs: number[]): string;
        reset: IChalk;
        bold: IChalk;
        italic: IChalk;
        underline: IChalk;
        inverse: IChalk;
        strikethrough: IChalk;
        black: IChalk;
        red: IChalk;
        green: IChalk;
        yellow: IChalk;
        blue: IChalk;
        magenta: IChalk;
        cyan: IChalk;
        white: IChalk;
        gray: IChalk;
        bgBlack: IChalk;
        bgRed: IChalk;
        bgGreen: IChalk;
        bgYellow: IChalk;
        bgBlue: IChalk;
        bgMagenta: IChalk;
        bgCyan: IChalk;
        bgWhite: IChalk;
        enabled: boolean;
        supportsColor: boolean;
        styles: IStyles;
    }
}

declare module "chalk" {
    export var reset: Chalk.IChalk;
    export var bold: Chalk.IChalk;
    export var italic: Chalk.IChalk;
    export var underline: Chalk.IChalk;
    export var inverse: Chalk.IChalk;
    export var strikethrough: Chalk.IChalk;
    export var black: Chalk.IChalk;
    export var red: Chalk.IChalk;
    export var green: Chalk.IChalk;
    export var yellow: Chalk.IChalk;
    export var blue: Chalk.IChalk;
    export var magenta: Chalk.IChalk;
    export var cyan: Chalk.IChalk;
    export var white: Chalk.IChalk;
    export var gray: Chalk.IChalk;
    export var bgBlack: Chalk.IChalk;
    export var bgRed: Chalk.IChalk;
    export var bgGreen: Chalk.IChalk;
    export var bgYellow: Chalk.IChalk;
    export var bgBlue: Chalk.IChalk;
    export var bgMagenta: Chalk.IChalk;
    export var bgCyan: Chalk.IChalk;
    export var bgWhite: Chalk.IChalk;
    export var enabled: boolean;
    export var supportsColor: boolean;
    export var styles: Chalk.IStyles;
}