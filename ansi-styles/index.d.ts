// Type definitions for ansi-styles 2.0.1
// Project: https://github.com/sindresorhus/ansi-styles
// Definitions by: bryn austin bellomy <https://github.com/brynbellomy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



export interface EscapeCodePair {
    open: string;
    close: string;
}

export declare var reset: EscapeCodePair;

export declare var bold: EscapeCodePair;
export declare var dim: EscapeCodePair;
export declare var italic: EscapeCodePair;
export declare var underline: EscapeCodePair;
export declare var inverse: EscapeCodePair;
export declare var hidden: EscapeCodePair;
export declare var strikethrough: EscapeCodePair;

export declare var black: EscapeCodePair;
export declare var red: EscapeCodePair;
export declare var green: EscapeCodePair;
export declare var yellow: EscapeCodePair;
export declare var blue: EscapeCodePair;
export declare var magenta: EscapeCodePair;
export declare var cyan: EscapeCodePair;
export declare var white: EscapeCodePair;
export declare var gray: EscapeCodePair;

export declare var bgBlack: EscapeCodePair;
export declare var bgRed: EscapeCodePair;
export declare var bgGreen: EscapeCodePair;
export declare var bgYellow: EscapeCodePair;
export declare var bgBlue: EscapeCodePair;
export declare var bgMagenta: EscapeCodePair;
export declare var bgCyan: EscapeCodePair;
export declare var bgWhite: EscapeCodePair;
