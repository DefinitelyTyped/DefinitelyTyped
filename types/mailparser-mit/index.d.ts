// Type definitions for mailparser-mit 1.0
// Project: https://github.com/mazira/mailparser-mit#readme
// Definitions by: atlowChemi <https://github.com/atlowChemi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stream } from 'node:stream';

export type Priority = 'normal' | 'low' | 'high';

export interface MailParserOptions {
    /** if set to true print all incoming lines to decodeq */
    debug?: boolean;
    /** if set to true, stream attachments instead of including them */
    streamAttachments?: boolean;
    /** if set to true replace double dots in the beginning of the file */
    unescapeSMTP?: boolean;
    /** the default charset for text/plain, text/html content, if not set reverts to Latin-1 */
    defaultCharset?: string;
    /** if set to true, show inlined attachment links */
    showAttachmentLinks?: boolean;
}

export interface ContactInfo {
    address: string;
    name: string;
    group?: string;
}

export interface Attachment {
    /** A MD5 hash of the message content. */
    checksum: string;
    /** Attachment contents. */
    content: Buffer;
    /** Content disposition type for the attachment, most probably `'attachment'`. */
    contentDisposition: string;
    /** The header value from `Content-ID`. */
    contentId: string;
    /** MIME type of the message. */
    contentType: string;
    /** File name of the attachment. */
    generatedFileName: string;
    length: number;
    transferEncoding: string;
}
export interface StreamAttachment extends Omit<Attachment, 'content'> {
    contents: Stream;
}
export interface MimeTreeNode {
    attachment?: boolean;
    childNodes: MimeTreeNode[];
    content?: string | Buffer;
    from?: ContactInfo[];
    headers?: Array<{ key: string; value: string }>;
    messageId?: string;
    meta: { [key: string]: any };
    parentNode: MimeTreeNode | null;
    parsedHeaders: { [header: string]: string };
    priority?: Priority;
    subject?: string;
    to?: ContactInfo[];
    useMIME?: boolean;
}

export interface MailData {
    html: Array<{ content: string; level: number }>;
    text: Array<{ content: string; level: number }>;
    calendar: Array<{ content: unknown; level: number }>;
    attachments: Array<{ content: Attachment; level: number }>;
}

export interface ParsedEmail {
    html?: string;
    text?: string;
    alternatives?: Array<MailData['calendar'][number]['content']>;
    headers: { [header: string]: string };
    subject?: string;
    references?: string[];
    messageId?: string;
    inReplyTo?: string[];
    priority?: Priority;
    from?: ContactInfo[];
    replyTo?: ContactInfo[];
    to?: ContactInfo[];
    cc?: ContactInfo[];
    bcc?: ContactInfo[];
    date?: Date;
    receivedDate?: Date;
    attachments?: Attachment[];
}

export class MailParser extends Stream {
    constructor(options?: MailParserOptions);
    options: MailParserOptions;
    /** The complete tree structure of the e-mail */
    mimeTree: MimeTreeNode;
    /** This is the final mail structure object that is returned to the client */
    mailData: MailData;

    on(event: string, callback: (any: any) => void): this;
    on(event: 'end', listener: (email: ParsedEmail) => void): this;
    on(event: 'headers', listener: (headers: { [header: string]: string }) => void): this;
    on(event: 'attachment', listener: (attachment: StreamAttachment, rootNode: MimeTreeNode) => void): this;
}
