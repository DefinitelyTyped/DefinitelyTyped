/// <reference types="node" />

import { Types } from "../index";

export interface TokenizeBufferIterOptions {
    encoding?: string;
}

export function tokenizeIter(contents: string): Generator<Types.SGFToken, void>;

export function tokenize(contents: string): Types.SGFToken[];

export function tokenizeBufferIter(
    buffer: Buffer,
    options?: TokenizeBufferIterOptions,
): Generator<Types.SGFToken, void>;

export function tokenizeBuffer(buffer: Buffer, options?: TokenizeBufferIterOptions): Types.SGFToken[];
