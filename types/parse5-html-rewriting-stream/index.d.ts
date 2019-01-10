// Type definitions for parse5-html-rewriting-stream 5.1
// Project: https://github.com/inikulin/parse5/tree/master/packages/parse5-html-rewriting-stream
// Definitions by: Sam Li <https://github.com/samuelli>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as parse5 from 'parse5-sax-parser';
import * as stream from 'stream';

/**
 * Streaming SAX-style HTML rewriter. A transform stream (which means you can
 * pipe through it, see example). Rewriter uses raw source representation of
 * tokens if they are not modified by the user, therefore resulting HTML is
 * not affected by parser error-recovery mechanisms as in the classical
 * parsing-serialization roundtrip.
 */
export default class RewritingStream extends stream.Transform {
    on(event: string, listener: (...args: any[]) => void): this;

    /**
     * Raised when the rewriter encounters a start tag.
     */
    on(type: 'startTag',
        callback: (startTag: parse5.StartTagToken, rawHtml: string) => void):
        this;

    /**
     * Raised when rewriter encounters an end tag.
     */
    on(type: 'endTag',
        callback: (endTag: parse5.EndTagToken, rawHtml: string) => void): this;

    /**
     * Raised when rewriter encounters a comment.
     */
    on(type: 'comment',
        callback: (comment: parse5.CommentToken, rawHtml: string) => void): this;

    /**
     * Raised when rewriter encounters text content.
     */
    on(type: 'text',
        callback: (text: parse5.TextToken, rawHtml: string) => void): this;

    /**
     * Raised when rewriter encounters a document type declaration.
     */
    on(type: 'doctype',
        callback: (doctype: parse5.DoctypeToken, rawHtml: string) => void): this;

    /**
     * Emits serialized start tag token into the output stream.
     */
    emitStartTag(startTag: parse5.StartTagToken): void;

    /**
     * Emits serialized end tag token into the output stream.
     */
    emitEndTag(endTag: parse5.EndTagToken): void;

    /**
     * Emits serialized text token into the output stream.
     */
    emitText(text: parse5.TextToken): void;

    /**
     * Emits serialized comment token into the output stream.
     */
    emitComment(text: parse5.CommentToken): void;

    /**
     * Emits serialized document type token into the output stream.
     */
    emitDoctype(text: parse5.DoctypeToken): void;

    /**
     * Emits raw HTML string into the output stream.
     */
    emitRaw(html: string): void;
}
