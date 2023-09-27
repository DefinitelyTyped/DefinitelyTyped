import { Catch, Retry } from './errors';
import { EndOrNext, IntrinsicFunction, JsonObject, Path, PositiveInteger, ReferencePath, Resource } from './state';

/**
 * The Task State (identified by "Type":"Task") causes the interpreter to execute the work identified by the state’s "Resource" field.
 *
 * @see https://states-language.net/#task-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-task-state.html
 */
export type Task = {
    Type: 'Task';
    Comment?: string;
    InputPath?: Path;
    OutputPath?: Path;
    Resource: Resource;
    Parameters?: JsonObject;
    Credentials?: string | IntrinsicFunction | Path;
    ResultPath?: ReferencePath;
    ResultSelector?: JsonObject;
    Retry?: Retry[];
    Catch?: Catch[];
} & EndOrNext &
    TimeoutSeconds &
    HeartbeatSeconds;

type TimeoutSeconds =
    | {
          TimeoutSeconds?: PositiveInteger;
          TimeoutSecondsPath?: never;
      }
    | {
          TimeoutSeconds?: never;
          TimeoutSecondsPath?: ReferencePath;
      };

type HeartbeatSeconds =
    | {
          HeartbeatSeconds?: PositiveInteger;
          HeartbeatSecondsPath?: never;
      }
    | {
          HeartbeatSeconds?: never;
          HeartbeatSecondsPath?: ReferencePath;
      };

export {};
