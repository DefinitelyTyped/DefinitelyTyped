import { EndOrNext, JsonObject, JsonValue, Path, ReferencePath } from "./state";

/**
 * The Pass State (identified by "Type":"Pass") by default passes its input to its output, performing no work.
 *
 * @see https://states-language.net/#pass-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-pass-state.html
 */
export type Pass = {
    Type: "Pass";
    Next?: string;
    End?: boolean;
    Comment?: string;
    InputPath?: Path | null;
    OutputPath?: Path | null;
    Result?: JsonValue;
    ResultPath?: ReferencePath | null;
    Parameters?: JsonObject;
} & EndOrNext;
