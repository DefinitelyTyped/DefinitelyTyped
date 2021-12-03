import { AWSClient, EventBridge, EventBridgeClass } from 'sls-test-tools';

const lambda = new AWSClient.Lambda();
let eventBridge: EventBridgeClass;

describe('Integration Testing Event Bridge', () => {
    beforeAll(async () => {
        eventBridge = await EventBridge.build('client');
    });

    afterAll(async () => {
        await eventBridge.destroy();
    });

    it('correctly publishes an event to the event bus when the lambda is invoked', async () => {
        const event = {
            attribute: 'value',
        };

        // Invoke Lambda Function
        const params = {
            FunctionName: 'client-api-dev-dunction',
            Payload: JSON.stringify(event),
        };
        await lambda.invoke(params).promise();

        const eventBridgeEvents = await eventBridge.getEvents();

        expect(eventBridgeEvents).toHaveEvent();
        expect(eventBridgeEvents).toHaveEventWithSource('api');
    });
});
