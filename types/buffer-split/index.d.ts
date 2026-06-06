/// <reference types="node" />

declare function bufferSplit(buf: Buffer, splitBuf: Buffer, includeDelim?: boolean): Buffer[];

export = bufferSplit;
