// Type definitions for windows-mutex 0.4
// Project: https://github.com/Microsoft/node-windows-mutex
// Definitions by: Benjamin Pasero <https://github.com/bpasero>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Mutex {
    constructor(name: string);
    isActive(): boolean;
    release(): void;
}

export function isActive(name: string): boolean;
