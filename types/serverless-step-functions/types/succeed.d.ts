import { JSONataExpression, Path, QueryLanguage } from "./state";

/**
 * The Succeed State (identified by "Type":"Succeed") either terminates a state machine successfully,
 * ends a branch of a Parallel State, or ends an iteration of a Map State.
 *
 * @see https://states-language.net/#succeed-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-succeed-state.html
 */
export interface Succeed {
    Type: "Succeed";
    Comment?: string;

    // Common fields
    QueryLanguage?: QueryLanguage;

    // JSONata style fields
    Output?: JSONataExpression;

    // JSONPath style fields
    InputPath?: Path | null;
    OutputPath?: Path | null;
}
