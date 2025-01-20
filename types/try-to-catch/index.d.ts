declare function tryToCatch<PromiseData, FnArgs extends any[]>(
    fn: (...args: FnArgs) => Promise<PromiseData>,
    ...fnArgs: FnArgs
): Promise<[Error] | [null, PromiseData]>;

declare function tryToCatch<Data, FnArgs extends any[]>(
    fn: (...args: FnArgs) => Data,
    ...fnArgs: FnArgs
): Promise<[Error] | [null, Data]>;
export = tryToCatch;
