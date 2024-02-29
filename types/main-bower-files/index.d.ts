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
