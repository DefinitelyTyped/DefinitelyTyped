import { Ack, MessageCallback } from "../Client";
import { Readable, Writable } from "stream";

import Client = require("../Client");

declare class Subscription {
    constructor(id: number, ack: Ack, onMessageCallback: MessageCallback, client: Client);

    getId(): number;
    processMessageFrame(error: Error | null, frame: Writable): void;
    unsubscribe(headers?: any): void;
}

export = Subscription;
