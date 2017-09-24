// Type definitions for sparkly 3.1
// Project: https://github.com/sindresorhus/sparkly
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = sparkly;

declare function sparkly(numbers: Array<number | ''>, options?: sparkly.Options): string;

declare namespace sparkly {
    interface Options {
        min?: number;
        max?: number;
        style?: 'fire';
    }
}
