import { PositiveInteger, ReferencePath } from "./state";

// https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html#error-handling-error-representation
export type Errors =
    | string
    | "States.ALL"
    | "States.HeartbeatTimeout"
    | "States.Timeout"
    | "States.TaskFailed"
    | "States.Permissions"
    | "States.ResultPathMatchFailure"
    | "States.ParameterPathFailure"
    | "States.BranchFailed"
    | "States.NoChoiceMatched"
    | "States.IntrinsicFailure";

// https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html#error-handling-fallback-states
export interface Catch {
    ErrorEquals: Errors[];
    Next: string;
    ResultPath?: ReferencePath | null;
}

// https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html#error-handling-retrying-after-an-error
export interface Retry {
    ErrorEquals: Errors[];
    IntervalSeconds?: PositiveInteger;
    MaxAttempts?: PositiveInteger;
    BackoffRate?: number;
    MaxDelaySeconds?: PositiveInteger;
    JitterStrategy?: "FULL" | "NONE";
}
