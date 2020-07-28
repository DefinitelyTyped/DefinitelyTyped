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
import * as http from 'http';

const collection: CollectionDefinition = {};
const environment: VariableScopeDefinition = {};
const globals: VariableScopeDefinition = {};
const folder: string | string[] = ['collectionFolderA', 'collectionFolderB'];
const color = 'auto';
const workingDir = 'path/to/working/directory';
const insecureFileRead = true;
const requestAgent = new http.Agent();

// $ExpectType EventEmitter
run(
    {
        collection,
        environment,
        globals,
        folder,
        color,
        workingDir,
        insecureFileRead,
        requestAgents: {
            http: requestAgent,
            https: requestAgent,
        },
    },
    (err, summary: NewmanRunSummary) => {
        summary.run; // $ExpectType NewmanRun
        summary.run.executions; // $ExpectType NewmanRunExecution[]
        summary.run.failures; // $ExpectType NewmanRunFailure[]
        summary.run.failures[0].source; // $ExpectType NewmanRunExecutionItem | undefined
    }
);
