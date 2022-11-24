// Type definitions for imapflow 1.0
// Project: https://imapflow.com/
// Definitions by: Jeffrey Ratton <https://github.com/jeffreyratton98>
//                 Martin Badin <https://github.com/martin-badin>
//                 Northern Star <https://github.com/grayson-code>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'stream';

export type Readable = import('stream').Readable;

export class ImapFlow extends EventEmitter {
    constructor(options: ImapFlowOptions);
    authenticated: string | boolean;
    capabilities: Map<string, (boolean|number)>;
    emitLogs: boolean;
    enabled: Set<string>;
    id: string;
    idling: boolean;
    mailbox: MailboxObject | boolean;
    secureConnection: boolean;
    serverInfo: IdInfoObject;
    usable: boolean;

    append(
        path: string,
        content: string | Buffer,
        flags?: string[],
        idate?: Date | string,
    ): Promise<AppendResonseObject>;

    connect(): Promise<void>;
    logout(): Promise<void>;
    close(): void;
    download(
        range: SequenceString,
        part?: string,
        options?: { uid?: boolean; maxBytes?: number, chunkSize?: number },
    ): Promise<DownloadObject>;

    getMailboxLock(path: string, options?: null | { readonly?: boolean }): Promise<MailboxLockObject>;

    getQuota(path: string): Promise<QuotaResponse | boolean>;

    idle(): Promise<boolean>;

    /**
     * @see {@link https://imapflow.com/module-imapflow-ImapFlow.html#list}
     */
    list(): Promise<ListResponse[]>;

    listTree(): Promise<ListTreeResponse>;

    mailboxClose(): Promise<boolean>;

    mailboxCreate(path: string | any[]): Promise<MailboxCreateResponse>;

    mailboxDelete(path: string | any[]): Promise<MailboxDeleteResponse>;

    mailboxOpen(path: string | any[], options?: { readOnly?: boolean }): Promise<MailboxObject>;

    mailboxRename(path: string | any[], newPath: string | any[]): Promise<MailboxRenameResponse>;

    mailboxSubscribe(path: string | any[]): Promise<boolean>;

    mailboxUnsubscribe(path: string | any[]): Promise<boolean>;

    messageCopy(
        range: SequenceString | number[] | SearchObject,
        destination: string,
        options?: { uid?: boolean },
    ): Promise<CopyResponseObject>;

    messageDelete(range: SequenceString | number[] | SearchObject, options?: { uid?: boolean }): Promise<boolean>;

    messageFlagsAdd(
        range: SequenceString | number[] | SearchObject,
        Array: string[],
        options?: { uid?: boolean; unchangedSince?: bigint; useLabels?: boolean },
    ): Promise<boolean>;

    messageFlagsRemove(
        range: SequenceString | number[] | SearchObject,
        Array: string[],
        options?: { uid?: boolean; unchangedSince?: bigint; useLabels?: boolean },
    ): Promise<boolean>;

    messageFlagsSet(
        range: SequenceString | number[] | SearchObject,
        Array: string[],
        options?: { uid?: boolean; unchangedSince?: bigint; useLabels?: boolean },
    ): Promise<boolean>;

    messageMove(
        range: SequenceString | number[] | SearchObject,
        destination: string,
        options?: { uid?: boolean },
    ): Promise<CopyResponseObject>;

    fetchOne(
        seq: SequenceString,
        query: FetchQueryObject,
        options?: {
            uid?: boolean;
        },
    ): Promise<FetchMessageObject>;

    noop(): Promise<void>;

    search(query: SearchObject, options?: { uid?: boolean }): Promise<number[]>;

    status(
        path: string,
        query: {
            messages: boolean;
            recent: boolean;
            uidNext: boolean;
            uidValidity: boolean;
            unseen: boolean;
            highestModseq: boolean;
        },
    ): Promise<StatusObject>;

    fetch(
        range: SequenceString | number[] | SearchObject,
        query: FetchQueryObject,
        options?: { uid?: boolean; changedSince: bigint },
    ): AsyncGenerator<FetchMessageObject, never, void>;
}

export interface ImapFlowOptions {
    host: string;
    port: number;
    auth: {
        user: string;
        pass?: string;
        accessToken?: string;
    };
    secure?: boolean;
    servername?: string;
    disableCompression?: boolean;
    clientInfo?: IdInfoObject;
    disableAutoIdle?: boolean;
    tls?: object;
    logger?: Logger | false;
    emitLogs?: boolean;
    verifyOnly?: boolean;
}

export interface AppendResonseObject {
    path: string;
    uidValidity?: bigint;
    uid?: number;
    seq?: number;
}

export interface CopyResponseObject {
    path: string;
    destination: string;
    uidValidity?: bigint;
    uidMap?: Map<number, number>;
}

export interface DownloadObject {
    content: Readable;
    meta: {
        expectedSize: number;
        contentType: string;
        charset?: string;
        disposition?: string;
        filename?: string;
    };
}

export interface MailboxObject {
    path: string;
    delimeter: string;
    flags: Set<string>;
    specialUse: string;
    listed: boolean;
    subscribed: boolean;
    permanentFlags: Set<string>;
    mailboxId: string;
    highestModseq: BigInt;
    uidValidity: BigInt;
    uidNext: number;
    exists: number;
}

export interface MailboxLockObject {
    path: string;
    release: () => void;
}

export interface FetchMessageObject {
    seq: number;
    uid: number;
    source: Buffer;
    modseq: BigInt;
    emailId: string;
    threadId: string;
    labels: Set<string>;
    size: number;
    flags: Set<string>;
    envelope: MessageEnvelopeObject;
    bodyStructure: MessageStructureObject;
    internalDate: Date;
    bodyParts: Map<string, Buffer>;
    headers: Buffer;
}

export interface FetchQueryObject {
    uid?: boolean;
    flags?: boolean;
    bodyStructure?: boolean;
    envelope?: boolean;
    internalDate?: boolean;
    size?: boolean;
    source?: boolean | object;
    threadId?: string;
    labels?: boolean;
    headers?: boolean | string[];
    bodyParts?: string[];
}

export interface MailboxRenameResponse {
    path: string;
    newPath: string;
}

export interface MessageAddressObject {
    name?: string;
    address?: string;
}

export interface MessageEnvelopeObject {
    date: Date;
    subject: string;
    messageId: string;
    inReplyTo: string;
    from: MessageAddressObject[];
    sender: MessageAddressObject[];
    replyTo: MessageAddressObject[];
    to: MessageAddressObject[];
    cc: MessageAddressObject[];
    bcc: MessageAddressObject[];
}

export interface QuotaResponse {
    path: string;
    storage?: object;
    messages?: object;
}

export type SequenceString = string;

export interface SearchObject {
    seq?: SequenceString;
    answered?: boolean;
    deleted?: boolean;
    draft?: boolean;
    flagged?: boolean;
    seen?: boolean;
    all?: boolean;
    new?: boolean;
    old?: boolean;
    recent?: boolean;
    from?: string;
    to?: string;
    cc?: string;
    bcc?: string;
    body?: string;
    subject?: string;
    larger?: number;
    smaller?: number;
    uid?: SequenceString;
    modseq?: bigint;
    emailId?: string;
    threadId?: string;
    before?: Date | string;
    on?: Date | string;
    since?: Date | string;
    sentBefore?: Date | string;
    sentOn?: Date | string;
    sentSince?: Date | string;
    keyword?: string;
    unKeyword?: string;
    header?: { [key: string]: boolean | string };
    or?: SearchObject[];
}

export interface StatusObject {
    path: string;
    message?: number;
    recent?: number;
    uid?: number;
    uidValidity?: bigint;
    unseen?: number;
    highestModSeq?: bigint;
}

export interface IdInfoObject {
    name?: string;
    version?: string;
    os?: string;
    vendor?: string;
    ' support-url '?: string;
    date?: Date;
}

export interface ListResponse {
    path: string;
    name: string;
    delimiter: string;
    flags: Set<string>;
    specialUse: string;
    listed: boolean;
    subscribed: boolean;
}

export interface ListTreeResponse {
    root: boolean;
    path: string;
    name: string;
    delimiter: string;
    flags: [];
    specialUse: string;
    listed: boolean;
    subscribed: boolean;
    disabled: boolean;
    folders: ListTreeResponse[];
}

export interface MailboxCreateResponse {
    path: string;
    mailboxId?: string;
    created: boolean;
}

export interface MailboxDeleteResponse {
    path: string;
}

export interface MessageStructureObject {
    part: string;
    type: string;
    parameters: string;
    id: string;
    encoding: string;
    size: number;
    envelope: MessageEnvelopeObject;
    disposition: string;
    dispositionParameters: string;
    childNodes: MessageStructureObject[];
}

export interface Logger {
    debug: (obj: object) => void;
    info: (obj: object) => void;
    warn: (obj: object) => void;
    error: (obj: object) => void;
}
