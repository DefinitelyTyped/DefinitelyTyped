import { JsonPath } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-succeed-state.html
export interface Succeed {
    Type: 'Succeed';
    Comment?: string;
    InputPath?: JsonPath;
    OutputPath?: JsonPath;
}

export {};
