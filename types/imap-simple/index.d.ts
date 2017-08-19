// Type definitions for imap-simple v1.6.3
// Project: https://github.com/chadxz/imap-simple
// Definitions by: Jeffery Grajkowski <https://github.com/pushplay/>
// Definitions: https://github.com/psnider/DefinitelyTyped/imap-simple

import Imap = require("imap");

export interface ImapSimpleOptions {
    /** Options to pass to node-imap constructor. */
    imap: Imap.Config;

    /** Time in milliseconds to wait before giving up on a connection attempt. (Deprecated: please use options.imap.authTimeout instead) */
    connectTimeout?: number;
}

export interface MessageBodyPart extends Imap.ImapMessageBodyInfo {
    /** string type where which=='TEXT', complex Object where which=='HEADER' */
    body: any;
}

export interface Message {
    attributes: Imap.ImapMessageAttributes;
    parts: MessageBodyPart[];
}

export class ImapSimple {
    constructor(imap: Imap);

    /** Open a mailbox, calling the provided callback with signature (err, boxName), or resolves the returned promise with boxName. */
    openBox(boxName: string, callback: (err: Error, boxName: string) => void): void;
    openBox(boxName: string): Promise<string>;

    /** Search for and retrieve mail in the previously opened mailbox. */
    search(searchCriteria: any[], fetchOptions: Imap.FetchOptions, callback: (err: Error, messages: Message[]) => void): void;
    search(searchCriteria: any[], fetchOptions: Imap.FetchOptions): Promise<Message[]>;

    /** Close the connection to the imap server. */
    end(): void;

    /** Downloads part data (which is either part of the message body, or an attachment). Upon success, either the provided callback will be called with signature (err, data), or the returned promise will be resolved with data. The data will be automatically decoded based on its encoding. If the encoding of the part is not supported, an error will occur. */
    getPartData(message: Message, part: any, callback: (err: Error, data: any) => void): void;
    getPartData(message: Message, part: any): Promise<any>;

    /** Adds the provided label(s) to the specified message(s). source corresponds to a node-imap MessageSource which specifies the messages to be moved. label is either a string or array of strings indicating the labels to add. When completed, either calls the provided callback with signature (err), or resolves the returned promise. */
    addMessageLabel(source: string | string[], label: string | string[], callback: (err: Error) => void): void;
    addMessageLabel(source: string | string[], label: string | string[]): Promise<void>;

    /** Moves the specified message(s) in the currently open mailbox to another mailbox. source corresponds to a node-imap MessageSource which specifies the messages to be moved. When completed, either calls the provided callback with signature (err), or resolves the returned promise. */
    moveMessage(source: string | string[], boxName: string, callback: (err: Error) => void): void;
    moveMessage(source: string | string[], boxName: string): Promise<void>;
}

export namespace errors {
    /** Error thrown when a connection attempt has timed out. */
    export class ConnectionTimeoutError extends Error {
        timeout: number;
        constructor(timeout: number);
    }
}


/** Main entry point. Connect to an Imap server. */
export function connect(options: ImapSimpleOptions, callback: (err: Error, connection: ImapSimple) => void): void;
export function connect(options: ImapSimpleOptions): Promise<ImapSimple>;

/** Given the message.attributes.struct, retrieve a flattened array of parts objects that describe the structure of the different parts of the message's body. Useful for getting a simple list to iterate for the purposes of, for example, finding all attachments. */
export function getParts(struct: any[]): any[];
