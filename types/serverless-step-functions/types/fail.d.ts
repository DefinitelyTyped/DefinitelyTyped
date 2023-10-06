import { IntrinsicFunction, Path, ReferencePath } from "./state";

/**
 * The Fail State (identified by "Type":"Fail") terminates the state machine and marks it as a failure.
 *
 * @see https://states-language.net/#fail-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-fail-state.html
 */
export type Fail =
    & {
        Type: "Fail";
        Comment?: string;
    }
    & Cause
    & Error;

export type Cause =
    | {
        Cause?: string;
        CausePath?: never;
    }
    | {
        Cause?: never;
        CausePath?: ReferencePath | IntrinsicFunction;
    };

export type Error =
    | {
        Error?: string;
        ErrorPath?: never;
    }
    | {
        Error?: never;
        ErrorPath?: ReferencePath | IntrinsicFunction;
    };
