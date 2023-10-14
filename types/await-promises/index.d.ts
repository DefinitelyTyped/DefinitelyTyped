// Type definitions for await-promises 1.0
// Project: https://github.com/visualjerk/await-promises
// Definitions by: Ben Grynhaus <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class AwaitPromises {
    constructor();

    collect(): void;
    stop(): void;
    wait(): Promise<void>;
}

type MaybePromise<T> = T | Promise<T>;

export function wait(func: () => MaybePromise<unknown>): Promise<void>;

export default AwaitPromises;
