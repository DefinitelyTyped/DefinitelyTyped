import { Change } from './Change';
import { Token } from './Diff';
import { HunkData } from './HunkData';
import { expandCollapsedBlockBy } from './utils';

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/hooks/useMinCollapsedLines.js Source}) */
export function useMinCollapsedLines(
    minLinesExclusive: number,
    hunks: HunkData,
    oldSource: string | string[],
): ReturnType<typeof expandCollapsedBlockBy>;

export interface UseChangeSelectOptions {
    mutliple?: boolean;
}

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/hooks/useChangeSelect.js Source}) */
export function useChangeSelect(
    hunks: HunkData[],
    options: UseChangeSelectOptions,
): [string[], (dispatch: { change: Change }) => void];

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/hooks/useSourceExpansion.js Source}) */
export function useSourceExpansion(
    hunks: HunkData[],
    oldSource: string,
): [renderingHunks: HunkData[], fn: (start: number, end: number) => void];

export interface ShouldTokenizePayload {
    hunks: HunkData[];
    oldSource: string;
    language: string;
    editsType: string;
}

export type ShouldTokenize = (currentPayload: ShouldTokenizePayload, prevPayload: ShouldTokenizePayload) => boolean;

export interface UseTokenizeWorkerOptions {
    shouldTokenize?: ShouldTokenize;
}

export interface TokenizeResult {
    tokens: null | Token[];
    tokenizationFailReason: null | string;
}

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/hooks/useTokenizeWorker.js Source}) */
export function useTokenizeWorker(
    worker: { postMessage(message: any): void },
    payload: any,
    options: UseTokenizeWorkerOptions,
): TokenizeResult;
