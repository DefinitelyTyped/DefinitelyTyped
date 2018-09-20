import { WritableOptions, Writable, Readable, Duplex } from "stream";
import { IncomingFrame } from "./IncomingFrameStream";
import { SocketOptions } from "./Socket";

import IncomingFrameStream = require("./IncomingFrameStream");
import Socket = require("./Socket");
import Subscription = require("./client/Subscription");
import Transaction = require("./client/Transaction");

declare class Client extends Socket {
    constructor(transportSocket: Duplex, options?: SocketOptions);

    send(headers?: any, options?: Client.SendOptions): Writable;
    sendFrame(command: string, headers?: any, options?: Client.SendOptions): Writable;
    sendString(headers?: any, body?: any, options?: Client.SendOptions, callback?: (error?: Error | null) => void): void;

    connect(headers?: any, callback?: (err: Error | null, client: Client) => void): void;
    disconnect(callback?: (error: Error | null, client: Client) => void): void;

    subscribe(headers?: any, messageListener?: Client.MessageCallback): Subscription;
    setImplicitSubscription(id: number, ack?: Client.Ack, messageListener?: Client.MessageCallback): Subscription;
    getSubscription(id: number): Subscription;

    begin(headers?: any): Transaction;

    ack(message: Client.Message, headers?: any, sendOptions?: Client.SendOptions, callback?: (error?: Error | null) => void): void;
    nack(message: Client.Message, headers?: any, sendOptions?: Client.SendOptions, callback?: (error?: Error | null) => void): void;

    readEmptyBody(frame: IncomingFrameStream, callback?: (client: Client) => void): void;

    getOptions(): SocketOptions;
}

export = Client;

declare namespace Client {
    interface Message extends IncomingFrame {
        ack(): void;
        nack(): void;
    }

    type MessageCallback = (err: Error | null, message: Message) => void;

    interface SendOptions extends WritableOptions {
        onReceipt(): void;
        onError(err: Error): void;
    }

    type Ack = "auto" | "client" | "client-individual";
}
