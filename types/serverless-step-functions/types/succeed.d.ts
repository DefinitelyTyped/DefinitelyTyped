import { Path } from "./state";

/**
 * The Succeed State (identified by "Type":"Succeed") either terminates a state machine successfully, ends a branch of a Parallel State, or ends an iteration of a Map State. The output of a Succeed State is the same as its input, possibly modified by "InputPath" and/or "OutputPath".
 * The Succeed State is a useful target for Choice-State branches that don't do anything except terminate the machine.
 *
 * @see https://states-language.net/#succeed-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-succeed-state.html
 */
export interface Succeed {
    Type: "Succeed";
    Comment?: string;
    InputPath?: Path | null;
    OutputPath?: Path | null;
}
