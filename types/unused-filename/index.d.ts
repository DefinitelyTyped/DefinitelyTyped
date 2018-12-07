// Type definitions for unused-filename 1.0
// Project: https://github.com/sindresorhus/unused-filename#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = unusedFilename;

declare function unusedFilename(filepath: string): Promise<string>;

declare namespace unusedFilename {
    function sync(filepath: string): string;
}
