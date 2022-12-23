import EventEmiter = require('events');
import ReadEntry = require('./read-entry');
import Warner = require('./warn-mixin');

declare namespace Parser {
    interface Options {
        strict?: boolean;
        filter?(path: string, entry: ReadEntry): boolean;
        onentry?(entry: ReadEntry): void;
        onwarn?(code: string, message: string, data?: Buffer): void;
    }
}

interface Parser extends NodeJS.ReadWriteStream, Warner {
    writable: boolean;

    abort(error: Error): void;

    on(event: 'end' | 'close', listener: () => void): this;
    on(event: 'entry', listener: (entry: ReadEntry) => void): this;
}

declare const Parser: {
    new (opt?: Parser.Options): Parser;
};

export = Parser;
