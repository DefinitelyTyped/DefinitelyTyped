type TrashablePromise<T> = Promise<T> & { trash: () => void };

declare function makeTrashable<T>(promise: Promise<T>): TrashablePromise<T>;

export = makeTrashable;
