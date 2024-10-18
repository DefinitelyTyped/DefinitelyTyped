export class LevelRunner {
    constructor(before_in_: () => void, after_in_: () => void, level_in_: number);
    add(fun: () => void, level: number, name: string): void;
    run(): void;
}
export const base: typeof LevelRunner;
export const Base: typeof LevelRunner;
