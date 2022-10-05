// Type definitions for react-diff-view 2.4
// Project: https://github.com/otakustay/react-diff-view
// Definitions by: Ben Grynhaus <https://github.com/bengry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export function parseDiff(gitDiff: string, options?: { nearbySequences?: 'zip' }): File[];

export interface DiffProps {
    hunks: readonly HunkType[];
    widgets?: Record<string, React.ReactNode>;
    children?: (hunks: readonly HunkType[]) => React.ReactElement[];
    viewType: 'unified' | 'split';
    diffType: File['type'];
    className?: string;
    gutterType?: 'default' | 'none' | 'anchor';
    generateAnchorID?: (change: Change) => undefined | string;
    optimizeSelection?: boolean;
    selectedChanges?: readonly string[];
    renderToken?: (
        token: Token,
        defaultRender: (token: Token, key: string) => React.ReactElement,
        key: string,
    ) => React.ReactElement;
    renderGutter?: (props: {
        change: Change;
        side: 'old' | 'new';
        renderDefault: () => React.ReactElement;
        inHoverState: boolean;
        wrapInAnchor: (element: React.ReactElement) => React.ReactElement;
    }) => React.ReactElement;
}

export const Diff: React.FC<DiffProps>;

export interface Token {
    type: string;
    children?: readonly Token[];
}

export interface DecorationProps {
    children: string;
    className?: string;
    gutterClassName?: string;
    codeClassName?: string;
}

export const Decoration: React.FC<DecorationProps>;

export interface HunkProps {
    hunk: HunkType;
    className?: string;
    lineClassName?: string;
    gutterClassName?: string;
    codeClassName?: string;
}

export const Hunk: React.FC<HunkProps>;

export interface Change {
    content: string;
    type: 'insert' | 'delete' | 'normal';
    isInsert?: boolean;
    isDelete?: boolean;
    isNormal?: boolean;
    lineNumber?: number;
    oldLineNumber?: number;
    newLineNumber?: number;
}

export function getChangeKey(change: Change): string;

export interface HunkType {
    content?: string;
    oldStart: number;
    newStart: number;
    oldLines: number;
    newLines: number;
    changes?: readonly Change[];
}

export interface File {
    hunks: readonly HunkType[];
    oldEndingNewLine: boolean;
    newEndingNewLine: boolean;
    oldMode: string;
    newMode: string;
    similarity?: number;
    oldRevision: string;
    newRevision: string;
    oldPath: string;
    newPath: string;
    isBinary?: boolean;
    type: 'add' | 'delete' | 'modify' | 'rename' | 'copy';
}
