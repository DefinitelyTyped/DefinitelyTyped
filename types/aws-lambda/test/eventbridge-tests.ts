import { EventBridgeHandler, EventBridgeEvent, Handler } from 'aws-lambda';

const voidHandler: EventBridgeHandler<string, { message: string }, void> = async (event, context, callback) => {
    const { message } = event.detail;

    const detailType = event['detail-type'];
};

const notVoidHandler: EventBridgeHandler<
    'com.acme.customEvent1' | 'com.acme.customEvent2',
    { message: string },
    { sentence: string; receivedMessage: string }
> = async (event, context, callback) => {
    const { message } = event.detail;

    switch (event['detail-type']) {
        case 'com.acme.customEvent1':
            return { sentence: 'A great custom event 1', receivedMessage: message };
        case 'com.acme.customEvent2':
            return { sentence: 'A great custom event 2', receivedMessage: message };
        default:
            throw new Error('Unexpected: ' + event['detail-type']);
    }
};

const event: EventBridgeEvent<string, { TestValue: string }> = {
    version: '0',
    id: '5a6adfad-1e1d-abe0-ffab-cb99acf3159b',
    'detail-type': 'ApiKeyGenerated',
    source: 'subscription.apikeys',
    account: 'theAccount',
    time: '2020-03-31T01:07:37Z',
    region: 'eu-west-1',
    resources: [],
    detail: {
        TestValue: 'aTestValue',
    },
};

const nestedJsonEvent: EventBridgeEvent<string, { nested: { TestValue: string } }> = {
    version: '0',
    id: '5a6adfad-1e1d-abe0-ffab-cb99acf3159b',
    'detail-type': 'ApiKeyGenerated',
    source: 'subscription.apikeys',
    account: 'theAccount',
    time: '2020-03-31T01:07:37Z',
    region: 'eu-west-1',
    resources: [],
    detail: {
        nested: {
            TestValue: 'aTestValue',
        },
    },
};

// Multiple events handler;

type Event01 = EventBridgeEvent<'event01', { detailProp1: string }>;
type Event02 = EventBridgeEvent<'event02', { detailProp2: string }>;

type MultiEventHandler = Handler<Event01 | Event02, { success: boolean }>;
