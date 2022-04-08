// Type definitions for mutexify 1.2
// Project: https://github.com/mafintosh/mutexify
// Definitions by: Gustav Bylund <https://github.com/maistho>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Lock {
    (fn: Release): number;
    locked: boolean;
}

type Release = (
    cb: (err?: any, value?: any) => any,
    err: any,
    value: any
) => void;

declare function mutexify(): Lock;

export = mutexify;
export as namespace mutexify;
