import {
    AssignmentObject,
    EndOrNext,
    JSONataExpression,
    JsonObject,
    Path,
    QueryLanguage,
    ReferencePath,
} from "./state";

/**
 * The Pass State (identified by "Type":"Pass") by default passes its input to its output, performing no work.
 *
 * @see https://states-language.net/#pass-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-pass-state.html
 */
export type Pass = {
    Type: "Pass";
    Comment?: string;
    Next?: string;
    End?: boolean;

    // Common fields
    QueryLanguage?: QueryLanguage;
    Assign?: AssignmentObject;

    // JSONata style fields
    Output?: JSONataExpression;

    // JSONPath style fields
    InputPath?: Path | null;
    OutputPath?: Path | null;
    Parameters?: JsonObject;
    ResultPath?: ReferencePath | null;
} & EndOrNext;
