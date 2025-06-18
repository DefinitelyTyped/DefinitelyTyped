type PromiseFunction = () => Promise<any>;

declare function promiseSequential(promises: PromiseFunction[]): Promise<any[]>;

export = promiseSequential;
