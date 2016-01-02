// Type definitions for mailparser v0.5.2
// Project: https://www.npmjs.com/package/mailparser
// Definitions by: Peter Snider <https://github.com/psnider/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path='../node/node.d.ts' />


declare module 'mailparser' {
    import WritableStream = NodeJS.WritableStream;
    import EventEmitter = NodeJS.EventEmitter;

    interface Options {
        debug?: boolean;    // if set to true print all incoming lines to console
        streamAttachments?: boolean;   // if set to true, stream attachments instead of including them
        unescapeSMTP?: boolean;   // if set to true replace double dots in the beginning of the file
        defaultCharset?: string;   // the default charset for text/plain and text/html content, if not set reverts to Latin-1
        showAttachmentLinks?: boolean;    // if set to true, show inlined attachment links <a href="cid:...">filename</a>
    }
    
    
    interface EmailAddress {
        address: string;
        name: string;
    }
    
    
    interface Attachment {
        contentType: string;
        fileName: string;
        contentDisposition: string;    // e.g. 'attachment'
        contentId: string;   // e.g. '5.1321281380971@localhost'
        transferEncoding: string;   // e.g. 'base64'
        length: number;   // length of the attachment in bytes
        generatedFileName: string;   // e.g. 'image.png'
        checksum: string;  // the md5 hash of the file, e.g. 'e4cef4c6e26037bcf8166905207ea09b'
        content: Buffer;   // possibly a SlowBuffer
    }
    
    // emitted with the 'end' event
    interface ParsedMail {
        headers: any;  // unprocessed headers in the form of - {key: value} - if there were multiple fields with the same key then the value is an array
        from: EmailAddress[];  // should be only one though)
        to: EmailAddress[];
        cc?: EmailAddress[];
        bcc?: EmailAddress[];
        subject: string;  // the subject line
        references?: string[];  // an array of reference message id values (not set if no reference values present)
        inReplyTo?: string[];  // an array of In-Reply-To message id values (not set if no in-reply-to values present)
        priority?: string;   // priority of the e-mail, always one of the following: normal (default), high, low
        text: string;    // text body
        html: string;    // html body
        date?: Date; // If date could not be resolved or is not found this field is not set. Check the original date string from headers.date
        attachments?: Attachment[];
    }
    


    class MailParser implements WritableStream {
        constructor(options? : Options);
        on(event : string, callback : (any : any) => void) : void;
        
        // from WritableStream
        writable: boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        
        // from EventEmitter
        static listenerCount(emitter: EventEmitter, event: string): number;
        addListener(event: string, listener: Function): EventEmitter;
        on(event: string, listener: Function): EventEmitter;
        once(event: string, listener: Function): EventEmitter;
        removeListener(event: string, listener: Function): EventEmitter;
        removeAllListeners(event?: string): EventEmitter;
        setMaxListeners(n: number): EventEmitter;
        getMaxListeners(): number;
        listeners(event: string): Function[];
        emit(event: string, ...args: any[]): boolean;
        listenerCount(type: string): number;
    }
}

