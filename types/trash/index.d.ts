// Type definitions for trash 4.3
// Project: https://github.com/sindresorhus/trash#readme
// Definitions by: Matthew James <https://github.com/matthew-matvei>
//                 Keiichiro Amemiya <https://github.com/hoishin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

interface TrashOptions {
    glob: boolean;
}

declare function trash(iterable: Iterable<string>, opts?: TrashOptions): Promise<void>;

export = trash;
