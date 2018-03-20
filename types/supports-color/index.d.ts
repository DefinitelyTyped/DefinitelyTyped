// Type definitions for supports-color 3.1.2
// Project: https://github.com/chalk/supports-color
// Definitions by: Melvin Groenhoff <https://github.com/mgroenhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface SupportsColor {
    level: number;
    hasBasic: boolean;
    has256: boolean;
    has16m: boolean;
}

declare const supportsColor: boolean & SupportsColor;

export = supportsColor;
