import { Catch, Retry } from './errors';
import { CommonState, IntrinsicFunction, JsonObject, JsonPath, PositiveInteger, Resource } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-task-state.html#task-state-fields
export interface Task extends CommonState {
    Type: 'Task';
    Resource: Resource;
    Parameters?: JsonObject;
    Credentials?: string | IntrinsicFunction | JsonPath;
    ResultPath?: JsonPath;
    ResultSelector?: JsonObject;
    Retry?: Retry[];
    Catch?: Catch[];
    TimeoutSeconds?: PositiveInteger;
    TimeoutSecondsPath?: JsonPath;
    HeartbeatSeconds?: PositiveInteger;
    HeartbeatSecondsPath?: JsonPath;
}

export {};
