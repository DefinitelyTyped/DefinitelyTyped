// Type definitions for browserslist 4.3
// Project: https://github.com/browserslist/browserslist#readme
// Definitions by: Dave Cardwell <https://github.com/davecardwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

declare namespace browserslist {
    interface Browserslist {
        (queries?: string | ReadonlyArray<string>, opts?: Options): string[];

        coverage: (browsers: ReadonlyArray<string>, stats?: Stats) => number;

        clearCaches: () => void;
    }

    interface Stats {
        [browser: string]: {
            [version: string]: number;
        };
    }

    interface Options {
        path?: string;
        env?: string;
        stats?: Stats;
        config?: string;
        ignoreUnknownVersions?: boolean;
        dangerousExtend?: boolean;
    }
}

declare var browserslist: browserslist.Browserslist;

export = browserslist;
