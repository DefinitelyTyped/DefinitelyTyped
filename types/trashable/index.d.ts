// Type definitions for trashable 1.0
// Project: https://github.com/hjylewis/trashable#readme
// Definitions by: fmiranda <https://github.com/filipemir>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line:export-just-namespace
export = Trashable;
export as namespace Trashable;

declare namespace Trashable {
    type TrashablePromise<T> = Promise<T> & { trash: () => void };

    function makeTrashable<T>(promise: Promise<T>): TrashablePromise<T>;
}
