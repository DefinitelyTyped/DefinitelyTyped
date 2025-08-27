import { EventEmitter } from "events";

import { Channel } from "./channel";
import { Connection } from "./connection";
import { Record } from "./record";
import { Topic } from "./topic";

export interface StreamingMessage {
    event: {
        type: string;
        createdDate: string;
        replayId?: number | undefined;
    };
    sobject: Record;
}

export class Streaming extends EventEmitter {
    constructor(connection: Connection);

    channel(channelId: string): Channel;
    subscribe(name: string, listener: StreamingMessage): any; // Faye Subscription
    topic(name: string): Topic;
    unsubscribe(name: string, listener: StreamingMessage): Streaming;
    createClient(extensions?: any[]): any; // Faye Client
}

export namespace StreamingExtension {
    export class Replay {
        constructor(channel: string, replayId: number);
    }
    export class AuthFailure {
        constructor(failureCallback: () => any);
    }
}
