import { CommonState, IntrinsicFunction, JsonPath } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-fail-state.html
interface Fail extends Omit<CommonState, 'Next' | 'End'> {
    Type: 'Fail';
    Cause?: string;
    CausePath?: JsonPath | IntrinsicFunction;
    Error?: string;
    ErrorPath?: JsonPath | IntrinsicFunction;
}
