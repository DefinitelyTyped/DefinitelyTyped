// Type definitions for facepaint 1.2
// Project: https://github.com/emotion-js/facepaint
// Definitions by: Ciarán Curley <https://github.com/DogPawHat>
//                 Anton Samper Rivaya <https://github.com/antonsamper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
// export as namespace facepaint;

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
