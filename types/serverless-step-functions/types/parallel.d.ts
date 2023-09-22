import { Catch, Retry } from './errors';
import { CommonState, JsonObject, JsonPath, State } from './state';

type Branch = {
    StartAt: string;
    States: {
        [state: string]: State;
    };
    Comment?: string;
};

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-parallel-state.html
interface Parallel extends CommonState {
    Type: 'Parallel';
    Branches: Branch[];
    ResultPath?: JsonPath;
    ResultSelector?: JsonObject;
    Retry: Retry[];
    Catch: Catch[];
}
