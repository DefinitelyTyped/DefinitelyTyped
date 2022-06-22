import { Change } from "gitdiff-parser";
import { HunkData } from "../";

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/insertHunk.js#L61-L75 Source}) */
export declare const textLinesToHunk: (
    lines: string[],
    oldStartLineNumber: number,
    newStartLineNumber: number,
) => HunkData;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/insertHunk.js#L164-L184 Source}) */
export declare const insertHunk: (
    hunks: HunkData[],
    insertion: HunkData,
) => HunkData[];

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/expandCollapsedBlockBy.js#L124-L142 Source}) */
export declare const expandFromRawCode: (
    hunks: HunkData[],
    rawCodeOrLines: string | string[],
    start: number,
    end: number,
) => HunkData[];

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/expandCollapsedBlockBy.js#L144-L157 Source}) */
export declare const getCollapsedLinesCountBetween: (
    previousHunk: HunkData,
    nextHunk: HunkData,
) => number;

export type ExpandCollapsedBlockByPredicate = (
    lines: number,
    oldStart: number,
    newStart: number,
) => boolean;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/expandCollapsedBlockBy.js#L159-L185 Source}) */
export declare const expandCollapsedBlockBy: (
    hunks: HunkData,
    rawCodeOrLines: string | string[],
    predicate: ExpandCollapsedBlockByPredicate,
) => HunkData[];

/** {@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/getChangeKey.js#L1-L15 Source}) */
export declare const getChangeKey: (change: Change) => number;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L13-L14 Source}) */
export interface ComputeNewLineNumberProps {
    isNormal: boolean;
    isDelete: boolean;
    lineNumber: number;
    newLineNumber: number;
}

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L13-L14 Source}) */
export declare const computeOldLineNumber: (
    props: ComputeNewLineNumberProps,
) => number;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L5 Source}) */
export interface ComputeOldLineNumberProps {
    isNormal: boolean;
    isInsert: boolean;
    lineNumber: number;
    oldLineNumber: number;
}

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L5 Source}) */
export declare const computeNewLineNumber: (
    props: ComputeOldLineNumberProps,
) => number;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L44-L57 Source}) */
export type FindChangeByLineNumber = (
    hunks: HunkData[],
    lineNumber: number,
) => Change;

export declare const findChangeByOldLineNumber: FindChangeByLineNumber;
export declare const findChangeByNewLineNumber: FindChangeByLineNumber;

/** ({@link https://github.com/otakustay/react-diff-view/blob/v2.4.10/src/utils/diff/factory.js#L70-L131 Source}) */
export type GetCorrespondingLineNumber = (
    hunks: HunkData[],
    lineNumber: number,
) => number;

export declare const getCorrespondingOldLineNumber: GetCorrespondingLineNumber;
export declare const getCorrespondingNewLineNumber: GetCorrespondingLineNumber;
