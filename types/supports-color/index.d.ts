// Type definitions for supports-color 7.2
// Project: https://github.com/chalk/supports-color
// Definitions by: Melvin Groenhoff <https://github.com/mgroenhoff>
//                 Matt Traynham <https://github.com/mtraynham>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace supportsColor {
    interface Level {
        level: number;
        hasBasic: boolean;
        has256: boolean;
        has16m: boolean;
    }

    type SupportsColor = false & Level;
}

export const stdout: supportsColor.SupportsColor;
export const stderr: supportsColor.SupportsColor;
