import { EndOrNext, Path, PositiveInteger } from "./state";

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
        InputPath?: Path | null;
        OutputPath?: Path | null;
    }
    & EndOrNext
    & SecondsOrTimestamp;

export type SecondsOrTimestamp =
    | {
        Seconds?: PositiveInteger;
        SecondsPath?: never;
        Timestamp?: never;
        TimestampPath?: never;
    }
    | {
        Seconds?: never;
        SecondsPath?: Path;
        Timestamp?: never;
        TimestampPath?: never;
    }
    | {
        Seconds?: never;
        SecondsPath?: never;
        Timestamp?: string;
        TimestampPath?: never;
    }
    | {
        Seconds?: never;
        SecondsPath?: never;
        Timestamp?: never;
        TimestampPath?: Path;
    };
