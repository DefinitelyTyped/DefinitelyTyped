type AsyncFunction = (...args: unknown[]) => Promise<unknown>;

interface MakeAsyncFunction {
    (): AsyncFunction | undefined;
    list: () => readonly AsyncFunction[];
}

declare const makeAsyncFunction: MakeAsyncFunction;

export = makeAsyncFunction;
