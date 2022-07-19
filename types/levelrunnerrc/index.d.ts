export class levelRunnerBase {
    constructor(before_in_: () => void, after_in_: () => void, level_in_: number);
    add(fun: () => void, level: number, name: string): void;
    run(): void;
}
