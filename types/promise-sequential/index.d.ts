// Type definitions for promise-sequential 1.1
// Project: https://github.com/russiann/promise-sequential#readme
// Definitions by: Gary King <https://github.com/garyking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

type PromiseFunction = () => Promise<any>;

declare function promiseSequential(promises: PromiseFunction[]): Promise<any[]>;

export = promiseSequential;
