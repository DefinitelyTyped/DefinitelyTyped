// Type definitions for facepaint 1.2
// Project: https://github.com/emotion-js/facepaint
// Definitions by: Ciarán Curley <https://github.com/DogPawHat>
//                 Anton Samper Rivaya <https://github.com/antonsamper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'facepaint' {
    type BaseArg = object | object[];
    type Arg = BaseArg | BaseArg[];

    type Selector = string;

    interface DynamicStyle {
        [key: string]: {
            [key: string]: string | number;
        };
    }

    interface DynamicStyleFunction {
        (...args: Arg[]): DynamicStyle;
    }

    interface FacepaintOptions {
        literal?: boolean;
        overlap?: boolean;
    }

    function facepaint(
        breakpoints: Selector[],
        options?: FacepaintOptions
    ): DynamicStyleFunction;

    export default facepaint;
}
