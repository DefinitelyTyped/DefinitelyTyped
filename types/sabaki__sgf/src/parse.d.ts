/// <reference types="node" />

import { Types } from "../index";

export interface ParseTokensOptions<ID extends Types.Primitive = number> {
    getId?: () => ID;
    dictionary?: null;
    onProgress?: ({ progress }: { progress: number }) => void;
    onNodeCreated?: ({ node }: { node: Types.NodeObject<ID> }) => void;
}

export interface ParseBufferOptions<ID extends Types.Primitive = number> {
    encoding?: string;
    getId?: () => ID;
    dictionary?: null;
    onProgress?: ({ progress }: { progress: number }) => void;
}

export function parseTokens<ID extends Types.Primitive = number>(
    tokens: readonly Types.SGFToken[],
    options?: ParseTokensOptions<ID>,
): Types.NodeObject<ID>[];

export function parse<ID extends Types.Primitive = number>(
    contents: string,
    options?: ParseTokensOptions<ID>,
): Types.NodeObject<ID>[];

export function parseBuffer<ID extends Types.Primitive = number>(
    contents: Buffer,
    options?: ParseBufferOptions<ID>,
): Types.NodeObject<ID>[];

export function parseFile<ID extends Types.Primitive = number>(
    filename: string,
    options?: ParseBufferOptions<ID>,
): Types.NodeObject<ID>[];
