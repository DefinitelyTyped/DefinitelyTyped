// Type definitions for sls-test-tools x.x
// Project: https://github.com/Theodo-UK/sls-test-tools (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: StanHannebelle <https://github.com/StanHannebelle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as AWS from 'aws-sdk';

declare module 'sls-test-tools' {

    export class EventBridgeClass {
        constructor();
        destroy: () => Promise<boolean>;
        getEvents: () => Promise<AWS.SQS.ReceiveMessageResult>;
    }

    export const AWSClient: typeof AWS;
    export const EventBridge: {
        build: (eventBridgeName: string) => Promise<EventBridgeClass>;
    };
}

declare global {
    namespace jest {
        interface Matchers<R> {
            toHaveEvent(): R;
            toHaveEventWithSource(source: string): R;
        }
    }
}

