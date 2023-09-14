// Type definitions for serverless-step-functions 3.14.0
// Project: https://github.com/serverless-operations/serverless-step-functions
// Definitions by: Chris Cook <https://github.com/zirkelc>
//                 Enric Bisbe Gil <https://github.com/ebisbe>
import type { AwsResourceDependsOn, AwsResourceTags } from '@serverless/typescript';

/**
 * Types for serverless-step-functions plugin for Serverless Framework.
 * This package uses module augmentation to extend the existing types
 * from @serverless/typescript.
 *
 * ```
 * import type { AWS } from '@serverless/typescript';
 *
 * const serverlessConfiguration: AWS = {
 *   service: 'aws-nodejs-typescript',
 *   frameworkVersion: '*',
 *   provider: {
 *     name: 'aws',
 *     runtime: 'nodejs12.x',
 *   },
 *   stepFunctions: {
 *     stateMachines: {
 *       helloWorldStepFunction: {
 *         name: '${self:service}-helloWorldStepFunction-${sls:stage}',
 *         definition: {
 *           // <your definition>
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 * @see https://github.com/serverless/typescript
 * @see https://github.com/serverless-operations/serverless-step-functions
 */

declare module '@serverless/typescript' {
    interface AWS {
        stepFunctions?: {
            stateMachines: StateMachines;
            validate?: boolean;
            noOutput?: boolean;
        };
    }
}

declare module 'serverless-step-functions' {
    interface StepFunctions {
        stateMachines: StateMachines;
        validate?: boolean;
        noOutput?: boolean;
    }
}

type StateMachines = {
    [stateMachine: string]: StateMachine;
};

export type StateMachine = {
    type?: 'STANDARD' | 'EXPRESS';
    id?: string;
    name?: string;
    definition: Definition;
    tracingConfig?: TracingConfig;
    loggingConfig?: LoggingConfig;
    events?: any[];
    dependsOn?: AwsResourceDependsOn;
    tags?: AwsResourceTags;
};

type LoggingConfig = {
    level: 'ERROR' | 'ALL' | 'FATAL' | 'OFF';
    includeExecutionData: boolean;
    destinations: Resource | Resource[];
};

type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [member: string]: JSONValue };
interface JSONArray extends Array<JSONValue> {}
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

type Selector = string | Record<string, unknown>;

type Input = {
    'AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID.$'?: string;
} & Record<string, any>;

type ResultSelector = Record<string, any>;

type Parameter = {
    'Payload.$'?: string;
    Input?: Input;
    FunctionName?: string;
    StateMachineArn?: string;
} & {
    [selector: string]: Selector;
};

type TracingConfig = {
    enabled: boolean;
};

type Definition = {
    Comment?: string;
    StartAt: string;
    States: States;
    ProcessorConfig?: {
        Mode: 'INLINE' | 'DISTRIBUTED';
    };
};

type States = {
    [state: string]: Choice | Fail | Map | Task | Parallel | Pass | Wait | Succeed;
};

type StateBase = {
    Catch?: Catcher[];
    Retry?: Retrier[];
    End?: boolean;
    InputPath?: string;
    Next?: string;
    OutputPath?: string;
    ResultPath?: string | null;
    ResultSelector?: { [key: string]: string | { [key: string]: string } };
    Type: string;
    Comment?: string;
};

type ChoiceRuleComparison = {
    Variable: string;
    BooleanEquals?: boolean;
    BooleanEqualsPath?: string;
    IsBoolean?: boolean;
    IsNull?: boolean;
    IsNumeric?: boolean;
    IsPresent?: boolean;
    IsString?: boolean;
    IsTimestamp?: boolean;
    NumericEquals?: number;
    NumericEqualsPath?: string;
    NumericGreaterThan?: number;
    NumericGreaterThanPath?: string;
    NumericGreaterThanEquals?: number;
    NumericGreaterThanEqualsPath?: string;
    NumericLessThan?: number;
    NumericLessThanPath?: string;
    NumericLessThanEquals?: number;
    NumericLessThanEqualsPath?: string;
    StringEquals?: string;
    StringEqualsPath?: string;
    StringGreaterThan?: string;
    StringGreaterThanPath?: string;
    StringGreaterThanEquals?: string;
    StringGreaterThanEqualsPath?: string;
    StringLessThan?: string;
    StringLessThanPath?: string;
    StringLessThanEquals?: string;
    StringLessThanEqualsPath?: string;
    StringMatches?: string;
    TimestampEquals?: string;
    TimestampEqualsPath?: string;
    TimestampGreaterThan?: string;
    TimestampGreaterThanPath?: string;
    TimestampGreaterThanEquals?: string;
    TimestampGreaterThanEqualsPath?: string;
    TimestampLessThan?: string;
    TimestampLessThanPath?: string;
    TimestampLessThanEquals?: string;
    TimestampLessThanEqualsPath?: string;
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

interface Choice extends StateBase {
    Type: 'Choice';
    Choices: ChoiceRule[];
    Default?: string;
}

interface Fail extends StateBase {
    Type: 'Fail';
    Cause?: string;
    Error?: string;
}

interface Map extends StateBase {
    Type: 'Map';
    ItemsPath?: string;
    Iterator: Definition;
    ItemSelector?: {
        [key: string]: string;
    };
    MaxConcurrency?: number;
    Parameters?: {
        [key: string]: string;
    };
}

type Resource = string | { 'Fn::GetAtt': [string, 'Arn'] } | { 'Fn::Join': [string, Resource[]] };

interface TaskParametersForLambda {
    FunctionName?: Resource;
    Payload?: {
        'token.$': string;
        [key: string]: string;
    };
    [key: string]: unknown;
}

interface TaskParametersForStepFunction {
    StateMachineArn: Resource;
    Input?: {
        'AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID.$': '$$.Execution.Id';
        [key: string]: string;
    };
    Retry?: [{ ErrorEquals?: string[] }];
    End?: boolean;
}

// https://docs.aws.amazon.com/step-functions/latest/dg/connect-sns.html
interface TaskParametersForSNS {
    TopicArn: Ref | string;
    Message?: string;
    Subject?: string;
    // 'Message.$': '$.input.message';
    MessageAttributes?: Record<string, any>;
}

interface Task extends StateBase {
    Type: 'Task';
    Resource: Resource;
    Parameters?:
        | TaskParametersForLambda
        | TaskParametersForStepFunction
        | TaskParametersForSNS
        | { [key: string]: string | { [key: string]: string } };
}

interface Pass extends StateBase {
    Type: 'Pass';
    Parameters?: JSONObject;
    Result?: JSONValue;
    ResultPath?: string;
}

interface Parallel extends StateBase {
    Type: 'Parallel';
    Branches: Definition[];
}

interface Wait extends StateBase {
    Type: 'Wait';
    Next?: string;
    Seconds: number;
}

interface Succeed extends StateBase {
    Type: 'Succeed';
}

type Catcher = {
    ErrorEquals: ErrorName[];
    Next: string;
    ResultPath?: string;
};

type Retrier = {
    ErrorEquals: string[];
    IntervalSeconds?: number;
    MaxAttempts?: number;
    BackoffRate?: number;
};

type ErrorName =
    | 'States.ALL'
    | 'States.DataLimitExceeded'
    | 'States.Runtime'
    | 'States.Timeout'
    | 'States.TaskFailed'
    | 'States.Permissions'
    | string;

type Ref = {
    Ref: string;
};
