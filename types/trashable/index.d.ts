// Type definitions for trashable 1.0
// Project: https://github.com/hjylewis/trashable#readme
// Definitions by: James Lismore <https://github.com/jlismore>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type TrashablePromise<T> = Promise<T> & { trash: () => void };

declare function makeTrashable<T>(promise: Promise<T>): TrashablePromise<T>;

export = makeTrashable;
