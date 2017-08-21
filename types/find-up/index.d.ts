// Type definitions for find-up 2.1
// Project: https://github.com/sindresorhus/find-up#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = findUp;

declare function findUp(filename: string | string[], options?: findUp.Options): Promise<string | null>;

declare namespace findUp {
    function sync(filename: string | string[], options?: Options): string | null;

    interface Options {
        cwd?: string;
    }
}
