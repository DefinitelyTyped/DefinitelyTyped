/// <reference types="node" />

import type { EventEmitter } from "events";

/** Represents the content of a message */
export interface Argument {
    type: string;

    value: boolean | number | string;
}

export type ArgumentType = boolean | number | string | Argument;

export interface RequestInfo {
    address: string;
    family: string;
    port: number;
    size: number;
}

/**
 * A message that can be sent over OSC
 */
export class Message {
    constructor(address: string, ...args: ArgumentType[]);

    append(arg: ArgumentType | ArgumentType[]): void;
}

/** Something that is or can be converted to a Message */
export type MessageLike =
    | [string, ...ArgumentType[]]
    | {
        address: string;

        args: ArgumentType[];
    };

/**
 * An OSC Bundle message
 *
 * @warning Bundle support is Experimental and subject to change at any point.
 *
 * @see https://github.com/MylesBorins/node-osc#sending-osc-bundles
 */
export class Bundle {
    constructor(...elements: MessageLike[]);
    constructor(timetag: number, ...elements: MessageLike[]);

    append(element: MessageLike | Bundle): void;

    timetag: number;

    elements: Message[];
}

export type ClientSendCallback = (err: Error | null) => void;

export type ClientCloseCallback = () => void;

/**
 * A client to send messages to an OSC server
 */
export class Client {
    constructor(host: string, port: number);

    /** Close the underlying socket */
    close(cb?: ClientCloseCallback): void;

    /** Send a message to the server */
    send(addressOrMessage: string | Message | MessageLike): void;
    send(address: string, ...args: [...Array<Message | MessageLike>, ClientSendCallback]): void;
    send(...args: [...Array<Message | MessageLike>, ClientSendCallback]): void;

    /** Send a Bundle message to the server */
    send(bundle: Bundle, callback?: ClientSendCallback): void;
}

export type ServerCallback = () => void;

export type ServerBundleListener = (bundle: Bundle) => void;

export type ServerErrorListner = (error: Error) => void;

export type ServerMessageListener = (message: [string, ...ArgumentType[]], rinfo: RequestInfo) => void;

/**
 * A server to handle OSC messages
 */
export class Server extends EventEmitter {
    constructor(port: number, host: string, cb?: ServerCallback);

    close(cb?: ServerCallback): void;

    /** Listen for the listening event emitted as soon as the server is ready to receive messages */
    on(event: "listening", listener: () => void): this;

    /**
     * Listen for all the bundles received by the server.
     *
     * @warning Bundle support is Experimental and subject to change at any point.
     *
     * @see https://github.com/MylesBorins/node-osc#listening-for-osc-bundles
     */
    on(event: "bundle", listener: ServerBundleListener): this;

    /** Listen for errors occurred during message decoding */
    on(event: "error", listener: ServerErrorListner): this;

    /** Listen for all the messages received by the server or for a specific address */
    on(event: "message" | string, listener: ServerMessageListener): this;
}
