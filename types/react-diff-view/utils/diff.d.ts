import { Change } from '../Change';
import { HunkData } from '../HunkData';

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/insertHunk.js#L61-L75 Source}) */
export function textLinesToHunk(lines: string[], oldStartLineNumber: number, newStartLineNumber: number): HunkData;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/insertHunk.js#L164-L184 Source}) */
export function insertHunk(hunks: HunkData[], insertion: HunkData): HunkData[];

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/expandCollapsedBlockBy.js#L124-L142 Source}) */
export function expandFromRawCode(
    hunks: HunkData[],
    rawCodeOrLines: string | string[],
    start: number,
    end: number,
): HunkData[];

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/expandCollapsedBlockBy.js#L144-L157 Source}) */
export function getCollapsedLinesCountBetween(previousHunk: HunkData, nextHunk: HunkData): number;

export type ExpandCollapsedBlockByPredicate = (lines: number, oldStart: number, newStart: number) => boolean;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/expandCollapsedBlockBy.js#L159-L185 Source}) */
export function expandCollapsedBlockBy(
    hunks: HunkData,
    rawCodeOrLines: string | string[],
    predicate: ExpandCollapsedBlockByPredicate,
): HunkData[];

/** {@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/getChangeKey.js#L1-L15 Source}) */
export function getChangeKey(change: Change): number;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L13-L14 Source}) */
export interface ComputeNewLineNumberProps {
    isNormal: boolean;
    isDelete: boolean;
    lineNumber: number;
    newLineNumber: number;
}

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L13-L14 Source}) */
export function computeOldLineNumber(props: ComputeNewLineNumberProps): number;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L5 Source}) */
export interface ComputeOldLineNumberProps {
    isNormal: boolean;
    isInsert: boolean;
    lineNumber: number;
    oldLineNumber: number;
}

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L5 Source}) */
export function computeNewLineNumber(props: ComputeOldLineNumberProps): number;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L44-L57 Source}) */
export type FindChangeByLineNumber = (hunks: HunkData[], lineNumber: number) => Change;

export const findChangeByOldLineNumber: FindChangeByLineNumber;
export const findChangeByNewLineNumber: FindChangeByLineNumber;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L70-L131 Source}) */
export type GetCorrespondingLineNumber = (hunks: HunkData[], lineNumber: number) => number;

export const getCorrespondingOldLineNumber: GetCorrespondingLineNumber;
export const getCorrespondingNewLineNumber: GetCorrespondingLineNumber;
