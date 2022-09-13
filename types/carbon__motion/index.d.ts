// Type definitions for @carbon/motion 0.0
// Project: https://github.com/IBM/carbon-elements/tree/master/packages/motion
// Definitions by: Vince Picone <https://github.com/vpicone>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const easings: {
    entrance: {
        expressive: string;
        productive: string;
    };
    exit: {
        expressive: string;
        productive: string;
    };
    standard: {
        expressive: string;
        productive: string;
    };
};

export function motion(name: string, mode: string): string;

export namespace motion {
    const prototype: {};
}
