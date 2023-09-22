import { CommonState, JsonPath } from './state';

type ChoiceRuleComparison = {
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
};

type ChoiceRuleNot = {
    Not: ChoiceRuleComparison;
    Next: string;
    Comment?: string;
};

type ChoiceRuleAnd = {
    And: ChoiceRuleComparison[];
    Next: string;
    Comment?: string;
};

type ChoiceRuleOr = {
    Or: ChoiceRuleComparison[];
    Next: string;
    Comment?: string;
};

type ChoiceRuleSimple = ChoiceRuleComparison & {
    Next: string;
    Comment?: string;
};

type ChoiceRule = ChoiceRuleSimple | ChoiceRuleNot | ChoiceRuleAnd | ChoiceRuleOr;

// https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-choice-state.html
interface Choice extends CommonState {
    Type: 'Choice';
    Choices: ChoiceRule[];
    Default?: string;
}
