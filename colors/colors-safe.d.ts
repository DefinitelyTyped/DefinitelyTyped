// Type definitions for Colors.js 1.1.2
// Project: https://github.com/Marak/colors.js
// Definitions by: Bart van der Schoor <https://github.com/Bartvds> newclear <https://github.com/newclear>
// Definitions: https://github.com/newclear/DefinitelyTyped


declare module "colors/safe" {
    interface Color {
        (text: string): string;

        black: Color;
        red: Color;
        green: Color;
        yellow: Color;
        blue: Color;
        magenta: Color;
        cyan: Color;
        white: Color;
        gray: Color;
        grey: Color;

        bgBlack: Color;
        bgRed: Color;
        bgGreen: Color;
        bgYellow: Color;
        bgBlue: Color;
        bgMagenta: Color;
        bgCyan: Color;
        bgWhite: Color;

        reset: Color;
        bold: Color;
        dim: Color;
        italic: Color;
        underline: Color;
        inverse: Color;
        hidden: Color;
        strikethrough: Color;

        rainbow: Color;
        zebra: Color;
        america: Color;
        trap: Color;
        random: Color;
    }

    module e {
        export function setTheme(theme:any): void;

        export var black: Color;
        export var red: Color;
        export var green: Color;
        export var yellow: Color;
        export var blue: Color;
        export var magenta: Color;
        export var cyan: Color;
        export var white: Color;
        export var gray: Color;
        export var grey: Color;

        export var bgBlack: Color;
        export var bgRed: Color;
        export var bgGreen: Color;
        export var bgYellow: Color;
        export var bgBlue: Color;
        export var bgMagenta: Color;
        export var bgCyan: Color;
        export var bgWhite: Color;

        export var reset: Color;
        export var bold: Color;
        export var dim: Color;
        export var italic: Color;
        export var underline: Color;
        export var inverse: Color;
        export var hidden: Color;
        export var strikethrough: Color;

        export var rainbow: Color;
        export var zebra: Color;
        export var america: Color;
        export var trap: Color;
        export var random: Color;
    }

    export = e;
}
