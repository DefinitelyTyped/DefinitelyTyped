// Type definitions for dir-glob 2.0
// Project: https://github.com/kevva/dir-glob#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = dirGlob;

declare function dirGlob(input: string | string[], options?: dirGlob.Options): Promise<string[]>;

declare namespace dirGlob {
    function sync(input: string | string[], options?: Options): string[];

    interface Options {
        extensions?: string[];
        files?: string[];
        cwd?: string;
    }
}
