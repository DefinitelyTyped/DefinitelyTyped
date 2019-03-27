import { EventEmitter } from "events";
import {
    run,
    NewmanRun,
    NewmanRunExecution,
    NewmanRunExecutionAssertion,
    NewmanRunExecutionAssertionError,
    NewmanRunExecutionItem,
    NewmanRunFailure,
    NewmanRunSummary
} from "newman";
import {
    CollectionDefinition,
    VariableScopeDefinition
} from "postman-collection";

const collection: CollectionDefinition = {};
const environment: VariableScopeDefinition = {};
const globals: VariableScopeDefinition = {};

// $ExpectType EventEmitter
run(
    {
        collection,
        environment,
        globals
    },
    (err, summary: NewmanRunSummary) => {
        summary.run; // $ExpectType NewmanRun
        summary.run.executions; // $ExpectType NewmanRunExecution[]
        summary.run.failures; // $ExpectType NewmanRunFailure[]
    }
);
