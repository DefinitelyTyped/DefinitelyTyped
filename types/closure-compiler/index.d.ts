// Type definitions for closure-compiler
// Project: https://github.com/tim-smart/node-closure/
// Definitions by: Martin Probst <https://github.com/mprobst>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export type Callback = (err: Error, stdout: string, stderr: string) => any;
export function compile(src: string, callback: Callback): void;
export function compile(src: string, options: { [k: string]: string | string[] },
    callback: Callback): void;
