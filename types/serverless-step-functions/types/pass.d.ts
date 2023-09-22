import { CommonState, JsonObject, JsonPath, JsonValue } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-pass-state.html
interface Pass extends CommonState {
    Type: 'Pass';
    Result?: JsonValue;
    ResultPath?: JsonPath;
    Parameters?: JsonObject;
}
