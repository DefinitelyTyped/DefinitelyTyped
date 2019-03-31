// Type definitions for facepaint 1.2
// Project: https://github.com/emotion-js/facepaint
// Definitions by: Ciarán Curley <https://github.com/DogPawHat>
//                 Anton Samper Rivaya <https://github.com/antonsamper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export type BaseArg = object | object[];
export type Arg = BaseArg | BaseArg[];

export type Selector = string;

export interface DynamicStyle {
    [key: string]: {
        [key: string]: string | number;
    };
}

export interface DynamicStyleFunction {
    (...args: Arg[]): DynamicStyle;
}

export interface FacepaintOptions {
    literal?: boolean;
    overlap?: boolean;
}

export default function facepaint(
    breakpoints: Selector[],
    options?: FacepaintOptions
): DynamicStyleFunction;
