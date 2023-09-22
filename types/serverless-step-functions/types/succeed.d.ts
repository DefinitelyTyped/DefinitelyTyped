import { CommonState } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-succeed-state.html
export interface Succeed extends Omit<CommonState, 'Next' | 'End'> {
    Type: 'Succeed';
}

export {};
