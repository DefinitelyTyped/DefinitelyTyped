// Type definitions for Nodemailer 1.3.2
// Project: https://github.com/andris9/Nodemailer
// Definitions by: Rogier Schouten <https://github.com/rogierschouten/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module nodemailer {

	export interface AttachmentObject {
		/**
		 * filename to be reported as the name of the attached file, use of unicode is allowed
		 */
		filename?: string;
		/**
		 * optional content id for using inline images in HTML message source
		 */
		cid?: string;
		/**
		 * Pathname or URL to use streaming
		 */
		path?: string;
		/**
		 * String, Buffer or a Stream contents for the attachment
		 */
		content: string|Buffer|NodeJS.ReadableStream;
		/**
		 * If set and content is string, then encodes the content to a Buffer using the specified encoding. Example values: base64, hex, 'binary' etc. Useful if you want to use binary attachments in a JSON formatted e-mail object.
		 */
		encoding?: string;
		/**
		 * optional content type for the attachment, if not set will be derived from the filename property
		 */
		contentType?: string;
		/**
		 * optional content disposition type for the attachment, defaults to 'attachment'
		 */
		contentDisposition?: string;
	}

	export interface SendMailOptions {
		/**
		 * The e-mail address of the sender. All e-mail addresses can be plain 'sender@server.com' or formatted 'Sender Name <sender@server.com>', see here for details
		 */
		from?: string;
		/**
		 * An e-mail address that will appear on the Sender: field
		 */
		sender?: string;
		/**
		 * Comma separated list or an array of recipients e-mail addresses that will appear on the To: field
		 */
		to?: string|string[];
		/**
		 * Comma separated list or an array of recipients e-mail addresses that will appear on the Cc: field
		 */
		cc?: string|string[];
		/**
		 * Comma separated list or an array of recipients e-mail addresses that will appear on the Bcc: field
		 */
		bcc?: string|string[];
		/**
		 * An e-mail address that will appear on the Reply-To: field
		 */
		replyTo?: string;
		/**
		 * The message-id this message is replying
		 */
		inReplyTo?: string;
		/**
		 * Message-id list (an array or space separated string)
		 */
		references?: string|string[];
		/**
		 * The subject of the e-mail
		 */
		subject?: string;
		/**
		 * The plaintext version of the message as an Unicode string, Buffer, Stream or an object {path: '...'}
		 */
		text?: string|Buffer|NodeJS.ReadableStream|AttachmentObject;
		/**
		 * The HTML version of the message as an Unicode string, Buffer, Stream or an object {path: '...'}
		 */
		html?: string|Buffer|NodeJS.ReadableStream|AttachmentObject;
		/**
		 * An object or array of additional header fields (e.g. {"X-Key-Name": "key value"} or [{key: "X-Key-Name", value: "val1"}, {key: "X-Key-Name", value: "val2"}])
		 */
		headers?: any;
		/**
		 * An array of attachment objects (see below for details)
		 */
		attachments?: AttachmentObject[];
		/**
		 * An array of alternative text contents (in addition to text and html parts) (see below for details)
		 */
		alternatives?: AttachmentObject[];
		/**
		 * optional Message-Id value, random value will be generated if not set
		 */
		messageId?: string;
		/**
		 * optional Date value, current UTC string will be used if not set
		 */
		date?: Date;
		/**
		 * optional transfer encoding for the textual parts (defaults to 'quoted-printable')
		 */
		encoding?: string;
	}

	export interface SentMessageInfo {
		/**
		 * most transports should return the final Message-Id value used with this property
		 */
		messageId: string;
		/**
		 * includes the envelope object for the message
		 */
		envelope: any;
		/**
		 * is an array returned by SMTP transports (includes recipient addresses that were accepted by the server)
		 */
		accepted: string[];
		/**
		 * is an array returned by SMTP transports (includes recipient addresses that were rejected by the server)
		 */
		rejected: string[];
		/**
		 * is an array returned by Direct SMTP transport. Includes recipient addresses that were temporarily rejected together with the server response
		 */
		pending?: string[];
		/**
		 * is a string returned by SMTP transports and includes the last SMTP response from the server
		 */
		response: string;
	}

	/**
	 * This is what you implement to create a new transporter yourself
	 */
	export interface Transport {
		name: string;
		version: string;
		send(mail: SendMailOptions, callback?: (error: Error, info: SentMessageInfo) => void): void;
		close(): void;
	}

}
