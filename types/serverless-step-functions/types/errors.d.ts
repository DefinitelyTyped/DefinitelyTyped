import { JsonPath, PositiveInteger } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html#error-handling-error-representation
type Errors =
    | string
    | 'States.ALL'
    | 'States.HeartbeatTimeout'
    | 'States.Timeout'
    | 'States.TaskFailed'
    | 'States.Permissions'
    | 'States.ResultPathMatchFailure'
    | 'States.ParameterPathFailure'
    | 'States.BranchFailed'
    | 'States.NoChoiceMatched'
    | 'States.IntrinsicFailure';

// https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html#error-handling-fallback-states
type Catch = {
    ErrorEquals: Errors[];
    Next: string;
    ResultPath?: JsonPath;
};

// https://docs.aws.amazon.com/step-functions/latest/dg/concepts-error-handling.html#error-handling-retrying-after-an-error
type Retry = {
    ErrorEquals: Errors[];
    IntervalSeconds?: PositiveInteger;
    MaxAttempts?: PositiveInteger;
    BackoffRate?: number;
    MaxDelaySeconds?: PositiveInteger;
    JitterStrategy?: 'FULL' | 'NONE';
};
