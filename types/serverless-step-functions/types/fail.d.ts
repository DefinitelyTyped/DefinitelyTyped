import { IntrinsicFunction, JsonPath } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-fail-state.html
export interface Fail {
    Type: 'Fail';
    Comment?: string;
    Cause?: string;
    CausePath?: JsonPath | IntrinsicFunction;
    Error?: string;
    ErrorPath?: JsonPath | IntrinsicFunction;
}

export {};
