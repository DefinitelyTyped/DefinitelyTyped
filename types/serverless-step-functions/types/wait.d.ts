import { AssignmentObject, EndOrNext, JSONataExpression, Path, PositiveInteger, QueryLanguage } from "./state";

/**
 * The Wait State (identified by "Type":"Wait") can be used to delay the state machine from continuing for a specified time.
 *
 * @see https://states-language.net/#wait-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-wait-state.html
 */
export type Wait =
    & {
        Type: "Wait";
        Comment?: string;

        // Common fields
        QueryLanguage?: QueryLanguage;
        Assign?: AssignmentObject;

        // JSONata style fields
        Output?: JSONataExpression;

        // JSONPath style fields
        InputPath?: Path | null;
        OutputPath?: Path | null;
    }
    & EndOrNext
    & WaitConfiguration;

export type WaitConfiguration =
    // JSONata style configurations
    | {
        Seconds: PositiveInteger | JSONataExpression;
        SecondsPath?: never;
        Timestamp?: never;
        TimestampPath?: never;
    }
    | {
        Seconds?: never;
        SecondsPath?: never;
        Timestamp: string | JSONataExpression;
        TimestampPath?: never;
    }
    // JSONPath style configurations
    | {
        Seconds?: never;
        SecondsPath: Path;
        Timestamp?: never;
        TimestampPath?: never;
    }
    | {
        Seconds?: never;
        SecondsPath?: never;
        Timestamp?: never;
        TimestampPath: Path;
    };
