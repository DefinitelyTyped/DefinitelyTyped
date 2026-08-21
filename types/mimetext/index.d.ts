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

export type InputType = "OBJECT" | "SPEC_COMPLIANT_TEXT" | "TEXT";

export type MIMEPlacement = "content" | "header";

export type RecipientType = "bcc" | "cc" | "to";

export type TextFormat = "text/html" | "text/plain";

export type MailLocation = string | MailLocationData;

export type MessageHeaders = string[] | Record<string, string>;

export type ApplicationType =
    | "application/epub+zip"
    | "application/gzip"
    | "application/java-archive"
    | "application/json"
    | "application/ld+json"
    | "application/msword"
    | "application/octet-stream"
    | "application/ogg"
    | "application/pdf"
    | "application/rtf"
    | "application/vnd.amazon.ebook"
    | "application/vnd.apple.installer+xml"
    | "application/vnd.mozilla.xul+xml"
    | "application/vnd.ms-excel"
    | "application/vnd.ms-fontobject"
    | "application/vnd.ms-powerpoint"
    | "application/vnd.oasis.opendocument.presentation"
    | "application/vnd.oasis.opendocument.spreadsheet"
    | "application/vnd.oasis.opendocument.text"
    | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    | "application/vnd.rar"
    | "application/vnd.visio"
    | "application/x-7z-compressed"
    | "application/x-abiword"
    | "application/x-bzip"
    | "application/x-bzip2"
    | "application/x-cdf"
    | "application/x-csh"
    | "application/x-freearc"
    | "application/x-httpd-php"
    | "application/x-sh"
    | "application/x-tar"
    | "application/xhtml+xml"
    | "application/xml"
    | "application/zip";

export type AudioType =
    | "audio/aac"
    | "audio/midi"
    | "audio/x-midi"
    | "audio/mpeg"
    | "audio/ogg"
    | "audio/opus"
    | "audio/wav"
    | "audio/webm";

export type FontType = "font/otf" | "font/ttf" | "font/woff" | "font/woff2";

export type ImageType =
    | "image/avif"
    | "image/bmp"
    | "image/gif"
    | "image/jpeg"
    | "image/png"
    | "image/svg+xml"
    | "image/tiff"
    | "image/vnd.microsoft.icon"
    | "image/webp";

export type TextType = "text/calendar" | "text/css" | "text/csv" | "text/html" | "text/javascript" | "text/plain";

export type VideoType =
    | "video/3gpp"
    | "video/3gpp2"
    | "video/mp2t"
    | "video/mp4"
    | "video/mpeg"
    | "video/ogg"
    | "video/webm"
    | "video/x-msvideo";

export type MIMEType = ApplicationType | AudioType | FontType | ImageType | TextType | VideoType;

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
    setAttachment(name: string, type: MIMEType, attachment: string): MIMEMessageContent;
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
