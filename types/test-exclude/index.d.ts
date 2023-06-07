// Type definitions for test-exclude 6.0
// Project: https://istanbul.js.org/
// Definitions by: atlowChemi <https://github.com/atlowChemi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface TestExcludeOptions {
    cwd?: string;
    include?: string | string[];
    extension?: string | string[];
    exclude?: string | string[];
    excludeNodeModules?: boolean;
    relativePath?: boolean;
}
declare class TestExclude {
    constructor(options?: TestExcludeOptions);

    shouldInstrument(filename: string): boolean;
    globSync(cwd?: string): string[];
    glob(cwd?: string): Promise<string[]>;
}

declare const _TestExclude: typeof TestExclude;
export = _TestExclude;
