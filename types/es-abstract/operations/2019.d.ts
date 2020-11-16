import ES2018Operations = require('./2018');
import ES2019 = require('../es2019');

interface ES2019Operations
    extends Record<keyof ES2019, string>,
        Omit<ES2018Operations, 'ModuleDeclarationEnvironmentSetup' | 'ModuleExecution' | 'WakeWaiter'> {
    AsyncFromSyncIteratorContinuation: string;
    ExecuteModule: string;
    InitializeEnvironment: string;
    NotifyWaiter: string;
    SynchronizeEventSet: string;
}

declare const ES2019Operations: ES2019Operations;
export = ES2019Operations;
