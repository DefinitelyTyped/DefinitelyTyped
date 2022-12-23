import MiniPass = require('minipass');
import Header = require('./header');

declare class ReadEntry extends MiniPass {
    extended: unknown;
    globalExtended: unknown;
    remain: number;
    blockRemain: number;
    ignore: boolean;
    meta: boolean;
    path: string;
    size: number;

    constructor(header: Header, ex: unknown, gex: unknown);

    write(data: Buffer): boolean;
}

export = ReadEntry;
