// Type definitions for baretest 1.0
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
    run: () => Promise<undefined | false>; // TODO make this `Promise<boolean>` after https://github.com/volument/baretest/pull/11 is merged and released
}

type SyncOrAsyncVoidFunction = () => void | Promise<void>;
