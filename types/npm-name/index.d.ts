// Type definitions for npm-name 5.0
// Project: https://github.com/sindresorhus/npm-name#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = npmName;

declare function npmName(name: string): Promise<boolean>;

declare namespace npmName {
    function many<T extends string>(names: T[]): Promise<Map<T, boolean>>;
}
