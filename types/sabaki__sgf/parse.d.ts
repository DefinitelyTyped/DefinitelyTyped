/// <reference types="node" />

import { NodeObject, Primitive, SGFToken } from "./types";

export interface ParseTokensOptions<ID extends Primitive = number> {
    getId?: () => ID;
    dictionary?: null;
    onProgress?: () => void;
    onNodeCreated?: () => void;
}

export interface ParseBufferOptions<ID extends Primitive = number> {
    encoding?: string;
    getId?: () => ID;
    dictionary?: null;
    onProgress?: () => void;
}

export function parseTokens<ID extends Primitive = number>(
    tokens: readonly SGFToken[],
    options?: ParseTokensOptions<ID>,
): NodeObject<ID>[];

export function parse<ID extends Primitive = number>(
    contents: string,
    options?: ParseTokensOptions<ID>,
): NodeObject<ID>[];

export function parseBuffer<ID extends Primitive = number>(
    contents: Buffer,
    options?: ParseBufferOptions<ID>,
): NodeObject<ID>[];

export function parseFile<ID extends Primitive = number>(
    filename: string,
    options?: ParseBufferOptions<ID>,
): NodeObject<ID>[];
