// Type definitions for initrc 1.2
// Project: https://github.com/Soldy/initrc
// Definitions by: Soldy <https://github.com/Soldy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export class Init {
    startAdd(fun: () => void, level: number, name: string): boolean;
    /** @async */
    startRun(): Promise<void>;
    stopAdd(fun: () => void, level: number, name: string): boolean;
    /** @async */
    stopRun(): Promise<void>;
    status(): number;
}

export const Base: typeof Init;
export const base: typeof Init;
export const init: typeof Init;
