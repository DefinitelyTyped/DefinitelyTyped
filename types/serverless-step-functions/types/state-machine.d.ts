import { PositiveInteger, State } from './state';

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-state-machine-structure.html
type StateMachineDefinition = {
    StartAt: string;
    States: {
        [state: string]: State;
    };
    Comment?: string;
    Version?: string;
    TimeoutSeconds?: PositiveInteger;
};
