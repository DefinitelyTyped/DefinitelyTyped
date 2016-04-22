// Type definitions for ansi-styles 2.0.1
// Project: https://github.com/sindresorhus/ansi-styles
// Definitions by: bryn austin bellomy <https://github.com/brynbellomy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



export interface EscapeCodePair {
    open: string;
    close: string;
}

declare export var reset: EscapeCodePair;

declare export var bold: EscapeCodePair;
declare export var dim: EscapeCodePair;
declare export var italic: EscapeCodePair;
declare export var underline: EscapeCodePair;
declare export var inverse: EscapeCodePair;
declare export var hidden: EscapeCodePair;
declare export var strikethrough: EscapeCodePair;

declare export var black: EscapeCodePair;
declare export var red: EscapeCodePair;
declare export var green: EscapeCodePair;
declare export var yellow: EscapeCodePair;
declare export var blue: EscapeCodePair;
declare export var magenta: EscapeCodePair;
declare export var cyan: EscapeCodePair;
declare export var white: EscapeCodePair;
declare export var gray: EscapeCodePair;

declare export var bgBlack: EscapeCodePair;
declare export var bgRed: EscapeCodePair;
declare export var bgGreen: EscapeCodePair;
declare export var bgYellow: EscapeCodePair;
declare export var bgBlue: EscapeCodePair;
declare export var bgMagenta: EscapeCodePair;
declare export var bgCyan: EscapeCodePair;
declare export var bgWhite: EscapeCodePair;
