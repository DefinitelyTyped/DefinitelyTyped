// Type definitions for locate-path 2.0
// Project: https://github.com/sindresorhus/locate-path#readme
// Definitions by: BendingBender <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = locatePath;

declare function locatePath(input: Iterable<string>, options?: locatePath.Options): Promise<string | undefined>;

declare namespace locatePath {
    function sync(input: Iterable<string>, options?: {cwd?: string}): string | undefined;

    interface Options {
        concurrency?: number;
        preserveOrder?: boolean;
        cwd?: string;
    }
}
