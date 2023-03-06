// Type definitions for levelrunnerrc 1.0
// Project: https://github.com/Soldy/levelrunnerrc
// Definitions by: Soldy <https://github.com/Soldy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export class LevelRunner {
    constructor(before_in_: () => void, after_in_: () => void, level_in_: number);
    add(fun: () => void, level: number, name: string): void;
    run(): void;
}
export const base: typeof LevelRunner;
export const Base: typeof LevelRunner;
