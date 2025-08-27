declare class AwaitPromises {
    constructor();

    collect(): void;
    stop(): void;
    wait(): Promise<void>;
}

type MaybePromise<T> = T | Promise<T>;

export function wait(func: () => MaybePromise<unknown>): Promise<void>;

export default AwaitPromises;
