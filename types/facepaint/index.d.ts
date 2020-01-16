// Type definitions for facepaint 1.2
// Project: https://github.com/emotion-js/facepaint
// Definitions by: Ciarán Curley <https://github.com/DogPawHat>
//                 Anton Samper Rivaya <https://github.com/antonsamper>
//                 Tim Swalling <https://github.com/timswalling>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare namespace facepaint {
    type BaseArg = object | object[];
    type Arg = BaseArg | BaseArg[];

    type Selector = string;

    interface DynamicStyle {
        [key: string]: {
            [key: string]: string | number;
        };
    }

    interface DynamicStyleFunction {
        (...args: Arg[]): DynamicStyle[];
    }

    interface Options {
        literal?: boolean;
        overlap?: boolean;
    }
}

declare function facepaint(
    breakpoints: facepaint.Selector[],
    options?: facepaint.Options
): facepaint.DynamicStyleFunction;

export = facepaint;
