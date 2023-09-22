import { JsonPath, PositiveInteger } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-wait-state.html
export interface Wait {
    Type: 'Wait';
    Next?: string;
    End?: boolean;
    Comment?: string;
    InputPath?: JsonPath;
    OutputPath?: JsonPath;
    Seconds?: PositiveInteger;
    Timestamp?: string;
    SecondsPath?: JsonPath;
    TimestampPath?: JsonPath;
}

export {};
