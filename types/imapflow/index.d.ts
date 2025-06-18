/// <reference types="node" />

import { EventEmitter, Readable } from "node:stream";

export class ImapFlow extends EventEmitter {
    constructor(options: ImapFlowOptions);
    /**
     * Currently authenticated user or `false` if mailbox is not open or `true` if connection was authenticated by PREAUTH.
     */
    authenticated: string | boolean;
    /**
     * Active IMAP capabilities. Value is either `true` for taggable capabilities (eg. UIDPLUS) or a number for capabilities with a value (eg. APPENDLIMIT).
     */
    capabilities: Map<string, (boolean | number)>;
    /**
     * Enabled capabilities.
     * Usually CONDSTORE and UTF8=ACCEPT if server supports these.
     */
    enabled: Set<string>;
    /**
     * Instance ID for logs.
     */
    id: string;
    /**
     * Is current mailbox idling (`true`) or not (`false`).
     */
    idling: boolean;
    /**
     * Currently selected mailbox or `false` if mailbox is not open.
     */
    mailbox: MailboxObject | boolean;
    /**
     * Is the connection currently encrypted or not.
     */
    secureConnection: boolean;
    /**
     * Server identification info. Available after successful connect().
     * If server does not provide identification info then this value is `null`.
     */
    serverInfo: IdInfoObject;
    /**
     * Is the connection currently usable or not.
     */
    usable: boolean;
    /**
     * Current module version as a static class property.
     */
    version: string;

    /**
     * Appends a new message to a mailbox.
     * @param path Mailbox path to upload the message to (unicode string).
     * @param content RFC822 formatted email message.
     * @param flags An array of flags to be set for the uploaded message.
     * @param idate  Internal date to be set for the message. Defaults to `now`
     */
    append(
        path: string,
        content: string | Buffer,
        flags?: Flag[],
        idate?: Date | string,
    ): Promise<AppendResponseObject>;
    /**
     * Initiates a connection against IMAP server.
     *
     * Throws if anything goes wrong.
     *
     * This is something you have to call before you can run any IMAP commands.
     */
    connect(): Promise<void>;
    /**
     * Graceful connection close by sending logout command to server.
     *
     * TCP connection is closed once command is finished.
     */
    logout(): Promise<void>;
    /**
     * Closes TCP connection without notifying the server.
     */
    close(): void;
    /**
     * Download either full rfc822 formatted message or a specific bodystructure part as a Stream.
     *
     * Bodystructure parts are decoded so the resulting stream is a binary file.
     *
     * Text content is automatically converted to UTF-8 charset.
     * @param range UID or sequence number for the message to fetch.
     * @param part If not set then downloads entire rfc822 formatted message, otherwise downloads specific bodystructure part.
     * @param options.uid If set then limits download size to specified bytes.
     * @param options.maxBytes If set then limits download size to specified bytes.
     * @param options.maxBytes How large content parts to ask from the server (in bytes). Defaults to `65,536`
     */
    download(
        range: SequenceString,
        part?: string,
        options?: {
            uid?: boolean;
            maxBytes?: number;
            chunkSize?: number;
        },
    ): Promise<DownloadObject>;

    /**
     * Fetch multiple attachments as an object with `part` as key and `DownloadManyObject` as the value.
     * @param range UID or sequence number for the message to fetch.
     * @param parts A list of bodystructure parts.
     * @param options.uid If `true` then uses UID number instead of sequence number for range.
     */
    downloadMany(
        range: SequenceString,
        parts: string[],
        options?: {
            uid?: boolean;
        },
    ): Promise<{ [key: string]: DownloadManyObject }>;

    /**
     * Opens a mailbox if not already open and returns a lock.
     *
     * Next call to `getMailboxLock()` is queued until previous lock is released.
     *
     * This is suggested over `mailboxOpen()` as `getMailboxLock()` gives you a weak
     * transaction while `mailboxOpen()` has no guarantees whatsoever that another mailbox is opened
     * while you try to call multiple fetch or store commands.
     * @param path Path for the mailbox to open
     * @param options.readonly If `true` then opens mailbox in read-only mode. You can still try to perform write operations but these would probably fail. Defaults to `false`.
     */
    getMailboxLock(path: string, options?: { readonly?: boolean }): Promise<MailboxLockObject>;

    /**
     * Returns current quota.
     * @param path Optional mailbox path if you want to check quota for specific folder
     */
    getQuota(path?: string): Promise<QuotaResponse | boolean>;

    /**
     * Starts listening for new or deleted messages from the currently opened mailbox.
     *
     * Only required if ImapFlow#disableAutoIdle is set to `true` otherwise IDLE is started by default on connection inactivity.
     *
     * **NB!** If idle() is called manually then it does not return until IDLE is finished which means you would have to call some other command out of scope.
     */
    idle(): Promise<boolean>;

    /**
     * Lists available mailboxes as an Array
     * @param options.statusQuery Request status items for every listed entry
     * @param options.specialUseHints Set specific paths as special use folders, this would override special use flags provided from the server
     */
    list(options?: {
        statusQuery?: StatusQuery;
        specialUseHints?: SpecialUseHints;
    }): Promise<ListResponse[]>;

    /**
     * Lists available mailboxes as a tree structured object
     */
    listTree(): Promise<ListTreeResponse>;

    /**
     * Closes a previously opened mailbox.
     */
    mailboxClose(): Promise<boolean>;

    /**
     * Creates a new mailbox folder and sets up subscription for the created mailbox.
     * @param path Full mailbox path. Unicode is allowed. If value is an array then it is joined using current delimiter symbols. Namespace prefix is added automatically if required.
     */
    mailboxCreate(path: string | any[]): Promise<MailboxCreateResponse>;

    /**
     * Deletes a mailbox.
     * @param path Path for the mailbox to delete. Unicode is allowed. If value is an array then it is joined using current delimiter symbols. Namespace prefix is added automatically if required.
     */
    mailboxDelete(path: string | any[]): Promise<MailboxDeleteResponse>;

    /**
     * Opens a mailbox to access messages.
     *
     * You can perform message operations only against an opened mailbox.
     *
     * Using getMailboxLock() instead of mailboxOpen() is preferred.
     *
     * Both do the same thing but next getMailboxLock() call is not executed until previous one is released.
     * @param path Path for the mailbox to open
     * @param options.readonly If `true` then opens mailbox in read-only mode. You can still try to perform write operations but these would probably fail. Defaults to `false`.
     */
    mailboxOpen(path: string | any[], options?: { readOnly?: boolean }): Promise<MailboxObject>;

    /**
     * Renames a mailbox.
     * @param path Path for the mailbox to rename. Unicode is allowed. If value is an array then it is joined using current delimiter symbols. Namespace prefix is added automatically if required.
     * @param newPath New path for the mailbox
     */
    mailboxRename(path: string | any[], newPath: string | any[]): Promise<MailboxRenameResponse>;

    /**
     * Subscribes to a mailbox.
     * @param path Path for the mailbox to subscribe to. Unicode is allowed. If value is an array then it is joined using current delimiter symbols. Namespace prefix is added automatically if required.
     */
    mailboxSubscribe(path: string | any[]): Promise<boolean>;

    /**
     * Unsubscribes from a mailbox.
     * @param path Path for the mailbox to unsubscribe from. Unicode is allowed. If value is an array then it is joined using current delimiter symbols. Namespace prefix is added automatically if required.
     */
    mailboxUnsubscribe(path: string | any[]): Promise<boolean>;

    /**
     * Copies messages from current mailbox to destination mailbox.
     * @param range Range of messages to copy.
     * @param destination Mailbox path to copy the messages to.
     * @param options.uid If `true` then uses UID SequenceString instead of sequence numbers.
     */
    messageCopy(
        range: SequenceString | number[] | SearchObject,
        destination: string,
        options?: { uid?: boolean },
    ): Promise<CopyResponseObject>;

    /**
     * Delete messages from the currently opened mailbox.
     *
     * Method does not indicate info about deleted messages, instead you should be using ImapFlow#expunge event for this.
     * @param range Range to filter the messages.
     * @param options.uid If `true` then uses UID SequenceString instead of sequence numbers.
     */
    messageDelete(range: SequenceString | number[] | SearchObject, options?: { uid?: boolean }): Promise<boolean>;

    /**
     * Adds flags for a message or message range.
     * @param range Range to filter the messages.
     * @param flagsToAdd Array of flags to set. Only flags that are permitted to set are used, other flags are ignored.
     * @param options.uid If `true` then uses UID SequenceString instead of sequence numbers.
     * @param options.unchangedSince If set then only messages with a lower or equal modseq value are updated. Ignored if server does not support CONDSTORE extension.
     * @param options.useLabels If `true` then update Gmail labels instead of message flags. Defaults to `false`.
     */
    messageFlagsAdd(
        range: SequenceString | number[] | SearchObject,
        flagsToAdd: Flag[],
        options?: { uid?: boolean; unchangedSince?: bigint; useLabels?: boolean },
    ): Promise<boolean>;

    /**
     * Remove specific flags from a message or message range.
     * @param range Range to filter the messages.
     * @param flagsToRemove Array of flags to remove. Only flags that are permitted to set are used, other flags are ignored.
     * @param options.uid If `true` then uses UID SequenceString instead of sequence numbers.
     * @param options.unchangedSince If set then only messages with a lower or equal modseq value are updated. Ignored if server does not support CONDSTORE extension.
     * @param options.useLabels If `true` then update Gmail labels instead of message flags.
     */
    messageFlagsRemove(
        range: SequenceString | number[] | SearchObject,
        flagsToRemove: Flag[],
        options?: { uid?: boolean; unchangedSince?: bigint; useLabels?: boolean },
    ): Promise<boolean>;

    /**
     * Sets flags for a message or message range.
     * @param range Range to filter the messages.
     * @param flagsToSet Array of flags to set. Only flags that are permitted to set are used, other flags are ignored.
     * @param options.uid If `true` then uses UID SequenceString instead of sequence numbers.
     * @param options.unchangedSince If set then only messages with a lower or equal modseq value are updated. Ignored if server does not support CONDSTORE extension.
     * @param options.useLabels If `true` then update Gmail labels instead of message flags.
     */
    messageFlagsSet(
        range: SequenceString | number[] | SearchObject,
        flagsToSet: Flag[],
        options?: { uid?: boolean; unchangedSince?: bigint; useLabels?: boolean },
    ): Promise<boolean>;

    /**
     * Moves messages from current mailbox to destination mailbox.
     * @param range Range of messages to move.
     * @param destination Mailbox path to move the messages to.
     * @param options.uid If `true` then uses UID SequenceString instead of sequence numbers.
     */
    messageMove(
        range: SequenceString | number[] | SearchObject,
        destination: string,
        options?: { uid?: boolean },
    ): Promise<CopyResponseObject>;

    /**
     * Fetch a single message from the currently opened mailbox.
     * @param seq Single UID or sequence number of the message to fetch for.
     * @param query Fetch query.
     * @param options.uid If `true` then uses UID number instead of sequence number for seq.
     * @param options.binary If `true` then requests a binary response if the server supports this. Defaults to `false`.
     */
    fetchOne(
        seq: SequenceString,
        query: FetchQueryObject,
        options?: {
            uid?: boolean;
            binary?: boolean;
        },
    ): Promise<FetchMessageObject>;

    /**
     * Performs a no-op call against server.
     */
    noop(): Promise<void>;

    /**
     * Search messages from the currently opened mailbox.
     * @param query Query to filter the messages
     * @param options.uid If `true` then returns UID numbers instead of sequence numbers
     */
    search(query: SearchObject, options?: { uid?: boolean }): Promise<number[]>;

    /**
     * Sets a colored flag for an email. Only supported by mail clients like `Apple Mail`.
     * @param range Range to filter the messages.
     * @param color The color to set.
     * @param options.uid If `true` then uses UID SequenceString instead of sequence numbers
     * @param options.unchangedSince If set then only messages with a lower or equal modseq value are updated. Ignored if server does not support CONDSTORE extension.
     */
    setFlagColor(
        range: SequenceString | number[] | SearchObject,
        color: Color,
        options?: { uid?: boolean; unchangedSince?: bigint },
    ): Promise<boolean>;

    /**
     * Requests the status of the indicated mailbox. Only requested status values will be returned.
     * @param path Mailbox path to check for (unicode string).
     * @param query.messages If `true` request count of messages.
     * @param query.recent If `true` request count of messages with \Recent tag.
     * @param query.uidNext If `true` request predicted next UID.
     * @param query.uidValidity If `true` request mailbox UIDVALIDITY value.
     * @param query.unseen If `true` request count of unseen messages.
     * @param query.highestModseq If `true` request last known modseq value.
     */
    status(
        path: string,
        query: {
            messages?: boolean;
            recent?: boolean;
            uidNext?: boolean;
            uidValidity?: boolean;
            unseen?: boolean;
            highestModseq?: boolean;
        },
    ): Promise<StatusObject>;

    /**
     * Fetch messages from the currently opened mailbox.
     * @param range Range of messages to fetch.
     * @param query Fetch query.
     * @param options.uid If `true` then uses UID numbers instead of sequence numbers for range.
     * @param options.changedSince If set then only messages with a higher modseq value are returned. Ignored if server does not support CONDSTORE extension.
     * @param options.binary If `true` then requests a binary response if the server supports this. Defaults to `false`
     */
    fetch(
        range: SequenceString | number[] | SearchObject,
        query: FetchQueryObject,
        options?: {
            uid?: boolean;
            changedSince?: bigint;
            binary?: boolean;
        },
    ): AsyncGenerator<FetchMessageObject, never, void>;

    /**
     * Fetch messages from the currently opened mailbox.
     *
     * This method will fetch all messages before resolving the promise, unlike .fetch(), which is an async generator.
     *
     * **Do not** use large ranges like 1:*, as this might exhaust all available memory if the mailbox contains a large number of emails.
     * @param range Range of messages to fetch.
     * @param query Fetch query.
     * @param options.uid If `true` then uses UID numbers instead of sequence numbers for range.
     * @param options.changedSince If set then only messages with a higher modseq value are returned. Ignored if server does not support CONDSTORE extension.
     * @param options.binary If `true` then requests a binary response if the server supports this. Defaults to `false`.
     */
    fetchAll(
        range: SequenceString | number[] | SearchObject,
        query: FetchQueryObject,
        options?: {
            uid?: boolean;
            changedSince?: bigint;
            binary?: boolean;
        },
    ): Promise<FetchMessageObject[]>;
}

export interface ImapFlowOptions {
    /**
     * Hostname of the IMAP server.
     */
    host: string;
    /**
     * Port number for the IMAP server.
     */
    port: number;
    auth: {
        user: string;
        pass?: string;
        accessToken?: string;
    };
    /**
     * If `true`, establishes the connection directly over TLS (commonly on port 993).
     *
     * If `false`, a plain (unencrypted) connection is used first and, if possible, the connection is upgraded to STARTTLS.
     * @default false
     */
    secure?: boolean;
    /**
     * Server name for SNI or when using an IP address as host.
     */
    servername?: string;
    /**
     * If `true`, the client does not attempt to use the COMPRESS=DEFLATE extension.
     * @default false
     */
    disableCompression?: boolean;
    /**
     * Client identification info sent to the server (via the ID command).
     */
    clientInfo?: IdInfoObject;
    /**
     * If `true`, do not start IDLE automatically. Useful when only specific operations are needed.
     * @default false
     */
    disableAutoIdle?: boolean;
    /**
     * Additional TLS options.
     */
    tls?: {
        /**
         * If `false`, allows self-signed or expired certificates.
         * @default true
         */
        rejectUnauthorized?: boolean;
        /**
         * Minimum accepted TLS version (e.g., 'TLSv1.2').
         * @default 'TLSv1.2'
         */
        minVersion?: string;
        /**
         * Minimum size (in bits) of the DH parameter for TLS connections.
         * @default 1024
         */
        minDHSize?: number;
    };
    /**
     * Custom logger instance with debug(obj), info(obj), warn(obj), and error(obj) methods.
     *
     * If `false`, logging is disabled.
     *
     * If not provided, ImapFlow logs to console in pino format.
     */
    logger?: Logger | false;
    /**
     * If `true`, emits 'log' events with the same data passed to the logger.
     * @default false
     */
    emitLogs?: boolean;
    /**
     * If `true`, disconnects after successful authentication without performing other actions.
     * @default false
     */
    verifyOnly?: boolean;
    /**
     * If `true`, logs all raw data (read and written) in base64 encoding.
     * You can pipe such logs to eerawlog command for readable output.
     * @default false
     */
    logRaw?: boolean;
    /**
     * Proxy URL. Supports HTTP CONNECT (http://, https://) and SOCKS (socks://, socks4://, socks5://).
     */
    proxy?: string;
    /**
     * If `true`, enables QRESYNC support so that EXPUNGE notifications include uid instead of seq.
     * @default false
     */
    qresync?: boolean;
    /**
     * If set, breaks and restarts IDLE every maxIdleTime milliseconds.
     */
    maxIdleTime?: number;
    /**
     * Command to use if the server does not support IDLE.
     * @default 'NOOP''
     */
    missingIdleCommand?: string;
    /**
     * If `true`, ignores the BINARY extension for FETCH and APPEND operations.
     * @default false
     */
    disableBinary?: boolean;
    /**
     * If `true`, do not automatically enable supported IMAP extensions.
     * @default false
     */
    disableAutoEnable?: boolean;
    /**
     * Maximum time (in milliseconds) to wait for the connection to establish.
     * @default 90000
     */
    connectionTimeout?: number;
    /**
     * Maximum time (in milliseconds) to wait for the server greeting after a connection is established.
     * @default 16000
     */
    greetingTimeout?: number;
    /**
     * Maximum period of inactivity (in milliseconds) before terminating the connection.
     * @default 300000
     */
    socketTimeout?: number;
    /**
     * Determines whether to upgrade the connection to TLS via STARTTLS.
     *
     * `true`: Start unencrypted and upgrade to TLS using STARTTLS before authentication.
     * The connection fails if the server does not support STARTTLS or the upgrade fails.
     * Note that `secure=true` combined with `doSTARTTLS=true` is invalid.
     *
     * `false`: Never use STARTTLS, even if the server advertises support. This is useful if the server has a broken TLS setup.
     * Combined with `secure=false`, this results in a fully unencrypted connection. Make sure you warn users about the security risks.
     *
     * `undefined`: If `secure=false`, attempt to upgrade to TLS via STARTTLS before authentication if the server supports it.
     * If not supported, continue unencrypted.
     *
     * This may expose the connection to a downgrade attack.
     * @default undefined
     */
    doSTARTTTLS?: boolean;
}

export interface AppendResponseObject {
    /**
     * Full mailbox path where the message was uploaded to.
     */
    destination: string;
    /**
     * Mailbox UIDVALIDITY if server has UIDPLUS extension enabled.
     */
    uidValidity?: bigint;
    /**
     * UID of the uploaded message if server has UIDPLUS extension enabled.
     */
    uid?: number;
    /**
     * Sequence number of the uploaded message if path is currently selected mailbox.
     */
    seq?: number;
}

export interface CopyResponseObject {
    /**
     * Path of source mailbox.
     */
    path: string;
    /**
     * Path of destination mailbox.
     */
    destination: string;
    /**
     * Destination mailbox UIDVALIDITY if server has UIDPLUS extension enabled.
     */
    uidValidity?: bigint;
    /**
     * Map of UID values (if server has UIDPLUS extension enabled) where key is UID in source mailbox
     * and value is the UID for the same message in destination mailbox.
     */
    uidMap?: Map<number, number>;
}

export interface DownloadObject {
    /**
     * Streamed content
     */
    content: Readable;
    /**
     * Content metadata
     */
    meta: {
        /**
         * The fetched response size.
         */
        expectedSize: number;
        /**
         * Content-Type of the streamed file.
         *
         * If part was not set then this value is "message/rfc822".
         */
        contentType: string;
        /**
         * Charset of the body part.
         *
         * Text parts are automatically converted to UTF-8, attachments are kept as is.
         */
        charset?: string;
        /**
         * Content-Disposition of the streamed file.
         */
        disposition?: string;
        /**
         * Encoding of the body part.
         */
        encoding?: string;
        flowed?: true;
        delSp?: true;
        /**
         * Filename of the streamed body part.
         */
        filename?: string;
    };
}

export interface DownloadManyObject {
    /**
     * Streamed content
     */
    content: Buffer;
    /**
     * Content metadata
     */
    meta: {
        /**
         * Content-Type of the Buffered file.
         */
        contentType?: string;
        /**
         * Charset of the Buffered file.
         */
        charset?: string;
        /**
         * Buffered file encoding.
         */
        encoding?: string;
        /**
         * Content-Disposition of the Buffered file.
         */
        disposition?: string;
        flowed?: true;
        delSp?: true;
        /**
         * Filename of the streamed Buffer.
         */
        filename?: string;
    };
}

export interface MailboxObject {
    /**
     * Mailbox path.
     */
    path: string;
    /**
     * Mailbox path delimiter, usually `.` or `/`.
     */
    delimiter: string;
    /**
     * List of flags for this mailbox.
     */
    flags: Set<Flag>;
    /**
     * One of special-use flags (if applicable): "\All", "\Archive", "\Drafts", "\Flagged", "\Junk", "\Sent", "\Trash". Additionally INBOX has non-standard "\Inbox" flag set.
     */
    specialUse?: Flag;
    /**
     * `true` if mailbox was found from the output of LIST command.
     */
    listed: boolean;
    /**
     * `true` if mailbox was found from the output of LSUB command.
     */
    subscribed: boolean;
    /**
     * A Set of flags available to use in this mailbox. If it is not set or includes special flag "\*" then any flag can be used.
     */
    permanentFlags: Set<Flag>;
    /**
     * Unique mailbox ID if server has OBJECTID extension enabled.
     */
    mailboxId?: string;
    /**
     * Latest known modseq value if server has CONDSTORE or XYMHIGHESTMODSEQ enabled.
     */
    highestModseq?: bigint;
    /**
     * If `true` then the server doesn't support the persistent storage of mod-sequences for the mailbox.
     */
    noModseq?: boolean;
    /**
     * Mailbox UIDVALIDITY value.
     */
    uidValidity: bigint;
    /**
     * Next predicted UID.
     */
    uidNext: number;
    /**
     * Messages in this folder.
     */
    exists: number;
}

export interface MailboxLockObject {
    /**
     * Mailbox path.
     */
    path: string;
    /**
     * Release current lock.
     */
    release: () => void;
}

export interface FetchMessageObject {
    /**
     * Message sequence number. Always included in the response
     */
    seq: number;
    /**
     * Message UID number. Always included in the response.
     */
    uid: number;
    /**
     * Message source for the requested byte range.
     */
    source?: Buffer;
    /**
     * Message Modseq number. Always included if the server supports CONDSTORE extension.
     */
    modseq?: bigint;
    /**
     * Unique email ID. Always included if server supports OBJECTID or X-GM-EXT-1 extensions.
     */
    emailId?: string;
    /**
     * Unique thread ID. Only present if server supports OBJECTID or X-GM-EXT-1 extension.
     */
    threadId?: string;
    /**
     * A Set of labels. Only present if server supports X-GM-EXT-1 extension.
     */
    labels?: Set<string>;
    /**
     * Message size.
     */
    size?: number;
    /**
     * A set of message flags.
     */
    flags?: Set<Flag>;
    /**
     * Flag color like "red", or "yellow". This value is derived from the flags Set and it uses the same color rules as `Apple Mail`.
     */
    flagColor?: Color;
    /**
     * Message envelope.
     */
    envelope?: MessageEnvelopeObject;
    /**
     * Message body structure.
     */
    bodyStructure?: MessageStructureObject;
    /**
     * Message internal date.
     */
    internalDate?: Date;
    /**
     * A Map of message body parts where key is requested part identifier and value is a Buffer.
     */
    bodyParts?: Map<string, Buffer>;
    /**
     * Requested header lines as Buffer.
     */
    headers?: Buffer;
}

export interface FetchQueryObject {
    /**
     * If `true` then include UID in the response.
     */
    uid?: boolean;
    /**
     * If `true` then include flags Set in the response. Also adds flagColor to the response If the message is flagged.
     */
    flags?: boolean;
    /**
     * If `true` then include parsed BODYSTRUCTURE object in the response.
     */
    bodyStructure?: boolean;
    /**
     * If `true` then include parsed ENVELOPE object in the response.
     */
    envelope?: boolean;
    /**
     * If `true` then include internal date value in the response.
     */
    internalDate?: boolean;
    /**
     * If `true` then include message size in the response.
     */
    size?: boolean;
    /**
     * If `true` then include full message in the response.
     * @param start include full message in the response starting from start byte.
     * @param maxLength include full message in the response, up to maxLength bytes.
     */
    source?: boolean | { start?: number; maxLength?: number };
    /**
     * If `true` then include thread ID in the response (only if server supports either OBJECTID or X-GM-EXT-1 extensions).
     */
    threadId?: boolean;
    /**
     * If `true` then include GMail labels in the response (only if server supports X-GM-EXT-1 extension).
     */
    labels?: boolean;
    /**
     * If `true` then includes full headers of the message in the response. If the value is an array of header keys then includes only headers listed in the array.
     */
    headers?: boolean | string[];
    /**
     * An array of BODYPART identifiers to include in the response.
     */
    bodyParts?: string[];
}

export interface MailboxRenameResponse {
    /**
     * Full mailbox path that was renamed.
     */
    path: string;
    /**
     * New full mailbox path.
     */
    newPath: string;
}

export interface MessageAddressObject {
    /**
     * Name of the address object (unicode).
     */
    name?: string;
    /**
     * Email address.
     */
    address?: string;
}

export interface MessageEnvelopeObject {
    /**
     * Header date.
     */
    date?: Date;
    /**
     * Message subject (unicode).
     */
    subject?: string;
    /**
     * Message ID of the message.
     */
    messageId?: string;
    /**
     * Message ID from In-Reply-To header.
     */
    inReplyTo?: string;
    /**
     * Array of addresses from the From: header.
     */
    from?: MessageAddressObject[];
    /**
     * Array of addresses from the Sender: header.
     */
    sender?: MessageAddressObject[];
    /**
     * Array of addresses from the Reply-To: header.
     */
    replyTo?: MessageAddressObject[];
    /**
     * Array of addresses from the To: header.
     */
    to?: MessageAddressObject[];
    /**
     * Array of addresses from the Cc: header.
     */
    cc?: MessageAddressObject[];
    /**
     * Array of addresses from the Bcc: header.
     */
    bcc?: MessageAddressObject[];
}

export interface QuotaResponse {
    /**
     * Mailbox path this quota applies to.
     * @default INBOX
     */
    path: string;
    /**
     * Storage quota if provided by server.
     */
    storage?: {
        /**
         * Used storage (in bytes).
         */
        used?: number;
        /**
         * Total storage available (in bytes).
         */
        limit?: number;
    };
    /**
     * Message count quota if provided by server.
     */
    messages?: {
        /**
         * Stored messages.
         */
        used?: number;
        /**
         * Maximum messages allowed.
         */
        limit?: number;
    };
}

/**
 * Sequence range string. Separate different values with commas, number ranges with colons and use \* as the placeholder for the newest message in mailbox.
 * @example
 * "1:*" // for all messages
 * "1,2,3" // for messages 1, 2 and 3
 * "1,2,4:6" // for messages 1,2,4,5,6
 * "*" // for the newest message
 */
export type SequenceString = string;

export interface SearchObject {
    /**
     * Message ordering sequence range.
     */
    seq?: SequenceString;
    /**
     * Messages with (value is `true`) or without (value is `false`) \Answered flag.
     */
    answered?: boolean;
    /**
     * Messages with (value is `true`) or without (value is `false`) \Deleted flag.
     */
    deleted?: boolean;
    /**
     * Messages with (value is `true`) or without (value is `false`) \Draft flag.
     */
    draft?: boolean;
    /**
     * Messages with (value is `true`) or without (value is `false`) \Flagged flag.
     */
    flagged?: boolean;
    /**
     * Messages with (value is `true`) or without (value is `false`) \Seen flag.
     */
    seen?: boolean;
    /**
     * If `true` matches all messages.
     */
    all?: boolean;
    /**
     * If `true` matches messages that have the \Recent flag set but not the \Seen flag.
     */
    new?: boolean;
    /**
     * If `true` matches messages that do not have the \Recent flag set.
     */
    old?: boolean;
    /**
     * If `true` matches messages that have the \Recent flag set.
     */
    recent?: boolean;
    /**
     * Matches From: address field.
     */
    from?: string;
    /**
     * Matches To: address field.
     */
    to?: string;
    /**
     * Matches Cc: address field.
     */
    cc?: string;
    /**
     * Matches Bcc: address field.
     */
    bcc?: string;
    /**
     * Matches message body.
     */
    body?: string;
    /**
     * Matches message subject.
     */
    subject?: string;
    /**
     * Matches messages larger than value.
     */
    larger?: number;
    /**
     * Matches messages smaller than value.
     */
    smaller?: number;
    /**
     * UID sequence range.
     */
    uid?: SequenceString;
    /**
     * Matches messages with modseq higher than value.
     */
    modseq?: bigint;
    /**
     * Unique email ID. Only used if server supports OBJECTID or X-GM-EXT-1 extensions.
     */
    emailId?: string;
    /**
     * Unique thread ID. Only used if server supports OBJECTID or X-GM-EXT-1 extensions.
     */
    threadId?: string;
    /**
     * Matches messages received before date.
     */
    before?: Date | string;
    /**
     * Matches messages received on date (ignores time).
     */
    on?: Date | string;
    /**
     * Matches messages received after date.
     */
    since?: Date | string;
    /**
     * Matches messages sent before date.
     */
    sentBefore?: Date | string;
    /**
     * Matches messages sent on date (ignores time).
     */
    sentOn?: Date | string;
    /**
     * Matches messages sent after date.
     */
    sentSince?: Date | string;
    /**
     * Matches messages that have the custom flag set.
     */
    keyword?: string;
    /**
     * Matches messages that do not have the custom flag set.
     */
    unKeyword?: string;
    /**
     * Matches messages with header key set if value is `true` (**NB!** not supported by all servers) or messages where header partially matches a string value.
     */
    header?: { [key: string]: boolean | string };
    /**
     * An array of 2 or more `SearchObject` objects. At least on of these must match.
     */
    or?: SearchObject[];
}

export interface StatusObject {
    /**
     * Full mailbox path that was checked.
     */
    path: string;
    /**
     * Count of messages.
     */
    messages?: number;
    /**
     * Count of messages with \Recent tag.
     */
    recent?: number;
    /**
     * Predicted next UID.
     */
    uidNext?: number;
    /**
     * Mailbox UIDVALIDITY value.
     */
    uidValidity?: bigint;
    /**
     * Count of unseen messages.
     */
    unseen?: number;
    /**
     * Last known modseq value (if CONDSTORE extension is enabled).
     */
    highestModseq?: bigint;
}

export interface IdInfoObject {
    /**
     * Name of the program
     */
    name?: string;
    /**
     * Version number of the program
     */
    version?: string;
    /**
     * Name of the operating system
     */
    os?: string;
    /**
     * Vendor of the client/server
     */
    vendor?: string;
    /**
     * URL to contact for support
     */
    "support-url"?: string;
    /**
     * Date program was released
     */
    date?: Date;
}

export interface ListResponse {
    /**
     * Mailbox path (unicode string).
     */
    path: string;
    /**
     * Mailbox path as listed in the LIST/LSUB response.
     */
    pathAsListed: string;
    /**
     * Mailbox name (last part of path after delimiter).
     */
    name: string;
    /**
     * Mailbox path delimiter, usually `.` or `/`.
     */
    delimiter: string;
    /**
     * An array of parent folder names. All names are in unicode.
     */
    parent: string;
    /**
     * Same as parent, but as a complete string path (unicode string).
     */
    parentPath: string;
    /**
     * A `set` of flags for this mailbox.
     */
    flags: Set<Flag>;
    /**
     * One of special-use flags (if applicable): "\All", "\Archive", "\Drafts", "\Flagged", "\Junk", "\Sent", "\Trash". Additionally INBOX has non-standard "\Inbox" flag set.
     */
    specialUse: string;
    /**
     * `true` if mailbox was found from the output of LIST command.
     */
    listed: boolean;
    /**
     * `true` if mailbox was found from the output of LSUB command.
     */
    subscribed: boolean;
    /**
     * If statusQuery was used, then this value includes the status response.
     */
    status?: StatusObject;
}

export interface ListTreeResponse {
    /**
     * If `true` then this is root node without any additional properties besides folders.
     */
    root: boolean;
    /**
     * Mailbox path.
     */
    path: string;
    /**
     * Mailbox name (last part of path after delimiter).
     */
    name: string;
    /**
     * Mailbox path delimiter, usually `.` or `/`.
     */
    delimiter: string;
    /**
     * List of flags for this mailbox.
     */
    flags: Flag[];
    /**
     * One of special-use flags (if applicable): "\All", "\Archive", "\Drafts", "\Flagged", "\Junk", "\Sent", "\Trash".
     * Additionally INBOX has non-standard "\Inbox" flag set.
     */
    specialUse: string;
    /**
     * `true` if mailbox was found from the output of LIST command.
     */
    listed: boolean;
    /**
     * `true` if mailbox was found from the output of LSUB command.
     */
    subscribed: boolean;
    /**
     * If `true` then this mailbox can not be selected in the UI.
     */
    disabled: boolean;
    /**
     * An array of subfolders.
     */
    folders: ListTreeResponse[];
}

export interface MailboxCreateResponse {
    /**
     * Full mailbox path.
     */
    path: string;
    /**
     * Unique mailbox ID if server supports OBJECTID extension (currently Yahoo and some others).
     */
    mailboxId?: string;
    /**
     * If `true` then mailbox was created otherwise it already existed.
     */
    created: boolean;
}

export interface MailboxDeleteResponse {
    /**
     * Full mailbox path that was deleted.
     */
    path: string;
}

export interface MessageStructureObject {
    /**
     * Body part number. This value can be used to later fetch the contents of this part of the message.
     *
     * **NB!** When a message contains just a single part, this field is sometimes omitted (hence the optional)
     */
    part?: string;
    /**
     * Content-Type of this node.
     */
    type: string;
    /**
     * Additional parameters for Content-Type, eg "charset".
     */
    parameters?: { [key: string]: any };
    /**
     * Content-ID.
     */
    id?: string;
    /**
     * Transfer encoding.
     */
    encoding?: string;
    /**
     * Expected size of the node.
     */
    size?: number;
    /**
     * Message envelope of embedded RFC822 message.
     */
    envelope?: MessageEnvelopeObject;
    /**
     * Content disposition.
     */
    disposition?: string;
    /**
     * Additional parameters for Content-Disposition.
     */
    dispositionParameters?: { [key: string]: any };
    /**
     * An array of child nodes if this is a multipart node. Not present for normal nodes.
     */
    childNodes: MessageStructureObject[];
}

export interface Logger {
    debug: (obj: object) => void;
    info: (obj: object) => void;
    warn: (obj: object) => void;
    error: (obj: object) => void;
}

export interface StatusQuery {
    /**
     * If `true` request count of messages.
     */
    messages?: boolean;
    /**
     * If `true` request count of messages with \Recent tag.
     */
    recent?: boolean;
    /**
     * If `true` request predicted next UID.
     */
    uidNext?: boolean;
    /**
     * If `true` request mailbox UIDVALIDITY value.
     */
    uidValidity?: boolean;
    /**
     * If `true` request count of unseen messages.
     */
    unseen?: boolean;
    /**
     * If `true` request last known modseq value.
     */
    highestModseq?: boolean;
}

export interface SpecialUseHints {
    /**
     * Path to "Sent Mail" folder
     */
    sent?: string;
    /**
     * Path to "Trash" folder
     */
    trash?: string;
    /**
     * Path to "Junk Mail" folder
     */
    junk?: string;
    /**
     * Path to "Drafts" folder
     */
    drafts?: string;
}

/**
 * Supported flags.
 * @see https://datatracker.ietf.org/doc/html/rfc3501#section-2.3.2
 */
export type Flag = "\\Seen" | "\\Answered" | "\\Flagged" | "\\Deleted" | "\\Draft" | "\\Recent" | (string & {});

export type Color = "red" | "orange" | "yellow" | "green" | "blue" | "purple" | "grey" | (string & {});
