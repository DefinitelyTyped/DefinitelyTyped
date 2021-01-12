// Type definitions for imap-simple v4.2.0
// Project: https://github.com/chadxz/imap-simple
// Definitions by: Jeffery Grajkowski <https://github.com/pushplay>
//                 Ilari Aarnio <https://github.com/iaarnio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import Imap = require("imap");
import { EventEmitter } from 'events';

export interface ImapSimpleOptions {
    /** Options to pass to node-imap constructor. */
    imap: Imap.Config;

    /** Time in milliseconds to wait before giving up on a connection attempt. (Deprecated: please use options.imap.authTimeout instead) */
    connectTimeout?: number;

    /** Server event emitted when new mail arrives in the currently open mailbox. */
    onmail?: (numNewMail: number) => void;

    /** Server event emitted when a message was expunged externally. seqno is the sequence number (instead of the unique UID) of the message that was expunged. If you are caching sequence numbers, all sequence numbers higher than this value MUST be decremented by 1 in order to stay synchronized with the server and to keep correct continuity. */
    onexpunge?: (seqno: number) => void;

    /** Server event emitted when message metadata (e.g. flags) changes externally. */
    onupdate?: (seqno: number, info: any) => void;
}

export interface MessageBodyPart extends Imap.ImapMessageBodyInfo {
    /** string type where which=='TEXT', complex Object where which=='HEADER' */
    body: any;
}

export interface Message {
    attributes: Imap.ImapMessageAttributes;
    parts: MessageBodyPart[];
    seqno: number;
}

export class ImapSimple extends EventEmitter {
    constructor(imap: Imap);

    /** Open a mailbox, calling the provided callback with signature (err, boxName), or resolves the returned promise with boxName. */
    openBox(boxName: string, callback: (err: Error, boxName: string) => void): void;
    openBox(boxName: string): Promise<string>;

    /** Create a mailbox, calling the provided callback with signature (err, boxName), or resolves the returned promise with boxName. */
    addBox(boxName: string, callback: (err: Error, boxName: string) => void): void;
    addBox(boxName: string): Promise<string>;

    /** Delete a mailbox, calling the provided callback with signature (err, boxName), or resolves the returned promise with boxName. */
    delBox(boxName: string, callback: (err: Error, boxName: string) => void): void;
    delBox(boxName: string): Promise<string>;

    /** Returns the full list of mailboxes (folders). Upon success, either the provided callback will be called with signature (err, boxes), or the returned promise will be resolved with boxes. Boxes is the exact object returned from the node-imap getBoxes() result. */
    getBoxes(callback: (err: Error, boxes: Imap.MailBoxes) => void): void;
    getBoxes(): Promise<Imap.MailBoxes>;

    /** Search for and retrieve mail in the currently open mailbox. */
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

    /** Appends the argument message to the currently open mailbox or another mailbox. Message is a RFC-822 compatible MIME message. Valid options are mailbox, flags and date. When completed, either calls the provided callback with signature (err), or resolves the returned promise. */
    append(message: any, options: Imap.AppendOptions, callback: (err: Error) => void): void;
    append(message: any, options: Imap.AppendOptions): Promise<void>;

    /** Moves the specified message(s) in the currently open mailbox to another mailbox. source corresponds to a node-imap MessageSource which specifies the messages to be moved. When completed, either calls the provided callback with signature (err), or resolves the returned promise. */
    moveMessage(source: string | string[], boxName: string, callback: (err: Error) => void): void;
    moveMessage(source: string | string[], boxName: string): Promise<void>;

    /** Adds the provided flag(s) to the specified message(s). uid is the uid of the message you want to add the flag to or an array of uids. flag is either a string or array of strings indicating the flags to add. */
    addFlags(source: number | number[], flag: string | string[], callback: (err: Error) => void): void;
    addFlags(source: number | number[], flag: string | string[]): Promise<void>;

    /** Removes the provided flag(s) from the specified message(s). uid is the uid of the message you want to remove the flag from or an array of uids. flag is either a string or array of strings indicating the flags to remove. */
    delFlags(uid: number | number[], flag: string | string[], callback: (err: Error) => void): void;
    delFlags(uid: number | number[], flag: string | string[]): Promise<void>;

    /** Deletes the specified message(s). uid is the uid of the message you want to add the flag to or an array of uids. */
    deleteMessage(uid: number | number[], callBack: (err: Error) => void): void;
    deleteMessage(uid: number | number[]): Promise<void>;

    /** Close a mailbox, calling the provided callback with signature (err), or resolves the returned promise. If autoExpunge is true, any messages marked as Deleted in the currently open mailbox will be removed. */
    closeBox(autoExpunge: boolean, callBack: (err: Error) => void): void;
    closeBox(autoExpunge: boolean): Promise<void>;
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
