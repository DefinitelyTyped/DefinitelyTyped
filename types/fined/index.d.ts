// Type definitions for fined 1.2
// Project: https://github.com/gulpjs/fined
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = fined;

declare function fined(path: string | fined.PathSpec, opts?: fined.PathSpec): fined.Result | null;

interface StringObject {
  toString(): string;
}

declare namespace fined {
    interface PathSpec {
        path?: string | undefined;
        name?: string | undefined;
        extensions?: string | string[] | { [extension: string]: string | null } | StringObject | StringObject[] | undefined;
        cwd?: string | undefined;
        findUp?: boolean | undefined;
    }

    interface Result {
        path: string;
        extension: string | { [extension: string]: string };
    }
}
