/// <reference types="node" />

import { SGFToken } from "./types";

export interface TokenizeBufferIterOptions {
    encoding?: string;
}

export function tokenizeIter(contents: string): Generator<SGFToken, void>;

export function tokenize(contents: string): SGFToken[];

export function tokenizeBufferIter(buffer: Buffer, options?: TokenizeBufferIterOptions): Generator<SGFToken, void>;

export function tokenizeBuffer(buffer: Buffer, options?: TokenizeBufferIterOptions): SGFToken[];
