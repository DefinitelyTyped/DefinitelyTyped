import { IntrinsicFunction, JSONataExpression, QueryLanguage, ReferencePath } from "./state";

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

        // Common fields
        QueryLanguage?: QueryLanguage;
    }
    & ErrorConfig
    & CauseConfig;

// Error configuration
export type ErrorConfig =
    | {
        Error?: string | JSONataExpression;
        ErrorPath?: never;
    }
    | {
        Error?: never;
        ErrorPath?: ReferencePath | IntrinsicFunction;
    };

// Cause configuration
export type CauseConfig =
    | {
        Cause?: string | JSONataExpression;
        CausePath?: never;
    }
    | {
        Cause?: never;
        CausePath?: ReferencePath | IntrinsicFunction;
    };
