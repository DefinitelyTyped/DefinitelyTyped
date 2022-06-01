// Type definitions for mimetext 2.0
// Project: https://github.com/muratgozel/MIMEText
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface MailLocationData {
    addr: string;
    name?: string;
}

export interface RecipientOptions {
    type?: RecipientType;
}

export interface MailboxBoundaries {
    alt: string;
    mixed: string;
}

export interface MailboxInput extends MailLocationData, RecipientOptions {}

export type InputType = 'OBJECT' | 'SPEC_COMPLIANT_TEXT' | 'TEXT';

export type MIMEPlacement = 'content' | 'header';

export type RecipientType = 'bcc' | 'cc' | 'to';

export type TextFormat = 'text/html' | 'text/plain';

export type MailLocation = string | MailLocationData;

export type MessageHeaders = string[] | Record<string, string>;

export interface MIMEHeader {
    custom: boolean;
    dump: (v: unknown) => unknown;
    generator?: () => string;
    name: string;
    placement: MIMEPlacement;
    value: string | null;
}

export interface EnvironmentContext {
    toBase64: (input: unknown) => string;
    store: MIMEHeader[];
}

export interface MailboxOptions {
    type?: string;
}

declare class Mailbox {
    constructor(input: string | MailboxInput, options?: MailboxOptions);
    parseSpecCompliantText(text: string): MailLocationData;
    createMailbox(): void;
    findInputType(input: string): InputType;
    getAddrDomain(): string;
    dump(): string;
    toObject(): Required<MailboxInput>;
}

declare class MIMEMessageContent {
    constructor(data: string);
    getHeaders(): Record<string, string>;
    getHeader(key: string): string | undefined;
    isAttachment(): boolean;
    dump(envctx: Partial<EnvironmentContext>, boundaries: MailboxBoundaries): string;
    setHeader(key: string, value: string): this;
    setHeaders(headers: MessageHeaders): this;
}

declare class MimeMessage {
    constructor(envctx: EnvironmentContext);
    asAttachments(): MIMEMessageContent[];
    asEncoded(): string;
    asRaw(): string;
    generateBoundaries(): MailboxBoundaries;
    getHeader(key: string): string | undefined;
    getMessageByType(type: string): MIMEMessageContent | undefined;
    getRecipients(options?: RecipientOptions): Mailbox[];
    getSender(): Mailbox;
    getSubject(): string | undefined;
    setAttachment(name: string, type: TextFormat, attachment: string): MIMEMessageContent;
    setBcc(bcc: MailLocation | MailLocation[]): Mailbox[];
    setCc(cc: MailLocation | MailLocation[]): Mailbox[];
    setHeader(key: string, value: string): string;
    setMessage(format: TextFormat, message: string, moreHeaders?: MessageHeaders): MIMEMessageContent;
    setRecipient(recipient: MailLocation | MailLocation[], options?: RecipientOptions): Mailbox[];
    setSender(sender: MailLocation | MailLocation[]): Mailbox;
    setSubject(subject: string): string;
    setTo(to: MailLocation | MailLocation[]): Mailbox[];
}

declare class NodeMIMEMessage extends MimeMessage {}

export function createMimeMessage(): NodeMIMEMessage;

export as namespace MimeText;

// prevent automatic exports for class symbols
export {};
