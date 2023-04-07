// Type definitions for secretary 0.1
// Project: https://www.npmjs.com/package/secretary
// Definitions by: Mohtasim Alam Sohom <https://github.com/Sohom829>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'engine' {
    export class Engine {
        minFlag: number;
        maxFlag: number;
        minRunningFlag: number;
        maxRunningFlag: number;

        process(args: Array<string>): string;
        isValidFlag(flag: number): boolean;
        setMinFlag(flag: number): void;
        setMaxFlag(flag: number): void;
    }
}

declare module 'secretary' {
    export function flag(flag: number): typeof secretary;
    export function log(...args: any[]): void;
    export function configure(config: {
        minFlag?: number;
        maxFlag?: number;
        minRunningFlag?: number;
        maxRunningFlag?: number;
    }): void;
}
