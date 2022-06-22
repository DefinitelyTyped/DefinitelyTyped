import { expandCollapsedBlockBy } from "./utils";
import { Change, HunkData, Token } from ".";

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/hooks/useMinCollapsedLines.js Source}) */
export declare const useMinCollapsedLines: (
    minLinesExclusive: number,
    hunks: HunkData,
    oldSource: string | string[],
) => ReturnType<typeof expandCollapsedBlockBy>;

export interface UseChangeSelectOptions {
    mutliple?: boolean;
}

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/hooks/useChangeSelect.js Source}) */
export declare const useChangeSelect: (
    hunks: HunkData[],
    options: UseChangeSelectOptions,
) => [string[], (dispatch: { change: Change }) => void];

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/hooks/useSourceExpansion.js Source}) */
export declare const useSourceExpansion: (
    hunks: HunkData[],
    oldSource: string,
) => [renderingHunks: HunkData[], fn: (start: number, end: number) => void];

export interface UseTokenizeWorkerOptions {}

export interface TokenizeResult {
    tokens: null | Token[];
    tokenizationFailReason: null | string;
}

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/hooks/useTokenizeWorker.js Source}) */
export declare const useTokenizeWorker: (
    worker: { postMessage(message: any): void },
    payload: any,
    options: UseTokenizeWorkerOptions,
) => TokenizeResult;
