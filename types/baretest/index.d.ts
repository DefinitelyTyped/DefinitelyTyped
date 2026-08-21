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
