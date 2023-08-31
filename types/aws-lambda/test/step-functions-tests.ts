import type { StepFunctionsExecutionStatusChangeEvent, SFNEventHandler, Context, Callback } from 'aws-lambda';
import type { AssertExtends } from './util';

const executionStartedEvent: StepFunctionsExecutionStatusChangeEvent = {
    version: '0',
    id: '315c1398-40ff-a850-213b-158f73e60175',
    'detail-type': 'Step Functions Execution Status Change',
    source: 'aws.states',
    account: '012345678912',
    time: '2019-02-26T19:42:21Z',
    region: 'us-east-1',
    resources: ['arn:aws:states:us-east-1:012345678912:execution:state-machine-name:execution-name'],
    detail: {
        executionArn: 'arn:aws:states:us-east-1:012345678912:execution:state-machine-name:execution-name',
        stateMachineArn: 'arn:aws:states:us-east-1:012345678912:stateMachine:state-machine',
        name: 'execution-name',
        status: 'RUNNING',
        startDate: 1551225271984,
        stopDate: null,
        input: '{}',
        inputDetails: {
            included: true,
        },
        output: null,
        outputDetails: null,
    },
};

const executionSucceededEvent: StepFunctionsExecutionStatusChangeEvent = {
    version: '0',
    id: '315c1398-40ff-a850-213b-158f73e60175',
    'detail-type': 'Step Functions Execution Status Change',
    source: 'aws.states',
    account: '012345678912',
    time: '2019-02-26T19:42:21Z',
    region: 'us-east-1',
    resources: ['arn:aws:states:us-east-1:012345678912:execution:state-machine-name:execution-name'],
    detail: {
        executionArn: 'arn:aws:states:us-east-1:012345678912:execution:state-machine-name:execution-name',
        stateMachineArn: 'arn:aws:states:us-east-1:012345678912:stateMachine:state-machine',
        name: 'execution-name',
        status: 'SUCCEEDED',
        startDate: 1547148840101,
        stopDate: 1547148840122,
        input: '{}',
        inputDetails: {
            included: true,
        },
        output: '"Hello World!"',
        outputDetails: {
            included: true,
        },
    },
};

const executionFailedEvent: StepFunctionsExecutionStatusChangeEvent = {
    version: '0',
    id: '315c1398-40ff-a850-213b-158f73e60175',
    'detail-type': 'Step Functions Execution Status Change',
    source: 'aws.states',
    account: '012345678912',
    time: '2019-02-26T19:42:21Z',
    region: 'us-east-1',
    resources: ['arn:aws:states:us-east-1:012345678912:execution:state-machine-name:execution-name'],
    detail: {
        executionArn: 'arn:aws:states:us-east-1:012345678912:execution:state-machine-name:execution-name',
        stateMachineArn: 'arn:aws:states:us-east-1:012345678912:stateMachine:state-machine',
        name: 'execution-name',
        status: 'FAILED',
        startDate: 1551225146847,
        stopDate: 1551225151881,
        input: '{}',
        inputDetails: {
            included: true,
        },
        output: null,
        outputDetails: null,
    },
};

const executionTimedOutEvent: StepFunctionsExecutionStatusChangeEvent = {
    version: '0',
    id: '315c1398-40ff-a850-213b-158f73e60175',
    'detail-type': 'Step Functions Execution Status Change',
    source: 'aws.states',
    account: '012345678912',
    time: '2019-02-26T19:42:21Z',
    region: 'us-east-1',
    resources: ['arn:aws:states:us-east-1:012345678912:execution:state-machine-name:execution-name'],
    detail: {
        executionArn: 'arn:aws:states:us-east-1:012345678912:execution:state-machine-name:execution-name',
        stateMachineArn: 'arn:aws:states:us-east-1:012345678912:stateMachine:state-machine',
        name: 'execution-name',
        status: 'TIMED_OUT',
        startDate: 1551224926156,
        stopDate: 1551224927157,
        input: '{}',
        inputDetails: {
            included: true,
        },
        output: null,
        outputDetails: null,
    },
};

const executionAbortedEvent: StepFunctionsExecutionStatusChangeEvent = {
    version: '0',
    id: '315c1398-40ff-a850-213b-158f73e60175',
    'detail-type': 'Step Functions Execution Status Change',
    source: 'aws.states',
    account: '012345678912',
    time: '2019-02-26T19:42:21Z',
    region: 'us-east-1',
    resources: ['arn:aws:states:us-east-1:012345678912:execution:state-machine-name:execution-name'],
    detail: {
        executionArn: 'arn:aws:states:us-east-1:012345678912:execution:state-machine-name:execution-name',
        stateMachineArn: 'arn:aws:states:us-east-1:012345678912:stateMachine:state-machine',
        name: 'execution-name',
        status: 'ABORTED',
        startDate: 1551225014968,
        stopDate: 1551225017576,
        input: '{}',
        inputDetails: {
            included: true,
        },
        output: null,
        outputDetails: null,
    },
};

type SFNEventHandlerTestResult = { msg: string };
const sfnEventHandler: SFNEventHandler<SFNEventHandlerTestResult> = async (event, context, callback) => {
    type EventTypeTest = AssertExtends<typeof event, StepFunctionsExecutionStatusChangeEvent>;
    type ContextTypeTest = AssertExtends<typeof context, Context>;
    type CallbackTypeTest = AssertExtends<typeof callback, Callback>;
    return { msg: 'test' };
};
