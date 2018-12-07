/// <reference types="node" />

import { Readable, ReadableOptions, Transform } from 'stream';

import Mail = require('./mailer');
import SMTPConnection = require('./smtp-connection');

declare namespace MimeNode {
    interface Addresses {
        from?: string[];
        sender?: string[];
        'reply-to'?: string[];
        to?: string[];
        cc?: string[];
        bcc?: string[];
    }

    interface Envelope {
        /** includes an address object or is set to false */
        from: string | false;
        /** includes an array of address objects */
        to: string[];
    }

    interface Options {
        /** root node for this tree */
        rootNode?: MimeNode;
        /** immediate parent for this node */
        parentNode?: MimeNode;
        /** filename for an attachment node */
        filename?: string;
        /** shared part of the unique multipart boundary */
        baseBoundary?: string;
        /** If true, do not exclude Bcc from the generated headers */
        keepBcc?: boolean;
        /** either 'Q' (the default) or 'B' */
        textEncoding?: 'B' | 'Q';
        /** method to normalize header keys for custom caseing */
        normalizeHeaderKey?(key: string): string;
    }
}

/**
 * Creates a new mime tree node. Assumes 'multipart/*' as the content type
 * if it is a branch, anything else counts as leaf. If rootNode is missing from
 * the options, assumes this is the root.
 */
declare class MimeNode {
    constructor(contentType: string, options?: MimeNode.Options);

    /** Creates and appends a child node.Arguments provided are passed to MimeNode constructor */
    createChild(contentType: string, options?: MimeNode.Options): MimeNode;

    /** Appends an existing node to the mime tree. Removes the node from an existing tree if needed */
    appendChild(childNode: MimeNode): MimeNode;

    /** Replaces current node with another node */
    replace(node: MimeNode): MimeNode;

    /** Removes current node from the mime tree */
    remove(): this;

    /**
     * Sets a header value. If the value for selected key exists, it is overwritten.
     * You can set multiple values as well by using [{key:'', value:''}] or
     * {key: 'value'} as the first argument.
     */
    setHeader(key: string, value: string | string[]): this;
    setHeader(headers: { [key: string]: string } | Array<{ key: string, value: string }>): this;

    /**
     * Adds a header value. If the value for selected key exists, the value is appended
     * as a new field and old one is not touched.
     * You can set multiple values as well by using [{key:'', value:''}] or
     * {key: 'value'} as the first argument.
     */
    addHeader(key: string, value: string): this;
    addHeader(headers: { [key: string]: string } | Array<{ key: string, value: string }>): this;

    /** Retrieves the first mathcing value of a selected key */
    getHeader(key: string): string;

    /**
     * Sets body content for current node. If the value is a string, charset is added automatically
     * to Content-Type (if it is text/*). If the value is a Buffer, you need to specify
     * the charset yourself
     */
    setContent(content: string | Buffer | Readable): this;

    /** Generate the message and return it with a callback */
    build(callback: (err: Error | null, buf: Buffer) => void): void;

    getTransferEncoding(): string;

    /** Builds the header block for the mime node. Append \r\n\r\n before writing the content */
    buildHeaders(): string;

    /**
     * Streams the rfc2822 message from the current node. If this is a root node,
     * mandatory header fields are set if missing (Date, Message-Id, MIME-Version)
     */
    createReadStream(options?: ReadableOptions): Readable;

    /**
     * Appends a transform stream object to the transforms list. Final output
     * is passed through this stream before exposing
     */
    transform(transform: Transform): void;

    /**
     * Appends a post process function. The functon is run after transforms and
     * uses the following syntax
     *
     *   processFunc(input) -> outputStream
     */
    processFunc(processFunc: (outputStream: Readable) => Readable): void;

    stream(outputStream: Readable, options: ReadableOptions, done: (err?: Error | null) => void): void;

    /** Sets envelope to be used instead of the generated one */
    setEnvelope(envelope: Mail.Envelope): this;

    /** Generates and returns an object with parsed address fields */
    getAddresses(): MimeNode.Addresses;

    /** Generates and returns SMTP envelope with the sender address and a list of recipients addresses */
    getEnvelope(): MimeNode.Envelope;

    /** Sets pregenerated content that will be used as the output of this node */
    setRaw(raw: string | Buffer | Readable): this;
}

export = MimeNode;
