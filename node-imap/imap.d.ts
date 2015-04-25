// Type definitions for node imap
// Project: https://github.com/mscdex/node-imap
// Definitions by: Steve Fenton <https://github.com/Steve-Fenton>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "imap" {
    interface ImapOptions {
        user: string;
        password: string;
        host: string;
        port: number;
        tls: boolean;
    }

    interface ImapBox {
        name: string;
        readOnly: boolean;
        newKeywords: boolean;
        uidvalidity: number;
        uidnext: number;
        flags: any[]; // TODO
        permFlags: any[]; // TODO
        persistentUIDs: boolean;
        messages: {
            total: number;
            'new': number;
            unseen: number;
        }
    }

    interface ImapChunk {
        toString(charset: string): string;
        length: number;
    }

    interface ImapFetch {
        once(event: 'end', callback: () => void): void;
        once(event: 'error', callback: (error: Error) => void): void;
        once(event: string, callback: Function): void;

        on(event: 'message', callback: (msg: ImapMessage, seqno: number) => void): void;
        on(event: string, callback: Function): void;
    }

    interface ImapBodyStream {
        once(event: 'end', callback: () => void): void;
        once(event: string, callback: Function): void;

        on(event: 'data', callback: (chunk: ImapChunk) => void): void;
        on(event: string, callback: Function): void;

        pipe(stream: any): void;
    }

    interface ImapMessage {
        // TODO: typeof attributes
        once(event: 'attributes', callback: (attributes: any) => void): void;
        once(event: string, callback: Function): void;

        // TODO: typeof info
        on(event: 'body', callback: (stream: ImapBodyStream, info: any) => void): void;
        on(event: string, callback: Function): void;
    }

    class Imap {
        constructor(options: ImapOptions);

        connect(): void;

        //TODO:
        // param a
        openBox(name: string, a: boolean, callback: (err: Error, box: ImapBox) => void) : void;

        //TODO:
        // param a
        // param b
        once(event: 'end', callback: () => void): void;
        once(event: 'error', callback: (error: Error) => void): void;
        once(a: string, callback: Function) : void;

        end(): void;

        //TODO:
        // return type
        parseHeader(header: string): any;
        static parseHeader(header: string): any;

        search(searchTerms: any[], callback: Function): void;

        fetch(results: any, options: {}): ImapFetch;

        //TODO:
        // type
        seq: {
            fetch(messageSourceQuery: string, options: {}): ImapFetch;
        };
    }

    export = Imap;
}
