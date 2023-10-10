// Type definitions for make-arrow-function 1.2
// Project: https://github.com/ljharb/make-arrow-function#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ArrowFunction = (...args: unknown[]) => unknown;

interface MakeArrowFunction {
    (): ArrowFunction | undefined;
    list: () => readonly ArrowFunction[];
}

declare const makeArrowFunction: MakeArrowFunction;

export = makeArrowFunction;
