import { AssignmentObject, JSONataExpression, Path, QueryLanguage } from "./state";

// JSONPath style choice rules
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

// JSONata style choice rule
export interface JSONataChoiceRule {
    Condition: boolean | JSONataExpression;
    Next: string;
    Comment?: string;
    Assign?: AssignmentObject;
    Output?: JSONataExpression;
}

// JSONPath style choice rules
export interface ChoiceRuleNot {
    Not: ChoiceRuleComparison;
    Next: string;
    Comment?: string;
    Assign?: AssignmentObject;
    Output?: JSONataExpression;
}

export interface ChoiceRuleAnd {
    And: ChoiceRuleComparison[];
    Next: string;
    Comment?: string;
    Assign?: AssignmentObject;
    Output?: JSONataExpression;
}

export interface ChoiceRuleOr {
    Or: ChoiceRuleComparison[];
    Next: string;
    Comment?: string;
    Assign?: AssignmentObject;
    Output?: JSONataExpression;
}

export interface ChoiceRuleSimple extends ChoiceRuleComparison {
    Next: string;
    Comment?: string;
    Assign?: AssignmentObject;
    Output?: JSONataExpression;
}

export type ChoiceRule = JSONataChoiceRule | ChoiceRuleSimple | ChoiceRuleNot | ChoiceRuleAnd | ChoiceRuleOr;

/**
 * The Choice State (identified by "Type":"Choice") adds branching logic to a state machine.
 *
 * @see https://states-language.net/#choice-state
 * @see https://docs.aws.amazon.com/step-functions/latest/dg/amazon-states-language-choice-state.html
 */
export interface Choice {
    Type: "Choice";
    Comment?: string;
    Choices: ChoiceRule[];
    Default?: string;

    // Common fields
    QueryLanguage?: QueryLanguage;
    Assign?: AssignmentObject;

    // JSONata style fields
    Output?: JSONataExpression;

    // JSONPath style fields
    InputPath?: Path | null;
    OutputPath?: Path | null;
}
