/// <reference types="node" />

import StreamModule = require("stream");
import { DecoderStream } from "iconv-lite";
import Stream = StreamModule.Stream;

/**
 * Structured object for headers with arguments.
 *
 * `content-type: text/plain; CHARSET="UTF-8"` =>
 * ```
 * {
 *     "value": "text/plain",
 *     "params": {
 *         "charset": "UTF-8"
 *     }
 * }
 * ```
 */
export interface StructuredHeader {
    /**
     * The main value.
     */
    value: string;
    /**
     * Additional arguments.
     */
    params: { [key: string]: string };
}

/**
 * Possible types of a header value.
 */
export type HeaderValue = string | string[] | AddressObject | Date | StructuredHeader | StructuredHeader[];

/**
 * A Map object with lowercase header keys.
 */
export type Headers = Map<string, HeaderValue>;
/**
 * An array of raw header lines
 */
export type HeaderLines = ReadonlyArray<{
    key: string;
    line: string;
}>;
/**
 * Address details.
 */
export interface EmailAddress {
    /**
     * The email address.
     */
    address?: string | undefined;
    /**
     * The name part of the email/group.
     */
    name: string;
    /**
     * An array of grouped addresses.
     */
    group?: EmailAddress[] | undefined;
}

/**
 * Address object.
 */
export interface AddressObject {
    /**
     * An array with address details.
     */
    value: EmailAddress[];
    /**
     * A formatted address string for HTML context.
     */
    html: string;
    /**
     * A formatted address string for plaintext context.
     */
    text: string;
}

/**
 * COmmon part of the Attachment object.
 */
export interface AttachmentCommon {
    /**
     * Message type.
     */
    type: "attachment";
    /**
     * Attachment contents.
     */
    content: any;
    /**
     * MIME type of the message.
     */
    contentType: string;
    /**
     * Content disposition type for the attachment,
     * usually `"attachment"` or `"inline"`.
     */
    contentDisposition?: string | undefined;
    /**
     * File name of the attachment.
     */
    filename?: string | undefined;
    /**
     * A Map value that holds MIME headers for the attachment node.
     */
    headers: Headers;
    /**
     * An array of raw header lines for the attachment node.
     */
    headerLines: HeaderLines;
    /**
     * MD5 hash of the attachment content (configurable via `checksumAlgo`)
     */
    checksum: string;
    /**
     * Size in bytes.
     */
    size: number;
    /**
     * Content-ID header value (with angle brackets).
     */
    contentId?: string | undefined;
    /**
     * Content-ID without angle brackets, for matching `cid:` URLs.
     */
    cid?: string | undefined;
    /**
     * `true` if the attachment is inline content (e.g., embedded image referenced in HTML).
     */
    related?: boolean | undefined;
    /**
     * Undocumented.
     */
    partId?: string | undefined;
}

/**
 * Attachment object.
 */
export interface Attachment extends AttachmentCommon {
    /**
     * A Buffer that contains the attachment contents.
     */
    content: Buffer;
    /**
     * `true` if the attachment is inline content (e.g., embedded image referenced in HTML).
     */
    related: boolean;
}

/**
 * MailParser Attachment object.
 */
export interface AttachmentStream extends AttachmentCommon {
    /**
     * A Readable Stream that contains the attachment contents.
     */
    content: Stream;
    /**
     * Method must be called once you have processed the attachment.
     */
    release(): void;
}

/**
 * Parsed mail object.
 */
export interface ParsedMail {
    /**
     * An array of attachments (buffered in memory).
     */
    attachments: Attachment[];
    /**
     * A `Map` of lowercase header keys to their parsed values
     *
     * - All address headers are converted into address objects.
     * - `references` is a string if only a single reference-id exists or an
     *    array if multiple ids exist.
     * - `date` value is a Date object.
     */
    headers: Headers;
    /**
     * An array of raw header lines
     */
    headerLines: HeaderLines;
    /**
     * The HTML body of the message.
     *
     * Sets to `false` when there is no HTML body.
     *
     * If the message included embedded images as cid: urls then these are all
     * replaced with base64 formatted data: URIs.
     */
    html: string | false;
    /**
     * The plaintext body of the message.
     */
    text?: string | undefined;
    /**
     * The plaintext body of the message formatted as HTML.
     */
    textAsHtml?: string | undefined;
    /**
     * The subject line (shorthand for `headers.get('subject')`).
     */
    subject?: string | undefined;
    /**
     * Either an array of two or more referenced Message-ID values or a single Message-ID value.
     *
     * Not set if no reference values present.
     */
    references?: string[] | string | undefined;
    /**
     * A Date object for the `Date:` header.
     */
    date?: Date | undefined;
    /**
     * An address object or array of address objects for the `To:` header.
     */
    to?: AddressObject | AddressObject[] | undefined;
    /**
     * An address object for the `From:` header.
     */
    from?: AddressObject | undefined;
    /**
     * An address object or array of address objects for the `Cc:` header.
     */
    cc?: AddressObject | AddressObject[] | undefined;
    /**
     * An address object or array of address objects for the `Bcc:` header.
     * (usually not present)
     */
    bcc?: AddressObject | AddressObject[] | undefined;
    /**
     * An address object for the `Reply-To:` header.
     */
    replyTo?: AddressObject | undefined;
    /**
     * The Message-ID value string.
     */
    messageId?: string | undefined;
    /**
     * The In-Reply-To value string.
     */
    inReplyTo?: string | undefined;
    /**
     * Priority of the e-mail.
     */
    priority?: "normal" | "low" | "high" | undefined;
}

/**
 * Text message content.
 */
export interface MessageText {
    /**
     * Message type.
     */
    type: "text";
    /**
     * Includes the HTML version of the message.
     *
     * Is set if the message has at least one `text/html` node.
     */
    html?: string | boolean | undefined;
    /**
     * Includes the plaintext version of the message.
     *
     * Is set if the message has at least one `text/plain` node.
     */
    text?: string | undefined;
    /**
     * Includes the plaintext version of the message in HTML format.
     *
     * Is set if the message has at least one `text/plain` node.
     */
    textAsHtml?: string | undefined;
}

/**
 * A lower-level email parsing class.
 *
 * It is a transform stream that takes email source as bytestream for the input
 * and emits data objects for attachments and text contents.
 */
export class MailParser extends StreamModule.Transform {
    constructor(options?: MailParserOptions);
    on(event: string, callback: (any: any) => void): this;
    /**
     * Emits a `Map` of parsed header keys to their values. Fired once when headers are fully parsed.
     */
    on(event: "headers", callback: (headers: Headers) => void): this;
    /**
     * Emits an `Array` of objects with `key` and `line` properties containing the raw header data.
     */
    on(event: "headerLines", callback: (headerLines: HeaderLines) => void): this;
    on(event: "data" | "readable", callback: (data: AttachmentStream | MessageText) => void): this;
}

/**
 * A message source.
 */
export type Source = Buffer | Stream | string;

/**
 * Options object for MailParser.
 */
export interface MailParserOptions extends StreamModule.TransformOptions {
    /**
     * Do not generate `text` from HTML when no plain text part exists.
     * @default false
     */
    skipHtmlToText?: boolean | undefined;
    /**
     * Maximum HTML length (in characters of the decoded body) to convert to text.
     * If exceeded, an `'error'` event is emitted (rejecting `simpleParser`) and the HTML part is dropped from the output.
     * @default Infinity
     */
    maxHtmlLengthToParse?: number | undefined;
    /**
     * Custom function to format Date objects as strings.
     * @default undefined
     */
    formatDateString?: ((d: Date) => string) | undefined;
    /**
     * Keep `cid:` image URLs as-is instead of converting to data URIs.
     * @default false
     */
    skipImageLinks?: boolean | undefined;
    /**
     * Do not generate `textAsHtml` from plain text.
     * @default false
     */
    skipTextToHtml?: boolean | undefined;
    /**
     * Do not auto-detect and linkify URLs in plain text.
     * @default false
     */
    skipTextLinks?: boolean | undefined;
    /**
     * Treat `message/delivery-status` parts as attachments instead of text.
     * @default false
     */
    keepDeliveryStatus?: boolean | undefined;
    /**
     * Alternative iconv implementation for character set conversion.
     * @default iconv-lite
     */
    Iconv?: DecoderStream | undefined;
    /**
     * Hash algorithm for attachment checksums.
     * @default 'md5'
     */
    checksumAlgo?: string | undefined;
    /**
     * **simpleParser only** - Keep `cid:` URLs instead of converting them to data URIs (same as `skipImageLinks: true`).
     * @default false
     */
    keepCidLinks?: boolean | undefined;
}

/**
 * Options for SimpleParser.
 */
export type SimpleParserOptions = MailParserOptions;

/**
 * Parse email message to structure object.
 *
 * @param source A message source.
 * @param callback Function to get a structured email object.
 */
export function simpleParser(source: Source, callback: (err: any, mail: ParsedMail) => void): void;

/**
 * Parse email message to structure object.
 *
 * @param source A message source.
 * @param options Transform options passed to MailParser's constructor
 * @param callback Function to get a structured email object.
 */
export function simpleParser(
    source: Source,
    options: SimpleParserOptions,
    callback: (err: any, mail: ParsedMail) => void,
): void;

/**
 * Parse email message to structure object.
 *
 * @param source A message source.
 * @param options Transform options passed to MailParser's constructor
 */
export function simpleParser(source: Source, options?: SimpleParserOptions): Promise<ParsedMail>;
