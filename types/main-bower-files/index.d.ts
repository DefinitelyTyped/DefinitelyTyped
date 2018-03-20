// Type definitions for main-bower-files
// Project: https://github.com/ck86/main-bower-files
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />



interface IPaths {
    bowerDirectory?: string;
    bowerrc?: string;
    bowerJson?: string;
}

interface IFilterFunction {
    (filepath: string): boolean;
}

interface IOptions {
    debugging?: boolean;
    main?: string | string[] | Object;
    env?: string;
    paths?: IPaths | string;
    checkExistence?: boolean;
    includeDev?: boolean | string;
    includeSelf?: boolean;
    filter?: RegExp | IFilterFunction | string | string[];
}

declare function mainBowerFiles(options?: IOptions): string[];

export = mainBowerFiles;
