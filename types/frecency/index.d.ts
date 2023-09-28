// Type definitions for frecency 1.3
// Project: https://github.com/mixmaxhq/frecency#readme
// Definitions by: swyx <https://github.com/sw-yx>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.3

export type idAttrFn = (result: string) => string;
export default class Frecency<T = any> {
    constructor(constructOpts: {
        key: string;
        idAttribute?: string | idAttrFn | undefined;
        timeStampsLimit?: number | undefined;
        recentSelectionsLimit?: number | undefined;
        storageProvider?: object | undefined;
        exactQueryMatchWeight?: number | undefined;
        subQueryMatchWeight?: number | undefined;
        recentSelectionsMatchWeight?: number | undefined;
    });
    save: (arg: { searchQuery: T; selectedId: string }) => void;
    sort:
        | ((arg: { searchQuery: T; results: T[] }) => T[])
        | ((arg: {
            searchQuery: T;
            results: T[];
            keepScores?: boolean | undefined;
        }) => Array<T & { _frecencyScore?: number | undefined }>);
}
