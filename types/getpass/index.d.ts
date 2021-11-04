// Type definitions for getpass 0.1
// Project: https://github.com/arekinath/node-getpass#readme
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    prompt?: string | undefined;
}

export interface Callback {
    (error: Error | null, password: string): void;
}

export function getPass(cb: Callback): void;
export function getPass(options: Options, cb: Callback): void;
