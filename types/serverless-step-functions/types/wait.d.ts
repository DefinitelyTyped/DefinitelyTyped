import { CommonState, JsonPath, PositiveInteger } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-wait-state.html
export interface Wait extends CommonState {
    Type: 'Wait';
    Seconds?: PositiveInteger;
    Timestamp?: string;
    SecondsPath?: JsonPath;
    TimestampPath?: JsonPath;
}

export {};
