export as namespace immediate;
export = immediate;

declare function immediate<TArgs extends any[]>(
    task: (...args: TArgs) => void,
    ...args: TArgs
): void;
