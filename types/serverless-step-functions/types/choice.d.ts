import { Path } from "./state";

export interface ChoiceRuleComparison {
    Variable: string;
    BooleanEquals?: boolean;
    BooleanEqualsPath?: Path;
    IsBoolean?: boolean;
    IsNull?: boolean;
    IsNumeric?: boolean;
    IsPresent?: boolean;
    IsString?: boolean;
    IsTimestamp?: boolean;
    NumericEquals?: number;
    NumericEqualsPath?: Path;
    NumericGreaterThan?: number;
    NumericGreaterThanPath?: Path;
    NumericGreaterThanEquals?: number;
    NumericGreaterThanEqualsPath?: Path;
    NumericLessThan?: number;
    NumericLessThanPath?: Path;
    NumericLessThanEquals?: number;
    NumericLessThanEqualsPath?: Path;
    StringEquals?: string;
    StringEqualsPath?: Path;
    StringGreaterThan?: string;
    StringGreaterThanPath?: Path;
    StringGreaterThanEquals?: string;
    StringGreaterThanEqualsPath?: Path;
    StringLessThan?: string;
    StringLessThanPath?: Path;
    StringLessThanEquals?: string;
    StringLessThanEqualsPath?: Path;
    StringMatches?: string;
    TimestampEquals?: string;
    TimestampEqualsPath?: Path;
    TimestampGreaterThan?: string;
    TimestampGreaterThanPath?: Path;
    TimestampGreaterThanEquals?: string;
    TimestampGreaterThanEqualsPath?: Path;
    TimestampLessThan?: string;
    TimestampLessThanPath?: Path;
    TimestampLessThanEquals?: string;
    TimestampLessThanEqualsPath?: Path;
}

export interface ChoiceRuleNot {
    Not: ChoiceRuleComparison;
    Next: string;
    Comment?: string;
}

export interface ChoiceRuleAnd {
    And: ChoiceRuleComparison[];
    Next: string;
    Comment?: string;
}

export interface ChoiceRuleOr {
    Or: ChoiceRuleComparison[];
    Next: string;
    Comment?: string;
}

export interface ChoiceRuleSimple extends ChoiceRuleComparison {
    Next: string;
    Comment?: string;
}

export type ChoiceRule = ChoiceRuleSimple | ChoiceRuleNot | ChoiceRuleAnd | ChoiceRuleOr;

/**
 * The Choice State (identified by "Type":"Choice") adds branching logic to a state machine.
 *
 * @see https://states-language.net/#choice-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-choice-state.html
 */
export interface Choice {
    Type: "Choice";
    Choices: ChoiceRule[];
    Comment?: string;
    InputPath?: Path | null;
    OutputPath?: Path | null;
    Default?: string;
}
