// Type definitions for ansi-styles 2.0.1
// Project: https://github.com/sindresorhus/ansi-styles
// Definitions by: bryn austin bellomy <https://github.com/brynbellomy>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "ansi-styles"
{
    export interface EscapeCodePair {
        open: string;
        close: string;
    }

    export var reset: EscapeCodePair;

    export var bold: EscapeCodePair;
    export var dim: EscapeCodePair;
    export var italic: EscapeCodePair;
    export var underline: EscapeCodePair;
    export var inverse: EscapeCodePair;
    export var hidden: EscapeCodePair;
    export var strikethrough: EscapeCodePair;

    export var black: EscapeCodePair;
    export var red: EscapeCodePair;
    export var green: EscapeCodePair;
    export var yellow: EscapeCodePair;
    export var blue: EscapeCodePair;
    export var magenta: EscapeCodePair;
    export var cyan: EscapeCodePair;
    export var white: EscapeCodePair;
    export var gray: EscapeCodePair;

    export var bgBlack: EscapeCodePair;
    export var bgRed: EscapeCodePair;
    export var bgGreen: EscapeCodePair;
    export var bgYellow: EscapeCodePair;
    export var bgBlue: EscapeCodePair;
    export var bgMagenta: EscapeCodePair;
    export var bgCyan: EscapeCodePair;
    export var bgWhite: EscapeCodePair;
}