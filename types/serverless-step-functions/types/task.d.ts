import { Catch, Retry } from "./errors";
import {
    AssignmentObject,
    EndOrNext,
    IntrinsicFunction,
    JSONataExpression,
    JsonObject,
    Path,
    PositiveInteger,
    QueryLanguage,
    ReferencePath,
    Resource,
} from "./state";

/**
 * The Task State (identified by "Type":"Task") causes the interpreter to execute the work identified by the state's "Resource" field.
 *
 * @see https://states-language.net/#task-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-task-state.html
 */
export type Task =
    & {
        Type: "Task";
        Resource: Resource;
        Comment?: string;
        // Common fields
        QueryLanguage?: QueryLanguage;
        Assign?: AssignmentObject;

        // JSONata style fields
        Arguments?: JSONataExpression;
        Output?: JSONataExpression;

        // JSONPath style fields
        InputPath?: Path | null;
        OutputPath?: Path | null;
        Parameters?: JsonObject;
        ResultPath?: ReferencePath | null;
        ResultSelector?: JsonObject;

        // Other fields
        Credentials?: string | IntrinsicFunction | Path;
        Retry?: Retry[];
        Catch?: Catch[];
    }
    & EndOrNext
    & TimeoutSeconds
    & HeartbeatSeconds;

export type TimeoutSeconds =
    | {
        TimeoutSeconds?: PositiveInteger | JSONataExpression;
        TimeoutSecondsPath?: never;
    }
    | {
        TimeoutSeconds?: never;
        TimeoutSecondsPath?: ReferencePath;
    };

export type HeartbeatSeconds =
    | {
        HeartbeatSeconds?: PositiveInteger | JSONataExpression;
        HeartbeatSecondsPath?: never;
    }
    | {
        HeartbeatSeconds?: never;
        HeartbeatSecondsPath?: ReferencePath;
    };
