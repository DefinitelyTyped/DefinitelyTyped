import { CommonState, JsonPath } from './state';

interface ChoiceRuleComparison {
    Variable: string;
    BooleanEquals?: boolean;
    BooleanEqualsPath?: JsonPath;
    IsBoolean?: boolean;
    IsNull?: boolean;
    IsNumeric?: boolean;
    IsPresent?: boolean;
    IsString?: boolean;
    IsTimestamp?: boolean;
    NumericEquals?: number;
    NumericEqualsPath?: JsonPath;
    NumericGreaterThan?: number;
    NumericGreaterThanPath?: JsonPath;
    NumericGreaterThanEquals?: number;
    NumericGreaterThanEqualsPath?: JsonPath;
    NumericLessThan?: number;
    NumericLessThanPath?: JsonPath;
    NumericLessThanEquals?: number;
    NumericLessThanEqualsPath?: JsonPath;
    StringEquals?: string;
    StringEqualsPath?: JsonPath;
    StringGreaterThan?: string;
    StringGreaterThanPath?: JsonPath;
    StringGreaterThanEquals?: string;
    StringGreaterThanEqualsPath?: JsonPath;
    StringLessThan?: string;
    StringLessThanPath?: JsonPath;
    StringLessThanEquals?: string;
    StringLessThanEqualsPath?: JsonPath;
    StringMatches?: string;
    TimestampEquals?: string;
    TimestampEqualsPath?: JsonPath;
    TimestampGreaterThan?: string;
    TimestampGreaterThanPath?: JsonPath;
    TimestampGreaterThanEquals?: string;
    TimestampGreaterThanEqualsPath?: JsonPath;
    TimestampLessThan?: string;
    TimestampLessThanPath?: JsonPath;
    TimestampLessThanEquals?: string;
    TimestampLessThanEqualsPath?: JsonPath;
}

interface ChoiceRuleNot {
    Not: ChoiceRuleComparison;
    Next: string;
    Comment?: string;
}

interface ChoiceRuleAnd {
    And: ChoiceRuleComparison[];
    Next: string;
    Comment?: string;
}

interface ChoiceRuleOr {
    Or: ChoiceRuleComparison[];
    Next: string;
    Comment?: string;
}

interface ChoiceRuleSimple extends ChoiceRuleComparison {
    Next: string;
    Comment?: string;
}

type ChoiceRule = ChoiceRuleSimple | ChoiceRuleNot | ChoiceRuleAnd | ChoiceRuleOr;

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-choice-state.html
export interface Choice extends CommonState {
    Type: 'Choice';
    Choices: ChoiceRule[];
    Default?: string;
}

export {};
