// Type definitions for main-bower-files
// Project: https://github.com/ck86/main-bower-files
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />



interface IPaths {
    bowerDirectory?: string | undefined;
    bowerrc?: string | undefined;
    bowerJson?: string | undefined;
}

interface IFilterFunction {
    (filepath: string): boolean;
}

interface IOptions {
    debugging?: boolean | undefined;
    main?: string | string[] | Object | undefined;
    env?: string | undefined;
    paths?: IPaths | string | undefined;
    checkExistence?: boolean | undefined;
    includeDev?: boolean | string | undefined;
    includeSelf?: boolean | undefined;
    filter?: RegExp | IFilterFunction | string | string[] | undefined;
}

declare function mainBowerFiles(options?: IOptions, callback?: (error: Error | null) => void): string[];

export = mainBowerFiles;
