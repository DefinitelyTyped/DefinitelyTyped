// Type definitions for fined 1.1
// Project: https://github.com/gulpjs/fined
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = fined;

declare function fined(path: string | fined.PathSpec, opts?: fined.PathSpec): fined.Result | null;

declare namespace fined {
    interface PathSpec {
        path?: string;
        name?: string;
        extensions?: string | string[] | { [extension: string]: string | null };
        cwd?: string;
        findUp?: boolean;
    }

    interface Result {
        path: string;
        extension: string | { [extension: string]: string };
    }
}
