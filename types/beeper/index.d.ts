// Type definitions for beeper 1.1
// Project: https://github.com/sindresorhus/beeper#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = beeper;

declare function beeper(count?: number, cb?: () => void): void;
declare function beeper(melody: string, cb?: () => void): void;
