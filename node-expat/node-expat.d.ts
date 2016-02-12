// Type definitions for node-expat
// Project: https://github.com/node-xmpp/node-expat
// Definitions by: Rakuto Furutani
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "node-expat" {
    import events = require('events');

    export class Parser extends events.EventEmitter {
        constructor(encoding: string);

        parse(buf: string | Buffer, isFinal?: boolean): boolean;
        setEncoding(encode: string): boolean;
        getError(): number;
        stop(): boolean;
        resume(): boolean;
        destroy(): void;
        destroySoon(): void;
        write(data: string | Buffer): boolean;
        end(): void;
        reset(): boolean;
        getCurrentLineNumber(): number;
        getCurrentColumnNumber(): number;
        getCurrentByteIndex(): number;
    }
}
