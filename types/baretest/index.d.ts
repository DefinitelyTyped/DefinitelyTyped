// Type definitions for baretest 2.0
// Project: https://volument.com/baretest
// Definitions by: Rory O’Kane <https://github.com/roryokane>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = baretest;

declare function baretest(headline: string): TesterFunctionObject;

type TesterFunctionObject = TesterFunction & TesterSubFunctions;

type TesterFunction = (name: string, fn: SyncOrAsyncVoidFunction) => void;
interface TesterSubFunctions {
    only: (name: string, fn: SyncOrAsyncVoidFunction) => void;
    skip: (name?: string, fn?: SyncOrAsyncVoidFunction) => void;
    before: (fn: SyncOrAsyncVoidFunction) => void;
    after: (fn: SyncOrAsyncVoidFunction) => void;
    run: () => Promise<boolean>;
}

type SyncOrAsyncVoidFunction = () => void | Promise<void>;
