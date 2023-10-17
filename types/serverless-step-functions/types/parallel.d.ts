import { Catch, Retry } from "./errors";
import { EndOrNext, JsonObject, Path, ReferencePath, State } from "./state";

export interface Branch {
    StartAt: string;
    States: {
        [state: string]: State;
    };
    Comment?: string;
}

/**
 * The Parallel State (identified by "Type":"Parallel") can be used to create parallel branches of execution in your state machine.
 *
 * @see https://states-language.net/#parallel-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-parallel-state.html
 */
export type Parallel = {
    Type: "Parallel";
    Comment?: string;
    InputPath?: Path | null;
    OutputPath?: Path | null;
    Branches: Branch[];
    ResultPath?: ReferencePath | null;
    ResultSelector?: JsonObject;
    Retry?: Retry[];
    Catch?: Catch[];
} & EndOrNext;
