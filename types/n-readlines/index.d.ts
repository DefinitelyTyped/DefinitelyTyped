/// <reference types="node" />

import { PathLike } from "fs";

export = LineByLine;

declare class LineByLine {
    constructor(file: PathLike | number, options?: Options);
    next(): Buffer | false;
    reset(): void;
    close(): void;
}

interface Options {
    readChunk?: number | undefined;
    newLineCharacter?: string | undefined;
}
