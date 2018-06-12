// Type definitions for newman 3.9
// Project: https://github.com/postmanlabs/newman
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface NewmanRunSummary {
    run: NewmanRun;
}
export interface NewmanRun {
    executions: NewmanRunExecution[];
}
export interface NewmanRunExecution {
    item: NewmanRunExecutionItem;
    assertions: NewmanRunExecutionAssertion[];
}
export interface NewmanRunExecutionItem {
    name: string;
}
export interface NewmanRunExecutionAssertion {
    assertion: string;
    error: NewmanRunExecutionAssertionError;
}
export interface NewmanRunExecutionAssertionError {
    message: string;
}
export function run(options: any, callback?: (err: Error | null, summary: NewmanRunSummary) => void): void;
