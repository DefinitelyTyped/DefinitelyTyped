/// <reference types="node" />

import Item = require('./item');

export = File;

declare class File extends Item {
    /** Get the file contents. */
    getContent(): Buffer;
    /** Set the file contents. */
    setContent(content: string | Buffer): void;
    /** Get file stats. */
    getStats(): Item.ExtendedStats;
}
