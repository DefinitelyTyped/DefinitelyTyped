// Type definitions for closure-compiler
// Project: https://github.com/tim-smart/node-closure/
// Definitions by: Martin Probst <https://github.com/mprobst>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


type Callback = (err: Error, stdout: string, stderr: string) => any;
declare function compile(src: string, callback: Callback): void;
declare function compile(src: string, options: { [k: string]: string | string[] },
    callback: Callback): void;
