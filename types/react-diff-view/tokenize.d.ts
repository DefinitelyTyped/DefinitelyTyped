import { ReactNode } from 'react';
import { HunkData } from '.';

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/tokenize/index.js#L7-L14 Source}) */
export interface TokenizeOptions {
    highlight?: boolean;
    /** Instance of {@link https://www.npmjs.com/refractor refractor} */
    refractor?: {
        highlight(text: string, language: string): ReactNode;
    };
    oldSource?: unknown;
    language?: string;
    enhancers?: Enhancer[];
}

export interface TokenizeResponse {
    old: ReactNode;
    new: ReactNode;
}

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/tokenize/index.js#L6-L25 Source}) */
export function tokenize(hunks: HunkData[], options: TokenizeOptions): TokenizeResponse;

export type Enhancer = ([oldLinesOfPath, newLinesOfPath]: [number[], number[]]) => [number[], number[]];

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/tokenize/pickRanges.js Source}) */
export function pickRanges(oldRanges: number[], newRanges: number[]): Enhancer;

export interface MarkEditOptions {
    /** @default 'block' */
    type?: string | 'block';
}

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/tokenize/markEdits.js Source}) */
export function markEdits(hunks: HunkData[], options?: MarkEditOptions): Enhancer;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/tokenize/markWord.js#L32 Source}) */
export function markWord(word: string, name: string, replacement?: string): Enhancer;
