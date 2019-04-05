// Type definitions for palx 1.0
// Project: https://github.com/jxnblk/palx
// Definitions by: Mike Fowler <https://github.com/mikefowler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = palx;
declare function palx(hex: string, options?: {}): palx.PalxPalette;
declare namespace palx {
    interface PalxPalette {
        [name: string]: string | string[];
        base: string;
        black: string;
        blue: string[];
        cyan: string[];
        fuschia: string[];
        gray: string[];
        green: string[];
        indigo: string[];
        lime: string[];
        orange: string[];
        pink: string[];
        red: string[];
        teal: string[];
        violet: string[];
        yellow: string[];
    }
}
