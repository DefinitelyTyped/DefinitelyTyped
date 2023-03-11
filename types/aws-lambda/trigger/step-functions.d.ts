import { EventBridgeEvent } from './eventbridge';

export type StepFunctionsExecutionStatus = 'RUNNING' | 'SUCCEEDED' | 'FAILED' | 'TIMED_OUT' | 'ABORTED';

export interface StepFunctionsExecutionStateChangeEventDetail<
    Status extends StepFunctionsExecutionStatus = StepFunctionsExecutionStatus,
> {
    executionArn: string;
    stateMachineArn: string;
    name: string;
    status: Status;
    startDate: number;
    stopDate: null | number;
    input: string;
    inputDetails: null | Partial<{ included: boolean }>;
    output: null | string;
    outputDetails: null | Partial<{ included: boolean }>;
}

export type StepFunctionsExecutionStatusChangeEvent = EventBridgeEvent<
    'Step Functions Execution Status Change',
    StepFunctionsExecutionStateChangeEventDetail
>;
