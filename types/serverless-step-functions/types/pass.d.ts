import { JsonObject, JsonPath, JsonValue } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-pass-state.html
export interface Pass {
    Type: 'Pass';
    Next?: string;
    End?: boolean;
    Comment?: string;
    InputPath?: JsonPath;
    OutputPath?: JsonPath;
    Result?: JsonValue;
    ResultPath?: JsonPath;
    Parameters?: JsonObject;
}

export {};
