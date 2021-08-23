import ES2017Operations = require('./2017');
import ES2018 = require('../es2018');

interface ES2018Operations
    extends Record<keyof ES2018, string>,
        Omit<
            ES2017Operations,
            | 'EnumerableOwnProperties'
            | 'IsPropertyDescriptor'
            | 'CreateListIterator'
            | 'EvaluateDirectCall'
            | 'ToString Applied to the Number Type'
            | 'AsyncFunctionAwait'
        > {
    AsyncGeneratorEnqueue: string;
    AsyncGeneratorFunctionCreate: string;
    AsyncGeneratorReject: string;
    AsyncGeneratorResolve: string;
    AsyncGeneratorResumeNext: string;
    AsyncGeneratorStart: string;
    AsyncGeneratorYield: string;
    AsyncIteratorClose: string;
    Await: string;
    BackreferenceMatcher: string;
    CaseClauseIsSelected: string;
    CreateAsyncFromSyncIterator: string;
    CreateListIteratorRecord: string;
    GetGeneratorKind: string;
    InnerModuleEvaluation: string;
    InnerModuleInstantiation: string;
    ModuleDeclarationEnvironmentSetup: string;
    ModuleExecution: string;
    OrdinarySetWithOwnDescriptor: string;
    SetFunctionLength: string;
    ThrowCompletion: string;
    TimeZoneString: string;
    UnicodeEscape: string;
    UnicodeMatchProperty: string;
    UnicodeMatchPropertyValue: string;
}

declare const ES2018Operations: ES2018Operations;
export = ES2018Operations;
