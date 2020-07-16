import { EventEmitter } from "events";
import { Readable } from "stream";

import { Message, Ack, MessageCallback, SendOptions } from "./Client";
import ConnectFailover = require("./ConnectFailover");
import Transaction = require("./client/Transaction");

declare class Channel extends EventEmitter {
    constructor(connectFailover: ConnectFailover, options?: Channel.ChannelOptions);

    send(headers: any, body: Channel.Body, callback?: (err: Error | null) => void): this;

    subscribe(headers: any, onMessageCallback: (err: Error | null, message: Message, channelSubscription: Channel.ChannelSubscription) => void): Channel.ChannelSubscription;
    setImplicitSubscription(id: number, ack?: Ack, msgListener?: MessageCallback): Channel.ChannelSubscription;

    ack(message: Message, headers?: any, sendOptions?: SendOptions, callback?: (error?: Error | null) => void): void;
    nack(message: Message, headers?: any, sendOptions?: SendOptions, callback?: (error?: Error | null) => void): void;

    begin(headers?: any): Transaction;
    close(error: Error): void;

    isEmpty(): boolean;

    lock(): void;
    unlock(): void;
}

export = Channel;

declare namespace Channel {
    interface ChannelOptions {
        alwaysConnected?: boolean;
        recoverAfterApplicationError?: boolean;
    }

    type Body = string | Buffer | (() => Readable);

    interface ChannelSubscription {
        cancel(): void;
        unsubscribe(): void;
    }
}
