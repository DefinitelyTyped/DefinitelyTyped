// Type definitions for mailparser v2.0.0
// Project: https://www.npmjs.com/package/mailparser
// Definitions by: Peter Snider <https://github.com/psnider>
//                 Andrey Volynkin <https://github.com/Avol-V/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import StreamModule = require('stream');
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
interface StructuredHeader {
	/**
	 * The main value.
	 */
	value: string;
	/**
	 * Additional arguments.
	 */
	params: {[key: string]: string};
}

/**
 * Possible types of a header value.
 */
export type HeaderValue = string | string[] | AddressObject | Date | StructuredHeader;

/**
 * A Map object with lowercase header keys.
 */
export type Headers = Map<string, HeaderValue>;

/**
 * Address details.
 */
interface EmailAddress {
	/**
	 * The email address.
	 */
	address: string;
	/**
	 * The name part of the email/group.
	 */
	name: string;
	/**
	 * An array of grouped addresses.
	 */
	group?: EmailAddress[];
}

/**
 * Address object.
 */
interface AddressObject {
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
interface AttachmentCommon {
	/**
	 * Message type.
	 */
	type: 'attachment';
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
	 * most probably `'attachment'`.
	 */
	contentDisposition: string;
	/**
	 * File name of the attachment.
	 */
	filename?: string;
	/**
	 * A Map value that holds MIME headers for the attachment node.
	 */
	headers: Headers;
	/**
	 * A MD5 hash of the message content.
	 */
	checksum: string;
	/**
	 * Message size in bytes.
	 */
	size: number;
	/**
	 * The header value from `Content-ID`.
	 */
	contentId?: string;
	/**
	 * `contentId` without `<` and `>`.
	 */
	cid?: string;   // e.g. '5.1321281380971@localhost'
	/**
	 * If true then this attachment should not be offered for download
	 * (at least not in the main attachments list).
	 */
	related?: boolean;
}

/**
 * Attachment object.
 */
interface Attachment extends AttachmentCommon {
	/**
	 * A Buffer that contains the attachment contents.
	 */
	content: Buffer;
	/**
	 * If true then this attachment should not be offered for download
	 * (at least not in the main attachments list).
	 */
	related: boolean;
}

/**
 * MailParser Attachment object.
 */
interface AttachmentStream extends AttachmentCommon {
	/**
	 * A Buffer that contains the attachment contents.
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
interface ParsedMail {
	/**
	 * An array of attachments.
	 */
	attachments?: Attachment[];
	/**
	 * A Map object with lowercase header keys.
	 *
	 * - All address headers are converted into address objects.
	 * - `references` is a string if only a single reference-id exists or an
	 *    array if multiple ids exist.
	 * - `date` value is a Date object.
	 */
	headers: Headers;
	/**
	 * The HTML body of the message.
	 *
	 * Sets to `false` when there is no HTML body.
	 *
	 * If the message included embedded images as cid: urls then these are all
	 * replaced with base64 formatted data: URIs.
	 */
	html: string | boolean;
	/**
	 * The plaintext body of the message.
	 */
	text: string;
	/**
	 * The plaintext body of the message formatted as HTML.
	 */
	textAsHtml: string;
	/**
	 * The subject line.
	 */
	subject: string;
	/**
	 * An array of referenced Message-ID values.
	 *
	 * Not set if no reference values present.
	 */
	references?: string[];
	/**
	 * A Date object for the `Date:` header.
	 */
	date?: Date;
	/**
	 * An address object for the `To:` header.
	 */
	to: AddressObject;
	/**
	 * An address object for the `From:` header.
	 */
	from: AddressObject;
	/**
	 * An address object for the `Cc:` header.
	 */
	cc?: AddressObject;
	/**
	 * An address object for the `Bcc:` header (usually not present).
	 */
	bcc?: AddressObject;
	/**
	 * An address object for the `Reply-To:` header.
	 */
	replyTo?: AddressObject;
	/**
	 * The Message-ID value string.
	 */
	messageId?: string;
	/**
	 * The In-Reply-To value string.
	 */
	inReplyTo?: string;
	/**
	 * Priority of the e-mail.
	 */
	priority?: 'normal' | 'low' | 'high';
}

/**
 * Text message content.
 */
interface MessageText {
	/**
	 * Message type.
	 */
	type: 'text';
	/**
	 * Includes the HTML version of the message.
	 *
	 * Is set if the message has at least one `text/html` node.
	 */
	html?: string | boolean;
	/**
	 * Includes the plaintext version of the message.
	 *
	 * Is set if the message has at least one `text/plain` node.
	 */
	text?: string;
	/**
	 * Includes the plaintext version of the message in HTML format.
	 *
	 * Is set if the message has at least one `text/plain` node.
	 */
	textAsHtml?: string;
}

/**
 * A lower-level email parsing class.
 *
 * It is a transform stream that takes email source as bytestream for the input
 * and emits data objects for attachments and text contents.
 */
export class MailParser extends StreamModule.Transform {
	constructor(options?: StreamModule.TransformOptions);
	on(event: string, callback: (any: any) => void): this;
	on(event: 'headers', callback: (headers: Headers) => void): this;
	on(event: 'data', callback: (data: AttachmentStream | MessageText) => void): this;
	on(event: 'readable', callback: (data: AttachmentStream | MessageText) => void): this;
}

/**
 * A message source.
 */
export type Source = Buffer | Stream | string;

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
 */
export function simpleParser(source: Source): Promise<ParsedMail>;
