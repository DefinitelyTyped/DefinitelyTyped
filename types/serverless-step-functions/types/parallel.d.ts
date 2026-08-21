import { Catch, Retry } from "./errors";
import {
    AssignmentObject,
    EndOrNext,
    JSONataExpression,
    JsonObject,
    Path,
    QueryLanguage,
    ReferencePath,
    State,
} from "./state";

export interface Branch {
    StartAt: string;
    States: {
        [state: string]: State;
    };
    Comment?: string;
}

/**
 * The Parallel State (identified by "Type":"Parallel") causes parallel execution of "branches".
 *
 * @see https://states-language.net/#parallel-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-parallel-state.html
 */
export type Parallel = {
    Type: "Parallel";
    Branches: Array<Branch>;
    Comment?: string;

    // Common fields
    QueryLanguage?: QueryLanguage;
    Assign?: AssignmentObject;
    Retry?: Retry[];
    Catch?: Catch[];

    // JSONata style fields
    Arguments?: JSONataExpression;
    Output?: JSONataExpression;

    // JSONPath style fields
    InputPath?: Path | null;
    OutputPath?: Path | null;
    Parameters?: JsonObject;
    ResultPath?: ReferencePath | null;
    ResultSelector?: JsonObject;
} & EndOrNext;
