declare namespace XSockets {
    export class WebSocket {
        id: string;
        constructor(url: string, subprotocol?: string, settings?: any);
        on(event: string, handler: (data: any) => void, confirmation?: (arg: ConfirmationArgument) => void): void;
        one(event: string, handler: (data: any) => void, confirmation?: (arg: ConfirmationArgument) => void): void;
        many(
            event: string,
            times: number,
            handler: (data: any) => void,
            confirmation?: (arg: ConfirmationArgument) => void,
        ): void;
        unbind(event: string): void;
        publish(topic: string, data: any): void;
    }
    export interface ConfirmationArgument {
        event: string;
    }
    export namespace Events {
        export var close: string;
        export var onBlob: string;
        export var onError: string;
        export namespace bindings {
            export var completed: string;
        }
        export var open: string;
        export namespace pubSub {
            export var subscribe: string;
            export var unsubscribe: string;
        }
        export namespace storage {
            export var get: string;
            export var getAll: string;
            export var remove: string;
            export var set: string;
        }
    }
}
