// Type definitions for math-random 1.0
// Project: https://github.com/michaelrhodes/math-random#readme
// Definitions by: Richie Bendall <https://github.com/Richienb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const mathRandom: {
    (): number;
    cryptographic: true | undefined;
};

export = mathRandom;
